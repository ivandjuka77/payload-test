import type { Media, Post, ProductCategory } from '@/payload-types'

type HomeArgs = {
  // Assets
  slide1HeroBgDoc: Media
  slide1HeroFeaturedItemDoc: Media
  slide1HeroCard1Doc: Media
  slide1HeroCard2Doc: Media
  slide1HeroCard3Doc: Media
  slide2HeroBgDoc: Media
  slide2HeroFeaturedItemDoc: Media
  slide2HeroCard1Doc: Media
  slide2HeroCard2Doc: Media
  slide2HeroCard3Doc: Media
  slide3HeroBgDoc: Media
  slide3HeroFeaturedItemDoc: Media
  slide3HeroCard1Doc: Media
  slide3HeroCard2Doc: Media
  slide3HeroCard3Doc: Media
  quickAccessCard1Doc: Media
  quickAccessCard2Doc: Media
  quickAccessCard3Doc: Media
  quickAccessCard4Doc: Media

  // Categories
  hydroxyAcids: ProductCategory
  hinderedAmines: ProductCategory
  glycolEthers: ProductCategory

  // Posts
  post1: Post
  post2: Post
  post3: Post
  post4: Post
  // Sustainability
  sustainabilitydemoImageDoc: Media
}

export function homeEn(args: HomeArgs) {
  const {
    slide1HeroBgDoc,
    slide1HeroFeaturedItemDoc,
    slide1HeroCard1Doc,
    slide1HeroCard2Doc,
    slide1HeroCard3Doc,
    slide2HeroBgDoc,
    slide2HeroFeaturedItemDoc,
    slide2HeroCard1Doc,
    slide2HeroCard2Doc,
    slide2HeroCard3Doc,
    slide3HeroBgDoc,
    slide3HeroFeaturedItemDoc,
    slide3HeroCard1Doc,
    slide3HeroCard2Doc,
    slide3HeroCard3Doc,
    quickAccessCard1Doc,
    quickAccessCard2Doc,
    quickAccessCard3Doc,
    quickAccessCard4Doc,
    hydroxyAcids,
    hinderedAmines,
    glycolEthers,
    post1,
    post2,
    post3,
    post4,
    sustainabilitydemoImageDoc,
  } = args

  return {
    title: 'Home',
    hero: {
      type: 'carousel' as const,
      title: 'VUP Chem',
      description: 'This is the description',
      slides: [
        {
          title: 'Advancing Scientific Research',
          subtitle: 'Pioneering chemical innovations for researchers and academic institutions',
          backgroundImage: slide1HeroBgDoc,
          featuredCards: [
            {
              title: 'Research Partnerships',
              description:
                'Collaborate with our scientists on groundbreaking chemical research initiatives',
              image: slide1HeroCard1Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/research-partnerships',
                    label: 'Learn More',
                    appearance: 'default',
                  },
                },
              ],
            },
            {
              title: 'Laboratory Materials',
              description:
                'High-purity compounds and reagents for precise experimental requirements',
              image: slide1HeroCard2Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/lab-materials',
                    label: 'Learn More',
                    appearance: 'default',
                  },
                },
              ],
            },
            {
              title: 'Academic Programs',
              description:
                'Supporting educational institutions with specialized chemistry programs',
              image: slide1HeroCard3Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/academic-collaborations',
                    label: 'Learn More',
                    appearance: 'default',
                  },
                },
              ],
            },
          ],
          badge: {
            icon: 'atom',
            text: '25+ years of research expertise',
          },
          featuredItem: {
            title: 'Novel Catalytic Systems',
            description:
              'Our latest breakthrough in transition metal catalysis enables reactions at lower temperatures with higher yields.',
            image: slide1HeroFeaturedItemDoc,
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/research/catalytic-systems',
                  label: 'Learn More',
                  appearance: 'default',
                },
              },
            ],
          },
          cta: {
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/research',
                  label: 'Explore Research Solutions',
                  appearance: 'default',
                },
              },
            ],
          },
        },
        {
          title: 'Industrial Chemical Solutions',
          subtitle: 'High-performance formulations engineered for your production needs',
          backgroundImage: slide2HeroBgDoc,
          featuredCards: [
            {
              title: 'Coating Systems',
              description:
                'Advanced polymer coatings with superior durability and corrosion resistance',
              image: slide2HeroCard1Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/products/coatings',
                    label: 'Learn More',
                    appearance: 'default',
                  },
                },
              ],
            },
            {
              title: 'Adhesive Solutions',
              description: 'High-performance bonding agents for demanding industrial applications',
              image: slide2HeroCard2Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/products/adhesives',
                    label: 'Learn More',
                    appearance: 'default',
                  },
                },
              ],
            },
            {
              title: 'Custom Formulations',
              description: 'Tailored chemical compounds developed to your exact specifications',
              image: slide2HeroCard3Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/custom-formulations',
                    label: 'Learn More',
                    appearance: 'default',
                  },
                },
              ],
            },
          ],
          badge: {
            icon: 'building2',
            text: '300+ patented formulations',
          },
          featuredItem: {
            title: 'Ultra-Durable Coating System',
            description:
              'Our advanced polymer coating provides unmatched corrosion resistance for industrial applications.',
            image: slide2HeroFeaturedItemDoc,
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/products/coating-systems',
                  label: 'Learn More',
                  appearance: 'default',
                },
              },
            ],
          },
          cta: {
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/industrial',
                  label: 'View Industrial Solutions',
                  appearance: 'default',
                },
              },
            ],
          },
        },
        {
          title: 'Chemistry for a Sustainable Future',
          subtitle: 'Environmentally responsible innovations and green chemistry solutions',
          backgroundImage: slide3HeroBgDoc,
          featuredCards: [
            {
              title: 'Bio-Based Polymers',
              description:
                'Plant-derived alternatives with 70% lower carbon footprint than conventional options',
              image: slide3HeroCard1Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/sustainable-products/biopolymers',
                    label: 'Learn More',
                    appearance: 'default',
                  },
                },
              ],
            },
            {
              title: 'Green Manufacturing',
              description:
                'Eco-friendly processes that minimize waste and reduce environmental impact',
              image: slide3HeroCard2Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/green-initiatives/manufacturing',
                    label: 'Learn More',
                    appearance: 'default',
                  },
                },
              ],
            },
            {
              title: 'Circular Economy Solutions',
              description: 'Innovative approaches to product lifecycle and materials recycling',
              image: slide3HeroCard3Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/circular-economy',
                    label: 'Learn More',
                    appearance: 'default',
                  },
                },
              ],
            },
          ],
          badge: {
            icon: 'globe',
            text: '50+ global partnerships for sustainability',
          },
          featuredItem: {
            title: 'Bio-Based Polymers',
            description:
              'Our plant-derived polymers offer the same performance as petroleum-based alternatives with 70% lower carbon footprint.',
            image: slide3HeroFeaturedItemDoc,
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/sustainable-products/biopolymers',
                  label: 'Learn More',
                  appearance: 'default',
                },
              },
            ],
          },
          cta: {
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/sustainability',
                  label: 'Discover Sustainable Solutions',
                  appearance: 'default',
                },
              },
            ],
          },
        },
      ],
    },
    layout: [
      {
        title: 'Key Areas of Expertise',
        description:
          'Discover how our chemical expertise can transform your business needs and drive innovation',
        blockName: null,

        cards: [
          {
            title: 'Products & Solutions',
            description:
              'Discover our specialty chemicals engineered for performance across diverse applications.',
            backgroundImage: quickAccessCard1Doc,
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/products',
                  label: 'Explore Products',
                  appearance: 'default',
                },
              },
            ],
          },
          {
            title: 'Industries Served',
            description:
              'See how our chemical expertise drives innovation across global industries.',
            backgroundImage: quickAccessCard2Doc,
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/industries',
                  label: 'View Industries',
                  appearance: 'default',
                },
              },
            ],
          },
          {
            title: 'Research & Innovation',
            description:
              'Explore our cutting-edge research facilities and breakthrough technologies.',
            backgroundImage: quickAccessCard3Doc,
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/research-development',
                  label: 'Explore Services',
                  appearance: 'default',
                },
              },
            ],
          },
          {
            title: 'Sustainability ',
            description:
              'Learn about our commitment to environmentally responsible chemical production.',
            backgroundImage: quickAccessCard4Doc,
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/sustainability',
                  label: 'Our Commitment',
                  appearance: 'default',
                },
              },
            ],
          },
        ],
        blockType: 'quickAccess',
      },
      {
        type: 'category',
        title: 'Leading Chemical Innovation',
        description:
          'Advanced chemistry expertise, superior product quality, and industry-leading innovation combined to deliver the chemical solutions your business demands.',
        showCta: true,
        blockName: null,
        contentItems: [],
        features: [],
        blockType: 'showcase',
        categories: [hydroxyAcids, hinderedAmines, glycolEthers],
        cta: {
          title: 'Need a specialized chemical solution?',
          description: 'Our experts can develop custom formulations for your specific requirements',
          links: [
            {
              link: {
                type: 'custom',
                url: '/contact',
                label: 'Contact Us',
                appearance: 'default',
              },
            },
          ],
        },
      },
      {
        blockName: null,
        blockType: 'news',
        title: 'News & Insights',
        description:
          "Stay updated with VUP's latest achievements, innovations, and industry insights.",
        badge: 'Latest Updates',
        linkLabel: 'View all news and publications',
        items: [post1, post2, post3, post4],
      },
      {
        title: 'Build Your Career With Purpose',
        subtitle:
          "At VUP, we're more than just a chemical company. We're a community of innovators dedicated to creating a sustainable future through chemistry.",
        blockName: null,

        features: [
          {
            title: 'Scientific Excellence',
            content:
              'We pursue the highest standards in chemical innovation and research methodologies.',
          },
          {
            title: 'People First',
            content: 'We prioritize the well-being, growth, and development of our team members.',
          },
          {
            title: 'Sustainable Innovation',
            content:
              "We develop solutions that address today's needs while preserving tomorrow's resources.",
          },

          {
            title: 'Inclusive Collaboration',
            content:
              'We value diverse perspectives and foster an environment where everyone belongs.',
          },
        ],
        blockType: 'career',
        cta: {
          title: 'Ready to make an impact? ',
          description:
            'Explore our open positions and join a team where your expertise contributes to meaningful innovation.',

          links: [
            {
              link: {
                type: 'custom',
                url: '/sustainable-solutions',
                label: 'Discover Sustainable Solutions',
                appearance: 'default',
              },
            },
          ],
        },
      },
      {
        title: 'Sustainable Chemistry for a Better Tomorrow',
        subtitle:
          "We're reimagining chemical processes to protect our planet while delivering the innovative solutions our customers need.",

        image: sustainabilitydemoImageDoc,
        blockName: null,
        features: [
          {
            title: 'Circular Chemistry',
            content:
              'Developing processes that minimize waste and maximize resource efficiency through innovative recycling and reuse systems.',
          },
          {
            title: 'Water Conservation',
            content:
              'Implementing advanced water treatment and recycling technologies to reduce consumption and protect local watersheds.',
          },
          {
            title: 'Clean Manufacturing',
            content:
              'Transforming our production facilities with energy-efficient equipment and zero-emission technologies.',
          },
          {
            title: 'Biodiversity Protection',
            content:
              'Supporting conservation efforts and ensuring our operations have minimal impact on local ecosystems.',
          },
        ],
        blockType: 'sustainability',
        card: {
          title: 'Our Commitment to Net Zero',

          description: {
            root: {
              children: [
                {
                  children: [
                    {
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: "We've set ambitious targets to achieve carbon neutrality by 2030 and net-zero emissions across our entire value chain by 2040. This commitment drives everything from our research priorities to our manufacturing processes.",
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
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              type: 'root',
              version: 1,
            },
          },
        },
        cta: {
          title: 'Join us in creating a sustainable future',
          description:
            " Learn more about our sustainability initiatives and how we're working to minimize our environmental footprint while maximizing our positive impact.",

          links: [
            {
              link: {
                type: 'custom',
                url: '/sustainable-solutions',
                label: 'Discover Sustainable Solutions',
                appearance: 'default',
              },
            },
          ],
        },
      },
    ],
    meta: {
      title: 'VUP Chemical Solutions',
      description: 'Leading provider of specialized chemical solutions and research services',
    },
    slug: 'home',
    _status: 'published' as const,
  }
}

export function homeSk(args: HomeArgs) {
  const {
    slide1HeroBgDoc,
    slide1HeroFeaturedItemDoc,
    slide1HeroCard1Doc,
    slide1HeroCard2Doc,
    slide1HeroCard3Doc,
    slide2HeroBgDoc,
    slide2HeroFeaturedItemDoc,
    slide2HeroCard1Doc,
    slide2HeroCard2Doc,
    slide2HeroCard3Doc,
    slide3HeroBgDoc,
    slide3HeroFeaturedItemDoc,
    slide3HeroCard1Doc,
    slide3HeroCard2Doc,
    slide3HeroCard3Doc,
    quickAccessCard1Doc,
    quickAccessCard2Doc,
    quickAccessCard3Doc,
    quickAccessCard4Doc,
    hydroxyAcids,
    hinderedAmines,
    glycolEthers,
    post1,
    post2,
    post3,
    post4,
    sustainabilitydemoImageDoc,
  } = args

  return {
    title: 'Domov',
    hero: {
      type: 'carousel' as const,
      title: 'VUP Chem',
      description: 'Popredný dodávateľ špecializovaných chemických riešení.',
      slides: [
        {
          title: 'Rozvoj vedeckého výskumu',
          subtitle: 'Priekopnícke chemické inovácie pre výskumníkov a akademické inštitúcie',
          backgroundImage: slide1HeroBgDoc,
          featuredCards: [
            {
              title: 'Výskumné partnerstvá',
              description:
                'Spolupracujte s našimi vedcami na prelomových chemických výskumných iniciatívach',
              image: slide1HeroCard1Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/research-partnerships',
                    label: 'Zistiť viac',
                    appearance: 'default',
                  },
                },
              ],
            },
            {
              title: 'Laboratórne materiály',
              description:
                'Vysoko čisté zlúčeniny a reagencie pre presné experimentálne požiadavky',
              image: slide1HeroCard2Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/lab-materials',
                    label: 'Zistiť viac',
                    appearance: 'default',
                  },
                },
              ],
            },
            {
              title: 'Akademické programy',
              description:
                'Podpora vzdelávacích inštitúcií so špecializovanými chemickými programami',
              image: slide1HeroCard3Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/academic-collaborations',
                    label: 'Zistiť viac',
                    appearance: 'default',
                  },
                },
              ],
            },
          ],
          badge: {
            icon: 'atom',
            text: 'Viac ako 25 rokov skúseností vo výskume',
          },
          featuredItem: {
            title: 'Nové katalytické systémy',
            description:
              'Náš najnovší prelom v katalýze prechodných kovov umožňuje reakcie pri nižších teplotách s vyššími výťažkami.',
            image: slide1HeroFeaturedItemDoc,
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/research/catalytic-systems',
                  label: 'Zistiť viac',
                  appearance: 'default',
                },
              },
            ],
          },
          cta: {
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/research',
                  label: 'Preskúmať výskumné riešenia',
                  appearance: 'default',
                },
              },
            ],
          },
        },
        {
          title: 'Priemyselné chemické riešenia',
          subtitle: 'Vysoko výkonné formulácie navrhnuté pre vaše výrobné potreby',
          backgroundImage: slide2HeroBgDoc,
          featuredCards: [
            {
              title: 'Náterové systémy',
              description:
                'Pokročilé polymérové nátery s vynikajúcou trvanlivosťou a odolnosťou proti korózii',
              image: slide2HeroCard1Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/products/coatings',
                    label: 'Zistiť viac',
                    appearance: 'default',
                  },
                },
              ],
            },
            {
              title: 'Lepiace riešenia',
              description: 'Vysoko výkonné spojivá pre náročné priemyselné aplikácie',
              image: slide2HeroCard2Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/products/adhesives',
                    label: 'Zistiť viac',
                    appearance: 'default',
                  },
                },
              ],
            },
            {
              title: 'Zákazkové formulácie',
              description:
                'Chemické zlúčeniny na mieru vyvinuté podľa vašich presných špecifikácií',
              image: slide2HeroCard3Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/custom-formulations',
                    label: 'Zistiť viac',
                    appearance: 'default',
                  },
                },
              ],
            },
          ],
          badge: {
            icon: 'building2',
            text: 'Viac ako 300 patentovaných formulácií',
          },
          featuredItem: {
            title: 'Ultra-odolný náterový systém',
            description:
              'Náš pokročilý polymérový náter poskytuje bezkonkurenčnú odolnosť proti korózii pre priemyselné aplikácie.',
            image: slide2HeroFeaturedItemDoc,
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/products/coating-systems',
                  label: 'Zistiť viac',
                  appearance: 'default',
                },
              },
            ],
          },
          cta: {
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/industrial',
                  label: 'Zobraziť priemyselné riešenia',
                  appearance: 'default',
                },
              },
            ],
          },
        },
        {
          title: 'Chémia pre udržateľnú budúcnosť',
          subtitle: 'Environmentálne zodpovedné inovácie a riešenia zelenej chémie',
          backgroundImage: slide3HeroBgDoc,
          featuredCards: [
            {
              title: 'Polyméry na biologickej báze',
              description:
                'Alternatívy rastlinného pôvodu so 70% nižšou uhlíkovou stopou ako konvenčné možnosti',
              image: slide3HeroCard1Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/sustainable-products/biopolymers',
                    label: 'Zistiť viac',
                    appearance: 'default',
                  },
                },
              ],
            },
            {
              title: 'Zelená výroba',
              description:
                'Ekologické procesy, ktoré minimalizujú odpad a znižujú dopad na životné prostredie',
              image: slide3HeroCard2Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/green-initiatives/manufacturing',
                    label: 'Zistiť viac',
                    appearance: 'default',
                  },
                },
              ],
            },
            {
              title: 'Riešenia pre obehové hospodárstvo',
              description: 'Inovatívne prístupy k životnému cyklu výrobkov a recyklácii materiálov',
              image: slide3HeroCard3Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/circular-economy',
                    label: 'Zistiť viac',
                    appearance: 'default',
                  },
                },
              ],
            },
          ],
          badge: {
            icon: 'globe',
            text: 'Viac ako 50 globálnych partnerstiev pre udržateľnosť',
          },
          featuredItem: {
            title: 'Polyméry na biologickej báze',
            description:
              'Naše polyméry rastlinného pôvodu ponúkajú rovnaký výkon ako alternatívy na báze ropy so 70% nižšou uhlíkovou stopou.',
            image: slide3HeroFeaturedItemDoc,
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/sustainable-products/biopolymers',
                  label: 'Zistiť viac',
                  appearance: 'default',
                },
              },
            ],
          },
          cta: {
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/sustainability',
                  label: 'Objavte udržateľné riešenia',
                  appearance: 'default',
                },
              },
            ],
          },
        },
      ],
    },
    layout: [
      {
        title: 'Kľúčové oblasti odbornosti',
        description:
          'Zistite, ako môže naša chemická odbornosť transformovať vaše obchodné potreby a podporiť inovácie',
        blockName: null,

        cards: [
          {
            title: 'Produkty a riešenia',
            description:
              'Objavte naše špeciálne chemikálie navrhnuté pre výkon v rôznych aplikáciách.',
            backgroundImage: quickAccessCard1Doc,
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/products',
                  label: 'Preskúmať produkty',
                  appearance: 'default',
                },
              },
            ],
          },
          {
            title: 'Obsluhované odvetvia',
            description:
              'Pozrite sa, ako naša chemická odbornosť podporuje inovácie v globálnych odvetviach.',
            backgroundImage: quickAccessCard2Doc,
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/industries',
                  label: 'Zobraziť odvetvia',
                  appearance: 'default',
                },
              },
            ],
          },
          {
            title: 'Výskum a inovácie',
            description: 'Preskúmajte naše špičkové výskumné zariadenia a prelomové technológie.',
            backgroundImage: quickAccessCard3Doc,
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/research-development',
                  label: 'Preskúmať služby',
                  appearance: 'default',
                },
              },
            ],
          },
          {
            title: 'Udržateľnosť',
            description:
              'Zistite viac o našom záväzku k environmentálne zodpovednej chemickej výrobe.',
            backgroundImage: quickAccessCard4Doc,
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/sustainability',
                  label: 'Náš záväzok',
                  appearance: 'default',
                },
              },
            ],
          },
        ],
        blockType: 'quickAccess',
      },
      {
        type: 'category',
        title: 'Vedúca chemická inovácia',
        description:
          'Pokročilá chemická odbornosť, vynikajúca kvalita produktov a špičkové inovácie v odvetví sa spájajú, aby dodali chemické riešenia, ktoré vaša firma vyžaduje.',
        showCta: true,
        blockName: null,
        contentItems: [],
        features: [],
        blockType: 'showcase',
        categories: [hydroxyAcids, hinderedAmines, glycolEthers],
        cta: {
          title: 'Potrebujete špecializované chemické riešenie?',
          description:
            'Naši odborníci môžu vyvinúť zákazkové formulácie pre vaše špecifické požiadavky',
          links: [
            {
              link: {
                type: 'custom',
                url: '/contact',
                label: 'Kontaktujte nás',
                appearance: 'default',
              },
            },
          ],
        },
      },
      {
        blockName: null,
        blockType: 'news',
        title: 'Novinky a postrehy',
        description:
          'Zostaňte informovaní o najnovších úspechoch, inováciách a postrehoch z odvetvia spoločnosti VUP.',
        badge: 'Najnovšie aktualizácie',
        linkLabel: 'Zobraziť všetky novinky a publikácie',
        items: [post1, post2, post3, post4],
      },
      {
        title: 'Budujte si kariéru so zmyslom',
        subtitle:
          'V spoločnosti VUP sme viac než len chemická spoločnosť. Sme komunita inovátorov oddaných vytváraniu udržateľnej budúcnosti prostredníctvom chémie.',
        blockName: null,

        features: [
          {
            title: 'Vedecká excelentnosť',
            content:
              'Usilujeme sa o najvyššie štandardy v chemických inováciách a výskumných metodikách.',
          },
          {
            title: 'Ľudia na prvom mieste',
            content: 'Uprednostňujeme blahobyt, rast a rozvoj členov nášho tímu.',
          },
          {
            title: 'Udržateľná inovácia',
            content:
              'Vyvíjame riešenia, ktoré riešia dnešné potreby a zároveň chránia zdroje pre zajtrajšok.',
          },

          {
            title: 'Inkluzívna spolupráca',
            content: 'Ceníme si rôznorodé perspektívy a podporujeme prostredie, kde každý patrí.',
          },
        ],
        blockType: 'career',
        cta: {
          title: 'Ste pripravení niečo zmeniť?',
          description:
            'Preskúmajte naše otvorené pozície a pridajte sa k tímu, kde vaša odbornosť prispieva k zmysluplným inováciám.',

          links: [
            {
              link: {
                type: 'custom',
                url: '/sustainable-solutions',
                label: 'Objavte udržateľné riešenia',
                appearance: 'default',
              },
            },
          ],
        },
      },
      {
        title: 'Udržateľná chémia pre lepšiu budúcnosť',
        subtitle:
          'Pretvárame chemické procesy, aby sme chránili našu planétu a zároveň dodávali inovatívne riešenia, ktoré naši zákazníci potrebujú.',

        image: sustainabilitydemoImageDoc,
        blockName: null,
        features: [
          {
            title: 'Cirkulárna chémia',
            content:
              'Vývoj procesov, ktoré minimalizujú odpad a maximalizujú efektívnosť zdrojov prostredníctvom inovatívnych systémov recyklácie a opätovného použitia.',
          },
          {
            title: 'Ochrana vody',
            content:
              'Implementácia pokročilých technológií na úpravu a recykláciu vody s cieľom znížiť spotrebu a chrániť miestne povodia.',
          },
          {
            title: 'Čistá výroba',
            content:
              'Transformácia našich výrobných zariadení pomocou energeticky účinných zariadení a technológií s nulovými emisiami.',
          },
          {
            title: 'Ochrana biodiverzity',
            content:
              'Podpora ochranárskych snáh a zabezpečenie, aby naše operácie mali minimálny dopad na miestne ekosystémy.',
          },
        ],
        blockType: 'sustainability',
        card: {
          title: 'Náš záväzok k čistej nule',

          description: {
            root: {
              children: [
                {
                  children: [
                    {
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: 'Stanovili sme si ambiciózne ciele dosiahnuť uhlíkovú neutralitu do roku 2030 a čisté nulové emisie v celom našom hodnotovom reťazci do roku 2040. Tento záväzok poháňa všetko od našich výskumných priorít až po naše výrobné procesy.',
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
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              type: 'root',
              version: 1,
            },
          },
        },
        cta: {
          title: 'Pridajte sa k nám pri vytváraní udržateľnej budúcnosti',
          description:
            'Zistite viac o našich iniciatívach v oblasti udržateľnosti a o tom, ako pracujeme na minimalizácii našej environmentálnej stopy a maximalizácii nášho pozitívneho vplyvu.',

          links: [
            {
              link: {
                type: 'custom',
                url: '/sustainable-solutions',
                label: 'Objavte udržateľné riešenia',
                appearance: 'default',
              },
            },
          ],
        },
      },
    ],
    meta: {
      title: 'VUP Chemické Riešenia',
      description: 'Popredný poskytovateľ špecializovaných chemických riešení a výskumných služieb',
    },
    slug: 'domov',
    _status: 'published' as const,
  }
}

export function homeJp(args: HomeArgs) {
  const {
    slide1HeroBgDoc,
    slide1HeroFeaturedItemDoc,
    slide1HeroCard1Doc,
    slide1HeroCard2Doc,
    slide1HeroCard3Doc,
    slide2HeroBgDoc,
    slide2HeroFeaturedItemDoc,
    slide2HeroCard1Doc,
    slide2HeroCard2Doc,
    slide2HeroCard3Doc,
    slide3HeroBgDoc,
    slide3HeroFeaturedItemDoc,
    slide3HeroCard1Doc,
    slide3HeroCard2Doc,
    slide3HeroCard3Doc,
    quickAccessCard1Doc,
    quickAccessCard2Doc,
    quickAccessCard3Doc,
    quickAccessCard4Doc,
    hydroxyAcids,
    hinderedAmines,
    glycolEthers,
    post1,
    post2,
    post3,
    post4,
    sustainabilitydemoImageDoc,
  } = args

  return {
    title: 'ホーム',
    hero: {
      type: 'carousel' as const,
      title: 'VUP Chem',
      description: '特殊化学品ソリューションのリーディングプロバイダー',
      slides: [
        {
          title: '科学研究の推進',
          subtitle: '研究者および学術機関向けの先駆的な化学革新',
          backgroundImage: slide1HeroBgDoc,
          featuredCards: [
            {
              title: '研究パートナーシップ',
              description: '画期的な化学研究イニシアチブについて、当社の科学者と協力してください',
              image: slide1HeroCard1Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/research-partnerships',
                    label: '詳細を見る',
                    appearance: 'default',
                  },
                },
              ],
            },
            {
              title: '実験用材料',
              description: '精密な実験要件に対応する高純度の化合物および試薬',
              image: slide1HeroCard2Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/lab-materials',
                    label: '詳細を見る',
                    appearance: 'default',
                  },
                },
              ],
            },
            {
              title: '学術プログラム',
              description: '専門的な化学プログラムで教育機関を支援',
              image: slide1HeroCard3Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/academic-collaborations',
                    label: '詳細を見る',
                    appearance: 'default',
                  },
                },
              ],
            },
          ],
          badge: {
            icon: 'atom',
            text: '25年以上の研究専門知識',
          },
          featuredItem: {
            title: '新規触媒システム',
            description:
              '遷移金属触媒における当社の最新のブレークスルーは、より低い温度でより高い収率での反応を可能にします。',
            image: slide1HeroFeaturedItemDoc,
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/research/catalytic-systems',
                  label: '詳細を見る',
                  appearance: 'default',
                },
              },
            ],
          },
          cta: {
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/research',
                  label: '研究ソリューションを探す',
                  appearance: 'default',
                },
              },
            ],
          },
        },
        {
          title: '産業用化学ソリューション',
          subtitle: '生産ニーズに合わせて設計された高性能フォーミュレーション',
          backgroundImage: slide2HeroBgDoc,
          featuredCards: [
            {
              title: 'コーティングシステム',
              description: '優れた耐久性と耐食性を備えた先進的なポリマーコーティング',
              image: slide2HeroCard1Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/products/coatings',
                    label: '詳細を見る',
                    appearance: 'default',
                  },
                },
              ],
            },
            {
              title: '接着剤ソリューション',
              description: '要求の厳しい産業用途向け高性能接着剤',
              image: slide2HeroCard2Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/products/adhesives',
                    label: '詳細を見る',
                    appearance: 'default',
                  },
                },
              ],
            },
            {
              title: 'カスタムフォーミュレーション',
              description: 'お客様の正確な仕様に合わせて開発された特注の化合物',
              image: slide2HeroCard3Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/custom-formulations',
                    label: '詳細を見る',
                    appearance: 'default',
                  },
                },
              ],
            },
          ],
          badge: {
            icon: 'building2',
            text: '300以上の特許取得済みフォーミュレーション',
          },
          featuredItem: {
            title: '超耐久性コーティングシステム',
            description:
              '当社の先進的なポリマーコーティングは、産業用途に比類のない耐食性を提供します。',
            image: slide2HeroFeaturedItemDoc,
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/products/coating-systems',
                  label: '詳細を見る',
                  appearance: 'default',
                },
              },
            ],
          },
          cta: {
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/industrial',
                  label: '産業ソリューションを見る',
                  appearance: 'default',
                },
              },
            ],
          },
        },
        {
          title: '持続可能な未来のための化学',
          subtitle: '環境に配慮したイノベーションとグリーンケミストリーソリューション',
          backgroundImage: slide3HeroBgDoc,
          featuredCards: [
            {
              title: 'バイオベースポリマー',
              description: '従来品に比べ炭素排出量を70%削減した植物由来の代替品',
              image: slide3HeroCard1Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/sustainable-products/biopolymers',
                    label: '詳細を見る',
                    appearance: 'default',
                  },
                },
              ],
            },
            {
              title: 'グリーンマニュファクチャリング',
              description: '廃棄物を最小限に抑え、環境への影響を低減する環境に優しいプロセス',
              image: slide3HeroCard2Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/green-initiatives/manufacturing',
                    label: '詳細を見る',
                    appearance: 'default',
                  },
                },
              ],
            },
            {
              title: 'サーキュラーエコノミーソリューション',
              description: '製品ライフサイクルと材料リサイクルへの革新的なアプローチ',
              image: slide3HeroCard3Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/circular-economy',
                    label: '詳細を見る',
                    appearance: 'default',
                  },
                },
              ],
            },
          ],
          badge: {
            icon: 'globe',
            text: '持続可能性のための50以上のグローバルパートナーシップ',
          },
          featuredItem: {
            title: 'バイオベースポリマー',
            description:
              '当社の植物由来ポリマーは、石油ベースの代替品と同等の性能を提供し、炭素排出量を70%削減します。',
            image: slide3HeroFeaturedItemDoc,
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/sustainable-products/biopolymers',
                  label: '詳細を見る',
                  appearance: 'default',
                },
              },
            ],
          },
          cta: {
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/sustainability',
                  label: '持続可能なソリューションを発見',
                  appearance: 'default',
                },
              },
            ],
          },
        },
      ],
    },
    layout: [
      {
        title: '主要な専門分野',
        description:
          '当社の化学専門知識がお客様のビジネスニーズをどのように変革し、イノベーションを推進するかをご覧ください',
        blockName: null,

        cards: [
          {
            title: '製品とソリューション',
            description:
              '多様な用途で性能を発揮するように設計された当社の特殊化学品をご覧ください。',
            backgroundImage: quickAccessCard1Doc,
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/products',
                  label: '製品を探す',
                  appearance: 'default',
                },
              },
            ],
          },
          {
            title: '対象産業',
            description:
              '当社の化学専門知識が世界の産業全体でイノベーションをどのように推進しているかをご覧ください。',
            backgroundImage: quickAccessCard2Doc,
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/industries',
                  label: '産業を見る',
                  appearance: 'default',
                },
              },
            ],
          },
          {
            title: '研究開発とイノベーション',
            description: '当社の最先端の研究施設と画期的な技術をご覧ください。',
            backgroundImage: quickAccessCard3Doc,
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/research-development',
                  label: 'サービスを探す',
                  appearance: 'default',
                },
              },
            ],
          },
          {
            title: 'サステナビリティ',
            description: '環境に配慮した化学品生産への当社の取り組みについてご覧ください。',
            backgroundImage: quickAccessCard4Doc,
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/sustainability',
                  label: '当社のコミットメント',
                  appearance: 'default',
                },
              },
            ],
          },
        ],
        blockType: 'quickAccess',
      },
      {
        type: 'category',
        title: '化学イノベーションをリードする',
        description:
          '高度な化学専門知識、優れた製品品質、業界をリードするイノベーションを組み合わせ、お客様のビジネスが要求する化学ソリューションを提供します。',
        showCta: true,
        blockName: null,
        contentItems: [],
        features: [],
        blockType: 'showcase',
        categories: [hydroxyAcids, hinderedAmines, glycolEthers],
        cta: {
          title: '特殊な化学ソリューションが必要ですか？',
          description:
            '当社の専門家がお客様の特定の要件に合わせてカスタムフォーミュレーションを開発します',
          links: [
            {
              link: {
                type: 'custom',
                url: '/contact',
                label: 'お問い合わせ',
                appearance: 'default',
              },
            },
          ],
        },
      },
      {
        blockName: null,
        blockType: 'news',
        title: 'ニュースと洞察',
        description:
          'VUPの最新の成果、イノベーション、業界の洞察について最新情報を入手してください。',
        badge: '最新情報',
        linkLabel: 'すべてのニュースと出版物を見る',
        items: [post1, post2, post3, post4],
      },
      {
        title: '目的を持ってキャリアを築く',
        subtitle:
          'VUPは単なる化学会社ではありません。化学を通じて持続可能な未来を創造することに専念するイノベーターのコミュニティです。',
        blockName: null,

        features: [
          {
            title: '科学的卓越性',
            content: '私たちは化学イノベーションと研究方法論において最高の基準を追求します。',
          },
          {
            title: 'ピープルファースト',
            content: '私たちはチームメンバーの幸福、成長、発展を優先します。',
          },
          {
            title: '持続可能なイノベーション',
            content: '今日のニーズに応えながら、明日の資源を保護するソリューションを開発します。',
          },

          {
            title: 'インクルーシブなコラボレーション',
            content: '私たちは多様な視点を尊重し、誰もが帰属意識を持てる環境を育みます。',
          },
        ],
        blockType: 'career',
        cta: {
          title: '影響を与える準備はできていますか？',
          description:
            '当社のオープンポジションを検索し、あなたの専門知識が有意義なイノベーションに貢献するチームに参加してください。',
          links: [
            {
              link: {
                type: 'custom',
                url: '/sustainable-solutions',
                label: '持続可能なソリューションを発見',
                appearance: 'default',
              },
            },
          ],
        },
      },
      {
        title: 'より良い明日のための持続可能な化学',
        subtitle:
          '私たちは、お客様が必要とする革新的なソリューションを提供しながら、地球を保護するために化学プロセスを再考しています。',

        image: sustainabilitydemoImageDoc,
        blockName: null,
        features: [
          {
            title: 'サーキュラーケミストリー',
            content:
              '革新的なリサイクル・再利用システムを通じて廃棄物を最小限に抑え、資源効率を最大化するプロセスを開発しています。',
          },
          {
            title: '水資源の保全',
            content:
              '高度な水処理およびリサイクル技術を導入し、消費量を削減し、地域の流域を保護しています。',
          },
          {
            title: 'クリーンな製造',
            content: 'エネルギー効率の高い設備とゼロエミッション技術で生産施設を変革しています。',
          },
          {
            title: '生物多様性の保護',
            content:
              '保全活動を支援し、当社の事業が地域の生態系に与える影響を最小限に抑えるようにしています。',
          },
        ],
        blockType: 'sustainability',
        card: {
          title: 'ネットゼロへのコミットメント',

          description: {
            root: {
              children: [
                {
                  children: [
                    {
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: '私たちは、2030年までにカーボンニュートラルを、2040年までにバリューチェーン全体でネットゼロエミッションを達成するという野心的な目標を設定しました。このコミットメントは、研究の優先事項から製造プロセスまで、あらゆるものを推進します。',
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
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              type: 'root',
              version: 1,
            },
          },
        },
        cta: {
          title: '持続可能な未来を創造するためにご参加ください',
          description:
            '当社のサステナビリティへの取り組みと、環境フットプリントを最小限に抑えながらプラスの影響を最大化するための取り組みについて詳しくご覧ください。',

          links: [
            {
              link: {
                type: 'custom',
                url: '/sustainable-solutions',
                label: '持続可能なソリューションを発見',
                appearance: 'default',
              },
            },
          ],
        },
      },
    ],
    meta: {
      title: 'VUPケミカルソリューションズ',
      description: '特殊化学品ソリューションおよび研究サービスのリーディングプロバイダー',
    },
    slug: 'home',
    _status: 'published' as const,
  }
}
