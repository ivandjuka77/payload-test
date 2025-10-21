import type { CollectionConfig } from 'payload'
import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { slugField } from '@/fields/slug'

export const Services: CollectionConfig = {
  slug: 'services',
  orderable: true,
  defaultSort: '_order',
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
      sk: 'Služba',
      en: 'Service',
    },
    plural: {
      sk: 'Služby',
      en: 'Services',
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
      name: 'accreditations',
      type: 'array',
      localized: true,
      label: {
        sk: 'Akreditácie',
        en: 'Accreditations',
      },
      labels: {
        singular: { sk: 'Akreditácia', en: 'Accreditation' },
        plural: { sk: 'Akreditácie', en: 'Accreditations' },
      },
      fields: [
        {
          name: 'accreditation',
          type: 'text',
          localized: true,
          label: {
            sk: 'Akreditácia',
            en: 'Accreditation',
          },
        },
      ],
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
      name: 'subServices',
      type: 'array',
      localized: true,
      label: {
        sk: 'Pod-služby',
        en: 'Sub-Services',
      },
      labels: {
        singular: { sk: 'Pod-služba', en: 'Sub-Service' },
        plural: { sk: 'Pod-služby', en: 'Sub-Services' },
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
          label: {
            sk: 'Obrázok',
            en: 'Image',
          },
        },
        {
          name: 'displayItems',
          type: 'array',
          localized: true,
          label: {
            sk: 'Zobrazované položky',
            en: 'Display Items',
          },
          labels: {
            singular: { sk: 'Položka', en: 'Item' },
            plural: { sk: 'Položky', en: 'Items' },
          },
          fields: [
            {
              name: 'item',
              type: 'text',
              localized: true,
              label: {
                sk: 'Položka',
                en: 'Item',
              },
            },
          ],
        },
        {
          name: 'features',
          type: 'array',
          localized: true,
          label: {
            sk: 'Vlastnosti',
            en: 'Features',
          },
          labels: {
            singular: { sk: 'Vlastnosť', en: 'Feature' },
            plural: { sk: 'Vlastnosti', en: 'Features' },
          },
          fields: [
            {
              name: 'feature',
              type: 'text',
              localized: true,
              required: true,
              label: {
                sk: 'Názov vlastnosti',
                en: 'Feature Name',
              },
            },
            {
              name: 'description',
              type: 'textarea',
              localized: true,
              required: true,
              label: {
                sk: 'Popis vlastnosti',
                en: 'Feature Description',
              },
            },
          ],
        },
        {
          name: 'link',
          type: 'text',
          label: {
            sk: 'Odkaz',
            en: 'Link',
          },
        },
      ],
    },
    {
      name: 'features',
      type: 'array',
      localized: true,
      label: {
        sk: 'Hlavné vlastnosti služby',
        en: 'Main Service Features',
      },
      labels: {
        singular: { sk: 'Vlastnosť', en: 'Feature' },
        plural: { sk: 'Vlastnosti', en: 'Features' },
      },
      fields: [
        {
          name: 'feature',
          type: 'text',
          localized: true,
          label: {
            sk: 'Názov vlastnosti',
            en: 'Feature Name',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          localized: true,
          label: {
            sk: 'Popis vlastnosti',
            en: 'Feature Description',
          },
        },
      ],
    },
    {
      name: 'team',
      type: 'relationship',
      relationTo: 'teamMembers',
      hasMany: true,
      label: {
        sk: 'Tím',
        en: 'Team',
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
    ...slugField(),
  ],
  timestamps: true,
}
