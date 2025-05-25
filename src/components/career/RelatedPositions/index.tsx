import React from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { MapPin, Clock, Briefcase } from 'lucide-react'

interface JobData {
  title: string
  department: string
  location: string
  type: string
  description: string
}

interface RelatedPositionsProps {
  jobsData: Record<string, JobData>
  currentSlug: string
}

export default function RelatedPositions({ jobsData, currentSlug }: RelatedPositionsProps) {
  const relatedJobs = Object.entries(jobsData)
    .filter(([slug]) => slug !== currentSlug)
    .slice(0, 3)

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold font-primary mb-8 text-center">Other Open Positions</h2>
        <div className="grid gap-6">
          {relatedJobs.map(([slug, relatedJob]) => (
            <Card key={slug} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2 font-primary">{relatedJob.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Briefcase className="h-3.5 w-3.5" />
                        <span>{relatedJob.department}</span>
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>{relatedJob.location}</span>
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{relatedJob.type}</span>
                      </Badge>
                    </div>
                    <p className="text-muted-foreground font-secondary">{relatedJob.description}</p>
                  </div>
                  <Button asChild className="whitespace-nowrap">
                    <Link href={`/career/${slug}`}>View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="outline" size="lg">
            <Link href="/career">View All Open Positions</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
