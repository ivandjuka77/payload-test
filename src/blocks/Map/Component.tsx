import type { MapBlock } from '@/payload-types'

export const MapSection: React.FC<MapBlock> = ({ iframeUrl, title, description }) => {
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

      <div className="w-full h-[600px] rounded-3xl overflow-hidden shadow-lg">
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
    </section>
  )
}
