import type { Payload } from 'payload'
import { contactForm } from './contact-form'

export const seedForms = async (payload: Payload) => {
  payload.logger.info('— Seeding forms...')

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

  // Create Contact Form (existing)
  const contactFormDoc = await payload.create({
    collection: 'forms',
    data: contactForm,
  })

  payload.logger.info('✓ Forms seeded')

  return {
    productInquiryForm,
    contactForm: contactFormDoc,
  }
}
