import type { Payload } from 'payload'

export const seedForms = async (payload: Payload) => {
  payload.logger.info('- Seeding forms...')

  // Create Contact Form
  const contactFormDoc = await payload.create({
    collection: 'forms',
    data: {
      title: 'Contact Form',
      submitButtonLabel: 'Send Message',
      confirmationType: 'message',
      confirmationMessage: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'Thank you for reaching out. A member of our team will contact you within 24 hours.',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      emails: [
        {
          emailTo: 'vup@vupas.sk',
          emailFrom: 'noreply@vupchemicals.com',
          subject: 'New Contact Form Submission - {{subject}}',
          message: {
            root: {
              type: 'root',
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 1, // bold
                      mode: 'normal',
                      style: '',
                      text: 'New Contact Form Submission',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  version: 1,
                },
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: 'Name: {{name}}',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  version: 1,
                },
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: 'Email: {{email}}',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  version: 1,
                },
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: 'Subject: {{subject}}',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  version: 1,
                },
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: 'Message: {{message}}',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              version: 1,
            },
          },
        },
      ],
      fields: [
        {
          blockType: 'text',
          name: 'name',
          label: 'Name',
          width: 50,
          required: true,
        },
        {
          blockType: 'email',
          name: 'email',
          label: 'Email',
          width: 50,
          required: true,
        },
        {
          blockType: 'select',
          name: 'subject',
          label: 'Subject',
          width: 100,
          required: true,
          options: [
            {
              label: 'Product Inquiry',
              value: 'product',
            },
            {
              label: 'Technical Support',
              value: 'support',
            },
            {
              label: 'Partnership',
              value: 'partnership',
            },
            {
              label: 'Other',
              value: 'other',
            },
          ],
        },
        {
          blockType: 'textarea',
          name: 'message',
          label: 'Message',
          width: 100,
          required: true,
        },
      ],
    },
  })

  payload.logger.info(`✓ Contact Form created with ID: ${contactFormDoc.id}`)

  // -------------------------------------------------------------------
  // 3. Add Slovak (sk) localization
  // -------------------------------------------------------------------
  await payload.update({
    collection: 'forms',
    id: contactFormDoc.id,
    locale: 'sk',
    data: {
      submitButtonLabel: 'Odoslať správu',
      confirmationMessage: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'Ďakujeme, že ste sa na nás obrátili. Člen nášho tímu vás bude kontaktovať do 24 hodín.',
                },
              ],
            },
          ],
        },
      },
      fields: [
        {
          blockType: 'text',
          name: 'name',
          label: 'Meno',
        },
        {
          blockType: 'email',
          name: 'email',
          label: 'E-mail',
        },
        {
          blockType: 'select',
          name: 'subject',
          label: 'Predmet',
          options: [
            {
              label: 'Dopyt na produkt',
              value: 'product',
            },
            {
              label: 'Technická podpora',
              value: 'support',
            },
            {
              label: 'Partnerstvo',
              value: 'partnership',
            },
            {
              label: 'Iné',
              value: 'other',
            },
          ],
        },
        {
          blockType: 'textarea',
          name: 'message',
          label: 'Správa',
        },
      ],
    },
  })

  payload.logger.info('✓ Slovak (sk) localization added.')

  await payload.update({
    collection: 'forms',
    id: contactFormDoc.id,
    locale: 'jp',
    data: {
      submitButtonLabel: 'メッセージを送信',
      confirmationMessage: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'お問い合わせいただきありがとうございます。24時間以内に担当者よりご連絡いたします。',
                },
              ],
            },
          ],
        },
      },
      fields: [
        {
          blockType: 'text',
          name: 'name',
          label: 'お名前',
        },
        {
          blockType: 'email',
          name: 'email',
          label: 'メールアドレス',
        },
        {
          blockType: 'select',
          name: 'subject',
          label: '件名',
          options: [
            {
              label: '製品に関するお問い合わせ',
              value: 'product',
            },
            {
              label: '技術サポート',
              value: 'support',
            },
            {
              label: 'パートナーシップ',
              value: 'partnership',
            },
            {
              label: 'その他',
              value: 'other',
            },
          ],
        },
        {
          blockType: 'textarea',
          name: 'message',
          label: 'メッセージ',
        },
      ],
    },
  })

  payload.logger.info('✓ Japanese (jp) localization added.')

  // Create Product Inquiry Form
  const productInquiryForm = await payload.create({
    collection: 'forms',
    data: {
      title: 'Product Inquiry Form',
      submitButtonLabel: 'Submit Inquiry',
      confirmationType: 'message',
      confirmationMessage: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'Thank you for your product inquiry. We will get back to you within 24 hours with product information and pricing.',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      fields: [
        {
          name: 'firstName',
          blockName: 'firstName',
          blockType: 'text',
          label: 'First Name',
          required: true,
          width: 50,
        },
        {
          name: 'lastName',
          blockName: 'lastName',
          blockType: 'text',
          label: 'Last Name',
          required: true,
          width: 50,
        },
        {
          name: 'email',
          blockName: 'email',
          blockType: 'email',
          label: 'Email Address',
          required: true,
          width: 50,
        },
        {
          name: 'phone',
          blockName: 'phone',
          blockType: 'text',
          label: 'Phone Number',
          required: false,
          width: 50,
        },
        {
          name: 'company',
          blockName: 'company',
          blockType: 'text',
          label: 'Company Name',
          required: true,
          width: 50,
        },
        {
          name: 'jobTitle',
          blockName: 'jobTitle',
          blockType: 'text',
          label: 'Job Title',
          required: false,
          width: 50,
        },
        {
          name: 'inquiryType',
          blockName: 'inquiryType',
          blockType: 'select',
          label: 'Inquiry Type',
          required: true,
          width: 100,
          options: [
            { label: 'Pricing Information', value: 'pricing' },
            { label: 'Sample Request', value: 'samples' },
            { label: 'Bulk Order', value: 'bulk' },
            { label: 'Technical Support', value: 'technical' },
            { label: 'Custom Synthesis', value: 'custom' },
            { label: 'Other', value: 'other' },
          ],
        },
        {
          name: 'quantity',
          blockName: 'quantity',
          blockType: 'text',
          label: 'Quantity (if applicable)',
          required: false,
          width: 100,
        },
        {
          name: 'productName',
          blockName: 'productName',
          blockType: 'text',
          label: 'Product Name',
          required: true,
          width: 100,
        },
        {
          name: 'message',
          blockName: 'message',
          blockType: 'textarea',
          label: 'Additional Information',
          required: true,
          width: 100,
        },
      ],
      emails: [
        {
          emailTo: 'inquiries@vup.sk',
          emailFrom: '"VUP Website" <noreply@vup.sk>',
          subject: 'New Product Inquiry - {{productName}}',
          message: {
            root: {
              type: 'root',
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: 'A new product inquiry has been submitted through the website.',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  version: 1,
                },
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 1,
                      mode: 'normal',
                      style: '',
                      text: 'Contact Information:',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  version: 1,
                },
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: 'Name: {{firstName}} {{lastName}}',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  version: 1,
                },
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: 'Email: {{email}}',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  version: 1,
                },
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: 'Company: {{company}}',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  version: 1,
                },
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: 'Phone: {{phone}}',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  version: 1,
                },
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 1,
                      mode: 'normal',
                      style: '',
                      text: 'Inquiry Details:',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  version: 1,
                },
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: 'Product: {{productName}}',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  version: 1,
                },
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: 'Inquiry Type: {{inquiryType}}',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  version: 1,
                },
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: 'Quantity: {{quantity}}',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  version: 1,
                },
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: 'Message: {{message}}',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              version: 1,
            },
          },
        },
      ],
    },
  })

  payload.logger.info(`✓ Product Inquiry Form created with ID: ${productInquiryForm.id}`)

  // -------------------------------------------------------------------
  // Add Product Inquiry Form Slovak (sk) localization
  // -------------------------------------------------------------------
  await payload.update({
    collection: 'forms',
    id: productInquiryForm.id,
    locale: 'sk',
    data: {
      submitButtonLabel: 'Odoslať dopyt',
      confirmationMessage: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'Ďakujeme za váš dopyt na produkt. Ozveme sa vám do 24 hodín s informáciami o produkte a cenou.',
                },
              ],
            },
          ],
        },
      },
      fields: [
        {
          name: 'firstName',
          blockType: 'text',
          label: 'Meno',
        },
        {
          name: 'lastName',
          blockType: 'text',
          label: 'Priezvisko',
        },
        {
          name: 'email',
          blockType: 'email',
          label: 'E-mailová adresa',
        },
        {
          name: 'phone',
          blockType: 'text',
          label: 'Telefónne číslo',
        },
        {
          name: 'company',
          blockType: 'text',
          label: 'Názov spoločnosti',
        },
        {
          name: 'jobTitle',
          blockType: 'text',
          label: 'Pracovná pozícia',
        },
        {
          name: 'inquiryType',
          blockType: 'select',
          label: 'Typ dopytu',
          options: [
            { label: 'Informácie o cene', value: 'pricing' },
            { label: 'Žiadosť o vzorku', value: 'samples' },
            { label: 'Hromadná objednávka', value: 'bulk' },
            { label: 'Technická podpora', value: 'technical' },
            { label: 'Vlastná syntéza', value: 'custom' },
            { label: 'Iné', value: 'other' },
          ],
        },
        {
          name: 'quantity',
          blockType: 'text',
          label: 'Množstvo (ak je to relevantné)',
        },
        {
          name: 'productName',
          blockType: 'text',
          label: 'Názov produktu',
        },
        {
          name: 'message',
          blockType: 'textarea',
          label: 'Dodatočné informácie',
        },
      ],
    },
  })

  payload.logger.info('✓ Product Inquiry Form (sk) localization added.')

  // -------------------------------------------------------------------
  // Add Product Inquiry Form Japanese (jp) localization
  // -------------------------------------------------------------------
  await payload.update({
    collection: 'forms',
    id: productInquiryForm.id,
    locale: 'jp',
    data: {
      submitButtonLabel: '問い合わせを送信',
      confirmationMessage: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: '製品に関するお問い合わせありがとうございます。24時間以内に製品情報と価格についてご連絡いたします。',
                },
              ],
            },
          ],
        },
      },
      fields: [
        {
          name: 'firstName',
          blockType: 'text',
          label: '名',
        },
        {
          name: 'lastName',
          blockType: 'text',
          label: '姓',
        },
        {
          name: 'email',
          blockType: 'email',
          label: 'メールアドレス',
        },
        {
          name: 'phone',
          blockType: 'text',
          label: '電話番号',
        },
        {
          name: 'company',
          blockType: 'text',
          label: '会社名',
        },
        {
          name: 'jobTitle',
          blockType: 'text',
          label: '役職',
        },
        {
          name: 'inquiryType',
          blockType: 'select',
          label: 'お問い合わせの種類',
          options: [
            { label: '価格情報', value: 'pricing' },
            { label: 'サンプル請求', value: 'samples' },
            { label: '大量注文', value: 'bulk' },
            { label: '技術サポート', value: 'technical' },
            { label: 'カスタム合成', value: 'custom' },
            { label: 'その他', value: 'other' },
          ],
        },
        {
          name: 'quantity',
          blockType: 'text',
          label: '数量（該当する場合）',
        },
        {
          name: 'productName',
          blockType: 'text',
          label: '製品名',
        },
        {
          name: 'message',
          blockType: 'textarea',
          label: '追加情報',
        },
      ],
    },
  })

  payload.logger.info('✓ Product Inquiry Form (jp) localization added.')

  // Create Career Application Form
  const careerApplicationForm = await payload.create({
    collection: 'forms',
    data: {
      title: 'Career Application Form',
      submitButtonLabel: 'Submit Application',
      confirmationType: 'message',
      confirmationMessage: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'Thank you for your application. We will review it and get back to you soon.',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      fields: [
        {
          name: 'fullName',
          blockName: 'fullName',
          blockType: 'text',
          label: 'Full Name',
          required: true,
          width: 100,
        },
        {
          name: 'email',
          blockName: 'email',
          blockType: 'email',
          label: 'Email',
          required: true,
          width: 50,
        },
        {
          name: 'phone',
          blockName: 'phone',
          blockType: 'text',
          label: 'Phone',
          required: true,
          width: 50,
        },
        {
          name: 'coverLetter',
          blockName: 'coverLetter',
          blockType: 'textarea',
          label: 'Cover Letter',
          required: false,
          width: 100,
        },
        {
          name: 'gdprConsent',
          blockName: 'gdprConsent',
          blockType: 'checkbox',
          label: 'I agree to the processing of my personal data',
          required: true,
          width: 100,
        },
      ],
      emails: [
        {
          emailTo: 'hr@vupas.sk',
          emailFrom: '"VUP Careers" <noreply@vupas.sk>',
          subject: 'New Career Application - {{fullName}}',
          message: {
            root: {
              type: 'root',
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 1,
                      mode: 'normal',
                      style: '',
                      text: 'New Career Application Received',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  version: 1,
                },
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: 'A new career application has been submitted through the website.',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  version: 1,
                },
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 1,
                      mode: 'normal',
                      style: '',
                      text: 'Applicant Information:',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  version: 1,
                },
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: 'Name: {{fullName}}',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  version: 1,
                },
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: 'Email: {{email}}',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  version: 1,
                },
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: 'Phone: {{phone}}',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  version: 1,
                },
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 1,
                      mode: 'normal',
                      style: '',
                      text: 'Cover Letter:',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  version: 1,
                },
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: '{{coverLetter}}',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              version: 1,
            },
          },
        },
      ],
    },
  })

  payload.logger.info(`✓ Career Application Form created with ID: ${careerApplicationForm.id}`)

  // -------------------------------------------------------------------
  // Add Career Application Form Slovak (sk) localization
  // -------------------------------------------------------------------
  await payload.update({
    collection: 'forms',
    id: careerApplicationForm.id,
    locale: 'sk',
    data: {
      submitButtonLabel: 'Odoslať prihlášku',
      confirmationMessage: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'Ďakujeme za vašu prihlášku. Preskúmame ju a čoskoro sa vám ozveme.',
                },
              ],
            },
          ],
        },
      },
      fields: [
        {
          name: 'fullName',
          blockType: 'text',
          label: 'Celé meno',
        },
        {
          name: 'email',
          blockType: 'email',
          label: 'E-mail',
        },
        {
          name: 'phone',
          blockType: 'text',
          label: 'Telefón',
        },
        {
          name: 'coverLetter',
          blockType: 'textarea',
          label: 'Motivačný list',
        },
        {
          name: 'gdprConsent',
          blockType: 'checkbox',
          label: 'Súhlasím so spracovaním mojich osobných údajov',
        },
      ],
    },
  })

  payload.logger.info('✓ Career Application Form (sk) localization added.')

  // -------------------------------------------------------------------
  // Add Career Application Form Japanese (jp) localization
  // -------------------------------------------------------------------
  await payload.update({
    collection: 'forms',
    id: careerApplicationForm.id,
    locale: 'jp',
    data: {
      submitButtonLabel: '応募を送信',
      confirmationMessage: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'ご応募ありがとうございます。審査の上、追ってご連絡いたします。',
                },
              ],
            },
          ],
        },
      },
      fields: [
        {
          name: 'fullName',
          blockType: 'text',
          label: '氏名',
        },
        {
          name: 'email',
          blockType: 'email',
          label: 'メールアドレス',
        },
        {
          name: 'phone',
          blockType: 'text',
          label: '電話番号',
        },
        {
          name: 'coverLetter',
          blockType: 'textarea',
          label: 'カバーレター',
        },
        {
          name: 'gdprConsent',
          blockType: 'checkbox',
          label: '個人情報の処理に同意します',
        },
      ],
    },
  })

  payload.logger.info('✓ Career Application Form (jp) localization added.')

  payload.logger.info('✓ Forms seeded')

  return {
    productInquiryForm,
    contactForm: contactFormDoc,
    careerApplicationForm,
  }
}
