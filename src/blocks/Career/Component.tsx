'use client'

import { Beaker, Briefcase, Heart, Sparkles, Users } from 'lucide-react'
import { CareerBlock } from '@/payload-types'
import { CMSLink } from '@/components/Link'

export const CareerSection: React.FC<CareerBlock> = ({ title, subtitle, features, cta }) => {
  //TODO: Remove hardcoded icons
  const icons = [
    <Beaker key="beaker" className="w-6 h-6" />,
    <Heart key="heart" className="w-6 h-6" />,
    <Sparkles key="sparkles" className="w-6 h-6" />,
    <Users key="user" className="w-6 h-6" />,
  ]

  return (
    <section className="w-full py-16 md:py-24 relative bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Briefcase className="w-4 h-4 mr-2" />
            <span>Join Our Team</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-primary mb-6">
            {title}
          </h2>

          <p className="text-xl text-muted-foreground font-secondary">{subtitle}</p>
        </div>

        {/* Values grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">{icons[index]}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-primary">{feature.title}</h3>
                  <p className="text-muted-foreground font-secondary">{feature.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {cta && cta?.title && cta?.description && (
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 font-primary">{cta.title}</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto font-secondary">
              {cta.description}
            </p>
            {(cta?.links || []).map(({ link }, i) => {
              return <CMSLink key={i} size="lg" {...link} />
            })}
          </div>
        )}
      </div>
    </section>
  )
}
