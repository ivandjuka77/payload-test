import type { Media } from '@/payload-types'

type ServicesPageArgs = {
  featuredImage1: Media
}

export function servicesPageEn(args: ServicesPageArgs) {
  const { featuredImage1 } = args

  return {
    title: 'Services',
    hero: {
      type: 'backgroundImage' as const,
      title: 'Comprehensive Chemical Solutions & Services',
      description:
        'From research and development to contract manufacturing, VUP offers end-to-end chemical solutions backed by 70+ years of expertise. Our comprehensive services ensure quality, reliability, and innovation at every stage of your product journey.',
      cta: {
        links: [],
      },
      media: featuredImage1,
      slides: [],
    },
    layout: [
      {
        blockName: null,
        title: 'Partnering for Success',
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
                    text: "VUP's integrated service portfolio combines technical expertise, state-of-the-art facilities, and a commitment to quality. Whether you need custom synthesis, analytical support, or full-scale manufacturing, we deliver solutions that meet the highest industry standards.",
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
                        text: 'Advanced R&D capabilities for innovation and custom development',
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
                        text: 'Comprehensive analytical services with certified methodologies',
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
                        text: 'Contract manufacturing with flexible production capacity',
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
                        text: 'Quality assurance and regulatory compliance support',
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
                        text: 'Technical support from concept through commercialization',
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
        image: featuredImage1,
        blockType: 'contentImage',
      },
    ],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    slug: 'services',
    _status: 'published' as const,
  }
}

export function servicesPageSk(args: ServicesPageArgs) {
  const { featuredImage1 } = args

  return {
    title: 'Služby',
    hero: {
      type: 'backgroundImage' as const,
      title: 'Komplexné chemické riešenia a služby',
      description:
        'Od výskumu a vývoja až po zmluvnú výrobu, VUP ponúka komplexné chemické riešenia podporované viac ako 70-ročnými skúsenosťami. Naše komplexné služby zaručujú kvalitu, spoľahlivosť a inovácie v každej fáze cesty vášho produktu.',
      cta: {
        links: [],
      },
      media: featuredImage1,
      slides: [],
    },
    layout: [
      {
        blockName: null,
        title: 'Partnerstvo pre úspech',
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
                    text: 'Integrované portfólio služieb spoločnosti VUP kombinuje technické odborné znalosti, špičkové zariadenia a záväzok ku kvalite. Či už potrebujete zákazkovú syntézu, analytickú podporu alebo výrobu v plnom rozsahu, poskytujeme riešenia, ktoré spĺňajú najvyššie priemyselné štandardy.',
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
                        text: 'Pokročilé možnosti výskumu a vývoja pre inovácie a vývoj na mieru',
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
                        text: 'Komplexné analytické služby s certifikovanými metodikami',
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
                        text: 'Zmluvná výroba s flexibilnou výrobnou kapacitou',
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
                        text: 'Zabezpečenie kvality a podpora dodržiavania predpisov',
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
                        text: 'Technická podpora od konceptu až po komercializáciu',
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
        image: featuredImage1,
        blockType: 'contentImage',
      },
    ],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    slug: 'services',
    _status: 'published' as const,
  }
}

export function servicesPageJp(args: ServicesPageArgs) {
  const { featuredImage1 } = args

  return {
    title: 'サービス',
    hero: {
      type: 'backgroundImage' as const,
      title: '包括的な化学ソリューションとサービス',
      description:
        '研究開発から受託製造まで、VUPは70年以上の専門知識に裏打ちされたエンドツーエンドの化学ソリューションを提供しています。当社の包括的なサービスは、製品の過程のあらゆる段階で品質、信頼性、革新性を保証します。',
      cta: {
        links: [],
      },
      media: featuredImage1,
      slides: [],
    },
    layout: [
      {
        blockName: null,
        title: '成功のためのパートナーシップ',
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
                    text: 'VUPの統合サービスポートフォリオは、技術的専門知識、最先端の施設、品質へのコミットメントを組み合わせています。カスタム合成、分析サポート、またはフルスケールの製造が必要な場合でも、最高の業界基準を満たすソリューションを提供します。',
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
                        text: 'イノベーションとカスタム開発のための高度な研究開発能力',
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
                        text: '認定された方法論による包括的な分析サービス',
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
                        text: '柔軟な生産能力を持つ受託製造',
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
                        text: '品質保証と規制コンプライアンスのサポート',
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
                        text: 'コンセプトから商業化までの技術サポート',
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
        image: featuredImage1,
        blockType: 'contentImage',
      },
    ],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    slug: 'services',
    _status: 'published' as const,
  }
}
