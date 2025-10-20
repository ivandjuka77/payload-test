import type { Media, User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  featuredImage: Media
  author: User
}

export const post2: (args: PostArgs) => RequiredDataFromCollectionSlug<'posts'> = ({
  featuredImage,
  author,
}) => {
  return {
    title: 'VUP Cosmetics launches upgraded online store on Shoptet',
    type: 'news',
    featured: false,
    description:
      'The cosmetics branch of VUP, a.s. has completed a digital upgrade with the launch of its new online store on the Shoptet platform.',
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
                text: 'The cosmetics branch of VUP, a.s. has completed a digital upgrade with the launch of its new online store on the Shoptet platform. The move brings a modern, user-friendly interface and streamlined shopping experience to the company’s loyal customer base.',
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
                text: 'The updated e-shop offers detailed product information, clear categorization, and responsive design across all devices. Customers can now access VUP’s portfolio of creams, gels, and personal-care formulations more conveniently, supported by faster navigation and improved order processing.',
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
                text: '“The Shoptet system allows us to serve our customers with the same precision and reliability that define our laboratory and production work,” said the director of VUP’s cosmetics division. “It’s a step toward better accessibility and transparency for consumers who value science-based care made in Slovakia.”',
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
                text: 'The upgrade also supports future integrations with VUP’s internal systems and marketing channels, ensuring a seamless connection between production, research, and customer service.',
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
                text: 'Visit the new cosmetics platform: ',
                version: 1,
              },
              {
                type: 'link',
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'https://www.vupcosmetics.sk/',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 3,
                fields: {
                  linkType: 'custom',
                  url: 'https://www.vupcosmetics.sk/',
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
    tags: [
      { tag: 'VUP Cosmetics' },
      { tag: 'E-commerce' },
      { tag: 'Shoptet' },
      { tag: 'Slovakia' },
    ],
    meta: {
      title: 'VUP Cosmetics Launches New E-commerce Store on Shoptet',
      description:
        "VUP's cosmetics division launches its new online store on the Shoptet platform, offering a modern, user-friendly shopping experience.",
      image: featuredImage.id,
    },
    publishedAt: '2025-10-20T11:00:00.000Z',
    slug: 'vup-cosmetics-launches-shoptet-store',
    _status: 'published',
  }
}
