import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'linkGroups',
      type: 'array',
      maxRows: 4,
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'groupTitle',
          type: 'text',
          required: true,
        },
        {
          name: 'navItems',
          type: 'array',
          fields: [
            link({
              appearances: false,
            }),
          ],
          maxRows: 8,
          admin: {
            initCollapsed: true,
            components: {
              RowLabel: '@/Footer/RowLabel#RowLabel',
            },
          },
        },
      ],
    },
    {
      name: 'companyInfo',
      label: 'Company Information',
      type: 'group',
      fields: [
        {
          name: 'address',
          type: 'textarea',
          label: 'Company Address',
        },
        {
          name: 'email',
          type: 'email',
          label: 'Contact Email',
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
