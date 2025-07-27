'use client'

import { Button } from '@/components/ui/button'
import { Page } from '@/payload-types'
import { Media } from '@/components/Media'

export const BackgroundImageCompact: React.FC<Page['hero']> = (props) => {
  const { media, title, description, cta } = props

  return (
    <section className="relative w-full min-h-[550px] pt-20 md:pt-28 flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Media resource={media} fill imgClassName="object-cover" priority />
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

        {/* Animated overlay elements for visual activity */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute top-1/3 right-1/3 w-48 h-48 bg-white rounded-full blur-3xl opacity-20 animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
          <div
            className="absolute bottom-1/2 right-1/4 w-24 h-24 bg-primary-light rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '2s' }}
          ></div>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 flex-grow flex items-center px-4 md:px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-primary mb-4">
              {title}
            </h1>
            <p className="text-lg text-white/90 font-secondary mb-6 max-w-2xl">{description}</p>

            <div className="flex flex-wrap gap-4 mb-6">
              {(cta?.links || []).map(({ link }, i) => {
                return (
                  <Button
                    key={i}
                    variant="outline"
                    className="px-6 bg-primary text-white hover:bg-primary/90 border-none"
                  >
                    {link.label}
                  </Button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
