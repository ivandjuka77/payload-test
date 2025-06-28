import { linkGroup } from '@/fields/linkGroup'
import { Block } from 'payload'

export const Career: Block = {
  slug: 'career',
  interfaceName: 'CareerBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'features',
      type: 'array',
      required: true,
      localized: true,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'content',
          type: 'textarea',
          required: true,
          localized: true,
        },
      ],
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
