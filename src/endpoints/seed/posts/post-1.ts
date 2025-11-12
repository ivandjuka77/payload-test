import type { Media, User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  featuredImage: Media
  contentImage: Media
  author: User
}

export const post1: (args: PostArgs) => RequiredDataFromCollectionSlug<'posts'> = ({
  featuredImage,
  contentImage,
  author,
}) => {
  return {
    title:
      'VUP to invest €5 million in new production of specialty chemical intermediates in Nováky',
    type: 'news',
    featured: true,
    description:
      'VUP, a Slovak research and development company, has announced plans for a new €5 million production line in the Nováky industrial park for automated production of DMPA.',
    featuredImage: featuredImage.id,
    author: author,
    content: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'VUP, a Slovak research and development company specializing in advanced chemical intermediates, has announced plans for a new production line in the Nováky industrial park. The investment, valued at approximately €5 million, will enable automated production of dimethylolpropionic acid (DMPA) — a key ingredient used in next-generation coatings, paints, and polymer systems.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'The project builds on VUP’s in-house research and decades of experience in synthesizing specialty molecules for international partners. With the planned annual capacity of around 600 tons, the Nováky plant will represent roughly ten percent of global demand for this material.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
          {
            type: 'block',
            fields: {
              blockName: '',
              blockType: 'mediaBlock',
              media: contentImage.id,
            },
            format: '',
            version: 2,
          },
          {
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Project Details and Technology',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h2',
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'VUP’s technology is based on proprietary know-how developed by its R&D team and supported by earlier EU-funded pilot projects. The company already manufactures small volumes of DMPA and related compounds in Slovakia, with applications ranging from industrial coatings and adhesives to functional polymers used across Europe.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Construction is expected to begin in 2025, with completion planned for 2026. The new plant will be located in a chemical plant in Slovakia, which offers full technical infrastructure and a long industrial tradition. The project will operate within existing zoning and environmental parameters, minimizing its impact on the local community.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
          {
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Future Outlook',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h2',
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: '“Despite the challenges facing Europe’s chemical sector, we believe this investment strengthens the region’s self-sufficiency and competitiveness,” said Roman Karlubík, CEO of VUP, a.s “Our focus remains on innovation, quality, and long-term collaboration with our customers.”',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'VUP continues to expand its portfolio of coating intermediates, cosmetic formulations, and analytical services, serving clients across Europe.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Read the full Forbes Slovakia article here: ',
                version: 1,
              },
              {
                type: 'link',
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 1,
                    mode: 'normal',
                    style: '',
                    text: 'https://www.forbes.sk/investicia-za-pat-milionov-sef-chemickeho-zvazu-chce-v-novakoch-vyrabat-surovinu-na-vyrobu-autolakov',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: 1,
                indent: 0,
                version: 3,
                fields: {
                  linkType: 'custom',
                  url: 'https://www.forbes.sk/investicia-za-pat-milionov-sef-chemickeho-zvazu-chce-v-novakoch-vyrabat-surovinu-na-vyrobu-autolakov',
                  newTab: true,
                },
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    tags: [{ tag: 'Investment' }, { tag: 'Chemistry' }, { tag: 'Slovakia' }, { tag: 'VUP' }],
    meta: {
      title: 'VUP to Invest €5 Million in Nováky Chemical Production',
      description:
        'VUP announces a €5 million investment for a new automated production line of dimethylolpropionic acid (DMPA) in Nováky, Slovakia.',
      image: featuredImage.id,
    },
    publishedAt: '2025-10-20T10:00:00.000Z',
    slug: 'vup-invests-5-million-in-novaky-production',
    _status: 'published',
  }
}
