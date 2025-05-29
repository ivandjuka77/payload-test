import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'

export async function POST(request: NextRequest) {
  try {
    const { query } = await request.json()

    if (!query || typeof query !== 'string' || query.trim() === '') {
      return NextResponse.json({ docs: [], totalDocs: 0 })
    }

    const payload = await getPayload({ config: configPromise })

    const searchResults = await payload.find({
      collection: 'search',
      depth: 1,
      limit: 12,
      select: {
        title: true,
        slug: true,
        categories: true,
        meta: true,
        description: true,
        doc: true,
      },
      pagination: false,
      where: {
        or: [
          {
            title: {
              like: query,
            },
          },
          {
            'meta.description': {
              like: query,
            },
          },
          {
            'meta.title': {
              like: query,
            },
          },
          {
            slug: {
              like: query,
            },
          },
          {
            description: {
              like: query,
            },
          },
        ],
      },
      sort: 'priority',
    })

    return NextResponse.json({
      docs: searchResults.docs,
      totalDocs: searchResults.totalDocs,
    })
  } catch (error) {
    console.error('Search API error:', error)
    return NextResponse.json({ error: 'Failed to perform search' }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('q')

  if (!query || query.trim() === '') {
    return NextResponse.json({ docs: [], totalDocs: 0 })
  }

  try {
    const payload = await getPayload({ config: configPromise })

    const searchResults = await payload.find({
      collection: 'search',
      depth: 1,
      limit: 12,
      select: {
        title: true,
        slug: true,
        categories: true,
        meta: true,
        description: true,
        doc: true,
      },
      pagination: false,
      where: {
        or: [
          {
            title: {
              like: query,
            },
          },
          {
            'meta.description': {
              like: query,
            },
          },
          {
            'meta.title': {
              like: query,
            },
          },
          {
            slug: {
              like: query,
            },
          },
          {
            description: {
              like: query,
            },
          },
        ],
      },
    })

    return NextResponse.json({
      docs: searchResults.docs,
      totalDocs: searchResults.totalDocs,
    })
  } catch (error) {
    console.error('Search API error:', error)
    return NextResponse.json({ error: 'Failed to perform search' }, { status: 500 })
  }
}
