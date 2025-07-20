import type { Block } from 'payload'

export const Careers: Block = {
  slug: 'careers',
  interfaceName: 'CareersBlock',
  labels: {
    singular: 'Careers',
    plural: 'Careers',
  },
  fields: [
    {
      name: 'title',
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
  ],
}
