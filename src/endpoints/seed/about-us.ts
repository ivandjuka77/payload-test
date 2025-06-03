import type { Media } from '@/payload-types'

type AboutUsArgs = {
  timeline1Image: Media
  timeline2Image: Media
  timeline3Image: Media
  timeline4Image: Media
  content1Image: Media
  content2Image: Media
}

export function aboutUs(args: AboutUsArgs) {
  const {
    timeline1Image,
    timeline2Image,
    timeline3Image,
    timeline4Image,
    content1Image,
    content2Image,
  } = args

  return {
    title: 'About Us',
    hero: {
      type: 'minimal',
      title: 'About us ',
      description: 'This is the about us description',

      cta: {
        links: [],
      },
      media: null,
      slides: [],
    },
    layout: [
      {
        title: 'Our Mission',

        content: {
          root: {
            type: 'root',
            format: '',
            indent: 0,
            version: 1,

            children: [
              {
                type: 'paragraph',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'Our mission is to ',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },

                  {
                    mode: 'normal',
                    text: 'continuously accelerate our research and production by applying innovative solutions, as well as to maintain excellence in service and delivery that results in opportunities for our partners.',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 1,
                    version: 1,
                  },
                ],
                direction: 'ltr',
                textStyle: '',
                textFormat: 0,
              },
              {
                type: 'paragraph',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'We strive to:',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: 'ltr',
                textStyle: '',
                textFormat: 0,
              },
              {
                tag: 'ul',
                type: 'list',
                start: 1,
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    type: 'listitem',
                    value: 1,
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Develop and deliver high-quality, specialized chemical products and services.',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                  },
                  {
                    type: 'listitem',
                    value: 2,
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Foster innovation through dedicated R&D and cutting-edge technologies.',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                  },
                  {
                    type: 'listitem',
                    value: 3,
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Build lasting partnerships based on trust, expertise, and mutual success.',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                  },
                  {
                    type: 'listitem',
                    value: 4,
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Operate responsibly, with a strong commitment to sustainability and regulatory compliance.',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                  },
                  {
                    type: 'listitem',
                    value: 5,
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Be a recognized leader in chemical specialties, known for our problem-solving capabilities and customer focus.',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                  },
                ],
                listType: 'bullet',
                direction: 'ltr',
              },
            ],
            direction: 'ltr',
          },
        },
        image: content1Image.id,
        blockName: null,
        blockType: 'contentImage',
        layout: 'left',
      },
      {
        title: 'Our Vision & Values',

        content: {
          root: {
            type: 'root',
            format: '',
            indent: 0,
            version: 1,

            children: [
              {
                type: 'paragraph',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'Our vision is to become a well-networked, internationally recognized chemical research and production center that produces unique chemical specialties, licenses its technologies, and offers original solutions worldwide, striving to be the preferred partner for companies seeking expert chemical solutions by driving progress and creating value through scientific excellence and sustainable practices.',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: 'ltr',
                textStyle: '',
                textFormat: 0,
              },
              {
                type: 'paragraph',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: "The core principles that guide every aspect of VUP's operations and interactions are:",
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: 'ltr',
                textStyle: '',
                textFormat: 0,
              },
              {
                tag: 'ul',
                type: 'list',
                start: 1,
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    type: 'listitem',
                    value: 1,
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Innovation & Expertise:',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 1,
                        version: 1,
                      },

                      {
                        mode: 'normal',
                        text: ' We are driven by scientific curiosity and over 70 years of accumulated knowledge, constantly seeking innovative solutions to complex chemical challenges.',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    textFormat: 1,
                  },
                  {
                    type: 'listitem',
                    value: 2,
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Quality & Excellence:',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 1,
                        version: 1,
                      },

                      {
                        mode: 'normal',
                        text: ' We are committed to the highest standards in our products, services, and processes, validated by our ISO 9001 certification and accredited laboratories.',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    textFormat: 1,
                  },
                  {
                    type: 'listitem',
                    value: 3,
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Partnership & Collaboration:',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 1,
                        version: 1,
                      },

                      {
                        mode: 'normal',
                        text: ' We believe in building strong, transparent, and mutually beneficial relationships with our clients, suppliers, and employees.',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    textFormat: 1,
                  },
                  {
                    type: 'listitem',
                    value: 4,
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Integrity & Ethics:',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 1,
                        version: 1,
                      },

                      {
                        mode: 'normal',
                        text: ' We conduct our business with honesty, transparency, and a strong ethical compass, ensuring compliance and building trust.',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    textFormat: 1,
                  },
                  {
                    type: 'listitem',
                    value: 5,
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Future-Readiness:',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 1,
                        version: 1,
                      },

                      {
                        mode: 'normal',
                        text: ' We invest in new technologies and sustainable practices to ensure we are prepared for the challenges and opportunities of tomorrow.',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    textFormat: 1,
                  },
                ],
                listType: 'bullet',
                direction: 'ltr',
                textFormat: 1,
              },
            ],
            direction: 'ltr',
            textFormat: 1,
          },
        },
        image: content2Image.id,
        blockName: null,
        blockType: 'contentImage',
        layout: 'right',
      },
      {
        badge: 'Our Journey',
        title: 'A Timeline of Innovation',
        subtitle:
          'VUP, a.s. has a rich history rooted in the petrochemical industry, evolving into a modern center for specialized chemical research and production.',
        blockName: null,

        items: [
          {
            period: 'Pre-1996',

            content: {
              root: {
                type: 'root',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    type: 'paragraph',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'This foundational era saw the establishment of the Research Institute of Petrochemicals in Prievidza, laying the essential groundwork for future chemical expertise and innovation. Notably, even before the formal creation of VUP, a.s. as it is today, a dedicated focus on cosmetics began in 1990. This early specialization allowed the company to build significant expertise in the cosmetics sector from its nascent stages.',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    textStyle: '',
                    textFormat: 0,
                  },
                ],
                direction: 'ltr',
              },
            },
            imageUrl: timeline1Image.id,
            highlight: 'Foundations & Early Specialization',
            keyAchievements: [
              {
                achievement: 'Establishment of the Research Institute of Petrochemicals',
              },
              {
                achievement:
                  'Development of foundational chemical expertise and innovation groundwork',
              },
              {
                achievement: 'Initiation of a dedicated focus on cosmetics (Since 1990)',
              },

              {
                achievement: 'Accumulation of significant early expertise in the cosmetics sector',
              },
            ],
          },
          {
            period: '1996',

            content: {
              root: {
                type: 'root',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    type: 'paragraph',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'VUP, a.s. was officially founded, directly succeeding the Research Institute of Petrochemicals. This pivotal year marked the beginning of its journey as an independent entity, transitioning from its research institute origins into a company poised for specialized chemical research and production.',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    textStyle: '',
                    textFormat: 0,
                  },
                ],
                direction: 'ltr',
              },
            },
            imageUrl: timeline2Image.id,
            highlight: 'Company Formation',
            keyAchievements: [
              {
                achievement: 'Formal establishment of VUP, a.s. as an independent entity',
              },
              {
                achievement: 'Direct succession from the Research Institute of Petrochemicals',
              },

              {
                achievement:
                  'Commencement of operations focused on specialized chemical research and production',
              },
            ],
          },
          {
            period: '2004-2009',

            content: {
              root: {
                type: 'root',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    type: 'paragraph',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'During this period, VUP, a.s. intensified its focus on specialized chemical research and development. Significant efforts were dedicated to areas such as acetylene-based products, catalysts for polyurethanes, adipic acid dihydrazide, and TEMPO alongside its derivatives. The company also concentrated on the production of key intermediates like colaminophosphate and w-bromo-α-alkenes, building a strong portfolio of specialized chemical capabilities.',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    textStyle: '',
                    textFormat: 0,
                  },
                ],
                direction: 'ltr',
              },
            },
            imageUrl: timeline3Image.id,
            highlight: 'Focused R&D and Production Development',
            keyAchievements: [
              {
                achievement:
                  'Significant research into acetylene-based products and polyurethane catalysts',
              },
              {
                achievement: 'Development work on adipic acid dihydrazide and TEMPO derivatives',
              },
              {
                achievement: 'Production focus on key intermediates like colaminophosphate',
              },

              {
                achievement: 'Expansion of expertise in specialized chemical production',
              },
            ],
          },
          {
            period: '2010-Present',

            content: {
              root: {
                type: 'root',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    type: 'paragraph',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'During this period, VUP, a.s. significantly advanced its specialized chemical R&D, focusing on areas like acetylene-based products, polyurethane catalysts, and TEMPO derivatives, while also producing key intermediates. Simultaneously, the company solidified its international presence through global collaborations and over 900 patents. This era was further marked by a strong commitment to quality (ISO 9001, SNAS S-118 Accreditation) and sustainability (Responsible Care®, EcoVadis Silver Medal 2025), all supported by ongoing strategic investments in R&D, pilot plants, and production scaling to ensure continued leadership.',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    textStyle: '',
                    textFormat: 0,
                  },
                ],
                direction: 'ltr',
              },
            },
            imageUrl: timeline4Image.id,
            highlight: 'Advanced Innovation, Global Reach & Sustainability',
            keyAchievements: [
              {
                achievement:
                  'Continued R&D and production of advanced materials (e.g., polyurethane dispersions, high-purity amines)',
              },
              {
                achievement: 'Development of new products from acetylene and bioglycerol',
              },
              {
                achievement:
                  'Successful collaborations with global chemical producers and over 900 patents',
              },
              {
                achievement:
                  'Maintained ISO 9001, achieved SNAS S-118 Accreditation, and awarded EcoVadis Silver Medal (2025)',
              },

              {
                achievement:
                  'Ongoing strategic investments in R&D facilities, pilot plants, and production scaling',
              },
            ],
          },
        ],
        blockType: 'timeline',
      },
      {
        title: 'Our Team: The Experts Behind VUP',
        subtitle:
          'At VUP, our strength lies in our dedicated and experienced team of scientists, engineers, technicians, and professionals. We foster a culture of collaboration, innovation, and continuous learning.',
        blockName: null,
        blockType: 'team',

        teamMembers: [
          {
            name: 'Roman Karlubik',
            role: 'Chief Executive Officer',
            bio: "Leading VUP's strategic direction and commitment to innovation and sustainable growth.",
            image: timeline1Image.id,
            linkedin: null,
            email: null,
            isHeadOfDepartment: null,
          },
          {
            name: 'Ing. Peter Grolmus',
            role: 'Director of Research & Development',
            bio: "Overseeing VUP's extensive R&D programs, driving innovation in chemical synthesis, process development, and new product creation.",
            image: timeline2Image.id,
            linkedin: null,
            email: null,
            isHeadOfDepartment: true,
          },
          {
            name: 'Ing. Ján Chalupka',
            role: 'Head of Commercial Department',
            bio: "Managing VUP's commercial strategy, client partnerships, and market development for our diverse product and service portfolio.",
            image: timeline3Image.id,
            linkedin: null,
            email: null,
            isHeadOfDepartment: true,
          },
          {
            name: 'Ing. Ľudovít Žiak, PhD',
            role: 'Head of ATBEL Division (Analytical, Technical-Safety, and Ecological Laboratories)',
            bio: 'Leading our SNAS S-118 accredited laboratories, ensuring high-quality analytical services, technical safety testing, and environmental monitoring.\n',
            image: timeline4Image.id,
            linkedin: null,
            email: null,
            isHeadOfDepartment: true,
          },
          {
            name: 'Ing. Denisa Juríčeková',
            role: 'Head of Production Department for Cosmetics',
            bio: "Overseeing the development, manufacturing, and quality assurance of VUP's cosmetic products, including custom and private label solutions.\n",
            image: timeline1Image.id,
            linkedin: null,
            email: null,
            isHeadOfDepartment: true,
          },
        ],
      },
    ],

    meta: {
      title: null,
      image: null,
      description: null,
    },
    slug: 'about-us',
    slugLock: true,
    _status: 'published',
  }
}
