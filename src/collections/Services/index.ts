import type { CollectionConfig } from 'payload'
import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { slugField } from '@/fields/slug'

export const Services: CollectionConfig = {
  slug: 'services',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'description'],
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'services',
      type: 'array',
      fields: [
        {
          name: 'service',
          type: 'text',
        },
      ],
    },
    {
      name: 'features',
      type: 'array',
      fields: [
        {
          name: 'feature',
          type: 'text',
        },
        {
          name: 'description',
          type: 'textarea',
        },
      ],
    },
    {
      name: 'team',
      type: 'relationship',
      relationTo: 'teamMembers',
      hasMany: true,
    },
    {
      name: 'subServices',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'displayItems',
          type: 'array',
          fields: [
            {
              name: 'title',
              type: 'text',
            },
          ],
        },
        {
          name: 'features',
          type: 'array',
          fields: [
            {
              name: 'feature',
              type: 'text',
            },
            {
              name: 'description',
              type: 'textarea',
            },
          ],
        },
        {
          name: 'link',
          type: 'text',
        },
      ],
    },
    {
      name: 'caseStudies',
      type: 'relationship',
      relationTo: 'caseStudies',
      hasMany: true,
    },
    {
      name: 'industries',
      type: 'relationship',
      relationTo: 'industries',
      hasMany: true,
    },
    {
      name: 'accreditation',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'description',
          type: 'textarea',
        },
      ],
    },
    ...slugField(),
  ],
  timestamps: true,
}
