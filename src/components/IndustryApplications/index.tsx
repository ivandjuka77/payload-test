import { Badge } from '@/components/ui/badge'
import { ProductCategory } from '@/payload-types'

interface IndustryApplicationsProps {
  title: string
  description: string
  applications: ProductCategory['applications']
}

export function IndustryApplications({
  title,
  description,
  applications,
}: IndustryApplicationsProps) {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-gray-50/80 px-4 sm:px-6 lg:px-0">
      <div className="container mx-auto">
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <Badge
            variant="outline"
            className="mb-4 px-3 py-1 border-primary/20 text-primary bg-primary/5"
          >
            Applications
          </Badge>
          <h2 className="font-primary text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
            {title}
          </h2>
          <p className="font-secondary text-base md:text- lg text-muted-foreground max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {applications?.map((app, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-gray-100 aspect-[16/9]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transform group-hover:scale-[1.01] transition-transform duration-300"
                //@ts-expect-error - Type seems to be wrong, but it's a Media type and url exists
                style={{ backgroundImage: `url(${app.imageSrc?.url})` }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/30 opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Content Container */}
              <div className="absolute inset-x-0 bottom-0 transition-transform duration-300 ease-out group-hover:-translate-y-2">
                {/* Main Content */}
                <div className="p-4 transition-all duration-250">
                  <h3 className="text-lg md:text-xl font-secondary font-medium text-white group-hover:text-blue-300 transition-colors">
                    {app.title}
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-gray-300 max-h-[3rem] md:max-h-[3.2rem] overflow-hidden group-hover:max-h-96 opacity-85 transition-[max-height] duration-300 ease-in-out">
                    {app.description}
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
