import { Industry, Service } from '@/payload-types'
import { draftMode } from 'next/headers'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import { unstable_cache } from 'next/cache'

export async function queryIndustries({
  limit = 100,
  locale = 'en',
}: {
  limit?: number
  locale?: 'en' | 'sk' | 'jp' | 'all'
}) {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'industries',
    draft,
    limit: limit || 100,
    pagination: false,
    overrideAccess: draft,
    locale,
  })

  return result.docs as Industry[]
}

export async function queryServices({
  limit = 100,
  locale = 'en',
}: {
  limit?: number
  locale?: 'en' | 'sk' | 'jp' | 'all'
}) {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'services',
    draft,
    limit: limit || 100,
    pagination: false,
    overrideAccess: draft,
    locale,
  })

  return result.docs as Service[]
}

/**
 * Cached query to fetch all unique post tags.
 * Avoids fetching all posts with limit:0 on every news page load.
 */
export const getCachedPostTags = unstable_cache(
  async () => {
    const payload = await getPayload({ config: configPromise })

    const allPostsData = await payload.find({
      collection: 'posts',
      depth: 0,
      limit: 0,
      overrideAccess: false,
      select: {
        tags: true,
      },
    })

    const allTags = Array.from(
      new Set(
        allPostsData.docs.flatMap((post) => post.tags?.map((tag) => tag.tag).filter(Boolean) || []),
      ),
    ) as string[]

    return allTags
  },
  ['post-tags'],
  { revalidate: 3600, tags: ['post-tags'] },
)
