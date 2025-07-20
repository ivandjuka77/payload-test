import type { Media, TeamMember } from '@/payload-types'

type AboutUsArgs = {
  timeline1Image: Media
  timeline2Image: Media
  timeline3Image: Media
  timeline4Image: Media
  content1Image: Media
  content2Image: Media
  ceo: TeamMember
  rd: TeamMember
  commercial: TeamMember
  atbel: TeamMember
  cosmetics: TeamMember
}

export function aboutUsEn(args: AboutUsArgs) {
  const {
    timeline1Image,
    timeline2Image,
    timeline3Image,
    timeline4Image,
    content1Image,
    content2Image,
    ceo,
    rd,
    commercial,
    atbel,
    cosmetics,
  } = args

  return {
    title: 'About Us',
    hero: {
      type: 'minimal',
      title: 'About us',
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
        blockName: 'Mission',
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
        blockName: 'Vision',
        blockType: 'contentImage',
        layout: 'right',
      },
      {
        badge: 'Our Journey',
        title: 'A Timeline of Innovation',
        subtitle:
          'VUP, a.s. has a rich history rooted in the petrochemical industry, evolving into a modern center for specialized chemical research and production.',
        blockName: 'Timeline',
        blockType: 'timeline',
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
      },
      {
        title: 'Our Team: The Experts Behind VUP',
        subtitle:
          'At VUP, our strength lies in our dedicated and experienced team of scientists, engineers, technicians, and professionals. We foster a culture of collaboration, innovation, and continuous learning.',
        blockName: 'Team',
        blockType: 'team',
        teamMembers: [ceo.id, rd.id, commercial.id, atbel.id, cosmetics.id],
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

export function aboutUsSk(args: AboutUsArgs) {
  const {
    timeline1Image,
    timeline2Image,
    timeline3Image,
    timeline4Image,
    content1Image,
    content2Image,
    ceo,
    rd,
    commercial,
    atbel,
    cosmetics,
  } = args

  return {
    title: 'O nás',
    hero: {
      type: 'minimal',
      title: 'O nás',
      description: 'Zistite viac o našej spoločnosti, našej misii, vízii a tíme.',
      cta: {
        links: [],
      },
      media: null,
      slides: [],
    },
    layout: [
      {
        title: 'Naša misia',
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
                    text: 'Našou misiou je ',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                  {
                    mode: 'normal',
                    text: 'neustále zrýchľovať náš výskum a výrobu uplatňovaním inovatívnych riešení, ako aj udržiavať excelentnosť v službách a dodávkach, čo prináša príležitosti pre našich partnerov.',
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
                    text: 'Snažíme sa:',
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
                        text: 'Vyvíjať a dodávať vysokokvalitné, špecializované chemické produkty a služby.',
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
                        text: 'Podporovať inovácie prostredníctvom cieleného výskumu a vývoja a špičkových technológií.',
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
                        text: 'Budovať trvalé partnerstvá založené na dôvere, odbornosti a spoločnom úspechu.',
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
                        text: 'Pôsobiť zodpovedne, so silným záväzkom k udržateľnosti a dodržiavaniu predpisov.',
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
                        text: 'Byť uznávaným lídrom v oblasti chemických špecialít, známym našimi schopnosťami riešiť problémy a zameraním na zákazníka.',
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
        blockName: 'Mission',
        blockType: 'contentImage',
        layout: 'left',
      },
      {
        title: 'Naša vízia a hodnoty',
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
                    text: 'Našou víziou je stať sa dobre prepojeným, medzinárodne uznávaným centrom pre chemický výskum a výrobu, ktoré produkuje jedinečné chemické špeciality, licencuje svoje technológie a ponúka originálne riešenia po celom svete, pričom sa snažíme byť preferovaným partnerom pre spoločnosti hľadajúce odborné chemické riešenia prostredníctvom podpory pokroku a vytvárania hodnoty vďaka vedeckej excelentnosti a udržateľným postupom.',
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
                    text: 'Základné princípy, ktoré usmerňujú každý aspekt činnosti a interakcií spoločnosti VUP, sú:',
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
                        text: 'Inovácie a odbornosť:',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 1,
                        version: 1,
                      },
                      {
                        mode: 'normal',
                        text: ' Sme poháňaní vedeckou zvedavosťou a viac ako 70 rokmi nazbieraných poznatkov, neustále hľadáme inovatívne riešenia zložitých chemických výziev.',
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
                        text: 'Kvalita a excelentnosť:',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 1,
                        version: 1,
                      },
                      {
                        mode: 'normal',
                        text: ' Zaviazali sme sa k najvyšším štandardom v našich produktoch, službách a procesoch, čo potvrdzuje naša certifikácia ISO 9001 a akreditované laboratóriá.',
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
                        text: 'Partnerstvo a spolupráca:',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 1,
                        version: 1,
                      },
                      {
                        mode: 'normal',
                        text: ' Veríme v budovanie pevných, transparentných a vzájomne prospešných vzťahov s našimi klientmi, dodávateľmi a zamestnancami.',
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
                        text: 'Integrita a etika:',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 1,
                        version: 1,
                      },
                      {
                        mode: 'normal',
                        text: ' Naše podnikanie vedieme s čestnosťou, transparentnosťou a silným etickým kompasom, čím zabezpečujeme súlad s predpismi a budujeme dôveru.',
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
                        text: 'Pripravenosť na budúcnosť:',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 1,
                        version: 1,
                      },
                      {
                        mode: 'normal',
                        text: ' Investujeme do nových technológií a udržateľných postupov, aby sme boli pripravení na výzvy a príležitosti zajtrajška.',
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
        blockName: 'Vision',
        blockType: 'contentImage',
        layout: 'right',
      },
      {
        badge: 'Naša cesta',
        title: 'Časová os inovácií',
        subtitle:
          'VUP, a.s. má bohatú históriu zakorenenú v petrochemickom priemysle, ktorá sa vyvinula na moderné centrum pre špecializovaný chemický výskum a výrobu.',
        blockName: 'Timeline',
        blockType: 'timeline',
        items: [
          {
            period: 'Pred rokom 1996',
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
                        text: 'Táto zakladajúca éra bola svedkom vzniku Výskumného ústavu petrochémie v Prievidzi, čím sa položil základný kameň pre budúcu chemickú odbornosť a inovácie. Je pozoruhodné, že už pred formálnym vznikom dnešnej spoločnosti VUP, a.s., sa v roku 1990 začalo špecializované zameranie na kozmetiku. Táto skorá špecializácia umožnila spoločnosti vybudovať si významné odborné znalosti v kozmetickom sektore už od jeho počiatkov.',
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
            highlight: 'Základy a skorá špecializácia',
            keyAchievements: [
              {
                achievement: 'Založenie Výskumného ústavu petrochémie',
              },
              {
                achievement: 'Vybudovanie základnej chemickej odbornosti a inovačných základov',
              },
              {
                achievement: 'Začiatok špecializovaného zamerania na kozmetiku (od roku 1990)',
              },
              {
                achievement:
                  'Získanie významných počiatočných odborných znalostí v kozmetickom sektore',
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
                        text: 'Spoločnosť VUP, a.s. bola oficiálne založená ako priamy nástupca Výskumného ústavu petrochémie. Tento kľúčový rok znamenal začiatok jej cesty ako nezávislého subjektu, ktorý prešiel od svojich počiatkov vo výskumnom ústave k spoločnosti pripravenej na špecializovaný chemický výskum a výrobu.',
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
            highlight: 'Založenie spoločnosti',
            keyAchievements: [
              {
                achievement: 'Formálne založenie VUP, a.s. ako nezávislého subjektu',
              },
              {
                achievement: 'Priame nástupníctvo po Výskumnom ústave petrochémie',
              },
              {
                achievement:
                  'Začatie činnosti zameranej na špecializovaný chemický výskum a výrobu',
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
                        text: 'Počas tohto obdobia spoločnosť VUP, a.s. zintenzívnila svoje zameranie na špecializovaný chemický výskum a vývoj. Značné úsilie bolo venované oblastiam ako sú produkty na báze acetylénu, katalyzátory pre polyuretány, dihydrazid kyseliny adipovej a TEMPO spolu s jeho derivátmi. Spoločnosť sa tiež sústredila na výrobu kľúčových medziproduktov ako kolamínofosfát a w-bróm-α-alkény, čím si vybudovala silné portfólio špecializovaných chemických schopností.',
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
            highlight: 'Cielený výskum, vývoj a rozvoj výroby',
            keyAchievements: [
              {
                achievement:
                  'Významný výskum v oblasti produktov na báze acetylénu a polyuretánových katalyzátorov',
              },
              {
                achievement: 'Vývojové práce na dihydrazide kyseliny adipovej a derivátoch TEMPO',
              },
              {
                achievement: 'Zameranie výroby na kľúčové medziprodukty ako kolamínofosfát',
              },
              {
                achievement: 'Rozšírenie odborných znalostí v špecializovanej chemickej výrobe',
              },
            ],
          },
          {
            period: '2010-Súčasnosť',
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
                        text: 'Počas tohto obdobia spoločnosť VUP, a.s. výrazne pokročila vo svojom špecializovanom chemickom výskume a vývoji, pričom sa zamerala na oblasti ako produkty na báze acetylénu, polyuretánové katalyzátory a deriváty TEMPO, a zároveň vyrábala kľúčové medziprodukty. Súčasne spoločnosť posilnila svoju medzinárodnú prítomnosť prostredníctvom globálnych spoluprác a viac ako 900 patentov. Táto éra bola ďalej poznačená silným záväzkom ku kvalite (ISO 9001, akreditácia SNAS S-118) a udržateľnosti (Responsible Care®, strieborná medaila EcoVadis 2025), všetko podporené neustálymi strategickými investíciami do výskumu a vývoja, poloprevádzok a škálovania výroby s cieľom zabezpečiť si vedúce postavenie.',
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
            highlight: 'Pokročilé inovácie, globálny dosah a udržateľnosť',
            keyAchievements: [
              {
                achievement:
                  'Pokračujúci výskum, vývoj a výroba pokročilých materiálov (napr. polyuretánové disperzie, vysokčisté amíny)',
              },
              {
                achievement: 'Vývoj nových produktov z acetylénu a bioglycerolu',
              },
              {
                achievement:
                  'Úspešné spolupráce s globálnymi chemickými výrobcami a viac ako 900 patentov',
              },
              {
                achievement:
                  'Udržiavanie ISO 9001, získanie akreditácie SNAS S-118 a udelenie striebornej medaily EcoVadis (2025)',
              },
              {
                achievement:
                  'Prebiehajúce strategické investície do výskumných a vývojových zariadení, poloprevádzok a škálovania výroby',
              },
            ],
          },
        ],
      },
      {
        title: 'Náš tím: Odborníci za VUP',
        subtitle:
          'V spoločnosti VUP spočíva naša sila v našom oddanom a skúsenom tíme vedcov, inžinierov, technikov a odborníkov. Podporujeme kultúru spolupráce, inovácií a neustáleho vzdelávania.',
        blockName: 'Team',
        blockType: 'team',
        teamMembers: [ceo.id, rd.id, commercial.id, atbel.id, cosmetics.id],
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

export function aboutUsJp(args: AboutUsArgs) {
  const {
    timeline1Image,
    timeline2Image,
    timeline3Image,
    timeline4Image,
    content1Image,
    content2Image,
    ceo,
    rd,
    commercial,
    atbel,
    cosmetics,
  } = args

  return {
    title: 'VUPについて',
    hero: {
      type: 'minimal',
      title: 'VUPについて',
      description: '私たちの会社、使命、ビジョン、そしてチームについて詳しくご覧ください。',
      cta: {
        links: [],
      },
      media: null,
      slides: [],
    },
    layout: [
      {
        title: '私たちの使命',
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
                    text: '私たちの使命は、',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                  {
                    mode: 'normal',
                    text: '革新的なソリューションを適用することで研究と生産を継続的に加速させ、パートナーに機会をもたらす優れたサービスとデリバリーを維持することです。',
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
                    text: '私たちは以下のことに努めています：',
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
                        text: '高品質で特殊な化学製品とサービスを開発し、提供します。',
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
                        text: '専門的な研究開発と最先端技術を通じて革新を促進します。',
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
                        text: '信頼、専門知識、相互の成功に基づいた永続的なパートナーシップを築きます。',
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
                        text: '持続可能性と規制遵守への強いコミットメントを持って、責任ある事業運営を行います。',
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
                        text: '問題解決能力と顧客中心主義で知られる、化学特殊品分野の認知されたリーダーとなります。',
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
        blockName: 'Mission',
        blockType: 'contentImage',
        layout: 'left',
      },
      {
        title: '私たちのビジョンと価値観',
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
                    text: '私たちのビジョンは、独自の化学特殊品を生産し、技術をライセンス供与し、世界中に独自のソリューションを提供する、ネットワークの広い国際的に認知された化学研究・生産センターになることです。科学的卓越性と持続可能な実践を通じて進歩を推進し、価値を創造することで、専門的な化学ソリューションを求める企業にとっての優先的なパートナーとなることを目指しています。',
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
                    text: 'VUPの運営と相互作用のあらゆる側面を導く基本原則は次のとおりです：',
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
                        text: '革新と専門知識：',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 1,
                        version: 1,
                      },

                      {
                        mode: 'normal',
                        text: ' 私たちは科学的好奇心と70年以上にわたる蓄積された知識に駆り立てられ、複雑な化学的課題に対する革新的な解決策を常に探求しています。',
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
                        text: '品質と卓越性：',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 1,
                        version: 1,
                      },

                      {
                        mode: 'normal',
                        text: ' 私たちは製品、サービス、プロセスにおいて最高の基準を約束し、それはISO 9001認証と認定試験所によって検証されています。',
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
                        text: 'パートナーシップと協業：',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 1,
                        version: 1,
                      },

                      {
                        mode: 'normal',
                        text: ' 私たちは、クライアント、サプライヤー、従業員との間に、強力で透明性のある、相互に利益のある関係を築くことを信条としています。',
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
                        text: '誠実さと倫理：',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 1,
                        version: 1,
                      },

                      {
                        mode: 'normal',
                        text: ' 私たちは誠実さ、透明性、そして強固な倫理観を持って事業を行い、コンプライアンスを確保し、信頼を築きます。',
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
                        text: '未来への備え：',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 1,
                        version: 1,
                      },

                      {
                        mode: 'normal',
                        text: ' 私たちは明日の課題と機会に備えるため、新技術と持続可能な実践に投資します。',
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
        blockName: 'Vision',
        blockType: 'contentImage',
        layout: 'right',
      },
      {
        badge: '私たちの歩み',
        title: '革新のタイムライン',
        subtitle:
          'VUP, a.s.は石油化学産業に根差した豊かな歴史を持ち、特殊化学品の研究と生産を行う現代的なセンターへと進化を遂げてきました。',
        blockName: 'Timeline',
        blockType: 'timeline',
        items: [
          {
            period: '1996年以前',

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
                        text: 'この基礎を築いた時代には、プリエヴィドザに石油化学研究所が設立され、将来の化学的専門知識と革新のための重要な基盤が築かれました。特筆すべきは、今日のVUP, a.s.が正式に設立される前の1990年に、化粧品への専門的な焦点が始まったことです。この早期の専門化により、同社は初期段階から化粧品セクターで重要な専門知識を築くことができました。',
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
            highlight: '基盤と早期専門化',
            keyAchievements: [
              {
                achievement: '石油化学研究所の設立',
              },
              {
                achievement: '基礎的な化学専門知識と革新の土台の構築',
              },
              {
                achievement: '化粧品への専門的な取り組みの開始（1990年以来）',
              },

              {
                achievement: '化粧品セクターにおける重要な初期専門知識の蓄積',
              },
            ],
          },
          {
            period: '1996年',

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
                        text: 'VUP, a.s.は石油化学研究所を直接引き継ぐ形で正式に設立されました。この極めて重要な年は、同社が独立した事業体としての歩みを始めた年であり、研究所としての出自から、特殊化学品の研究と生産を目指す企業へと移行しました。',
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
            highlight: '会社設立',
            keyAchievements: [
              {
                achievement: '独立事業体としてのVUP, a.s.の正式設立',
              },
              {
                achievement: '石油化学研究所からの直接的な継承',
              },

              {
                achievement: '特殊化学品の研究と生産に焦点を当てた事業の開始',
              },
            ],
          },
          {
            period: '2004年～2009年',

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
                        text: 'この期間、VUP, a.s.は特殊化学品の研究開発に注力しました。アセチレンベースの製品、ポリウレタン用触媒、アジピン酸ジヒドラジド、およびTEMPOとその誘導体などの分野に多大な努力が注がれました。また、コラミノホスフェートやw-ブロモ-α-アルケンなどの主要中間体の生産にも集中し、特殊化学品の強力なポートフォリオを構築しました。',
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
            highlight: '集中的な研究開発と生産開発',
            keyAchievements: [
              {
                achievement: 'アセチレンベース製品とポリウレタン触媒に関する重要な研究',
              },
              {
                achievement: 'アジピン酸ジヒドラジドとTEMPO誘導体の開発作業',
              },
              {
                achievement: 'コラミノホスフェートなどの主要中間体への生産集中',
              },

              {
                achievement: '特殊化学品生産における専門知識の拡大',
              },
            ],
          },
          {
            period: '2010年～現在',

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
                        text: 'この期間、VUP, a.s.は特殊化学品の研究開発を大幅に前進させ、アセチレンベースの製品、ポリウレタン触媒、TEMPO誘導体などの分野に焦点を当てると同時に、主要な中間体も生産しました。同時に、グローバルな協業と900以上の特許を通じて国際的な存在感を確立しました。この時代は、品質（ISO 9001、SNAS S-118認定）と持続可能性（レスポンシブル・ケア®、EcoVadisシルバーメダル2025）への強いコミットメントによってさらに特徴づけられ、これらはすべて、継続的なリーダーシップを確保するための研究開発、パイロットプラント、生産規模拡大への継続的な戦略的投資によって支えられています。',
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
            highlight: '先進的革新、グローバルな展開、持続可能性',
            keyAchievements: [
              {
                achievement:
                  '先進材料（例：ポリウレタン分散体、高純度アミン）の継続的な研究開発と生産',
              },
              {
                achievement: 'アセチレンとバイオグリセロールからの新製品開発',
              },
              {
                achievement: 'グローバルな化学メーカーとの成功した協業と900件以上の特許',
              },
              {
                achievement:
                  'ISO 9001の維持、SNAS S-118認定の取得、EcoVadisシルバーメダル（2025年）の受賞',
              },

              {
                achievement: '研究開発施設、パイロットプラント、生産規模拡大への継続的な戦略的投資',
              },
            ],
          },
        ],
      },
      {
        title: '私たちのチーム：VUPを支える専門家たち',
        subtitle:
          'VUPの強みは、献身的で経験豊富な科学者、エンジニア、技術者、専門家からなるチームにあります。私たちは協業、革新、そして継続的な学習の文化を育んでいます。',
        blockName: 'Team',
        blockType: 'team',
        teamMembers: [ceo.id, rd.id, commercial.id, atbel.id, cosmetics.id],
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
