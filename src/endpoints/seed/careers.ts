import type { Media } from '@/payload-types'

type CareersArgs = {
  featuredImage1: Media
}

export function careersEn({ featuredImage1 }: CareersArgs) {
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
            title: 'Stable Future, Real Impact',
            content:
              "Build your career in a company that has been part of Slovakia's industrial landscape for decades - strong roots, steady growth, and projects that truly matter to global partners.",
          },
          {
            title: 'Respect for Expertise',
            content:
              'Your knowledge counts. From lab to production, every idea and improvement is heard and valued. We grow through professionalism and collaboration.',
          },
          {
            title: 'Fair Conditions & Human Approach',
            content:
              'We believe in fairness - transparent pay, safe workplaces, and a human pace of work. Good results come from mutual respect, not pressure.',
          },
          {
            title: 'Proudly Slovak, Globally Connected',
            content:
              'From Prievidza and Bratislava to partners across Europe - we combine Slovak know-how with international innovation.',
          },
          {
            title: 'Innovation You Can Touch',
            content:
              "From new polymers to greener processes, our teams see their ideas come to life. Here, innovation isn't theory - it's something you can hold, test, and improve every day.",
          },
          {
            title: 'Team Spirit with Purpose',
            content:
              'We work as one team - across generations, disciplines, and regions - united by the same goal: creating Slovak chemistry that moves the world forward.',
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
        careers: [],
      },
    ],

    meta: {
      title: 'Career Opportunities | VUP Chemical Solutions',
      image: null,
      description:
        "Join VUP's community of innovators, researchers, and problem-solvers dedicated to creating sustainable solutions through chemistry. Shape the future of chemistry with us.",
    },
    slug: 'career',
    slugLock: true,
    _status: 'published' as const,
  }
}

export function careersSk({ featuredImage1 }: CareersArgs) {
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
            title: 'Stabilná budúcnosť, skutočný vplyv',
            content:
              'Budujte svoju kariéru v spoločnosti, ktorá je súčasťou slovenského priemyselného prostredia už desaťročia - pevné korene, stabilný rast a projekty, ktoré skutočne záležia globálnym partnerom.',
          },
          {
            title: 'Rešpekt k odbornosti',
            content:
              'Vaše znalosti sa počítajú. Od laboratória po výrobu, každý nápad a zlepšenie je vypočuté a ocenené. Rastieme prostredníctvom profesionality a spolupráce.',
          },
          {
            title: 'Férové podmienky a ľudský prístup',
            content:
              'Veríme v spravodlivosť - transparentné odmeňovanie, bezpečné pracoviská a ľudské tempo práce. Dobré výsledky prichádzajú zo vzájomného rešpektu, nie z tlaku.',
          },
          {
            title: 'Hrdí Slováci, globálne prepojení',
            content:
              'Od Prievidze a Bratislavy po partnerov po celej Európe - kombinujeme slovenské know-how s medzinárodnou inováciou.',
          },
          {
            title: 'Inovácie, ktoré môžete uchopiť',
            content:
              'Od nových polymérov po ekologickejšie procesy, naše tímy vidia, ako ich nápady ožívajú. Tu inovácia nie je teória - je to niečo, čo môžete držať, testovať a každý deň zlepšovať.',
          },
          {
            title: 'Tímový duch s účelom',
            content:
              'Pracujeme ako jeden tím - naprieč generáciami, disciplínami a regiónmi - spojení rovnakým cieľom: vytvárať slovenskú chémiu, ktorá posúva svet vpred.',
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
        careers: [],
      },
    ],
    meta: {
      title: 'Kariérne príležitosti | VUP Chemické Riešenia',
      image: null,
      description:
        'Pridajte sa do komunity inovátorov, výskumníkov a riešiteľov problémov VUP, ktorí sa venujú vytváraniu udržateľných riešení prostredníctvom chémie. Formujte s nami budúcnosť chémie.',
    },
    slug: 'career',
    slugLock: true,
    _status: 'published' as const,
  }
}

export function careersJp({ featuredImage1 }: CareersArgs) {
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
            title: '安定した未来、真の影響',
            content:
              'スロバキアの産業界で数十年にわたって活動してきた企業でキャリアを築く - 強固な基盤、着実な成長、そしてグローバルパートナーにとって真に重要なプロジェクト。',
          },
          {
            title: '専門知識への敬意',
            content:
              'あなたの知識が重要です。研究室から生産現場まで、すべてのアイデアと改善が聞き入れられ、評価されます。私たちは専門性と協力を通じて成長します。',
          },
          {
            title: '公正な条件と人間的なアプローチ',
            content:
              '私たちは公正さを信じています - 透明な給与、安全な職場、そして人間的な仕事のペース。良い結果は圧力ではなく、相互尊重から生まれます。',
          },
          {
            title: 'スロバキアの誇り、グローバルな繋がり',
            content:
              'プリエヴィッツァとブラチスラヴァからヨーロッパ全土のパートナーまで - スロバキアのノウハウと国際的なイノベーションを組み合わせています。',
          },
          {
            title: '手に取れるイノベーション',
            content:
              '新しいポリマーからより環境に優しいプロセスまで、私たちのチームは自分たちのアイデアが実現するのを見ています。ここでは、イノベーションは理論ではありません - 毎日手に取り、テストし、改善できるものです。',
          },
          {
            title: '目的を持ったチームスピリット',
            content:
              '私たちは一つのチームとして働きます - 世代、専門分野、地域を超えて - 同じ目標で結ばれています：世界を前進させるスロバキアの化学を創造すること。',
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
        careers: [],
      },
    ],
    meta: {
      title: 'キャリア機会 | VUPケミカルソリューションズ',
      image: null,
      description:
        '化学を通じて持続可能なソリューションを創造することに専念する、VUPのイノベーター、研究者、問題解決者のコミュニティに参加してください。',
    },
    slug: 'career',
    slugLock: true,
    _status: 'published' as const,
  }
}
