import type { Media } from '@/payload-types'

type HomeArgs = {
  backgroundImage1: Media
  featuredImage1: Media
  featuredCardImage1: Media
  featuredCardImage2: Media
  featuredCardImage3: Media
  backgroundImage2: Media
  featuredImage2: Media
  featuredCardImage4: Media
  featuredCardImage5: Media
  featuredCardImage6: Media
}

export function home(args: HomeArgs) {
  const {
    backgroundImage1,
    featuredImage1,
    featuredCardImage1,
    featuredCardImage2,
    featuredCardImage3,
    backgroundImage2,
    featuredImage2,
    featuredCardImage4,
    featuredCardImage5,
    featuredCardImage6,
  } = args

  return {
    title: 'Home',
    hero: {
      type: 'carousel',
      title: 'VUP Chem',
      description: 'This is the description',
      slides: [
        {
          title: 'Advancing Scientific Research',
          subtitle: 'Pioneering chemical innovations for researchers and academic institutions',
          backgroundImage: backgroundImage1,
          featuredCards: [
            {
              title: 'Research Partnerships',
              description:
                'Collaborate with our scientists on groundbreaking chemical research initiatives',
              image: featuredCardImage1,
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
              title: 'Research Partnerships',
              description:
                'Collaborate with our scientists on groundbreaking chemical research initiatives',
              image: featuredCardImage2,
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
              title: 'Research Partnerships',
              description:
                'Collaborate with our scientists on groundbreaking chemical research initiatives',
              image: featuredCardImage3,
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
          ],
          badge: {
            text: '25+ years of research expertise',
          },
          featuredItem: {
            title: 'Novel Catalytic Systems',
            description:
              'Our latest breakthrough in transition metal catalysis enables reactions at lower temperatures with higher yields.',
            image: featuredImage1,
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/catalytic-systems',
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
                  url: '/solutions',
                  label: 'View Solutions',
                  appearance: 'default',
                },
              },
            ],
          },
        },
        {
          title: 'Industrial Chemical Solutions',
          subtitle: 'High-performance formulations engineered for your production needs',
          backgroundImage: backgroundImage2,
          featuredCards: [
            {
              title: 'Coating Systems',
              description:
                'Advanced polymer coatings with superior durability and corrosion resistance',
              image: featuredCardImage4,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/coating-systems',
                    label: 'Learn More',
                    appearance: 'default',
                  },
                },
              ],
            },
            {
              title: 'Coating Systems',
              description:
                'Advanced polymer coatings with superior durability and corrosion resistance',
              image: featuredCardImage5,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/coating-systems',
                    label: 'Learn More',
                    appearance: 'default',
                  },
                },
              ],
            },
            {
              title: 'Coating Systems',
              description:
                'Advanced polymer coatings with superior durability and corrosion resistance',
              image: featuredCardImage6,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/coating-systems',
                    label: 'Learn More',
                    appearance: 'default',
                  },
                },
              ],
            },
          ],
          badge: {
            text: '300+ patented formulations',
          },
          featuredItem: {
            title: 'Ultra-Durable Coating System',
            description:
              'Our advanced polymer coating provides unmatched corrosion resistance for industrial applications.',
            image: featuredImage2,
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/coating-systems',
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
                  url: '/industrial-solutions',
                  label: 'Explore Industrial Solutions',
                  appearance: 'default',
                },
              },
            ],
          },
        },
        {
          title: 'Chemistry for a Sustainable Future',
          subtitle: 'Environmentally responsible innovations and green chemistry solutions',
          backgroundImage: backgroundImage1,
          featuredCards: [
            {
              title: 'Bio-Based Polymers',
              description:
                'Plant-derived alternatives with 70% lower carbon footprint than conventional options',
              image: featuredCardImage1,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/bio-based-polymers',
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
              image: featuredCardImage2,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/green-manufacturing',
                    label: 'Learn More',
                    appearance: 'default',
                  },
                },
              ],
            },
            {
              title: 'Circular Economy Solutions',
              description: 'Innovative approaches to product lifecycle and materials recycling',
              image: featuredCardImage3,
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
            text: '50+ global partnerships for sustainability',
          },
          featuredItem: {
            title: 'Bio-Based Polymers',
            description:
              'Our plant-derived polymers offer the same performance as petroleum-based alternatives with 70% lower carbon footprint.',
            image: featuredImage1,
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/bio-based-polymers',
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
                  url: '/sustainable-solutions',
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
            backgroundImage: featuredImage1,
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
            backgroundImage: featuredImage1,
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
            backgroundImage: featuredImage1,
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
            backgroundImage: featuredImage1,
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
        type: 'product',
        title: 'Key Areas of Expertise',
        description:
          'Discover how our chemical expertise can transform your business needs and drive innovation',
        showCta: false,
        blockName: null,
        contentItems: [],
        features: [],
        blockType: 'showcase',

        products: [
          {
            id: 1,
            name: 'Dimethylolbutyric Acid (DMBA)',
            description:
              'Enables solvent-free PUD synthesis with improved processing efficiency (lower temperature) and potentially enhanced film resistance.',

            chemicalFamily: [1, 2],
            chemicalStructureImage: featuredImage1,
            technicalSpecifications: {
              chemicalName: '2,2-Bis(hydroxymethyl)butyric acid',
              casNumber: '10097-02-6',
              ecNumber: '233-226-5',

              synonyms: [
                {
                  synonym: '2,2-Bis(hydroxymethyl)butyric acid',
                },

                {
                  synonym: 'DMBA',
                },
              ],
              molecularFormula: 'C₆H₁₂O₄',
              molecularWeight: '148.16 g/mol',
              labVerified: 'Verified',
            },
            VupSpecifications: {
              appearance: 'White crystalline powder',
              purity: 'min. 99.0 % wt',
              acidValue: 'min. 375 mg KOH/g',
              hydroxylValue: 'min. 750 mg KOH/g',
              waterContent: 'max. 0.3 % wt',
              ashContent: 'max. 0.03 % wt',
              meltingPoint: null,
              boilingPoint: null,
              density: null,
              solubility: null,
            },
            applications: [
              {
                image: featuredImage1,
                application: 'Solvent-Free PUDs',
                description: 'Enables solvent-free processing',
              },
              {
                image: featuredImage1,
                application: 'Waterborne Coatings',
                description: 'Provides water dispersibility',
              },

              {
                image: featuredImage1,
                application: 'Polyurethane Dispersions',
                description: 'Enhances film resistance',
              },
            ],
            keyFeatures: [
              {
                feature: 'Solvent-Free Processing',
                description: 'Enables solvent-free PUD synthesis',
              },
              {
                feature: 'Lower Processing Temperature',
                description: 'Improves manufacturing efficiency',
              },
              {
                feature: 'Enhanced Film Resistance',
                description: 'Provides superior durability',
              },
              {
                feature: 'Improved Hydrophilicity',
                description: 'Better water compatibility',
              },

              {
                feature: 'Reduced VOC',
                description: 'Environmentally friendly formulations',
              },
            ],
            caseStudies: [],

            relatedProducts: [],

            faq: [
              {
                question: 'How does DMBA compare to DMPA?',
                answer:
                  'DMBA offers improved processing efficiency at lower temperatures and potentially enhanced film resistance compared to DMPA.',
              },
              {
                question: 'What are the main applications for DMBA?',
                answer:
                  'DMBA is primarily used in solvent-free PUDs, waterborne coatings, and polyurethane dispersions requiring enhanced film resistance.',
              },

              {
                question: 'Why choose DMBA for polyurethane dispersions?',
                answer:
                  'DMBA enables solvent-free PUD synthesis with improved processing efficiency and enhanced film resistance properties.',
              },
            ],
            slug: 'dmba',
            slugLock: true,
            updatedAt: '2025-05-10T03:06:07.735Z',
            createdAt: '2025-05-10T03:06:07.735Z',
            _status: 'published',
          },
          {
            id: 2,
            name: 'Dimethylolpropionic Acid (DMPA)',
            description:
              'A unique trifunctional molecule featuring two primary hydroxyl groups and one tertiary carboxylic group, essential for creating high-performance water-soluble alkyds, polyesters, and polyurethane dispersions (PUDs).',

            chemicalFamily: [1],
            chemicalStructureImage: featuredImage1,
            technicalSpecifications: {
              chemicalName: '3-Hydroxy-2-(hydroxymethyl)-2-methylpropanoic acid',
              casNumber: '4767-03-7',
              ecNumber: '225-306-3',

              synonyms: [
                {
                  synonym: '2,2-Bis(hydroxymethyl)propionic acid',
                },

                {
                  synonym: 'DMPA',
                },
              ],
              molecularFormula: 'C₅H₁₀O₄',
              molecularWeight: '134.13 g/mol',
              labVerified: 'Verified',
            },
            VupSpecifications: {
              appearance: 'White crystalline powder',
              purity: 'min. 98.5 % wt',
              acidValue: 'min. 412 mg KOH/g',
              hydroxylValue: 'min. 824 mg KOH/g',
              waterContent: 'max. 0.3 % wt',
              ashContent: 'max. 0.03 % wt',
              meltingPoint: null,
              boilingPoint: null,
              density: null,
              solubility: null,
            },
            applications: [
              {
                image: featuredImage1,
                application: 'Waterborne Coatings (General)',
                description: 'Enables waterborne formulations',
              },
              {
                image: featuredImage1,
                application: 'Polyurethane Dispersions (PUDs)',
                description: 'Improves coating properties',
              },
              {
                image: featuredImage1,
                application: 'Alkyd Resin Coatings',
                description: 'Enhances adhesion',
              },

              {
                image: featuredImage1,
                application: 'Polyester Resin Coatings',
                description: 'Provides versatile reactivity',
              },
            ],
            keyFeatures: [
              {
                feature: 'Water Solubility / Dispersibility Agent',
                description: 'Enables waterborne formulations',
              },
              {
                feature: 'Adhesion Promotion',
                description: 'Improves coating adhesion to substrates',
              },
              {
                feature: 'Improved Flexibility',
                description: 'Enhances coating flexibility and durability',
              },
              {
                feature: 'Enhanced Gloss',
                description: 'Provides superior finish quality',
              },

              {
                feature: 'Reduced VOC',
                description: 'Waterborne formulation enabler',
              },
            ],
            caseStudies: [],

            relatedProducts: [],

            faq: [
              {
                question: 'What are the main applications for DMPA?',
                answer:
                  'DMPA is primarily used in waterborne coatings, polyurethane dispersions (PUDs), alkyd resin coatings, and polyester resin coatings.',
              },
              {
                question: 'What makes DMPA unique?',
                answer:
                  'DMPA is a trifunctional molecule with two primary hydroxyl groups and one tertiary carboxylic group, making it ideal for creating water-soluble polymers.',
              },

              {
                question: 'How does DMPA contribute to VOC reduction?',
                answer:
                  'DMPA enables the formulation of waterborne coatings, which significantly reduces the need for volatile organic compounds (VOCs) in coating applications.',
              },
            ],
            slug: 'dmpa',
            slugLock: true,
            updatedAt: '2025-05-10T03:06:07.738Z',
            createdAt: '2025-05-10T03:06:07.739Z',
            _status: 'published',
          },
          {
            id: 3,
            name: '3-Hydroxypivalic Acid (HPVA)',
            description:
              'A unique hydroxy acid featuring a neopentyl structure, essential for synthesizing high-performance polyesters and esters with exceptional stability.',

            chemicalFamily: [1],
            chemicalStructureImage: featuredImage1,
            technicalSpecifications: {
              chemicalName: '3-Hydroxypivalic Acid',
              casNumber: '4835-90-9',
              ecNumber: '225-419-8',

              synonyms: [
                {
                  synonym: 'Hydroxypivalic Acid',
                },

                {
                  synonym: '2,2-Dimethyl-3-hydroxypropionic acid',
                },
              ],
              molecularFormula: 'C₅H₁₀O₃',
              molecularWeight: '118.13 g/mol',
              labVerified: 'Verified',
            },
            VupSpecifications: {
              appearance: 'White crystalline powder/solid',
              purity: 'min. 98.0 % wt',
              acidValue: null,
              hydroxylValue: null,
              waterContent: null,
              ashContent: null,
              meltingPoint: '122 – 124 °C',
              boilingPoint: null,
              density: null,
              solubility: null,
            },
            applications: [
              {
                image: featuredImage1,
                application: 'Polyester Resins',
                description: 'Provides exceptional stability',
              },
              {
                image: featuredImage1,
                application: 'Powder Coatings',
                description: 'Enhances durability',
              },
              {
                image: featuredImage1,
                application: 'Coil Coatings',
                description: 'Improves weather resistance',
              },

              {
                image: featuredImage1,
                application: 'Synthetic Lubricants',
                description: 'Offers thermal stability',
              },
            ],
            keyFeatures: [
              {
                feature: 'Enhanced Hydrolytic Stability',
                description: 'Exceptional stability in various conditions',
              },
              {
                feature: 'Improved Thermal Stability',
                description: 'Withstands high temperatures',
              },
              {
                feature: 'Excellent Weather Resistance',
                description: 'Durable polymer building block',
              },
              {
                feature: 'High Chemical Resistance',
                description: 'Resistant to various chemicals',
              },

              {
                feature: 'Low Volatility',
                description: 'Stable in formulations',
              },
            ],
            caseStudies: [],

            relatedProducts: [],

            faq: [
              {
                question: 'What makes HPVA unique?',
                answer:
                  'HPVA features a neopentyl structure that provides exceptional stability in polyesters and esters.',
              },
              {
                question: 'What are the main applications for HPVA?',
                answer:
                  'HPVA is used in polyester resins, powder coatings, coil coatings, and synthetic lubricants requiring high stability.',
              },

              {
                question: 'Why is HPVA preferred for weather-resistant applications?',
                answer:
                  'The unique neopentyl structure of HPVA provides excellent weather resistance and durability in outdoor applications.',
              },
            ],
            slug: 'hpva',
            slugLock: true,
            updatedAt: '2025-05-10T03:06:07.738Z',
            createdAt: '2025-05-10T03:06:07.740Z',
            _status: 'published',
          },
        ],

        cta: {
          title: null,
          description: null,
          links: [],
        },
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

        image: featuredImage1,
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
      {
        blockName: null,
        blockType: 'news',
        title: 'News & Insights',
        description:
          "Stay updated with VUP's latest achievements, innovations, and industry insights.",
        badge: 'Latest Updates',
        linkLabel: 'View all news and publications',
        newsItems: [],
      },
    ],
    meta: {
      title: 'VUP Chemical Solutions',
      description: 'Leading provider of specialized chemical solutions and research services',
    },
    slug: 'home',
    _status: 'published',
  }
}
