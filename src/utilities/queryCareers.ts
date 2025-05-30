import { cache } from 'react'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'

export const queryCareers = cache(async ({ limit }: { limit: number }) => {
  const payload = await getPayload({ config: configPromise })
  const careers = await payload.find({
    collection: 'careers',
    draft: false,
    limit,
    overrideAccess: false,
    pagination: false,
  })

  return careers.docs || []
})
