import type { CollectionConfig } from 'payload'
import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { slugField } from '@/fields/slug'

export const Industries: CollectionConfig = {
  slug: 'industries',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'description'],
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      localized: true,
    },
    {
      name: 'summary',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },

    {
      name: 'keyProducts',
      type: 'relationship',
      relationTo: 'products',
      hasMany: true,
      maxDepth: 3,
    },
    {
      name: 'productCategories',
      type: 'relationship',
      relationTo: 'productCategories',
      hasMany: true,
      maxDepth: 3,
    },
    {
      name: 'services',
      type: 'relationship',
      relationTo: 'services',
      hasMany: true,
      maxDepth: 3,
    },
    {
      name: 'challenges',
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
          name: 'challenge',
          type: 'textarea',
          required: true,
          localized: true,
        },
        {
          name: 'solution',
          type: 'textarea',
          required: true,
          localized: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'challengeLink',
          type: 'text',
        },
        {
          name: 'relatedProducts',
          type: 'relationship',
          relationTo: 'products',
          hasMany: true,
          maxDepth: 3,
        },
        {
          name: 'relatedServices',
          type: 'relationship',
          relationTo: 'services',
          hasMany: true,
          maxDepth: 3,
        },
        {
          name: 'caseStudies',
          type: 'relationship',
          relationTo: 'caseStudies',
          hasMany: true,
          maxDepth: 3,
        },
      ],
    },
    ...slugField(),
  ],
  timestamps: true,
}
