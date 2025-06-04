import type { Metadata } from 'next'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@/payload.config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import { cache } from 'react'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { IndustryChallenges } from '@/components/IndustryChallenges/Component'
import { ProductShowcase } from '@/components/ProductShowcaseComponent'
import { Media, Product } from '@/payload-types'
import IndustryHero from '@/components/IndustryHero'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const industries = await payload.find({
    collection: 'industries',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const locales = ['', 'sk', 'jp'] // '' represents default (English)
  const params = industries.docs.flatMap(({ slug }) => {
    return locales.map((locale) => ({
      locale,
      slug,
    }))
  })

  console.log('Industries', params.length)

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Industry({ params: paramsPromise }: Args) {
  const { slug = '' } = await paramsPromise
  const url = '/industries/' + slug
  const industry = await queryIndustryBySlug({ slug })

  if (!industry) return <PayloadRedirects url={url} />

  return (
    <main>
      <PageClient />

      <PayloadRedirects disableNotFound url={url} />

      <IndustryHero
        image={industry.featuredImage as Media}
        title={industry.name}
        summary={industry.summary}
        challenges={industry.challenges as any}
      />

      <IndustryChallenges industry={industry} />
      {industry.keyProducts && industry.keyProducts.length > 0 && (
        <ProductShowcase
          products={industry.keyProducts as Product[]}
          title="Featured VUP Products"
          description="Explore our core portfolio of chemical intermediates and solutions for this industry"
        />
      )}
    </main>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const industry = await queryIndustryBySlug({ slug })

  return generateMeta({ doc: industry })
}

const queryIndustryBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'industries',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
