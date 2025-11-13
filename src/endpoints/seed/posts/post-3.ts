import type { Media, User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  featuredImage: Media
  contentImage: Media
  author: User
}

export const post3En: (args: PostArgs) => RequiredDataFromCollectionSlug<'posts'> = ({
  featuredImage,
  contentImage,
  author,
}) => {
  return {
    title: 'Advances in Electrochemical Energy Storage',
    type: 'research',
    featured: true,
    description:
      'New electrolyte formulation dramatically improves battery performance and longevity while reducing environmental impact',
    featuredImage: featuredImage.id,
    author: author,
    content: {
      root: {
        type: 'root',
        children: [
          {
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Transforming Energy Storage Through Advanced Chemistry',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h2',
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Our laboratory has successfully developed a novel electrolyte composition that addresses key challenges in battery technology. This breakthrough offers significant improvements in charging speed, capacity retention, and overall battery lifespan.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
          {
            type: 'block',
            fields: {
              blockName: 'Performance Metrics',
              blockType: 'banner',
              content: {
                root: {
                  type: 'root',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          detail: 0,
                          format: 1,
                          mode: 'normal',
                          style: '',
                          text: 'Key Achievements:',
                          version: 1,
                        },
                        {
                          type: 'text',
                          detail: 0,
                          format: 0,
                          mode: 'normal',
                          style: '',
                          text: ' 60% faster charging, 30% higher energy density, and 2x longer cycle life compared to conventional electrolytes.',
                          version: 1,
                        },
                      ],
                      direction: 'ltr',
                      format: '',
                      indent: 0,
                      textFormat: 0,
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  version: 1,
                },
              },
              style: 'info',
            },
            format: '',
            version: 2,
          },
          {
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Chemical Innovation',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h2',
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'The new electrolyte formulation combines advanced ionic liquids with specially designed additives that create a stable solid-electrolyte interphase. This unique composition prevents dendrite formation and reduces unwanted side reactions, leading to significantly improved battery performance.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
          {
            type: 'block',
            fields: {
              blockName: '',
              blockType: 'mediaBlock',
              media: contentImage.id,
            },
            format: '',
            version: 2,
          },
          {
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Sustainability Benefits',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h2',
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'The improved longevity and efficiency of batteries using this electrolyte formulation significantly reduce electronic waste and resource consumption. Additionally, the new formulation is more environmentally friendly, using sustainable and less toxic components than traditional electrolytes.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    tags: [
      { tag: 'Battery Technology' },
      { tag: 'Electrochemistry' },
      { tag: 'Sustainable Energy' },
    ],
    meta: {
      title: 'Breakthrough in Battery Electrolyte Technology',
      description:
        'New electrolyte formulation dramatically improves battery performance and longevity while reducing environmental impact',
      image: featuredImage.id,
    },
    publishedAt: '2024-01-15T12:00:00.000Z',
    slug: 'battery-electrolyte-breakthrough',
    _status: 'published',
  }
}

export const post3Sk: (args: PostArgs) => RequiredDataFromCollectionSlug<'posts'> = ({
  featuredImage,
  contentImage,
  author,
}) => {
  return {
    title: 'Pokroky v elektrochem ickom skladovaní energie',
    type: 'research',
    featured: true,
    description:
      'Nová formulácia elektrolytu dramaticky zlepšuje výkon a životnosť batérií pri znížení vplyvu na životné prostredie',
    featuredImage: featuredImage.id,
    author: author,
    content: {
      root: {
        type: 'root',
        children: [
          {
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Transformácia skladovania energie prostredníctvom pokročilej chémie',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h2',
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Naše laboratórium úspešne vyvinulo novú zloženie elektrolytu, ktoré rieši kľúčové výzvy v technológii batérií. Tento prelom ponúka významné zlepšenia v rýchlosti nabíjania, udržaní kapacity a celkovej životnosti batérie.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
          {
            type: 'block',
            fields: {
              blockName: 'Metriky výkonu',
              blockType: 'banner',
              content: {
                root: {
                  type: 'root',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          detail: 0,
                          format: 1,
                          mode: 'normal',
                          style: '',
                          text: 'Kľúčové úspechy:',
                          version: 1,
                        },
                        {
                          type: 'text',
                          detail: 0,
                          format: 0,
                          mode: 'normal',
                          style: '',
                          text: ' O 60 % rýchlejšie nabíjanie, o 30 % vyššia energetická hustota a 2x dlhší životný cyklus v porovnaní s konvenčnými elektrolytmi.',
                          version: 1,
                        },
                      ],
                      direction: 'ltr',
                      format: '',
                      indent: 0,
                      textFormat: 0,
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  version: 1,
                },
              },
              style: 'info',
            },
            format: '',
            version: 2,
          },
          {
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Chemická inovácia',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h2',
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Nová formulácia elektrolytu kombinuje pokročilé iónové kvapaliny so špeciálne navrhnutými prísadami, ktoré vytvárajú stabilnú medzivrstvu pevného elektrolytu. Toto jedinečné zloženie zabraňuje tvorbe dendritov a znižuje nežiaduce vedľajšie reakcie, čo vedie k výraznému zlepšeniu výkonu batérie.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
          {
            type: 'block',
            fields: {
              blockName: '',
              blockType: 'mediaBlock',
              media: contentImage.id,
            },
            format: '',
            version: 2,
          },
          {
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Prínosy udržateľnosti',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h2',
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Zlepšená životnosť a efektivita batérií používajúcich túto formuláciu elektrolytu výrazne znižujú elektronický odpad a spotrebu zdrojov. Navyše, nová formulácia je environmentálne prijateľnejšia, používa udržateľné a menej toxické zložky ako tradičné elektrolyty.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    tags: [
      { tag: 'Batériová technológia' },
      { tag: 'Elektrochémia' },
      { tag: 'Udržateľná energia' },
    ],
    meta: {
      title: 'Prelom v technológii batériových elektrolytov',
      description:
        'Nová formulácia elektrolytu dramaticky zlepšuje výkon a životnosť batérií pri znížení vplyvu na životné prostredie',
      image: featuredImage.id,
    },
    publishedAt: '2024-01-15T12:00:00.000Z',
    slug: 'battery-electrolyte-breakthrough',
    _status: 'published',
  }
}

export const post3Jp: (args: PostArgs) => RequiredDataFromCollectionSlug<'posts'> = ({
  featuredImage,
  contentImage,
  author,
}) => {
  return {
    title: '電気化学エネルギー貯蔵の進歩',
    type: 'research',
    featured: true,
    description:
      '新しい電解質配合により、バッテリーの性能と寿命が劇的に向上し、環境への影響が削減されます',
    featuredImage: featuredImage.id,
    author: author,
    content: {
      root: {
        type: 'root',
        children: [
          {
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: '高度な化学によるエネルギー貯蔵の変革',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h2',
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: '当研究所は、バッテリー技術の主要な課題に対処する新しい電解質組成の開発に成功しました。この画期的な開発により、充電速度、容量保持、バッテリー全体の寿命が大幅に改善されます。',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
          {
            type: 'block',
            fields: {
              blockName: '性能指標',
              blockType: 'banner',
              content: {
                root: {
                  type: 'root',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          detail: 0,
                          format: 1,
                          mode: 'normal',
                          style: '',
                          text: '主な成果:',
                          version: 1,
                        },
                        {
                          type: 'text',
                          detail: 0,
                          format: 0,
                          mode: 'normal',
                          style: '',
                          text: ' 従来の電解質と比較して、充電速度が60％向上、エネルギー密度が30％増加、サイクル寿命が2倍に延長。',
                          version: 1,
                        },
                      ],
                      direction: 'ltr',
                      format: '',
                      indent: 0,
                      textFormat: 0,
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  version: 1,
                },
              },
              style: 'info',
            },
            format: '',
            version: 2,
          },
          {
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: '化学イノベーション',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h2',
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: '新しい電解質配合は、高度なイオン液体と特別に設計された添加剤を組み合わせ、安定した固体電解質界面を形成します。この独自の組成は、デンドライトの形成を防ぎ、望ましくない副反応を減少させ、バッテリー性能を大幅に改善します。',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
          {
            type: 'block',
            fields: {
              blockName: '',
              blockType: 'mediaBlock',
              media: contentImage.id,
            },
            format: '',
            version: 2,
          },
          {
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: '持続可能性の利点',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h2',
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'この電解質配合を使用したバッテリーの寿命と効率の向上により、電子廃棄物と資源消費が大幅に削減されます。さらに、新しい配合は環境に優しく、従来の電解質よりも持続可能で毒性の低い成分を使用しています。',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    tags: [
      { tag: 'バッテリー技術' },
      { tag: '電気化学' },
      { tag: '持続可能なエネルギー' },
    ],
    meta: {
      title: 'バッテリー電解質技術のブレークスルー',
      description:
        '新しい電解質配合により、バッテリーの性能と寿命が劇的に向上し、環境への影響が削減されます',
      image: featuredImage.id,
    },
    publishedAt: '2024-01-15T12:00:00.000Z',
    slug: 'battery-electrolyte-breakthrough',
    _status: 'published',
  }
}
