'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Atom, ChevronRight } from 'lucide-react'
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Page } from '@/payload-types'
import { Media } from '@/components/Media'
import Link from 'next/link'
import { CMSLink } from '@/components/Link'
import { Badge } from '@/components/ui/badge'

function getBadge(badge: string) {
  switch (badge) {
    case 'product':
      return { text: 'Product', color: 'bg-blue-600' }
    case 'industry':
      return { text: 'Industry', color: 'bg-[#FF5733]' }
    case 'research':
      return { text: 'Research', color: 'bg-purple-500' }
    case 'sustainability':
      return { text: 'Sustainability', color: 'bg-green-500' }
    case 'none':
    default:
      return { text: '', color: 'bg-gray-500' }
  }
}

//? Responsive
export const CarouselHero: React.FC<Page['hero']> = (props) => {
  const [current, setCurrent] = useState(0)
  const [api, setApi] = useState<CarouselApi>()
  const [progress, setProgress] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const slideIntervalMs = 5000 // 5 seconds
  const progressSteps = 50 // Number of steps for smooth progress animation

  // Function to clear all intervals
  const clearAllIntervals = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current)
      progressIntervalRef.current = null
    }
  }, [])

  // Function to start intervals (only when not paused and API is ready)
  const startIntervals = useCallback(() => {
    // Clear any existing intervals first
    clearAllIntervals()

    // Reset progress
    setProgress(0)

    // Only set up intervals if not paused and API is available
    if (!isPaused && api && isInitialized) {
      // Setup new slide interval
      intervalRef.current = setInterval(() => {
        if (api && api.canScrollNext()) {
          api.scrollNext()
        }
      }, slideIntervalMs)

      // Setup new progress animation interval
      progressIntervalRef.current = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + 100 / progressSteps
          return newProgress > 100 ? 100 : newProgress
        })
      }, slideIntervalMs / progressSteps)
    }
  }, [api, isPaused, isInitialized, clearAllIntervals])

  // Function to pause the carousel
  const togglePause = useCallback(() => {
    setIsPaused((prev) => {
      const newPausedState = !prev

      if (newPausedState) {
        // Pause by clearing intervals
        clearAllIntervals()
      }
      // Note: We don't start intervals here because the useEffect will handle it

      return newPausedState
    })
  }, [clearAllIntervals])

  // Handle manual navigation with button clicks
  const handlePrev = useCallback(() => {
    if (api && api.canScrollPrev()) {
      api.scrollPrev()
    }
    // Don't restart intervals here - let the 'select' event handler do it
  }, [api])

  const handleNext = useCallback(() => {
    if (api && api.canScrollNext()) {
      api.scrollNext()
    }
    // Don't restart intervals here - let the 'select' event handler do it
  }, [api])

  const handleGoToSlide = useCallback(
    (index: number) => {
      if (api) {
        api.scrollTo(index)
      }
      // Don't restart intervals here - let the 'select' event handler do it
    },
    [api],
  )

  // Effect to handle API initialization
  useEffect(() => {
    if (api && !isInitialized) {
      // Wait for the API to be fully ready
      const timer = setTimeout(() => {
        setIsInitialized(true)
        setCurrent(api.selectedScrollSnap())
      }, 100)

      return () => clearTimeout(timer)
    }
  }, [api, isInitialized])

  // Effect to manage intervals based on pause state and initialization
  useEffect(() => {
    if (!isInitialized) return

    if (isPaused) {
      clearAllIntervals()
    } else {
      startIntervals()
    }
  }, [isPaused, isInitialized, startIntervals, clearAllIntervals])

  // Auto-slide and progress tracking effect
  useEffect(() => {
    if (!api || !isInitialized) return

    // Update current slide index and restart intervals on slide change
    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap())
      // Only restart if not paused
      if (!isPaused) {
        startIntervals()
      }
    }

    // When user interacts, temporarily pause
    const handlePointerDown = () => {
      clearAllIntervals()
    }

    // When user stops interacting, restart if not paused
    const handlePointerUp = () => {
      if (!isPaused) {
        startIntervals()
      }
    }

    // Handle API reinitialization
    const handleReInit = () => {
      setCurrent(api.selectedScrollSnap())
      if (!isPaused) {
        startIntervals()
      }
    }

    api.on('select', handleSelect)
    api.on('pointerDown', handlePointerDown)
    api.on('pointerUp', handlePointerUp)
    api.on('reInit', handleReInit)

    // Initial setup
    if (!isPaused) {
      startIntervals()
    }

    // Clean up all intervals and event listeners on component unmount
    return () => {
      clearAllIntervals()
      api.off('select', handleSelect)
      api.off('pointerDown', handlePointerDown)
      api.off('pointerUp', handlePointerUp)
      api.off('reInit', handleReInit)
    }
  }, [api, isPaused, isInitialized, startIntervals, clearAllIntervals])

  // Reset state when component unmounts or props change
  useEffect(() => {
    return () => {
      clearAllIntervals()
      setIsInitialized(false)
      setCurrent(0)
      setProgress(0)
    }
  }, [clearAllIntervals])

  if (!props || !props.slides || props.slides.length === 0) return null

  return (
    <section className="w-full h-full relative">
      <Carousel
        setApi={setApi}
        className="h-full w-full"
        opts={{
          align: 'start',
          loop: true,
          skipSnaps: false,
          dragFree: false,
        }}
      >
        <CarouselContent className="h-full parent-of-problematic !items-stretch">
          {props.slides.map((slide, index) => (
            <CarouselItem
              key={index}
              className="h-full basis-full min-w-0 relative problematic-child"
            >
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-primary/70 z-10" />
                <Media
                  resource={slide.backgroundImage}
                  alt={slide.title}
                  fill
                  imgClassName="object-cover w-full h-full"
                  priority
                />
              </div>

              {/* Slide Content */}
              <div className="container relative z-20 h-full flex flex-col justify-between px-4 sm:px-5 md:px-6 py-24 sm:py-26 md:pt-36 md:pb-20">
                {/* Top Section - Two Columns on Desktop */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 mb-4 sm:mb-6 min-h-[250px] sm:min-h-[300px] md:!min-h-[200px] pt-16 sm:pt-0">
                  {/* Left Column - Main Content */}
                  <div className="space-y-4 sm:space-y-5 md:space-y-6 flex flex-col">
                    {/* Slide Icon Badge */}
                    <div className="inline-flex items-center px-2.5 sm:px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/20 text-white/90 text-xs sm:text-sm font-medium mb-1 sm:mb-2 w-fit">
                      <div className="mr-1.5 sm:mr-2 text-white">
                        <Atom className="h-3 w-3 sm:h-4 sm:w-4" />
                      </div>
                      <span>{slide.badge.text}</span>
                    </div>

                    {/* Slide Heading */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-primary leading-tight min-h-[2.7em] md:min-h-[3.7em]">
                      {slide.title}
                    </h2>

                    {/* Slide Description */}
                    <p className="text-base sm:text-lg md:text-xl text-white/90 font-secondary min-h-[3em]">
                      {slide.subtitle}
                    </p>

                    {slide.cta && slide.cta.links && slide.cta.links.length > 0 && (
                      <div className="pt-2 sm:pt-3 md:pt-4 mt-auto">
                        <ul className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                          {slide.cta.links.map(({ link }, i) => (
                            <li key={i}>
                              <Button
                                asChild
                                size="lg"
                                className="bg-white text-primary hover:bg-white/90 rounded-md py-4 sm:py-5 md:py-6 px-6 sm:px-7 md:px-8 text-sm sm:text-base group w-full sm:w-auto"
                              >
                                <CMSLink {...link} className="flex items-center justify-center">
                                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </CMSLink>
                              </Button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Right Column - Featured Research */}
                  {slide.featuredItem &&
                    slide.featuredItem.links &&
                    slide.featuredItem.links.length > 0 && (
                      <div className="hidden lg:block h-full">
                        <Link
                          href={slide.featuredItem.links[0].link?.url || ''}
                          className="block relative rounded-xl overflow-hidden h-full min-h-[300px] group/card cursor-pointer"
                        >
                          {/* Badge added here */}
                          {slide.featuredItem.badge && slide.featuredItem.badge !== 'none' && (
                            <Badge
                              className={`absolute top-4 left-4 z-30 ${getBadge(slide.featuredItem.badge).color}`}
                            >
                              {getBadge(slide.featuredItem.badge).text}
                            </Badge>
                          )}

                          {/* Featured image as background */}
                          <Media
                            resource={slide.featuredItem.image}
                            alt={slide.featuredItem.title}
                            fill
                            priority
                            imgClassName="object-cover z-0 w-full h-full transition-transform duration-300 group-hover/card:scale-105"
                          />
                          {/* Gradient overlay for text readability */}
                          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/60 to-primary-dark/20 z-10"></div>
                          {/* Additional dark gradient overlay at the bottom */}
                          <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                          {/* Featured content floating on image */}

                          <div className="relative p-6 z-20 h-full flex flex-col justify-end">
                            <h3 className="text-white font-semibold mb-3 font-primary text-xl group-hover/card:text-white/90 flex items-center gap-2">
                              {slide.featuredItem.title}
                            </h3>
                            <p className="text-white/90 text-sm mb-4">
                              {slide.featuredItem.description}
                            </p>
                            <div className="flex items-center text-white text-sm">
                              <span>{slide.featuredItem.links[0].link.label}</span>
                              <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover/card:translate-x-1" />
                            </div>
                          </div>
                        </Link>
                      </div>
                    )}
                </div>

                {/* Featured Cards - Full Width Row */}
                {slide.featuredCards && slide.featuredCards.length > 0 && (
                  <div className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mt-auto hidden md:grid">
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {slide.featuredCards.map((card: any, idx: number) => {
                      const hasLinks = card.links && card.links.length > 0
                      const firstLink = hasLinks && card.links ? card.links[0].link : null
                      const badge = card.badge || 'none'

                      return hasLinks && firstLink ? (
                        <Link
                          key={idx}
                          href={firstLink.url || ''}
                          className="relative bg-white/20 backdrop-blur-md border border-white/20 rounded-lg sm:rounded-xl overflow-hidden hover:bg-white/30 transition-all group cursor-pointer flex flex-col"
                        >
                          {/* Badge added here */}
                          {badge && badge !== 'none' && (
                            <Badge
                              className={`absolute top-4 left-4 z-10 ${getBadge(badge).color}`}
                            >
                              {getBadge(badge).text}
                            </Badge>
                          )}

                          {/* Card Image */}
                          <div className="relative h-24 sm:h-28 md:h-32 w-full">
                            <Media
                              resource={card.image}
                              alt={card.title}
                              fill
                              priority
                              imgClassName="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent"></div>
                          </div>

                          {/* Card Content */}
                          <div className="p-3 sm:p-4">
                            <h3 className="text-white font-semibold mb-1 font-primary text-base sm:text-lg group-hover:text-white/90 min-h-10">
                              {card.title}
                            </h3>
                            <p className="text-white/80 text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-2">
                              {card.description}
                            </p>
                            <div className="flex items-center text-white text-xs sm:text-sm">
                              <span>{firstLink.label}</span>
                              <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </div>
                          </div>
                        </Link>
                      ) : (
                        <div
                          key={idx}
                          className="relative bg-white/20 backdrop-blur-md border border-white/20 rounded-lg sm:rounded-xl overflow-hidden"
                        >
                          {/* Badge added here */}
                          <Badge className="absolute top-4 left-4 z-10">Product</Badge>

                          {/* Card Image */}
                          <div className="relative h-24 sm:h-28 md:h-32 w-full">
                            <Media
                              resource={card.image}
                              alt={card.title}
                              fill
                              priority
                              imgClassName="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent"></div>
                          </div>

                          {/* Card Content */}
                          <div className="p-3 sm:p-4">
                            <h3 className="text-white font-semibold mb-1 font-primary text-base sm:text-lg min-h-14">
                              {card.title}
                            </h3>
                            <p className="text-white/80 text-xs sm:text-sm line-clamp-2">
                              {card.description}
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Carousel Controls */}
      <div className="absolute bottom-4 sm:bottom-5 md:bottom-6 right-4 sm:right-6 md:right-8 z-30">
        <div className="flex flex-col items-end space-y-3 sm:space-y-4">
          {/* Navigation Arrows with Pause Button */}
          <div className="flex justify-center w-full space-x-1.5 sm:space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              disabled={!api?.canScrollPrev()}
              className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 rounded-full border-white/20 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 -rotate-180" />
              <span className="sr-only">Previous slide</span>
            </Button>

            {/* Pause/Play Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={togglePause}
              className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 rounded-full border-white/20 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20"
            >
              {isPaused ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 sm:h-5 sm:w-5"
                  >
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                  <span className="sr-only">Play slideshow</span>
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 sm:h-5 sm:w-5"
                  >
                    <rect x="6" y="4" width="4" height="16"></rect>
                    <rect x="14" y="4" width="4" height="16"></rect>
                  </svg>
                  <span className="sr-only">Pause slideshow</span>
                </>
              )}
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              disabled={!api?.canScrollNext()}
              className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 rounded-full border-white/20 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="sr-only">Next slide</span>
            </Button>
          </div>

          {/* Progress Indicators */}
          <div className="flex space-x-1.5 sm:space-x-2">
            {props.slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleGoToSlide(idx)}
                className="w-8 sm:w-10 md:w-12 h-1 rounded-full relative overflow-hidden bg-white/30"
                aria-label={`Go to slide ${idx + 1}`}
              >
                {/* Filled progress bar - doesn't animate when paused */}
                <div
                  className={`absolute inset-0 bg-white ${
                    isPaused ? '' : 'transition-all duration-100 ease-linear'
                  }`}
                  style={{
                    width:
                      idx === current
                        ? isPaused
                          ? `${progress}%`
                          : `${progress}%`
                        : idx < current
                          ? '100%'
                          : '0%',
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
