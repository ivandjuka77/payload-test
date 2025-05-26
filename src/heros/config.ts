import type { Field } from 'payload'
import { linkGroup } from '@/fields/linkGroup'

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

const isCarousel = (type: string) => ['carousel'].includes(type)

export const hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'carousel',
      label: 'Type',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'Carousel',
          value: 'carousel',
        },
        {
          label: 'Simple',
          value: 'simple',
        },
        {
          label: 'Background Image',
          value: 'backgroundImage',
        },
        {
          label: 'Background Image Compact',
          value: 'backgroundImageCompact',
        },
      ],
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        condition: (_, { type } = {}) => !isCarousel(type),
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      admin: {
        condition: (_, { type } = {}) => !isCarousel(type),
      },
    },
    {
      name: 'cta',
      type: 'group',
      fields: [linkGroup()],
      admin: {
        condition: (_, { type } = {}) => !isCarousel(type),
      },
    },
    {
      name: 'media',
      type: 'upload',
      admin: {
        condition: (_, { type } = {}) => !isCarousel(type),
      },
      relationTo: 'media',
      required: true,
    },
    {
      name: 'slides',
      type: 'array',
      dbName: 'sl',
      admin: {
        condition: (_, { type } = {}) => isCarousel(type),
      },
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
          interfaceName: 'FItem',
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
            linkGroup({
              appearances: ['default'],
              overrides: {
                maxRows: 1,
              },
            }),
          ],
        },
        {
          name: 'featuredCards',
          interfaceName: 'FCards',
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
  label: false,
}
