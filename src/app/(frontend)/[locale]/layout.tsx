import type { Metadata } from 'next'
import { cn } from '@/utilities/ui'
import { Footer } from '@/Footer/Component'
import { Header } from '@/Header/Component'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { hasLocale } from 'next-intl'
import { routing } from '@/i18n/routing'
import { getMessages } from 'next-intl/server'
import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'
import { Raleway, Inter } from 'next/font/google'
import { notFound } from 'next/navigation'
import Script from 'next/script'

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
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  // Get messages for the specific locale
  const messages = await getMessages()

  return (
    <html className={cn(raleway.variable, inter.variable)} lang={locale} suppressHydrationWarning>
      <head>
        <Script
          id="ketch-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(){
                window.semaphore=window.semaphore||[];
                window.ketch=function(){window.semaphore.push(arguments)};
                var e=new URLSearchParams(document.location.search);
                var n=document.createElement("script");
                n.type="text/javascript";
                n.src="https://global.ketchcdn.com/web/v3/config/vupas/website_smart_tag/boot.js";
                n.defer=n.async=!0;
                document.getElementsByTagName("head")[0].appendChild(n);
              }();
            `,
          }}
        />

        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S03T3K9L0Q"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S03T3K9L0Q');
          `}
        </Script>
        <Providers locale={locale} messages={messages}>
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
