import type { Metadata } from 'next'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@/payload.config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { RenderHero } from '@/heros/RenderHero'
import { generateMeta } from '@/utilities/generateMeta'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { IndustryShowcaseComponent } from '@/components/IndustryShowcaseComponent'
import { Industry } from '@/payload-types'

export default async function IndustriesPage() {
  const { isEnabled: draft } = await draftMode()
  const url = '/industries'

  const page = await queryIndustriesPage()
  const industries = await queryIndustries({ limit: 100 })

  if (!page) {
    return <PayloadRedirects url={url} />
  }

  const { hero, layout } = page

  return (
    <article>
      <PayloadRedirects disableNotFound url={url} />
      {draft && <LivePreviewListener />}
      <RenderHero {...hero} />
      <RenderBlocks blocks={layout} />
      <IndustryShowcaseComponent
        industries={industries}
        title="Industries We Serve"
        subtitle="Discover how our chemical solutions power innovation across diverse industries"
      />
    </article>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await queryIndustriesPage()
  return generateMeta({ doc: page })
}

async function queryIndustriesPage() {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'pages',
    draft,
    limit: 1,
    pagination: false,
    overrideAccess: draft,
    where: {
      slug: {
        equals: 'industries',
      },
    },
  })

  return result.docs?.[0] || null
}

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
