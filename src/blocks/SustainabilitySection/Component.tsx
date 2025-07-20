import { Recycle, Globe, Droplet, TreePine, Factory, Zap } from 'lucide-react'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { SustainabilityBlock } from '@/payload-types'
import SimpleCTA from '@/components/SimpleCTA'

export const SustainabilitySection: React.FC<SustainabilityBlock> = ({
  title,
  subtitle,
  image,
  card,
  features,
  cta,
}) => {
  //TODO: Remove hardcoded icons
  const icons = [
    <Recycle key="recycle" className="w-5 h-5 sm:w-6 sm:h-6" />,
    <Droplet key="droplet" className="w-5 h-5 sm:w-6 sm:h-6" />,
    <Factory key="factory" className="w-5 h-5 sm:w-6 sm:h-6" />,
    <TreePine key="tree" className="w-5 h-5 sm:w-6 sm:h-6" />,
  ]

  return (
    <section className="w-full py-12 sm:py-14 md:py-16 lg:py-24 relative bg-white px-4 sm:px-6 lg:px-0">
      <div className="container">
        {/* Header section */}
        <div className="max-w-2xl sm:max-w-3xl mx-auto text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center px-3 sm:px-4 py-1 rounded-full bg-[#e8f5ed] text-[#00CC65] text-xs sm:text-sm font-medium mb-4 sm:mb-5 md:mb-6">
            <Globe className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            <span>Environmental Stewardship</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight font-primary mb-4 sm:mb-5 md:mb-6">
            {title}
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-secondary">
            {subtitle}
          </p>
        </div>

        {/* Main content with image and text */}
        <div className="relative mb-16 sm:mb-20 md:mb-24">
          <div className="rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden">
            <Media
              resource={image}
              alt="Sustainable chemical facility with solar panels and green surroundings"
              imgClassName="object-cover object-top w-full h-[300px] sm:h-[400px] md:h-[500px]"
            />
          </div>

          <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-4 right-4 sm:left-0 sm:right-0 transform translate-y-1/2 hidden md:block">
            <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-6 md:p-8 mx-auto max-w-xs sm:max-w-2xl md:max-w-4xl">
              <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 items-center">
                <div className="md:w-2/3 text-center md:text-left">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 font-primary">
                    {card.title}
                  </h3>
                  {card.description && (
                    <RichText
                      className="text-muted-foreground font-secondary text-sm sm:text-base"
                      data={card.description}
                      enableGutter={false}
                    />
                  )}
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <div className="relative h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32">
                    <div className="absolute inset-0 rounded-full bg-[#00CC65]/10 animate-ping opacity-75"></div>
                    <div className="relative flex items-center justify-center h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 rounded-full bg-[#00CC65]/20">
                      <div className="h-16 w-16 sm:h-18 sm:w-18 md:h-24 md:w-24 rounded-full bg-[#00CC65]/30 flex items-center justify-center">
                        <div className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-full bg-[#00CC65] flex items-center justify-center text-white">
                          <Zap className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Initiatives grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mt-0 sm:mt-24 md:mt-32 mb-10 sm:mb-12 md:mb-16">
          {features &&
            features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="p-2 sm:p-2.5 md:p-3 rounded-lg bg-[#00CC65]/10 text-[#00CC65] w-fit mb-3 sm:mb-4">
                  {icons[index]}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-1.5 sm:mb-2 font-primary">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground font-secondary leading-relaxed">
                  {feature.content}
                </p>
              </div>
            ))}
        </div>

        {/* @ts-expect-error - It's working correctly */}
        {cta && cta?.title && cta?.description && <SimpleCTA cta={cta} variant="sustainability" />}
      </div>
    </section>
  )
}
