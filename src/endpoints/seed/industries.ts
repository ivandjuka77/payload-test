import type { Media } from '@/payload-types'

type IndustriesArgs = {
  heroImage: Media
  featuredImage: Media
}

export function industriesEn(args: IndustriesArgs) {
  const { heroImage, featuredImage } = args

  return {
    title: 'Industries',
    hero: {
      type: 'backgroundImage' as const,
      title: 'Industries We Serve',
      description:
        'At VUP, we develop, manufacture, and supply specialized chemical solutions that power innovation across diverse industries worldwide. Our deep expertise and commitment to quality enable our customers to create products that meet the highest performance, safety, and sustainability standards.',
      cta: {
        links: [],
      },
      media: heroImage,
      slides: [],
    },
    layout: [
      {
        blockName: null,
        title: 'Enabling Performance Across Markets',
        content: {
          root: {
            children: [
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'For over 70 years, VUP has been a trusted partner to industry-leading companies worldwide. Our specialized chemical expertise allows us to create tailored solutions that address the unique challenges and requirements of diverse markets.',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },
              {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Custom synthesis capabilities for specialized applications',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 1,
                  },
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Sustainable chemistry innovations to meet environmental goals',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 2,
                  },
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'High-purity products for demanding technical requirements',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 3,
                  },
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Reliable global supply chain with European manufacturing',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 4,
                  },
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Technical support from development to implementation',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 5,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'list',
                version: 1,
                listType: 'bullet',
                start: 1,
                tag: 'ul',
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            type: 'root',
            version: 1,
          },
        },
        image: featuredImage,
        blockType: 'contentImage',
      },
    ],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    slug: 'industries',
    _status: 'published' as const,
  }
}

export function industriesSk(args: IndustriesArgs) {
  const { heroImage, featuredImage } = args

  return {
    title: 'Odvetvia',
    hero: {
      type: 'backgroundImage' as const,
      title: 'Odvetvia, ktoré obsluhujeme',
      description:
        'V spoločnosti VUP vyvíjame, vyrábame a dodávame špecializované chemické riešenia, ktoré poháňajú inovácie v rôznych odvetviach po celom svete. Naša hlboká odbornosť a záväzok ku kvalite umožňujú našim zákazníkom vytvárať produkty, ktoré spĺňajú najvyššie štandardy výkonu, bezpečnosti a udržateľnosti.',
      cta: {
        links: [],
      },
      media: heroImage,
      slides: [],
    },
    layout: [
      {
        blockName: null,
        title: 'Umožňovanie výkonu na rôznych trhoch',
        content: {
          root: {
            children: [
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Už viac ako 70 rokov je VUP dôveryhodným partnerom pre popredné spoločnosti v odvetví po celom svete. Naša špecializovaná chemická odbornosť nám umožňuje vytvárať riešenia na mieru, ktoré riešia jedinečné výzvy a požiadavky rôznych trhov.',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },
              {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Možnosti zákazkovej syntézy pre špecializované aplikácie',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 1,
                  },
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Inovácie v udržateľnej chémii na splnenie environmentálnych cieľov',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 2,
                  },
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Vysoko čisté produkty pre náročné technické požiadavky',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 3,
                  },
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Spoľahlivý globálny dodávateľský reťazec s európskou výrobou',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 4,
                  },
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Technická podpora od vývoja až po implementáciu',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 5,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'list',
                version: 1,
                listType: 'bullet',
                start: 1,
                tag: 'ul',
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            type: 'root',
            version: 1,
          },
        },
        image: featuredImage,
        blockType: 'contentImage',
      },
    ],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    slug: 'industries',
    _status: 'published' as const,
  }
}

export function industriesJp(args: IndustriesArgs) {
  const { heroImage, featuredImage } = args

  return {
    title: '産業',
    hero: {
      type: 'backgroundImage' as const,
      title: '当社がサービスを提供する産業',
      description:
        'VUPでは、世界中の多様な産業でイノベーションを推進する特殊化学ソリューションを開発、製造、供給しています。当社の深い専門知識と品質へのコミットメントにより、お客様は最高の性能、安全性、持続可能性の基準を満たす製品を創造することができます。',
      cta: {
        links: [],
      },
      media: heroImage,
      slides: [],
    },
    layout: [
      {
        blockName: null,
        title: '市場全体のパフォーマンスを可能に',
        content: {
          root: {
            children: [
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: '70年以上にわたり、VUPは世界中の業界をリードする企業にとって信頼できるパートナーです。当社の特殊化学に関する専門知識により、多様な市場の独自の課題や要件に対応するオーダーメイドのソリューションを作成できます。',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },
              {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: '特殊用途向けのカスタム合成能力',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 1,
                  },
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: '環境目標を達成するための持続可能な化学イノベーション',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 2,
                  },
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: '厳しい技術要件に対応する高純度製品',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 3,
                  },
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'ヨーロッパでの製造による信頼性の高いグローバルサプライチェーン',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 4,
                  },
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: '開発から実装までの技術サポート',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 5,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'list',
                version: 1,
                listType: 'bullet',
                start: 1,
                tag: 'ul',
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            type: 'root',
            version: 1,
          },
        },
        image: featuredImage,
        blockType: 'contentImage',
      },
    ],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    slug: 'industries',
    _status: 'published' as const,
  }
}
