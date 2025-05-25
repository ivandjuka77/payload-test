import type { Media } from '@/payload-types'

type SustainabilityArgs = {
  heroImage: Media
  pillar1Image: Media
  pillar2Image: Media
  pillar3Image: Media
  pillar4Image: Media
  focus1Image: Media
  focus2Image: Media
  focus3Image: Media
  focus4Image: Media
}

export function sustainability(args: SustainabilityArgs) {
  const {
    heroImage,
    pillar1Image,
    pillar2Image,
    pillar3Image,
    pillar4Image,
    focus1Image,
    focus2Image,
    focus3Image,
    focus4Image,
  } = args

  return {
    title: 'Sustainability',

    hero: {
      type: 'backgroundImage' as const,
      title: 'Building a Responsible Future',
      description:
        'At VUP, a.s., our legacy of over 70 years in chemical research and production is deeply intertwined with a commitment to responsible practices and sustainable development.',

      cta: {
        links: [],
      },
      media: heroImage.id,
      slides: [],
    },
    layout: [
      {
        title: 'Our Sustainability Pillars',
        subtitle:
          'Our comprehensive approach to sustainability is built on four fundamental pillars that guide our operations, innovation, and partnerships.',
        blockName: null,

        cards: [
          {
            image: pillar1Image.id,
            title: 'Environmental Responsibility',
            subtitle: 'Minimizing Environmental Impact Through Innovation',
            paragraph: {
              root: {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: "Our commitment to environmental stewardship drives every aspect of our operations. Through efficient resource management, waste reduction initiatives, and innovative green chemistry R&D, we're continuously working to reduce our environmental footprint. Our water management systems and emissions control technologies represent industry-leading practices in sustainable chemical manufacturing.",
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
          {
            image: pillar2Image.id,
            title: 'Labor & Human Rights',
            subtitle: 'Fostering a Safe and Inclusive Workplace',
            paragraph: {
              root: {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'We believe our success is built on the well-being of our people. Our comprehensive approach to workplace safety, professional development, and employee welfare sets industry standards. Through robust health and safety protocols, continuous training programs, and inclusive policies, we ensure every team member can thrive in a supportive and respectful environment.',
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
          {
            image: pillar3Image.id,
            title: 'Ethics & Governance',
            subtitle: 'Upholding the Highest Standards of Business Conduct',
            paragraph: {
              root: {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Integrity is fundamental to our operations. Our governance framework ensures compliance with all applicable regulations while promoting transparent business practices. From data security to anti-corruption measures, we maintain rigorous standards that build trust with our stakeholders and set an example for ethical business conduct in the chemical industry.',
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
          {
            image: pillar4Image.id,
            title: 'Sustainable Procurement',
            subtitle: 'Building Responsible Supply Chains',
            paragraph: {
              root: {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: "Our commitment to sustainability extends throughout our supply chain. We carefully select and collaborate with suppliers who share our values and meet our stringent environmental and social standards. Through regular evaluations and partnerships, we're working to create a more sustainable and responsible chemical supply chain that benefits all stakeholders.",
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
        ],
        blockType: 'verticalCards',
      },
      {
        badge: 'Strategic Focus Areas',
        title: 'Our Path to Sustainable Excellence',
        subtitle:
          'Four strategic pillars guide our continuous improvement journey, driving innovation that creates lasting value for all stakeholders.',
        blockName: null,

        cards: [
          {
            image: focus1Image.id,
            title: 'Future Technologies',
            paragraph: {
              root: {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Investing in cutting-edge technologies that advance sustainable practices and enhance operational efficiency. Our research and development teams focus on implementing innovative solutions that reduce environmental impact while improving productivity across our manufacturing processes.',
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
            highlights: [
              {
                highlight: 'Energy-efficient equipment optimization',
              },
              {
                highlight: 'Advanced waste recycling systems',
              },

              {
                highlight: 'Green chemistry research programs',
              },
            ],
          },
          {
            image: focus2Image.id,
            title: 'Product Stewardship',
            paragraph: {
              root: {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Ensuring safe and responsible use of our products throughout their entire lifecycle from development to disposal. We take a holistic approach to product management, considering environmental and social impacts at every stage while providing comprehensive support to our customers and partners.',
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
            highlights: [
              {
                highlight: 'Comprehensive safety documentation',
              },
              {
                highlight: 'Lifecycle impact assessments',
              },

              {
                highlight: 'Customer training programs',
              },
            ],
          },
          {
            image: focus3Image.id,
            title: 'Safer Applications',
            paragraph: {
              root: {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Developing innovative solutions that prioritize human health and environmental safety in all applications. Through continuous research and industry collaboration, we strive to set new standards for chemical safety while maintaining the high performance our customers expect.',
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
            highlights: [
              {
                highlight: 'Hazard reduction research',
              },
              {
                highlight: 'Safety profile improvements',
              },

              {
                highlight: 'Safer manufacturing processes',
              },
            ],
          },
          {
            image: focus4Image.id,
            title: 'Stakeholder Engagement',
            paragraph: {
              root: {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Building transparent relationships and collaborative partnerships to drive industry-wide transformation. We actively engage with customers, suppliers, regulators, and communities to share knowledge, gather feedback, and collectively work towards more sustainable chemical solutions.',
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
            highlights: [
              {
                highlight: 'Regular transparency reporting',
              },
              {
                highlight: 'Multi-stakeholder dialogue',
              },

              {
                highlight: 'Industry initiative participation',
              },
            ],
          },
        ],
        blockType: 'gridImageCards',
      },
    ],

    meta: {
      title: null,
      image: null,
      description: null,
    },
    publishedAt: '2025-05-24T10:24:53.543Z',
    slug: 'sustainability',
    slugLock: true,
    _status: 'published' as const,
  }
}
