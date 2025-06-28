import { linkGroup } from '@/fields/linkGroup'
import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { HeadingFeature } from '@payloadcms/richtext-lexical'
import { Block } from 'payload'

export const Sustainability: Block = {
  slug: 'sustainability',
  interfaceName: 'sustainabilityBlock',
  labels: {
    singular: 'Sustainability Section',
    plural: 'Sustainability Sections',
  },
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
      localized: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'card',
      type: 'group',
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
          type: 'richText',
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [
                ...rootFeatures,
                HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
                FixedToolbarFeature(),
                InlineToolbarFeature(),
              ]
            },
          }),
          label: false,
          localized: true,
        },
      ],
    },
    {
      name: 'features',
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
          name: 'content',
          type: 'text',
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
          type: 'text',
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
