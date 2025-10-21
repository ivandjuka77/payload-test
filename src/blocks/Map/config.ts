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
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d265.09821140998235!2d18.61045394607769!3d48.778931950409884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4714dce7b63ca459%3A0x60677b6efa52871a!2zOTcxIDA0LCBOw6FicmXFvm7DoSA3NjcvNCwgOTcxIDAxIFByaWV2aWR6YSwgU2xvdmFraWE!5e0!3m2!1sen!2sba!4v1761065252777!5m2!1sen!2sba',
      admin: {
        description: 'Enter the Google Maps embed URL',
      },
    },
  ],
}
