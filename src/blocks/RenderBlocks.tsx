import { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { QuickAccessSection } from '@/blocks/QuickAccess/Component'
import { ProductShowcaseBlock } from '@/blocks/ProductShowcase/Component'
import { CareerSection } from '@/blocks/Career/Component'
import { SustainabilitySection } from '@/blocks/SustainabilitySection/Component'
import { ContentImage } from '@/blocks/ContentImage/Component'
import { IndustryGrid } from './IndustryShowcase/Component'
import { Showcase } from '@/blocks/Showcase/Component'
import { NewsSection } from '@/blocks/News/Component'
import { ProductFilter } from '@/blocks/ProductFilter/Component'
import { VerticalCards } from '@/blocks/VerticalCards/Component'
import { GridImageCards } from '@/blocks/GridImageCards/Component'
import { Careers } from '@/blocks/Careers/Component'

const blockComponents = {
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  quickAccess: QuickAccessSection,
  productShowcase: ProductShowcaseBlock,
  career: CareerSection,
  sustainability: SustainabilitySection,
  contentImage: ContentImage,
  industryShowcase: IndustryGrid,
  showcase: Showcase,
  news: NewsSection,
  productFilter: ProductFilter,
  verticalCards: VerticalCards,
  gridImageCards: GridImageCards,
  careers: Careers,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
