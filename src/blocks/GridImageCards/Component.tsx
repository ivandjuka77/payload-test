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
    <div className="group relative h-full overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-green-600 hover:text-white hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        <Media resource={image} alt={title} fill imgClassName="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="font-primary mb-3 text-xl font-bold transition-all duration-300 ease-in-out group-hover:scale-[1.02] group-hover:text-white sm:text-2xl">
          {title}
        </h3>
        <div className="font-secondary mb-6 text-sm leading-relaxed text-muted-foreground transition-all duration-300 ease-in-out group-hover:scale-[1.01] group-hover:text-white/80">
          {/* The RichText component might render its own <p> tag, so we wrap it in a div */}
          <RichText data={paragraph || ''} />
        </div>

        <div className="grid grid-cols-1 gap-3">
          {highlights &&
            highlights.map((item, idx) =>
              item.highlight ? (
                <div key={item.id || idx} className="flex items-center justify-start space-x-2">
                  <ArrowRight className="h-4 w-4 text-green-300 transition-all duration-300 ease-in-out group-hover:text-white" />
                  <span className="font-secondary text-xs leading-relaxed text-gray-600 transition-all duration-300 ease-in-out group-hover:scale-[1.01] group-hover:text-white/90">
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
    <section className="w-full bg-gray-50 py-16 md:py-20 px-4 sm:px-6 lg:px-0">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
          <Badge
            variant="outline"
            className="mb-4 border-green-500/20 bg-green-500/5 px-4 py-1 text-green-500 md:mb-6"
          >
            <Target className="mr-2 h-4 w-4" />
            {badge}
          </Badge>

          <h2 className="font-primary mb-4 text-3xl font-bold sm:text-4xl">{title}</h2>
          <p className="font-secondary text-base text-muted-foreground sm:text-lg">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards && cards.map((card, index) => <GridImageCard key={index} {...card} />)}
        </div>
      </div>
    </section>
  )
}
