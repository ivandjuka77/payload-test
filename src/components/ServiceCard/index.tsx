import { Media } from '@/components/Media'
import { Badge } from '@/components/ui/badge'
import { Button } from '../ui/button'
import Link from 'next/link'

export function ServiceCard({ service }: { service: any }) {
  return (
    <div className="group bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all h-full">
      <div className="relative h-48 overflow-hidden">
        <Media
          resource={service.featuredImage}
          fill
          imgClassName="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        {service.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {service.tags.map((tag: any, index: any) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-primary/10 text-primary hover:bg-primary/20"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
        <h3 className="text-xl font-semibold mb-2 font-primary group-hover:text-primary transition-colors">
          {service.name}
        </h3>
        <p className="text-muted-foreground text-sm font-secondary mb-4">{service.description}</p>
        <Button
          variant="outline"
          className="text-primary border-primary/20 hover:bg-primary/5 hover:text-primary/90 w-full"
          asChild
        >
          <Link href={service.link}>View Service Details</Link>
        </Button>
      </div>
    </div>
  )
}
