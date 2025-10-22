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
      description:
        'Discover our comprehensive range of specialty chemicals designed to meet the evolving needs of modern industries. From innovative hydroxy acids to advanced hindered amines, our products deliver exceptional performance and reliability across diverse applications.',
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
      title: 'Specialty Chemical Products | VUP Chemical Solutions',
      image: null,
      description:
        'Discover our comprehensive range of specialty chemicals designed to meet the evolving needs of modern industries. From innovative hydroxy acids to advanced hindered amines.',
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
      description:
        'Objavte náš komplexný sortiment špeciálnych chemických produktov navrhnutých tak, aby spĺňali vyvíjajúce sa potreby moderných priemyselných odvetví. Od inovatívnych hydroxykyselín až po pokročilé stericky bránené amíny, naše produkty poskytujú výnimočný výkon a spoľahlivosť v rôznych aplikáciách.',
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
      title: 'Špeciálne chemické produkty | VUP Chemické Riešenia',
      image: null,
      description:
        'Objavte náš komplexný sortiment špeciálnych chemických produktov navrhnutých tak, aby spĺňali vyvíjajúce sa potreby moderných priemyselných odvetví.',
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
      description:
        '現代産業の進化するニーズに応えるために設計された、当社の包括的な特殊化学製品ラインナップをご覧ください。革新的なヒドロキシ酸から先進的な立体障害アミンまで、当社の製品は多様な用途において卓越した性能と信頼性を提供します。',
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
      title: '特殊化学製品 | VUPケミカルソリューションズ',
      image: null,
      description:
        '現代産業の進化するニーズに応えるために設計された、当社の包括的な特殊化学製品ラインナップをご覧ください。',
    },
    slug: 'products',
    _status: 'published' as const,
  }
}
