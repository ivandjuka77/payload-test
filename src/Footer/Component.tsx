import { getCachedGlobal } from '@/utilities/getGlobals'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import type { Footer } from '@/payload-types'
import { Mail, Phone, Linkedin, Twitter, Globe, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import NewsletterFooter from './NewsletterFooter'

export async function Footer() {
  const t = await getTranslations('footer')
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.navItems || []

  return (
    <footer className="mt-auto border-t border-border bg-gray-50 dark:bg-card text-gray-900 dark:text-white px-4 sm:px-6 lg:px-0">
      <div className="container py-12">
        {/* Top section with newsletter */}
        <div className="bg-primary/5 rounded-xl p-6 md:p-8 mb-12">
          <NewsletterFooter />
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Logo and company info */}
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/assets/logo-vup.png"
                alt="VUP Chemicals Logo"
                width={150}
                height={50}
                className="h-auto w-28 lg:w-[150px]"
              />
            </Link>

            <div className="space-y-4 text-sm text-gray-600 dark:text-muted-foreground">
              <p className="font-secondary">
                VUP Chemicals, a.s.
                <br />
                Nábrežná 4, 971 01
                <br />
                Prievidza, Slovakia
              </p>

              <div className="space-y-2">
                <Link
                  href="tel:+421461234567"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="font-secondary">+421 46 123 4567</span>
                </Link>

                <Link
                  href="mailto:info@vupchemicals.com"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="font-secondary">info@vupchemicals.com</span>
                </Link>
              </div>

              {/* Social media */}
              <div className="flex gap-3 pt-2">
                <Link
                  href="https://linkedin.com"
                  className="text-gray-500 dark:text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">{t('social.linkedin')}</span>
                </Link>
                <Link
                  href="https://twitter.com"
                  className="text-gray-500 dark:text-muted-foreground hover:text-primary transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">{t('social.twitter')}</span>
                </Link>
                <Link
                  href="https://researchgate.net"
                  className="text-gray-500 dark:text-muted-foreground hover:text-primary transition-colors"
                >
                  <Globe className="h-5 w-5" />
                  <span className="sr-only">{t('social.researchgate')}</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Quick links columns */}
          <div className="col-span-1">
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider font-primary text-gray-900 dark:text-white">
              {t('sections.company')}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 dark:text-muted-foreground hover:text-primary transition-colors font-secondary inline-flex items-center"
                >
                  <ChevronRight className="h-3 w-3 mr-1" />
                  {t('links.aboutUs')}
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-600 dark:text-muted-foreground hover:text-primary transition-colors font-secondary inline-flex items-center"
                >
                  <ChevronRight className="h-3 w-3 mr-1" />
                  {t('links.careers')}
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-gray-600 dark:text-muted-foreground hover:text-primary transition-colors font-secondary inline-flex items-center"
                >
                  <ChevronRight className="h-3 w-3 mr-1" />
                  {t('links.news')}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 dark:text-muted-foreground hover:text-primary transition-colors font-secondary inline-flex items-center"
                >
                  <ChevronRight className="h-3 w-3 mr-1" />
                  {t('links.contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider font-primary text-gray-900 dark:text-white">
              {t('sections.products')}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/products/chemicals"
                  className="text-gray-600 dark:text-muted-foreground hover:text-primary transition-colors font-secondary inline-flex items-center"
                >
                  <ChevronRight className="h-3 w-3 mr-1" />
                  {t('links.chemicals')}
                </Link>
              </li>
              <li>
                <Link
                  href="/products/polymers"
                  className="text-gray-600 dark:text-muted-foreground hover:text-primary transition-colors font-secondary inline-flex items-center"
                >
                  <ChevronRight className="h-3 w-3 mr-1" />
                  {t('links.polymers')}
                </Link>
              </li>
              <li>
                <Link
                  href="/products/catalysts"
                  className="text-gray-600 dark:text-muted-foreground hover:text-primary transition-colors font-secondary inline-flex items-center"
                >
                  <ChevronRight className="h-3 w-3 mr-1" />
                  {t('links.catalysts')}
                </Link>
              </li>
              <li>
                <Link
                  href="/products/custom"
                  className="text-gray-600 dark:text-muted-foreground hover:text-primary transition-colors font-secondary inline-flex items-center"
                >
                  <ChevronRight className="h-3 w-3 mr-1" />
                  {t('links.customSolutions')}
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider font-primary text-gray-900 dark:text-white">
              {t('sections.support')}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/support"
                  className="text-gray-600 dark:text-muted-foreground hover:text-primary transition-colors font-secondary inline-flex items-center"
                >
                  <ChevronRight className="h-3 w-3 mr-1" />
                  {t('links.helpCenter')}
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="text-gray-600 dark:text-muted-foreground hover:text-primary transition-colors font-secondary inline-flex items-center"
                >
                  <ChevronRight className="h-3 w-3 mr-1" />
                  {t('links.faqs')}
                </Link>
              </li>
              <li>
                <Link
                  href="/documentation"
                  className="text-gray-600 dark:text-muted-foreground hover:text-primary transition-colors font-secondary inline-flex items-center"
                >
                  <ChevronRight className="h-3 w-3 mr-1" />
                  {t('links.documentation')}
                </Link>
              </li>
              <li>
                <Link
                  href="/safety"
                  className="text-gray-600 dark:text-muted-foreground hover:text-primary transition-colors font-secondary inline-flex items-center"
                >
                  <ChevronRight className="h-3 w-3 mr-1" />
                  {t('links.safetyData')}
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider font-primary text-gray-900 dark:text-white">
              {t('sections.legal')}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-600 dark:text-muted-foreground hover:text-primary transition-colors font-secondary inline-flex items-center"
                >
                  <ChevronRight className="h-3 w-3 mr-1" />
                  {t('links.privacyPolicy')}
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-gray-600 dark:text-muted-foreground hover:text-primary transition-colors font-secondary inline-flex items-center"
                >
                  <ChevronRight className="h-3 w-3 mr-1" />
                  {t('links.cookiePolicy')}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-600 dark:text-muted-foreground hover:text-primary transition-colors font-secondary inline-flex items-center"
                >
                  <ChevronRight className="h-3 w-3 mr-1" />
                  {t('links.termsConditions')}
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap"
                  className="text-gray-600 dark:text-muted-foreground hover:text-primary transition-colors font-secondary inline-flex items-center"
                >
                  <ChevronRight className="h-3 w-3 mr-1" />
                  {t('links.sitemap')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-6 border-t border-muted text-center text-sm text-gray-500 dark:text-muted-foreground font-secondary">
          {t('copyright', { year: new Date().getFullYear() })}
        </div>
      </div>
    </footer>
  )
}
