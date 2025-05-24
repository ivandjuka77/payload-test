'use client'

import { CardTitle } from '@/components/ui/card'
import { Media as MediaType, VerticalCardsBlock } from '@/payload-types'
import { Badge } from '@/components/ui/badge'
import { Leaf } from 'lucide-react'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

interface PillarProps {
  card: {
    image: number | MediaType
    title: string
    subtitle?: string | null
    paragraph?: any
  }
  index: number
  orientation: 'left' | 'right'
}

function Pillar({ card, index, orientation }: PillarProps) {
  return (
    <div className="relative group overflow-hidden rounded-xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300">
      <div className="grid lg:grid-cols-2 gap-0">
        {orientation === 'left' ? (
          <>
            {/* Image Section */}
            <div className="relative h-[400px] overflow-hidden">
              <Media resource={card.image} alt={card.title} fill imgClassName="object-cover" />
              <div
                className="absolute inset-y-0 right-0 w-[300px]"
                style={{
                  background: 'linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,1))',
                }}
              />
            </div>

            {/* Content Section */}
            <div className="p-8 flex flex-col justify-center relative">
              <div className="absolute top-6 right-6 font-bold text-6xl text-[hsl(149.71,100%,40%)]/10 group-hover:text-[hsl(149.71,100%,40%)]/80 transition-all duration-300">
                {(index + 1).toString().padStart(2, '0')}
              </div>

              <CardTitle className="text-2xl font-primary mb-3">{card.title}</CardTitle>
              <p className="text-lg font-medium text-[hsl(149.71,100%,40%)] mb-4 font-secondary">
                {card.subtitle}
              </p>
              <p className="text-muted-foreground font-secondary">
                <RichText data={card.paragraph || ''} className="mx-0 px-0" />
              </p>
            </div>
          </>
        ) : (
          <>
            {/* Content Section */}
            <div className="p-8 flex flex-col justify-center relative">
              <div className="absolute top-6 left-6 font-bold text-6xl text-[hsl(149.71,100%,40%)]/10 group-hover:text-[hsl(149.71,100%,40%)]/80 transition-all duration-300">
                {(index + 1).toString().padStart(2, '0')}
              </div>

              <CardTitle className="text-2xl font-primary mb-3">{card.title}</CardTitle>
              <p className="text-lg font-medium text-[hsl(149.71,100%,40%)] mb-4 font-secondary">
                {card.subtitle}
              </p>
              <p className="text-muted-foreground font-secondary">
                <RichText data={card.paragraph || ''} className="mx-0 px-0" />
              </p>
            </div>

            {/* Image Section */}
            <div className="relative h-[400px] overflow-hidden">
              <Media resource={card.image} alt={card.title} fill imgClassName="object-cover" />
              <div
                className="absolute inset-y-0 left-0 w-[300px]"
                style={{
                  background: 'linear-gradient(to left, rgba(255,255,255,0), rgba(255,255,255,1))',
                }}
              />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export const VerticalCards: React.FC<VerticalCardsBlock> = ({ title, subtitle, cards }) => {
  //   const pillars = [
  //     {
  //       title: 'Environmental Responsibility',
  //       description: 'Minimizing Environmental Impact Through Innovation',
  //       content:
  //         "Our commitment to environmental stewardship drives every aspect of our operations. Through efficient resource management, waste reduction initiatives, and innovative green chemistry R&D, we're continuously working to reduce our environmental footprint. Our water management systems and emissions control technologies represent industry-leading practices in sustainable chemical manufacturing.",
  //       image:
  //         'https://images.unsplash.com/photo-1594790632591-1e21e4c3dfc9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     },
  //     {
  //       title: 'Labor & Human Rights',
  //       description: 'Fostering a Safe and Inclusive Workplace',
  //       content:
  //         'We believe our success is built on the well-being of our people. Our comprehensive approach to workplace safety, professional development, and employee welfare sets industry standards. Through robust health and safety protocols, continuous training programs, and inclusive policies, we ensure every team member can thrive in a supportive and respectful environment.',
  //       image:
  //         'https://images.unsplash.com/photo-1616996691748-3f5f78093ab0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     },
  //     {
  //       title: 'Ethics & Governance',
  //       description: 'Upholding the Highest Standards of Business Conduct',
  //       content:
  //         'Integrity is fundamental to our operations. Our governance framework ensures compliance with all applicable regulations while promoting transparent business practices. From data security to anti-corruption measures, we maintain rigorous standards that build trust with our stakeholders and set an example for ethical business conduct in the chemical industry.',
  //       image:
  //         'https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     },
  //     {
  //       title: 'Sustainable Procurement',
  //       description: 'Building Responsible Supply Chains',
  //       content:
  //         "Our commitment to sustainability extends throughout our supply chain. We carefully select and collaborate with suppliers who share our values and meet our stringent environmental and social standards. Through regular evaluations and partnerships, we're working to create a more sustainable and responsible chemical supply chain that benefits all stakeholders.",
  //       image:
  //         'https://images.unsplash.com/photo-1713078044558-cdb22828cf07?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     },
  //   ]

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge
            variant="outline"
            className="mb-6 px-4 py-1 border-[hsl(149.71,100%,40%)]/20 text-[hsl(149.71,100%,40%)] bg-[hsl(149.71,100%,40%)]/5"
          >
            <Leaf className="w-4 h-4 mr-2" />
            Our Approach
          </Badge>

          <h2 className="text-4xl font-bold font-primary mb-6">{title}</h2>
          <p className="text-xl text-muted-foreground font-secondary">{subtitle}</p>
        </div>

        <div className="space-y-8">
          {cards &&
            cards.map((card, index) => (
              <Pillar
                key={index}
                card={card}
                index={index}
                orientation={index % 2 === 0 ? 'left' : 'right'}
              />
            ))}
        </div>
      </div>
    </section>
  )
}
