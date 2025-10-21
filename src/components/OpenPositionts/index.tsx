'use client'

import { Badge } from '../ui/badge'
import { Briefcase, Building, Users } from 'lucide-react'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import ApplyForm from '../career/ApplyForm'
import { useTranslations } from 'next-intl'

export default function OpenPositions({ positions }: { positions: any[] }) {
  const t = useTranslations('careers')

  return (
    <section className="py-24 bg-white" id="open-positions">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            {t('badge')}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-primary">
            {t('openPositions.title')}123
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-secondary">
            {t('openPositions.description')}123
          </p>
        </div>

        {positions && positions.length > 0 ? (
          <div className="grid gap-6 max-w-4xl mx-auto">
            {positions.map((position: any, index: number) => (
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
                        <span>{position.department}</span>
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
                    <p className="text-muted-foreground font-secondary">{position.description}</p>
                  </div>
                  <Link href={`/careers/${position.slug}`}>
                    <Button className="whitespace-nowrap">
                      {t('openPositions.applyNow')}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12 mb-8 border border-primary/20">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 font-primary text-foreground">
                  {t('noPositions.title')}
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-secondary">
                  {t('noPositions.description')}
                </p>
              </div>
            </div>

            <div className="max-w-2xl mx-auto">
              <ApplyForm />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
