'use client'

import { cn } from '@/utilities/ui'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Service } from '@/payload-types'

type Props = {
  title: string
  description: string
  services: Service['subServices']
}

export function ServicesGrid({ title, description, services }: Props) {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const offset = 150 // Adjust this value to change the scroll offset
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-primary font-bold mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-secondary">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
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
                style={{ backgroundImage: `url(${service.image.url})` }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/20 opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Content Container */}
              <div className="absolute inset-x-0 bottom-0 p-4 flex flex-col gap-2">
                <div>
                  <h3 className="text-md font-secondary font-medium text-white group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-xs text-gray-300 line-clamp-2 opacity-85">
                    {service.description}
                  </p>
                </div>
                <div className="flex items-center mt-2">
                  <Link
                    href={`#${service.link}`}
                    onClick={(e) => handleScroll(e, service.link || '')}
                    className="text-xs font-medium text-blue-300 group-hover:text-blue-200 flex items-center gap-1 group-hover:gap-2 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
