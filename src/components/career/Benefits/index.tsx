import { CheckCircle2 } from 'lucide-react'

interface BenefitsSectionProps {
  benefits: string[] | null
}

export default function BenefitsSection({ benefits }: BenefitsSectionProps) {
  if (!benefits) return null

  return (
    <section className="py-16 bg-gray-50" id="benefits-section">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold font-primary mb-8 text-center">
          Complete Benefits Package
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="font-secondary">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
