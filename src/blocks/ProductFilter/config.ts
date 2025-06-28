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
      localized: true,
    },
    {
      name: 'description',
      type: 'text',
      defaultValue: 'Explore our products by category, industry, and application.',
      label: 'Description',
      localized: true,
    },
    {
      name: 'enabledFilters',
      type: 'select',
      label: 'Enabled Filters',
      options: ['category', 'industry', 'application'],
      hasMany: true,
      localized: true,
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
            maxRows: 2,
            localized: true,
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
