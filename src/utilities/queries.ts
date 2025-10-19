import { Industry, Service } from '@/payload-types'
import { draftMode } from 'next/headers'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'

export async function queryIndustries({
  limit = 100,
  locale = 'en',
}: {
  limit?: number
  locale?: 'en' | 'sk' | 'jp' | 'all'
}) {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'industries',
    draft,
    limit: limit || 100,
    pagination: false,
    overrideAccess: draft,
    locale,
  })

  return result.docs as Industry[]
}

export async function queryServices({
  limit = 100,
  locale = 'en',
}: {
  limit?: number
  locale?: 'en' | 'sk' | 'jp' | 'all'
}) {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'services',
    draft,
    limit: limit || 100,
    pagination: false,
    overrideAccess: draft,
    locale,
  })

  return result.docs as Service[]
}
