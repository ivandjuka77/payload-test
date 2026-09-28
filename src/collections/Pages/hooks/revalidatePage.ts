import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { Page } from '../../../payload-types'
import { routing } from '../../../i18n/routing'

/**
 * Resolves the URL a page is served at. The `home` slug is rendered by the
 * locale root route, and `localePrefix: 'as-needed'` means the default locale
 * has no URL prefix.
 */
const pagePath = (locale: string, slug?: string | null) => {
  const prefix = locale === routing.defaultLocale ? '' : `/${locale}`

  if (!slug || slug === 'home') return prefix || '/'

  return `${prefix}/${slug}`
}

/**
 * Page routes are statically rendered (`revalidate = 43200`), so every locale
 * needs to be invalidated explicitly - `revalidatePath` does not match
 * unprefixed paths against a `[locale]` route segment.
 */
const revalidatePages = (slugs: (string | null | undefined)[]) => {
  const uniqueSlugs = [...new Set(slugs.filter((slug): slug is string => Boolean(slug)))]

  routing.locales.forEach((locale) => {
    uniqueSlugs.forEach((slug) => revalidatePath(pagePath(locale, slug)))
  })

  revalidateTag('pages-sitemap')
}

export const revalidatePage: CollectionAfterChangeHook<Page> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (context.disableRevalidate) return doc

  if (doc._status === 'published') {
    payload.logger.info(`Revalidating page at path: ${pagePath(routing.defaultLocale, doc.slug)}`)

    revalidatePages([doc.slug])
  }

  // If the page was previously published, we need to revalidate the old path
  if (previousDoc?._status === 'published' && doc._status !== 'published') {
    payload.logger.info(
      `Revalidating old page at path: ${pagePath(routing.defaultLocale, previousDoc.slug)}`,
    )

    revalidatePages([previousDoc.slug])
  }

  // A renamed published page leaves its previous URL cached
  if (previousDoc?._status === 'published' && previousDoc.slug && previousDoc.slug !== doc.slug) {
    revalidatePages([previousDoc.slug])
  }

  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Page> = ({ doc, req: { context } }) => {
  if (!context.disableRevalidate) {
    revalidatePages([doc?.slug])
  }

  return doc
}
