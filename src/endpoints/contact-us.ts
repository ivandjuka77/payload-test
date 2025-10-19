import type { Media } from '@/payload-types'

interface ContactUsArgs {
  contactForm: number
  featuredImage: Media
}

export function contactUsEn({ contactForm, featuredImage }: ContactUsArgs) {
  return {
    title: 'Contact',
    hero: {
      type: 'minimal',
      title: 'Contact Us',
      description: 'Get in touch with our team',
      cta: {
        links: [],
      },
      media: null,
      slides: [],
    },

    layout: [
      {
        blockName: null,
        title: 'Company Information',
        content: {
          root: {
            children: [
              {
                children: [
                  {
                    detail: 0,
                    format: 1,
                    mode: 'normal',
                    style: '',
                    text: 'Company Name:',
                    type: 'text',
                    version: 1,
                  },
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: ' VUP, a.s.',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 1,
                    mode: 'normal',
                    style: '',
                    text: 'Address:',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Nábrežná 4',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: '971 04 Prievidza, Slovakia',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 1,
                    mode: 'normal',
                    style: '',
                    text: 'Contact:',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Phone: +421 046 5430035',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Email: vup@vupas.sk',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 1,
                    mode: 'normal',
                    style: '',
                    text: 'Business Registration:',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Company ID: 36002071',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Tax ID: 2020469462',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'VAT ID: SK2020469462',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Registered at District Court in Trenčín, section Sa, file no. 313/R',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            type: 'root',
            version: 1,
          },
        },
        image: featuredImage,
        blockType: 'contentImage',
      },
      {
        form: {
          title: 'Contact Form',
          id: contactForm,
          fields: [
            {
              name: 'name',
              width: 50,
              required: true,
              blockName: null,
              blockType: 'text',
              label: 'Name',
              defaultValue: null,
            },

            {
              name: 'email',
              width: 50,
              required: true,
              blockName: null,
              blockType: 'email',
              label: 'Email',
            },

            {
              name: 'subject',
              width: 100,
              placeholder: null,
              required: true,
              blockName: null,

              options: [
                {
                  value: 'product',
                  label: 'Product Inquiry',
                },

                {
                  value: 'support',
                  label: 'Technical Support',
                },

                {
                  value: 'partnership',
                  label: 'Partnership',
                },

                {
                  value: 'other',
                  label: 'Other',
                },
              ],
              blockType: 'select',
              label: 'Subject',
              defaultValue: null,
            },

            {
              name: 'message',
              width: 100,
              required: true,
              blockName: null,
              blockType: 'textarea',
              label: 'Message',
              defaultValue: null,
            },
          ],
          submitButtonLabel: 'Send Message',
          confirmationType: 'message',

          confirmationMessage: {
            root: {
              type: 'root',
              format: '',
              indent: 0,
              version: 1,

              children: [
                {
                  type: 'paragraph',
                  format: '',
                  indent: 0,
                  version: 1,

                  children: [
                    {
                      mode: 'normal',
                      text: 'Thank you for reaching out. A member of our team will contact you within 24 hours.',
                      type: 'text',
                      style: '',
                      detail: 0,
                      format: 0,
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                },
              ],
              direction: 'ltr',
            },
          },

          redirect: {
            url: null,
          },

          emails: [
            {
              emailTo: 'contact@vupchemicals.com',
              cc: null,
              bcc: null,
              replyTo: null,
              emailFrom: 'noreply@vupchemicals.com',
              subject: 'New Contact Form Submission - {{subject}}',

              message: {
                root: {
                  type: 'root',
                  format: '',
                  indent: 0,
                  version: 1,

                  children: [
                    {
                      type: 'paragraph',
                      format: '',
                      indent: 0,
                      version: 1,

                      children: [
                        {
                          mode: 'normal',
                          text: 'New Contact Form Submission',
                          type: 'text',
                          style: '',
                          detail: 0,
                          format: 1,
                          version: 1,
                        },
                      ],
                      direction: 'ltr',
                    },

                    {
                      type: 'paragraph',
                      format: '',
                      indent: 0,
                      version: 1,

                      children: [
                        {
                          mode: 'normal',
                          text: 'Name: {{name}}',
                          type: 'text',
                          style: '',
                          detail: 0,
                          format: 0,
                          version: 1,
                        },
                      ],
                      direction: 'ltr',
                    },

                    {
                      type: 'paragraph',
                      format: '',
                      indent: 0,
                      version: 1,

                      children: [
                        {
                          mode: 'normal',
                          text: 'Email: {{email}}',
                          type: 'text',
                          style: '',
                          detail: 0,
                          format: 0,
                          version: 1,
                        },
                      ],
                      direction: 'ltr',
                    },

                    {
                      type: 'paragraph',
                      format: '',
                      indent: 0,
                      version: 1,

                      children: [
                        {
                          mode: 'normal',
                          text: 'Subject: {{subject}}',
                          type: 'text',
                          style: '',
                          detail: 0,
                          format: 0,
                          version: 1,
                        },
                      ],
                      direction: 'ltr',
                    },

                    {
                      type: 'paragraph',
                      format: '',
                      indent: 0,
                      version: 1,

                      children: [
                        {
                          mode: 'normal',
                          text: 'Message: {{message}}',
                          type: 'text',
                          style: '',
                          detail: 0,
                          format: 0,
                          version: 1,
                        },
                      ],
                      direction: 'ltr',
                    },
                  ],
                  direction: 'ltr',
                },
              },
            },
          ],
        },
        enableIntro: null,
        introContent: null,
        blockName: null,
        blockType: 'formBlock',
      },
      {
        blockName: null,
        blockType: 'map',
        iframeUrl:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.815044412763!2d18.53389717697093!3d48.709016011206266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4714dad18f380651%3A0x2a66825a77cb1c39!2sFortischem!5e0!3m2!1sen!2sba!4v1760883460327!5m2!1sen!2sba',
      },
    ],

    meta: {
      title: null,
      image: null,
      description: null,
    },
    slug: 'contact',
    slugLock: true,
    _status: 'published' as const,
  }
}

export function contactUsSk({ contactForm, featuredImage }: ContactUsArgs) {
  return {
    title: 'Kontakt',
    hero: {
      type: 'minimal',
      title: 'Kontaktujte nás',
      description: 'Spojte sa s naším tímom',
      cta: {
        links: [],
      },
      media: null,
      slides: [],
    },

    layout: [
      {
        blockName: null,
        title: 'Firemné informácie',
        content: {
          root: {
            children: [
              {
                children: [
                  {
                    detail: 0,
                    format: 1,
                    mode: 'normal',
                    style: '',
                    text: 'Názov firmy:',
                    type: 'text',
                    version: 1,
                  },
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: ' VUP, a.s.',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 1,
                    mode: 'normal',
                    style: '',
                    text: 'Sídlo firmy a korešpondenčná adresa:',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Nábrežná 4',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: '971 04 Prievidza, Slovensko',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 1,
                    mode: 'normal',
                    style: '',
                    text: 'Kontakt:',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Telefón: +421 046 5430035',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'E-mail: vup@vupas.sk',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 1,
                    mode: 'normal',
                    style: '',
                    text: 'Fakturačné údaje:',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'IČO: 36002071',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'DIČ: 2020469462',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'IČ DPH: SK2020469462',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Firma je zapísaná v obchodnom registri vedenom na Okresnom súde v Trenčíne, oddiel Sa vložka číslo 313/R',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            type: 'root',
            version: 1,
          },
        },
        image: featuredImage,
        blockType: 'contentImage',
      },
      {
        form: {
          title: 'Kontaktný formulár',
          id: contactForm,
          fields: [
            {
              name: 'name',
              width: 50,
              required: true,
              blockName: null,
              blockType: 'text',
              label: 'Meno',
              defaultValue: null,
            },

            {
              name: 'email',
              width: 50,
              required: true,
              blockName: null,
              blockType: 'email',
              label: 'E-mail',
            },

            {
              name: 'subject',
              width: 100,
              placeholder: null,
              required: true,
              blockName: null,

              options: [
                {
                  value: 'product',
                  label: 'Dopyt na produkt',
                },

                {
                  value: 'support',
                  label: 'Technická podpora',
                },

                {
                  value: 'partnership',
                  label: 'Partnerstvo',
                },

                {
                  value: 'other',
                  label: 'Iné',
                },
              ],
              blockType: 'select',
              label: 'Predmet',
              defaultValue: null,
            },

            {
              name: 'message',
              width: 100,
              required: true,
              blockName: null,
              blockType: 'textarea',
              label: 'Správa',
              defaultValue: null,
            },
          ],
          submitButtonLabel: 'Odoslať správu',
          confirmationType: 'message',

          confirmationMessage: {
            root: {
              type: 'root',
              format: '',
              indent: 0,
              version: 1,

              children: [
                {
                  type: 'paragraph',
                  format: '',
                  indent: 0,
                  version: 1,

                  children: [
                    {
                      mode: 'normal',
                      text: 'Ďakujeme, že ste sa na nás obrátili. Člen nášho tímu vás bude kontaktovať do 24 hodín.',
                      type: 'text',
                      style: '',
                      detail: 0,
                      format: 0,
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                },
              ],
              direction: 'ltr',
            },
          },

          redirect: {
            url: null,
          },

          emails: [
            {
              emailTo: 'contact@vupchemicals.com',
              cc: null,
              bcc: null,
              replyTo: null,
              emailFrom: 'noreply@vupchemicals.com',
              subject: 'New Contact Form Submission - {{subject}}',

              message: {
                root: {
                  type: 'root',
                  format: '',
                  indent: 0,
                  version: 1,

                  children: [
                    {
                      type: 'paragraph',
                      format: '',
                      indent: 0,
                      version: 1,

                      children: [
                        {
                          mode: 'normal',
                          text: 'New Contact Form Submission',
                          type: 'text',
                          style: '',
                          detail: 0,
                          format: 1,
                          version: 1,
                        },
                      ],
                      direction: 'ltr',
                    },

                    {
                      type: 'paragraph',
                      format: '',
                      indent: 0,
                      version: 1,

                      children: [
                        {
                          mode: 'normal',
                          text: 'Name: {{name}}',
                          type: 'text',
                          style: '',
                          detail: 0,
                          format: 0,
                          version: 1,
                        },
                      ],
                      direction: 'ltr',
                    },

                    {
                      type: 'paragraph',
                      format: '',
                      indent: 0,
                      version: 1,

                      children: [
                        {
                          mode: 'normal',
                          text: 'Email: {{email}}',
                          type: 'text',
                          style: '',
                          detail: 0,
                          format: 0,
                          version: 1,
                        },
                      ],
                      direction: 'ltr',
                    },

                    {
                      type: 'paragraph',
                      format: '',
                      indent: 0,
                      version: 1,

                      children: [
                        {
                          mode: 'normal',
                          text: 'Subject: {{subject}}',
                          type: 'text',
                          style: '',
                          detail: 0,
                          format: 0,
                          version: 1,
                        },
                      ],
                      direction: 'ltr',
                    },

                    {
                      type: 'paragraph',
                      format: '',
                      indent: 0,
                      version: 1,

                      children: [
                        {
                          mode: 'normal',
                          text: 'Message: {{message}}',
                          type: 'text',
                          style: '',
                          detail: 0,
                          format: 0,
                          version: 1,
                        },
                      ],
                      direction: 'ltr',
                    },
                  ],
                  direction: 'ltr',
                },
              },
            },
          ],
        },
        enableIntro: null,
        introContent: null,
        blockName: null,
        blockType: 'formBlock',
      },
      {
        blockName: null,
        blockType: 'map',
        iframeUrl:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.815044412763!2d18.53389717697093!3d48.709016011206266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4714dad18f380651%3A0x2a66825a77cb1c39!2sFortischem!5e0!3m2!1sen!2sba!4v1760883460327!5m2!1sen!2sba',
      },
    ],

    meta: {
      title: null,
      image: null,
      description: null,
    },
    slug: 'contact',
    slugLock: true,
    _status: 'published' as const,
  }
}

export function contactUsJp({ contactForm, featuredImage }: ContactUsArgs) {
  return {
    title: 'お問い合わせ',
    hero: {
      type: 'minimal',
      title: 'お問い合わせ',
      description: '私たちのチームにご連絡ください',
      cta: {
        links: [],
      },
      media: null,
      slides: [],
    },

    layout: [
      {
        blockName: null,
        title: '会社情報',
        content: {
          root: {
            children: [
              {
                children: [
                  {
                    detail: 0,
                    format: 1,
                    mode: 'normal',
                    style: '',
                    text: '会社名:',
                    type: 'text',
                    version: 1,
                  },
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: ' VUP, a.s.',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 1,
                    mode: 'normal',
                    style: '',
                    text: '住所:',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Nábrežná 4',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: '971 04 Prievidza, スロバキア',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 1,
                    mode: 'normal',
                    style: '',
                    text: '連絡先:',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: '電話: +421 046 5430035',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'メール: vup@vupas.sk',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 1,
                    mode: 'normal',
                    style: '',
                    text: '事業者登録情報:',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: '会社登録番号: 36002071',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: '税務登録番号: 2020469462',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: '付加価値税番号: SK2020469462',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'トレンチーン地方裁判所商業登記簿、セクションSa、ファイル番号313/Rに登録',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            type: 'root',
            version: 1,
          },
        },
        image: featuredImage,
        blockType: 'contentImage',
      },
      {
        form: {
          title: 'お問い合わせフォーム',
          id: contactForm,
          fields: [
            {
              name: 'name',
              width: 50,
              required: true,
              blockName: null,
              blockType: 'text',
              label: 'お名前',
              defaultValue: null,
            },

            {
              name: 'email',
              width: 50,
              required: true,
              blockName: null,
              blockType: 'email',
              label: 'メールアドレス',
            },

            {
              name: 'subject',
              width: 100,
              placeholder: null,
              required: true,
              blockName: null,

              options: [
                {
                  value: 'product',
                  label: '製品に関するお問い合わせ',
                },

                {
                  value: 'support',
                  label: '技術サポート',
                },

                {
                  value: 'partnership',
                  label: 'パートナーシップ',
                },

                {
                  value: 'other',
                  label: 'その他',
                },
              ],
              blockType: 'select',
              label: '件名',
              defaultValue: null,
            },

            {
              name: 'message',
              width: 100,
              required: true,
              blockName: null,
              blockType: 'textarea',
              label: 'メッセージ',
              defaultValue: null,
            },
          ],
          submitButtonLabel: 'メッセージを送信',
          confirmationType: 'message',

          confirmationMessage: {
            root: {
              type: 'root',
              format: '',
              indent: 0,
              version: 1,

              children: [
                {
                  type: 'paragraph',
                  format: '',
                  indent: 0,
                  version: 1,

                  children: [
                    {
                      mode: 'normal',
                      text: 'お問い合わせいただきありがとうございます。担当者より24時間以内にご連絡いたします。',
                      type: 'text',
                      style: '',
                      detail: 0,
                      format: 0,
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                },
              ],
              direction: 'ltr',
            },
          },

          redirect: {
            url: null,
          },

          emails: [
            {
              emailTo: 'contact@vupchemicals.com',
              cc: null,
              bcc: null,
              replyTo: null,
              emailFrom: 'noreply@vupchemicals.com',
              subject: 'New Contact Form Submission - {{subject}}',

              message: {
                root: {
                  type: 'root',
                  format: '',
                  indent: 0,
                  version: 1,

                  children: [
                    {
                      type: 'paragraph',
                      format: '',
                      indent: 0,
                      version: 1,

                      children: [
                        {
                          mode: 'normal',
                          text: 'New Contact Form Submission',
                          type: 'text',
                          style: '',
                          detail: 0,
                          format: 1,
                          version: 1,
                        },
                      ],
                      direction: 'ltr',
                    },

                    {
                      type: 'paragraph',
                      format: '',
                      indent: 0,
                      version: 1,

                      children: [
                        {
                          mode: 'normal',
                          text: 'Name: {{name}}',
                          type: 'text',
                          style: '',
                          detail: 0,
                          format: 0,
                          version: 1,
                        },
                      ],
                      direction: 'ltr',
                    },

                    {
                      type: 'paragraph',
                      format: '',
                      indent: 0,
                      version: 1,

                      children: [
                        {
                          mode: 'normal',
                          text: 'Email: {{email}}',
                          type: 'text',
                          style: '',
                          detail: 0,
                          format: 0,
                          version: 1,
                        },
                      ],
                      direction: 'ltr',
                    },

                    {
                      type: 'paragraph',
                      format: '',
                      indent: 0,
                      version: 1,

                      children: [
                        {
                          mode: 'normal',
                          text: 'Subject: {{subject}}',
                          type: 'text',
                          style: '',
                          detail: 0,
                          format: 0,
                          version: 1,
                        },
                      ],
                      direction: 'ltr',
                    },

                    {
                      type: 'paragraph',
                      format: '',
                      indent: 0,
                      version: 1,

                      children: [
                        {
                          mode: 'normal',
                          text: 'Message: {{message}}',
                          type: 'text',
                          style: '',
                          detail: 0,
                          format: 0,
                          version: 1,
                        },
                      ],
                      direction: 'ltr',
                    },
                  ],
                  direction: 'ltr',
                },
              },
            },
          ],
        },
        enableIntro: null,
        introContent: null,
        blockName: null,
        blockType: 'formBlock',
      },
      {
        blockName: null,
        blockType: 'map',
        iframeUrl:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.815044412763!2d18.53389717697093!3d48.709016011206266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4714dad18f380651%3A0x2a66825a77cb1c39!2sFortischem!5e0!3m2!1sen!2sba!4v1760883460327!5m2!1sen!2sba',
      },
    ],

    meta: {
      title: null,
      image: null,
      description: null,
    },
    slug: 'contact',
    slugLock: true,
    _status: 'published' as const,
  }
}
