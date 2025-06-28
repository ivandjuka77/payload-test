import { linkGroup } from '@/fields/linkGroup'
import type { Block } from 'payload'

export const ProductShowcase: Block = {
  slug: 'productShowcase',
  interfaceName: 'ProductShowcaseBlock',
  labels: {
    singular: 'Product Showcase',
    plural: 'Product Showcases',
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
      required: true,
      localized: true,
    },
    {
      name: 'products',
      type: 'array',
      required: true,
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
      name: 'cta',
      type: 'group',
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
