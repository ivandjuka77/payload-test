import type { ISitemapField } from 'next-sitemap'

const SITE_URL = 'https://www.vupinternational.com'

type Entry = { loc: string; lastmod: string }

/**
 * Adds the language alternates of every URL to its sitemap entry. They mirror the
 * hreflang links in generateMeta (en without prefix, sk, ja served under /jp, and
 * x-default pointing to English), so Google finds each translation from the sitemap
 * as well as from the page.
 */
export const withAlternates = (entries: Entry[]): ISitemapField[] =>
  entries.map((entry) => {
    const path = entry.loc.slice(SITE_URL.length).replace(/^\/(sk|jp)(?=\/|$)/, '')

    return {
      ...entry,
      alternateRefs: [
        { href: `${SITE_URL}${path}`, hreflang: 'en' },
        { href: `${SITE_URL}/sk${path}`, hreflang: 'sk' },
        { href: `${SITE_URL}/jp${path}`, hreflang: 'ja' },
        { href: `${SITE_URL}${path}`, hreflang: 'x-default' },
      ],
    }
  })
