import type { CollectionAfterChangeHook, CollectionAfterDeleteHook, Payload } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { Post } from '../../../payload-types'
import { routing } from '../../../i18n/routing'

const NEWS_PAGE_SIZE = 9

const newsPath = (locale: string, subPath = '') => {
  // localePrefix: 'as-needed' - the default locale has no URL prefix
  const prefix = locale === routing.defaultLocale ? '' : `/${locale}`

  return `${prefix}/news${subPath}`
}

/**
 * Invalidates every cached news route that a post change can affect: the
 * listing, its paginated pages and the post detail pages, for every locale.
 *
 * The listing routes are statically rendered (`revalidate = 3600`), so without
 * this they would keep serving a stale article list for up to an hour.
 */
const revalidateNews = async (
  payload: Payload,
  slugs: (string | null | undefined)[] = [],
) => {
  // keep in sync with the `limit` used by the news listing pages
  const { totalDocs } = await payload.count({ collection: 'posts', overrideAccess: true })
  const totalPages = Math.ceil(totalDocs / NEWS_PAGE_SIZE)

  routing.locales.forEach((locale) => {
    revalidatePath(newsPath(locale))

    // Localized routes are not reliably matched by revalidatePath's dynamic
    // patterns, so revalidate each pre-rendered page by its concrete URL.
    for (let pageNumber = 2; pageNumber <= totalPages; pageNumber++) {
      revalidatePath(newsPath(locale, `/page/${pageNumber}`))
    }

    slugs
      .filter((slug): slug is string => Boolean(slug))
      .forEach((slug) => revalidatePath(newsPath(locale, `/${slug}`)))
  })

  revalidateTag('posts-sitemap')
  // Backs getCachedPostTags() in src/utilities/queries.ts
  revalidateTag('post-tags')
}

export const revalidatePost: CollectionAfterChangeHook<Post> = async ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (context.disableRevalidate) return doc

  if (doc._status === 'published') {
    payload.logger.info(`Revalidating post at path: /news/${doc.slug}`)

    await revalidateNews(payload, [doc.slug])
  }

  // If the post was previously published, we need to revalidate the old path
  if (previousDoc._status === 'published' && doc._status !== 'published') {
    payload.logger.info(`Revalidating old post at path: /news/${previousDoc.slug}`)

    await revalidateNews(payload, [previousDoc.slug])
  }

  // A renamed published post leaves its previous URL cached
  if (previousDoc._status === 'published' && previousDoc.slug && previousDoc.slug !== doc.slug) {
    await revalidateNews(payload, [previousDoc.slug])
  }

  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Post> = async ({
  doc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    await revalidateNews(payload, [doc?.slug])
  }

  return doc
}
