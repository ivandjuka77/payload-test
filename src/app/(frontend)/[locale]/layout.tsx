import type { Metadata } from 'next'
import { cn } from '@/utilities/ui'
import { AdminBar } from '@/components/AdminBar'
import { Footer } from '@/Footer/Component'
import { Header } from '@/Header/Component'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'
import { hasLocale } from 'next-intl'
import { routing } from '@/i18n/routing'
import { getMessages } from 'next-intl/server'

import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'

import { Raleway, Inter } from 'next/font/google'
import { notFound } from 'next/navigation'

const raleway = Raleway({
  variable: '--font-primary',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

const inter = Inter({
  variable: '--font-secondary',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { isEnabled } = await draftMode()
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  // Get messages for the specific locale
  const messages = await getMessages()

  return (
    <html className={cn(raleway.variable, inter.variable)} lang={locale} suppressHydrationWarning>
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body>
        <Providers locale={locale} messages={messages}>
          <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          />

          <Header locale={locale} />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
}
