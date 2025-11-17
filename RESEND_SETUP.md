# Resend Email Setup

This project uses [Resend](https://resend.com) for sending emails from all form submissions.

## Setup Instructions

1. **Get your Resend API Key:**
   - Sign up or log in at [https://resend.com](https://resend.com)
   - Navigate to [API Keys](https://resend.com/api-keys)
   - Create a new API key

2. **Add to Environment Variables:**

   Add the following to your `.env` file (or `ACTUAL.env.production` for production):

   ```bash
   RESEND_API_KEY=re_your_resend_api_key_here
   ```

3. **Configure Email Recipient:**

   By default, all form submission emails are sent to: `ivandjuka777@gmail.com`

   To change this, update the email address in the following files:
   - `src/actions/productActions.ts` (for Product Inquiry, Career Application, Contact Form, and Newsletter)
   - `src/plugins/index.ts` (for FormBlock submissions)

## Email Templates

All email templates are defined in `src/utilities/email.ts`:

1. **Contact Form Email** - General contact inquiries
2. **Product Inquiry Email** - Product-specific inquiries with company info
3. **Career Application Email** - Job applications with cover letter
4. **Newsletter Subscription Email** - Newsletter sign-ups

## Forms That Send Emails

1. ✅ **Contact Form** (FormBlock) - Submitted via `/api/form-submissions`
2. ✅ **Product Inquiry Form** - Modal form on product pages
3. ✅ **Career Application Form** - Career/job application form
4. ✅ **Newsletter Subscription** - Newsletter sign-up (2 locations: main page & footer)

## Testing

To test email functionality in development:

1. Ensure `RESEND_API_KEY` is set in your environment
2. Submit any form on the website
3. Check your email at `ivandjuka777@gmail.com`
4. Check server logs for any email sending errors

## Troubleshooting

If emails are not being sent:

1. **Check Environment Variable:**

   ```bash
   echo $RESEND_API_KEY
   ```

2. **Check Server Logs:**
   Look for "Error sending email" messages in the console

3. **Verify Resend API Key:**
   - Ensure the API key is valid
   - Check that the key has not expired
   - Verify the key has the correct permissions

4. **Check Resend Dashboard:**
   - Visit [Resend Dashboard](https://resend.com/emails)
   - Look for email logs and delivery status

## Domain Configuration (Production)

For production use, you should configure your domain with Resend:

1. Go to [Resend Domains](https://resend.com/domains)
2. Add your domain (e.g., `vupinternational`)
3. Configure DNS records as instructed
4. Update the `from` email in `src/utilities/email.ts` to use your domain:
   ```typescript
   from: 'VUP Chemicals <noreply@yourdomain.com>'
   ```

## Email HTML Templates

All email templates use inline CSS for maximum email client compatibility. The templates feature:

- Responsive design
- Professional styling with gradient headers
- Clear section organization
- Reply-to functionality (where applicable)
- Proper HTML structure for email clients
