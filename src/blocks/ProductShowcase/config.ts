import { linkGroup } from '@/fields/linkGroup'
import type { Block } from 'payload'

export const ProductShowcaseBlock: Block = {
  slug: 'productShowcase',
  labels: {
    singular: 'Product Showcase',
    plural: 'Product Showcases',
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
      required: true,
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
