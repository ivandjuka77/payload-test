import { linkGroup } from '@/fields/linkGroup'
import type { Field } from 'payload'

export const CarouselHero: Field = {
  name: 'carouselHero',

  type: 'group',
  fields: [
    {
      name: 'slides',
      type: 'array',
      dbName: 'sl',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'subtitle',
          type: 'text',
          required: true,
        },
        {
          name: 'backgroundImage',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'badge',
          type: 'group',
          fields: [
            // {
            //   name: 'icon',
            //   type: 'upload',
            //   relationTo: 'media',
            //   required: true,
            // },
            {
              name: 'text',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'featuredItem',
          type: 'group',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            // linkGroup({
            //   appearances: ['default'],
            //   overrides: {
            //     maxRows: 1,
            //   },
            // }),
          ],
        },
        {
          name: 'featuredCards',
          type: 'array',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            linkGroup({
              appearances: ['default'],
              overrides: {
                maxRows: 1,
              },
            }),
          ],
        },
        {
          name: 'cta',
          type: 'group',
          fields: [linkGroup()],
        },
      ],
    },
  ],
  label: 'Carousel Hero',
}

export interface CarouselHeroSlide {
  title: string
  subtitle: string
  backgroundImage: string
  badge: {
    icon: string
    text: string
  }
  featuredItem: {
    title: string
    description: string
    image: string
    link: string
  }
  featuredCards: {
    title: string
    description: string
    image: string
    link: string
  }[]
  ctaButton: {
    text: string
    link: string
  }
}
