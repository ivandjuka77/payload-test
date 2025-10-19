import type { Media } from '@/payload-types'

interface ContactUsArgs {
  contactForm: number
  heroImage: Media
}

export function contactUsEn({ contactForm, heroImage }: ContactUsArgs) {
  return {
    title: 'Contact',
    hero: {
      type: 'backgroundImage',
      title: 'Contact Us',
      description:
        "Get in touch with our team of experts for analytical testing services, custom synthesis, and purification solutions. We're here to support your research and development needs.",
      cta: {
        links: [],
      },
      media: heroImage,
      slides: [],
    },

    layout: [
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
        title: 'Our Location',
        description: 'Visit us at our office in Prievidza, Slovakia.',
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

export function contactUsSk({ contactForm, heroImage }: ContactUsArgs) {
  return {
    title: 'Kontakt',
    hero: {
      type: 'backgroundImage',
      title: 'Kontaktujte nás',
      description:
        'Spojte sa s naším tímom pre analytické testovacie služby, vlastné syntézy a riešenia pre čistenie. Naša tíma je tu, aby ste podporili vaše potreby výskumu a vývoja.',
      cta: {
        links: [],
      },
      media: heroImage,
      slides: [],
    },

    layout: [
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
        title: 'Naša lokalita',
        description: 'Navštívte nás v našom kancelárii v Prievidzi, Slovensku.',
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

export function contactUsJp({ contactForm, heroImage }: ContactUsArgs) {
  return {
    title: 'お問い合わせ',
    hero: {
      type: 'backgroundImage',
      title: 'お問い合わせ',
      description:
        '私たちのチームにご連絡ください。分析テストサービス、カスタム合成、純化ソリューションに関する専門家とご連絡ください。あなたの研究開発のニーズをサポートするために、私たちはここにいます。',
      cta: {
        links: [],
      },
      media: heroImage,
      slides: [],
    },

    layout: [
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
        title: '私たちの所在地',
        description: '私たちのオフィスは、日本の東京都にあります。',
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
