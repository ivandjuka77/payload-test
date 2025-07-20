import { Media } from '@/components/Media'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CertificationsBlock } from '@/payload-types'
import { ArrowRight, BadgeCheck, Star, Target } from 'lucide-react'
import Link from 'next/link'

function FeaturedCertification({
  certification,
}: {
  certification: CertificationsBlock['featuredCertification']
}) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-green-600  to-green-400 shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="flex h-full flex-col md:flex-row">
        {/* Left content */}
        <div className="flex flex-col justify-center px-8 pt-12 text-center md:w-3/5 md:py-16 md:pl-16 md:text-left">
          <div className="mx-auto mb-6 inline-flex w-fit items-center rounded-full bg-white px-3 py-1 text-sm font-medium text-green-600 md:mx-0">
            <Star className="mr-2 h-4 w-4" />
            <span>Featured Achievement</span>
          </div>

          <h3 className="font-primary text-3xl font-bold text-white md:text-4xl mb-4">
            {certification.title}
          </h3>

          {certification.subtitle && (
            <div className="font-secondary mb-4 text-lg italic text-white/90">
              {certification.subtitle}
            </div>
          )}

          <p className="font-secondary mb-6 text-white/80 text-sm md:text-base">
            {certification.description}
          </p>

          {certification.articleLink && (
            <Link
              href={certification.articleLink}
              className="group/btn mx-auto inline-flex w-fit items-center gap-2 rounded-md border border-white bg-transparent px-8 py-2 text-white hover:bg-white hover:text-green-600 md:mx-0"
            >
              Read Full Article
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          )}
        </div>

        <div className="relative h-44 md:h-auto md:w-2/5 sm:h-96">
          <Media
            resource={certification.image}
            alt={`${certification.title} badge`}
            fill
            imgClassName="object-contain p-8"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-green-600/50 via-green-600/10 to-transparent md:bg-gradient-to-r md:from-green-600/20" />
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
    <Card className="h-full bg-green-500/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-md ">
      <CardHeader className="pb-2">
        <div className="mb-3 flex justify-center">
          {certification.image ? (
            <div className="relative flex h-16 w-20 items-center justify-center overflow-hidden rounded bg-transparent">
              <Media
                resource={certification.image}
                alt={`${certification.title} badge`}
                fill
                imgClassName="object-contain"
              />
            </div>
          ) : (
            <div className="relative flex h-16 w-20 items-center justify-center overflow-hidden rounded bg-transparent">
              <BadgeCheck className="h-10 w-10 text-muted-foreground" />
            </div>
          )}
        </div>
        <div className="text-center">
          <CardTitle className="font-primary mb-1 text-sm leading-tight">
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
        <p className="font-secondary text-center text-sm leading-relaxed text-muted-foreground">
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
    <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-0">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-3 flex justify-center">
            <Badge variant="outline" className="border-green-200 bg-green-50 text-green-800">
              <Target className="mr-2 h-4 w-4" />
              Certifications
            </Badge>
          </div>
          <h2 className="font-primary mb-3 text-2xl font-bold sm:text-3xl lg:text-4xl">{title}</h2>
          <p className="font-secondary mx-auto max-w-3xl text-sm leading-relaxed text-muted-foreground">
            {subtitle}
          </p>
        </div>

        {featuredCertification && (
          <div className="mb-8">
            <FeaturedCertification certification={featuredCertification} />
          </div>
        )}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications &&
            certifications.map((certification) => (
              <RegularCertification key={certification.id} certification={certification} />
            ))}
        </div>
      </div>
    </section>
  )
}
