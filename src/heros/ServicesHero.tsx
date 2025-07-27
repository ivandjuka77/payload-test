'use client'

import { Badge } from '@/components/ui/badge'
import { Media } from '@/components/Media'
import { Service } from '@/payload-types'
import { cn } from '@/utilities/ui'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

type Props = {
  service: Service
  translations?: {
    accreditations: string
    exploreServices: string
    learnMore: string
  }
}

export function ServiceHero({ service, translations }: Props) {
  const accreditations = service.accreditations as Service['accreditations']
  const subServices = service.subServices || []

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const offset = 150
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="relative w-full bg-background pt-10 xl:pt-20">
      {/* Hero Section */}
      <div className="container mx-auto pt-20 pb-10 md:py-20 px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground font-primary mb-6">
                {service.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-secondary mb-8">
                {service.description}
              </p>
            </div>

            {accreditations && accreditations.length > 0 && (
              <div className="space-y-3 hidden md:block">
                <h3 className="text-lg font-semibold text-foreground">
                  {translations?.accreditations || 'Accreditations:'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {accreditations.map((accreditation, index) => (
                    <Badge key={index} variant="secondary" className="px-4 py-1 text-sm">
                      {accreditation.accreditation}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="flex justify-start">
              <Link
                href={`#${subServices[0].link}`}
                onClick={(e) => handleScroll(e, subServices[0].link || '')}
              >
                <Button className="rounded-md text-base p-6 bg-primary text-white hover:bg-primary/90 flex flex-row items-center gap-x-2">
                  {translations?.exploreServices || 'Explore Services'}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="aspect-[3/2] relative rounded-lg overflow-hidden shadow-2xl">
              <Media resource={service.featuredImage} fill imgClassName="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid Section - Right below hero, above the fold */}
      {subServices.length > 0 && (
        <div className="container mx-auto pb-20 px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subServices.map((subService, index) => (
              <div
                key={index}
                className={cn(
                  'group relative overflow-hidden rounded-lg border border-gray-100',
                  'aspect-[16/8]',
                )}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-[1.01] transition-transform duration-300"
                  //@ts-expect-error This is working correctly
                  style={{ backgroundImage: `url(${subService.image.url})` }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/20 opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Content Container */}
                <div className="absolute inset-x-0 bottom-0 p-4 flex flex-col gap-2">
                  <div>
                    <h3 className="text-md font-secondary font-medium text-white group-hover:text-blue-300 transition-colors">
                      {subService.title}
                    </h3>
                    <p className="mt-1 text-xs text-gray-300 line-clamp-2 opacity-85">
                      {subService.description}
                    </p>
                  </div>
                  <div className="flex items-center mt-2">
                    <Link
                      href={`#${subService.link}`}
                      onClick={(e) => handleScroll(e, subService.link || '')}
                      className="text-xs font-medium text-blue-300 group-hover:text-blue-200 flex items-center gap-1 group-hover:gap-2 transition-all duration-300"
                    >
                      {translations?.learnMore || 'Learn More'}
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
