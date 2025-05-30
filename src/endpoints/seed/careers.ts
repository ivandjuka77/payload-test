import type { Media } from '@/payload-types'

type CareersArgs = {
  featuredImage1: Media
}

export function careers({ featuredImage1 }: CareersArgs) {
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
