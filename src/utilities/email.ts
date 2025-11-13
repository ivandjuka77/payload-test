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
      from: 'VUP Chemicals <noreply@vupchemicals.com>',
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
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0; }
    .content { background: #ffffff; padding: 30px; border: 1px solid #e1e8ed; border-top: none; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 20px; }
    .label { font-weight: 600; color: #667eea; margin-bottom: 5px; display: block; }
    .value { color: #333; padding: 10px; background: #f7fafc; border-radius: 4px; border-left: 3px solid #667eea; }
    .message-box { background: #f7fafc; padding: 15px; border-radius: 4px; border: 1px solid #e1e8ed; white-space: pre-wrap; }
    .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #e1e8ed; text-align: center; color: #718096; font-size: 14px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0; font-size: 24px;">📧 New Contact Form Submission</h1>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">Name:</span>
        <div class="value">${data.name}</div>
      </div>
      
      <div class="field">
        <span class="label">Email:</span>
        <div class="value"><a href="mailto:${data.email}" style="color: #667eea; text-decoration: none;">${data.email}</a></div>
      </div>
      
      <div class="field">
        <span class="label">Subject:</span>
        <div class="value">${data.subject}</div>
      </div>
      
      <div class="field">
        <span class="label">Message:</span>
        <div class="message-box">${data.message}</div>
      </div>
      
      <div class="footer">
        <p>This email was sent from the VUP Chemicals website contact form.</p>
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
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0; }
    .content { background: #ffffff; padding: 30px; border: 1px solid #e1e8ed; border-top: none; border-radius: 0 0 8px 8px; }
    .section { margin-bottom: 25px; }
    .section-title { font-size: 16px; font-weight: 700; color: #667eea; margin-bottom: 15px; padding-bottom: 8px; border-bottom: 2px solid #667eea; }
    .field { margin-bottom: 12px; }
    .label { font-weight: 600; color: #4a5568; display: inline-block; min-width: 120px; }
    .value { color: #333; display: inline-block; }
    .badge { display: inline-block; padding: 4px 12px; background: #667eea; color: white; border-radius: 12px; font-size: 12px; font-weight: 600; }
    .message-box { background: #f7fafc; padding: 15px; border-radius: 4px; border: 1px solid #e1e8ed; white-space: pre-wrap; margin-top: 10px; }
    .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #e1e8ed; text-align: center; color: #718096; font-size: 14px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0; font-size: 24px;">🔬 New Product Inquiry</h1>
      <p style="margin: 10px 0 0 0; opacity: 0.9;">${data.productName}</p>
    </div>
    <div class="content">
      <div class="section">
        <div class="section-title">Product Information</div>
        <div class="field">
          <span class="label">Product:</span>
          <span class="value"><strong>${data.productName}</strong></span>
        </div>
        <div class="field">
          <span class="label">Product ID:</span>
          <span class="value">#${data.productId}</span>
        </div>
        <div class="field">
          <span class="label">Inquiry Type:</span>
          <span class="badge">${inquiryTypeLabels[data.inquiryType] || data.inquiryType}</span>
        </div>
        ${data.quantity ? `<div class="field"><span class="label">Quantity:</span><span class="value">${data.quantity}</span></div>` : ''}
      </div>
      
      <div class="section">
        <div class="section-title">Contact Information</div>
        <div class="field">
          <span class="label">Name:</span>
          <span class="value">${data.firstName} ${data.lastName}</span>
        </div>
        <div class="field">
          <span class="label">Email:</span>
          <span class="value"><a href="mailto:${data.email}" style="color: #667eea; text-decoration: none;">${data.email}</a></span>
        </div>
        ${data.phone ? `<div class="field"><span class="label">Phone:</span><span class="value">${data.phone}</span></div>` : ''}
      </div>
      
      <div class="section">
        <div class="section-title">Company Information</div>
        <div class="field">
          <span class="label">Company:</span>
          <span class="value"><strong>${data.company}</strong></span>
        </div>
        ${data.jobTitle ? `<div class="field"><span class="label">Job Title:</span><span class="value">${data.jobTitle}</span></div>` : ''}
        ${data.country ? `<div class="field"><span class="label">Country:</span><span class="value">${data.country}</span></div>` : ''}
      </div>
      
      <div class="section">
        <div class="section-title">Message</div>
        <div class="message-box">${data.message}</div>
      </div>
      
      <div class="footer">
        <p>This email was sent from the VUP Chemicals product inquiry form.</p>
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
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0; }
    .content { background: #ffffff; padding: 30px; border: 1px solid #e1e8ed; border-top: none; border-radius: 0 0 8px 8px; }
    .section { margin-bottom: 25px; }
    .section-title { font-size: 16px; font-weight: 700; color: #667eea; margin-bottom: 15px; padding-bottom: 8px; border-bottom: 2px solid #667eea; }
    .field { margin-bottom: 12px; }
    .label { font-weight: 600; color: #4a5568; display: inline-block; min-width: 120px; }
    .value { color: #333; display: inline-block; }
    .cover-letter-box { background: #f7fafc; padding: 15px; border-radius: 4px; border: 1px solid #e1e8ed; white-space: pre-wrap; margin-top: 10px; }
    .consent-badge { display: inline-block; padding: 4px 12px; background: #48bb78; color: white; border-radius: 12px; font-size: 12px; font-weight: 600; }
    .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #e1e8ed; text-align: center; color: #718096; font-size: 14px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0; font-size: 24px;">💼 New Career Application</h1>
    </div>
    <div class="content">
      <div class="section">
        <div class="section-title">Applicant Information</div>
        <div class="field">
          <span class="label">Full Name:</span>
          <span class="value"><strong>${data.fullName}</strong></span>
        </div>
        <div class="field">
          <span class="label">Email:</span>
          <span class="value"><a href="mailto:${data.email}" style="color: #667eea; text-decoration: none;">${data.email}</a></span>
        </div>
        <div class="field">
          <span class="label">Phone:</span>
          <span class="value">${data.phone}</span>
        </div>
        <div class="field">
          <span class="label">GDPR Consent:</span>
          <span class="consent-badge">${data.gdprConsent ? '✓ Provided' : '✗ Not Provided'}</span>
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
        <p>This email was sent from the VUP Chemicals career application form.</p>
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
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0; }
    .content { background: #ffffff; padding: 30px; border: 1px solid #e1e8ed; border-top: none; border-radius: 0 0 8px 8px; }
    .email-badge { display: inline-block; padding: 8px 16px; background: #667eea; color: white; border-radius: 16px; font-weight: 600; }
    .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #e1e8ed; text-align: center; color: #718096; font-size: 14px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0; font-size: 24px;">📬 New Newsletter Subscription</h1>
    </div>
    <div class="content">
      <p style="text-align: center; margin-bottom: 20px;">A new user has subscribed to the VUP Chemicals newsletter.</p>
      <p style="text-align: center;">
        <span class="email-badge">${data.email}</span>
      </p>
      <div class="footer">
        <p>This email was sent from the VUP Chemicals newsletter subscription form.</p>
      </div>
    </div>
  </div>
</body>
</html>
  `
}
