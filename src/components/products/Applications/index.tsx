import { Product } from '@/payload-types'

interface ApplicationsAndIndustriesProps {
  product: Product
}

export function ApplicationsAndIndustries({ product }: ApplicationsAndIndustriesProps) {
  return (
    <section className="w-full relative py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4 font-primary">
            Applications & Industries
          </h2>
          <p className="text-lg text-muted-foreground max-w-[800px] font-secondary">
            {product.description}
          </p>
        </div>

        <div
          className={`grid grid-cols-1 ${product.applications.length % 2 === 0 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'} gap-4`}
        >
          {product.applications.map((item) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-lg border border-gray-100 ${product.applications.length % 2 === 0 ? 'aspect-[5/2]' : 'aspect-[16/9]'}`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transform group-hover:scale-[1.01] transition-transform duration-300"
                //@ts-expect-error - Type seems to be wrong, but it's a Media type and url exists
                style={{ backgroundImage: `url(${item.image?.url})` }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20 opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Content Container */}
              <div className="absolute inset-x-0 bottom-0 transition-transform duration-300 ease-out group-hover:-translate-y-2">
                {/* Main Content */}
                <div className="p-4 transition-all duration-250">
                  <h3 className="text-lg font-secondary font-medium text-white group-hover:text-blue-300 transition-colors">
                    {item.application}
                  </h3>
                  <p className="mt-2 text-sm text-gray-300 opacity-85">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
