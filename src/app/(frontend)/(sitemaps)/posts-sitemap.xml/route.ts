import { getServerSideSitemap } from 'next-sitemap'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { unstable_cache } from 'next/cache'

const getPostsSitemap = unstable_cache(
  async () => {
    const payload = await getPayload({ config })
    const SITE_URL = 'https://www.vupinternational.com'

    const locales = ['en', 'sk', 'jp']
    const dateFallback = new Date().toISOString()

    // Helper function to generate URLs with locale prefix
    const generateUrl = (path: string, locale: string): string => {
      if (locale === 'en') {
        // Default locale doesn't need prefix
        return `${SITE_URL}${path}`
      }
      return `${SITE_URL}/${locale}${path}`
    }

    const posts = await payload.find({
      collection: 'posts',
      overrideAccess: false,
      draft: false,
      depth: 0,
      limit: 1000,
      pagination: false,
      where: {
        _status: {
          equals: 'published',
        },
      },
      select: {
        slug: true,
        updatedAt: true,
      },
    })

    const sitemap: Array<{ loc: string; lastmod: string }> = []

    if (posts.docs) {
      posts.docs
        .filter((post) => Boolean(post?.slug))
        .forEach((post) => {
          locales.forEach((locale) => {
            sitemap.push({
              loc: generateUrl(`/news/${post.slug}`, locale),
              lastmod: post.updatedAt || dateFallback,
            })
          })
        })
    }

    return sitemap
  },
  ['posts-sitemap'],
  {
    tags: ['posts-sitemap'],
  },
)

export async function GET() {
  const sitemap = await getPostsSitemap()

  return getServerSideSitemap(sitemap)
}
