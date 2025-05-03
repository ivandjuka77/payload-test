import type { Block } from 'payload'

export const IndustryShowcase: Block = {
  slug: 'industryShowcase',
  interfaceName: 'IndustryShowcaseBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
    },
    {
      name: 'limit',
      type: 'number',
      defaultValue: 3,
      min: 1,
      max: 10,
      admin: {
        description: 'Number of industries to display (1-10)',
      },
    },
    {
      name: 'industries',
      type: 'relationship',
      relationTo: 'industries',
      hasMany: true,
      required: true,
    },
  ],
}
