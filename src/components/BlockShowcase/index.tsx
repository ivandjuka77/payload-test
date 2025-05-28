import { Card, CardContent } from '@/components/ui/card'
import { Product } from '@/payload-types'
import { CheckCircle } from 'lucide-react'

interface BlockShowcaseProps {
  title: string
  description: string
  features: Product['keyFeatures']
}

export function BlockShowcase(props: BlockShowcaseProps) {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4 font-primary">
            Key Features & Benefits
          </h2>
          <p className="text-xl text-muted-foreground max-w-[800px] font-secondary">
            {props.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {props.features.map((feature, index) => (
            <Card
              key={index}
              className="border-primary/10 shadow-sm hover:shadow-md transition-shadow"
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="mr-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold font-primary">{feature.feature}</h3>
                </div>
                <p className="text-muted-foreground font-secondary">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
