'use client'

import Link from 'next/link'
import {
  ArrowRight,
  Recycle,
  Globe,
  CheckCircle2,
  Droplet,
  TreePine,
  Factory,
  Zap,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { SustainabilityBlock } from '@/payload-types'

export const SustainabilitySection: React.FC<SustainabilityBlock> = ({
  title,
  subtitle,
  image,
  card,
  features,
  cta,
}) => {
  //TODO: Remove hardcoded icons
  const icons = [
    <Recycle key="recycle" className="w-6 h-6" />,
    <Droplet key="droplet" className="w-6 h-6" />,
    <Factory key="factory" className="w-6 h-6" />,
    <TreePine key="tree" className="w-6 h-6" />,
  ]

  return (
    <section className="w-full py-16 md:py-24 relative bg-white">
      <div className="container px-4 md:px-6">
        {/* Header section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-[#e8f5ed] text-[#00CC65] text-sm font-medium mb-6">
            <Globe className="w-4 h-4 mr-2" />
            <span>Environmental Stewardship</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-primary mb-6">
            {title}
          </h2>

          <p className="text-xl text-muted-foreground font-secondary">{subtitle}</p>
        </div>

        {/* Main content with image and text */}
        <div className="relative mb-24">
          <div className="rounded-2xl overflow-hidden">
            <Media
              resource={image}
              alt="Sustainable chemical facility with solar panels and green surroundings"
              imgClassName="object-cover object-top w-full h-[500px]"
            />
          </div>

          <div className="absolute bottom-10 left-0 right-0 transform translate-y-1/2">
            <div className="bg-white rounded-xl shadow-lg p-8 mx-auto max-w-4xl">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4 font-primary">{card.title}</h3>
                  {card.description && (
                    <RichText
                      className="text-muted-foreground font-secondary"
                      data={card.description}
                      enableGutter={false}
                    />
                  )}
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <div className="relative h-32 w-32">
                    <div className="absolute inset-0 rounded-full bg-[#00CC65]/10 animate-ping opacity-75"></div>
                    <div className="relative flex items-center justify-center h-32 w-32 rounded-full bg-[#00CC65]/20">
                      <div className="h-24 w-24 rounded-full bg-[#00CC65]/30 flex items-center justify-center">
                        <div className="h-16 w-16 rounded-full bg-[#00CC65] flex items-center justify-center text-white">
                          <Zap className="h-8 w-8" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Initiatives grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-32 mb-16">
          {features &&
            features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="p-3 rounded-lg bg-[#00CC65]/10 text-[#00CC65] w-fit mb-4">
                  {icons[index]}
                </div>
                <h3 className="text-xl font-bold mb-2 font-primary">{feature.title}</h3>
                <p className="text-muted-foreground font-secondary">{feature.content}</p>
              </div>
            ))}
        </div>

        {/* Bottom CTA */}
        {cta && (
          <div className="bg-[#00CC65]/5 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 font-primary">{cta.title}</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto font-secondary">
              {cta.description}
            </p>
            {(cta?.links || []).map(({ link }: any, i: number) => {
              return (
                <Button
                  asChild
                  size="lg"
                  className="bg-[#00CC65] hover:bg-[#00b359] text-white"
                  key={i}
                >
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
