import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Service, Industry } from '@/payload-types'
import { Media } from '@/components/Media'
import { useTranslations } from 'next-intl'

export function ServiceCard({ service }: { service: Service }) {
  const t = useTranslations('serviceCard')
  const industries = service.industries as Industry[]

  return (
    <Link href={`/services/${service.slug}`} className="h-full">
      <div className="group relative h-full flex flex-col overflow-hidden rounded-lg border border-border bg-background shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md">
        <div className="relative h-60 w-full overflow-hidden sm:h-72">
          <Media
            resource={service.featuredImage}
            fill
            imgClassName="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
        <div className="p-4 md:p-6 flex-1 flex flex-col">
          <h3 className="font-primary mb-3 text-lg md:text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
            {service.title}
          </h3>
          <p className="font-secondary mb-5 text-sm md:text-base text-muted-foreground line-clamp-3">
            {service.description}
          </p>

          {/* Accreditations */}
          {service.accreditations && service.accreditations.length > 0 && (
            <div className="mb-5">
              <h4 className="font-primary mb-2 text-sm md:text-base font-medium text-foreground">
                {t('accreditations')}
              </h4>
              <div className="flex flex-wrap gap-2">
                {service.accreditations.slice(0, 3).map((accred, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
                  >
                    {accred.accreditation}
                  </div>
                ))}
                {service.accreditations.length > 3 && (
                  <div className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
                    {t('moreItems', { count: service.accreditations.length - 3 })}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Related Industries */}
          {industries && industries.length > 0 && (
            <div className="mb-5">
              <h4 className="font-primary mb-2 text-sm md:text-base font-medium text-foreground">
                {t('relatedIndustries')}
              </h4>
              <ul className="space-y-1.5">
                {industries.slice(0, 3).map((industry, index) => (
                  <li key={index}>
                    <Link
                      href={`/industries/${industry.slug}`}
                      className="flex items-center text-sm text-muted-foreground transition-colors hover:text-primary"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ChevronRight className="mr-1 h-3.5 w-3.5 text-primary/70" />
                      {industry.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-auto inline-flex items-center gap-2 text-sm md:text-base font-medium text-primary transition-all duration-150 group-hover:gap-3">
            {t('exploreService', { serviceName: service.title })}
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </Link>
  )
}
