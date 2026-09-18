import Navbar from './Component.client'
import configPromise from '@/payload.config'
import { getPayload, TypedLocale } from 'payload'
import { unstable_cache } from 'next/cache'

const getHeaderNav = async (locale: string) => {
  const payload = await getPayload({ config: configPromise })

  const [industriesResult, productCategoriesResult, servicesResult] = await Promise.all([
    payload.find({
      collection: 'industries',
      draft: false,
      limit: 6,
      pagination: false,
      overrideAccess: false,
      locale: locale as TypedLocale,
      depth: 1,
    }),
    payload.find({
      collection: 'productCategories',
      sort: '_order',
      draft: false,
      limit: 6,
      pagination: false,
      overrideAccess: false,
      locale: locale as TypedLocale,
      depth: 1,
    }),
    payload.find({
      collection: 'services',
      draft: false,
      limit: 5,
      pagination: false,
      overrideAccess: false,
      locale: locale as TypedLocale,
      depth: 1,
    }),
  ])

  return {
    industries: industriesResult.docs,
    productCategories: productCategoriesResult.docs,
    services: servicesResult.docs,
  }
}

// depth defaults to 2, which makes this entry several MB and Next refuses to cache
// anything over 2MB, failing every render that is not already prerendered
const getCachedHeaderNav = (locale: string) =>
  unstable_cache(() => getHeaderNav(locale), ['header-nav', locale], {
    revalidate: 3600,
    tags: ['header-nav', `header-nav-${locale}`],
  })

export async function Header({ locale }: { locale: TypedLocale }) {
  const { industries, productCategories, services } = await getCachedHeaderNav(locale)().catch(() =>
    getHeaderNav(locale),
  )

  return (
    <Navbar industries={industries} productCategories={productCategories} services={services} />
  )
}
