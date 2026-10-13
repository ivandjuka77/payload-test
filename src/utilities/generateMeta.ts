import type { Metadata } from 'next'

import type { Media, Page, Post, Config } from '../payload-types'

import { mergeOpenGraph, DEFAULT_OG_IMAGE_PATH } from './mergeOpenGraph'
import { getServerSideURL } from './getURL'

type TitledDoc = Partial<Page> & {
  name?: string | null
  // Plain text on products, categories, industries and services; rich text on careers
  description?: unknown
  technicalSpecifications?: { casNumber?: string | null } | null
}

const BRAND_SUFFIX = ' | VUP'

/**
 * Titles are, in order of precedence: the hand-written SEO title, a title
 * derived from the document (products and categories use `name`, and products
 * additionally expose their CAS number, which is what buyers search for), then
 * the brand alone. The brand is appended unless the title already names it.
 */
const buildTitle = (doc: TitledDoc): string => {
  const seoTitle = doc.meta?.title?.trim()

  let title = ''

  if (seoTitle) {
    title = seoTitle
  } else {
    const name = doc.name?.trim()
    const casNumber = doc.technicalSpecifications?.casNumber?.trim()

    if (name && casNumber) {
      title = `${name} | CAS ${casNumber}`
    } else if (name) {
      title = name
    } else {
      title = doc.title?.trim() || ''
    }
  }

  if (!title) return 'VUP, a.s'

  return /vup/i.test(title) ? title : `${title}${BRAND_SUFFIX}`
}

const MAX_DESCRIPTION_LENGTH = 160

/**
 * The hand-written SEO description wins. Documents without one (most products and
 * categories) fall back to their plain text `description`, trimmed to what search
 * results display, so every page has a unique description instead of none.
 */
const buildDescription = (doc: TitledDoc): string | undefined => {
  const seoDescription = doc.meta?.description?.trim()

  if (seoDescription) return seoDescription
  if (typeof doc.description !== 'string') return undefined

  const text = doc.description.replace(/\s+/g, ' ').trim()

  if (!text) return undefined
  if (text.length <= MAX_DESCRIPTION_LENGTH) return text

  const cut = text.slice(0, MAX_DESCRIPTION_LENGTH - 1)
  const lastSpace = cut.lastIndexOf(' ')

  return `${(lastSpace > 80 ? cut.slice(0, lastSpace) : cut).replace(/[\s,;:.-]+$/, '')}…`
}

const getImageURL = (image?: Media | Config['db']['defaultIDType'] | null) => {
  const serverUrl = getServerSideURL()
  const fallbackURL = `${serverUrl}${DEFAULT_OG_IMAGE_PATH}`

  if (!image || typeof image !== 'object' || !('url' in image)) {
    return fallbackURL
  }

  const imageURL = image.sizes?.og?.url || image.url

  if (!imageURL) {
    return fallbackURL
  }

  // Media stored on remote storage already has an absolute URL
  if (/^https?:\/\//i.test(imageURL)) {
    return imageURL
  }

  return `${serverUrl}${imageURL.startsWith('/') ? '' : '/'}${imageURL}`
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

  const title = buildTitle(doc)
  const description = buildDescription(doc)
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
    description,
    alternates: {
      canonical,
      languages,
    },
    openGraph: mergeOpenGraph({
      description: description || '',
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
