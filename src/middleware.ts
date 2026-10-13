import createMiddleware from 'next-intl/middleware'
import { NextResponse, type NextRequest } from 'next/server'
import { routing } from './i18n/routing'

const handleI18nRouting = createMiddleware(routing)

const CANONICAL_HOST = 'www.vupinternational.com'

// Vercel keeps these production aliases publicly reachable next to the live domain
const PRODUCTION_ALIAS_HOSTS = [
  'payload-test-three-green.vercel.app',
  'payload-test-mauve.vercel.app',
]

// The /search page was replaced by the header search dialog
const SEARCH_REDIRECTS: Record<string, string> = {
  '/search': '/',
  '/en/search': '/',
  '/sk/search': '/sk',
  '/jp/search': '/jp',
}

// The home page lives at the locale root; /home is a duplicate of it
const HOME_REDIRECTS: Record<string, string> = {
  '/home': '/',
  '/en/home': '/',
  '/sk/home': '/sk',
  '/jp/home': '/jp',
}

// The previous site served everything from / or /index.php with query parameters
// (/?lang=sk&menufix=50&kat=484). /index.php is handled here and not in redirects.js
// so that its query string is dropped in the same single redirect. Only the product
// pages (menufix=50) can be mapped with confidence; the rest go to the home page of
// the matching language.
function getLegacyRedirect({ pathname, searchParams }: NextRequest['nextUrl']): string | undefined {
  if (pathname !== '/' && pathname !== '/index.php') return undefined
  if (!searchParams.has('lang') && !searchParams.has('menufix') && !searchParams.has('kat')) {
    return pathname === '/index.php' ? '/' : undefined
  }

  const lang = searchParams.get('lang')
  const prefix = lang === 'sk' || lang === 'jp' ? `/${lang}` : ''
  const isProducts = searchParams.get('menufix') === '50' || searchParams.has('kat')

  return isProducts ? `${prefix}/products` : prefix || '/'
}

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const host = (request.headers.get('host') || '').split(':')[0].toLowerCase()

  const normalizedPath = pathname.replace(/\/+$/, '') || '/'
  const searchRedirect =
    SEARCH_REDIRECTS[normalizedPath] ??
    HOME_REDIRECTS[normalizedPath] ??
    getLegacyRedirect(request.nextUrl)

  if (PRODUCTION_ALIAS_HOSTS.includes(host)) {
    const url = request.nextUrl.clone()
    url.protocol = 'https'
    url.host = CANONICAL_HOST
    url.port = ''

    if (searchRedirect) {
      url.pathname = searchRedirect
      url.search = ''
    }

    return NextResponse.redirect(url, 301)
  }

  if (searchRedirect) {
    return NextResponse.redirect(new URL(searchRedirect, request.url), 301)
  }

  const response = handleI18nRouting(request)

  // Preview and production aliases must never be indexed
  if (host.endsWith('.vercel.app')) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow')
  }

  return response
}

export const config = {
  matcher: ['/index.php', '/((?!api|trpc|_next|_vercel|admin|.*\\..*).*)'],
}
