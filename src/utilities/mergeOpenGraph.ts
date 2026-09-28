import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'

// Used whenever a document has no meta.image of its own. Replace with a
// dedicated 1200x630 branded image when one is available.
export const DEFAULT_OG_IMAGE_PATH = '/assets/building.jpg'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description:
    'VUP, a.s. - Slovak manufacturer of specialty chemicals: DMPA, DMBA, TEMPO derivatives, custom synthesis and accredited analytical services.',
  images: [
    {
      url: `${getServerSideURL()}${DEFAULT_OG_IMAGE_PATH}`,
    },
  ],
  siteName: 'VUP, a.s',
  title: 'VUP, a.s',
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
