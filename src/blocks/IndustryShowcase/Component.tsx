import { IndustryCard } from '@/components/IndustryCard'
import { Industry, IndustryShowcaseBlock } from '@/payload-types'

export const IndustryGrid: React.FC<IndustryShowcaseBlock> = ({ industries, title, subtitle }) => {
  return (
    <section className="container py-16 md:py-20 px-4 sm:px-6 lg:px-0">
      <div className="mb-8 text-center md:mb-12">
        <h2 className="font-primary mb-4 text-3xl font-bold text-foreground md:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="font-secondary mx-auto max-w-3xl text-base text-muted-foreground sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {industries.map((industry, index) => (
          <IndustryCard key={index} industry={industry as Industry} />
        ))}
      </div>
    </section>
  )
}
