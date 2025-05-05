import type { Media } from '@/payload-types'

type HomeArgs = {
  backgroundImage1: Media
  featuredImage1: Media
  featuredCardImage1: Media
  featuredCardImage2: Media
  featuredCardImage3: Media
  backgroundImage2: Media
  featuredImage2: Media
  featuredCardImage4: Media
  featuredCardImage5: Media
  featuredCardImage6: Media
}

export function home(args: HomeArgs) {
  const {
    backgroundImage1,
    featuredImage1,
    featuredCardImage1,
    featuredCardImage2,
    featuredCardImage3,
    backgroundImage2,
    featuredImage2,
    featuredCardImage4,
    featuredCardImage5,
    featuredCardImage6,
  } = args

  return {
    title: 'Home',
    hero: {
      type: 'carousel',
      title: 'VUP Chem',
      description: 'This is the description',
      slides: [
        {
          title: 'Advancing Scientific Research',
          subtitle: 'Pioneering chemical innovations for researchers and academic institutions',
          backgroundImage: backgroundImage1,
          featuredCards: [
            {
              title: 'Research Partnerships',
              description:
                'Collaborate with our scientists on groundbreaking chemical research initiatives',
              image: featuredCardImage1,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/research-partnerships',
                    label: 'Learn More',
                    appearance: 'default',
                  },
                },
              ],
            },
            {
              title: 'Research Partnerships',
              description:
                'Collaborate with our scientists on groundbreaking chemical research initiatives',
              image: featuredCardImage2,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/research-partnerships',
                    label: 'Learn More',
                    appearance: 'default',
                  },
                },
              ],
            },
            {
              title: 'Research Partnerships',
              description:
                'Collaborate with our scientists on groundbreaking chemical research initiatives',
              image: featuredCardImage3,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/research-partnerships',
                    label: 'Learn More',
                    appearance: 'default',
                  },
                },
              ],
            },
          ],
          badge: {
            text: '25+ years of research expertise',
          },
          featuredItem: {
            title: 'Novel Catalytic Systems',
            description:
              'Our latest breakthrough in transition metal catalysis enables reactions at lower temperatures with higher yields.',
            image: featuredImage1,
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/catalytic-systems',
                  label: 'Learn More',
                  appearance: 'default',
                },
              },
            ],
          },
          cta: {
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/solutions',
                  label: 'View Solutions',
                  appearance: 'default',
                },
              },
            ],
          },
        },
        {
          title: 'Industrial Chemical Solutions',
          subtitle: 'High-performance formulations engineered for your production needs',
          backgroundImage: backgroundImage2,
          featuredCards: [
            {
              title: 'Coating Systems',
              description:
                'Advanced polymer coatings with superior durability and corrosion resistance',
              image: featuredCardImage4,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/coating-systems',
                    label: 'Learn More',
                    appearance: 'default',
                  },
                },
              ],
            },
            {
              title: 'Coating Systems',
              description:
                'Advanced polymer coatings with superior durability and corrosion resistance',
              image: featuredCardImage5,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/coating-systems',
                    label: 'Learn More',
                    appearance: 'default',
                  },
                },
              ],
            },
            {
              title: 'Coating Systems',
              description:
                'Advanced polymer coatings with superior durability and corrosion resistance',
              image: featuredCardImage6,
              links: [
                {
                  link: {
                    type: 'custom',
                    url: '/coating-systems',
                    label: 'Learn More',
                    appearance: 'default',
                  },
                },
              ],
            },
          ],
          badge: {
            text: '300+ patented formulations',
          },
          featuredItem: {
            title: 'Ultra-Durable Coating System',
            description:
              'Our advanced polymer coating provides unmatched corrosion resistance for industrial applications.',
            image: featuredImage2,
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/coating-systems',
                  label: 'Learn More',
                  appearance: 'default',
                },
              },
            ],
          },
          cta: {
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/industrial-solutions',
                  label: 'Explore Industrial Solutions',
                  appearance: 'default',
                },
              },
            ],
          },
        },
      ],
    },
    layout: [
      {
        blockType: 'content',
        blockName: 'Welcome Content',
        content: [
          {
            children: [
              {
                text: 'Welcome to VUP Chemical Solutions',
              },
            ],
            type: 'h1',
          },
          {
            children: [
              {
                text: 'Leading provider of specialized chemical solutions and innovative research services.',
              },
            ],
            type: 'p',
          },
        ],
      },
    ],
    meta: {
      title: 'VUP Chemical Solutions',
      description: 'Leading provider of specialized chemical solutions and research services',
    },
    slug: 'home',
    _status: 'published',
  }
}
