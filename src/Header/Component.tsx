import Navbar from './Component.client'
import configPromise from '@/payload.config'
import { getPayload, TypedLocale } from 'payload'
import { unstable_cache } from 'next/cache'

const getCachedHeaderNav = (locale: string) =>
  unstable_cache(
    async () => {
      const payload = await getPayload({ config: configPromise })

      const [industriesResult, productCategoriesResult, servicesResult] = await Promise.all([
        payload.find({
          collection: 'industries',
          draft: false,
          limit: 6,
          pagination: false,
          overrideAccess: false,
          locale: locale as TypedLocale,
        }),
        payload.find({
          collection: 'productCategories',
          sort: '_order',
          draft: false,
          limit: 6,
          pagination: false,
          overrideAccess: false,
          locale: locale as TypedLocale,
        }),
        payload.find({
          collection: 'services',
          draft: false,
          limit: 5,
          pagination: false,
          overrideAccess: false,
          locale: locale as TypedLocale,
        }),
      ])

      return {
        industries: industriesResult.docs,
        productCategories: productCategoriesResult.docs,
        services: servicesResult.docs,
      }
    },
    ['header-nav', locale],
    { revalidate: 3600, tags: ['header-nav', `header-nav-${locale}`] },
  )

export async function Header({ locale }: { locale: TypedLocale }) {
  const { industries, productCategories, services } = await getCachedHeaderNav(locale)()

  return (
    <Navbar industries={industries} productCategories={productCategories} services={services} />
  )
}
