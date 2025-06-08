import { Service } from '@/payload-types'
import { CheckCircle } from 'lucide-react'

export default function ServiceFeatures({
  serviceName,
  features,
}: {
  serviceName: string
  features: Service['features']
}) {
  return (
    <section className="w-full py-20 bg-white px-4 sm:px-6 lg:px-0">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl mb-4 font-primary">
            Why Choose VUP?
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-[800px] font-secondary">
            Our {serviceName.toLowerCase()} services are designed to meet your specific needs and
            help you achieve your goals.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {features?.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50/50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <h4 className="text-xl md:text-2xl font-semibold flex flex-row items-center gap-x-4 mb-3 font-primary ">
                <CheckCircle className="h-6 w-6 text-primary" />
                {feature.feature}
              </h4>
              <p className="text-muted-foreground font-secondary text-sm md:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
