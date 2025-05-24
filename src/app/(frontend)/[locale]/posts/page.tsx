import type { Metadata } from 'next/types'

import { ArticlesGrid } from '@/components/BlogFilter'
import configPromise from '@/payload.config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const postsData = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 0,
    overrideAccess: false,
  })

  const allPosts = postsData.docs

  const allTags = Array.from(
    new Set(allPosts.flatMap((post) => post.tags?.map((tag) => tag.tag).filter(Boolean) || [])),
  ) as string[]

  return (
    <div className="pt-24 pb-24">
      <PageClient />
      <div className="container mb-16">
        <div className="prose dark:prose-invert max-w-none">
          <h1>Posts</h1>
        </div>
      </div>

      <ArticlesGrid articles={allPosts} allTags={allTags} />
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Payload Website Template Posts`,
  }
}
