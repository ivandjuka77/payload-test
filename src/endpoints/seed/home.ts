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
  polymerisationInhibitors: ProductCategory
  // Posts
  post1: Post
  post2: Post
  post3: Post
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
    polymerisationInhibitors,
    post1,
    post2,
    post3,
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
          title: 'Chemical Specialties Production',
          subtitle:
            'VUP produces high‑purity chemical intermediates used by coatings, adhesives and polymer manufacturers.',
          backgroundImage: slide1HeroBgDoc,
          featuredCards: [
            {
              title: 'Hindered Amines',
              description: 'precursors for HALS stabilizers and oxidation catalysts',
              image: slide1HeroCard1Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/products/category/hindered-amines',
                    label: 'Explore Products',
                    appearance: 'default',
                  },
                },
              ],
            },
            {
              title: 'Polymerisation Inhibitors',
              description:
                'VUP supplies 4‑Hydroxy‑TEMPO, a stable nitroxyl radical used by polymer manufacturers and refiners as a polymerisation inhibitor for monomer storage and transport.',
              image: slide1HeroCard2Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/products/category/polymerisation-inhibitors',
                    label: 'Explore Products',
                    appearance: 'default',
                  },
                },
              ],
            },
            {
              title: 'Diaminopolyethylene glycols',
              description:
                'Diaminopolyethylene glycols for biomedical and surface modification applications',
              image: slide1HeroCard3Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/products/category/diaminopolyethylene-glycols',
                    label: 'Explore Products',
                    appearance: 'default',
                  },
                },
              ],
            },
          ],
          badge: {
            icon: 'atom',
            text: 'Premium chemical specialties',
          },
          featuredItem: {
            title: 'Hydroxy Acids',
            description:
              'DMPA, DMBA and HPVA are high‑purity hydroxy acids used to synthesize waterborne polyurethane dispersions and durable polyester resins for coatings, inks and adhesives',
            image: slide1HeroFeaturedItemDoc,
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/products/category/hydroxy-acids',
                  label: 'View Products',
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
                  url: '/products',
                  label: 'View All Products',
                  appearance: 'default',
                },
              },
            ],
          },
        },
        {
          title: 'Research & Development Services',
          subtitle: 'Comprehensive analytical testing and custom synthesis solutions',
          backgroundImage: slide2HeroBgDoc,
          featuredCards: [
            {
              title: 'Custom Synthesis Manufacturing',
              description:
                'Tailored chemical synthesis solutions designed to meet your specific requirements',
              image: slide2HeroCard1Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/services/custom-synthesis-manufacturing',
                    label: 'Learn More',
                    appearance: 'default',
                  },
                },
              ],
            },
            {
              title: 'Research & Development',
              description:
                'Innovative R&D services to advance your product development initiatives',
              image: slide2HeroCard2Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/services/research-development',
                    label: 'Learn More',
                    appearance: 'default',
                  },
                },
              ],
            },
            {
              title: 'Regulatory & Technical Support',
              description:
                'Expert guidance on compliance, documentation, and technical specifications',
              image: slide2HeroCard3Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/services/regulatory-technical-support',
                    label: 'Learn More',
                    appearance: 'default',
                  },
                },
              ],
            },
          ],
          badge: {
            icon: 'building2',
            text: 'ISO-certified laboratories',
          },
          featuredItem: {
            title: 'Analytical Testing Services',
            description:
              'State-of-the-art analytical testing and quality control services ensuring the highest standards of precision and reliability.',
            image: slide2HeroFeaturedItemDoc,
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/services/analytical-testing',
                  label: 'Discover Services',
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
                  url: '/services',
                  label: 'View All Services',
                  appearance: 'default',
                },
              },
            ],
          },
        },
        {
          title: 'Committed to Sustainability',
          subtitle: 'Leading the way in environmentally responsible chemistry',
          backgroundImage: slide3HeroBgDoc,
          featuredCards: [
            {
              title: 'Environmental Certifications',
              description:
                'Recognized excellence in sustainable practices and environmental stewardship',
              image: slide3HeroCard1Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/sustainability',
                    label: 'View Certifications',
                    appearance: 'default',
                  },
                },
              ],
            },
            {
              title: 'Continuous Innovation',
              description:
                'Pioneering sustainable chemical solutions through constant research and development',
              image: slide3HeroCard2Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/news',
                    label: 'Read More',
                    appearance: 'default',
                  },
                },
              ],
            },
            {
              title: 'Our Sustainability Commitment',
              description:
                'Dedicated to reducing environmental impact while delivering exceptional quality',
              image: slide3HeroCard3Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/sustainability',
                    label: 'Learn More',
                    appearance: 'default',
                  },
                },
              ],
            },
          ],
          badge: {
            icon: 'globe',
            text: 'EcoVadis certified partner',
          },
          featuredItem: {
            title: 'EcoVadis Recognition',
            description:
              'Proud recipient of the EcoVadis sustainability medal, demonstrating our commitment to environmental excellence and responsible business practices.',
            image: slide3HeroFeaturedItemDoc,
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/news',
                  label: 'Read Our Story',
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
                  label: 'Discover Our Sustainability Journey',
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
                  url: '/services',
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
        categories: [hydroxyAcids, hinderedAmines, polymerisationInhibitors],
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
        items: [post1, post2, post3],
      },
      {
        title: 'Our Path to Sustainable Excellence',
        subtitle:
          'Four strategic pillars guide our continuous improvement journey, driving innovation that creates lasting value for all stakeholders.',
        image: sustainabilitydemoImageDoc,
        blockName: null,
        features: [
          {
            title: 'Future Technologies',
            content:
              'Investing in cutting-edge technologies that advance sustainable practices and enhance operational efficiency. Our R&D teams focus on innovative solutions that reduce environmental impact while improving productivity.',
          },
          {
            title: 'Product Stewardship',
            content:
              'Ensuring safe and responsible use of our products throughout their entire lifecycle from development to disposal. We take a holistic approach considering environmental and social impacts at every stage.',
          },
          {
            title: 'Safer Applications',
            content:
              'Developing innovative solutions that prioritize human health and environmental safety in all applications. Through continuous research and collaboration, we strive to set new standards for chemical safety.',
          },
          {
            title: 'Stakeholder Engagement',
            content:
              'Building transparent relationships and collaborative partnerships to drive industry-wide transformation. We actively engage with customers, suppliers, regulators, and communities to work towards sustainable solutions.',
          },
        ],
        blockType: 'sustainability',
        card: {
          title: 'Our Commitment to Environmental Responsibility',
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
                      text: "Our commitment to environmental stewardship drives every aspect of our operations. Through efficient resource management, waste reduction initiatives, and innovative green chemistry R&D, we're continuously working to reduce our environmental footprint.",
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
          title: 'Join Us in Building a Responsible Future',
          description:
            'Learn more about our sustainability initiatives and how our commitment is validated by independent assessments and internationally recognized certifications.',
          links: [
            {
              link: {
                type: 'custom',
                url: '/sustainability',
                label: 'Discover Our Sustainability Pillars',
                appearance: 'default',
              },
            },
          ],
        },
      },
      {
        title: 'Build Your Career With Purpose',
        subtitle:
          "At VUP, we're more than just a chemical company. We're a community of innovators dedicated to creating a sustainable future through chemistry.",
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
          title: 'Ready to make an impact? ',
          description:
            'Explore our open positions and join a team where your expertise contributes to meaningful innovation.',

          links: [
            {
              link: {
                type: 'custom',
                url: '/career',
                label: 'View Open Positions',
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
    polymerisationInhibitors,
    post1,
    post2,
    post3,
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
          title: 'Výroba chemických špecialít',
          subtitle:
            'VUP vyrába vysoko čisté chemické intermediáty používané nátery, lepidlá a polymerovými výrobcami.',
          backgroundImage: slide1HeroBgDoc,
          featuredCards: [
            {
              title: 'HALS (Hindered Amines)',
              description: 'precursors for HALS stabilizers and oxidation catalysts',
              image: slide1HeroCard1Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/products/category/hindered-amines',
                    label: 'Preskúmať produkty',
                    appearance: 'default',
                  },
                },
              ],
            },
            {
              title: 'Inhibítory polymerizácie',
              description:
                'VUP dodáva 4‑Hydroxy‑TEMPO, stabilný nitroxylový radikál používaný výrobcami polymérov a rafinérmi ako inhibítor polymerizácie pre skladovanie a transport monomerov.',
              image: slide1HeroCard2Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/products/category/polymerisation-inhibitors',
                    label: 'Preskúmať produkty',
                    appearance: 'default',
                  },
                },
              ],
            },
            {
              title: 'Diaminopolyethylene glycols',
              description:
                'Diaminopolyetylénglykoly pre biomedicínske aplikácie a povrchové úpravy',
              image: slide1HeroCard3Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/products/category/diaminopolyethylene-glycols',
                    label: 'Preskúmať produkty',
                    appearance: 'default',
                  },
                },
              ],
            },
          ],
          badge: {
            icon: 'atom',
            text: 'Prémiové chemické špeciality',
          },
          featuredItem: {
            title: 'Hydroxykyseliny',
            description:
              'DMPA, DMBA a HPVA sú vysoko čisté hydroxykyseliny používané na syntézu vodou riediteľných polyuretánových disperzií a odolných polyesterových živíc pre nátery, tlačiarenské farby a lepidlá',
            image: slide1HeroFeaturedItemDoc,
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/products/category/hydroxy-acids',
                  label: 'Zobraziť produkty',
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
                  url: '/products',
                  label: 'Zobraziť všetky produkty',
                  appearance: 'default',
                },
              },
            ],
          },
        },
        {
          title: 'Služby výskumu a vývoja',
          subtitle: 'Komplexné analytické testovanie a riešenia zákazkovej syntézy',
          backgroundImage: slide2HeroBgDoc,
          featuredCards: [
            {
              title: 'Zákazková syntéza a výroba',
              description:
                'Chemické syntézy na mieru navrhnuté tak, aby spĺňali vaše špecifické požiadavky',
              image: slide2HeroCard1Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/services/custom-synthesis-manufacturing',
                    label: 'Zistiť viac',
                    appearance: 'default',
                  },
                },
              ],
            },
            {
              title: 'Výskum a vývoj',
              description:
                'Inovatívne služby R&D na podporu vašich iniciatív v oblasti vývoja produktov',
              image: slide2HeroCard2Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/services/research-development',
                    label: 'Zistiť viac',
                    appearance: 'default',
                  },
                },
              ],
            },
            {
              title: 'Regulačná a technická podpora',
              description:
                'Odborné poradenstvo v oblasti zhody, dokumentácie a technických špecifikácií',
              image: slide2HeroCard3Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/services/regulatory-technical-support',
                    label: 'Zistiť viac',
                    appearance: 'default',
                  },
                },
              ],
            },
          ],
          badge: {
            icon: 'building2',
            text: 'Laboratóriá s certifikáciou ISO',
          },
          featuredItem: {
            title: 'Služby analytického testovania',
            description:
              'Najmodernejšie analytické testovanie a služby kontroly kvality zaisťujúce najvyššie štandardy presnosti a spoľahlivosti.',
            image: slide2HeroFeaturedItemDoc,
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/services/analytical-testing',
                  label: 'Objaviť služby',
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
                  url: '/services',
                  label: 'Zobraziť všetky služby',
                  appearance: 'default',
                },
              },
            ],
          },
        },
        {
          title: 'Záväzok k udržateľnosti',
          subtitle: 'Ukazujeme cestu v environmentálne zodpovednej chémii',
          backgroundImage: slide3HeroBgDoc,
          featuredCards: [
            {
              title: 'Environmentálne certifikácie',
              description:
                'Uznávaná excelentnosť v udržateľných postupoch a starostlivosti o životné prostredie',
              image: slide3HeroCard1Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/sustainability',
                    label: 'Zobraziť certifikácie',
                    appearance: 'default',
                  },
                },
              ],
            },
            {
              title: 'Neustála inovácia',
              description:
                'Priekopnícke udržateľné chemické riešenia prostredníctvom neustáleho výskumu a vývoja',
              image: slide3HeroCard2Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/news',
                    label: 'Čítať viac',
                    appearance: 'default',
                  },
                },
              ],
            },
            {
              title: 'Náš záväzok k udržateľnosti',
              description:
                'Zaviazali sme sa znižovať dopad na životné prostredie pri poskytovaní výnimočnej kvality',
              image: slide3HeroCard3Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/sustainability',
                    label: 'Zistiť viac',
                    appearance: 'default',
                  },
                },
              ],
            },
          ],
          badge: {
            icon: 'globe',
            text: 'Partner s certifikáciou EcoVadis',
          },
          featuredItem: {
            title: 'Uznanie EcoVadis',
            description:
              'Hrdý držiteľ medaily EcoVadis za udržateľnosť, ktorá demonštruje náš záväzok k environmentálnej excelentnosti a zodpovedným obchodným praktikám.',
            image: slide3HeroFeaturedItemDoc,
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/news',
                  label: 'Prečítať náš príbeh',
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
                  label: 'Objavte našu cestu k udržateľnosti',
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
                  url: '/services',
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
        categories: [hydroxyAcids, hinderedAmines, polymerisationInhibitors],
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
        items: [post1, post2, post3],
      },
      {
        title: 'Naša cesta k udržateľnej excelentnosti',
        subtitle:
          'Štyri strategické piliere vedú našu cestu neustáleho zlepšovania a poháňajú inovácie, ktoré vytvárajú trvalú hodnotu pre všetky zainteresované strany.',
        image: sustainabilitydemoImageDoc,
        blockName: null,
        features: [
          {
            title: 'Technológie budúcnosti',
            content:
              'Investície do špičkových technológií, ktoré podporujú udržateľné postupy a zvyšujú prevádzkovú efektivitu. Naše R&D tímy sa zameriavajú na inovatívne riešenia, ktoré znižujú dopad na životné prostredie a zároveň zlepšujú produktivitu.',
          },
          {
            title: 'Zodpovedná správa produktov',
            content:
              'Zabezpečenie bezpečného a zodpovedného používania našich produktov počas celého ich životného cyklu, od vývoja až po likvidáciu. Uplatňujeme holistický prístup zohľadňujúci environmentálne a sociálne dopady v každej fáze.',
          },
          {
            title: 'Bezpečnejšie aplikácie',
            content:
              'Vývoj inovatívnych riešení, ktoré uprednostňujú ľudské zdravie a environmentálnu bezpečnosť vo všetkých aplikáciách. Prostredníctvom neustáleho výskumu a spolupráce sa snažíme stanoviť nové štandardy pre chemickú bezpečnosť.',
          },
          {
            title: 'Angažovanosť zainteresovaných strán',
            content:
              'Budovanie transparentných vzťahov a partnerských spoluprác na podporu transformácie v celom odvetví. Aktívne spolupracujeme so zákazníkmi, dodávateľmi, regulačnými orgánmi a komunitami na hľadaní udržateľných riešení.',
          },
        ],
        blockType: 'sustainability',
        card: {
          title: 'Náš záväzok k environmentálnej zodpovednosti',
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
                      text: 'Náš záväzok k starostlivosti o životné prostredie poháňa každý aspekt našej činnosti. Prostredníctvom efektívneho riadenia zdrojov, iniciatív na znižovanie odpadu a inovatívneho výskumu a vývoja v oblasti zelenej chémie neustále pracujeme na znižovaní našej environmentálnej stopy.',
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
          title: 'Pridajte sa k nám pri budovaní zodpovednej budúcnosti',
          description:
            'Zistite viac o našich iniciatívach v oblasti udržateľnosti a o tom, ako je náš záväzok potvrdený nezávislými hodnoteniami a medzinárodne uznávanými certifikáciami.',
          links: [
            {
              link: {
                type: 'custom',
                url: '/sustainability',
                label: 'Objavte naše piliere udržateľnosti',
                appearance: 'default',
              },
            },
          ],
        },
      },
      {
        title: 'Budujte si kariéru so zmyslom',
        subtitle:
          'V spoločnosti VUP sme viac než len chemická spoločnosť. Sme komunita inovátorov oddaných vytváraniu udržateľnej budúcnosti prostredníctvom chémie.',
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
          title: 'Ste pripravení niečo zmeniť?',
          description:
            'Preskúmajte naše otvorené pozície a pridajte sa k tímu, kde vaša odbornosť prispieva k zmysluplným inováciám.',

          links: [
            {
              link: {
                type: 'custom',
                url: '/career',
                label: 'Zobraziť otvorené pozície',
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
    slug: 'home',
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
    polymerisationInhibitors,
    post1,
    post2,
    post3,
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
          title: '特殊化学品製造',
          subtitle:
            'VUPは、塗料、接着剤、ポリマー製造業者が使用する高純度化学中間体を製造しています。',
          backgroundImage: slide1HeroBgDoc,
          featuredCards: [
            {
              title: 'ヒンダードアミン',
              description: 'HALS安定剤と酸化触媒の前駆体',
              image: slide1HeroCard1Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/products/category/hindered-amines',
                    label: '製品を見る',
                    appearance: 'default',
                  },
                },
              ],
            },
            {
              title: '重合禁止剤',
              description:
                'VUPは、4‑Hydroxy‑TEMPOを提供します。これは、ポリマー製造業者と精製業者がモノマーの保管と輸送のための抑制剤として使用する安定したニトロキルラジカルです。',
              image: slide1HeroCard2Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/products/category/polymerisation-inhibitors',
                    label: '製品を見る',
                    appearance: 'default',
                  },
                },
              ],
            },
            {
              title: 'ジアミノポリエチレングリコール',
              description: '生物医学および表面改質用途向けのジアミノポリエチレングリコール',
              image: slide1HeroCard3Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/products/category/diaminopolyethylene-glycols',
                    label: '製品を見る',
                    appearance: 'default',
                  },
                },
              ],
            },
          ],
          badge: {
            icon: 'atom',
            text: 'プレミアム特殊化学品',
          },
          featuredItem: {
            title: 'ヒドロキシ酸',
            description:
              'DMPA、DMBA、HPVAは、コーティング、インク、接着剤用の水性ポリウレタン分散液と耐久性ポリエステル樹脂の合成に使用される高純度ヒドロキシ酸です',
            image: slide1HeroFeaturedItemDoc,
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/products/category/hydroxy-acids',
                  label: '製品を表示',
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
                  url: '/products',
                  label: 'すべての製品を表示',
                  appearance: 'default',
                },
              },
            ],
          },
        },
        {
          title: '研究開発サービス',
          subtitle: '包括的な分析試験とカスタム合成ソリューション',
          backgroundImage: slide2HeroBgDoc,
          featuredCards: [
            {
              title: 'カスタム合成製造',
              description: 'お客様の特定の要件を満たすために設計された特注の化学合成ソリューション',
              image: slide2HeroCard1Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/services/custom-synthesis-manufacturing',
                    label: '詳細を見る',
                    appearance: 'default',
                  },
                },
              ],
            },
            {
              title: '研究開発',
              description: '製品開発イニシアチブを推進する革新的なR&Dサービス',
              image: slide2HeroCard2Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/services/research-development',
                    label: '詳細を見る',
                    appearance: 'default',
                  },
                },
              ],
            },
            {
              title: '規制および技術サポート',
              description: 'コンプライアンス、文書化、技術仕様に関する専門的なガイダンス',
              image: slide2HeroCard3Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/services/regulatory-technical-support',
                    label: '詳細を見る',
                    appearance: 'default',
                  },
                },
              ],
            },
          ],
          badge: {
            icon: 'building2',
            text: 'ISO認定試験所',
          },
          featuredItem: {
            title: '分析試験サービス',
            description: '最高水準の精度と信頼性を保証する最先端の分析試験および品質管理サービス。',
            image: slide2HeroFeaturedItemDoc,
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/services/analytical-testing',
                  label: 'サービスを発見',
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
                  url: '/services',
                  label: 'すべてのサービスを表示',
                  appearance: 'default',
                },
              },
            ],
          },
        },
        {
          title: 'サステナビリティへのコミットメント',
          subtitle: '環境に配慮した化学の分野をリード',
          backgroundImage: slide3HeroBgDoc,
          featuredCards: [
            {
              title: '環境認証',
              description: '持続可能な実践と環境スチュワードシップにおける卓越した評価',
              image: slide3HeroCard1Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/sustainability',
                    label: '認証を表示',
                    appearance: 'default',
                  },
                },
              ],
            },
            {
              title: '継続的イノベーション',
              description: '絶え間ない研究開発を通じて持続可能な化学ソリューションを開拓',
              image: slide3HeroCard2Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/news',
                    label: '続きを読む',
                    appearance: 'default',
                  },
                },
              ],
            },
            {
              title: 'サステナビリティへの取り組み',
              description: '卓越した品質を提供しながら、環境への影響を低減することに専念',
              image: slide3HeroCard3Doc,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/sustainability',
                    label: '詳細を見る',
                    appearance: 'default',
                  },
                },
              ],
            },
          ],
          badge: {
            icon: 'globe',
            text: 'EcoVadis認定パートナー',
          },
          featuredItem: {
            title: 'EcoVadisによる評価',
            description:
              'EcoVadisサステナビリティメダルを受賞。環境への卓越性と責任あるビジネス慣行への取り組みを実証しています。',
            image: slide3HeroFeaturedItemDoc,
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/news',
                  label: '当社のストーリーを読む',
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
                  label: 'サステナビリティへの取り組みを発見',
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
                  url: '/services',
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
        categories: [hydroxyAcids, hinderedAmines, polymerisationInhibitors],
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
        items: [post1, post2, post3],
      },
      {
        title: '持続可能な卓越性への道',
        subtitle:
          '4つの戦略的柱が、継続的な改善の道のりを導き、すべてのステークホルダーに持続的な価値を創造するイノベーションを推進します。',
        image: sustainabilitydemoImageDoc,
        blockName: null,
        features: [
          {
            title: '未来の技術',
            content:
              '持続可能な実践を推進し、運用効率を高める最先端技術への投資。当社のR&Dチームは、生産性を向上させながら環境への影響を低減する革新的なソリューションに焦点を当てています。',
          },
          {
            title: '製品スチュワードシップ',
            content:
              '開発から廃棄まで、製品ライフサイクル全体を通じて安全かつ責任ある使用を保証します。あらゆる段階で環境的および社会的影響を考慮した総合的なアプローチを採用しています。',
          },
          {
            title: 'より安全なアプリケーション',
            content:
              'すべてのアプリケーションにおいて人の健康と環境安全を優先する革新的なソリューションの開発。継続的な研究と協力を通じて、化学物質の安全性に関する新しい基準の設定に努めています。',
          },
          {
            title: 'ステークホルダーエンゲージメント',
            content:
              '透明性のある関係と協力的なパートナーシップを構築し、業界全体の変革を推進します。お客様、サプライヤー、規制当局、地域社会と積極的に関わり、持続可能なソリューションの実現に取り組みます。',
          },
        ],
        blockType: 'sustainability',
        card: {
          title: '環境責任へのコミットメント',
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
                      text: '環境スチュワードシップへのコミットメントは、当社の事業のあらゆる側面を推進しています。効率的な資源管理、廃棄物削減の取り組み、革新的なグリーンケミストリーの研究開発を通じて、環境フットプリントの削減に継続的に取り組んでいます。',
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
          title: '責任ある未来の構築に参加しませんか',
          description:
            '当社のサステナビリティへの取り組みと、独立した評価や国際的に認められた認証によって当社のコミットメントがどのように検証されているかをご覧ください。',
          links: [
            {
              link: {
                type: 'custom',
                url: '/sustainability',
                label: 'サステナビリティの柱を発見',
                appearance: 'default',
              },
            },
          ],
        },
      },
      {
        title: '目的を持ってキャリアを築く',
        subtitle:
          'VUPは単なる化学会社ではありません。化学を通じて持続可能な未来を創造することに専念するイノベーターのコミュニティです。',
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
          title: '影響を与える準備はできていますか？',
          description:
            '当社のオープンポジションを検索し、あなたの専門知識が有意義なイノベーションに貢献するチームに参加してください。',
          links: [
            {
              link: {
                type: 'custom',
                url: '/career',
                label: 'オープンポジションを表示',
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
