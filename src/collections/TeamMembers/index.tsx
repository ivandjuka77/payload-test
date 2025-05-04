import { CollectionConfig } from 'payload'
import { Media } from '../Media'
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
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'text',
      required: true,
    },
    {
      name: 'bio',
      type: 'textarea',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'linkedin',
      type: 'text',
      admin: {
        description: 'LinkedIn profile URL',
      },
    },
    {
      name: 'email',
      type: 'email',
    },
    {
      name: 'isHeadOfDepartment',
      type: 'checkbox',
    },
    {
      name: 'department',
      type: 'relationship',
      relationTo: 'services',
    },
  ],
  timestamps: true,
}
