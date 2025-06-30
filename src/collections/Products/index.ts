import type { CollectionConfig } from 'payload'
import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { slugField } from '../../fields/slug'

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
    defaultColumns: ['name', 'chemicalFamily', 'slug'],
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
      name: 'chemicalFamily',
      type: 'relationship',
      relationTo: 'productCategories',
      hasMany: true,
    },
    {
      name: 'chemicalStructureImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },

    {
      name: 'technicalSpecifications',
      interfaceName: 'techSpecs',
      type: 'group',
      fields: [
        {
          name: 'chemicalName',
          type: 'text',
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
          name: 'molecularFormula',
          type: 'text',
          required: true,
        },
        {
          name: 'molecularWeight',
          type: 'text',
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
      ],
    },
    {
      name: 'VupSpecifications',
      type: 'group',
      fields: [
        {
          name: 'appearance',
          type: 'text',
          localized: true,
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
          localized: true,
        },
      ],
    },
    {
      name: 'applications',
      type: 'array',
      required: false,
      localized: true,
      fields: [
        {
          name: 'application',
          type: 'text',
          localized: true,
        },
        {
          name: 'description',
          type: 'textarea',
          localized: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'keyFeatures',
      type: 'array',
      required: false,
      localized: true,
      fields: [
        {
          name: 'feature',
          type: 'text',
          localized: true,
        },
        {
          name: 'description',
          type: 'textarea',
          localized: true,
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
      name: 'relatedProducts',
      type: 'relationship',
      relationTo: 'products',
      hasMany: true,
      maxDepth: 3,
    },
    {
      name: 'faq',
      type: 'array',
      required: false,
      localized: true,
      fields: [
        {
          name: 'question',
          type: 'text',
          localized: true,
        },
        {
          name: 'answer',
          type: 'textarea',
          localized: true,
        },
      ],
    },
    {
      name: 'technicalDataSheets',
      label: 'Technical Data Sheets (TDS)',
      type: 'upload',
      relationTo: 'product-documents',
    },
    {
      name: 'safetyDataSheets',
      label: 'Safety Data Sheets (SDS)',
      type: 'upload',
      relationTo: 'product-documents',
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
