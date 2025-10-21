import type { Media } from '@/payload-types'

type SustainabilityArgs = {
  heroImage: Media
  pillar1Image: Media
  pillar2Image: Media
  pillar3Image: Media
  pillar4Image: Media
  certificateImage1: Media
  focus1Image: Media
  focus2Image: Media
  focus3Image: Media
  focus4Image: Media
  badge1: Media
  badge2: Media
  badge3: Media
  badge4: Media
}

export function sustainabilityEn(args: SustainabilityArgs) {
  const {
    heroImage,
    pillar1Image,
    pillar2Image,
    pillar3Image,
    pillar4Image,
    certificateImage1,
    focus1Image,
    focus2Image,
    focus3Image,
    focus4Image,
    badge1,
    badge2,
    badge3,
    badge4,
  } = args

  return {
    title: 'Sustainability',

    hero: {
      type: 'backgroundImage' as const,
      title: 'Building a Responsible Future',
      description:
        'At VUP, a.s., our legacy of over 70 years in chemical research and production is deeply intertwined with a commitment to responsible practices and sustainable development.',

      cta: {
        links: [],
      },
      media: heroImage.id,
      slides: [],
    },
    layout: [
      {
        blockName: null,
        certifications: [
          {
            image: badge1.id,
            title: 'ISO 9001',
            subtitle: 'Quality Management System',
            description:
              'VUP maintains ISO 9001 certification, covering our R&D of chemical processes, chemical specialties, small-scale chemical products, production and sales of cleaning and cosmetic products, analyses, and laboratory testing.',
          },
          {
            image: badge2.id,
            title: 'Responsible Care®',
            subtitle: 'Global Chemical Industry Initiative',
            description:
              'As a participant in the Responsible Care initiative, VUP is committed to continuously improving our performance in environmental protection, health, safety, and security.',
          },
          {
            image: badge3.id,
            title: 'SNAS Accreditation',
            subtitle: 'No. S-118 for ATBEL Labs',
            description:
              'Our ATBEL division is accredited by SNAS, confirming the competence and reliability of our testing services according to international standards.',
          },
          {
            image: badge4.id,
            title: 'R&D Competency Certificate',
            subtitle: 'Ministry of Education, Slovak Republic',
            description:
              "Awarded by the Ministry of Education, Slovak Republic, recognizing VUP's capabilities and expertise in conducting research and development.",
          },
        ],
        featuredCertification: {
          title: 'EcoVadis Silver Medal',
          subtitle: 'Top 9% Globally',
          description:
            'Awarded the Silver Medal by EcoVadis, placing VUP in the top 9% of companies worldwide within our specialty chemical research and production sector. This rating reflects our advanced practices in Environmental Responsibility, Labor & Human Rights, Ethics, and Sustainable Procurement.',
          articleLink: 'news/vup-ecovadis-silver-sustainability-award',
          image: certificateImage1.id,
        },
        blockType: 'certifications',
        title: 'Certified Sustainability Dedication',
        subtitle:
          'Our dedication to sustainability and quality is validated by independent assessments and internationally recognized certifications that demonstrate our commitment to responsible manufacturing and business excellence.',
      },
      {
        title: 'Our Sustainability Pillars',
        subtitle:
          'Our comprehensive approach to sustainability is built on four fundamental pillars that guide our operations, innovation, and partnerships.',
        blockName: null,

        cards: [
          {
            image: pillar1Image.id,
            title: 'Environmental Responsibility',
            subtitle: 'Minimizing Environmental Impact Through Innovation',
            paragraph: {
              root: {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: "Our commitment to environmental stewardship drives every aspect of our operations. Through efficient resource management, waste reduction initiatives, and innovative green chemistry R&D, we're continuously working to reduce our environmental footprint. Our water management systems and emissions control technologies represent industry-leading practices in sustainable chemical manufacturing.",
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
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'root',
                version: 1,
              },
            },
          },
          {
            image: pillar2Image.id,
            title: 'Labor & Human Rights',
            subtitle: 'Fostering a Safe and Inclusive Workplace',
            paragraph: {
              root: {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'We believe our success is built on the well-being of our people. Our comprehensive approach to workplace safety, professional development, and employee welfare sets industry standards. Through robust health and safety protocols, continuous training programs, and inclusive policies, we ensure every team member can thrive in a supportive and respectful environment.',
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
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'root',
                version: 1,
              },
            },
          },
          {
            image: pillar3Image.id,
            title: 'Ethics & Governance',
            subtitle: 'Upholding the Highest Standards of Business Conduct',
            paragraph: {
              root: {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Integrity is fundamental to our operations. Our governance framework ensures compliance with all applicable regulations while promoting transparent business practices. From data security to anti-corruption measures, we maintain rigorous standards that build trust with our stakeholders and set an example for ethical business conduct in the chemical industry.',
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
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'root',
                version: 1,
              },
            },
          },
          {
            image: pillar4Image.id,
            title: 'Sustainable Procurement',
            subtitle: 'Building Responsible Supply Chains',
            paragraph: {
              root: {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: "Our commitment to sustainability extends throughout our supply chain. We carefully select and collaborate with suppliers who share our values and meet our stringent environmental and social standards. Through regular evaluations and partnerships, we're working to create a more sustainable and responsible chemical supply chain that benefits all stakeholders.",
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
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'root',
                version: 1,
              },
            },
          },
        ],
        blockType: 'verticalCards',
      },
      {
        badge: 'Strategic Focus Areas',
        title: 'Our Path to Sustainable Excellence',
        subtitle:
          'Four strategic pillars guide our continuous improvement journey, driving innovation that creates lasting value for all stakeholders.',
        blockName: null,

        cards: [
          {
            image: focus1Image.id,
            title: 'Future Technologies',
            paragraph: {
              root: {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Investing in cutting-edge technologies that advance sustainable practices and enhance operational efficiency. Our research and development teams focus on implementing innovative solutions that reduce environmental impact while improving productivity across our manufacturing processes.',
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
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'root',
                version: 1,
              },
            },
            highlights: [
              {
                highlight: 'Energy-efficient equipment optimization',
              },
              {
                highlight: 'Advanced waste recycling systems',
              },

              {
                highlight: 'Green chemistry research programs',
              },
            ],
          },
          {
            image: focus2Image.id,
            title: 'Product Stewardship',
            paragraph: {
              root: {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Ensuring safe and responsible use of our products throughout their entire lifecycle from development to disposal. We take a holistic approach to product management, considering environmental and social impacts at every stage while providing comprehensive support to our customers and partners.',
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
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'root',
                version: 1,
              },
            },
            highlights: [
              {
                highlight: 'Comprehensive safety documentation',
              },
              {
                highlight: 'Lifecycle impact assessments',
              },

              {
                highlight: 'Customer training programs',
              },
            ],
          },
          {
            image: focus3Image.id,
            title: 'Safer Applications',
            paragraph: {
              root: {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Developing innovative solutions that prioritize human health and environmental safety in all applications. Through continuous research and industry collaboration, we strive to set new standards for chemical safety while maintaining the high performance our customers expect.',
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
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'root',
                version: 1,
              },
            },
            highlights: [
              {
                highlight: 'Hazard reduction research',
              },
              {
                highlight: 'Safety profile improvements',
              },

              {
                highlight: 'Safer manufacturing processes',
              },
            ],
          },
          {
            image: focus4Image.id,
            title: 'Stakeholder Engagement',
            paragraph: {
              root: {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Building transparent relationships and collaborative partnerships to drive industry-wide transformation. We actively engage with customers, suppliers, regulators, and communities to share knowledge, gather feedback, and collectively work towards more sustainable chemical solutions.',
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
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'root',
                version: 1,
              },
            },
            highlights: [
              {
                highlight: 'Regular transparency reporting',
              },
              {
                highlight: 'Multi-stakeholder dialogue',
              },

              {
                highlight: 'Industry initiative participation',
              },
            ],
          },
        ],
        blockType: 'gridImageCards',
      },
    ],

    meta: {
      title: null,
      image: null,
      description: null,
    },
    publishedAt: '2025-05-24T10:24:53.543Z',
    slug: 'sustainability',
    slugLock: true,
    _status: 'published' as const,
  }
}

export function sustainabilitySk(args: SustainabilityArgs) {
  const {
    heroImage,
    pillar1Image,
    pillar2Image,
    pillar3Image,
    pillar4Image,
    certificateImage1,
    focus1Image,
    focus2Image,
    focus3Image,
    focus4Image,
    badge1,
    badge2,
    badge3,
    badge4,
  } = args

  return {
    title: 'Udržateľnosť',

    hero: {
      type: 'backgroundImage' as const,
      title: 'Budovanie zodpovednej budúcnosti',
      description:
        'V spoločnosti VUP, a.s., je naše dedičstvo viac ako 70 rokov v chemickom výskume a výrobe hlboko prepojené so záväzkom k zodpovedným postupom a udržateľnému rozvoju.',

      cta: {
        links: [],
      },
      media: heroImage.id,
      slides: [],
    },
    layout: [
      {
        blockName: null,
        certifications: [
          {
            image: badge1.id,
            title: 'ISO 9001',
            subtitle: 'Systém manažérstva kvality',
            description:
              'VUP si udržiava certifikáciu ISO 9001, ktorá pokrýva náš výskum a vývoj chemických procesov, chemických špecialít, malosériových chemických výrobkov, výrobu a predaj čistiacich a kozmetických výrobkov, analýzy a laboratórne testovanie.',
          },
          {
            image: badge2.id,
            title: 'Responsible Care®',
            subtitle: 'Globálna iniciatíva chemického priemyslu',
            description:
              'Ako účastník iniciatívy Responsible Care sa VUP zaväzuje neustále zlepšovať svoj výkon v oblasti ochrany životného prostredia, zdravia, bezpečnosti a zabezpečenia.',
          },
          {
            image: badge3.id,
            title: 'Akreditácia SNAS',
            subtitle: 'č. S-118 pre laboratóriá ATBEL',
            description:
              'Naša divízia ATBEL je akreditovaná SNAS, čo potvrdzuje kompetentnosť a spoľahlivosť našich testovacích služieb podľa medzinárodných noriem.',
          },
          {
            image: badge4.id,
            title: 'Osvedčenie o spôsobilosti na výskum a vývoj',
            subtitle: 'Ministerstvo školstva, vedy, výskumu a športu SR',
            description:
              'Udelené Ministerstvom školstva Slovenskej republiky, uznávajúc schopnosti a odbornosť VUP pri uskutočňovaní výskumu a vývoja.',
          },
        ],
        featuredCertification: {
          title: 'Strieborná medaila EcoVadis',
          subtitle: 'Top 9% celosvetovo',
          description:
            'Udelená Strieborná medaila od EcoVadis, čím sa VUP zaraďuje medzi 9% najlepších spoločností na svete v našom sektore výskumu a výroby špeciálnych chemikálií. Toto hodnotenie odráža naše pokročilé postupy v oblastiach environmentálnej zodpovednosti, práce a ľudských práv, etiky a udržateľného obstarávania.',
          articleLink: 'news/vup-ecovadis-silver-sustainability-award',
          image: certificateImage1.id,
        },
        blockType: 'certifications',
        title: 'Certifikované odhodlanie k udržateľnosti',
        subtitle:
          'Naše odhodlanie k udržateľnosti a kvalite je potvrdené nezávislými hodnoteniami a medzinárodne uznávanými certifikátmi, ktoré dokazujú náš záväzok k zodpovednej výrobe a obchodnej excelentnosti.',
      },
      {
        title: 'Naše piliere udržateľnosti',
        subtitle:
          'Náš komplexný prístup k udržateľnosti je postavený na štyroch základných pilieroch, ktoré usmerňujú naše operácie, inovácie a partnerstvá.',
        blockName: null,

        cards: [
          {
            image: pillar1Image.id,
            title: 'Environmentálna zodpovednosť',
            subtitle: 'Minimalizácia vplyvu na životné prostredie prostredníctvom inovácií',
            paragraph: {
              root: {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Náš záväzok k environmentálnemu správcovstvu riadi každý aspekt našich operácií. Prostredníctvom efektívneho hospodárenia so zdrojmi, iniciatív na znižovanie odpadu a inovatívneho výskumu a vývoja v oblasti zelenej chémie neustále pracujeme na znižovaní našej environmentálnej stopy. Naše systémy vodného hospodárstva a technológie na kontrolu emisií predstavujú špičkové postupy v udržateľnej chemickej výrobe.',
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
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'root',
                version: 1,
              },
            },
          },
          {
            image: pillar2Image.id,
            title: 'Práca a ľudské práva',
            subtitle: 'Podpora bezpečného a inkluzívneho pracoviska',
            paragraph: {
              root: {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Veríme, že náš úspech je postavený na blahobyte našich ľudí. Náš komplexný prístup k bezpečnosti na pracovisku, profesionálnemu rozvoju a starostlivosti o zamestnancov stanovuje priemyselné štandardy. Prostredníctvom robustných zdravotných a bezpečnostných protokolov, neustálych školiacich programov a inkluzívnych politík zabezpečujeme, aby každý člen tímu mohol prosperovať v podpornom a rešpektujúcom prostredí.',
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
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'root',
                version: 1,
              },
            },
          },
          {
            image: pillar3Image.id,
            title: 'Etika a riadenie',
            subtitle: 'Dodržiavanie najvyšších štandardov obchodného správania',
            paragraph: {
              root: {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Integrita je základom našich operácií. Náš rámec riadenia zabezpečuje súlad so všetkými platnými predpismi a zároveň podporuje transparentné obchodné praktiky. Od bezpečnosti údajov až po protikorupčné opatrenia udržiavame prísne štandardy, ktoré budujú dôveru u našich zainteresovaných strán a sú príkladom etického obchodného správania v chemickom priemysle.',
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
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'root',
                version: 1,
              },
            },
          },
          {
            image: pillar4Image.id,
            title: 'Udržateľné obstarávanie',
            subtitle: 'Budovanie zodpovedných dodávateľských reťazcov',
            paragraph: {
              root: {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Náš záväzok k udržateľnosti sa vzťahuje na celý náš dodávateľský reťazec. Starostlivo vyberáme a spolupracujeme s dodávateľmi, ktorí zdieľajú naše hodnoty a spĺňajú naše prísne environmentálne a sociálne normy. Prostredníctvom pravidelných hodnotení a partnerstiev pracujeme na vytvorení udržateľnejšieho a zodpovednejšieho chemického dodávateľského reťazca, z ktorého budú mať prospech všetky zainteresované strany.',
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
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'root',
                version: 1,
              },
            },
          },
        ],
        blockType: 'verticalCards',
      },
      {
        badge: 'Strategické oblasti zamerania',
        title: 'Naša cesta k udržateľnej excelentnosti',
        subtitle:
          'Štyri strategické piliere usmerňujú našu cestu neustáleho zlepšovania a poháňajú inovácie, ktoré vytvárajú trvalú hodnotu pre všetky zainteresované strany.',
        blockName: null,

        cards: [
          {
            image: focus1Image.id,
            title: 'Technológie budúcnosti',
            paragraph: {
              root: {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Investovanie do špičkových technológií, ktoré podporujú udržateľné postupy a zvyšujú prevádzkovú efektivitu. Naše výskumné a vývojové tímy sa zameriavajú na implementáciu inovatívnych riešení, ktoré znižujú vplyv na životné prostredie a zároveň zlepšujú produktivitu v našich výrobných procesoch.',
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
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'root',
                version: 1,
              },
            },
            highlights: [
              {
                highlight: 'Optimalizácia energeticky účinných zariadení',
              },
              {
                highlight: 'Pokročilé systémy recyklácie odpadu',
              },

              {
                highlight: 'Výskumné programy zelenej chémie',
              },
            ],
          },
          {
            image: focus2Image.id,
            title: 'Správa produktov',
            paragraph: {
              root: {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Zabezpečenie bezpečného a zodpovedného používania našich produktov počas celého ich životného cyklu od vývoja až po likvidáciu. Uplatňujeme holistický prístup k správe produktov, zvažujeme environmentálne a sociálne dopady v každej fáze a poskytujeme komplexnú podporu našim zákazníkom a partnerom.',
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
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'root',
                version: 1,
              },
            },
            highlights: [
              {
                highlight: 'Komplexná bezpečnostná dokumentácia',
              },
              {
                highlight: 'Hodnotenia vplyvu životného cyklu',
              },

              {
                highlight: 'Školiace programy pre zákazníkov',
              },
            ],
          },
          {
            image: focus3Image.id,
            title: 'Bezpečnejšie aplikácie',
            paragraph: {
              root: {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Vývoj inovatívnych riešení, ktoré uprednostňujú ľudské zdravie a environmentálnu bezpečnosť vo všetkých aplikáciách. Prostredníctvom neustáleho výskumu a priemyselnej spolupráce sa snažíme stanoviť nové štandardy chemickej bezpečnosti pri zachovaní vysokého výkonu, ktorý naši zákazníci očakávajú.',
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
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'root',
                version: 1,
              },
            },
            highlights: [
              {
                highlight: 'Výskum znižovania nebezpečenstva',
              },
              {
                highlight: 'Zlepšenia bezpečnostného profilu',
              },

              {
                highlight: 'Bezpečnejšie výrobné procesy',
              },
            ],
          },
          {
            image: focus4Image.id,
            title: 'Angažovanosť zainteresovaných strán',
            paragraph: {
              root: {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Budovanie transparentných vzťahov a partnerských spoluprác na podporu transformácie v celom odvetví. Aktívne spolupracujeme so zákazníkmi, dodávateľmi, regulačnými orgánmi a komunitami, aby sme zdieľali vedomosti, zbierali spätnú väzbu a spoločne pracovali na udržateľnejších chemických riešeniach.',
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
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'root',
                version: 1,
              },
            },
            highlights: [
              {
                highlight: 'Pravidelné transparentné reportovanie',
              },
              {
                highlight: 'Dialóg s viacerými zainteresovanými stranami',
              },

              {
                highlight: 'Účasť na priemyselných iniciatívach',
              },
            ],
          },
        ],
        blockType: 'gridImageCards',
      },
    ],

    meta: {
      title: null,
      image: null,
      description: null,
    },
    publishedAt: '2025-05-24T10:24:53.543Z',
    slug: 'sustainability',
    slugLock: true,
    _status: 'published' as const,
  }
}

export function sustainabilityJp(args: SustainabilityArgs) {
  const {
    heroImage,
    pillar1Image,
    pillar2Image,
    pillar3Image,
    pillar4Image,
    certificateImage1,
    focus1Image,
    focus2Image,
    focus3Image,
    focus4Image,
    badge1,
    badge2,
    badge3,
    badge4,
  } = args

  return {
    title: 'サステナビリティ',

    hero: {
      type: 'backgroundImage' as const,
      title: '責任ある未来の構築',
      description:
        'VUP, a.s.において、70年以上にわたる化学研究と生産の歴史は、責任ある実践と持続可能な開発へのコミットメントと深く結びついています。',

      cta: {
        links: [],
      },
      media: heroImage.id,
      slides: [],
    },
    layout: [
      {
        blockName: null,
        certifications: [
          {
            image: badge1.id,
            title: 'ISO 9001',
            subtitle: '品質マネジメントシステム',
            description:
              'VUPは、化学プロセス、特殊化学品、小規模化学製品の研究開発、洗浄・化粧品製品の製造・販売、分析、実験室試験をカバーするISO 9001認証を維持しています。',
          },
          {
            image: badge2.id,
            title: 'Responsible Care®',
            subtitle: 'グローバル化学産業イニシアチブ',
            description:
              'Responsible Careイニシアチブの参加者として、VUPは環境保護、健康、安全、セキュリティにおけるパフォーマンスを継続的に向上させることにコミットしています。',
          },
          {
            image: badge3.id,
            title: 'SNAS認定',
            subtitle: 'ATBELラボ向けS-118号',
            description:
              '当社のATBEL部門はSNASによって認定されており、国際基準に従った試験サービスの能力と信頼性を確認しています。',
          },
          {
            image: badge4.id,
            title: '研究開発能力証明書',
            subtitle: 'スロバキア共和国教育省',
            description:
              'スロバキア共和国教育省から授与され、研究開発を行うVUPの能力と専門知識を認めています。',
          },
        ],
        featuredCertification: {
          title: 'エコバディスシルバーメダル',
          subtitle: '世界の上位9%',
          description:
            'エコバディスからシルバーメダルを授与され、VUPは特殊化学品の研究・生産分野において世界の上位9%に位置づけられました。この評価は、環境責任、労働と人権、倫理、持続可能な調達における当社の先進的な実践を反映しています。',
          articleLink: 'news/vup-ecovadis-silver-sustainability-award',
          image: certificateImage1.id,
        },
        blockType: 'certifications',
        title: '認証されたサステナビリティへの貢献',
        subtitle:
          'サステナビリティと品質への当社の献身は、責任ある製造とビジネスエクセレンスへのコミットメントを証明する、独立した評価と国際的に認められた認証によって検証されています。',
      },
      {
        title: 'サステナビリティの柱',
        subtitle:
          '当社のサステナビリティへの包括的なアプローチは、当社の事業、イノベーション、パートナーシップを導く4つの基本の柱に基づいています。',
        blockName: null,

        cards: [
          {
            image: pillar1Image.id,
            title: '環境責任',
            subtitle: 'イノベーションによる環境影響の最小化',
            paragraph: {
              root: {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: '環境管理へのコミットメントは、当社の事業のあらゆる側面を推進しています。効率的な資源管理、廃棄物削減への取り組み、革新的なグリーンケミストリーの研究開発を通じて、環境フットプリントの削減に継続的に取り組んでいます。当社の水管理システムと排出ガス管理技術は、持続可能な化学製造における業界をリードする実践を代表するものです。',
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
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'root',
                version: 1,
              },
            },
          },
          {
            image: pillar2Image.id,
            title: '労働と人権',
            subtitle: '安全で包括的な職場の育成',
            paragraph: {
              root: {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: '当社の成功は、従業員の幸福の上に築かれていると信じています。職場安全、専門能力開発、従業員福祉への包括的なアプローチは、業界の基準を設定しています。堅牢な健康・安全プロトコル、継続的な研修プログラム、包括的な方針を通じて、すべてのチームメンバーが支援的で尊重される環境で活躍できることを保証します。',
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
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'root',
                version: 1,
              },
            },
          },
          {
            image: pillar3Image.id,
            title: '倫理とガバナンス',
            subtitle: '最高水準の事業行動の維持',
            paragraph: {
              root: {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: '誠実さは当社の事業の基本です。当社のガバナンスフレームワークは、適用されるすべての規制を遵守しつつ、透明性のある事業慣行を推進します。データセキュリティから腐敗防止措置まで、利害関係者との信頼を築き、化学業界における倫理的な事業行動の模範となる厳格な基準を維持しています。',
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
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'root',
                version: 1,
              },
            },
          },
          {
            image: pillar4Image.id,
            title: '持続可能な調達',
            subtitle: '責任あるサプライチェーンの構築',
            paragraph: {
              root: {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'サステナビリティへのコミットメントは、サプライチェーン全体に及びます。当社の価値観を共有し、厳しい環境・社会基準を満たすサプライヤーを慎重に選定し、協力しています。定期的な評価とパートナーシップを通じて、すべての利害関係者に利益をもたらす、より持続可能で責任ある化学サプライチェーンの構築に取り組んでいます。',
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
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'root',
                version: 1,
              },
            },
          },
        ],
        blockType: 'verticalCards',
      },
      {
        badge: '戦略的重点分野',
        title: '持続可能な卓越性への道',
        subtitle:
          '4つの戦略的柱が、継続的な改善の道のりを導き、すべての利害関係者に永続的な価値を創造するイノベーションを推進します。',
        blockName: null,

        cards: [
          {
            image: focus1Image.id,
            title: '未来の技術',
            paragraph: {
              root: {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: '持続可能な実践を推進し、運用効率を高める最先端技術への投資。当社の研究開発チームは、製造プロセス全体で生産性を向上させながら環境への影響を低減する革新的なソリューションの導入に焦点を当てています。',
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
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'root',
                version: 1,
              },
            },
            highlights: [
              {
                highlight: 'エネルギー効率の高い設備の最適化',
              },
              {
                highlight: '先進的な廃棄物リサイクルシステム',
              },

              {
                highlight: 'グリーンケミストリー研究プログラム',
              },
            ],
          },
          {
            image: focus2Image.id,
            title: '製品管理',
            paragraph: {
              root: {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: '開発から廃棄までのライフサイクル全体を通じて、当社製品の安全で責任ある使用を保証します。環境および社会的影響をあらゆる段階で考慮し、顧客およびパートナーに包括的なサポートを提供することで、製品管理に全体的なアプローチを取っています。',
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
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'root',
                version: 1,
              },
            },
            highlights: [
              {
                highlight: '包括的な安全文書',
              },
              {
                highlight: 'ライフサイクル影響評価',
              },

              {
                highlight: '顧客向けトレーニングプログラム',
              },
            ],
          },
          {
            image: focus3Image.id,
            title: 'より安全なアプリケーション',
            paragraph: {
              root: {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'すべてのアプリケーションにおいて、人の健康と環境安全を優先する革新的なソリューションを開発しています。継続的な研究と業界との協力を通じて、お客様が期待する高性能を維持しながら、化学物質の安全性に関する新しい基準を設定するよう努めています。',
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
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'root',
                version: 1,
              },
            },
            highlights: [
              {
                highlight: 'ハザード削減研究',
              },
              {
                highlight: '安全プロファイルの改善',
              },

              {
                highlight: 'より安全な製造プロセス',
              },
            ],
          },
          {
            image: focus4Image.id,
            title: 'ステークホルダーエンゲージメント',
            paragraph: {
              root: {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: '業界全体の変革を推進するための透明な関係と協力的なパートナーシップの構築。知識を共有し、フィードバックを収集し、より持続可能な化学ソリューションに向けて集合的に取り組むため、顧客、サプライヤー、規制当局、地域社会と積極的に関わっています。',
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
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'root',
                version: 1,
              },
            },
            highlights: [
              {
                highlight: '定期的な透明性報告',
              },
              {
                highlight: 'マルチステークホルダー対話',
              },

              {
                highlight: '業界イニシアチブへの参加',
              },
            ],
          },
        ],
        blockType: 'gridImageCards',
      },
    ],

    meta: {
      title: null,
      image: null,
      description: null,
    },
    publishedAt: '2025-05-24T10:24:53.543Z',
    slug: 'sustainability',
    slugLock: true,
    _status: 'published' as const,
  }
}
