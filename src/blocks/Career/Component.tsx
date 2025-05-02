'use client'

import Link from 'next/link'
import { ArrowRight, Users, Briefcase, Heart, Sparkles, Beaker } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CareerBlock } from '@/payload-types'

export const CareerSection: React.FC<CareerBlock> = ({ title, subtitle, features, cta }) => {
  const values = [
    {
      icon: <Beaker className="h-6 w-6" />,
      title: 'Scientific Excellence',
      description:
        'We pursue the highest standards in chemical innovation and research methodologies.',
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'People First',
      description: 'We prioritize the well-being, growth, and development of our team members.',
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: 'Sustainable Innovation',
      description:
        "We develop solutions that address today's needs while preserving tomorrow's resources.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Inclusive Collaboration',
      description:
        'We value diverse perspectives and foster an environment where everyone belongs.',
    },
  ]
  return (
    <section className="w-full py-16 md:py-24 relative bg-white">
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
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  {/* {feature.icon} */}
                  ICON HERE
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-primary">{feature.title}</h3>
                  <p className="text-muted-foreground font-secondary">{feature.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {cta && (
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 font-primary">{cta.title}</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto font-secondary">
              {cta.description}
            </p>
            {(cta?.links || []).map(({ link }: any, i: number) => {
              return (
                <Button asChild size="lg" key={i}>
                  <Link href={link.url || '#'} className="inline-flex items-center gap-2">
                    {link.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
