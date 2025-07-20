import type { CollectionConfig } from 'payload'
import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { slugField } from '@/fields/slug'
import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { Banner } from '../../blocks/Banner/config'
import { Code } from '../../blocks/Code/config'
import { MediaBlock } from '../../blocks/MediaBlock/config'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

export const CaseStudies: CollectionConfig = {
  slug: 'caseStudies',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'industry', 'publishedAt'],
  },
  labels: {
    singular: {
      sk: 'Prípadová štúdia',
      en: 'Case Study',
    },
    plural: {
      sk: 'Prípadové štúdie',
      en: 'Case Studies',
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
      label: {
        sk: 'Názov',
        en: 'Title',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      label: {
        sk: 'Odporúčané',
        en: 'Featured',
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: {
            sk: 'Obsah',
            en: 'Content',
          },
          fields: [
            {
              name: 'summary',
              type: 'textarea',
              required: true,
              localized: true,
              label: {
                sk: 'Zhrnutie',
                en: 'Summary',
              },
            },
            {
              name: 'featuredImage',
              type: 'upload',
              relationTo: 'media',
              required: true,
              label: {
                sk: 'Hlavný obrázok',
                en: 'Featured Image',
              },
            },
            {
              name: 'challenge',
              type: 'textarea',
              required: true,
              localized: true,
              label: {
                sk: 'Výzva',
                en: 'Challenge',
              },
            },
            {
              name: 'solution',
              type: 'richText',
              localized: true,
              label: {
                sk: 'Riešenie',
                en: 'Solution',
              },
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                    BlocksFeature({ blocks: [Banner, Code, MediaBlock] }),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    HorizontalRuleFeature(),
                  ]
                },
              }),
            },
            {
              name: 'results',
              type: 'textarea',
              required: true,
              localized: true,
              label: {
                sk: 'Výsledky',
                en: 'Results',
              },
            },
          ],
        },
        {
          label: {
            sk: 'Vzťahy',
            en: 'Relations',
          },
          fields: [
            {
              name: 'industry',
              type: 'relationship',
              relationTo: 'industries',
              required: true,
              hasMany: false,
              maxDepth: 3,
              label: {
                sk: 'Oblasť priemyslu',
                en: 'Industry',
              },
            },
            {
              name: 'relatedProducts',
              type: 'relationship',
              relationTo: 'products',
              hasMany: true,
              maxDepth: 3,
              label: {
                sk: 'Súvisiace produkty',
                en: 'Related Products',
              },
            },
            {
              name: 'relatedServices',
              type: 'relationship',
              relationTo: 'services',
              hasMany: true,
              maxDepth: 3,
              label: {
                sk: 'Súvisiace služby',
                en: 'Related Services',
              },
            },
          ],
        },
        {
          name: 'meta',
          label: {
            sk: 'SEO',
            en: 'SEO',
          },
          localized: true,
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),
            MetaDescriptionField({}),
            PreviewField({
              hasGenerateFn: true,
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      label: {
        sk: 'Dátum publikovania',
        en: 'Published At',
      },
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === 'published' && !value) {
              return new Date()
            }
            return value
          },
        ],
      },
    },
    ...slugField(),
  ],
  versions: {
    drafts: {
      autosave: {
        interval: 100,
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
