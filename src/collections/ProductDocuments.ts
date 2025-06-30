import { CollectionConfig } from 'payload'

export const ProductDocuments: CollectionConfig = {
  slug: 'product-documents',
  upload: {
    staticDir: 'product-documents',
    mimeTypes: ['application/pdf'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
  ],
}
