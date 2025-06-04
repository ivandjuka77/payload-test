'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/utilities/ui'
import RichText from '@/components/RichText'
import { TimelineBlock } from '@/payload-types'
import { Media } from '@/components/Media'
import { CheckCircle2 } from 'lucide-react'

// const timelineData: TimelineBlock['items'] = [
//   {
//     period: '2004-2006',
//     description:
//       'A transformative period marked by groundbreaking research in acetylene chemistry. Our team pioneered new synthetic routes while focusing on environmental sustainability, setting new industry standards for waste reduction in chemical manufacturing.',
//     content: [
//       'Research of 1,2-methylenedioxybenzene preparation products on the base acetylene preparation',
//       '2,5-dimetyl-2,5-hexanediol production by ethynylation acetone',
//       'Progressive chemical materials production on base waste calcium hydroxide and chloride',
//     ],
//     imageUrl:
//       'https://images.pexels.com/photos/3735698/pexels-photo-3735698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     icon: <Beaker className="h-6 w-6 text-primary" />,
//     highlight: 'Acetylene Research',
//     achievements: [
//       'Successfully developed new acetylene-based synthesis routes',
//       'Reduced waste production by 40%',
//       'Implemented sustainable production methods',
//     ],
//   },
//   {
//     period: '2007-2009',
//     description:
//       'A period of significant innovation in catalyst development and green chemistry. We focused on replacing harmful materials with environmentally friendly alternatives while maintaining high performance standards in our chemical processes.',
//     content: [
//       'Research of catalysts for polyurethanes',
//       'Adipic acid dihydrazide production',
//       'Aminonaphthoic acids production',
//       'Utilization home raw material in stable free radical TEMPO and its derivatives preparations',
//       'Chemical specialities',
//       'Production on base of local raw materials of colaminophosphate',
//       'Production of methyl esters of carboxylic acids',
//       'Production of 4-bromo-1-butene and upper w-bromo-a-alkenes',
//       'Replacement of toxic hydrazine by less harmfull materials in energetics',
//     ],
//     imageUrl:
//       'https://images.pexels.com/photos/8539511/pexels-photo-8539511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     icon: <TestTube className="h-6 w-6 text-primary" />,
//     highlight: 'Catalyst Innovation',
//     achievements: [
//       'Pioneered eco-friendly catalyst alternatives',
//       'Established local raw material supply chain',
//       'Reduced toxic material usage by 60%',
//     ],
//   },
//   {
//     period: '2010-2012',
//     description:
//       'This era marked our transition into sustainable chemistry solutions. We developed innovative processes for eco-friendly materials, focusing on reducing environmental impact while enhancing product performance.',
//     content: [
//       'Research of polyurethane dispersion production for application in ecological finishing',
//       'Hydroxypivalic acid production',
//       'Trimethylolethane production',
//       'Alkyl hydroxylamines production',
//       'Natural ketones preparation',
//       'Acrylate esters polyhydric alcohols production',
//     ],
//     imageUrl:
//       'https://images.pexels.com/photos/1048018/pexels-photo-1048018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     icon: <Microscope className="h-6 w-6 text-primary" />,
//     highlight: 'Eco-friendly Solutions',
//     achievements: [
//       'Developed green chemistry processes',
//       'Achieved ISO environmental certification',
//       'Launched sustainable product line',
//     ],
//   },
//   {
//     period: '2013-now',
//     description:
//       "Our current phase represents the pinnacle of our research capabilities, combining advanced technology with sustainable practices. We're pushing boundaries in high-purity synthesis and green chemistry, while maintaining our commitment to innovation and environmental responsibility.",
//     content: [
//       'Research of acrylate esters polyhydric alcohols production',
//       'New products based on acetylene',
//       'Ecological technologies and products based on bioglycerol',
//       'High purity N-tert-Butylmethylamine production',
//       "O,O'-Bis(3-aminopropyl)polyethyleneglycol production",
//       'Green catalyst for benzoin production',
//       'TEMPO-Mediated Oxidation of pulp',
//       'Hindered amine light stabilizers production',
//     ],
//     imageUrl:
//       'https://images.pexels.com/photos/8442102/pexels-photo-8442102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     icon: <Atom className="h-6 w-6 text-primary" />,
//     highlight: 'Advanced Research',
//     achievements: [
//       'Patented 5 new chemical processes',
//       'Achieved 99.9% production purity',
//       'Expanded into biobased materials',
//     ],
//   },
// ]

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
                    {item.content && <RichText data={item.content} />}
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
