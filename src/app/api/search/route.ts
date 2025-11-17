import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'

/**
 * Sanitizes search query by removing common prefixes like "CAS:", "EC number:", etc.
 */
function sanitizeQuery(query: string): string {
  let cleaned = query.trim()

  // Remove common prefixes (case insensitive)
  const prefixPatterns = [
    /^cas\s*number\s*:?\s*/i,
    /^cas\s*:?\s*/i,
    /^ec\s*number\s*:?\s*/i,
    /^ec\s*:?\s*/i,
    /^number\s*:?\s*/i,
  ]

  for (const pattern of prefixPatterns) {
    cleaned = cleaned.replace(pattern, '')
  }

  return cleaned.trim()
}

export async function POST(request: NextRequest) {
  try {
    const { query, locale } = await request.json()

    if (!query || typeof query !== 'string' || query.trim() === '') {
      return NextResponse.json({ docs: [], totalDocs: 0 })
    }

    // Sanitize the query to remove common prefixes
    const sanitizedQuery = sanitizeQuery(query)

    const payload = await getPayload({ config: configPromise })

    const searchResults = await payload.find({
      collection: 'search',
      depth: 1,
      limit: 12,
      locale,
      select: {
        title: true,
        slug: true,
        categories: true,
        meta: true,
        description: true,
        doc: true,
        casNumber: true,
        ecNumber: true,
      },
      pagination: false,
      where: {
        or: [
          {
            title: {
              like: sanitizedQuery,
            },
          },
          {
            'meta.description': {
              like: sanitizedQuery,
            },
          },
          {
            'meta.title': {
              like: sanitizedQuery,
            },
          },
          {
            slug: {
              like: sanitizedQuery,
            },
          },
          {
            description: {
              like: sanitizedQuery,
            },
          },
          {
            casNumber: {
              like: sanitizedQuery,
            },
          },
          {
            ecNumber: {
              like: sanitizedQuery,
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

  // Sanitize the query to remove common prefixes
  const sanitizedQuery = sanitizeQuery(query)

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
        casNumber: true,
        ecNumber: true,
      },
      pagination: false,
      where: {
        or: [
          {
            title: {
              like: sanitizedQuery,
            },
          },
          {
            'meta.description': {
              like: sanitizedQuery,
            },
          },
          {
            'meta.title': {
              like: sanitizedQuery,
            },
          },
          {
            slug: {
              like: sanitizedQuery,
            },
          },
          {
            description: {
              like: sanitizedQuery,
            },
          },
          {
            casNumber: {
              like: sanitizedQuery,
            },
          },
          {
            ecNumber: {
              like: sanitizedQuery,
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
