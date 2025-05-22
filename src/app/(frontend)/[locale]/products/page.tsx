import type { Metadata } from 'next'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@/payload.config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { RenderHero } from '@/heros/RenderHero'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'

export default async function ProductsPage() {
  const { isEnabled: draft } = await draftMode()
  const url = '/products'

  const page = await queryProducts({ limit: 1 })

  if (!page) {
    return <PayloadRedirects url={url} />
  }

  const { hero, layout } = page

  return (
    <article>
      <PageClient />
      <PayloadRedirects disableNotFound url={url} />
      {draft && <LivePreviewListener />}
      <RenderHero {...hero} />
      <RenderBlocks blocks={layout} />
    </article>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await queryProducts({ limit: 1 })
  return generateMeta({ doc: page })
}

export async function queryProducts({ limit = 1 }: { limit?: number }) {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'pages',
    draft,
    limit: limit || 1,
    pagination: false,
    overrideAccess: draft,
    where: {
      slug: {
        equals: 'products',
      },
    },
  })

  return result.docs?.[0] || null
}

export async function queryProductCategories({ limit = 100 }: { limit?: number }) {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'productCategories',
    draft,
    limit: limit || 100,
    pagination: false,
    overrideAccess: draft,
  })

  return result.docs || []
}
