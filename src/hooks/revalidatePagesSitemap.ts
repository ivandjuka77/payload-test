import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidateTag } from 'next/cache'

/**
 * pages-sitemap.xml is cached with `unstable_cache` and no TTL, so it only
 * refreshes when its tag is invalidated. It lists products, product categories,
 * industries, services and careers alongside pages, so those collections have to
 * invalidate it too - otherwise a newly published product never reaches the
 * sitemap until somebody happens to edit a page.
 */
export const revalidatePagesSitemap: CollectionAfterChangeHook = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (context.disableRevalidate) return doc

  // Collections with drafts only affect the sitemap when they are published,
  // or when a previously published document is taken back down.
  const isPublished = doc?._status === 'published'
  const wasPublished = previousDoc?._status === 'published'

  if (!('_status' in (doc || {})) || isPublished || wasPublished) {
    payload.logger.info('Revalidating pages-sitemap after collection change')

    revalidateTag('pages-sitemap')
  }

  return doc
}

export const revalidatePagesSitemapDelete: CollectionAfterDeleteHook = ({
  doc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    payload.logger.info('Revalidating pages-sitemap after collection delete')

    revalidateTag('pages-sitemap')
  }

  return doc
}
