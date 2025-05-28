import { Service } from '@/payload-types'

export default function ServiceFeatures({
  serviceName,
  features,
}: {
  serviceName: string
  features: Service['features']
}) {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose VUP?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our {serviceName.toLowerCase()} services are designed to meet your specific needs and
            help you achieve your goals.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {features?.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 ${
                features.length % 2 === 1 && index === features.length - 1
                  ? 'md:col-span-2 md:max-w-md md:mx-auto'
                  : ''
              }`}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-600 rounded-t-2xl"></div>

              <div className="flex items-start space-x-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 flex items-center gap-x-2">
                    {feature.feature}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-basse">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
