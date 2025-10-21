'use client'

import Link from 'next/link'
import { ArrowRight, Briefcase, Building, Users } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import RichText from '@/components/RichText'
import { CareersBlock } from '@/payload-types'
import ApplyForm from '@/components/career/ApplyForm'
import { useTranslations } from 'next-intl'

export const Careers: React.FC<CareersBlock> = ({ title, description, careers }) => {
  const t = useTranslations('careers')

  return (
    <section className="w-full py-24 bg-white px-4 sm:px-6 lg:px-0" id="career-listings">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-primary">{title}</h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto font-secondary">
            {description}
          </p>
        </div>

        {careers && careers.length > 0 ? (
          <div className="grid gap-y-10 w-full mx-auto">
            {careers.map((position, index) => {
              if (typeof position === 'number') return null

              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2 font-primary">{position.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Briefcase className="h-3.5 w-3.5" />
                          <span>{position.category}</span>
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Building className="h-3.5 w-3.5" />
                          <span>{position.location}</span>
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Users className="h-3.5 w-3.5" />
                          <span>{position.type}</span>
                        </Badge>
                      </div>
                      <p className="text-muted-foreground font-secondary line-clamp-5 md:line-clamp-3 mr-0 md:mr-14">
                        {position.description && (
                          <RichText
                            data={position.description}
                            className="text-sm md:text-base text-foreground/90 "
                            enableGutter={false}
                          />
                        )}
                      </p>
                    </div>
                    <Link
                      href={`/career/${position.slug}`}
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                    >
                      {t('openPositions.applyNow')}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
            <div className="flex-1 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12 border border-primary/20 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 font-primary text-foreground">
                  {t('noPositions.title')}
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-secondary">
                  {t('noPositions.description')}
                </p>
              </div>
            </div>

            <div className="flex-1">
              <ApplyForm />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
