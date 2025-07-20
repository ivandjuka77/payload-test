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
  labels: {
    singular: {
      sk: 'Pracovná ponuka',
      en: 'Career',
    },
    plural: {
      sk: 'Pracovné ponuky',
      en: 'Careers',
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
      name: 'category',
      type: 'text',
      required: true,
      localized: true,
      label: {
        sk: 'Kategória',
        en: 'Category',
      },
      admin: {
        description: 'e.g. Engineering, Marketing, Sales, etc.',
      },
    },
    {
      name: 'location',
      type: 'text',
      required: true,
      label: {
        sk: 'Lokalita',
        en: 'Location',
      },
      admin: {
        description: 'City, Country or Remote',
      },
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      label: {
        sk: 'Typ úväzku',
        en: 'Employment Type',
      },
      options: [
        {
          label: {
            sk: 'Plný úväzok',
            en: 'Full-time',
          },
          value: 'fulltime',
        },
        {
          label: {
            sk: 'Čiastočný úväzok',
            en: 'Part-time',
          },
          value: 'parttime',
        },
        {
          label: {
            sk: 'Stáž',
            en: 'Internship',
          },
          value: 'intern',
        },
        {
          label: {
            sk: 'Kontrakt',
            en: 'Contract',
          },
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
      label: {
        sk: 'Popis',
        en: 'Description',
      },
    },
    {
      name: 'keyResponsibilities',
      type: 'array',
      required: true,
      label: {
        sk: 'Kľúčové zodpovednosti',
        en: 'Key Responsibilities',
      },
      labels: {
        singular: {
          sk: 'Kľúčová zodpovednosť',
          en: 'Key Responsibility',
        },
        plural: {
          sk: 'Kľúčové zodpovednosti',
          en: 'Key Responsibilities',
        },
      },
      fields: [
        {
          name: 'responsibility',
          type: 'text',
          localized: true,
          label: {
            sk: 'Zodpovednosť',
            en: 'Responsibility',
          },
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
      label: {
        sk: 'Požiadavky',
        en: 'Requirements',
      },
      labels: {
        singular: {
          sk: 'Požiadavka',
          en: 'Requirement',
        },
        plural: {
          sk: 'Požiadavky',
          en: 'Requirements',
        },
      },
      fields: [
        {
          name: 'requirement',
          type: 'text',
          localized: true,
          label: {
            sk: 'Požiadavka',
            en: 'Requirement',
          },
        },
      ],
      admin: {
        description: 'List the required qualifications and experience',
      },
    },
    {
      name: 'preferredQualifications',
      type: 'array',
      label: {
        sk: 'Preferované kvalifikácie',
        en: 'Preferred Qualifications',
      },
      labels: {
        singular: {
          sk: 'Preferovaná kvalifikácia',
          en: 'Preferred Qualification',
        },
        plural: {
          sk: 'Preferované kvalifikácie',
          en: 'Preferred Qualifications',
        },
      },
      fields: [
        {
          name: 'qualification',
          type: 'text',
          localized: true,
          label: {
            sk: 'Kvalifikácia',
            en: 'Qualification',
          },
        },
      ],
      admin: {
        description: 'List any preferred but not required qualifications',
      },
    },
    {
      name: 'benefits',
      type: 'array',
      label: {
        sk: 'Benefity',
        en: 'Benefits',
      },
      labels: {
        singular: {
          sk: 'Benefit',
          en: 'Benefit',
        },
        plural: {
          sk: 'Benefity',
          en: 'Benefits',
        },
      },
      fields: [
        {
          name: 'benefit',
          type: 'text',
          localized: true,
          label: {
            sk: 'Benefit',
            en: 'Benefit',
          },
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
