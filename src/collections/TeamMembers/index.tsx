import { CollectionConfig } from 'payload'
import { authenticated } from '../../access/authenticated'

export const TeamMembers: CollectionConfig = {
  slug: 'teamMembers',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'role', 'updatedAt'],
  },
  access: {
    read: () => true,
    create: authenticated,
    delete: authenticated,
    update: authenticated,
  },
  labels: {
    singular: {
      sk: 'Člen tímu',
      en: 'Team Member',
    },
    plural: {
      sk: 'Členovia tímu',
      en: 'Team Members',
    },
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: {
        sk: 'Meno',
        en: 'Name',
      },
    },
    {
      name: 'role',
      type: 'text',
      required: true,
      localized: true,
      label: {
        sk: 'Pozícia',
        en: 'Role',
      },
    },
    {
      name: 'bio',
      type: 'textarea',
      localized: true,
      label: {
        sk: 'Životopis',
        en: 'Bio',
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
      name: 'linkedin',
      type: 'text',
      label: {
        sk: 'LinkedIn',
        en: 'LinkedIn',
      },
      admin: {
        description: 'LinkedIn profile URL',
      },
    },
    {
      name: 'email',
      type: 'email',
      label: {
        sk: 'Email',
        en: 'Email',
      },
    },
    {
      name: 'isHeadOfDepartment',
      type: 'checkbox',
      label: {
        sk: 'Je vedúci oddelenia',
        en: 'Is Head of Department',
      },
    },
    {
      name: 'department',
      type: 'relationship',
      relationTo: 'services',
      hasMany: true,
      maxDepth: 3,
      label: {
        sk: 'Oddelenie',
        en: 'Department',
      },
    },
  ],
  timestamps: true,
}
