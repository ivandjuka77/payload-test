import type { Block } from 'payload'
import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
  OrderedListFeature,
  UnorderedListFeature,
} from '@payloadcms/richtext-lexical'

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
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [
                ...rootFeatures,
                FixedToolbarFeature(),
                InlineToolbarFeature(),
                UnorderedListFeature(),
                OrderedListFeature(),
              ]
            },
          }),
          label: 'Content',
          required: true,
        },
        {
          name: 'keyAchievements',
          type: 'array',
          label: 'Key Achievements',
          fields: [
            {
              name: 'achievement',
              type: 'text',
              label: 'Achievement',
            },
          ],
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
