// import { HeaderClient } from './Component.client'
import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

import type { Header } from '@/payload-types'
import Navbar from './Component.client'

export async function Header() {
  // const headerData: Header = await getCachedGlobal('header', 1)()

  // return <HeaderClient data={headerData} />
  return <Navbar />
}
