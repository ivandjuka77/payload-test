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

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const host = (request.headers.get('host') || '').split(':')[0].toLowerCase()

  const searchRedirect = SEARCH_REDIRECTS[pathname.replace(/\/+$/, '') || '/']

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
  matcher: '/((?!api|trpc|_next|_vercel|admin|.*\\..*).*)',
}
