import type { MapBlock } from '@/payload-types'
import { Media } from '@/components/Media'

type MapBlockProps = MapBlock & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image?: any
}

export const MapSection: React.FC<MapBlockProps> = ({ iframeUrl, title, description, image }) => {
  return (
    <section className="container py-16 md:py-20 px-4 sm:px-6 lg:px-0 border-t border-primary-200">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        {title && (
          <h2 className="font-primary mb-6 text-3xl font-bold text-foreground md:text-4xl">
            {title}
          </h2>
        )}
        {description && (
          <p className="font-secondary text-lg text-slate-600 leading-relaxed">{description}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {/* Map Iframe - 50% */}
        <div className="w-full h-[250px] md:h-[300px] xl:h-[400px] rounded-3xl overflow-hidden shadow-lg">
          <iframe
            src={iframeUrl}
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </div>

        {/* Image - 50% */}
        <div className="relative w-full h-[250px] md:h-[300px] xl:h-[400px] rounded-3xl overflow-hidden shadow-lg">
          <Media resource={image} fill imgClassName="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  )
}
