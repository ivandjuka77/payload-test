'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ChevronRight, FileText } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Media } from '@/components/Media'
import { Service } from '@/payload-types'

type Props = {
  service: Service
}

export function ServiceHero({ service }: Props) {
  return (
    <section className="relative w-full min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Media resource={service.featuredImage} fill imgClassName="object-cover" />
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6 mx-auto py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-primary mb-6">
            {service.title}
          </h1>
          <p className="text-xl text-white/90 font-secondary mb-8 max-w-2xl">
            {service.description}
          </p>

          {service.accreditation && service.accreditation.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {service.accreditation.map((accreditation: any, index: any) => (
                <Badge key={index} className="bg-white/20 hover:bg-white/30 text-white border-0">
                  {accreditation.name}: {accreditation.code}
                </Badge>
              ))}
            </div>
          )}

          {/* {service.team[0] && (
            <div className="inline-block bg-primary-dark/60 px-4 py-2 rounded-md mb-8">
              <p className="text-white/90 text-sm">Head of Department</p>
              <p className="text-white font-semibold">{service.team[0]}</p>
            </div>
          )} */}

          {service.features && service.features.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {service.features.map((highlight: any, index: any) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-3 rounded-lg text-center"
                >
                  <p className="text-white font-semibold text-lg">{highlight.value}</p>
                  <p className="text-white/70 text-xs">{highlight.label}</p>
                </div>
              ))}
            </div>
          )}

          {/* {pdfLink && (
            <Button asChild className="bg-white hover:bg-white/90 text-primary border-0">
              <Link href={pdfLink} className="flex items-center">
                <FileText className="mr-2 h-4 w-4" />
                Download Certificate
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )} */}
        </div>
      </div>
    </section>
  )
}
