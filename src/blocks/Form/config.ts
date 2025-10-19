import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const FormBlock: Block = {
  slug: 'formBlock',
  interfaceName: 'FormBlock',

  fields: [
    {
      name: 'form',
      type: 'relationship',
      relationTo: 'forms',
      required: true,
      label: {
        sk: 'Formulár',
        en: 'Form',
      },
    },
    {
      name: 'enableIntro',
      type: 'checkbox',
      label: {
        sk: 'Povoliť úvodný obsah',
        en: 'Enable Intro Content',
      },
    },
    {
      name: 'introContent',
      type: 'richText',
      admin: {
        condition: (_, { enableIntro }) => Boolean(enableIntro),
      },
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: {
        sk: 'Úvodný obsah',
        en: 'Intro Content',
      },
    },
  ],
  graphQL: {
    singularName: 'FormBlock',
  },
  labels: {
    plural: {
      sk: 'Formulárové bloky',
      en: 'Form Blocks',
    },
    singular: {
      sk: 'Formulárový blok',
      en: 'Form Block',
    },
  },
}
