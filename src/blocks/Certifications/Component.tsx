import { Media } from '@/components/Media'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CertificationsBlock } from '@/payload-types'
import { Target, Star, ArrowRight, BadgeCheck } from 'lucide-react'
import Link from 'next/link'

function FeaturedCertification({
  certification,
}: {
  certification: CertificationsBlock['featuredCertification']
}) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-green-600  to-green-400 shadow-md hover:shadow-lg transition-all duration-300">
      <div className="flex flex-col md:flex-row h-full">
        {/* Left content */}
        <div className="pl-16 py-16 md:w-3/5 flex flex-col justify-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white text-green-600 text-sm font-medium mb-6 w-fit">
            <Star className="w-4 h-4 mr-2" />
            <span>Featured Achievement</span>
          </div>

          <h3 className="text-2xl md:text-4xl font-bold mb-4 font-primary text-white">
            {certification.title}
          </h3>

          {certification.subtitle && (
            <div className="text-lg italic text-white/90 mb-4 font-secondary">
              {certification.subtitle}
            </div>
          )}

          <p className="text-white/80 mb-6 font-secondary">{certification.description}</p>

          {certification.articleLink && (
            <Link
              href={certification.articleLink}
              className="inline-flex items-center gap-2 w-fit group/btn bg-transparent border border-white text-white hover:bg-white hover:text-green-600 px-8 py-2 rounded-md"
            >
              Read Full Article
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          )}
        </div>

        <div className="relative md:w-2/5 h-96 md:h-auto overflow-hidden">
          <Media
            resource={certification.image}
            alt={`${certification.title} badge`}
            fill
            imgClassName="object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-transparent md:from-transparent md:to-transparent" />
        </div>
      </div>
    </div>
  )
}

function RegularCertification({
  certification,
}: {
  certification: NonNullable<CertificationsBlock['certifications']>[0]
}) {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1 bg-green-500/10 ">
      <CardHeader className="pb-2">
        <div className="flex justify-center mb-3">
          {!certification.image ? (
            <div className="w-20 h-16 bg-transparent rounded flex items-center justify-center overflow-hidden relative">
              <Media
                resource={certification.image}
                alt={`${certification.title} badge`}
                fill
                imgClassName="object-contain"
              />
            </div>
          ) : (
            <div className="w-20 h-16 bg-transparent rounded flex items-center justify-center overflow-hidden relative">
              <BadgeCheck className="w-10 h-10 text-muted-foreground" />
            </div>
          )}
        </div>
        <div className="text-center">
          <CardTitle className="font-primary text-sm leading-tight mb-1">
            {certification.title}
          </CardTitle>
          {certification.subtitle && (
            <CardDescription className="font-secondary text-xs text-muted-foreground">
              {certification.subtitle}
            </CardDescription>
          )}
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="font-secondary text-xs leading-relaxed text-muted-foreground text-center">
          {certification.description}
        </p>
      </CardContent>
    </Card>
  )
}

export const CertificationsSection: React.FC<CertificationsBlock> = async ({
  title,
  subtitle,
  featuredCertification,
  certifications,
}) => {
  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-3">
            <Badge variant="outline" className="bg-green-50 border-green-200 text-green-800">
              <Target className="w-4 h-4 mr-2" />
              Certifications
            </Badge>
          </div>
          <h2 className="font-primary text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">{title}</h2>
          <p className="font-secondary text-sm text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {featuredCertification && (
          <div className="mb-8">
            <FeaturedCertification certification={featuredCertification} />
          </div>
        )}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications &&
            certifications.map((certification) => (
              <RegularCertification key={certification.id} certification={certification} />
            ))}
        </div>
      </div>
    </section>
  )
}
