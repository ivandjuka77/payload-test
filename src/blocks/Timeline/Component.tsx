'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/utilities/ui'
import RichText from '@/components/RichText'
import { TimelineBlock } from '@/payload-types'
import { Media } from '@/components/Media'
import { CheckCircle2 } from 'lucide-react'

export const Timeline: React.FC<{
  items: TimelineBlock['items']
  title: string
  subtitle: string
  badge: string
}> = (props) => {
  const { items, title, subtitle, badge } = props

  return (
    <section className="w-full py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-4">
            {badge}
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-primary font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-base lg:text-lg font-secondary text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div
            className={cn(
              'absolute left-6 lg:left-1/2 lg:transform lg:-translate-x-1/2 h-full w-0.5',
              'bg-gradient-to-b from-blue-200 via-blue-400 to-blue-500',
            )}
          />

          {items.map((item, index) => (
            // Timeline Item Wrapper
            <div
              key={item.period}
              className={cn(
                'relative flex flex-col lg:items-center mb-16 lg:mb-32 last:mb-0',
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse',
              )}
            >
              {/* Timeline Dot */}
              <div
                className={cn(
                  'absolute top-4 lg:top-auto left-6 lg:left-1/2 transform -translate-x-1/2',
                  'w-14 h-14 rounded-full bg-white shadow-xl border-2 border-primary flex items-center justify-center z-10',
                )}
              >
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-primary rounded-full" />
                  </div>
                </div>
              </div>

              {/* Text Content Block */}
              <motion.div
                className={cn(
                  'w-full lg:w-1/2 pl-16 pr-6 lg:px-12',
                  index % 2 === 0 ? 'lg:pr-24' : 'lg:pl-24',
                  'mb-8 lg:mb-0', // Add margin-bottom on mobile to separate from image
                )}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{
                  duration: 0.9,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: index * 0.1,
                }}
              >
                <div className="bg-white rounded-xl shadow-xl p-6 lg:p-8 relative overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                  <div
                    className={
                      'absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-primary/50'
                    }
                  />
                  <Badge variant="secondary" className="mb-3">
                    {item.highlight}
                  </Badge>
                  <h3 className="font-primary text-2xl lg:text-3xl font-bold text-primary mb-3">
                    {item.period}
                  </h3>
                  <div className="font-secondary text-gray-600 mb-6 leading-relaxed">
                    {item.content && (
                      <RichText
                        className="!text-foreground text-sm md:text-base"
                        data={item.content}
                      />
                    )}
                  </div>

                  {/* Key Achievements */}
                  {item.keyAchievements && item.keyAchievements.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <h4 className="font-primary text-xs font-semibold text-gray-500 mb-3">
                        KEY ACHIEVEMENTS
                      </h4>
                      <div className="space-y-2">
                        {item.keyAchievements.map((item, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <p className="text-sm text-gray-600">{item.achievement}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Image Block */}
              <motion.div
                className={cn(
                  'w-full lg:w-1/2 pl-16 pr-6 lg:px-12',
                  'flex', // Use flex to allow justification
                  index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end',
                )}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{
                  duration: 0.9,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: index * 0.1,
                }}
              >
                <div className="relative w-full max-w-2xl aspect-[16/10] lg:aspect-[16/14] rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl">
                  <Media
                    resource={item.imageUrl}
                    fill
                    imgClassName="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
                    <p className="text-white text-base lg:text-lg font-semibold mb-2">
                      {item.highlight}
                    </p>
                    <p className="text-white/80 text-sm">
                      {item.keyAchievements?.[0]?.achievement}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
