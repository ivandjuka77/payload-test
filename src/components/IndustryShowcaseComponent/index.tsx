'use client'

import { IndustryCard } from '@/components/IndustryCard'
import { Industry } from '@/payload-types'
import { useTranslations } from 'next-intl'

type IndustryShowcaseComponentProps = {
  industries: Industry[]
}

export function IndustryShowcaseComponent({ industries }: IndustryShowcaseComponentProps) {
  const t = useTranslations('industries')

  return (
    <section className="container py-16 md:py-20 px-4 sm:px-6 lg:px-0">
      <div className="text-center mb-12">
        <h2 className="font-primary text-2xl md:text-3xl font-bold text-foreground mb-4">
          {t('showcase.title')}
        </h2>
        <p className="font-secondary text-muted-foreground max-w-3xl mx-auto text-sm md:text-base">
          {t('showcase.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {industries.map((industry, index) => (
          <IndustryCard key={index} industry={industry as Industry} />
        ))}
      </div>
    </section>
  )
}
