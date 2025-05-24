import type { Block } from 'payload'

export const Timeline: Block = {
  slug: 'timeline',
  interfaceName: 'TimelineBlock',
  labels: {
    singular: 'Timeline',
    plural: 'Timelines',
  },
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Badge Text',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
      required: true,
    },
    {
      name: 'items',
      type: 'array',
      label: 'Timeline Items',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'period',
          type: 'text',
          label: 'Time Period',
          required: true,
        },
        {
          name: 'content',
          type: 'richText',
          label: 'Content',
          required: true,
          admin: {},
        },
        {
          name: 'imageUrl',
          type: 'upload',
          label: 'Image',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'highlight',
          type: 'text',
          label: 'Highlight Text',
          required: true,
        },
      ],
    },
  ],
}
