import type { ContentImageBlock } from '@/payload-types'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'

export const ContentImage: React.FC<ContentImageBlock> = ({ title, content, image, layout }) => {
  return (
    <section className="container py-16 md:py-20 px-4 sm:px-6 lg:px-0">
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
        {layout === 'right' ? (
          <>
            <div>
              {title && (
                <h2 className="font-primary mb-6 text-3xl font-bold text-foreground md:text-4xl">
                  {title}
                </h2>
              )}
              <div className="font-secondary space-y-4">
                {content && <RichText className="!text-foreground" data={content} />}
              </div>
            </div>

            <div className="relative h-[200px] md:h-[400px] overflow-hidden rounded-lg">
              <Media resource={image} fill imgClassName="h-full w-full object-cover rounded-lg" />
            </div>
          </>
        ) : (
          <>
            <div className="relative h-[200px] md:h-[400px] overflow-hidden rounded-lg md:order-first">
              <Media resource={image} fill imgClassName="h-full w-full object-cover rounded-lg" />
            </div>

            <div className="md:order-last">
              {title && (
                <h2 className="font-primary mb-6 text-3xl font-bold text-foreground md:text-4xl">
                  {title}
                </h2>
              )}
              <div className="font-secondary space-y-4">
                {content && <RichText className="!text-foreground" data={content} />}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
