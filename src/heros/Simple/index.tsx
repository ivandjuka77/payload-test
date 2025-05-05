import { Media } from '@/components/Media'
import { Button } from '@/components/ui/button'
import { Page } from '@/payload-types'

export const SimpleHero: React.FC<Page['hero']> = (props) => {
  const { title, description, cta, media } = props

  return (
    <section className="relative w-full bg-background py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center">
            <h1 className="font-primary text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              {title}
            </h1>
            <div className="mt-6">
              <p className="font-secondary text-base text-muted-foreground md:text-lg">
                {description}
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-6">
              {(cta?.links || []).map(({ link }, i) => {
                return (
                  <Button
                    key={i}
                    variant="outline"
                    className="px-6 bg-primary text-white hover:bg-primary/90 border-none"
                  >
                    {link.label}
                  </Button>
                )
              })}
            </div>
          </div>
          <div className="relative h-[300px] w-full overflow-hidden rounded-lg md:h-[400px] lg:h-[500px]">
            <Media resource={media} fill imgClassName="object-cover" priority />
          </div>
        </div>
      </div>
    </section>
  )
}
