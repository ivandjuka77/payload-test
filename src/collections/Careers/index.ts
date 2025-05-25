import type { CollectionConfig } from 'payload'
import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { slugField } from '@/fields/slug'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const Careers: CollectionConfig = {
  slug: 'careers',
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
      localized: true,
    },
    {
      name: 'category',
      type: 'text',
      required: true,
      localized: true,
      admin: {
        description: 'e.g. Engineering, Marketing, Sales, etc.',
      },
    },
    {
      name: 'location',
      type: 'text',
      required: true,
      admin: {
        description: 'City, Country or Remote',
      },
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Full-time',
          value: 'fulltime',
        },
        {
          label: 'Part-time',
          value: 'parttime',
        },
        {
          label: 'Internship',
          value: 'intern',
        },
        {
          label: 'Contract',
          value: 'contract',
        },
      ],
    },
    {
      name: 'description',
      type: 'richText',
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
      required: true,
      localized: true,
    },
    {
      name: 'keyResponsibilities',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'responsibility',
          type: 'text',
          localized: true,
        },
      ],
      admin: {
        description: 'List the key responsibilities for this role',
      },
    },
    {
      name: 'requirements',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'requirement',
          type: 'text',
          localized: true,
        },
      ],
      admin: {
        description: 'List the required qualifications and experience',
      },
    },
    {
      name: 'preferredQualifications',
      type: 'array',
      fields: [
        {
          name: 'qualification',
          type: 'text',
          localized: true,
        },
      ],
      admin: {
        description: 'List any preferred but not required qualifications',
      },
    },
    {
      name: 'benefits',
      type: 'array',
      fields: [
        {
          name: 'benefit',
          type: 'text',
          localized: true,
        },
      ],
      admin: {
        description: 'List any benefits offered with this position',
      },
    },
    ...slugField(),
  ],
  timestamps: true,
}
