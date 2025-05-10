import type { Media } from '@/payload-types'

type ProductsArgs = {
  featuredImage1: Media
}

export function products(args: ProductsArgs) {
  const { featuredImage1 } = args

  return {
    title: 'Products',
    hero: {
      type: 'backgroundImage',
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
    _status: 'published',
  }
}
