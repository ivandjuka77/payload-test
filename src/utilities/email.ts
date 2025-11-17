import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface EmailData {
  to: string
  subject: string
  html: string
  replyTo?: string
}

export async function sendEmail({ to, subject, html, replyTo }: EmailData) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error('❌ RESEND_API_KEY is not set in environment variables')
      return { success: false, error: 'Email service not configured' }
    }

    console.log('📧 Sending email...')
    console.log('  To:', to)
    console.log('  Subject:', subject)
    console.log('  Reply-To:', replyTo || 'N/A')

    const data = await resend.emails.send({
      from: 'VUP Chemicals <noreply@vupinternational.com>',
      to,
      subject,
      html,
      replyTo,
    })

    console.log('✅ Email sent successfully!')
    console.log('  Email ID:', data.data?.id)

    return { success: true, data }
  } catch (error) {
    console.error('❌ Error sending email:', error)
    return { success: false, error }
  }
}

// Email Templates

export function createContactFormEmail(data: {
  name: string
  email: string
  subject: string
  message: string
}) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Form Submission</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background: #f9fafb; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #2563EB; color: white; padding: 24px; text-align: center; }
    .content { background: #ffffff; padding: 32px; }
    .field { margin-bottom: 24px; }
    .label { font-weight: 600; color: #6b7280; font-size: 14px; margin-bottom: 8px; display: block; }
    .value { color: #111827; padding: 12px; background: #f9fafb; border-radius: 6px; }
    .message-box { background: #f9fafb; padding: 16px; border-radius: 6px; white-space: pre-wrap; }
    .footer { margin-top: 24px; padding-top: 24px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 14px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0; font-size: 20px; font-weight: 600;">New Contact Form Submission</h1>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">Name</span>
        <div class="value">${data.name}</div>
      </div>
      
      <div class="field">
        <span class="label">Email</span>
        <div class="value"><a href="mailto:${data.email}" style="color: #2563EB; text-decoration: none;">${data.email}</a></div>
      </div>
      
      <div class="field">
        <span class="label">Subject</span>
        <div class="value">${data.subject}</div>
      </div>
      
      <div class="field">
        <span class="label">Message</span>
        <div class="message-box">${data.message}</div>
      </div>
      
      <div class="footer">
        <p style="margin: 0;">VUP Chemicals Website</p>
      </div>
    </div>
  </div>
</body>
</html>
  `
}

export function createProductInquiryEmail(data: {
  firstName: string
  lastName: string
  email: string
  phone?: string
  company: string
  jobTitle?: string
  country?: string
  inquiryType: string
  quantity?: string
  message: string
  productName: string
  productId: number
}) {
  const inquiryTypeLabels: Record<string, string> = {
    pricing: 'Pricing Information',
    samples: 'Sample Request',
    bulk: 'Bulk Order',
    technical: 'Technical Support',
    custom: 'Custom Synthesis',
    other: 'Other',
  }

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Product Inquiry</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background: #f9fafb; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #2563EB; color: white; padding: 24px; text-align: center; }
    .content { background: #ffffff; padding: 32px; }
    .section { margin-bottom: 32px; }
    .section:last-of-type { margin-bottom: 0; }
    .section-title { font-size: 15px; font-weight: 600; color: #111827; margin-bottom: 16px; padding-bottom: 8px; border-bottom: 1px solid #e5e7eb; }
    .field { margin-bottom: 12px; }
    .label { font-weight: 600; color: #6b7280; font-size: 14px; display: block; margin-bottom: 4px; }
    .value { color: #111827; }
    .badge { display: inline-block; padding: 6px 12px; background: #2563EB; color: white; border-radius: 6px; font-size: 13px; font-weight: 500; }
    .message-box { background: #f9fafb; padding: 16px; border-radius: 6px; white-space: pre-wrap; margin-top: 8px; }
    .footer { margin-top: 24px; padding-top: 24px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 14px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0; font-size: 20px; font-weight: 600;">New Product Inquiry</h1>
      <p style="margin: 8px 0 0 0; opacity: 0.9; font-size: 14px;">${data.productName}</p>
    </div>
    <div class="content">
      <div class="section">
        <div class="section-title">Product Information</div>
        <div class="field">
          <span class="label">Product</span>
          <span class="value">${data.productName}</span>
        </div>
        <div class="field">
          <span class="label">Product ID</span>
          <span class="value">#${data.productId}</span>
        </div>
        <div class="field">
          <span class="label">Inquiry Type</span>
          <div style="margin-top: 4px;"><span class="badge">${inquiryTypeLabels[data.inquiryType] || data.inquiryType}</span></div>
        </div>
        ${data.quantity ? `<div class="field"><span class="label">Quantity</span><span class="value">${data.quantity}</span></div>` : ''}
      </div>
      
      <div class="section">
        <div class="section-title">Contact Information</div>
        <div class="field">
          <span class="label">Name</span>
          <span class="value">${data.firstName} ${data.lastName}</span>
        </div>
        <div class="field">
          <span class="label">Email</span>
          <span class="value"><a href="mailto:${data.email}" style="color: #2563EB; text-decoration: none;">${data.email}</a></span>
        </div>
        ${data.phone ? `<div class="field"><span class="label">Phone</span><span class="value">${data.phone}</span></div>` : ''}
      </div>
      
      <div class="section">
        <div class="section-title">Company Information</div>
        <div class="field">
          <span class="label">Company</span>
          <span class="value">${data.company}</span>
        </div>
        ${data.jobTitle ? `<div class="field"><span class="label">Job Title</span><span class="value">${data.jobTitle}</span></div>` : ''}
        ${data.country ? `<div class="field"><span class="label">Country</span><span class="value">${data.country}</span></div>` : ''}
      </div>
      
      <div class="section">
        <div class="section-title">Message</div>
        <div class="message-box">${data.message}</div>
      </div>
      
      <div class="footer">
        <p style="margin: 0;">VUP Chemicals Website</p>
      </div>
    </div>
  </div>
</body>
</html>
  `
}

export function createCareerApplicationEmail(data: {
  fullName: string
  email: string
  phone: string
  coverLetter?: string
  gdprConsent: boolean
}) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Career Application</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background: #f9fafb; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #2563EB; color: white; padding: 24px; text-align: center; }
    .content { background: #ffffff; padding: 32px; }
    .section { margin-bottom: 32px; }
    .section:last-of-type { margin-bottom: 0; }
    .section-title { font-size: 15px; font-weight: 600; color: #111827; margin-bottom: 16px; padding-bottom: 8px; border-bottom: 1px solid #e5e7eb; }
    .field { margin-bottom: 12px; }
    .label { font-weight: 600; color: #6b7280; font-size: 14px; display: block; margin-bottom: 4px; }
    .value { color: #111827; }
    .cover-letter-box { background: #f9fafb; padding: 16px; border-radius: 6px; white-space: pre-wrap; margin-top: 8px; }
    .consent-badge { display: inline-block; padding: 6px 12px; background: #10b981; color: white; border-radius: 6px; font-size: 13px; font-weight: 500; }
    .footer { margin-top: 24px; padding-top: 24px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 14px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0; font-size: 20px; font-weight: 600;">New Career Application</h1>
    </div>
    <div class="content">
      <div class="section">
        <div class="section-title">Applicant Information</div>
        <div class="field">
          <span class="label">Full Name</span>
          <span class="value">${data.fullName}</span>
        </div>
        <div class="field">
          <span class="label">Email</span>
          <span class="value"><a href="mailto:${data.email}" style="color: #2563EB; text-decoration: none;">${data.email}</a></span>
        </div>
        <div class="field">
          <span class="label">Phone</span>
          <span class="value">${data.phone}</span>
        </div>
        <div class="field">
          <span class="label">GDPR Consent</span>
          <div style="margin-top: 4px;"><span class="consent-badge">${data.gdprConsent ? '✓ Provided' : '✗ Not Provided'}</span></div>
        </div>
      </div>
      
      ${
        data.coverLetter
          ? `
      <div class="section">
        <div class="section-title">Cover Letter</div>
        <div class="cover-letter-box">${data.coverLetter}</div>
      </div>
      `
          : ''
      }
      
      <div class="footer">
        <p style="margin: 0;">VUP Chemicals Website</p>
      </div>
    </div>
  </div>
</body>
</html>
  `
}

export function createNewsletterSubscriptionEmail(data: { email: string }) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Newsletter Subscription</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background: #f9fafb; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #2563EB; color: white; padding: 24px; text-align: center; }
    .content { background: #ffffff; padding: 32px; text-align: center; }
    .email-badge { display: inline-block; padding: 10px 20px; background: #2563EB; color: white; border-radius: 6px; font-weight: 500; font-size: 15px; }
    .footer { margin-top: 24px; padding-top: 24px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 14px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0; font-size: 20px; font-weight: 600;">New Newsletter Subscription</h1>
    </div>
    <div class="content">
      <p style="margin: 0 0 24px 0; color: #6b7280;">A new user has subscribed to the newsletter.</p>
      <div>
        <span class="email-badge">${data.email}</span>
      </div>
      <div class="footer">
        <p style="margin: 0;">VUP Chemicals Website</p>
      </div>
    </div>
  </div>
</body>
</html>
  `
}
