import { linkGroup } from '@/fields/linkGroup'
import type { Block } from 'payload'

export const ProductFilter: Block = {
  slug: 'productFilter',
  interfaceName: 'ProductFilterBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Product Catalog',
      label: 'Title',
    },
    {
      name: 'description',
      type: 'text',
      defaultValue: 'Explore our products by category, industry, and application.',
      label: 'Description',
    },
    {
      name: 'enabledFilters',
      type: 'select',
      label: 'Enabled Filters',
      options: ['category', 'industry', 'application'],
      hasMany: true,
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
            maxRows: 2,
          },
        }),
      ],
    },
  ],
  labels: {
    plural: 'Product Filters',
    singular: 'Product Filter',
  },
}
