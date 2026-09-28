import { withPayload } from '@payloadcms/next/withPayload'
import { withNextVideo } from 'next-video/process'

import redirects from './redirects.js'

import createNextIntlPlugin from 'next-intl/plugin'

const NEXT_PUBLIC_SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL &&
    `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
  'http://localhost:3000'

/**
 * Next.js streams metadata (title/description/canonical) into the body for user
 * agents it does not consider "HTML limited", which means non-rendering crawlers
 * see a page with no <title>. Next's default list covers Bing, LinkedIn, Slack
 * and social previews but omits Googlebot and the AI crawlers, so those get the
 * streamed treatment. Setting this key replaces the default list entirely -
 * hence both lists are repeated here.
 */
const htmlLimitedBots =
  /Mediapartners-Google|Slurp|DuckDuckBot|baiduspider|yandex|sogou|bitlybot|tumblr|vkShare|quora link preview|redditbot|ia_archiver|Bingbot|BingPreview|applebot|facebookexternalhit|facebookcatalog|Twitterbot|LinkedInBot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|Yeti|Googlebot|Google-PageRenderer|AdsBot-Google|Storebot-Google|GPTBot|OAI-SearchBot|ChatGPT-User|ClaudeBot|anthropic-ai|PerplexityBot|CCBot|Google-Extended|Bytespider|Amazonbot|Meta-ExternalAgent/i

/** @type {import('next').NextConfig} */
const nextConfig = {
  staticPageGenerationTimeout: 120,
  htmlLimitedBots,
  images: {
    remotePatterns: [
      ...[NEXT_PUBLIC_SERVER_URL /* 'https://example.com' */].map((item) => {
        const url = new URL(item)

        return {
          hostname: url.hostname,
          protocol: url.protocol.replace(':', ''),
        }
      }),
      {
        hostname: 'images.pexels.com',
        protocol: 'https',
      },
      {
        hostname: 'images.unsplash.com',
        protocol: 'https',
      },
      {
        protocol: 'https',
        hostname: 'elnpbywhaolyzgvwyuqf.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'ludwreuxuzoyeevqvihu.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'pvlaaqfvwdcbuouhmggy.storage.supabase.co',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '54321',
      },
    ],
    // TEMPORARY DISABLED OPTIMIZATION TO PREVENT CACHE ISSUES
    unoptimized: true,
  },
  reactStrictMode: true,
  redirects,
}

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

export default withPayload(withNextIntl(withNextVideo(nextConfig)), {
  devBundleServerPackages: false,
})
