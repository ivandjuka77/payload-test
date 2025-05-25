import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft, MapPin, Clock, Briefcase } from 'lucide-react'
import RichText from '@/components/RichText'
import { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

interface JobData {
  title: string
  category: string
  location: string
  type: string
  description: DefaultTypedEditorState
}

interface JobHeaderProps {
  job: JobData
}

export default function JobHeader({ job }: JobHeaderProps) {
  return (
    <>
      {/* Breadcrumb Navigation */}
      <section className="bg-gray-50 py-6">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/career" className="hover:text-primary transition-colors">
              Careers
            </Link>
            <span>/</span>
            <span className="text-foreground">{job.title}</span>
          </div>
        </div>
      </section>

      {/* Job Header */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Button asChild variant="outline" size="sm">
              <Link href="/career">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Careers
              </Link>
            </Button>
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold font-primary mb-4">{job.title}</h1>
            <div className="flex flex-wrap gap-3 mb-6">
              <Badge variant="outline" className="flex items-center gap-1">
                <Briefcase className="h-3.5 w-3.5" />
                <span>{job.category}</span>
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" />
                <span>{job.location}</span>
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                <span>{job.type}</span>
              </Badge>
            </div>
            <div className="text-lg text-muted-foreground font-secondary leading-relaxed">
              {job.description && <RichText data={job.description} enableGutter={false} />}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
