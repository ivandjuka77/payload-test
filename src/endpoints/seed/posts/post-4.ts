import type { Media, User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  featuredImage: Media
  contentImage: Media
  author: User
}

export const post4: (args: PostArgs) => RequiredDataFromCollectionSlug<'posts'> = ({
  featuredImage,
  contentImage,
  author,
}) => {
  return {
    title:
      'VUP Earns Prestigious EcoVadis Silver: How Our Research-Driven Chemical Specialties Pave the Way for a Sustainable Future',
    type: 'news',
    featured: true,
    description:
      'VUP proudly announces achieving EcoVadis Silver Medal, placing us in the top 9% of companies worldwide for sustainability performance in chemical research and production.',
    featuredImage: featuredImage.id,
    author: author,
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
                format: 0,
                mode: 'normal',
                style: '',
                text: 'We are immensely proud to announce a landmark achievement for VUP, a.s.: the award of a Silver Medal by EcoVadis, the globally trusted standard for business sustainability ratings. This significant recognition places VUP in the top 9% of companies worldwide within our specialized sector of chemical research and production.',
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
              blockName: 'Achievement Highlight',
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
                          text: 'EcoVadis Silver Medal:',
                          version: 1,
                        },
                        {
                          type: 'text',
                          detail: 0,
                          format: 0,
                          mode: 'normal',
                          style: '',
                          text: ' Top 9% of companies worldwide in chemical research and production sector for sustainability performance.',
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
              style: 'success',
            },
            format: '',
            version: 2,
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
                text: "It's a powerful affirmation of our more than 70-year legacy dedicated to innovation, quality, and, increasingly, a formalized commitment to sustainable practices. For our valued partners, this VUP EcoVadis Silver rating is more than an accolade. It is a clear signal of our robust ESG framework and our deep-seated dedication to responsible manufacturing.",
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
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Understanding EcoVadis: The Global Benchmark for Sustainability',
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
                text: "EcoVadis provides one of the world's most comprehensive and trusted assessments of company sustainability performance. Their methodology evaluates companies across four key themes: Environmental impact, Labor & Human Rights, Ethics, and Sustainable Procurement. Achieving a medal, particularly Silver, indicates a company has a structured and proactive approach to sustainability.",
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
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: "VUP's Journey to Silver: A Legacy of Innovation and Responsibility",
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
                text: "VUP's attainment of the EcoVadis Silver medal is not a recent pivot but the culmination of decades of dedicated work. Our foundation as a research institute, the Výskumný Ústav Petrochémie (Research Institute of Petrochemistry), has instilled a culture of continuous improvement and problem-solving.",
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
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Our core mission involves not just manufacturing chemicals, but pioneering R&D chemical specialties. Our work in methylolalkanoic acids like DMPA (Dimethylolpropionic Acid) and DMBA (Dimethylolbutyric Acid) has been pivotal in enabling the shift towards waterborne polyurethane dispersions (PUDs) and other coatings, significantly reducing VOC emissions compared to traditional solvent-based systems.',
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
                text: 'Our Specialized Products and Sustainability Impact',
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
                text: 'The production of hindered amines such as TEMP (2,2,6,6-Tetramethylpiperidine) and its renowned derivative TEMPO (2,2,6,6-Tetramethylpiperidin-1-oxyl) serves specialized markets including polymer additives and pharmaceutical intermediates. TEMPO is a crucial catalyst for selective and green oxidation processes in organic synthesis.',
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
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: "VUP's expertise extends to custom synthesis and unique products like DAPEG (Poly(ethylene glycol)bis(3-aminopropyl) terminated), which finds applications in the demanding biomedical field. Developing materials for such sensitive uses requires an exceptionally high level of quality control, safety, and ethical consideration.",
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
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'What This Means for Our Partners',
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
                text: 'This EcoVadis Silver rating offers our partners tangible benefits: assurance of a robust ESG framework, enhanced supply chain resilience, access to innovative and responsibly produced chemicals, support for your sustainability goals, and strengthened trust and reputation through alignment with a recognized sustainable partner.',
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
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Building a More Sustainable Future Together',
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
                text: "VUP a.s.'s EcoVadis Silver Medal is a testament to our 70-year journey of innovation, quality, and an evolving, deepening commitment to sustainability. It offers our partners globally the assurance that VUP is a reliable, forward-thinking supplier dedicated to not just chemical excellence, but also to building sustainable partnerships.",
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
      { tag: 'Sustainability' },
      { tag: 'EcoVadis' },
      { tag: 'ESG' },
      { tag: 'Chemical Specialties' },
      { tag: 'Environmental Responsibility' },
    ],
    relatedProducts: [],
    relatedServices: [],
    industries: [],
    meta: {
      title: 'VUP Earns EcoVadis Silver Medal for Sustainability Excellence',
      description:
        'VUP proudly announces achieving EcoVadis Silver Medal, placing us in the top 9% of companies worldwide for sustainability performance in chemical research and production.',
      image: featuredImage.id,
    },
    publishedAt: '2024-01-20T10:00:00.000Z',
    slug: 'vup-ecovadis-silver-sustainability-award',
    _status: 'published',
  }
}
