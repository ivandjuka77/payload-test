import Link from 'next/link'
import { ArrowRight, Briefcase, Building, Users } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { queryCareers } from '@/utilities/queryCareers'
import RichText from '@/components/RichText'
import { CareersBlock, Career } from '@/payload-types'

export const Careers: React.FC<CareersBlock> = async ({ title, description }) => {
  const careers = await queryCareers({ limit: 5 })

  return (
    <section className="w-full py-24 bg-white" id="career-listings">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-primary">{title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-secondary">
            {description}
          </p>
        </div>

        <div className="grid gap-y-10 w-full mx-auto">
          {careers.map((position: Career, index: number) => (
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
                      <span>{position.category}</span>
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
                  <p className="text-muted-foreground font-secondary line-clamp-3 mr-14">
                    {position.description && (
                      <RichText data={position.description} enableGutter={false} />
                    )}
                  </p>
                </div>
                <Link
                  href={`/career/${position.slug}`}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
