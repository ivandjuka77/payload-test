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
      localized: true,
    },
    {
      name: 'description',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'cards',
      type: 'array',
      localized: true,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'description',
          type: 'text',
          required: true,
          localized: true,
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
            localized: true,
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
