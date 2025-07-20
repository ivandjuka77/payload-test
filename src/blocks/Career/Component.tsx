import { Beaker, Briefcase, Heart, Sparkles, Users } from 'lucide-react'
import { CareerBlock } from '@/payload-types'
import SimpleCTA from '@/components/SimpleCTA'

export const CareerSection: React.FC<CareerBlock> = ({ title, subtitle, features, cta }) => {
  //TODO: Remove hardcoded icons
  const icons = [
    <Beaker key="beaker" className="w-5 h-5 sm:w-6 sm:h-6" />,
    <Heart key="heart" className="w-5 h-5 sm:w-6 sm:h-6" />,
    <Sparkles key="sparkles" className="w-5 h-5 sm:w-6 sm:h-6" />,
    <Users key="user" className="w-5 h-5 sm:w-6 sm:h-6" />,
  ]

  return (
    <section className="w-full py-12 sm:py-14 md:py-16 lg:py-24 relative bg-gray-50 px-4 sm:px-6 lg:px-0">
      <div className="container">
        <div className="max-w-2xl sm:max-w-3xl mx-auto text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center px-3 sm:px-4 py-1 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-5 md:mb-6">
            <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            <span>Join Our Team</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight font-primary mb-4 sm:mb-5 md:mb-6">
            {title}
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-secondary">
            {subtitle}
          </p>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-10 sm:mb-12 md:mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-2.5 md:p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                  {icons[index]}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg sm:text-xl font-bold mb-1.5 sm:mb-2 font-primary">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground font-secondary leading-relaxed">
                    {feature.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* @ts-expect-error - It's working correctly */}
        {cta && cta?.title && cta?.description && <SimpleCTA cta={cta} />}
      </div>
    </section>
  )
}
