import type { Payload } from 'payload'
import type { SeededMedia } from './1-media'

// English data
const getTeamMembersDataEn = (media: SeededMedia) => {
  const { demoImageDoc, image2Doc, image3Doc } = media

  return [
    {
      name: 'Roman Karlubik',
      role: 'Chief Executive Officer',
      bio: "Leading VUP's strategic direction and commitment to innovation and sustainable growth.",
      image: demoImageDoc.id,
      linkedin: 'https://www.linkedin.com/in/roman-karlubik-754a69170/',
      email: null,
      isHeadOfDepartment: false,
    },
    {
      name: 'Ing. Peter Grolmus',
      role: 'Director of Research & Development',
      bio: "Overseeing VUP's extensive R&D programs, driving innovation in chemical synthesis, process development, and new product creation.",
      image: image2Doc.id,
      linkedin: null,
      email: null,
      isHeadOfDepartment: true,
    },
    {
      name: 'Ing. Ján Chalupka',
      role: 'Head of Sales Department',
      bio: "Managing VUP's Sales strategy, client partnerships, and market development for our diverse product and service portfolio.",
      image: image3Doc.id,
      linkedin: null,
      email: null,
      isHeadOfDepartment: true,
    },
    {
      name: 'Ing. Ľudovít Žiak, PhD',
      role: 'Head of ATBEL Division (Analytical, Technical-Safety, and Ecological Laboratories)',
      bio: 'Leading our SNAS S-118 accredited laboratories, ensuring high-quality analytical services, technical safety testing, and environmental monitoring.',
      image: demoImageDoc.id,
      linkedin: null,
      email: null,
      isHeadOfDepartment: true,
    },
    {
      name: 'Ing. Denisa Juríčeková',
      role: 'Head of Production Department for Cosmetics',
      bio: "Overseeing the development, manufacturing, and quality assurance of VUP's cosmetic products, including custom and private label solutions.",
      image: image2Doc.id,
      linkedin: null,
      email: null,
      isHeadOfDepartment: true,
    },
    {
      name: 'Ing. Stanislava Némethová',
      role: 'Head of HR Department',
      bio: "Managing talent acquisition, employee development, and fostering a positive workplace culture that supports VUP's growth and innovation.",
      image: demoImageDoc.id,
      linkedin: null,
      email: null,
      isHeadOfDepartment: false,
    },
    {
      name: 'Ing. Kurinec Robert',
      role: 'Head of Production',
      bio: 'Leading production operations, ensuring efficient manufacturing processes, quality control, and continuous improvement in chemical production.',
      image: demoImageDoc.id,
      linkedin: null,
      email: null,
      isHeadOfDepartment: true,
    },
    {
      name: 'Mgr. Zuzana Štepaníková Bridová',
      role: 'Head of Economics Department',
      bio: 'Overseeing the economic analysis and financial planning initiatives, ensuring strategic financial management and business development.',
      image: demoImageDoc.id,
      linkedin: null,
      email: null,
      isHeadOfDepartment: true,
    },
  ]
}

// Slovak data
const getTeamMembersDataSk = (media: SeededMedia) => {
  const { demoImageDoc, image2Doc, image3Doc } = media

  return [
    {
      name: 'Roman Karlubik',
      role: 'Generálny riaditeľ',
      bio: 'Vedie strategický smer spoločnosti VUP a jej záväzok k inováciám a udržateľnému rastu.',
      image: demoImageDoc.id,
      linkedin: 'https://www.linkedin.com/in/roman-karlubik-754a69170/',
      email: null,
      isHeadOfDepartment: false,
    },
    {
      name: 'Ing. Peter Grolmus',
      role: 'Riaditeľ výskumu a vývoja',
      bio: 'Dozerá na rozsiahle programy výskumu a vývoja spoločnosti VUP, riadi inovácie v chemickej syntéze, vývoji procesov a tvorbe nových produktov.',
      image: image2Doc.id,
      linkedin: null,
      email: null,
      isHeadOfDepartment: true,
    },
    {
      name: 'Ing. Ján Chalupka',
      role: 'Vedúci obchodného oddelenia',
      bio: 'Riadi obchodnú stratégiu spoločnosti VUP, partnerstvá so zákazníkmi a rozvoj trhu pre naše rozmanité produktové a servisné portfólio.',
      image: image3Doc.id,
      linkedin: null,
      email: null,
      isHeadOfDepartment: true,
    },
    {
      name: 'Ing. Ľudovít Žiak, PhD',
      role: 'Vedúci divízie ATBEL (Analytické, technicko-bezpečnostné a ekologické laboratóriá)',
      bio: 'Vedie naše akreditované laboratóriá SNAS S-118, zabezpečuje vysokokvalitné analytické služby, technicko-bezpečnostné testovanie a environmentálny monitoring.',
      image: demoImageDoc.id,
      linkedin: null,
      email: null,
      isHeadOfDepartment: true,
    },
    {
      name: 'Ing. Denisa Juríčeková',
      role: 'Vedúca výrobného oddelenia pre kozmetiku',
      bio: 'Dozerá na vývoj, výrobu a zabezpečenie kvality kozmetických produktov spoločnosti VUP, vrátane zákazkových riešení a riešení pre súkromné značky.',
      image: image2Doc.id,
      linkedin: null,
      email: null,
      isHeadOfDepartment: true,
    },
    {
      name: 'Ing. Stanislava Némethová',
      role: 'Vedúca personálneho oddelenia',
      bio: 'Riadi získavanie talentov, rozvoj zamestnancov a podporuje pozitívnu pracovnú kultúru, ktorá podporuje rast a inovácie spoločnosti VUP.',
      image: demoImageDoc.id,
      linkedin: null,
      email: null,
      isHeadOfDepartment: false,
    },
    {
      name: 'Ing. Kurinec Robert',
      role: 'Vedúci výroby',
      bio: 'Vedie výrobné operácie, zabezpečuje efektívne výrobné procesy, kontrolu kvality a neustále zlepšovanie chemickej výroby.',
      image: demoImageDoc.id,
      linkedin: null,
      email: null,
      isHeadOfDepartment: true,
    },
    {
      name: 'Mgr. Zuzana Štepaníková Bridová',
      role: 'Vedúca ekonomického oddelenia',
      bio: 'Dozerá na ekonomickú analýzu a iniciatívy finančného plánovania, zabezpečuje strategické finančné riadenie a rozvoj podnikania.',
      image: demoImageDoc.id,
      linkedin: null,
      email: null,
      isHeadOfDepartment: true,
    },
  ]
}

// Japanese data
const getTeamMembersDataJp = (media: SeededMedia) => {
  const { demoImageDoc, image2Doc, image3Doc } = media

  return [
    {
      name: 'Roman Karlubik',
      role: '最高経営責任者',
      bio: 'VUPの戦略的方向性とイノベーションおよび持続可能な成長へのコミットメントを主導しています。',
      image: demoImageDoc.id,
      linkedin: 'https://www.linkedin.com/in/roman-karlubik-754a69170/',
      email: null,
      isHeadOfDepartment: false,
    },
    {
      name: 'Ing. Peter Grolmus',
      role: '研究開発部長',
      bio: 'VUPの広範な研究開発プログラムを監督し、化学合成、プロセス開発、新製品開発におけるイノベーションを推進しています。',
      image: image2Doc.id,
      linkedin: null,
      email: null,
      isHeadOfDepartment: true,
    },
    {
      name: 'Ing. Ján Chalupka',
      role: '営業部長',
      bio: 'VUPの営業戦略、顧客パートナーシップ、および多様な製品とサービスポートフォリオの市場開発を管理しています。',
      image: image3Doc.id,
      linkedin: null,
      email: null,
      isHeadOfDepartment: true,
    },
    {
      name: 'Ing. Ľudovít Žiak, PhD',
      role: 'ATBEL部門長（分析・技術安全・環境試験所）',
      bio: 'SNAS S-118認定試験所を統括し、高品質な分析サービス、技術安全試験、環境モニタリングを確保しています。',
      image: demoImageDoc.id,
      linkedin: null,
      email: null,
      isHeadOfDepartment: true,
    },
    {
      name: 'Ing. Denisa Juríčeková',
      role: '化粧品製造部門長',
      bio: 'カスタム製品やプライベートラベルソリューションを含む、VUPの化粧品の開発、製造、品質保証を監督しています。',
      image: image2Doc.id,
      linkedin: null,
      email: null,
      isHeadOfDepartment: true,
    },
    {
      name: 'Ing. Stanislava Némethová',
      role: '人事部長',
      bio: '人材採用、従業員育成を管理し、VUPの成長とイノベーションをサポートする前向きな職場文化を醸成しています。',
      image: demoImageDoc.id,
      linkedin: null,
      email: null,
      isHeadOfDepartment: false,
    },
    {
      name: 'Ing. Kurinec Robert',
      role: '製造部長',
      bio: '製造業務を統括し、効率的な製造プロセス、品質管理、化学製造における継続的改善を確保しています。',
      image: demoImageDoc.id,
      linkedin: null,
      email: null,
      isHeadOfDepartment: true,
    },
    {
      name: 'Mgr. Zuzana Štepaníková Bridová',
      role: '経済部門長',
      bio: '経済分析と財務計画イニシアチブを監督し、戦略的財務管理とビジネス開発を確保しています。',
      image: demoImageDoc.id,
      linkedin: null,
      email: null,
      isHeadOfDepartment: true,
    },
  ]
}

export const seedTeamMembers = async (payload: Payload, media: SeededMedia) => {
  payload.logger.info('- Seeding team members...')

  // Create team members in English first
  const teamMembersDataEn = getTeamMembersDataEn(media)

  const [rdDoc, commercialDoc, atbelDoc, cosmeticsDoc, hrDoc, productionDoc, economicsDoc, ceoDoc] =
    await Promise.all(
      teamMembersDataEn.map((data) =>
        payload.create({
          collection: 'teamMembers',
          locale: 'en',
          data,
        }),
      ),
    )

  payload.logger.info('✓ Team members seeded (English)')

  // Update with Slovak translations
  payload.logger.info('- Adding Slovak translations...')
  const teamMembersDataSk = getTeamMembersDataSk(media)
  const allTeamMembers = [
    ceoDoc,
    rdDoc,
    commercialDoc,
    atbelDoc,
    cosmeticsDoc,
    hrDoc,
    productionDoc,
    economicsDoc,
  ]

  await Promise.all(
    allTeamMembers.map((member, index) =>
      payload.update({
        collection: 'teamMembers',
        id: member.id,
        locale: 'sk',
        data: teamMembersDataSk[index],
      }),
    ),
  )

  payload.logger.info('✓ Slovak translations added')

  // Update with Japanese translations
  payload.logger.info('- Adding Japanese translations...')
  const teamMembersDataJp = getTeamMembersDataJp(media)

  await Promise.all(
    allTeamMembers.map((member, index) =>
      payload.update({
        collection: 'teamMembers',
        id: member.id,
        locale: 'jp',
        data: teamMembersDataJp[index],
      }),
    ),
  )

  payload.logger.info('✓ Japanese translations added')

  return {
    rdDoc,
    commercialDoc,
    atbelDoc,
    cosmeticsDoc,
  }
}

export type SeededTeamMembers = Awaited<ReturnType<typeof seedTeamMembers>>
