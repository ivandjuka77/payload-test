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
  labels: {
    singular: {
      sk: 'Produkt',
      en: 'Product',
    },
    plural: {
      sk: 'Produkty',
      en: 'Products',
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
      name: 'chemicalFamily',
      type: 'relationship',
      relationTo: 'productCategories',
      hasMany: true,
      label: {
        sk: 'Chemická skupina',
        en: 'Chemical Family',
      },
    },
    {
      name: 'chemicalStructureImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: {
        sk: 'Obrázok chemickej štruktúry',
        en: 'Chemical Structure Image',
      },
    },
    {
      name: 'technicalSpecifications',
      type: 'group',
      label: {
        sk: 'Technické špecifikácie',
        en: 'Technical Specifications',
      },
      fields: [
        {
          name: 'chemicalName',
          type: 'text',
          required: true,
          label: {
            sk: 'Chemický názov',
            en: 'Chemical Name',
          },
        },
        {
          name: 'casNumber',
          type: 'text',
          required: true,
          label: {
            sk: 'Číslo CAS',
            en: 'CAS Number',
          },
        },
        {
          name: 'ecNumber',
          type: 'text',
          label: {
            sk: 'Číslo EC',
            en: 'EC Number',
          },
        },
        {
          name: 'synonyms',
          type: 'array',
          label: {
            sk: 'Synonymá',
            en: 'Synonyms',
          },
          labels: {
            singular: { sk: 'Synonymum', en: 'Synonym' },
            plural: { sk: 'Synonymá', en: 'Synonyms' },
          },
          fields: [
            {
              name: 'synonym',
              type: 'text',
              label: {
                sk: 'Synonymum',
                en: 'Synonym',
              },
            },
          ],
        },
        {
          name: 'molecularFormula',
          type: 'text',
          required: true,
          label: {
            sk: 'Molekulový vzorec',
            en: 'Molecular Formula',
          },
        },
        {
          name: 'molecularWeight',
          type: 'text',
          label: {
            sk: 'Molekulová hmotnosť',
            en: 'Molecular Weight',
          },
        },
        {
          name: 'labVerified',
          type: 'select',
          label: {
            sk: 'Laboratórne overené',
            en: 'Lab Verified',
          },
          options: [
            {
              label: { sk: 'Overené', en: 'Verified' },
              value: 'Verified',
            },
            {
              label: { sk: 'Preskúmané', en: 'Researched' },
              value: 'Researched',
            },
            {
              label: { sk: 'Nepotvrdené', en: 'Not Confirmed' },
              value: 'Not Confirmed',
            },
          ],
        },
      ],
    },
    {
      name: 'VupSpecifications',
      type: 'group',
      label: {
        sk: 'VUP Špecifikácie',
        en: 'VUP Specifications',
      },
      fields: [
        {
          name: 'appearance',
          type: 'text',
          localized: true,
          label: {
            sk: 'Vzhľad',
            en: 'Appearance',
          },
        },
        {
          name: 'purity',
          type: 'text',
          label: {
            sk: 'Čistota',
            en: 'Purity',
          },
        },
        {
          name: 'acidValue',
          type: 'text',
          label: {
            sk: 'Číslo kyslosti',
            en: 'Acid Value',
          },
        },
        {
          name: 'hydroxylValue',
          type: 'text',
          label: {
            sk: 'Hydroxylové číslo',
            en: 'Hydroxyl Value',
          },
        },
        {
          name: 'waterContent',
          type: 'text',
          label: {
            sk: 'Obsah vody',
            en: 'Water Content',
          },
        },
        {
          name: 'ashContent',
          type: 'text',
          label: {
            sk: 'Obsah popola',
            en: 'Ash Content',
          },
        },
        {
          name: 'meltingPoint',
          type: 'text',
          label: {
            sk: 'Bod topenia',
            en: 'Melting Point',
          },
        },
        {
          name: 'boilingPoint',
          type: 'text',
          label: {
            sk: 'Bod varu',
            en: 'Boiling Point',
          },
        },
        {
          name: 'density',
          type: 'text',
          label: {
            sk: 'Hustota',
            en: 'Density',
          },
        },
        {
          name: 'solubility',
          type: 'text',
          localized: true,
          label: {
            sk: 'Rozpustnosť',
            en: 'Solubility',
          },
        },
      ],
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
          name: 'application',
          type: 'text',
          localized: true,
          label: {
            sk: 'Názov aplikácie',
            en: 'Application Name',
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
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: {
            sk: 'Obrázok',
            en: 'Image',
          },
        },
      ],
    },
    {
      name: 'keyFeatures',
      type: 'array',
      required: false,
      localized: true,
      label: {
        sk: 'Kľúčové vlastnosti',
        en: 'Key Features',
      },
      labels: {
        singular: { sk: 'Kľúčová vlastnosť', en: 'Key Feature' },
        plural: { sk: 'Kľúčové vlastnosti', en: 'Key Features' },
      },
      fields: [
        {
          name: 'feature',
          type: 'text',
          localized: true,
          label: {
            sk: 'Vlastnosť',
            en: 'Feature',
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
      name: 'caseStudies',
      type: 'relationship',
      relationTo: 'caseStudies',
      hasMany: true,
      label: {
        sk: 'Prípadové štúdie',
        en: 'Case Studies',
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
      name: 'faq',
      type: 'array',
      required: false,
      localized: true,
      label: {
        sk: 'Často kladené otázky',
        en: 'FAQ',
      },
      labels: {
        singular: { sk: 'Otázka a odpoveď', en: 'Q&A' },
        plural: { sk: 'Často kladené otázky', en: 'FAQs' },
      },
      fields: [
        {
          name: 'question',
          type: 'text',
          localized: true,
          label: {
            sk: 'Otázka',
            en: 'Question',
          },
        },
        {
          name: 'answer',
          type: 'textarea',
          localized: true,
          label: {
            sk: 'Odpoveď',
            en: 'Answer',
          },
        },
      ],
    },
    {
      name: 'technicalDataSheets',
      type: 'upload',
      relationTo: 'product-documents',
      label: {
        sk: 'Technické listy (TL)',
        en: 'Technical Data Sheets (TDS)',
      },
    },
    {
      name: 'safetyDataSheets',
      type: 'upload',
      relationTo: 'product-documents',
      label: {
        sk: 'Karty bezpečnostných údajov (KBÚ)',
        en: 'Safety Data Sheets (SDS)',
      },
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
