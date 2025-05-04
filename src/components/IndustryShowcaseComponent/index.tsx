import { IndustryCard } from '@/components/IndustryCard'
import { Industry } from '@/payload-types'

type IndustryShowcaseComponentProps = {
  industries: Industry[]
  title: string
  subtitle: string
}

export function IndustryShowcaseComponent({
  industries,
  title,
  subtitle,
}: IndustryShowcaseComponentProps) {
  return (
    <section className="container py-16 md:py-20">
      <div className="text-center mb-12">
        <h2 className="font-primary text-3xl md:text-4xl font-bold text-foreground mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="font-secondary text-muted-foreground max-w-3xl mx-auto text-lg">
            {subtitle}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {industries.map((industry, index) => (
          <IndustryCard key={index} industry={industry as Industry} />
        ))}
      </div>
    </section>
  )
}
