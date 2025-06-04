import { Industry } from '@/payload-types'
import { draftMode } from 'next/headers'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'

export async function queryIndustries({ limit = 100 }: { limit?: number }) {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'industries',
    draft,
    limit: limit || 100,
    pagination: false,
    overrideAccess: draft,
  })

  return result.docs as Industry[]
}
