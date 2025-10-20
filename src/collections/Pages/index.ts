import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { CallToAction } from '../../blocks/CallToAction/config'
import { Content } from '../../blocks/Content/config'
import { FormBlock } from '../../blocks/Form/config'
import { MediaBlock } from '../../blocks/MediaBlock/config'
import { QuickAccess } from '@/blocks/QuickAccess/config'
import { ProductShowcase } from '@/blocks/ProductShowcase/config'
import { Career } from '@/blocks/Career/config'
import { Sustainability } from '@/blocks/SustainabilitySection/config'
import { ContentImage } from '@/blocks/ContentImage/config'
import { IndustryShowcase } from '@/blocks/IndustryShowcase/config'
import { Showcase } from '@/blocks/Showcase/config'
import { News } from '@/blocks/News/config'
import { ProductFilter } from '@/blocks/ProductFilter/config'
import { VerticalCards } from '@/blocks/VerticalCards/config'
import { GridImageCards } from '@/blocks/GridImageCards/config'
import { Careers } from '@/blocks/Careers/config'
import { Timeline } from '@/blocks/Timeline/config'
import { Team } from '@/blocks/Team/config'

import { populatePublishedAt } from '../../hooks/populatePublishedAt'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { revalidateDelete, revalidatePage } from './hooks/revalidatePage'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { slugField } from '@/fields/slug'
import { hero } from '@/heros/config'
import { Certifications } from '@/blocks/Certifications/config'
import { Map } from '@/blocks/Map/config'
import { ProductTable } from '@/blocks/ProductTable/config'

export const Pages: CollectionConfig<'pages'> = {
  slug: 'pages',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  defaultPopulate: {
    title: true,
    slug: true,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'pages',
          req,
        })

        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'pages',
        req,
      }),
    useAsTitle: 'title',
  },
  labels: {
    singular: {
      sk: 'Stránka',
      en: 'Page',
    },
    plural: {
      sk: 'Stránky',
      en: 'Pages',
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
      type: 'tabs',
      tabs: [
        {
          fields: [hero],
          label: {
            sk: 'Hlavná sekcia',
            en: 'Hero',
          },
        },
        {
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              localized: true,
              label: {
                sk: 'Rozloženie blokov',
                en: 'Block Layout',
              },
              blocks: [
                CallToAction,
                Content,
                MediaBlock,
                FormBlock,
                QuickAccess,
                ProductShowcase,
                Career,
                Sustainability,
                ContentImage,
                IndustryShowcase,
                Showcase,
                News,
                ProductFilter,
                VerticalCards,
                GridImageCards,
                Careers,
                Certifications,
                Timeline,
                Team,
                Map,
                ProductTable,
              ],
              required: true,
              admin: {
                initCollapsed: true,
              },
            },
          ],
          label: {
            sk: 'Obsah',
            en: 'Content',
          },
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
        position: 'sidebar',
      },
    },
    ...slugField('title', {
      slugOverrides: {
        localized: true,
      },
    }),
  ],
  hooks: {
    afterChange: [revalidatePage],
    beforeChange: [populatePublishedAt],
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
