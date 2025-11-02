import { getCachedGlobal } from '@/utilities/getGlobals'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import type { Footer } from '@/payload-types'
import { Mail, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import NewsletterFooter from './NewsletterFooter'

export async function Footer() {
  const t = await getTranslations('footer')
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.linkGroups || []

  const getLinkUrl = (
    link: NonNullable<NonNullable<Footer['linkGroups']>[0]['navItems']>[0]['link'],
  ) => {
    if (link.type === 'custom' && link.url) {
      return link.url
    }
    if (
      link.type === 'reference' &&
      link.reference?.value &&
      typeof link.reference.value === 'object' &&
      'slug' in link.reference.value
    ) {
      return `/${link.reference.value.slug}`
    }
    if (link.url) {
      return link.url
    }
    return '#'
  }

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
                alt="VUP A.S. Logo"
                width={150}
                height={50}
                className="h-auto w-28 lg:w-[150px]"
              />
            </Link>

            <div className="space-y-4 text-sm text-gray-600 dark:text-muted-foreground">
              {footerData.companyInfo?.address && (
                <p className="font-secondary whitespace-pre-line">
                  {footerData.companyInfo.address}
                </p>
              )}

              <div className="space-y-2">
                {footerData.companyInfo?.email && (
                  <Link
                    href={`mailto:${footerData.companyInfo.email}`}
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="font-secondary">{footerData.companyInfo.email}</span>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Dynamic navigation columns from linkGroups */}
          {navItems.map((linkGroup) => (
            <div key={linkGroup.id} className="col-span-1">
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider font-primary text-primary">
                {linkGroup.groupTitle}
              </h4>
              <ul className="space-y-2 text-sm">
                {linkGroup.navItems?.map((navItem) => (
                  <li key={navItem.id}>
                    <Link
                      href={getLinkUrl(navItem.link)}
                      className="text-gray-600 dark:text-muted-foreground hover:text-primary transition-colors font-secondary inline-flex items-center"
                      {...(navItem.link?.newTab && {
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      })}
                    >
                      <ChevronRight className="h-3 w-3 mr-1" />
                      {navItem.link?.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-6 border-t border-muted text-center text-sm text-gray-500 dark:text-muted-foreground font-secondary">
          {t('copyright', { year: new Date().getFullYear() })}
        </div>
      </div>
    </footer>
  )
}
