import type { Metadata } from 'next'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@/payload.config'
import { getPayload, TypedLocale } from 'payload'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { RenderHero } from '@/heros/RenderHero'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'

// Enable static generation at build time
export const dynamic = 'force-static'
// export const revalidate = 604800 // Revalidate every week

type Params = Promise<{ locale: TypedLocale }>

export default async function ProductsPage({ params }: { params: Params }) {
  const { locale } = await params
  const url = '/products'

  const page = await queryProducts({ limit: 1, locale })

  if (!page) {
    return <PayloadRedirects url={url} />
  }

  const { hero, layout } = page

  return (
    <article>
      <PageClient />
      <PayloadRedirects disableNotFound url={url} />
      <RenderHero {...hero} />
      <RenderBlocks blocks={layout} />
    </article>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await queryProducts({ limit: 1 })
  return generateMeta({ doc: page })
}

export async function queryProducts({
  limit = 1,
  locale = 'en',
}: {
  limit?: number
  locale?: TypedLocale
}) {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'pages',
    draft: false, // Always false for static generation
    limit: limit || 1,
    pagination: false,
    overrideAccess: false, // Use published content only
    locale,
    where: {
      slug: {
        equals: 'products',
      },
    },
  })

  return result.docs?.[0] || null
}

export async function queryProductCategories({
  limit = 100,
  locale = 'en',
}: {
  limit?: number
  locale?: TypedLocale
}) {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'productCategories',
    draft: false, // Always false for static generation
    limit: limit || 100,
    pagination: false,
    overrideAccess: false, // Use published content only
    locale,
  })

  return result.docs || []
}
