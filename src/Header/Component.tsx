// import { HeaderClient } from './Component.client'
// import { getCachedGlobal } from '@/utilities/getGlobals'

import type { Header } from '@/payload-types'
import Navbar from './Component.client'
import { queryProductCategories } from '@/app/(frontend)/[locale]/products/page'
import { queryServices } from '@/app/(frontend)/[locale]/services/[slug]/page'
import { queryIndustries } from '@/utilities/queries'

export async function Header() {
  //? Not sure what is this, check if it's needed
  // const headerData: Header = await getCachedGlobal('header', 1)()
  // return <HeaderClient data={headerData} />

  const industries = await queryIndustries({ limit: 6 })
  const productCategories = await queryProductCategories({ limit: 6 })
  const services = await queryServices({ limit: 5 })

  return (
    <Navbar industries={industries} productCategories={productCategories} services={services} />
  )
}
