import type { Block } from 'payload'

export const ProductTable: Block = {
  slug: 'productTable',
  interfaceName: 'ProductTableBlock',
  labels: {
    singular: 'Product Table',
    plural: 'Product Tables',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
      label: 'Table Title',
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
      label: 'Table Description',
    },
    {
      name: 'products',
      type: 'array',
      required: true,
      label: 'Products',
      fields: [
        {
          name: 'product',
          type: 'relationship',
          relationTo: 'products',
          hasMany: false,
          required: true,
        },
      ],
    },
  ],
}
