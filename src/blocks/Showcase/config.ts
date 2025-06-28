import { linkGroup } from '@/fields/linkGroup'
import type { Block } from 'payload'

const isProductShowcase = (type: string) => ['product'].includes(type)
const isContentShowcase = (type: string) => ['content'].includes(type)
const isFeatureShowcase = (type: string) => ['feature'].includes(type)
const isCategoryShowcase = (type: string) => ['category'].includes(type)

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
        {
          label: 'Category Showcase',
          value: 'category',
        },
      ],
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      localized: true,
    },
    {
      name: 'products',
      type: 'relationship',
      relationTo: 'products',
      admin: {
        condition: (_, { type } = {}) => isProductShowcase(type),
      },
      hasMany: true,
      required: true,
      maxDepth: 2,
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'productCategories',
      admin: {
        condition: (_, { type } = {}) => isCategoryShowcase(type),
      },
      hasMany: true,
      required: true,
      maxDepth: 2,
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
      localized: true,
      admin: {
        condition: (_, { type } = {}) => isFeatureShowcase(type),
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'description',
          type: 'textarea',
          localized: true,
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
      localized: true,
      fields: [
        {
          name: 'title',
          type: 'text',
          localized: true,
        },
        {
          name: 'description',
          type: 'textarea',
          localized: true,
        },
        linkGroup({
          overrides: {
            maxRows: 1,
            localized: true,
          },
        }),
      ],
    },
  ],
}
