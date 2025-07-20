import { getServerSideSitemap } from 'next-sitemap'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { unstable_cache } from 'next/cache'

const getPagesSitemap = unstable_cache(
  async () => {
    const payload = await getPayload({ config })
    const SITE_URL =
      process.env.NEXT_PUBLIC_SERVER_URL ||
      process.env.VERCEL_PROJECT_PRODUCTION_URL ||
      'https://example.com'

    const locales = ['en', 'sk', 'jp']
    const dateFallback = new Date().toISOString()

    // Helper function to generate URLs with locale prefix
    const generateUrl = (path: string, locale: string): string => {
      if (locale === 'en') {
        // Default locale doesn't need prefix
        return `${SITE_URL}${path === '/' ? '' : path}`
      }
      return `${SITE_URL}/${locale}${path === '/' ? '' : path}`
    }

    const sitemap: Array<{ loc: string; lastmod: string }> = []

    // Static pages for each locale
    const staticPages = ['/search', '/news', '/products', '/industries', '/services', '/career']

    staticPages.forEach((page) => {
      locales.forEach((locale) => {
        sitemap.push({
          loc: generateUrl(page, locale),
          lastmod: dateFallback,
        })
      })
    })

    // Pages collection (already included but updated for locales)
    const pages = await payload.find({
      collection: 'pages',
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

    if (pages.docs) {
      pages.docs
        .filter((page) => Boolean(page?.slug))
        .forEach((page) => {
          locales.forEach((locale) => {
            const path = page?.slug === 'home' ? '/' : `/${page?.slug}`
            sitemap.push({
              loc: generateUrl(path, locale),
              lastmod: page.updatedAt || dateFallback,
            })
          })
        })
    }

    // Products collection (/products/[slug])
    const products = await payload.find({
      collection: 'products',
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

    if (products.docs) {
      products.docs
        .filter((product) => Boolean(product?.slug))
        .forEach((product) => {
          locales.forEach((locale) => {
            sitemap.push({
              loc: generateUrl(`/products/${product.slug}`, locale),
              lastmod: product.updatedAt || dateFallback,
            })
          })
        })
    }

    // Product Categories collection (/products/category/[slug])
    // Note: ProductCategories doesn't have drafts/versions, so no _status field
    const productCategories = await payload.find({
      collection: 'productCategories',
      overrideAccess: false,
      depth: 0,
      limit: 1000,
      pagination: false,
      select: {
        slug: true,
        updatedAt: true,
      },
    })

    if (productCategories.docs) {
      productCategories.docs
        .filter((category) => Boolean(category?.slug))
        .forEach((category) => {
          locales.forEach((locale) => {
            sitemap.push({
              loc: generateUrl(`/products/category/${category.slug}`, locale),
              lastmod: category.updatedAt || dateFallback,
            })
          })
        })
    }

    // Industries collection (/industries/[slug])
    const industries = await payload.find({
      collection: 'industries',
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

    if (industries.docs) {
      industries.docs
        .filter((industry) => Boolean(industry?.slug))
        .forEach((industry) => {
          locales.forEach((locale) => {
            sitemap.push({
              loc: generateUrl(`/industries/${industry.slug}`, locale),
              lastmod: industry.updatedAt || dateFallback,
            })
          })
        })
    }

    // Services collection (/services/[slug])
    const services = await payload.find({
      collection: 'services',
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

    if (services.docs) {
      services.docs
        .filter((service) => Boolean(service?.slug))
        .forEach((service) => {
          locales.forEach((locale) => {
            sitemap.push({
              loc: generateUrl(`/services/${service.slug}`, locale),
              lastmod: service.updatedAt || dateFallback,
            })
          })
        })
    }

    // Careers collection (/career/[slug])
    const careers = await payload.find({
      collection: 'careers',
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

    if (careers.docs) {
      careers.docs
        .filter((career) => Boolean(career?.slug))
        .forEach((career) => {
          locales.forEach((locale) => {
            sitemap.push({
              loc: generateUrl(`/career/${career.slug}`, locale),
              lastmod: career.updatedAt || dateFallback,
            })
          })
        })
    }

    return sitemap
  },
  ['pages-sitemap'],
  {
    tags: ['pages-sitemap'],
  },
)

export async function GET() {
  const sitemap = await getPagesSitemap()

  return getServerSideSitemap(sitemap)
}
