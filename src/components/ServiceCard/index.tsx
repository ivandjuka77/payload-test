import { Media } from '@/components/Media'
import Link from 'next/link'
import { Service } from '@/payload-types'

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <Media
          resource={service.featuredImage}
          fill
          imgClassName="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6 flex-grow flex flex-col justify-between">
        {/* {service.tags && service.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {service.tags.map((tag: string, index: number) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-primary/10 text-primary hover:bg-primary/20"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )} */}
        <div>
          <h3 className="text-xl font-semibold mb-2 font-primary group-hover:text-primary transition-colors">
            {service.title}
          </h3>
          <p className="text-muted-foreground text-sm font-secondary mb-4">{service.description}</p>
        </div>
        <Link
          href={`/services/${service.slug}`}
          className="inline-block w-full text-center py-2 px-4 text-primary border border-primary/20 rounded-md hover:bg-primary/5 hover:text-primary/90 transition-colors mt-auto"
        >
          View Service Details
        </Link>
      </div>
    </div>
  )
}
