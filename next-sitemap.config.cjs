const CANONICAL_SITE_URL = 'https://www.vupinternational.com'

const toAbsoluteUrl = (url) => {
  if (!url) return ''

  const withProtocol = /^https?:\/\//i.test(url) ? url : `https://${url}`

  return withProtocol.replace(/\/+$/, '')
}

// The live domain is the only URL that should ever end up in robots.txt/sitemaps
const SITE_URL = toAbsoluteUrl(process.env.NEXT_PUBLIC_SERVER_URL) || CANONICAL_SITE_URL

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  exclude: ['/posts-sitemap.xml', '/pages-sitemap.xml', '/*', '/news/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: '/admin/*',
      },
    ],
    additionalSitemaps: [`${SITE_URL}/pages-sitemap.xml`, `${SITE_URL}/posts-sitemap.xml`],
    // The Host directive is only read by Yandex and points at the wrong host if the env var is missing
    transformRobotsTxt: async (_config, robotsTxt) =>
      robotsTxt.replace(/# Host\r?\nHost:[^\r\n]*\r?\n\r?\n?/, ''),
  },
}
