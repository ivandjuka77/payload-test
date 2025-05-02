import type { Block } from 'payload'

import { linkGroup } from '../../fields/linkGroup'

export const QuickAccess: Block = {
  slug: 'quickAccess',
  interfaceName: 'QuickAccessBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      required: true,
    },
    {
      name: 'cards',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
          required: true,
        },
        {
          name: 'backgroundImage',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        linkGroup({
          overrides: {
            maxRows: 1,
          },
        }),
      ],
    },
  ],
  labels: {
    plural: 'Quick Access',
    singular: 'Quick Access',
  },
}
