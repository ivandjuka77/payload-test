import type { Payload } from 'payload'
import { fetchFileByURL } from './utils'
// The data objects for specific images are still needed
import { image1 } from './images/image-1'
import { image2 } from './images/image-2'
import { imageHero1 } from './images/image-hero-1'
import { Media } from '@/payload-types'

const NEXT_PUBLIC_SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL ||
  'https://payload-test-git-staging-ivandjuka77s-projects.vercel.app'

// A centralized array of objects is much more maintainable
const filesToSeed = [
  // Demo Images
  {
    key: 'image1Doc',
    url: 'https://raw.githubusercontent.com/payloadcms/payload/main/templates/website/src/endpoints/seed/image-post1.webp',
    alt: 'Post 1 Image',
    data: image1,
  },
  {
    key: 'image2Doc',
    url: 'https://raw.githubusercontent.com/payloadcms/payload/main/templates/website/src/endpoints/seed/image-post2.webp',
    alt: 'Post 2 Image',
    data: image2,
  },
  {
    key: 'image3Doc',
    url: 'https://raw.githubusercontent.com/payloadcms/payload/main/templates/website/src/endpoints/seed/image-post3.webp',
    alt: 'Post 3 Image',
    data: image2,
  }, // Re-using image2 data as in original
  {
    key: 'imageHomeDoc',
    url: 'https://raw.githubusercontent.com/payloadcms/payload/main/templates/website/src/endpoints/seed/image-hero1.webp',
    alt: 'Hero Image',
    data: imageHero1,
  },
  // Misc
  {
    key: 'ecovadisMedalDoc',
    url: `${NEXT_PUBLIC_SERVER_URL}/assets/ecovadis.png`,
    alt: 'Ecovadis Medal',
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
  // Homepage
  {
    key: 'slide1HeroBgDoc',
    url: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg',
    alt: 'Slide 1 Hero Background',
  },
  {
    key: 'slide1HeroFeaturedItemDoc',
    url: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Slide 1 Hero Featured Item',
  },
  {
    key: 'slide1HeroCard1Doc',
    url: 'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Slide 1 Hero Card 1',
  },
  {
    key: 'slide1HeroCard2Doc',
    url: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg',
    alt: 'Slide 1 Hero Card 2',
  },
  {
    key: 'slide1HeroCard3Doc',
    url: 'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Slide 1 Hero Card 3',
  },
  {
    key: 'slide2HeroBgDoc',
    url: 'https://images.pexels.com/photos/29707595/pexels-photo-29707595/free-photo-of-classic-red-car-with-white-glove-detailing.jpeg',
    alt: 'Slide 2 Hero Background',
  },
  {
    key: 'slide2HeroFeaturedItemDoc',
    url: 'https://images.pexels.com/photos/14615263/pexels-photo-14615263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Slide 2 Hero Featured Item',
  },
  {
    key: 'slide2HeroCard1Doc',
    url: 'https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg',
    alt: 'Slide 2 Hero Card 1',
  },
  {
    key: 'slide2HeroCard2Doc',
    url: 'https://images.pexels.com/photos/5622896/pexels-photo-5622896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Slide 2 Hero Card 2',
  },
  {
    key: 'slide2HeroCard3Doc',
    url: 'https://images.pexels.com/photos/5691520/pexels-photo-5691520.jpeg',
    alt: 'Slide 2 Hero Card 3',
  },
  {
    key: 'slide3HeroBgDoc',
    url: 'https://images.pexels.com/photos/339614/pexels-photo-339614.jpeg',
    alt: 'Slide 3 Hero Background',
  },
  {
    key: 'slide3HeroFeaturedItemDoc',
    url: 'https://images.pexels.com/photos/1206593/pexels-photo-1206593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Slide 3 Hero Featured Item',
  },
  {
    key: 'slide3HeroCard1Doc',
    url: 'https://images.pexels.com/photos/1206593/pexels-photo-1206593.jpeg',
    alt: 'Slide 3 Hero Card 1',
  },
  {
    key: 'slide3HeroCard2Doc',
    url: 'https://images.pexels.com/photos/2391/dirty-industry-stack-factory.jpg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Slide 3 Hero Card 2',
  },
  {
    key: 'slide3HeroCard3Doc',
    url: 'https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg',
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
    key: 'sustainabilityImage1Doc',
    url: 'https://images.pexels.com/photos/15480413/pexels-photo-15480413/free-photo-of-modern-futuristic-construction-in-city.jpeg',
    alt: 'Sustainability Image 1',
  },
  // Applications
  {
    key: 'applicationsImage1Doc',
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
]

export const seedMedia = async (payload: Payload) => {
  payload.logger.info('— Seeding media...')

  payload.logger.info(`NEXT_PUBLIC_SERVER_URL: ${NEXT_PUBLIC_SERVER_URL}`)

  // --------------------
  // Step 1: Fetch all file buffers in parallel
  // This is efficient and less likely to cause issues.
  // --------------------
  payload.logger.info(`— Fetching ${filesToSeed.length} files...`)
  const fileBuffers = await Promise.all(filesToSeed.map((file) => fetchFileByURL(file.url)))

  const filesWithBuffers = filesToSeed.map((file, i) => ({
    ...file,
    buffer: fileBuffers[i],
  }))

  // --------------------
  // Step 2: Batch-create all media documents
  // This is the crucial part to avoid socket exhaustion.
  // --------------------
  payload.logger.info(`— Creating ${filesWithBuffers.length} media documents in batches...`)
  const BATCH_SIZE = 40
  const createdDocs = []

  for (let i = 0; i < filesWithBuffers.length; i += BATCH_SIZE) {
    const batch = filesWithBuffers.slice(i, i + BATCH_SIZE)
    const batchNumber = i / BATCH_SIZE + 1
    payload.logger.info(
      `  - Processing batch ${batchNumber} of ${Math.ceil(filesWithBuffers.length / BATCH_SIZE)}...`,
    )

    const createPromises = batch.map(
      (file) =>
        payload
          .create({
            collection: 'media',
            file: file.buffer,
            data: file.data || { alt: file.alt }, // Use specific data if provided, otherwise just alt
          })
          .then((doc) => ({ key: file.key, doc })), // Pass the key along with the created doc
    )

    const batchResults = await Promise.all(createPromises)
    createdDocs.push(...batchResults)
  }

  // --------------------
  // Step 3: Reconstruct the original return object dynamically
  // This ensures that other seeding scripts that depend on this one will not break.
  // --------------------
  const seededMediaObject = createdDocs.reduce((acc: Record<string, Media>, { key, doc }) => {
    acc[key] = doc
    return acc
  }, {})

  payload.logger.info('✓ Media seeded successfully!')

  return seededMediaObject
}

// The type is now dynamically created from the keys of the final object
export type SeededMedia = Awaited<ReturnType<typeof seedMedia>>
