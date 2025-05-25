import type { Metadata } from 'next/types'
import { ArticlesGrid } from '@/components/BlogFilter'
import configPromise from '@/payload.config'
import { getPayload } from 'payload'
import PageClient from './page.client'
import { Newsletter } from '@/components/Newsletter'
import { Pagination } from '@/components/Pagination'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  // Get first page of posts (page 1)
  const posts = await payload.find({
    collection: 'posts',
    depth: 3,
    limit: 9,
    page: 1,
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

export function generateMetadata(): Metadata {
  return {
    title: `Payload Website Template Posts`,
  }
}
