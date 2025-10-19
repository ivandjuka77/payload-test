import type { Metadata } from 'next'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@/payload.config'
import { getPayload, TypedLocale } from 'payload'
import { draftMode } from 'next/headers'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { RenderHero } from '@/heros/RenderHero'
import { generateMeta } from '@/utilities/generateMeta'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { ServiceShowcaseComponent } from '@/components/ServiceShowcaseComponent'
import { queryServices as queryServicesUtil } from '@/utilities/queries'

export async function generateStaticParams() {
  const locales = ['', 'sk', 'jp'] // Your supported locales

  // For the main services page, we only need to generate one path per locale
  const params = locales.map((locale) => ({
    locale,
  }))

  console.log(`[generateStaticParams] Generated paths for services index page`)
  console.log(`Locales: ${locales.length}`)

  return params
}

type Params = Promise<{ locale: TypedLocale }>

export default async function ServicesPage({ params }: { params: Params }) {
  const { locale } = await params
  const { isEnabled: draft } = await draftMode()
  const url = '/services'

  const page = await queryServicesPage({ locale })
  const services = await queryServicesUtil({ limit: 100, locale })

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
      <ServiceShowcaseComponent services={services} />
    </article>
  )
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params
  const page = await queryServicesPage({ locale })
  return generateMeta({ doc: page })
}

async function queryServicesPage({ locale }: { locale: TypedLocale }) {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'pages',
    locale,
    draft,
    limit: 1,
    pagination: false,
    overrideAccess: draft,
    where: {
      slug: {
        equals: 'services',
      },
    },
  })

  return result.docs?.[0] || null
}
