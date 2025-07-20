'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import { Media as MediaType } from '@/payload-types'
import { Media } from '@/components/Media'

export default function IndustryHero({
  image,
  title,
  summary,
  challenges,
  translations,
}: {
  image: MediaType
  title: string
  summary: string
  challenges: {
    title: string
    challenge: string
    challengeLink: string
    image: number | MediaType
  }[]
  translations: {
    exploreSolutions: string
    keyApplications: string
    learnMore: string
  }
}) {
  return (
    <section className="relative w-full min-h-[650px] flex flex-col overflow-hidden pb-10 px-4 sm:px-6 lg:px-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Media resource={image} imgClassName="object-cover h-full w-full" />
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60"></div>

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
      <div className="relative z-10 flex-grow pt-20">
        <div className="container mx-auto pt-16 pb-0">
          <div className="max-w-2xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-primary mb-4">
              {title}
            </h1>
            <p className="text-base sm:text-lg text-white/90 font-secondary mb-6">{summary}</p>

            <div className="flex flex-wrap gap-4 mb-6">
              <Button
                variant="outline"
                className="px-4 sm:px-6 bg-primary text-white hover:bg-primary/90 border-none text-sm sm:text-base"
              >
                <Link
                  href={`#${challenges[0]?.challengeLink}`}
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.getElementById(challenges[0]?.challengeLink)
                    if (element) {
                      const offsetTop =
                        element.getBoundingClientRect().top + window.pageYOffset - 100 // 100px offset
                      window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth',
                      })
                    }
                  }}
                  className="flex items-center"
                >
                  {translations.exploreSolutions} <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {challenges && challenges.length > 0 && (
        <div className="relative z-10 w-full backdrop-blur-sm pb-4">
          <div className="container mx-auto">
            <div className="flex flex-col items-center mb-6">
              <h2 className="text-lg sm:text-xl font-semibold font-primary text-white mb-2">
                {translations.keyApplications}
              </h2>
              <div className="h-1 w-16 bg-primary rounded-full"></div>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {challenges.slice(0, 4).map((challenge, index) => (
                <div
                  key={index}
                  className="bg-white/10 hover:bg-white/15 rounded-lg p-3 flex flex-col h-full transition-colors backdrop-blur-sm w-full md:w-[calc(50%-0.375rem)] lg:w-[calc(25%-0.5625rem)]"
                >
                  <div className="relative h-32 w-full overflow-hidden rounded">
                    <Media
                      resource={challenge.image}
                      alt={challenge.title}
                      fill
                      imgClassName="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 hover:bg-black/20 transition-colors"></div>
                  </div>
                  <div className="flex flex-col flex-grow">
                    <h3 className="font-primary font-semibold text-sm sm:text-base text-white mt-2 h-[3em] line-clamp-2">
                      {challenge.title}
                    </h3>
                    <p className="font-secondary text-xs text-white/70 h-[2.4em] line-clamp-2 mt-2">
                      {challenge.challenge}
                    </p>
                    <div className="mt-auto pt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="px-0 h-6 text-primary-light text-white hover:text-primary bg-transparent hover:bg-transparent border-none text-xs sm:text-sm"
                        asChild
                      >
                        <Link
                          href={`#${challenge.challengeLink}`}
                          onClick={(e) => {
                            e.preventDefault()
                            const element = document.getElementById(challenge.challengeLink)
                            if (element) {
                              const offsetTop =
                                element.getBoundingClientRect().top + window.pageYOffset - 100
                              window.scrollTo({
                                top: offsetTop,
                                behavior: 'smooth',
                              })
                            }
                          }}
                        >
                          {translations.learnMore}
                          <ChevronRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
