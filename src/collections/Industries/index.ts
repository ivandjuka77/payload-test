import type { CollectionConfig } from 'payload'
import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { slugField } from '@/fields/slug'

export const Industries: CollectionConfig = {
  slug: 'industries',
  orderable: true,
  defaultSort: '_order',
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
  labels: {
    singular: {
      sk: 'Oblasť priemyslu',
      en: 'Industry',
    },
    plural: {
      sk: 'Oblasti priemyslu',
      en: 'Industries',
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
      name: 'summary',
      type: 'text',
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
      name: 'keyProducts',
      type: 'relationship',
      relationTo: 'products',
      hasMany: true,
      maxDepth: 3,
      label: {
        sk: 'Kľúčové produkty',
        en: 'Key Products',
      },
    },
    {
      name: 'productCategories',
      type: 'relationship',
      relationTo: 'productCategories',
      hasMany: true,
      maxDepth: 3,
      label: {
        sk: 'Kategórie produktov',
        en: 'Product Categories',
      },
    },
    {
      name: 'services',
      type: 'relationship',
      relationTo: 'services',
      hasMany: true,
      maxDepth: 3,
      label: {
        sk: 'Služby',
        en: 'Services',
      },
    },
    {
      name: 'challenges',
      type: 'array',
      localized: true,
      label: {
        sk: 'Výzvy',
        en: 'Challenges',
      },
      labels: {
        singular: {
          sk: 'Výzva',
          en: 'Challenge',
        },
        plural: {
          sk: 'Výzvy',
          en: 'Challenges',
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
          name: 'challenge',
          type: 'textarea',
          required: true,
          localized: true,
          label: {
            sk: 'Popis výzvy',
            en: 'Challenge Description',
          },
        },
        {
          name: 'solution',
          type: 'textarea',
          required: true,
          localized: true,
          label: {
            sk: 'Popis riešenia',
            en: 'Solution Description',
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
        {
          name: 'challengeLink',
          type: 'text',
          label: {
            sk: 'Odkaz na výzvu',
            en: 'Challenge Link',
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
        {
          name: 'caseStudies',
          type: 'relationship',
          relationTo: 'caseStudies',
          hasMany: true,
          maxDepth: 3,
          label: {
            sk: 'Prípadové štúdie',
            en: 'Case Studies',
          },
        },
      ],
    },
    ...slugField(),
  ],
  timestamps: true,
}
