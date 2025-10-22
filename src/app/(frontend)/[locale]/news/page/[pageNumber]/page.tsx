import type { Metadata } from 'next/types'
import { ArticlesGrid } from '@/components/BlogFilter'
import { Pagination } from '@/components/Pagination'
import configPromise from '@/payload.config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'
import { notFound, redirect } from 'next/navigation'
import { Newsletter } from '@/components/Newsletter'

export const revalidate = 600

type Args = {
  params: Promise<{
    pageNumber: string
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const { pageNumber } = await paramsPromise
  const payload = await getPayload({ config: configPromise })

  const sanitizedPageNumber = Number(pageNumber)

  if (!Number.isInteger(sanitizedPageNumber)) notFound()

  // Redirect page 1 to /news to avoid duplicate content
  if (sanitizedPageNumber === 1) {
    redirect('/news')
  }

  const posts = await payload.find({
    collection: 'posts',
    depth: 3,
    limit: 9,
    page: sanitizedPageNumber,
    overrideAccess: false,
  })

  // Get all tags for filtering
  const allPostsData = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 0,
    overrideAccess: false,
  })

  const allTags = Array.from(
    new Set(
      allPostsData.docs.flatMap((post) => post.tags?.map((tag) => tag.tag).filter(Boolean) || []),
    ),
  ) as string[]

  return (
    <div>
      <PageClient />
      <section className="relative pb-20 pt-28 overflow-hidden bg-gradient-to-br from-primary/80 via-primary to-primary/50">
        <div className="container px-4 md:px-6 py-8">
          <div className="flex flex-col items-center text-center space-y-8">
            <h1 className="text-4xl !text-white md:text-5xl lg:text-6xl font-bold tracking-tighter font-primary max-w-3xl">
              Latest News, Insights & Research from VUP
            </h1>

            <p className="text-xl text-white text-muted-foreground max-w-2xl font-secondary">
              Stay informed about our latest innovations, research breakthroughs, and industry
              insights in sustainable chemistry.
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl opacity-30 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl" />
        </div>
      </section>

      <ArticlesGrid articles={posts.docs} allTags={allTags} showFilters={false} />

      <div className="container mb-8">
        {posts?.page && posts?.totalPages > 1 && (
          <Pagination page={posts.page} totalPages={posts.totalPages} />
        )}
      </div>

      <Newsletter />
    </div>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { pageNumber } = await paramsPromise
  return {
    title: `VUP Posts Page ${pageNumber || ''}`,
  }
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const { totalDocs } = await payload.count({
    collection: 'posts',
    overrideAccess: false,
  })

  const totalPages = Math.ceil(totalDocs / 9)

  const pages: { pageNumber: string }[] = []

  // Start from page 2 since page 1 is handled by /news
  for (let i = 2; i <= totalPages; i++) {
    pages.push({ pageNumber: String(i) })
  }

  return pages
}
