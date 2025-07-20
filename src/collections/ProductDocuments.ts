import { CollectionConfig } from 'payload'
import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

export const ProductDocuments: CollectionConfig = {
  slug: 'product-documents',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'filename',
    defaultColumns: ['filename', 'product', 'type'],
  },
  labels: {
    singular: {
      sk: 'Produktový dokument',
      en: 'Product Document',
    },
    plural: {
      sk: 'Produktové dokumenty',
      en: 'Product Documents',
    },
  },
  upload: {
    staticDir: 'product-documents',
    mimeTypes: ['application/pdf'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      label: {
        sk: 'Alternatívny text',
        en: 'Alt Text',
      },
    },
    {
      name: 'product',
      type: 'relationship',
      relationTo: 'products',
      label: {
        sk: 'Produkt',
        en: 'Product',
      },
    },
    {
      name: 'type',
      type: 'select',
      label: {
        sk: 'Typ dokumentu',
        en: 'Document Type',
      },
      options: [
        {
          label: {
            sk: 'Technický list (TL)',
            en: 'Technical Data Sheet (TDS)',
          },
          value: 'tds',
        },
        {
          label: {
            sk: 'Karta bezpečnostných údajov (KBÚ)',
            en: 'Safety Data Sheet (SDS)',
          },
          value: 'sds',
        },
      ],
    },
  ],
}
