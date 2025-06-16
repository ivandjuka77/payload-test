import { createLocalReq, getPayload } from 'payload'
import { seed } from '@/endpoints/seed'
import config from '@/payload.config'
import { headers } from 'next/headers'

// export const maxDuration = 60 // This function can run for a maximum of 60 seconds

export async function POST(request: Request): Promise<Response> {
  const payload = await getPayload({ config })
  const requestHeaders = await headers()

  // Authenticate by passing request headers
  const { user } = await payload.auth({ headers: requestHeaders })

  if (!user) {
    return new Response('Action forbidden.', { status: 403 })
  }

  try {
    // Parse request body for options
    let useExistingMedia = true // Default to using existing media

    try {
      const body = await request.json()
      useExistingMedia = body.useExistingMedia ?? true
    } catch {
      // If no body or invalid JSON, use defaults
    }

    payload.logger.info(`🚀 Starting seed process with useExistingMedia=${useExistingMedia}`)

    // Create a Payload request object to pass to the Local API for transactions
    // At this point you should pass in a user, locale, and any other context you need for the Local API
    const payloadReq = await createLocalReq({ user }, payload)

    await seed({
      payload,
      req: payloadReq,
      useExistingMedia,
    })

    return Response.json({
      success: true,
      message: useExistingMedia
        ? 'Database seeded successfully using existing media'
        : 'Database seeded successfully with fresh media',
    })
  } catch (e) {
    payload.logger.error({ err: e, message: 'Error seeding data' })
    return new Response('Error seeding data.', { status: 500 })
  }
}
