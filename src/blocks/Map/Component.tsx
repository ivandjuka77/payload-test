import type { MapBlock } from '@/payload-types'

export const MapSection: React.FC<MapBlock> = ({ iframeUrl }) => {
  return (
    <section className="w-full">
      <div className="w-full h-[500px]">
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
