import type { Block } from 'payload'

export const Map: Block = {
  slug: 'map',
  interfaceName: 'MapBlock',
  labels: {
    singular: 'Map',
    plural: 'Maps',
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
    {
      name: 'iframeUrl',
      type: 'text',
      required: true,
      label: 'Google Maps Embed URL',
      defaultValue:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.815044412763!2d18.53389717697093!3d48.709016011206266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4714dad18f380651%3A0x2a66825a77cb1c39!2sFortischem!5e0!3m2!1sen!2sba!4v1760883460327!5m2!1sen!2sba',
      admin: {
        description: 'Enter the Google Maps embed URL',
      },
    },
  ],
}
