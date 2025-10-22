import { Handshake } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function SustainabilityPartner() {
  const t = useTranslations('sustainabilityPartner')

  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-0">
      <div className="container">
        <div className="rounded-2xl bg-gradient-to-br from-[hsl(149.71,100%,40%)] to-[hsl(149.71,100%,40%)]/80 p-6 text-center text-white sm:p-10 md:p-12">
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 inline-flex items-center rounded-full bg-white/20 px-4 py-1 text-sm font-medium text-white md:mb-6">
              <Handshake className="mr-2 h-4 w-4" />
              <span>{t('badge')}</span>
            </div>

            <h2 className="font-primary mb-4 text-3xl font-bold sm:text-4xl md:mb-6">
              {t('title')}
            </h2>

            <p className="mb-8 font-secondary text-lg sm:text-xl">{t('description')}</p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-white text-[hsl(149.71,100%,40%)] hover:bg-white/90"
              >
                <Link href="/contact" className="inline-flex items-center gap-2">
                  {t('contactUs')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
