import type { CollectionConfig } from 'payload'

import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { Banner } from '../../blocks/Banner/config'
import { Code } from '../../blocks/Code/config'
import { MediaBlock } from '../../blocks/MediaBlock/config'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { populateAuthors } from './hooks/populateAuthors'
import { revalidateDelete, revalidatePost } from './hooks/revalidatePost'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { slugField } from '@/fields/slug'

export const Posts: CollectionConfig<'posts'> = {
  slug: 'posts',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  defaultPopulate: {
    title: true,
    slug: true,
    type: true,
    updatedAt: true,
    featured: true,
    tags: true,
    meta: {
      image: true,
      description: true,
    },
  },
  admin: {
    defaultColumns: ['title', 'type', 'publishedAt', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'posts',
          req,
        })
        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'posts',
        req,
      }),
    useAsTitle: 'title',
  },
  labels: {
    singular: {
      sk: 'Príspevok',
      en: 'Post',
    },
    plural: {
      sk: 'Príspevky',
      en: 'Posts',
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
      name: 'type',
      type: 'select',
      required: true,
      label: {
        sk: 'Typ',
        en: 'Type',
      },
      options: [
        {
          label: { sk: 'Novinky', en: 'News' },
          value: 'news',
        },
        {
          label: { sk: 'Výskum', en: 'Research' },
          value: 'research',
        },
        {
          label: { sk: 'Prípadová štúdia', en: 'Case Study' },
          value: 'case-study',
        },
      ],
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
              name: 'description',
              type: 'textarea',
              required: true,
              localized: true,
              label: {
                sk: 'Popis',
                en: 'Description',
              },
            },
            {
              name: 'featuredImage',
              type: 'upload',
              relationTo: 'media',
              required: true,
              localized: true,
              label: {
                sk: 'Hlavný obrázok',
                en: 'Featured Image',
              },
            },
            {
              name: 'content',
              type: 'richText',
              localized: true,
              label: {
                sk: 'Obsah',
                en: 'Content',
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
          ],
        },
        {
          label: {
            sk: 'Taxonómia a vzťahy',
            en: 'Taxonomy & Relations',
          },
          fields: [
            {
              name: 'tags',
              type: 'array',
              label: {
                sk: 'Štítky',
                en: 'Tags',
              },
              labels: {
                singular: { sk: 'Štítok', en: 'Tag' },
                plural: { sk: 'Štítky', en: 'Tags' },
              },
              fields: [
                {
                  name: 'tag',
                  type: 'text',
                  label: {
                    sk: 'Štítok',
                    en: 'Tag',
                  },
                },
              ],
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
            {
              name: 'industries',
              type: 'relationship',
              relationTo: 'industries',
              hasMany: true,
              maxDepth: 3,
              label: {
                sk: 'Oblasti priemyslu',
                en: 'Industries',
              },
            },
            {
              name: 'relatedPosts',
              type: 'relationship',
              relationTo: 'posts',
              hasMany: true,
              maxDepth: 3,
              label: {
                sk: 'Súvisiace príspevky',
                en: 'Related Posts',
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
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      hasMany: false,
      required: true,
      label: {
        sk: 'Autor',
        en: 'Author',
      },
    },
    ...slugField(),
  ],
  hooks: {
    afterChange: [revalidatePost],
    afterRead: [populateAuthors],
    afterDelete: [revalidateDelete],
  },
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
