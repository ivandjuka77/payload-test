import type { Media } from '@/payload-types'

type ResearchProductsArgs = {
  heroImage: Media
  products: {
    id: number
  }[]
}

export function researchProductsEn(args: ResearchProductsArgs) {
  const { heroImage, products } = args

  return {
    title: 'Research Products',
    hero: {
      type: 'backgroundImage' as const,
      title: 'Research Products',
      description:
        'Explore our specialized range of high-purity chemical products designed for research and development. Our portfolio includes advanced intermediates, specialty chemicals, and custom synthesis solutions that meet the rigorous demands of modern scientific research.',
      cta: {
        links: [],
      },
      media: heroImage,
      slides: [],
    },
    layout: [
      {
        blockName: null,
        blockType: 'productTable',
        title: 'Featured Research Products',
        description:
          'Browse our selection of premium chemical products specifically developed for research applications. Each product meets stringent quality standards and is backed by comprehensive technical documentation.',
        products: products.map((product) => ({
          product: product.id,
        })),
      },
    ],
    meta: {
      title: 'Research Products | VUP Chemical Solutions',
      image: null,
      description:
        'Explore our specialized range of high-purity chemical products designed for research and development. Advanced intermediates, specialty chemicals, and custom synthesis solutions.',
    },
    slug: 'research-products',
    _status: 'published' as const,
  }
}

export function researchProductsSk(args: ResearchProductsArgs) {
  const { heroImage, products } = args

  return {
    title: 'Výskumné produkty',
    hero: {
      type: 'backgroundImage' as const,
      title: 'Výskumné produkty',
      description:
        'Preskúmajte náš špecializovaný sortiment vysoko čistých chemických produktov určených pre výskum a vývoj. Naše portfólio zahŕňa pokročilé medziprodukty, špeciálne chemikálie a riešenia na zákazkovú syntézu, ktoré spĺňajú prísné požiadavky moderného vedeckého výskumu.',
      cta: {
        links: [],
      },
      media: heroImage,
      slides: [],
    },
    layout: [
      {
        blockName: null,
        blockType: 'productTable',
        title: 'Vybrané výskumné produkty',
        description:
          'Prezrite si náš výber prémiových chemických produktov špeciálne vyvinutých pre výskumné aplikácie. Každý produkt spĺňa prísne štandardy kvality a je podporený komplexnou technickou dokumentáciou.',
        products: products.map((product) => ({
          product: product.id,
        })),
      },
    ],
    meta: {
      title: 'Výskumné produkty | VUP Chemické Riešenia',
      image: null,
      description:
        'Preskúmajte náš špecializovaný sortiment vysoko čistých chemických produktov určených pre výskum a vývoj. Pokročilé medziprodukty, špeciálne chemikálie a riešenia na zákazkovú syntézu.',
    },
    slug: 'research-products',
    _status: 'published' as const,
  }
}

export function researchProductsJp(args: ResearchProductsArgs) {
  const { heroImage, products } = args

  return {
    title: '研究用製品',
    hero: {
      type: 'backgroundImage' as const,
      title: '研究用製品',
      description:
        '研究開発用に設計された高純度化学製品の特殊範囲をご覧ください。当社のポートフォリオには、現代の科学研究の厳しい要求を満たす高度な中間体、特殊化学品、カスタム合成ソリューションが含まれています。',
      cta: {
        links: [],
      },
      media: heroImage,
      slides: [],
    },
    layout: [
      {
        blockName: null,
        blockType: 'productTable',
        title: '注目の研究用製品',
        description:
          '研究用途向けに特別に開発されたプレミアム化学製品のセレクションをご覧ください。各製品は厳格な品質基準を満たし、包括的な技術文書によってサポートされています。',
        products: products.map((product) => ({
          product: product.id,
        })),
      },
    ],
    meta: {
      title: '研究用製品 | VUPケミカルソリューションズ',
      image: null,
      description:
        '研究開発用に設計された高純度化学製品の特殊範囲をご覧ください。高度な中間体、特殊化学品、カスタム合成ソリューション。',
    },
    slug: 'research-products',
    _status: 'published' as const,
  }
}
