import type { Metadata } from 'next'

import type { Media, Page, Post, Config } from '../payload-types'

import { mergeOpenGraph } from './mergeOpenGraph'
import { getServerSideURL } from './getURL'

const getImageURL = (image?: Media | Config['db']['defaultIDType'] | null) => {
  const serverUrl = getServerSideURL()

  let url = serverUrl + '/website-template-OG.webp'

  if (image && typeof image === 'object' && 'url' in image) {
    const ogUrl = image.sizes?.og?.url

    url = ogUrl ? serverUrl + ogUrl : serverUrl + image.url
  }

  return url
}

export const generateMeta = async (args: {
  doc: Partial<Page> | Partial<Post> | null
  locale?: string
  pathPrefix?: string
}): Promise<Metadata> => {
  const { doc, locale, pathPrefix } = args

  if (!doc) {
    return {
      description: '',
      alternates: {
        canonical: '',
      },
    }
  }

  const ogImage = getImageURL(doc?.meta?.image)

  let title = ''

  if ('name' in doc && doc?.name) {
    title = doc.name + ' | VUP '
  } else if (doc?.title) {
    title = doc?.meta?.title
      ? doc?.meta?.title + ' | VUP '
      : doc?.title
        ? doc?.title + ' | VUP '
        : 'VUP '
  }
  // Generate canonical URL
  const serverUrl = getServerSideURL()
  let canonicalPath = ''

  if (pathPrefix) {
    // For dynamic routes like products, categories, etc.
    canonicalPath = pathPrefix
  } else if (doc?.slug) {
    // For regular pages
    const slug = Array.isArray(doc.slug) ? doc.slug.join('/') : doc.slug
    canonicalPath = slug === 'home' ? '' : `/${slug}`
  }

  // Add locale prefix for non-English languages
  const localePrefix = locale && locale !== 'en' ? `/${locale}` : ''
  const canonical = `${serverUrl}${localePrefix}${canonicalPath}`

  // Generate language alternates
  const languages: Record<string, string> = {
    en: `${serverUrl}${canonicalPath}`,
    sk: `${serverUrl}/sk${canonicalPath}`,
    ja: `${serverUrl}/jp${canonicalPath}`, // Using 'ja' for Japanese (ISO 639-1 standard)
    'x-default': `${serverUrl}${canonicalPath}`, // Default to English
  }

  return {
    description: doc?.meta?.description,
    alternates: {
      canonical,
      languages,
    },
    openGraph: mergeOpenGraph({
      description: doc?.meta?.description || '',
      images: ogImage
        ? [
            {
              url: ogImage,
            },
          ]
        : undefined,
      title,
      url: canonical,
      locale: locale === 'sk' ? 'sk_SK' : locale === 'jp' ? 'ja_JP' : 'en_US',
    }),
    title,
  }
}
