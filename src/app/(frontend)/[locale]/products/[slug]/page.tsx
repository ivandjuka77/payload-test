import type { Metadata } from 'next'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@/payload.config'
import { getPayload } from 'payload'
import { cache } from 'react'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { ProductHero } from '@/components/products/Hero'
import { TechnicalSpecifications } from '@/components/products/TechnicalSpecifications'
import { ApplicationsAndIndustries } from '@/components/products/Applications'
import { CaseStudies } from '@/components/products/CaseStudies'
import { ProductDetails } from '@/components/products/ProductDetails'
import { FAQ } from '@/components/FAQ'
import { TypedLocale } from 'payload'
import { Showcase } from '@/blocks/Showcase/Component'
import { Product as ProductType } from '@/payload-types'
import { BlockShowcase } from '@/components/BlockShowcase'

// Ensure pages are statically generated at build time with no ISR
// export const dynamic = 'force-static'
// export const dynamicParams = false
// export const revalidate = false

// This function runs at build time to generate all possible [slug] paths
export async function generateStaticParams() {
  try {
    // Use getPayload directly with config for more reliable build-time behavior
    const payload = await getPayload({ config: configPromise })

    // Fetch ALL products without limit
    const products = await payload.find({
      collection: 'products',
      draft: false,
      overrideAccess: false,
      pagination: false,
      depth: 0, // Minimize data fetched since we only need slugs
      select: {
        slug: true,
      }, // Only fetch the slug field
    })

    const locales = ['', 'sk', 'jp'] // Your supported locales

    // Generate params for each product + locale combination
    const params = products.docs.flatMap(({ slug }) =>
      locales.map((locale) => ({
        locale,
        slug,
      })),
    )

    console.log(`[generateStaticParams] Successfully generated ${params.length} static paths`)
    console.log(`Products: ${products.docs.length}, Locales: ${locales.length}`)

    return params
  } catch (error) {
    console.error('[generateStaticParams] Error generating static paths:', error)
    throw error // Let the build fail if we can't generate paths
  }
}

type Args = {
  params: Promise<{
    slug?: string
    locale?: TypedLocale
  }>
}

export default async function Product({ params: paramsPromise }: Args) {
  const { slug = '', locale } = await paramsPromise
  const url = '/products/' + slug
  const product = await queryProductBySlug({ slug, locale: locale as TypedLocale })

  if (!product) return <PayloadRedirects url={url} />

  return (
    <main>
      <PageClient />

      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      <ProductHero product={product} />
      {product.technicalSpecifications && <TechnicalSpecifications product={product} />}
      {product.keyFeatures && product.keyFeatures.length > 0 && (
        <BlockShowcase
          title="Key Features & Benefits"
          description={`Discover the unique advantages of VUP's ${product.name} for your applications.`}
          features={product.keyFeatures}
        />
      )}
      {product.applications && product.applications.length > 0 && (
        <ApplicationsAndIndustries product={product} />
      )}
      {product.caseStudies && product.caseStudies.length > 0 && <CaseStudies product={product} />}
      <ProductDetails product={product} />
      {product.faq && product.faq.length > 0 && (
        <FAQ
          product={product}
          title="Frequently Asked Questions"
          description={`Discover answers to common questions about ${product.name}`}
        />
      )}
      {product.relatedProducts && product.relatedProducts.length > 0 && (
        <Showcase
          type="product"
          products={product.relatedProducts as ProductType[]}
          showCta={false}
          title="Related Products"
          description="Discover other products that complement your needs"
        />
      )}
    </main>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '', locale } = await paramsPromise
  const product = await queryProductBySlug({ slug, locale: locale as TypedLocale })

  return generateMeta({ doc: product })
}

// Optimized query function for static generation
const queryProductBySlug = cache(
  async ({ slug, locale }: { slug: string; locale: TypedLocale }) => {
    const payload = await getPayload({ config: configPromise })

    const result = await payload.find({
      collection: 'products',
      draft: false,
      limit: 1,
      overrideAccess: false,
      pagination: false,
      locale,
      where: {
        slug: {
          equals: slug,
        },
      },
    })

    return result.docs?.[0] || null
  },
)
