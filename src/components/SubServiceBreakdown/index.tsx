import { Check } from 'lucide-react'
import { cn } from '@/utilities/ui'
import { Service } from '@/payload-types'
import { Media } from '@/components/Media'

type Props = {
  title: string
  description: string
  services: Service['subServices']
  className?: string
}

export function SubServiceBreakdown({ title, description, services, className }: Props) {
  return (
    <section className={cn('py-24 bg-white', className)}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-primary">
            {title}
          </h2>
          <p className="mt-4 text-gray-500 font-secondary max-w-[85%] md:max-w-[65%] lg:max-w-[55%]">
            {description}
          </p>
        </div>
        <div className="space-y-32">
          {services &&
            services.map((service, index) => (
              <div key={index} id={service.link || ''} className="relative">
                <div className="flex flex-col lg:flex-row gap-12 mb-12">
                  <div className="flex-1 space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-4xl font-semibold font-primary">{service.title}</h3>
                      <p className="text-lg text-gray-600 font-secondary">{service.description}</p>
                    </div>
                    {service.displayItems && service.displayItems.length > 0 && (
                      <div className="flex flex-wrap gap-3">
                        {service.displayItems.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary font-secondary text-sm"
                          >
                            <Check className="h-4 w-4 mr-2 flex-shrink-0" />
                            <span>{item.item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="lg:w-[40%] relative min-h-[300px]">
                    <Media resource={service.image} fill imgClassName="object-cover rounded-lg" />
                  </div>
                </div>

                <div className="space-y-12">
                  <div className="grid md:grid-cols-2 gap-8">
                    {service.features &&
                      service.features.map((item, itemIndex) => (
                        <div key={itemIndex} className="bg-gray-50/50 p-6 rounded-lg">
                          <h4 className="text-xl font-semibold mb-3 font-primary text-primary">
                            {item.feature}
                          </h4>
                          <p className="text-gray-600 font-secondary">{item.description}</p>
                        </div>
                      ))}
                  </div>
                </div>

                {index !== services.length - 1 && (
                  <div className="absolute bottom-[-4rem] left-0 w-full h-px bg-gray-200" />
                )}
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
