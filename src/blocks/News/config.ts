import type { Block } from 'payload'

export const News: Block = {
  slug: 'news',
  interfaceName: 'NewsBlock',
  labels: {
    singular: 'News Section',
    plural: 'News Sections',
  },

  fields: [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'News & Insights',
      required: true,
      localized: true,
    },
    {
      name: 'description',
      type: 'textarea',
      defaultValue:
        "Stay updated with VUP's latest achievements, innovations, and industry insights.",
      localized: true,
    },
    {
      name: 'badge',
      type: 'text',
      defaultValue: 'Latest Updates',
      localized: true,
    },
    {
      name: 'linkLabel',
      type: 'text',
      defaultValue: 'View all news and publications',
      localized: true,
    },
    {
      name: 'items',
      type: 'relationship',
      relationTo: 'posts',
      hasMany: true,
      maxDepth: 4,
      required: true,
    },
  ],
}
