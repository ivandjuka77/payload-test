import type { Payload } from 'payload'
import { fetchFileByURL } from './utils'
import { Media } from '@/payload-types'

const NEXT_PUBLIC_SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL ||
  'https://payload-test-git-staging-ivandjuka77s-projects.vercel.app'

// A centralized array of objects is much more maintainable
const filesToSeed = [
  // Demo Images
  {
    key: 'demoImageDoc',
    url: `${NEXT_PUBLIC_SERVER_URL}/assets/image-post1.webp`,
    alt: 'Demo Image 1',
  },
  {
    key: 'image2Doc',
    url: `${NEXT_PUBLIC_SERVER_URL}/assets/image-post2.webp`,
    alt: 'Post 2 Image',
  },
  {
    key: 'image3Doc',
    url: `${NEXT_PUBLIC_SERVER_URL}/assets/image-post3.webp`,
    alt: 'Post 3 Image',
  }, // Re-using image2 data as in original
  {
    key: 'imageHomeDoc',
    url: `${NEXT_PUBLIC_SERVER_URL}/assets/image-post4.webp`,
    alt: 'Hero Image',
  },
  // Misc
  {
    key: 'ecovadisMedalDoc',
    url: `${NEXT_PUBLIC_SERVER_URL}/assets/ecovadis.png`,
    alt: 'Ecovadis Medal',
  },
  // Products Page
  {
    key: 'productsPageImageDoc',
    url: 'https://plus.unsplash.com/premium_photo-1663039952394-00e73f235728?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UGhhcm1hY2V1dGljYWwlMjBwcm9kdWN0aW9ufGVufDB8fDB8fHww',
    alt: 'Products Page Image',
  },
  // Product Structures
  {
    key: 'dmpaStructureDoc',
    url: `${NEXT_PUBLIC_SERVER_URL}/assets/products/dmpa-sf.png`,
    alt: 'DMPA Structure',
  },
  {
    key: 'dmbaStructureDoc',
    url: `${NEXT_PUBLIC_SERVER_URL}/assets/products/dmba-sf.png`,
    alt: 'DMBA Structure',
  },
  {
    key: 'hpvaStructureDoc',
    url: `${NEXT_PUBLIC_SERVER_URL}/assets/products/hpva-sf.png`,
    alt: 'HPVA Structure',
  },
  {
    key: 'hTempoStructureDoc',
    url: `${NEXT_PUBLIC_SERVER_URL}/assets/products/h-tempo-sf.png`,
    alt: 'HTempo Structure',
  },
  {
    key: 'troloxStructureDoc',
    url: `${NEXT_PUBLIC_SERVER_URL}/assets/products/trolox-sf.png`,
    alt: 'Trolox Structure',
  },
  {
    key: 'tempoStructureDoc',
    url: `${NEXT_PUBLIC_SERVER_URL}/assets/products/tempo-sf.png`,
    alt: 'TEMPO Structure',
  },
  {
    key: 'dapegStructureDoc',
    url: `${NEXT_PUBLIC_SERVER_URL}/assets/products/dapeg-sf.png`,
    alt: 'DAPEG Structure',
  },
  {
    key: 'benzoyloxyTmpStructureDoc',
    url: `${NEXT_PUBLIC_SERVER_URL}/assets/products/benzoyloxy-tmp-sf.png`,
    alt: 'Benzoyloxy TMP Structure',
  },
  {
    key: 'acetamidoTempoStructureDoc',
    url: `${NEXT_PUBLIC_SERVER_URL}/assets/products/acetamido-tempo-sf.png`,
    alt: 'Acetamido TEMPO Structure',
  },
  {
    key: 'temponeStructureDoc',
    url: `${NEXT_PUBLIC_SERVER_URL}/assets/products/tempone-sf.png`,
    alt: 'TEMPONE Structure',
  },
  {
    key: 'colaminPhosphateStructureDoc',
    url: `${NEXT_PUBLIC_SERVER_URL}/assets/products/colamin-phosphate-sf.png`,
    alt: 'COLAMIN Phosphate Structure',
  },
  {
    key: 'vupinStructureDoc',
    url: `${NEXT_PUBLIC_SERVER_URL}/assets/products/vupin-sf.png`,
    alt: 'VUPIN Structure',
  },
  {
    key: 'cas68227338StructureDoc',
    url: `${NEXT_PUBLIC_SERVER_URL}/assets/products/68227-33-8 (structural formula).png`,
    alt: '68227-33-8 Structure',
  },
  {
    key: 'cas1075540StructureDoc',
    url: `${NEXT_PUBLIC_SERVER_URL}/assets/products/107-54-0 (structural formula).png`,
    alt: '107-54-0 Structure',
  },
  {
    key: 'cas1268863StructureDoc',
    url: `${NEXT_PUBLIC_SERVER_URL}/assets/products/126-86-3 (structural formula).png`,
    alt: '126-86-3 Structure',
  },
  {
    key: 'cas1423003StructureDoc',
    url: `${NEXT_PUBLIC_SERVER_URL}/assets/products/142-30-3 (structural formula).png`,
    alt: '142-30-3 Structure',
  },
  {
    key: 'cas1436346StructureDoc',
    url: `${NEXT_PUBLIC_SERVER_URL}/assets/products/1436-34-6 (structural formula).png`,
    alt: '1436-34-6 Structure',
  },
  {
    key: 'cas1888897StructureDoc',
    url: `${NEXT_PUBLIC_SERVER_URL}/assets/products/1888-89-7 (structural formula).png`,
    alt: '1888-89-7 Structure',
  },
  {
    key: 'cas2245309StructureDoc',
    url: `${NEXT_PUBLIC_SERVER_URL}/assets/products/2245-30-9 (structural formula).png`,
    alt: '2245-30-9 Structure',
  },
  {
    key: 'cas2370185StructureDoc',
    url: `${NEXT_PUBLIC_SERVER_URL}/assets/products/2370-18-5 (structural formula).png`,
    alt: '2370-18-5 Structure',
  },
  {
    key: 'cas2403896StructureDoc',
    url: `${NEXT_PUBLIC_SERVER_URL}/assets/products/2403-89-6 (structural formula).png`,
    alt: '2403-89-6 Structure',
  },
  {
    key: 'cas2404446StructureDoc',
    url: `${NEXT_PUBLIC_SERVER_URL}/assets/products/2404-44-6 (structural formula).png`,
    alt: '2404-44-6 Structure',
  },
  {
    key: 'cas2426075StructureDoc',
    url: `${NEXT_PUBLIC_SERVER_URL}/assets/products/2426-07-5 (structural formula).png`,
    alt: '2426-07-5 Structure',
  },
  {
    key: 'cas2984501StructureDoc',
    url: `${NEXT_PUBLIC_SERVER_URL}/assets/products/2984-50-1 (structural formula).png`,
    alt: '2984-50-1 Structure',
  },
  {
    key: 'cas10353534StructureDoc',
    url: `${NEXT_PUBLIC_SERVER_URL}/assets/products/10353-53-4 (structural formula).png`,
    alt: '10353-53-4 Structure',
  },
  {
    key: 'cas14691884StructureDoc',
    url: `${NEXT_PUBLIC_SERVER_URL}/assets/products/14691-88-4 (structural formula).png`,
    alt: '14691-88-4 Structure',
  },
  {
    key: 'cas19549985StructureDoc',
    url: `${NEXT_PUBLIC_SERVER_URL}/assets/products/19549-98-5 (structural formula).png`,
    alt: '19549-98-5 Structure',
  },
  {
    key: 'cas19600636StructureDoc',
    url: `${NEXT_PUBLIC_SERVER_URL}/assets/products/19600-63-6 (structural formula).png`,
    alt: '19600-63-6 Structure',
  },
  {
    key: 'cas36768624StructureDoc',
    url: `${NEXT_PUBLIC_SERVER_URL}/assets/products/36768-62-4 (structural formula).png`,
    alt: '36768-62-4 Structure',
  },
  {
    key: 'cas41556267StructureDoc',
    url: `${NEXT_PUBLIC_SERVER_URL}/assets/products/41556-26-7 (structural formula).png`,
    alt: '41556-26-7 Structure',
  },
  {
    key: 'cas52829079StructureDoc',
    url: `${NEXT_PUBLIC_SERVER_URL}/assets/products/52829-07-9 (structural formula).png`,
    alt: '52829-07-9 Structure',
  },
  {
    key: 'cas79550StructureDoc',
    url: `${NEXT_PUBLIC_SERVER_URL}/assets/products/79-55-0 (structural formula).png`,
    alt: '79-55-0 Structure',
  },
  {
    key: 'cas768661StructureDoc',
    url: `${NEXT_PUBLIC_SERVER_URL}/assets/products/768-66-1 (structural formula).png`,
    alt: '768-66-1 Structure',
  },
  // Badges
  {
    key: 'badge1Doc',
    url: `${NEXT_PUBLIC_SERVER_URL}/assets/badges/iso.png`,
    alt: 'ISO 9001',
  },
  {
    key: 'badge2Doc',
    url: `${NEXT_PUBLIC_SERVER_URL}/assets/badges/responsible-care.png`,
    alt: 'Responsible Care',
  },
  {
    key: 'badge3Doc',
    url: `${NEXT_PUBLIC_SERVER_URL}/assets/badges/snas.png`,
    alt: 'SNAS Accreditation',
  },
  {
    key: 'badge4Doc',
    url: `${NEXT_PUBLIC_SERVER_URL}/assets/badges/sk-emblem.png`,
    alt: 'R&D Competency Certificate',
  },
  // About Us Page
  {
    key: 'ceoMessageImageDoc',
    url: `${NEXT_PUBLIC_SERVER_URL}/assets/roman-2.png`,
    alt: 'CEO Message Image',
  },
  {
    key: 'aboutUsPageImageDoc',
    url: 'https://images.pexels.com/photos/4963437/pexels-photo-4963437.jpeg',
    alt: 'About Us Page Image',
  },
  {
    key: 'aboutUsTimeline1ImageDoc',
    url: 'https://www.fortischem.sk/wp-content/uploads/2023/06/uvodni-placeholder2.jpg',
    alt: 'About Us Timeline 1 Image',
  },
  {
    key: 'aboutUsTimeline2ImageDoc',
    url: `${NEXT_PUBLIC_SERVER_URL}/assets/building.jpg`,
    alt: 'About Us Timeline 2 Image',
  },
  {
    key: 'aboutUsTimeline3ImageDoc',
    url: 'https://images.unsplash.com/photo-1617155093730-a8bf47be792d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2670',
    alt: 'About Us Timeline 3 Image',
  },
  {
    key: 'aboutUsTimeline4ImageDoc',
    url: 'https://www.dominion-global.com/files/images/media/Ecovadis_DOMINION_2.jpg',
    alt: 'About Us Timeline 4 Image',
  },
  // Career Page
  {
    key: 'careerPageImageDoc',
    url: 'https://images.pexels.com/photos/5726790/pexels-photo-5726790.jpeg',
    alt: 'Career Page Image',
  },
  // Industries aggregate page
  {
    key: 'industriesAggregatePageImageDoc',
    url: 'https://images.pexels.com/photos/358276/pexels-photo-358276.jpeg',
    alt: 'Industries Aggregate Page Image',
  },
  {
    key: 'industriesAggregatePageImage2Doc',
    url: 'https://images.pexels.com/photos/2391/dirty-industry-stack-factory.jpg',
    alt: 'Industries Aggregate Page Image 2',
  },
  // Services aggregate page
  {
    key: 'servicesAggregatePageImageDoc',
    url: 'https://images.pexels.com/photos/1366942/pexels-photo-1366942.jpeg',
    alt: 'Services Aggregate Page Image',
  },
  {
    key: 'servicesAggregatePageImage2Doc',
    url: 'https://images.pexels.com/photos/3735757/pexels-photo-3735757.jpeg',
    alt: 'Services Aggregate Page Image 2',
  },
  // Homepage
  {
    key: 'slide1HeroBgDoc',
    url: 'https://images.pexels.com/photos/1871133/pexels-photo-1871133.jpeg',
    alt: 'Slide 1 Hero Background',
  },
  {
    key: 'slide1HeroFeaturedItemDoc',
    url: 'https://images.pexels.com/photos/29707595/pexels-photo-29707595/free-photo-of-classic-red-car-with-white-glove-detailing.jpeg',
    alt: 'Slide 1 Hero Featured Item',
  },
  {
    key: 'slide1HeroCard1Doc',
    url: 'https://images.pexels.com/photos/15019154/pexels-photo-15019154.jpeg',
    alt: 'Slide 1 Hero Card 1',
  },
  {
    key: 'slide1HeroCard2Doc',
    url: 'https://images.unsplash.com/photo-1704130092069-30ae33e2def0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2670',
    alt: 'Slide 1 Hero Card 2',
  },
  {
    key: 'slide1HeroCard3Doc',
    url: 'https://images.pexels.com/photos/8442105/pexels-photo-8442105.jpeg',
    alt: 'Slide 1 Hero Card 3',
  },
  {
    key: 'slide2HeroBgDoc',
    url: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg',
    alt: 'Slide 2 Hero Background',
  },
  {
    key: 'slide2HeroFeaturedItemDoc',
    url: 'https://images.pexels.com/photos/60022/microscope-slide-research-close-up-60022.jpeg',
    alt: 'Slide 2 Hero Featured Item',
  },
  {
    key: 'slide2HeroCard1Doc',
    url: 'https://images.unsplash.com/photo-1602052577122-f73b9710adba?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2670',
    alt: 'Slide 2 Hero Card 1',
  },
  {
    key: 'slide2HeroCard2Doc',
    url: 'https://images.pexels.com/photos/954584/pexels-photo-954584.jpeg',
    alt: 'Slide 2 Hero Card 2',
  },
  {
    key: 'slide2HeroCard3Doc',
    url: 'https://images.unsplash.com/photo-1663354876870-6282cb0a8843?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2670',
    alt: 'Slide 2 Hero Card 3',
  },
  {
    key: 'slide3HeroBgDoc',
    url: 'https://images.pexels.com/photos/339614/pexels-photo-339614.jpeg',
    alt: 'Slide 3 Hero Background',
  },
  {
    key: 'slide3HeroFeaturedItemDoc',
    url: 'https://www.dominion-global.com/files/images/media/Ecovadis_DOMINION_2.jpg',
    alt: 'Slide 3 Hero Featured Item',
  },
  {
    key: 'slide3HeroCard1Doc',
    url: `${NEXT_PUBLIC_SERVER_URL}/assets/badges/badges-combined.png`,
    // url: 'https://www.dominion-global.com/files/images/media/Ecovadis_DOMINION_2.jpg',
    alt: 'Slide 3 Hero Card 1',
  },
  {
    key: 'slide3HeroCard2Doc',
    url: 'https://images.pexels.com/photos/15268778/pexels-photo-15268778.jpeg',
    alt: 'Slide 3 Hero Card 2',
  },
  {
    key: 'slide3HeroCard3Doc',
    url: 'https://images.pexels.com/photos/257738/pexels-photo-257738.jpeg',
    alt: 'Slide 3 Hero Card 3',
  },
  {
    key: 'quickAccessCard1Doc',
    url: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg',
    alt: 'Quick Access Card 1',
  },
  {
    key: 'quickAccessCard2Doc',
    url: 'https://images.pexels.com/photos/2391/dirty-industry-stack-factory.jpg',
    alt: 'Quick Access Card 2',
  },
  {
    key: 'quickAccessCard3Doc',
    url: 'https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg',
    alt: 'Quick Access Card 3',
  },
  {
    key: 'quickAccessCard4Doc',
    url: 'https://images.pexels.com/photos/1048018/pexels-photo-1048018.jpeg',
    alt: 'Quick Access Card 4',
  },
  {
    key: 'sustainabilitydemoImageDoc',
    url: 'https://images.pexels.com/photos/15480413/pexels-photo-15480413/free-photo-of-modern-futuristic-construction-in-city.jpeg',
    alt: 'Sustainability Image 1',
  },
  // Applications
  {
    key: 'applicationsdemoImageDoc',
    url: 'https://plus.unsplash.com/premium_photo-1682142455929-cfdbbf6d7f4e',
    alt: 'Waterborne Coatings Application',
  },
  {
    key: 'applicationsImage2Doc',
    url: 'https://images.pexels.com/photos/5994241/pexels-photo-5994241.jpeg',
    alt: 'Polyurethane Dispersions Application',
  },
  {
    key: 'applicationsImage3Doc',
    url: 'https://images.pexels.com/photos/459486/pexels-photo-459486.jpeg',
    alt: 'Durable Polyesters Application',
  },
  {
    key: 'applicationsImage4Doc',
    url: 'https://images.unsplash.com/photo-1573506154555-62ee33ed5c61',
    alt: 'Powder Coatings Application',
  },
  {
    key: 'applicationsImage5Doc',
    url: 'https://images.unsplash.com/photo-1643533117971-b2de345cf3dc',
    alt: 'Adhesives & Inks Application',
  },
  {
    key: 'applicationsImage6Doc',
    url: 'https://images.unsplash.com/photo-1706881811932-da4389051b8f',
    alt: 'Synthetic Lubricants Application',
  },
  // Industries
  {
    key: 'automotiveDoc',
    url: 'https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg',
    alt: 'Automotive Industry',
  },
  {
    key: 'coatingsPaintsInksDoc',
    url: 'https://images.pexels.com/photos/16751235/pexels-photo-16751235/free-photo-of-paint-stick-on-blue-wall.jpeg',
    alt: 'Coatings, Paints & Inks Industry',
  },
  {
    key: 'polymersPlasticsDoc',
    url: 'https://images.pexels.com/photos/31115985/pexels-photo-31115985/free-photo-of-close-up-of-white-plastic-screw-caps-in-bulk.jpeg',
    alt: 'Polymers & Plastics Industry',
  },
  {
    key: 'adhesivesSealantsDoc',
    url: 'https://images.pexels.com/photos/6124242/pexels-photo-6124242.jpeg',
    alt: 'Adhesives & Sealants Industry',
  },
  {
    key: 'pharmaceuticalsDoc',
    url: 'https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg',
    alt: 'Pharmaceuticals & Biotechnology Industry',
  },
  {
    key: 'petrochemicalsRefineriesDoc',
    url: 'https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg',
    alt: 'Petrochemicals & Refineries Industry',
  },
  {
    key: 'batteryEnergyStorageDoc',
    url: 'https://images.pexels.com/photos/9800022/pexels-photo-9800022.jpeg',
    alt: 'Battery Energy Storage Industry',
  },
  {
    key: 'buildingConstructionDoc',
    url: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
    alt: 'Building & Construction Industry',
  },
  // Industry Challenges
  {
    key: 'automotiveChallenge1Doc',
    url: 'https://images.pexels.com/photos/14615263/pexels-photo-14615263.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Advanced Automotive Coatings Challenge',
  },
  {
    key: 'automotiveChallenge2Doc',
    url: 'https://images.pexels.com/photos/8478276/pexels-photo-8478276.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load',
    alt: 'High-Performance Automotive Adhesives Challenge',
  },
  {
    key: 'automotiveChallenge3Doc',
    url: 'https://images.pexels.com/photos/10162529/pexels-photo-10162529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Surface Preparation & Cleaning Challenge',
  },
  {
    key: 'automotiveChallenge4Doc',
    url: 'https://images.pexels.com/photos/5506047/pexels-photo-5506047.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load',
    alt: 'Component Testing & Compliance Challenge',
  },
  {
    key: 'coatingsChallenge1Doc',
    url: 'https://plus.unsplash.com/premium_photo-1682142471398-ccc685f5c849?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29hdGluZ3N8ZW58MHx8MHx8fDA%3D',
    alt: 'Waterborne Coatings Challenge',
  },
  {
    key: 'coatingsChallenge2Doc',
    url: 'https://images.unsplash.com/photo-1673297821205-e0575bbc2ab7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvd2RlcmVkJTIwY29hdGluZ3N8ZW58MHx8MHx8fDA%3D',
    alt: 'Powder Coatings & Resin Modification Challenge',
  },
  {
    key: 'coatingsChallenge3Doc',
    url: 'https://plus.unsplash.com/premium_photo-1682142462983-82489bc75cd9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGNvYXRpbmd8ZW58MHx8MHx8fDA%3D',
    alt: 'Environmental Regulations Challenge',
  },
  {
    key: 'polymersChallenge1Doc',
    url: 'https://images.pexels.com/photos/15158323/pexels-photo-15158323/free-photo-of-blue-guitar-pick-in-hand.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Polymer Stabilization Challenge',
  },
  {
    key: 'polymersChallenge2Doc',
    url: 'https://plus.unsplash.com/premium_photo-1681426678542-613c306013e1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UG9seW1lcnxlbnwwfHwwfHx8MA%3D%3D',
    alt: 'Controlled Polymerization Challenge',
  },
  {
    key: 'polymersChallenge3Doc',
    url: 'https://images.unsplash.com/photo-1624804642361-a070c6497471?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9seXVyZXRoYW5lJTIwYnVpbGRpbmclMjBibG9ja3N8ZW58MHx8MHx8fDA%3D',
    alt: 'Polyurethane Building Blocks Challenge',
  },
  {
    key: 'polymersChallenge4Doc',
    url: 'https://plus.unsplash.com/premium_photo-1674641195187-99d2160eed5a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9seW1lcnxlbnwwfHwwfHx8MA%3D%3D',
    alt: 'Crosslinking & Property Enhancement Challenge',
  },
  {
    key: 'polymersChallenge5Doc',
    url: 'https://plus.unsplash.com/premium_photo-1669301638284-ed33553ef8fa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TW9ub21lcnMlMjBmb3IlMjBQb2x5bWVyJTIwU3ludGhlc2lzfGVufDB8fDB8fHww',
    alt: 'Monomers for Polymer Synthesis Challenge',
  },
  {
    key: 'adhesivesChallenge1Doc',
    url: 'https://plus.unsplash.com/premium_photo-1683141430181-f4cfe16b1e62?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2VhbGFudHxlbnwwfHwwfHx8MA%3D%3D',
    alt: 'Waterborne Adhesive Systems Challenge',
  },
  {
    key: 'adhesivesChallenge2Doc',
    url: 'https://images.pexels.com/photos/7180822/pexels-photo-7180822.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Reactive Hot Melt Adhesives Challenge',
  },
  {
    key: 'adhesivesChallenge3Doc',
    url: 'https://images.pexels.com/photos/5963144/pexels-photo-5963144.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Enhanced Strength & Durability Challenge',
  },
  {
    key: 'adhesivesChallenge4Doc',
    url: 'https://images.pexels.com/photos/3735769/pexels-photo-3735769.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Performance Additives & Custom Solutions Challenge',
  },
  {
    key: 'pharmaChallenge1Doc',
    url: 'https://plus.unsplash.com/premium_photo-1661956660871-2cd646709c90?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGhhcm1hY2V1dGljYWwlMjBwcm9kdWN0aW9ufGVufDB8fDB8fHww',
    alt: 'API Synthesis Challenge',
  },
  {
    key: 'pharmaChallenge2Doc',
    url: 'https://plus.unsplash.com/premium_photo-1663039952394-00e73f235728?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UGhhcm1hY2V1dGljYWwlMjBwcm9kdWN0aW9ufGVufDB8fDB8fHww',
    alt: 'Biomedical Materials Challenge',
  },
  {
    key: 'pharmaChallenge3Doc',
    url: 'https://images.unsplash.com/photo-1729949129758-0b668478dce5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UGhhcm1hY2V1dGljYWwlMjBwcm9kdWN0aW9ufGVufDB8fDB8fHww',
    alt: 'Diagnostic Aids Challenge',
  },
  {
    key: 'pharmaChallenge4Doc',
    url: 'https://images.unsplash.com/photo-1631980838946-755ba8443ab7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UGhhcm1hY2V1dGljYWwlMjBwcm9kdWN0aW9ufGVufDB8fDB8fHww',
    alt: 'Drug Discovery Challenge',
  },
  {
    key: 'petroChallenge1Doc',
    url: 'https://plus.unsplash.com/premium_photo-1682144394281-372331accc78?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGV0cm9jaGVtaWNhbHN8ZW58MHx8MHx8fDA%3D',
    alt: 'Fuel Processing & Storage Challenge',
  },
  {
    key: 'petroChallenge2Doc',
    url: 'https://images.unsplash.com/photo-1570615541379-e6b7ab6d4eb9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGV0cm9jaGVtaWNhbCUyMHN5bnRoZXNpc3xlbnwwfHwwfHx8MA%3D%3D',
    alt: 'Petrochemical Synthesis Challenge',
  },
  {
    key: 'petroChallenge3Doc',
    url: 'https://plus.unsplash.com/premium_photo-1682144440391-bece4365baa3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGV0cm9jaGVtaWNhbHN8ZW58MHx8MHx8fDA%3D',
    alt: 'Downstream Raw Materials Challenge',
  },
  {
    key: 'petroChallenge4Doc',
    url: 'https://plus.unsplash.com/premium_photo-1682148230470-2b67a322ab34?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHBldHJvY2hlbWljYWxzfGVufDB8fDB8fHww',
    alt: 'Process Optimization Challenge',
  },
  {
    key: 'batteryChallenge1Doc',
    url: 'https://plus.unsplash.com/premium_photo-1723507297320-2366db25341e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8T3JnYW5pYyUyMFJhZGljYWwlMjBCYXR0ZXJpZXMlMjAoT1JCcyl8ZW58MHx8MHx8fDA%3D',
    alt: 'Organic Radical Batteries Challenge',
  },
  {
    key: 'batteryChallenge2Doc',
    url: 'https://images.pexels.com/photos/7904403/pexels-photo-7904403.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Redox Flow Batteries Challenge',
  },
  {
    key: 'batteryChallenge3Doc',
    url: 'https://images.unsplash.com/photo-1581244249923-172ef5029576?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGJhdHRlcmllc3xlbnwwfHwwfHx8MA%3D%3D',
    alt: 'Material Development Challenge',
  },
  {
    key: 'constructionChallenge1Doc',
    url: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Concrete & Cement Enhancement Challenge',
  },
  {
    key: 'constructionChallenge2Doc',
    url: 'https://images.pexels.com/photos/5691692/pexels-photo-5691692.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Plasters & Coatings Challenge',
  },
  {
    key: 'constructionChallenge3Doc',
    url: 'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Formwork Release Challenge',
  },
  {
    key: 'constructionChallenge4Doc',
    url: 'https://images.pexels.com/photos/5691644/pexels-photo-5691644.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Construction Adhesives & Sealants Challenge',
  },
  // Sustainability Page
  {
    key: 'sustainabilityHeroImageDoc',
    url: 'https://images.unsplash.com/photo-1590519919397-5f068c8dca78?q=80&w=800&h=400&auto=format&fit=crop&ixlib=rb-4.1.0',
    alt: 'Sustainability Hero Image',
  },
  {
    key: 'sustainabilityPillar1Doc',
    url: 'https://images.unsplash.com/photo-1594790632591-1e21e4c3dfc9?q=80&w=800&h=400&auto=format&fit=crop&ixlib=rb-4.1.0',
    alt: 'Sustainability Pillar 1 Image',
  },
  {
    key: 'sustainabilityPillar2Doc',
    url: 'https://images.unsplash.com/photo-1616996691748-3f5f78093ab0?q=80&w=800&h=400&auto=format&fit=crop&ixlib=rb-4.1.0',
    alt: 'Sustainability Pillar 2 Image',
  },
  {
    key: 'sustainabilityPillar3Doc',
    url: 'https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?q=80&w=800&h=400&auto=format&fit=crop&ixlib=rb-4.1.0',
    alt: 'Sustainability Pillar 3 Image',
  },
  {
    key: 'sustainabilityPillar4Doc',
    url: 'https://images.unsplash.com/photo-1713078044558-cdb22828cf07?q=80&w=800&h=400&auto=format&fit=crop&ixlib=rb-4.1.0',
    alt: 'Sustainability Pillar 4 Image',
  },
  {
    key: 'sustainabilityFocus1Doc',
    url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&h=400&auto=format&fit=crop&ixlib=rb-4.0.3',
    alt: 'Sustainability Focus 1 Image',
  },
  {
    key: 'sustainabilityFocus2Doc',
    url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&h=400&auto=format&fit=crop&ixlib=rb-4.0.3',
    alt: 'Sustainability Focus 2 Image',
  },
  {
    key: 'sustainabilityFocus3Doc',
    url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&h=400&auto=format&fit=crop&ixlib=rb-4.0.3',
    alt: 'Sustainability Focus 3 Image',
  },
  {
    key: 'sustainabilityFocus4Doc',
    url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&h=400&auto=format&fit=crop&ixlib=rb-4.0.3',
    alt: 'Sustainability Focus 4 Image',
  },
  // Services
  {
    key: 'atbelImageDoc',
    url: 'https://images.pexels.com/photos/60022/microscope-slide-research-close-up-60022.jpeg',
    alt: 'ATBEL Image',
  },
  {
    key: 'customSynthesisImageDoc',
    url: 'https://images.unsplash.com/photo-1602052577122-f73b9710adba?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2670',
    alt: 'Custom Synthesis Image',
  },
  {
    key: 'researchDevelopmentImageDoc',
    url: 'https://images.pexels.com/photos/954584/pexels-photo-954584.jpeg',
    alt: 'Research Development Image',
  },
  {
    key: 'regulatoryTechnicalSupportImageDoc',
    url: 'https://images.unsplash.com/photo-1663354876870-6282cb0a8843?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2670',
    alt: 'Regulatory Technical Support Image',
  },
  {
    key: 'customCosmeticsManufacturingImageDoc',
    url: 'https://images.pexels.com/photos/8850984/pexels-photo-8850984.jpeg',
    alt: 'Custom Cosmetics Manufacturing Image',
  },
  // Contact Us Page
  {
    key: 'contactUsHeroImageDoc',
    url: 'https://images.pexels.com/photos/91222/pexels-photo-91222.jpeg',
    alt: 'Contact Us Hero Image',
  },
  {
    key: 'contactUsBojniceImageDoc',
    url: 'https://images.pexels.com/photos/7649492/pexels-photo-7649492.jpeg',
    alt: 'Contact Us Bojnice Image',
  },
  // Forbes Blog
  {
    key: 'forbesBlogImageDoc',
    url: 'https://images.pexels.com/photos/10514729/pexels-photo-10514729.jpeg',
    alt: 'Chemistry Production Site',
  },
  {
    key: 'ecovadisImageDoc',
    url: 'https://www.dominion-global.com/files/images/media/Ecovadis_DOMINION_2.jpg',
    alt: 'Ecovadis Medal',
  },
  {
    key: 'vupCosmeticsImageDoc',
    url: 'https://cdn.myshoptet.com/usr/www.vupcosmetics.sk/user/logos/vup-cosmetics-logo.png',
    alt: 'VUP Cosmetics',
  },

  // Research & Development Service Page
  {
    key: 'RDServicePageService1Doc',
    url: 'https://images.pexels.com/photos/8539896/pexels-photo-8539896.jpeg',
    alt: 'Research Development Service Page Service 1 Image',
  },
  {
    key: 'RDServicePageService2Doc',
    url: 'https://images.unsplash.com/photo-1617155093730-a8bf47be792d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2670',
    alt: 'Research Development Service Page Service 2 Image',
  },
  {
    key: 'RDServicePageService3Doc',
    url: 'https://images.pexels.com/photos/5532675/pexels-photo-5532675.jpeg',
    alt: 'Research Development Service Page Service 3 Image',
  },
  {
    key: 'RDServicePageService4Doc',
    url: 'https://images.pexels.com/photos/8443076/pexels-photo-8443076.jpeg',
    alt: 'Research Development Service Page Service 4 Image',
  },
  {
    key: 'RDServicePageService5Doc',
    url: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2670',
    alt: 'Research Development Service Page Service 5 Image',
  },
  {
    key: 'RDServicePageService6Doc',
    url: 'https://images.pexels.com/photos/10187647/pexels-photo-10187647.jpeg',
    alt: 'Research Development Service Page Service 6 Image',
  },

  // ATBEL Service Page
  {
    key: 'ATBELServicePageService1Doc',
    url: 'https://images.unsplash.com/photo-1576669801838-1b1c52121e6a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2253',
    alt: 'ATBEL Service Page Hero Image',
  },
  {
    key: 'ATBELServicePageService2Doc',
    url: 'https://m.media-amazon.com/images/I/41kXNsA-ZsL._AC_UF1000,1000_QL80_.jpg',
    alt: 'ATBEL Service Page Featured Image',
  },
  {
    key: 'ATBELServicePageService3Doc',
    url: 'https://images.pexels.com/photos/8533036/pexels-photo-8533036.jpeg',
    alt: 'ATBEL Service Page Service 3 Image',
  },
  {
    key: 'ATBELServicePageService4Doc',
    url: 'https://images.pexels.com/photos/8450142/pexels-photo-8450142.jpeg',
    alt: 'ATBEL Service Page Service 4 Image',
  },

  // Custom Cosmetics Manufacturing Service Page
  {
    key: 'CCMServicePageService1Doc',
    url: 'https://images.unsplash.com/photo-1632452479455-e3d5e3159b63?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2745',
    alt: 'CCM Service Page Service 1 Image',
  },
  {
    key: 'CCMServicePageService2Doc',
    url: 'https://images.unsplash.com/photo-1672062519525-5c04bfaefea3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2671',
    alt: 'CCM Service Page Service 2 Image',
  },
  {
    key: 'CCMServicePageService3Doc',
    url: 'https://images.unsplash.com/photo-1580795478724-5b048f1c5b03?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2672',
    alt: 'CCM Service Page Service 3 Image',
  },

  // Regulatory & Technical Support Service Page
  {
    key: 'RTServicePageService1Doc',
    url: 'https://images.pexels.com/photos/8101513/pexels-photo-8101513.jpeg',
    alt: 'RTService Page Service 1 Image',
  },
  {
    key: 'RTServicePageService2Doc',
    url: 'https://images.unsplash.com/photo-1720036236694-d0a231c52563?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2670',
    alt: 'RTService Page Service 2 Image',
  },
  {
    key: 'RTServicePageService3Doc',
    url: 'https://images.pexels.com/photos/7230220/pexels-photo-7230220.jpeg',
    alt: 'RTService Page Service 3 Image',
  },
  {
    key: 'RTServicePageService4Doc',
    url: 'https://images.pexels.com/photos/3735757/pexels-photo-3735757.jpeg',
    alt: 'RTService Page Service 4 Image',
  },

  // Custom Synthesis & Manufacturing Service Page
  {
    key: 'CSMServicePageService1Doc',
    url: 'https://images.unsplash.com/photo-1617155093730-a8bf47be792d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2670',
    alt: 'CSM Service Page Service 1 Image',
  },
  {
    key: 'CSMServicePageService2Doc',
    url: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2670',
    alt: 'CSM Service Page Service 2 Image',
  },
  {
    key: 'CSMServicePageService3Doc',
    url: 'https://images.pexels.com/photos/3855962/pexels-photo-3855962.jpeg',
    alt: 'CSM Service Page Service 3 Image',
  },

  // KEY PRODUCT APPLICATIONS IMAGES

  // DMBA
  {
    key: 'DMBAApplication1Doc',
    url: 'https://images.pexels.com/photos/29707595/pexels-photo-29707595/free-photo-of-classic-red-car-with-white-glove-detailing.jpeg',
    alt: 'DMBA Application 1 Image',
  },
  {
    key: 'DMBAApplication2Doc',
    url: 'https://images.unsplash.com/photo-1760842543713-108c3cadbba1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2670',
    alt: 'DMBA Application 2 Image',
  },
  {
    key: 'DMBAApplication3Doc',
    url: 'https://images.unsplash.com/photo-1643142314404-32a911f3ede2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2670',
    alt: 'DMBA Application 3 Image',
  },
  {
    key: 'DMBAApplication4Doc',
    url: 'https://images.unsplash.com/photo-1474065581914-e24d783b0c55?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2670',
    alt: 'DMBA Application 4 Image',
  },

  // DMPA
  {
    key: 'DMPAApplication1Doc',
    url: 'https://images.pexels.com/photos/14615263/pexels-photo-14615263.jpeg',
    alt: 'DMPA Application 1 Image',
  },
  {
    key: 'DMPAApplication2Doc',
    url: 'https://media.istockphoto.com/id/1141438910/photo/hardwood-floor-restoring.jpg?s=612x612&w=0&k=20&c=LXMTr1T-i6i8O6Bmoaa_n0InYPlvW-UjkyxuIwrED_Q=',
    alt: 'DMPA Application 2 Image',
  },
  {
    key: 'DMPAApplication3Doc',
    url: 'https://powderwerx.com/wp-content/uploads/2021/07/What-is-Powder-Coating.jpeg',
    alt: 'DMPA Application 3 Image',
  },
  {
    key: 'DMPAApplication4Doc',
    url: 'https://static.wixstatic.com/media/1e9e7a_df5fd4344bd846b385d2e529186693cc~mv2.jpg/v1/fill/w_640,h_454,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1e9e7a_df5fd4344bd846b385d2e529186693cc~mv2.jpg',
    alt: 'DMPA Application 4 Image',
  },

  // HPVA
  {
    key: 'HPVAApplication1Doc',
    url: 'https://powderwerx.com/wp-content/uploads/2021/07/What-is-Powder-Coating.jpeg',
    alt: 'HPVA Application 1 Image',
  },
  {
    key: 'HPVAApplication2Doc',
    url: 'https://images.pexels.com/photos/1366942/pexels-photo-1366942.jpeg',
    alt: 'HPVA Application 2 Image',
  },
  {
    key: 'HPVAApplication3Doc',
    url: 'https://santiemidwest.com/product_images/uploaded_images/santie-wholesale-image.jpg',
    alt: 'HPVA Application 3 Image',
  },
  {
    key: 'HPVAApplication4Doc',
    url: 'https://images.unsplash.com/photo-1581093577421-f561a654a353?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2670',
    alt: 'HPVA Application 4 Image',
  },
  {
    key: 'HPVAApplication5Doc',
    url: 'https://mattressstoreslosangeles.com/cdn/shop/articles/106a2b59e2cba3bc0c045dbfde89f301.jpg?v=1732262718',
    alt: 'HPVA Application 5 Image',
  },

  // HTempo
  {
    key: 'HTempoApplication1Doc',
    url: 'https://images.unsplash.com/photo-1566221857770-508d35ee6220?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2670',
    alt: 'HTempo Application 1 Image',
  },
  {
    key: 'HTempoApplication2Doc',
    url: 'https://images.pexels.com/photos/3735757/pexels-photo-3735757.jpeg',
    alt: 'HTempo Application 2 Image',
  },
  {
    key: 'HTempoApplication3Doc',
    url: 'https://images.pexels.com/photos/8442105/pexels-photo-8442105.jpeg',
    alt: 'HTempo Application 3 Image',
  },
  {
    key: 'HTempoApplication4Doc',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWU78HN9PIEuargwzduhmS21cJTm9H0BDDrg&s',
    alt: 'HTempo Application 4 Image',
  },

  // TEMPO
  {
    key: 'TEMPOApplication1Doc',
    url: 'https://images.pexels.com/photos/8850984/pexels-photo-8850984.jpeg',
    alt: 'TEMPO Application 1 Image',
  },
  {
    key: 'TEMPOApplication2Doc',
    url: 'https://images.unsplash.com/photo-1586013286823-5ba3576ea8d2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2670',
    alt: 'TEMPO Application 2 Image',
  },
  {
    key: 'TEMPOApplication3Doc',
    url: 'https://images.pexels.com/photos/8442105/pexels-photo-8442105.jpeg',
    alt: 'TEMPO Application 3 Image',
  },
  {
    key: 'TEMPOApplication4Doc',
    url: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2669',
    alt: 'TEMPO Application 4 Image',
  },
  {
    key: 'TEMPOApplication5Doc',
    url: 'https://images.unsplash.com/photo-1535350356005-fd52b3b524fb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2670',
    alt: 'TEMPO Application 5 Image',
  },

  // TEMP
  {
    key: 'TEMPApplication1Doc',
    url: 'https://images.unsplash.com/photo-1586013286823-5ba3576ea8d2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2670',
    alt: 'TEMP Application 1 Image',
  },
  {
    key: 'TEMPApplication2Doc',
    url: 'https://images.unsplash.com/photo-1581093577421-f561a654a353?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2670',
    alt: 'TEMP Application 2 Image',
  },
  {
    key: 'TEMPApplication3Doc',
    url: 'https://images.pexels.com/photos/3825573/pexels-photo-3825573.jpeg',
    alt: 'TEMP Application 3 Image',
  },

  // DAPEG
  {
    key: 'DAPEGApplication1Doc',
    url: 'https://images.pexels.com/photos/3845129/pexels-photo-3845129.jpeg',
    alt: 'DAPEG Application 1 Image',
  },
  {
    key: 'DAPEGApplication2Doc',
    url: 'https://www.hiperbaric.com/wp-content/uploads/2021/03/Portada-scaled.jpeg',
    alt: 'DAPEG Application 2 Image',
  },
  {
    key: 'DAPEGApplication3Doc',
    url: 'https://images.unsplash.com/photo-1638258581353-0ab658542e73?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=3415',
    alt: 'DAPEG Application 3 Image',
  },
  {
    key: 'DAPEGApplication4Doc',
    url: 'https://cdn.sci.news/images/enlarge11/image_12010e-Hygroscopic-Hydrogel.jpg',
    alt: 'DAPEG Application 4 Image',
  },
  {
    key: 'DAPEGApplication5Doc',
    url: 'https://images.pexels.com/photos/3735757/pexels-photo-3735757.jpeg',
    alt: 'DAPEG Application 5 Image',
  },

  // VUPIN
  {
    key: 'VUPINApplication1Doc',
    url: 'https://images.unsplash.com/photo-1588011930968-eadac80e6a5a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2669',
    alt: 'VUPIN Application 1 Image',
  },
  {
    key: 'VUPINApplication2Doc',
    url: 'https://images.unsplash.com/photo-1736870031337-cc273067ad33?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2670',
    alt: 'VUPIN Application 2 Image',
  },
  {
    key: 'VUPINApplication3Doc',
    url: 'https://images.pexels.com/photos/29411310/pexels-photo-29411310.jpeg',
    alt: 'VUPIN Application 3 Image',
  },
  {
    key: 'VUPINApplication4Doc',
    url: 'https://images.pexels.com/photos/26841506/pexels-photo-26841506.jpeg',
    alt: 'VUPIN Application 4 Image',
  },
]

// Helper function to create only missing media
async function createMissingMedia(
  payload: Payload,
  missingKeys: string[],
  mediaMap: Record<string, Media>,
): Promise<void> {
  const missingFiles = filesToSeed.filter((file) => missingKeys.includes(file.key))

  payload.logger.info(`- Creating ${missingFiles.length} missing media files...`)

  for (const file of missingFiles) {
    try {
      payload.logger.info(`  ⏳ Creating ${file.key} (${file.alt})...`)
      const buffer = await fetchFileByURL(file.url)
      const doc = await payload.create({
        collection: 'media',
        file: buffer,
        data: { alt: file.alt },
      })
      mediaMap[file.key] = doc
      payload.logger.info(`  ✅ Successfully created ${file.key} → ID: ${doc.id}`)
    } catch (error) {
      payload.logger.error(`  ❌ Failed to create ${file.key}: ${error}`)
    }
  }
}

// Extract original logic into separate function
async function createAllMedia(payload: Payload): Promise<Record<string, Media>> {
  payload.logger.info('- Creating fresh media documents...')
  payload.logger.info(`NEXT_PUBLIC_SERVER_URL: ${NEXT_PUBLIC_SERVER_URL}`)

  // Step 1: Fetch all file buffers in parallel
  payload.logger.info(`- Fetching ${filesToSeed.length} files...`)
  const fileBuffers = await Promise.all(filesToSeed.map((file) => fetchFileByURL(file.url)))

  const filesWithBuffers = filesToSeed.map((file, i) => ({
    ...file,
    buffer: fileBuffers[i],
  }))

  // Step 2: Batch-create all media documents
  payload.logger.info(`- Creating ${filesWithBuffers.length} media documents in batches...`)
  const BATCH_SIZE = 40
  const createdDocs = []

  for (let i = 0; i < filesWithBuffers.length; i += BATCH_SIZE) {
    const batch = filesWithBuffers.slice(i, i + BATCH_SIZE)
    const batchNumber = i / BATCH_SIZE + 1
    payload.logger.info(
      `  - Processing batch ${batchNumber} of ${Math.ceil(filesWithBuffers.length / BATCH_SIZE)}...`,
    )

    const createPromises = batch.map((file) =>
      payload
        .create({
          collection: 'media',
          file: file.buffer,
          data: { alt: file.alt },
        })
        .then((doc) => ({ key: file.key, doc })),
    )

    const batchResults = await Promise.all(createPromises)
    createdDocs.push(...batchResults)
  }

  // Step 3: Reconstruct the original return object dynamically
  const seededMediaObject = createdDocs.reduce((acc: Record<string, Media>, { key, doc }) => {
    acc[key] = doc
    return acc
  }, {})

  payload.logger.info('✅ All media created successfully!')
  return seededMediaObject
}

export const seedMedia = async (payload: Payload, useExisting = true) => {
  payload.logger.info('- Seeding media...')

  if (useExisting) {
    payload.logger.info('🔍 Using existing media documents...')

    // Query all existing media documents
    const existingMedia = await payload.find({
      collection: 'media',
      limit: 1000, // Increase if you have more media files
      depth: 0, // Don't need deep population for this
    })

    payload.logger.info(
      `📊 Found ${existingMedia.docs.length} existing media documents in database`,
    )

    // Create mapping of expected keys to existing media
    const mediaMap: Record<string, Media> = {}
    const foundKeys: string[] = []
    const missingKeys: string[] = []

    payload.logger.info('🔗 Starting media mapping process...')

    // Try to map each expected file to an existing media document
    filesToSeed.forEach(({ key, alt, url }) => {
      let found: Media | undefined
      let matchStrategy = ''

      // Strategy 1: Exact alt text match (most reliable)
      found = existingMedia.docs.find((doc) => doc.alt === alt)
      if (found) {
        matchStrategy = 'exact alt match'
      }

      if (!found) {
        // Strategy 2: Case-insensitive alt text match
        found = existingMedia.docs.find((doc) => doc.alt?.toLowerCase() === alt.toLowerCase())
        if (found) {
          matchStrategy = 'case-insensitive alt match'
        }
      }

      if (!found) {
        // Strategy 3: Match by filename patterns from URL
        const urlFilename = url.split('/').pop()?.split('?')[0]?.toLowerCase()
        if (urlFilename) {
          found = existingMedia.docs.find((doc) => {
            const docFilename = doc.filename?.toLowerCase()
            return docFilename?.includes(urlFilename) || urlFilename.includes(docFilename || '')
          })
          if (found) {
            matchStrategy = 'filename pattern match'
          }
        }
      }

      if (!found) {
        // Strategy 4: Match by key patterns (fallback)
        const keyPattern = key
          .replace('Doc', '')
          .replace(/([A-Z])/g, ' $1') // Convert camelCase to words
          .toLowerCase()
          .trim()

        found = existingMedia.docs.find((doc) => {
          const altWords = doc.alt?.toLowerCase() || ''
          const filenameWords = doc.filename?.toLowerCase() || ''

          return (
            altWords.includes(keyPattern) ||
            filenameWords.includes(keyPattern) ||
            keyPattern
              .split(' ')
              .every((word) => altWords.includes(word) || filenameWords.includes(word))
          )
        })
        if (found) {
          matchStrategy = 'key pattern match'
        }
      }

      // Record the result
      if (found) {
        mediaMap[key] = found
        foundKeys.push(key)
        payload.logger.info(`  ✅ ${key} → "${found.alt}" (ID: ${found.id}) [${matchStrategy}]`)
      } else {
        missingKeys.push(key)
        payload.logger.warn(`  ❌ ${key} → Expected: "${alt}" [no match found]`)
      }
    })

    // Summary logging
    payload.logger.info(`\n📈 MAPPING SUMMARY:`)
    payload.logger.info(`  ✅ Successfully mapped: ${foundKeys.length}/${filesToSeed.length} files`)
    payload.logger.info(`  ❌ Missing files: ${missingKeys.length}`)

    if (missingKeys.length > 0) {
      payload.logger.warn(`\n⚠️  Missing media keys: ${missingKeys.join(', ')}`)

      // Optional: Create only missing media files (if not too many)
      if (missingKeys.length <= 10) {
        payload.logger.info(`🔧 Creating missing media files (${missingKeys.length} items)...`)
        await createMissingMedia(payload, missingKeys, mediaMap)
        payload.logger.info(`✅ Missing media creation completed`)
      } else {
        payload.logger.warn(
          `⚠️  Too many missing files (${missingKeys.length}). Skipping automatic creation.`,
        )
        payload.logger.info(`💡 Consider running with useExisting=false to create all media fresh.`)
      }

      // Debug: Show some existing media for reference
      if (existingMedia.docs.length > 0 && existingMedia.docs.length <= 20) {
        payload.logger.info(`\n🔍 Available media in database:`)
        existingMedia.docs.slice(0, 10).forEach((doc, i) => {
          payload.logger.info(`  ${i + 1}. "${doc.alt}" (${doc.filename}) - ID: ${doc.id}`)
        })
        if (existingMedia.docs.length > 10) {
          payload.logger.info(`  ... and ${existingMedia.docs.length - 10} more`)
        }
      }
    } else {
      payload.logger.info(`🎉 Perfect! All required media files found and mapped successfully!`)
    }

    payload.logger.info(
      `✅ Media mapping completed - returning ${Object.keys(mediaMap).length} media documents`,
    )
    return mediaMap
  }

  // Original seeding logic for when useExisting = false
  payload.logger.info('🆕 Creating fresh media documents...')
  return await createAllMedia(payload)
}

// The type is now dynamically created from the keys of the final object
export type SeededMedia = Awaited<ReturnType<typeof seedMedia>>
