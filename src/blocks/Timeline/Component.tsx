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
    <section className="w-full py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            {badge}
          </Badge>
          <h2 className="text-4xl font-primary font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg font-secondary text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-500" />

          {items.map((item, index) => (
            <div
              key={item.period}
              className={cn(
                'relative flex items-center mb-32 last:mb-0',
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse',
              )}
            >
              {/* Timeline dot with icon - Static */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full bg-white shadow-xl border-2 border-primary flex items-center justify-center z-10">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-primary rounded-full" />
                  </div>
                </div>
              </div>

              <motion.div
                className={cn('w-1/2 px-12', index % 2 === 0 ? 'pr-24' : 'pl-24')}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30, y: 10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{
                  duration: 0.9,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: index * 0.1,
                  staggerChildren: 0.1,
                }}
              >
                <div className="bg-white rounded-xl shadow-xl p-8 relative overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                  <div
                    className={
                      'absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-primary/50'
                    }
                  />
                  <Badge variant="secondary" className="mb-3">
                    {item.highlight}
                  </Badge>
                  <h3 className="font-primary text-3xl font-bold text-primary mb-3">
                    {item.period}
                  </h3>
                  <p className="font-secondary text-gray-600 mb-6 leading-relaxed">
                    {item.content && <RichText className="!text-foreground" data={item.content} />}
                  </p>
                  {/* <div className="space-y-2 font-secondary text-gray-700 mb-6">
                    {item.content.map((text, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <p className="leading-relaxed text-sm">{text}</p>
                      </div>
                    ))}
                  </div> */}

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

              <motion.div
                className={cn(
                  'w-1/2 px-12',
                  index % 2 === 0 ? 'flex justify-start' : 'flex justify-end',
                )}
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30, y: 10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{
                  duration: 0.9,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: index * 0.1,
                }}
              >
                <div className="relative w-full max-w-2xl aspect-[16/14] rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl">
                  <Media
                    resource={item.imageUrl}
                    fill
                    imgClassName="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white text-lg font-semibold mb-2">{item.highlight}</p>
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
