import type { CollectionConfig } from 'payload'
import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { slugField } from '@/fields/slug'

export const Products: CollectionConfig = {
  slug: 'products',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'chemicalName', 'casNumber', 'labVerified'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'chemicalName',
      type: 'text',
    },
    {
      name: 'keyProperties',
      type: 'array',
      fields: [
        {
          name: 'property',
          type: 'text',
        },
      ],
    },
    {
      name: 'useCases',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
        },
      ],
    },
    {
      name: 'synonyms',
      type: 'array',
      fields: [
        {
          name: 'synonym',
          type: 'text',
        },
      ],
    },
    {
      name: 'chemicalStructureImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'casNumber',
      type: 'text',
      required: true,
    },
    {
      name: 'ecNumber',
      type: 'text',
    },
    {
      name: 'molecularFormula',
      type: 'text',
    },
    {
      name: 'molecularWeight',
      type: 'text',
    },
    {
      name: 'VupSpecifications',
      type: 'group',
      fields: [
        {
          name: 'appearance',
          type: 'text',
        },
        {
          name: 'purity',
          type: 'text',
        },
        {
          name: 'acidValue',
          type: 'text',
        },
        {
          name: 'hydroxylValue',
          type: 'text',
        },
        {
          name: 'waterContent',
          type: 'text',
        },
        {
          name: 'ashContent',
          type: 'text',
        },
        {
          name: 'meltingPoint',
          type: 'text',
        },
        {
          name: 'boilingPoint',
          type: 'text',
        },
        {
          name: 'density',
          type: 'text',
        },
        {
          name: 'solubility',
          type: 'text',
        },
      ],
    },
    {
      name: 'challenges',
      type: 'array',
      fields: [
        {
          name: 'challenge',
          type: 'text',
        },
      ],
    },
    {
      name: 'chemicalFamily',
      type: 'relationship',
      relationTo: 'productCategories',
      hasMany: true,
    },
    {
      name: 'benefits',
      type: 'array',
      fields: [
        {
          name: 'benefit',
          type: 'text',
        },
      ],
      required: true,
    },
    {
      name: 'labVerified',
      type: 'select',
      options: [
        {
          label: 'Verified',
          value: 'Verified',
        },
        {
          label: 'Researched',
          value: 'Researched',
        },
        {
          label: 'Not Confirmed',
          value: 'Not Confirmed',
        },
      ],
    },
    {
      name: 'categories',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'category',
          type: 'text',
        },
      ],
    },
    {
      name: 'industries',
      type: 'relationship',
      relationTo: 'industries',
      hasMany: true,
    },
    {
      name: 'applications',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'application',
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
    ...slugField('name'),
  ],
  versions: {
    drafts: {
      autosave: {
        interval: 100,
      },
      schedulePublish: true,
    },
  },
  timestamps: true,
}
