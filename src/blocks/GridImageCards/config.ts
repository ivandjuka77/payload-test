import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const GridImageCards: Block = {
  slug: 'gridImageCards',
  interfaceName: 'GridImageCardsBlock',
  fields: [
    {
      name: 'badge',
      type: 'text',
      localized: true,
    },
    {
      name: 'title',
      type: 'text',
      localized: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      localized: true,
    },
    {
      name: 'cards',
      type: 'array',
      localized: true,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'paragraph',
          type: 'richText',
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
            },
          }),
          localized: true,
        },
        {
          name: 'highlights',
          type: 'array',
          localized: true,
          fields: [
            {
              name: 'highlight',
              type: 'text',
              localized: true,
            },
          ],
        },
      ],
    },
  ],
}
