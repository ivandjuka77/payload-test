import type { Block } from 'payload'

export const Team: Block = {
  slug: 'team',
  interfaceName: 'TeamBlock',
  labels: {
    singular: 'Team',
    plural: 'Teams',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
    },
    {
      name: 'teamMembers',
      type: 'relationship',
      relationTo: 'teamMembers',
      hasMany: true,
      label: 'Team Members',
    },
  ],
}
