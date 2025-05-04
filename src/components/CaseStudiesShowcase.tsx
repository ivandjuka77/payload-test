import Image from 'next/image'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CaseStudiesShowcase({ title, description, caseStudies }: any) {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4 font-primary">
            {title || 'Success Stories'}
          </h2>
          <p className="text-xl text-muted-foreground max-w-[800px] font-secondary">
            {description || 'Discover how our products create value in real-world applications'}
          </p>
        </div>

        <div
          className={
            'grid grid-cols-1 gap-6   mx-auto ' +
            (caseStudies.length === 2 ? 'md:grid-cols-2 max-w-4xl' : 'md:grid-cols-3 max-w-6xl')
          }
        >
          {/* Map the case studies */}
          {caseStudies.map((study: any, index: any) => (
            <Card
              key={index}
              className="shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="relative h-48">
                <Image src={study.imageSrc} alt={study.imageAlt} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <Badge className="absolute top-3 left-3 bg-primary/90 hover:bg-primary border-none text-white">
                  {study.industry}
                </Badge>
              </div>

              <CardContent className="p-5">
                <h3 className="text-lg font-bold mb-2 font-primary line-clamp-2">{study.title}</h3>
                <p className="text-xs text-muted-foreground mb-3 font-medium">
                  <span className="text-primary">Application:</span> {study.application}
                </p>
                <p className="text-sm text-muted-foreground line-clamp-3 font-secondary">
                  {study.problem.substring(0, 120)}...
                </p>
              </CardContent>

              <CardFooter className="p-5 pt-0">
                <Button variant="ghost" className="text-primary p-0 h-auto" asChild>
                  <a href="#">
                    Read Case Study <ArrowRight className="ml-1 h-3 w-3" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button
            variant="outline"
            className="border-primary/20 text-primary hover:bg-primary/5"
            asChild
          >
            <a href="#">
              View All Case Studies <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
