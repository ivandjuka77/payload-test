import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import { slugField } from '@/fields/slug'
import { generatePreviewPath } from '@/utilities/generatePreviewPath'

export const ProductCategories: CollectionConfig = {
  slug: 'productCategories',
  orderable: true,
  defaultSort: '_order',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['name', 'description'],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'productCategories',
          req,
        })
        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'productCategories',
        req,
      }),
    useAsTitle: 'name',
  },
  labels: {
    singular: {
      sk: 'Kategória produktov',
      en: 'Product Category',
    },
    plural: {
      sk: 'Kategórie produktov',
      en: 'Product Categories',
    },
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      localized: true,
      label: {
        sk: 'Názov',
        en: 'Name',
      },
    },
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
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: {
        sk: 'Obrázok',
        en: 'Image',
      },
    },
    ...slugField('name'),
    {
      name: 'featuredProducts',
      type: 'relationship',
      relationTo: 'products',
      hasMany: true,
      required: false,
      label: {
        sk: 'Odporúčané produkty',
        en: 'Featured Products',
      },
    },
    {
      name: 'applications',
      type: 'array',
      required: false,
      localized: true,
      label: {
        sk: 'Aplikácie',
        en: 'Applications',
      },
      labels: {
        singular: { sk: 'Aplikácia', en: 'Application' },
        plural: { sk: 'Aplikácie', en: 'Applications' },
      },
      fields: [
        {
          name: 'imageSrc',
          type: 'upload',
          relationTo: 'media',
          label: {
            sk: 'Obrázok',
            en: 'Image',
          },
        },
        {
          name: 'title',
          type: 'text',
          localized: true,
          label: {
            sk: 'Názov',
            en: 'Title',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          localized: true,
          label: {
            sk: 'Popis',
            en: 'Description',
          },
        },
      ],
    },
    {
      name: 'productComparison',
      type: 'checkbox',
      required: false,
      defaultValue: false,
      label: {
        sk: 'Povoliť porovnanie produktov',
        en: 'Enable Product Comparison',
      },
    },
  ],
}
