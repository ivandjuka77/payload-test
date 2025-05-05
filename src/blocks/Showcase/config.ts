import { linkGroup } from '@/fields/linkGroup'
import type { Block } from 'payload'

const isProductShowcase = (type: string) => ['product'].includes(type)
const isContentShowcase = (type: string) => ['content'].includes(type)
const isFeatureShowcase = (type: string) => ['feature'].includes(type)

export const Showcase: Block = {
  slug: 'showcase',
  interfaceName: 'ShowcaseBlock',
  labels: {
    singular: 'Showcase',
    plural: 'Showcases',
  },
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'product',
      label: 'Showcase Type',
      options: [
        {
          label: 'Product Showcase',
          value: 'product',
        },
        {
          label: 'Content Showcase',
          value: 'content',
        },
        {
          label: 'Feature Showcase',
          value: 'feature',
        },
      ],
      required: true,
    },
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
      name: 'products',
      type: 'array',
      admin: {
        condition: (_, { type } = {}) => isProductShowcase(type),
      },
      fields: [
        {
          name: 'product',
          type: 'relationship',
          relationTo: 'products',
          hasMany: true,
          required: true,
        },
      ],
    },
    {
      name: 'contentItems',
      type: 'array',
      admin: {
        condition: (_, { type } = {}) => isContentShowcase(type),
      },
      fields: [
        {
          name: 'content',
          type: 'relationship',
          relationTo: 'posts',
          hasMany: true,
        },
      ],
    },
    {
      name: 'features',
      type: 'array',
      admin: {
        condition: (_, { type } = {}) => isFeatureShowcase(type),
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'showCta',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'cta',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'description',
          type: 'textarea',
        },
        linkGroup({
          overrides: {
            maxRows: 1,
          },
        }),
      ],
    },
  ],
}
