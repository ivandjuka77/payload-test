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
    <Flask key="flask" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />,
    <Factory key="factory" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />,
    <Microscope key="microscope" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />,
    <Leaf key="leaf" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />,
  ]

  const iconBg = ['bg-blue-600', 'bg-[#FF5733]', 'bg-purple-500', 'bg-green-500']

  return (
    <div className="group relative overflow-hidden rounded-lg sm:rounded-xl transition-all duration-300 hover:shadow-xl">
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

      <div className="relative z-10 p-4 sm:p-5 md:p-6 lg:p-8 h-full flex flex-col">
        <div
          className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full ${iconBg[index]} flex items-center justify-center mb-4 sm:mb-5 md:mb-6 transition-transform duration-300 group-hover:scale-110 shadow-lg group-hover:shadow-xl`}
        >
          {icons[index]}
        </div>
        {/* Animated line */}
        <div className="w-8 sm:w-10 md:w-12 h-1 bg-white mb-3 sm:mb-4 transition-all duration-300 group-hover:w-16 sm:group-hover:w-18 md:group-hover:w-20 group-hover:bg-white"></div>
        {/* Title and description */}
        <CardTitle className="text-lg sm:text-xl md:text-2xl font-primary text-white mb-2 sm:mb-3">
          {title}
        </CardTitle>
        <CardDescription className="font-secondary text-white text-sm sm:text-base mb-4 sm:mb-5 md:mb-6 leading-relaxed">
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
                className="flex items-center gap-1.5 sm:gap-2 hover:text-white hover:underline text-sm sm:text-base"
              >
                {link.label}
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover/btn:translate-x-1" />
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
      <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden px-4 sm:px-6 lg:px-0">
        <div className="container relative z-10">
          <div className="flex flex-col items-center text-center mb-10 sm:mb-12 md:mb-16 lg:mb-24">
            <div className="inline-flex items-center px-3 sm:px-4 py-1 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-5 md:mb-6">
              <Beaker className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              <span>Chemical Solutions</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-primary mb-3 sm:mb-4 relative">
              {title}
              <span className="absolute -bottom-2 sm:-bottom-3 left-1/2 transform -translate-x-1/2 w-12 sm:w-14 md:w-16 h-1 bg-primary"></span>
            </h2>

            <p className="mt-4 sm:mt-5 md:mt-6 text-base sm:text-lg md:text-xl max-w-2xl sm:max-w-3xl font-secondary text-muted-foreground">
              {description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {cards.map((card, index) => (
              <QuickAccessCard key={index} {...card} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
