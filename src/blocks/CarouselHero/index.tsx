'use client'

import { CarouselHeroSlide } from './config'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Atom, ChevronRight, MoveRight } from 'lucide-react'
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel'

interface CarouselHeroProps {
  slides?: CarouselHeroSlide[]
}

export const CarouselHero: React.FC<CarouselHeroProps> = (props) => {
  const [current, setCurrent] = useState(0)
  const [api, setApi] = useState<CarouselApi>()
  const [progress, setProgress] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const slideIntervalMs = 5000 // 5 seconds
  const progressSteps = 50 // Number of steps for smooth progress animation

  // Function to reset and restart both intervals
  const resetAndStartIntervals = () => {
    // Clear existing intervals
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current)

    // Reset progress
    setProgress(0)

    // Only set up intervals if not paused
    if (!isPaused) {
      // Setup new slide interval
      intervalRef.current = setInterval(() => {
        api?.scrollNext()
      }, slideIntervalMs)

      // Setup new progress animation interval
      progressIntervalRef.current = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + 100 / progressSteps
          return newProgress > 100 ? 100 : newProgress
        })
      }, slideIntervalMs / progressSteps)
    }
  }

  // Function to pause the carousel
  const togglePause = () => {
    const newPausedState = !isPaused
    setIsPaused(newPausedState)

    if (newPausedState) {
      // Pause by clearing intervals
      if (intervalRef.current) clearInterval(intervalRef.current)
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current)
    } else {
      // Resume by restarting intervals
      resetAndStartIntervals()
    }
  }

  // Auto-slide and progress tracking effect
  useEffect(() => {
    if (!api) return

    // Setup initial intervals (if not paused)
    if (!isPaused) {
      resetAndStartIntervals()
    }

    // Update current slide index and reset progress on slide change
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
      resetAndStartIntervals()
    })

    // When user interacts, pause but don't reset
    api.on('pointerDown', () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current)
    })

    // When user stops interacting, reset and restart (if not paused)
    api.on('pointerUp', () => {
      if (!isPaused) {
        resetAndStartIntervals()
      }
    })

    // Clean up all intervals on component unmount
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [api, isPaused])

  // Handle manual navigation with button clicks
  const handlePrev = () => {
    api?.scrollPrev()
    resetAndStartIntervals()
  }

  const handleNext = () => {
    api?.scrollNext()
    resetAndStartIntervals()
  }

  const handleGoToSlide = (index: number) => {
    api?.scrollTo(index)
    resetAndStartIntervals()
  }

  // Carousel items with different backgrounds and content for different audiences
  const slides = [
    {
      title: 'Advancing Scientific Research',
      subtitle: 'Pioneering chemical innovations for researchers and academic institutions',
      backgroundImage: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg',
      badge: {
        icon: 'atom',
        text: '25+ years of research expertise',
      },
      featuredItem: {
        title: 'Novel Catalytic Systems',
        description:
          'Our latest breakthrough in transition metal catalysis enables reactions at lower temperatures with higher yields.',
        image:
          'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        link: '/research/catalytic-systems',
      },
      featuredCards: [
        {
          title: 'Research Partnerships',
          description:
            'Collaborate with our scientists on groundbreaking chemical research initiatives',
          image:
            'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1200',
          link: '/research-partnerships',
        },
        {
          title: 'Laboratory Materials',
          description: 'High-purity compounds and reagents for precise experimental requirements',
          image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg',
          link: '/lab-materials',
        },
        {
          title: 'Academic Programs',
          description: 'Supporting educational institutions with specialized chemistry programs',
          image:
            'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1200',
          link: '/academic-collaborations',
        },
      ],
      ctaButton: {
        text: 'Explore Research Solutions',
        link: '/research',
      },
    },
    {
      title: 'Industrial Chemical Solutions',
      subtitle: 'High-performance formulations engineered for your production needs',
      backgroundImage:
        'https://images.pexels.com/photos/29707595/pexels-photo-29707595/free-photo-of-classic-red-car-with-white-glove-detailing.jpeg',
      badge: {
        icon: 'building2',
        text: '300+ patented formulations',
      },
      featuredItem: {
        title: 'Ultra-Durable Coating System',
        description:
          'Our advanced polymer coating provides unmatched corrosion resistance for industrial applications.',
        image:
          'https://images.pexels.com/photos/14615263/pexels-photo-14615263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        link: '/products/coating-systems',
      },
      featuredCards: [
        {
          title: 'Coating Systems',
          description:
            'Advanced polymer coatings with superior durability and corrosion resistance',
          image: 'https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg',
          link: '/products/coatings',
        },
        {
          title: 'Adhesive Solutions',
          description: 'High-performance bonding agents for demanding industrial applications',
          image:
            'https://images.pexels.com/photos/5622896/pexels-photo-5622896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          link: '/products/adhesives',
        },
        {
          title: 'Custom Formulations',
          description: 'Tailored chemical compounds developed to your exact specifications',
          image: 'https://images.pexels.com/photos/5691520/pexels-photo-5691520.jpeg',
          link: '/custom-formulations',
        },
      ],
      ctaButton: {
        text: 'View Industrial Solutions',
        link: '/industrial',
      },
    },
    {
      title: 'Chemistry for a Sustainable Future',
      subtitle: 'Environmentally responsible innovations and green chemistry solutions',
      backgroundImage: 'https://images.pexels.com/photos/339614/pexels-photo-339614.jpeg',
      badge: {
        icon: 'globe',
        text: '50+ global partnerships for sustainability',
      },
      featuredItem: {
        title: 'Bio-Based Polymers',
        description:
          'Our plant-derived polymers offer the same performance as petroleum-based alternatives with 70% lower carbon footprint.',
        image:
          'https://images.pexels.com/photos/1206593/pexels-photo-1206593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        link: '/sustainable-products/biopolymers',
      },
      featuredCards: [
        {
          title: 'Bio-Based Polymers',
          description:
            'Plant-derived alternatives with 70% lower carbon footprint than conventional options',
          image: 'https://images.pexels.com/photos/1206593/pexels-photo-1206593.jpeg',
          link: '/sustainable-products/biopolymers',
        },
        {
          title: 'Green Manufacturing',
          description: 'Eco-friendly processes that minimize waste and reduce environmental impact',
          image:
            'https://images.pexels.com/photos/2391/dirty-industry-stack-factory.jpg?auto=compress&cs=tinysrgb&w=1200',
          link: '/green-initiatives/manufacturing',
        },
        {
          title: 'Circular Economy Solutions',
          description: 'Innovative approaches to product lifecycle and materials recycling',
          image: 'https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg',
          link: '/circular-economy',
        },
      ],
      ctaButton: {
        text: 'Discover Sustainable Solutions',
        link: '/sustainability',
      },
    },
  ] as CarouselHeroSlide[]

  return (
    <section className="w-full relative">
      {/* Carousel Container */}
      <Carousel
        setApi={setApi}
        className="h-full w-full"
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent className="h-full ">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="h-full py-10 basis-full min-w-0 relative">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-primary/70 z-10" /> {/* Darkened overlay */}
                <Image
                  src={slide.backgroundImage}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>

              {/* Slide Content */}
              <div className="container relative z-20 h-full flex flex-col justify-between px-4 md:px-6 py-12">
                {/* Top Section - Two Columns on Desktop */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-6">
                  {/* Left Column - Main Content */}
                  <div className="space-y-6">
                    {/* Slide Icon Badge */}
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-2">
                      {/* TODO: Dynamic icon */}
                      {/* <div className='mr-2 text-white'>{slide.badge.icon}</div> */}
                      <div className="mr-2 text-white">
                        <Atom className="h-4 w-4" />
                      </div>
                      <span>{slide.badge.text}</span>
                    </div>

                    {/* Slide Heading */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-primary leading-tight">
                      {slide.title}
                    </h2>

                    {/* Slide Description */}
                    <p className="text-xl text-white/90 font-secondary">{slide.subtitle}</p>

                    {/* CTA Button */}
                    <div className="pt-4">
                      <Button
                        asChild
                        size="lg"
                        className="bg-white text-primary hover:bg-white/90 rounded-md py-6 px-8 text-base group"
                      >
                        <Link href={slide.ctaButton.link} className="flex items-center">
                          {slide.ctaButton.text}
                          <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Right Column - Featured Research */}
                  <div className="hidden lg:block">
                    <div className="relative rounded-xl overflow-hidden h-full">
                      {/* Featured image as background */}
                      <Image
                        src={slide.featuredItem.image}
                        alt={slide.featuredItem.title}
                        fill
                        className="object-cover z-0"
                      />

                      {/* Gradient overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/60 to-primary-dark/20 z-10"></div>

                      {/* Additional dark gradient overlay at the bottom */}
                      <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/80 to-transparent z-10"></div>

                      {/* Featured content floating on image */}
                      <div className="relative p-6 z-20 h-full flex flex-col justify-end">
                        <h3 className="text-white font-semibold mb-3 font-primary text-xl">
                          {slide.featuredItem.title}
                        </h3>
                        <p className="text-white/90 text-sm mb-4">
                          {slide.featuredItem.description}
                        </p>
                        <Link
                          href={slide.featuredItem.link}
                          className="inline-flex items-center text-white hover:text-white/90 text-sm font-medium group"
                        >
                          Learn more
                          <MoveRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Featured Cards - Full Width Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-auto">
                  {slide.featuredCards.map((card, idx) => (
                    <div
                      key={idx}
                      className="bg-white/20 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden hover:bg-white/30 transition-all group"
                    >
                      {/* Card Image */}
                      <div className="relative h-32 w-full">
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent"></div>
                      </div>

                      {/* Card Content */}
                      <div className="p-4">
                        <h3 className="text-white font-semibold mb-1 font-primary text-lg group-hover:text-white/90">
                          {card.title}
                        </h3>
                        <p className="text-white/80 text-sm mb-3 line-clamp-2">
                          {card.description}
                        </p>
                        <Link
                          href={card.link}
                          className="inline-flex items-center text-white hover:text-white/90 text-sm font-medium group"
                        >
                          Learn more
                          <MoveRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Carousel Controls */}
      <div className="absolute bottom-6 right-8 z-30">
        <div className="flex flex-col items-end space-y-4">
          {/* Navigation Arrows with Pause Button */}
          <div className="flex justify-center w-full space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              disabled={!api?.canScrollPrev()}
              className="h-10 w-10 rounded-full border-white/20 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20"
            >
              <ChevronRight className="h-5 w-5 -rotate-180" />
              <span className="sr-only">Previous slide</span>
            </Button>

            {/* Pause/Play Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={togglePause}
              className="h-10 w-10 rounded-full border-white/20 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20"
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
                    className="h-5 w-5"
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
                    className="h-5 w-5"
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
              className="h-10 w-10 rounded-full border-white/20 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next slide</span>
            </Button>
          </div>

          {/* Progress Indicators */}
          <div className="flex space-x-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleGoToSlide(idx)}
                className="w-12 h-1 rounded-full relative overflow-hidden bg-white/30"
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
