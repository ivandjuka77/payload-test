import { CardTitle } from '@/components/ui/card'
import { Media as MediaType, VerticalCardsBlock } from '@/payload-types'
import { Badge } from '@/components/ui/badge'
import { Leaf } from 'lucide-react'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

interface PillarProps {
  card: {
    image: number | MediaType
    title: string
    subtitle?: string | null
    paragraph?: any
  }
  orientation: 'left' | 'right'
}

function Pillar({ card, orientation }: PillarProps) {
  return (
    <div className="relative group overflow-hidden rounded-xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300">
      <div className="grid lg:grid-cols-2 gap-0">
        {orientation === 'left' ? (
          <>
            {/* Image Section */}
            <div className="relative h-[200px] lg:h-[400px] overflow-hidden">
              <Media resource={card.image} alt={card.title} fill imgClassName="object-cover" />
              <div
                className="absolute inset-y-0 right-0 w-[300px] hidden lg:block"
                style={{
                  background: 'linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,1))',
                }}
              />
            </div>

            {/* Content Section */}
            <div className="p-6 md:p-8 md:pl-10 flex flex-col justify-center relative">
              <CardTitle className="text-xl md:text-2xl font-primary mb-3">{card.title}</CardTitle>
              <p className="text-base md:text-lg font-medium text-[hsl(149.71,100%,40%)] mb-4 font-secondary">
                {card.subtitle}
              </p>
              <div className="text-muted-foreground font-secondary">
                <RichText
                  data={card.paragraph || ''}
                  className="mx-0 px-0 text-sm md:text-base !text-muted-foreground"
                />
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Content Section */}
            <div className="p-6 md:p-8 md:pr-10 flex flex-col justify-center relative order-last lg:order-first">
              <CardTitle className="text-xl md:text-2xl font-primary mb-3">{card.title}</CardTitle>
              <p className="text-base md:text-lg font-medium text-[hsl(149.71,100%,40%)] mb-4 font-secondary">
                {card.subtitle}
              </p>
              <div className="text-muted-foreground font-secondary">
                <RichText
                  data={card.paragraph || ''}
                  className="mx-0 px-0 text-sm md:text-base !text-muted-foreground"
                />
              </div>
            </div>

            {/* Image Section */}
            <div className="relative h-[200px] lg:h-[400px] overflow-hidden">
              <Media resource={card.image} alt={card.title} fill imgClassName="object-cover" />
              <div
                className="absolute inset-y-0 left-0 w-[300px] hidden lg:block"
                style={{
                  background: 'linear-gradient(to left, rgba(255,255,255,0), rgba(255,255,255,1))',
                }}
              />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export const VerticalCards: React.FC<VerticalCardsBlock> = ({ title, subtitle, cards }) => {
  return (
    <section className="w-full py-20 bg-gray-50 px-4 sm:px-6 lg:px-0">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <Badge
            variant="outline"
            className="mb-6 px-4 py-1 border-[hsl(149.71,100%,40%)]/20 text-[hsl(149.71,100%,40%)] bg-[hsl(149.71,100%,40%)]/5"
          >
            <Leaf className="w-4 h-4 mr-2" />
            Our Approach
          </Badge>

          <h2 className="text-3xl md:text-4xl font-bold font-primary mb-6">{title}</h2>
          <p className="text-lg md:text-xl text-muted-foreground font-secondary">{subtitle}</p>
        </div>

        <div className="space-y-8">
          {cards &&
            cards.map((card, index) => (
              <Pillar key={index} card={card} orientation={index % 2 === 0 ? 'left' : 'right'} />
            ))}
        </div>
      </div>
    </section>
  )
}
