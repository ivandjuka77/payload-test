import type { Media } from '@/payload-types'

type IndustriesArgs = {
  featuredImage1: Media
}

export function industries(args: IndustriesArgs) {
  const { featuredImage1 } = args

  return {
    title: 'Industries',
    hero: {
      type: 'backgroundImage',
      title: 'Industries We Serve',
      description:
        'At VUP, we develop, manufacture, and supply specialized chemical solutions that power innovation across diverse industries worldwide. Our deep expertise and commitment to quality enable our customers to create products that meet the highest performance, safety, and sustainability standards.',
      cta: {
        links: [],
      },
      media: featuredImage1,
      slides: [],
    },
    layout: [
      {
        blockName: null,
        title: 'Enabling Performance Across Markets',
        content: {
          root: {
            children: [
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'For over 70 years, VUP has been a trusted partner to industry-leading companies worldwide. Our specialized chemical expertise allows us to create tailored solutions that address the unique challenges and requirements of diverse markets.',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },
              {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Custom synthesis capabilities for specialized applications',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 1,
                  },
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Sustainable chemistry innovations to meet environmental goals',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 2,
                  },
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'High-purity products for demanding technical requirements',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 3,
                  },
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Reliable global supply chain with European manufacturing',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 4,
                  },
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Technical support from development to implementation',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 5,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'list',
                version: 1,
                listType: 'bullet',
                start: 1,
                tag: 'ul',
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            type: 'root',
            version: 1,
          },
        },
        image: featuredImage1,
        blockType: 'contentImage',
      },
    ],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    slug: 'industries',
    _status: 'published',
  }
}
