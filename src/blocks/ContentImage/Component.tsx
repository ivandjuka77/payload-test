import type { ContentImageBlock } from '@/payload-types'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'

export const ContentImage: React.FC<ContentImageBlock> = ({ title, content, image, layout }) => {
  return (
    <section className="container py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {layout === 'right' ? (
          <>
            <div>
              {title && (
                <h2 className="font-primary text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {title}
                </h2>
              )}
              <div className="font-secondary text-muted-foreground space-y-4 mb-8">
                {content && <RichText data={content} />}
              </div>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md">
              <Media resource={image} fill imgClassName="object-cover h-full w-full" />
            </div>
          </>
        ) : (
          <>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md">
              <Media resource={image} fill imgClassName="object-cover h-full w-full" />
            </div>

            <div>
              {title && (
                <h2 className="font-primary text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {title}
                </h2>
              )}
              <div className="font-secondary text-muted-foreground space-y-4 mb-8">
                {content && <RichText data={content} />}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
