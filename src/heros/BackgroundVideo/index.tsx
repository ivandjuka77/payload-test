'use client'

import Video from 'next-video'
import { Button } from '@/components/ui/button'
import { Page } from '@/payload-types'
import heroVideo from '/videos/vup-about.mp4'

export const BackgroundVideo: React.FC<Page['hero']> = (props) => {
  const { title, description, cta } = props
  const videoSrc = heroVideo
  const mobileImageSrc =
    'https://www.fortischem.sk/wp-content/uploads/2023/06/uvodni-placeholder2.jpg'

  return (
    <section className="relative w-full overflow-hidden min-h-[70vh] pt-20 md:pt-28 flex flex-col">
      <div className="absolute inset-0 z-0">
        {/* --- Desktop Video --- */}
        {/* Hidden by default (mobile), shown on 'md' screens and up */}
        <Video
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          className="w-full h-full object-cover !hidden lg:!grid "
        />

        {/* --- Mobile Image --- */}
        {/* Shown by default (mobile), hidden on 'md' screens and up */}
        <div
          className="w-full h-full bg-cover bg-center lg:hidden"
          style={{ backgroundImage: `url(${mobileImageSrc})` }}
        ></div>

        {/* --- Overlays (apply to both) --- */}
        <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent"></div>

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

      {/* --- Main Hero Content --- */}
      <div className="relative z-10 flex-grow flex items-center px-4 md:px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold text-white font-primary mb-4">
              {title}
            </h1>
            <p className="text-lg text-white/90 font-secondary mb-6 max-w-3xl">{description}</p>

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
