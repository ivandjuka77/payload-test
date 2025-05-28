import type { Page } from '@/payload-types'

import { CarouselHero } from '@/heros/CarouselHero'
import { SimpleHero } from '@/heros/Simple'
import { BackgroundImage } from '@/heros/BackgroundImage'
import { BackgroundImageCompact } from '@/heros/BackgroundImageCompact'
import { MinimalHero } from '@/heros/MinimalHero'

const heroes = {
  carousel: CarouselHero,
  simple: SimpleHero,
  backgroundImage: BackgroundImage,
  backgroundImageCompact: BackgroundImageCompact,
  minimal: MinimalHero,
}

export const RenderHero: React.FC<Page['hero']> = (props) => {
  const { type } = props || {}

  if (!type || type === 'none') return null

  const HeroToRender = heroes[type]

  if (!HeroToRender) return null

  return <HeroToRender {...props} />
}

// export const RenderCarouselHero: React.FC<Page['carouselHero']> = (props) => {
//   return <CarouselHero {...props} />
// }
