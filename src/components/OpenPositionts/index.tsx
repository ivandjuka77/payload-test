import { Badge } from '../ui/badge'
import { Briefcase, Building, Users } from 'lucide-react'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function index({ positions }: { positions: any[] }) {
  return (
    <section className="py-24 bg-white" id="open-positions">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Opportunities
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-primary">Open Positions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-secondary">
            Join our team and be part of creating innovative chemical solutions for a sustainable
            future.
          </p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {positions.map((position: any, index: number) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold mb-2 font-primary">{position.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Briefcase className="h-3.5 w-3.5" />
                      <span>{position.department}</span>
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Building className="h-3.5 w-3.5" />
                      <span>{position.location}</span>
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Users className="h-3.5 w-3.5" />
                      <span>{position.type}</span>
                    </Badge>
                  </div>
                  <p className="text-muted-foreground font-secondary">{position.description}</p>
                </div>
                <Link href={`/careers/${position.slug}`}>
                  <Button className="whitespace-nowrap">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
