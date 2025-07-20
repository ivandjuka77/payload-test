import { Page } from '@/payload-types'

export const MinimalHero: React.FC<Page['hero']> = (props) => {
  const { title, description } = props
  return (
    <section className="relative w-full bg-gradient-to-b from-primary/10 to-background pt-44 pb-16">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-primary text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 font-secondary text-lg leading-8 text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}
