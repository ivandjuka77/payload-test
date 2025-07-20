import type { Media } from '@/payload-types'

type ProductsArgs = {
  featuredImage1: Media
}

export function productsEn(args: ProductsArgs) {
  const { featuredImage1 } = args

  return {
    title: 'Products',
    hero: {
      type: 'backgroundImage' as const,
      title: 'Products',
      description: 'Products',
      cta: {
        links: [],
      },
      media: featuredImage1,
      slides: [],
    },
    layout: [
      {
        blockName: null,
        title: 'Product Catalog',
        description: 'Explore our products by category, industry, and application.',
        showCta: false,
        enabledFilters: ['category', 'industry', 'application'],
        blockType: 'productFilter',
        cta: {
          title: null,
          description: null,
          links: [],
        },
      },
    ],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    slug: 'products',
    _status: 'published' as const,
  }
}

export function productsSk(args: ProductsArgs) {
  const { featuredImage1 } = args

  return {
    title: 'Produkty',
    hero: {
      type: 'backgroundImage' as const,
      title: 'Produkty',
      description: 'Preskúmajte náš sortiment špeciálnych chemických produktov.',
      cta: {
        links: [],
      },
      media: featuredImage1,
      slides: [],
    },
    layout: [
      {
        blockName: null,
        title: 'Katalóg produktov',
        description: 'Preskúmajte naše produkty podľa kategórie, odvetvia a aplikácie.',
        showCta: false,
        enabledFilters: ['category', 'industry', 'application'],
        blockType: 'productFilter',
        cta: {
          title: null,
          description: null,
          links: [],
        },
      },
    ],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    slug: 'products',
    _status: 'published' as const,
  }
}

export function productsJp(args: ProductsArgs) {
  const { featuredImage1 } = args

  return {
    title: '製品',
    hero: {
      type: 'backgroundImage' as const,
      title: '製品',
      description: '当社の特殊化学製品のラインナップをご覧ください。',
      cta: {
        links: [],
      },
      media: featuredImage1,
      slides: [],
    },
    layout: [
      {
        blockName: null,
        title: '製品カタログ',
        description: 'カテゴリ、産業、用途別に製品を検索してください。',
        showCta: false,
        enabledFilters: ['category', 'industry', 'application'],
        blockType: 'productFilter',
        cta: {
          title: null,
          description: null,
          links: [],
        },
      },
    ],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    slug: 'products',
    _status: 'published' as const,
  }
}
