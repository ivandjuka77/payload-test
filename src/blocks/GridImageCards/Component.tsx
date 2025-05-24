import { Badge } from '@/components/ui/badge'
import { Target, ArrowRight } from 'lucide-react'
import type { GridImageCardsBlock, Media as MediaType } from '@/payload-types'
import { Media } from '@/components/Media'
import { RichText } from '@payloadcms/richtext-lexical/react'

interface GridImageCardProps {
  image: number | MediaType
  title: string
  paragraph?: any
  highlights?: { highlight?: string | null; id?: string | null }[] | null
}

function GridImageCard({ title, paragraph, image, highlights }: GridImageCardProps) {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out h-full hover:bg-green-600 hover:text-white hover:scale-[1.02]">
      <div className="relative h-48 overflow-hidden">
        <Media resource={image} alt={title} fill imgClassName="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold font-primary mb-3 group-hover:text-white transition-all duration-300 ease-in-out group-hover:scale-[1.02]">
          {title}
        </h3>
        <p className="text-muted-foreground font-secondary mb-6 text-sm leading-relaxed group-hover:text-white/80 transition-all duration-300 ease-in-out group-hover:scale-[1.01]">
          <RichText data={paragraph || ''} className="mx-0 px-0" />
        </p>

        <div className="grid grid-cols-1 gap-3">
          {highlights &&
            highlights.map((item, idx) =>
              item.highlight ? (
                <div key={item.id || idx} className="flex items-center justify-start space-x-2">
                  <ArrowRight className="w-4 h-4 text-green-300 group-hover:text-white transition-all duration-300 ease-in-out" />
                  <span className="text-xs text-gray-600 font-secondary leading-relaxed group-hover:text-white/90 transition-all duration-300 ease-in-out group-hover:scale-[1.01]">
                    {item.highlight}
                  </span>
                </div>
              ) : null,
            )}
        </div>
      </div>
    </div>
  )
}

export const GridImageCards: React.FC<GridImageCardsBlock> = ({
  badge,
  title,
  subtitle,
  cards,
}) => {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Badge
            variant="outline"
            className="mb-6 px-4 py-1 border-green-500/20 text-green-500 bg-green-500/5"
          >
            <Target className="w-4 h-4 mr-2" />
            {badge}
          </Badge>

          <h2 className="text-4xl font-bold font-primary mb-6">{title}</h2>
          <p className="text-xl text-muted-foreground font-secondary">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {cards && cards.map((card, index) => <GridImageCard key={index} {...card} />)}
        </div>
      </div>
    </section>
  )
}
