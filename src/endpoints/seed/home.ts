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

  // Sustainability
  sustainabilityImage1Doc: Media
}

export function home(args: HomeArgs) {
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
    sustainabilityImage1Doc,
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
                  url: '/sustainable-solutions',
                  label: 'Discover Sustainable Solutions',
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
                  url: '/sustainable-solutions',
                  label: 'Discover Sustainable Solutions',
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
                  url: '/sustainable-solutions',
                  label: 'Discover Sustainable Solutions',
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
                  url: '/sustainable-solutions',
                  label: 'Discover Sustainable Solutions',
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
        title: 'Key Areas of Expertise',
        description:
          'Discover how our chemical expertise can transform your business needs and drive innovation',
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
        items: [post1, post2, post3],
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

        image: sustainabilityImage1Doc,
        blockName: null,
        features: [
          {
            title: 'Circular Chemistry',
            content:
              'Developing processes that minimize waste and maximize resource efficiency through innovative recycling and reuse systems.',
          },
          {
            title: 'Circular Chemistry',
            content:
              'Developing processes that minimize waste and maximize resource efficiency through innovative recycling and reuse systems.',
          },
          {
            title: 'Circular Chemistry',
            content:
              'Developing processes that minimize waste and maximize resource efficiency through innovative recycling and reuse systems.',
          },
          {
            title: 'Circular Chemistry',
            content:
              'Developing processes that minimize waste and maximize resource efficiency through innovative recycling and reuse systems.',
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
