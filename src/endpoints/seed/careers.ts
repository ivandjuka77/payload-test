import type { Career, Media } from '@/payload-types'

type CareersArgs = {
  featuredImage1: Media

  chemist: Career
  analyst: Career
}

export function careersEn({ featuredImage1, chemist, analyst }: CareersArgs) {
  return {
    title: 'Career',
    hero: {
      type: 'simple' as const,
      title: 'Shape the Future of Chemistry',
      description:
        "At VUP, we're more than just a chemical company. We're a community of innovators, researchers, and problem-solvers dedicated to creating sustainable solutions through chemistry.",

      cta: {
        links: [
          {
            link: {
              type: 'custom',
              newTab: null,
              url: '#career-listing',
              label: 'View Open Positions',
              appearance: 'default',
            },
          },
          {
            link: {
              type: 'custom',
              newTab: null,
              url: '/about-us',
              label: 'About Us',
              appearance: 'default',
            },
          },
        ],
      },
      media: featuredImage1.id,
      slides: [],
    },
    layout: [
      {
        title: 'Why Work With Us',
        subtitle:
          'We offer competitive compensation and benefits designed to support your professional and personal well-being.',
        blockName: null,

        features: [
          {
            title: 'Competitive Salary',
            content: 'Industry-leading compensation packages',
          },
          {
            title: 'Professional Development',
            content: 'Continuous learning and career growth opportunities',
          },
          {
            title: 'Work-Life Balance',
            content: 'Flexible working arrangements and paid time off',
          },

          {
            title: 'Innovation Culture',
            content: 'Freedom to explore new ideas and approaches',
          },
        ],
        blockType: 'career',

        cta: {
          title: null,
          description: null,
          links: [],
        },
      },

      {
        title: 'Open Positions',
        description:
          'Join our team and be part of creating innovative chemical solutions for a sustainable future.',
        blockName: null,
        blockType: 'careers',
        careers: [chemist, analyst],
      },
    ],

    meta: {
      title: null,
      image: null,
      description: null,
    },
    slug: 'career',
    slugLock: true,
    _status: 'published' as const,
  }
}

export function careersSk({ featuredImage1, chemist, analyst }: CareersArgs) {
  return {
    title: 'Kariéra',
    hero: {
      type: 'simple' as const,
      title: 'Formujte budúcnosť chémie',
      description:
        'V spoločnosti VUP sme viac než len chemická spoločnosť. Sme komunita inovátorov, výskumníkov a riešiteľov problémov, ktorí sa venujú vytváraniu udržateľných riešení prostredníctvom chémie.',
      cta: {
        links: [
          {
            link: {
              type: 'custom',
              newTab: null,
              url: '#career-listing',
              label: 'Zobraziť voľné pozície',
              appearance: 'default',
            },
          },
          {
            link: {
              type: 'custom',
              newTab: null,
              url: '/about-us',
              label: 'O nás',
              appearance: 'default',
            },
          },
        ],
      },
      media: featuredImage1.id,
      slides: [],
    },
    layout: [
      {
        title: 'Prečo pracovať s nami',
        subtitle:
          'Ponúkame konkurencieschopné odmeňovanie a benefity navrhnuté na podporu vášho profesionálneho a osobného blahobytu.',
        blockName: null,
        features: [
          {
            title: 'Konkurencieschopný plat',
            content: 'Špičkové balíčky odmeňovania v odvetví',
          },
          {
            title: 'Profesijný rozvoj',
            content: 'Príležitosti na neustále vzdelávanie a kariérny rast',
          },
          {
            title: 'Rovnováha medzi prácou a súkromím',
            content: 'Flexibilné pracovné podmienky a platené voľno',
          },
          {
            title: 'Inovačná kultúra',
            content: 'Sloboda objavovať nové nápady a prístupy',
          },
        ],
        blockType: 'career',
        cta: {
          title: null,
          description: null,
          links: [],
        },
      },
      {
        title: 'Voľné pozície',
        description:
          'Pridajte sa do nášho tímu a podieľajte sa na vytváraní inovatívnych chemických riešení pre udržateľnú budúcnosť.',
        blockName: null,
        blockType: 'careers',
        careers: [chemist, analyst],
      },
    ],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    slug: 'career',
    slugLock: true,
    _status: 'published' as const,
  }
}

export function careersJp({ featuredImage1, chemist, analyst }: CareersArgs) {
  return {
    title: '採用情報',
    hero: {
      type: 'simple' as const,
      title: '化学の未来を形作る',
      description:
        'VUPは単なる化学会社ではありません。化学を通じて持続可能なソリューションを創造することに専念する、イノベーター、研究者、問題解決者のコミュニティです。',
      cta: {
        links: [
          {
            link: {
              type: 'custom',
              newTab: null,
              url: '#career-listing',
              label: '募集中の職種を見る',
              appearance: 'default',
            },
          },
          {
            link: {
              type: 'custom',
              newTab: null,
              url: '/about-us',
              label: '会社概要',
              appearance: 'default',
            },
          },
        ],
      },
      media: featuredImage1.id,
      slides: [],
    },
    layout: [
      {
        title: '当社で働く理由',
        subtitle:
          '私たちは、あなたの専門的および個人的な幸福をサポートするために設計された、競争力のある報酬と福利厚生を提供します。',
        blockName: null,
        features: [
          {
            title: '競争力のある給与',
            content: '業界をリードする報酬パッケージ',
          },
          {
            title: '専門能力開発',
            content: '継続的な学習とキャリア成長の機会',
          },
          {
            title: 'ワークライフバランス',
            content: '柔軟な勤務形態と有給休暇',
          },
          {
            title: 'イノベーション文化',
            content: '新しいアイデアやアプローチを探求する自由',
          },
        ],
        blockType: 'career',
        cta: {
          title: null,
          description: null,
          links: [],
        },
      },
      {
        title: '募集中の職種',
        description:
          '私たちのチームに参加し、持続可能な未来のための革新的な化学ソリューションの創造に貢献してください。',
        blockName: null,
        blockType: 'careers',
        careers: [chemist, analyst],
      },
    ],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    slug: 'career',
    slugLock: true,
    _status: 'published' as const,
  }
}
