'use client'

import type React from 'react'
import Link from 'next/link'
import { ArrowRight, Beaker, FlaskConical as Flask, Factory, Microscope, Leaf } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CardDescription, CardTitle } from '@/components/ui/card'
import { Media, QuickAccessBlock } from '@/payload-types'
import { Media as MediaComponent } from '@/components/Media'

// Explicitly extract the array type and then the element type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type CardsArrayType = Extract<QuickAccessBlock['cards'], Array<any>>
type CardType = CardsArrayType[number]

type QuickAccessCardProps = {
  title: string
  description: string
  backgroundImage: Media | number
  index: number
  links?: CardType['links']
}

function QuickAccessCard({
  title,
  description,
  backgroundImage,
  index,
  links,
}: QuickAccessCardProps): React.ReactElement {
  const gradientFrom = [
    'rgb(37, 99, 235)', // blue-600
    '#FF5733', // custom orange
    'rgb(168, 85, 247)', // purple-500
    'rgb(34, 197, 94)', // green-500
  ]

  const gradientTo = [
    'rgba(37, 99, 235, 0)', // blue-600 with opacity
    'rgba(255, 87, 51, 0)', // #FF5733 with opacity
    'rgba(168, 85, 247, 0)', // purple-500 with opacity
    'rgba(34, 197, 94, 0)', // green-500 with opacity
  ]

  const icons = [
    <Flask key="flask" className="w-8 h-8 text-white" />,
    <Factory key="factory" className="w-8 h-8 text-white" />,
    <Microscope key="microscope" className="w-8 h-8 text-white" />,
    <Leaf key="leaf" className="w-8 h-8 text-white" />,
  ]

  const iconBg = ['bg-blue-600', 'bg-[#FF5733]', 'bg-purple-500', 'bg-green-500']

  return (
    <div className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl">
      <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
        <MediaComponent resource={backgroundImage} alt={title} fill imgClassName="object-cover" />
        <div
          className={`absolute inset-0 transition-all duration-500 group-hover:opacity-95`}
          style={{
            background: `linear-gradient(to top, ${gradientFrom[index]} 30%, ${gradientTo[index]} 100%)`,
            opacity: 0.85,
          }}
        ></div>
        <div
          className={`absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100`}
          style={{
            backgroundColor: gradientFrom[index],
          }}
        ></div>
      </div>

      <div className="relative z-10 p-6 md:p-8 h-full flex flex-col">
        <div
          className={`w-14 h-14 rounded-full ${iconBg[index]} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 shadow-lg group-hover:shadow-xl`}
        >
          {icons[index]}
        </div>
        {/* Animated line */}
        <div className="w-12 h-1 bg-white mb-4 transition-all duration-300 group-hover:w-20 group-hover:bg-white"></div>
        {/* Title and description */}
        <CardTitle className="text-2xl font-primary text-white mb-3">{title}</CardTitle>
        <CardDescription className="font-secondary text-white text-base mb-6">
          {description}
        </CardDescription>
        <div className="mt-auto">
          {(links || []).map(({ link }: NonNullable<CardType['links']>[number], i: number) => (
            <Button
              key={i}
              asChild
              variant="ghost"
              className="p-0 h-auto font-medium text-white hover:bg-transparent group/btn transition-transform duration-300 group-hover:translate-y-0"
            >
              <Link
                href={link.url || ''}
                className="flex items-center gap-2 hover:text-white hover:underline"
              >
                {link.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

export const QuickAccessSection: React.FC<QuickAccessBlock> = ({ title, description, cards }) => {
  if (!title || !description || !cards) return null

  return (
    <div className="relative w-full bg-primary/5">
      <section className="relative py-20 overflow-hidden">
        <div className="container relative z-10">
          <div className="flex flex-col items-center text-center mb-16 md:mb-24">
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Beaker className="w-4 h-4 mr-2" />
              <span>Chemical Solutions</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-primary mb-4 relative">
              {title}
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary"></span>
            </h2>

            <p className="mt-6 text-lg md:text-xl max-w-3xl font-secondary text-muted-foreground">
              {description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {cards.map((card, index) => (
              <QuickAccessCard key={index} {...card} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
