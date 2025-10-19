import { ServiceCard } from '@/components/ServiceCard'
import { Service } from '@/payload-types'
import { useTranslations } from 'next-intl'

type ServiceShowcaseComponentProps = {
  services: Service[]
}

export function ServiceShowcaseComponent({ services }: ServiceShowcaseComponentProps) {
  const t = useTranslations('services')

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
        {services.map((service, index) => (
          <ServiceCard key={index} service={service as Service} />
        ))}
      </div>
    </section>
  )
}
