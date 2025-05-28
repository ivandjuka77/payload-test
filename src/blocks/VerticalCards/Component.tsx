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
  index: number
  orientation: 'left' | 'right'
}

function Pillar({ card, index, orientation }: PillarProps) {
  return (
    <div className="relative group overflow-hidden rounded-xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300">
      <div className="grid lg:grid-cols-2 gap-0">
        {orientation === 'left' ? (
          <>
            {/* Image Section */}
            <div className="relative h-[400px] overflow-hidden">
              <Media resource={card.image} alt={card.title} fill imgClassName="object-cover" />
              <div
                className="absolute inset-y-0 right-0 w-[300px]"
                style={{
                  background: 'linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,1))',
                }}
              />
            </div>

            {/* Content Section */}
            <div className="p-8 flex flex-col justify-center relative">
              <CardTitle className="text-2xl font-primary mb-3">{card.title}</CardTitle>
              <p className="text-lg font-medium text-[hsl(149.71,100%,40%)] mb-4 font-secondary">
                {card.subtitle}
              </p>
              <p className="text-muted-foreground font-secondary">
                <RichText data={card.paragraph || ''} className="mx-0 px-0" />
              </p>
            </div>
          </>
        ) : (
          <>
            {/* Content Section */}
            <div className="p-8 flex flex-col justify-center relative">
              <CardTitle className="text-2xl font-primary mb-3">{card.title}</CardTitle>
              <p className="text-lg font-medium text-[hsl(149.71,100%,40%)] mb-4 font-secondary">
                {card.subtitle}
              </p>
              <p className="text-muted-foreground font-secondary">
                <RichText data={card.paragraph || ''} className="mx-0 px-0" />
              </p>
            </div>

            {/* Image Section */}
            <div className="relative h-[400px] overflow-hidden">
              <Media resource={card.image} alt={card.title} fill imgClassName="object-cover" />
              <div
                className="absolute inset-y-0 left-0 w-[300px]"
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
    <section className="w-full py-20 bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge
            variant="outline"
            className="mb-6 px-4 py-1 border-[hsl(149.71,100%,40%)]/20 text-[hsl(149.71,100%,40%)] bg-[hsl(149.71,100%,40%)]/5"
          >
            <Leaf className="w-4 h-4 mr-2" />
            Our Approach
          </Badge>

          <h2 className="text-4xl font-bold font-primary mb-6">{title}</h2>
          <p className="text-xl text-muted-foreground font-secondary">{subtitle}</p>
        </div>

        <div className="space-y-8">
          {cards &&
            cards.map((card, index) => (
              <Pillar
                key={index}
                card={card}
                index={index}
                orientation={index % 2 === 0 ? 'left' : 'right'}
              />
            ))}
        </div>
      </div>
    </section>
  )
}
