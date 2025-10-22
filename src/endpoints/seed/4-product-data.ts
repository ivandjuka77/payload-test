// src/payload/seed/4-product-data.ts
import type { Payload } from 'payload'
import type { SeededMedia } from './1-media'

export const seedProductData = async (payload: Payload, media: SeededMedia) => {
  payload.logger.info('- Seeding product categories and products...')

  const {
    demoImageDoc,
    image2Doc,
    image3Doc,
    imageHomeDoc,
    applicationsdemoImageDoc,
    applicationsImage2Doc,
    applicationsImage3Doc,
    applicationsImage4Doc,
    applicationsImage5Doc,
    applicationsImage6Doc,
    dmpaStructureDoc,
    dmbaStructureDoc,
    hpvaStructureDoc,
    hTempoStructureDoc,
    troloxStructureDoc,
    tempoStructureDoc,
    dapegStructureDoc,
    benzoyloxyTmpStructureDoc,
    acetamidoTempoStructureDoc,
    temponeStructureDoc,
    colaminPhosphateStructureDoc,
    vupinStructureDoc,
  } = media

  // --------------------
  // SEEDING PRODUCT CATEGORIES
  // --------------------

  const [
    hydroxyAcids,
    hinderedAmines,
    glycolEthers,
    phospholipidPrecursors,
    polymerisationInhibitors,
    specialtyHinderedAmines,
    diaminopolyethyleneGlycols,
    chromanolsDerivatives,
  ] = await Promise.all([
    payload.create({
      collection: 'productCategories',
      data: {
        _order: '1',
        name: 'Hydroxy Acids',
        description:
          'High-purity hydroxy acids including DMPA, DMBA, and HPVA. Essential building blocks for environmentally friendly waterborne systems (PUDs, alkyds, polyesters) and high-performance polymers used in coatings, inks, adhesives, and lubricants.',
        image: imageHomeDoc.id,

        slug: 'hydroxy-acids',
        productComparison: false,
        applications: [
          {
            imageSrc: applicationsdemoImageDoc.id,
            title: 'Waterborne Coatings',
            description:
              'Eco-friendly coating solutions with reduced VOCs and excellent performance for sustainable industrial applications.',
          },
          {
            imageSrc: applicationsImage2Doc.id,
            title: 'Polyurethane Dispersions',
            description:
              'High-quality waterborne PUD systems enabling advanced coatings with superior properties and low environmental impact.',
          },
          {
            imageSrc: applicationsImage3Doc.id,
            title: 'Durable Polyesters',
            description:
              'Building blocks for highly durable polyesters requiring exceptional thermal, hydrolytic, and weather resistance.',
          },
          {
            imageSrc: applicationsImage4Doc.id,
            title: 'Powder Coatings',
            description:
              'Key intermediates for premium solvent-free coating technology offering superior finish and environmental benefits.',
          },
          {
            imageSrc: applicationsImage5Doc.id,
            title: 'Adhesives & Inks',
            description:
              'Essential components for high-strength bonding formulations and vibrant, durable printing applications.',
          },
          {
            imageSrc: applicationsImage6Doc.id,
            title: 'Synthetic Lubricants',
            description:
              'Critical intermediates for advanced industrial lubricants delivering exceptional performance in extreme conditions.',
          },
        ],
      },
    }),
    payload.create({
      collection: 'productCategories',
      data: {
        _order: '2',
        name: 'Hindered Amines',
        description:
          'High-purity hindered amines with sterically hindered piperidine structure and stable radicals. Essential building blocks for HALS light stabilizers, TEMPO derivatives for selective oxidation, and versatile intermediates for demanding applications.',
        image: image2Doc.id,
        slug: 'hindered-amines',

        productComparison: true,
        applications: [
          {
            imageSrc: applicationsdemoImageDoc.id,
            title: 'Polymer Light Stabilization',
            description:
              'HALS intermediates and ready-to-use light stabilizers protecting polymers from UV degradation and extending service life.',
          },
          {
            imageSrc: applicationsImage2Doc.id,
            title: 'Polymerization Inhibition',
            description:
              'Stable radical systems for controlled radical processes and precise polymerization control in industrial applications.',
          },
          {
            imageSrc: applicationsImage3Doc.id,
            title: 'Selective Oxidation',
            description:
              'TEMPO-based catalysts enabling efficient and highly selective chemical transformations in organic synthesis.',
          },
          {
            imageSrc: applicationsImage4Doc.id,
            title: 'Pharmaceutical Intermediates',
            description:
              'Specialized TEMPO derivatives serving as key building blocks and API intermediates in pharmaceutical synthesis.',
          },
          {
            imageSrc: applicationsImage5Doc.id,
            title: 'Spin Labeling / EPR Spectroscopy',
            description:
              'Advanced stable radical probes for molecular analysis and spectroscopic research applications.',
          },
          {
            imageSrc: applicationsImage6Doc.id,
            title: 'Advanced Chemical Synthesis',
            description:
              'Versatile hindered amine intermediates and functional molecules for complex synthetic pathways and research.',
          },
        ],
      },
    }),
    payload.create({
      collection: 'productCategories',
      data: {
        _order: '4',
        name: 'Glycol Ethers',
        description:
          'Versatile oxygenated solvents containing both ether and alcohol functional groups. Derived from ethylene or propylene glycol, these compounds excel as coupling agents and solvents across industrial applications.',
        image: image3Doc.id,
        slug: 'glycol-ethers',

        productComparison: true,
        applications: [
          {
            imageSrc: applicationsdemoImageDoc.id,
            title: 'Paints & Coatings',
            description:
              'Essential solvents in paints, lacquers, and varnishes providing excellent dissolution properties and film formation.',
          },
          {
            imageSrc: applicationsImage2Doc.id,
            title: 'Cleaning Formulations',
            description:
              'Effective solvents for industrial and household cleaning products with superior degreasing capabilities.',
          },
          {
            imageSrc: applicationsImage3Doc.id,
            title: 'Printing Inks',
            description:
              'High-performance solvents enabling optimal ink flow and print quality in commercial printing applications.',
          },
          {
            imageSrc: applicationsImage4Doc.id,
            title: 'Coupling Agents',
            description:
              'Enhance miscibility between water and organic phases or different organic liquids in formulations.',
          },
          {
            imageSrc: applicationsImage5Doc.id,
            title: 'Chemical Intermediates',
            description:
              'Building blocks for synthesis of acetates and other derivatives in specialty chemical manufacturing.',
          },
          {
            imageSrc: applicationsImage6Doc.id,
            title: 'Specialty Products',
            description:
              'Functional components in VUP formulations like VUPIN polymerization inhibitors as carriers and solvents.',
          },
        ],
      },
    }),
    payload.create({
      collection: 'productCategories',
      data: {
        _order: '5',
        name: 'Phospholipid Precursors',
        description:
          'Essential biochemical building blocks for phospholipid synthesis - the foundation of healthy cell membranes. VUP supplies high-purity Colamin Phosphate and its salts, crucial for supplement, veterinary, and pharmaceutical applications.',
        image: image3Doc.id,
        slug: 'phospholipid-precursors',

        productComparison: true,
        applications: [
          {
            imageSrc: applicationsdemoImageDoc.id,
            title: 'Dietary Supplements',
            description:
              'Cognitive health and cellular integrity formulations targeting general wellness and brain function support.',
          },
          {
            imageSrc: applicationsImage2Doc.id,
            title: 'Veterinary Nutrition',
            description:
              'Feed additives enhancing animal health, development, and cellular function in veterinary applications.',
          },
          {
            imageSrc: applicationsImage3Doc.id,
            title: 'Pharmaceutical Formulations',
            description:
              'High-purity intermediates and excipients for pharmaceutical manufacturing and drug development.',
          },
          {
            imageSrc: applicationsImage4Doc.id,
            title: 'Cell Culture Media',
            description:
              'Essential components for cell biology research, tissue culture, and biotechnology applications.',
          },
          {
            imageSrc: applicationsImage5Doc.id,
            title: 'Biochemical Research',
            description:
              'Premium-grade reagents for scientific investigation and phospholipid metabolism studies.',
          },
          {
            imageSrc: applicationsImage6Doc.id,
            title: 'Cosmetic Formulations',
            description:
              'Specialized ingredients for advanced skincare products targeting cellular health and membrane integrity.',
          },
        ],
      },
    }),
    payload.create({
      collection: 'productCategories',
      data: {
        _order: '6',
        name: 'Polymerisation Inhibitors',
        description:
          'Advanced liquid polymerisation inhibitor formulations, including our VUPIN range based on proven H-TEMPO chemistry, designed to enhance process safety, protect equipment, and ensure product quality in demanding petrochemical applications.',
        image: image3Doc.id,
        slug: 'polymerisation-inhibitors',

        productComparison: true,
        applications: [
          {
            imageSrc: applicationsdemoImageDoc.id,
            title: 'Refinery Operations',
            description:
              'FCC gasoline stabilization and pygas processing solutions preventing unwanted polymerisation in critical refinery streams.',
          },
          {
            imageSrc: applicationsImage2Doc.id,
            title: 'Monomer Storage & Transport',
            description:
              'Safe handling and storage solutions for reactive monomers including styrene, acrylates, and vinyl compounds.',
          },
          {
            imageSrc: applicationsImage3Doc.id,
            title: 'Monomer Purification Processes',
            description:
              'Distillation column protection preventing fouling and ensuring operational efficiency during monomer purification.',
          },
          {
            imageSrc: applicationsImage4Doc.id,
            title: 'Olefin Plant Operations',
            description:
              'Ethylene plant protection systems maintaining process reliability and preventing equipment damage from unwanted reactions.',
          },
          {
            imageSrc: applicationsImage5Doc.id,
            title: 'Equipment Protection',
            description:
              'Long-term asset preservation through effective polymerisation control and fouling prevention strategies.',
          },
          {
            imageSrc: applicationsImage6Doc.id,
            title: 'Process Safety & Reliability',
            description:
              'Enhanced operational safety through proven TEMPO-based radical scavenging technology and reliable inhibition performance.',
          },
        ],
      },
    }),
    payload.create({
      collection: 'productCategories',
      data: {
        _order: '7',
        name: 'Specialty Hindered Amines & Derivatives',
        description:
          'VUP leverages extensive R&D expertise to offer specialized derivatives including HALS intermediates, ready-to-use HALS products, and unique functionalized TEMPO derivatives for research and advanced materials.',
        image: image3Doc.id,
        slug: 'specialty-hindered-amines',

        productComparison: true,
        applications: [
          {
            imageSrc: applicationsdemoImageDoc.id,
            title: 'HALS Synthesis Intermediates',
            description:
              'Advanced intermediates like pentamethylpiperidine and amino-TMP for synthesizing high-performance hindered amine light stabilizers.',
          },
          {
            imageSrc: applicationsImage2Doc.id,
            title: 'Polymer Light Stabilization',
            description:
              'Ready-to-use HALS products equivalent to Tinuvin 770 and 765/292 for protecting polymers, coatings, and plastics from UV degradation.',
          },
          {
            imageSrc: applicationsImage3Doc.id,
            title: 'Spin Labeling & EPR Spectroscopy',
            description:
              'Functionalized TEMPO derivatives like amino-TEMPO and spiro-TEMPO-acid for bioconjugation and advanced analytical studies.',
          },
          {
            imageSrc: applicationsImage4Doc.id,
            title: 'Custom Synthesis Building Blocks',
            description:
              'Versatile functionalized derivatives serving as starting materials for specialized chemical synthesis and material development.',
          },
          {
            imageSrc: applicationsImage5Doc.id,
            title: 'Radical Chemistry Research',
            description:
              'Stable radical compounds and intermediates for studying radical mechanisms and developing new radical-based applications.',
          },
          {
            imageSrc: applicationsImage6Doc.id,
            title: 'Advanced Materials Development',
            description:
              'Specialized derivatives enabling innovation in functional materials, bioconjugates, and next-generation chemical products.',
          },
        ],
      },
    }),
    payload.create({
      collection: 'productCategories',
      data: {
        _order: '3',
        name: 'Diaminopolyethylene Glycols',
        description:
          'VUP is the unique global producer of high-purity DAPEG polymers featuring PEG chains with reactive amino terminals, essential for biomedical coatings and surface modification applications.',
        image: demoImageDoc.id,
        slug: 'diaminopolyethylene-glycols',

        productComparison: false,
        applications: [
          {
            imageSrc: applicationsdemoImageDoc.id,
            title: 'Biomedical Coatings',
            description:
              'Essential raw material for creating highly lubricious and hydrophilic coatings on medical devices such as catheters, guidewires, and implants.',
          },
          {
            imageSrc: applicationsImage2Doc.id,
            title: 'Surface Modification',
            description:
              'Enables covalent attachment of PEG chains to surfaces like nanoparticles and biosensors to impart protein resistance and biocompatibility.',
          },
          {
            imageSrc: applicationsImage3Doc.id,
            title: 'PEGylation Applications',
            description:
              'Used in bioconjugation to attach PEG chains to proteins, peptides, and drug molecules via reactive amine groups.',
          },
          {
            imageSrc: applicationsImage4Doc.id,
            title: 'Advanced Polymer Synthesis',
            description:
              'Serves as difunctional building block for specialized polymers like hydrogels, block copolymers, and dendrimers incorporating PEG segments.',
          },
          {
            imageSrc: applicationsImage5Doc.id,
            title: 'Research Chemicals',
            description:
              'High-purity reagent for fundamental research in biomaterials science, surface chemistry, and polymer chemistry applications.',
          },
        ],
      },
    }),
    payload.create({
      collection: 'productCategories',
      data: {
        _order: '8',
        name: 'Chromanols & Derivatives',
        description:
          'Potent antioxidants featuring the core structure of Vitamin E, including Trolox and related chromanol derivatives used as research tools, analytical standards, and specialty intermediates.',
        image: demoImageDoc.id,
        slug: 'chromanols-derivatives',

        productComparison: false,
        applications: [
          {
            imageSrc: applicationsdemoImageDoc.id,
            title: 'Antioxidant Research & Development',
            description:
              'Essential tools for studying antioxidant mechanisms and developing new protective formulations against oxidative stress.',
          },
          {
            imageSrc: applicationsImage2Doc.id,
            title: 'Analytical Standards (TEAC Assay)',
            description:
              'Trolox serves as the benchmark standard in TEAC (Trolox Equivalent Antioxidant Capacity) assays for measuring antioxidant activity.',
          },
          {
            imageSrc: applicationsImage3Doc.id,
            title: 'Oxidative Stress Studies',
            description:
              'Water-soluble Vitamin E analogs used in cellular and biological research to investigate oxidative damage mechanisms.',
          },
          {
            imageSrc: applicationsImage4Doc.id,
            title: 'Cosmetic & Pharmaceutical Research',
            description:
              'Screening compounds for antioxidant properties in cosmetic formulations and pharmaceutical development programs.',
          },
          {
            imageSrc: applicationsImage5Doc.id,
            title: 'Specialty Chemical Synthesis',
            description:
              'Valuable intermediates and building blocks for synthesizing advanced antioxidant compounds with tailored properties.',
          },
        ],
      },
    }),
  ])

  // --------------------
  // ADDING SLOVAK TRANSLATIONS FOR PRODUCT CATEGORIES
  // --------------------

  payload.logger.info('- Adding Slovak translations for product categories...')

  await Promise.all([
    payload.update({
      collection: 'productCategories',
      id: hydroxyAcids.id,
      locale: 'sk',
      data: {
        name: 'Hydroxykyseliny',
        description:
          'Vysokočisté hydroxykyseliny vrátane DMPA, DMBA a HPVA. Základné stavebné bloky pre environmentálne šetrné systémy na vodnej báze (PUD, alkydové, polyesterové) a vysokovýkonné polymery používané v náteroch, tiskových farbách, lepidlách a mazivách.',
        applications: [
          {
            imageSrc: applicationsdemoImageDoc.id,
            title: 'Vodouriediteľné nátery',
            description:
              'Ekologické riešenia náterov so zníženým obsahom VOC a vynikajúcim výkonom pre udržateľné priemyselné aplikácie.',
          },
          {
            imageSrc: applicationsImage2Doc.id,
            title: 'Polyuretánové disperzie',
            description:
              'Vysokokvalitné vodouriediteľné PUD systémy umožňujúce pokročilé nátery s vynikajúcimi vlastnosťami a nízkym dopadom na životné prostredie.',
          },
          {
            imageSrc: applicationsImage3Doc.id,
            title: 'Odolné polyestery',
            description:
              'Stavebné bloky pre vysoko odolné polyestery vyžadujúce výnimočnú tepelnú, hydrolytickú a poveternostnú odolnosť.',
          },
          {
            imageSrc: applicationsImage4Doc.id,
            title: 'Práškové nátery',
            description:
              'Kľúčové medziprodukty pre prémiovú technológiu bezrozpúšťadlových náterov ponúkajúcu vynikajúci povrch a environmentálne výhody.',
          },
          {
            imageSrc: applicationsImage5Doc.id,
            title: 'Lepidlá a atramenty',
            description:
              'Základné zložky pre vysokopevnostné lepiace formulácie a živé, odolné tlačiarenské aplikácie.',
          },
          {
            imageSrc: applicationsImage6Doc.id,
            title: 'Syntetické mazivá',
            description:
              'Kritické medziprodukty pre pokročilé priemyselné mazivá poskytujúce výnimočný výkon v extrémnych podmienkach.',
          },
        ],
      },
    }),
    payload.update({
      collection: 'productCategories',
      id: hinderedAmines.id,
      locale: 'sk',
      data: {
        name: 'Stericky bránené amíny',
        description:
          'Vysokočisté stericky bránené amíny so stericky bránenou piperidínovou štruktúrou a stabilnými radikálmi. Základné stavebné bloky pre svetelné stabilizátory HALS, deriváty TEMPO pre selektívnu oxidáciu a všestranné medziprodukty pre náročné aplikácie.',
        applications: [
          {
            imageSrc: applicationsdemoImageDoc.id,
            title: 'Svetelná stabilizácia polymérov',
            description:
              'Medziprodukty HALS a hotové svetelné stabilizátory chrániace polyméry pred UV degradáciou a predlžujúce ich životnosť.',
          },
          {
            imageSrc: applicationsImage2Doc.id,
            title: 'Inhibícia polymerizácie',
            description:
              'Stabilné radikálové systémy pre riadené radikálové procesy a presnú kontrolu polymerizácie v priemyselných aplikáciách.',
          },
          {
            imageSrc: applicationsImage3Doc.id,
            title: 'Selektívna oxidácia',
            description:
              'Katalyzátory na báze TEMPO umožňujúce efektívne a vysoko selektívne chemické transformácie v organickej syntéze.',
          },
          {
            imageSrc: applicationsImage4Doc.id,
            title: 'Farmaceutické medziprodukty',
            description:
              'Špecializované deriváty TEMPO slúžiace ako kľúčové stavebné bloky a medziprodukty API vo farmaceutickej syntéze.',
          },
          {
            imageSrc: applicationsImage5Doc.id,
            title: 'Spinové značenie / EPR spektroskopia',
            description:
              'Pokročilé stabilné radikálové sondy pre molekulárnu analýzu a spektroskopické výskumné aplikácie.',
          },
          {
            imageSrc: applicationsImage6Doc.id,
            title: 'Pokročilá chemická syntéza',
            description:
              'Všestranné medziprodukty stericky bránených amínov a funkčné molekuly pre zložité syntetické cesty a výskum.',
          },
        ],
      },
    }),
    payload.update({
      collection: 'productCategories',
      id: glycolEthers.id,
      locale: 'sk',
      data: {
        name: 'Glykolové étery',
        description:
          'Všestranné kyslíkaté rozpúšťadlá obsahujúce éterové aj alkoholové funkčné skupiny. Odvodené od etylénglykolový alebo propylénglykolový, tieto zlúčeniny vynikajú ako spojivá a rozpúšťadlá v priemyselných aplikáciách.',
        applications: [
          {
            imageSrc: applicationsdemoImageDoc.id,
            title: 'Farby a nátery',
            description:
              'Základné rozpúšťadlá vo farbách, lakoch a fermežiach poskytujúce vynikajúce rozpúšťacie vlastnosti a tvorbu filmu.',
          },
          {
            imageSrc: applicationsImage2Doc.id,
            title: 'Čistiace prostriedky',
            description:
              'Účinné rozpúšťadlá pre priemyselné a domáce čistiace prostriedky s vynikajúcimi odmasťovacími schopnosťami.',
          },
          {
            imageSrc: applicationsImage3Doc.id,
            title: 'Tlačiarenské farby',
            description:
              'Vysokovýkonné rozpúšťadlá umožňujúce optimálny tok farby a kvalitu tlače v komerčných tlačiarenských aplikáciách.',
          },
          {
            imageSrc: applicationsImage4Doc.id,
            title: 'Spojovacie činidlá',
            description:
              'Zlepšujú miešateľnosť medzi vodnou a organickou fázou alebo rôznymi organickými kvapalinami vo formuláciách.',
          },
          {
            imageSrc: applicationsImage5Doc.id,
            title: 'Chemické medziprodukty',
            description:
              'Stavebné bloky pre syntézu acetátov a iných derivátov vo výrobe špeciálnych chemikálií.',
          },
          {
            imageSrc: applicationsImage6Doc.id,
            title: 'Špeciálne produkty',
            description:
              'Funkčné zložky vo formuláciách VUP, ako sú inhibítory polymerizácie VUPIN, ako nosiče a rozpúšťadlá.',
          },
        ],
      },
    }),
    payload.update({
      collection: 'productCategories',
      id: phospholipidPrecursors.id,
      locale: 'sk',
      data: {
        name: 'Prekurzory fosfolipidov',
        description:
          'Základné biochemické stavebné bloky pre syntézu fosfolipidov - základ zdravých bunkových membrán. VUP dodáva vysokočistý Colamin Phosphate a jeho soli, kľúčové pre doplnky stravy, veterinárne a farmaceutické aplikácie.',
        applications: [
          {
            imageSrc: applicationsdemoImageDoc.id,
            title: 'Doplnky stravy',
            description:
              'Formulácie pre kognitívne zdravie a celulárnu integritu zamerané na podporu všeobecného zdravia a funkcie mozgu.',
          },
          {
            imageSrc: applicationsImage2Doc.id,
            title: 'Veterinárna výživa',
            description:
              'Kŕmne doplnkové látky zlepšujúce zdravie zvierat, vývoj a bunkovú funkciu vo veterinárnych aplikáciách.',
          },
          {
            imageSrc: applicationsImage3Doc.id,
            title: 'Farmaceutické formulácie',
            description:
              'Vysokočisté medziprodukty a pomocné látky pre farmaceutickú výrobu a vývoj liekov.',
          },
          {
            imageSrc: applicationsImage4Doc.id,
            title: 'Médiá pre bunkové kultúry',
            description:
              'Základné zložky pre výskum v bunkovej biológii, tkanivové kultúry a biotechnologické aplikácie.',
          },
          {
            imageSrc: applicationsImage5Doc.id,
            title: 'Biochemický výskum',
            description:
              'Reagencie prémiovej kvality pre vedecké skúmanie a štúdium metabolizmu fosfolipidov.',
          },
          {
            imageSrc: applicationsImage6Doc.id,
            title: 'Kozmetické formulácie',
            description:
              'Špecializované zložky pre pokročilé produkty starostlivosti o pleť zamerané na bunkové zdravie a integritu membrán.',
          },
        ],
      },
    }),
    payload.update({
      collection: 'productCategories',
      id: polymerisationInhibitors.id,
      locale: 'sk',
      data: {
        name: 'Inhibítory polymerizácie',
        description:
          'Pokročilé kvapalné formulácie inhibítorov polymerizácie, vrátane našej rady VUPIN založenej na osvedčenej chémii H-TEMPO, navrhnuté na zvýšenie bezpečnosti procesov, ochranu zariadení a zabezpečenie kvality produktov v náročných petrochemických aplikáciách.',
        applications: [
          {
            imageSrc: applicationsdemoImageDoc.id,
            title: 'Prevádzka rafinérií',
            description:
              'Stabilizácia FCC benzínu a riešenia spracovania pygasu zabraňujúce nežiaducej polymerizácii v kritických prúdoch rafinérie.',
          },
          {
            imageSrc: applicationsImage2Doc.id,
            title: 'Skladovanie a preprava monomérov',
            description:
              'Bezpečné manipulačné a skladovacie riešenia pre reaktívne monoméry vrátane styrénu, akrylátov a vinylových zlúčenín.',
          },
          {
            imageSrc: applicationsImage3Doc.id,
            title: 'Procesy čistenia monomérov',
            description:
              'Ochrana destilačných kolón zabraňujúca zanášaniu a zabezpečujúca prevádzkovú účinnosť počas čistenia monomérov.',
          },
          {
            imageSrc: applicationsImage4Doc.id,
            title: 'Prevádzka olefínových závodov',
            description:
              'Systémy ochrany etylénových závodov udržiavajúce spoľahlivosť procesu a zabraňujúce poškodeniu zariadení nežiaducimi reakciami.',
          },
          {
            imageSrc: applicationsImage5Doc.id,
            title: 'Ochrana zariadení',
            description:
              'Dlhodobá ochrana majetku prostredníctvom účinnej kontroly polymerizácie a stratégií prevencie zanášania.',
          },
          {
            imageSrc: applicationsImage6Doc.id,
            title: 'Bezpečnosť a spoľahlivosť procesu',
            description:
              'Zvýšená prevádzková bezpečnosť vďaka osvedčenej technológii zachytávania radikálov na báze TEMPO a spoľahlivému inhibičnému výkonu.',
          },
        ],
      },
    }),
    payload.update({
      collection: 'productCategories',
      id: specialtyHinderedAmines.id,
      locale: 'sk',
      data: {
        name: 'Špeciálne stericky bránené amíny a deriváty',
        description:
          'VUP využíva rozsiahle odborné znalosti v R&D na ponuku špecializovaných derivátov vrátane medziprodukto HALS, hotových produktov HALS a jedinečných funkcionalizovaných derivátov TEMPO pre výskum a pokročilé materiály.',
        applications: [
          {
            imageSrc: applicationsdemoImageDoc.id,
            title: 'Medziprodukty pre syntézu HALS',
            description:
              'Pokročilé medziprodukty ako pentametylpiperidín a amino-TMP na syntézu vysokovýkonných stericky bránených amínových svetelných stabilizátorov.',
          },
          {
            imageSrc: applicationsImage2Doc.id,
            title: 'Svetelná stabilizácia polymérov',
            description:
              'Hotové produkty HALS ekvivalentné Tinuvin 770 a 765/292 na ochranu polymérov, náterov a plastov pred UV degradáciou.',
          },
          {
            imageSrc: applicationsImage3Doc.id,
            title: 'Spinové značenie a EPR spektroskopia',
            description:
              'Funkcionalizované deriváty TEMPO ako amino-TEMPO a spiro-TEMPO-kyselina pre biokonjugáciu a pokročilé analytické štúdie.',
          },
          {
            imageSrc: applicationsImage4Doc.id,
            title: 'Stavebné bloky pre zákazkovú syntézu',
            description:
              'Všestranné funkcionalizované deriváty slúžiace ako východiskové materiály pre špecializovanú chemickú syntézu a vývoj materiálov.',
          },
          {
            imageSrc: applicationsImage5Doc.id,
            title: 'Výskum radikálovej chémie',
            description:
              'Stabilné radikálové zlúčeniny a medziprodukty na štúdium radikálových mechanizmov a vývoj nových aplikácií na báze radikálov.',
          },
          {
            imageSrc: applicationsImage6Doc.id,
            title: 'Vývoj pokročilých materiálov',
            description:
              'Špecializované deriváty umožňujúce inovácie vo funkčných materiáloch, biokonjugátoch a chemických produktoch novej generácie.',
          },
        ],
      },
    }),
    payload.update({
      collection: 'productCategories',
      id: diaminopolyethyleneGlycols.id,
      locale: 'sk',
      data: {
        name: 'Diaminopolyetylénglykoly',
        description:
          'VUP je jedinečný globálny výrobca vysokočistých polymérov DAPEG s PEG reťazcami s reaktívnymi aminovými koncovými skupinami, nevyhnutné pre biomedicínske nátery a aplikácie povrchovej modifikácie.',
        applications: [
          {
            imageSrc: applicationsdemoImageDoc.id,
            title: 'Biomedicínske nátery',
            description:
              'Základná surovina na vytváranie vysoko lubrikačných a hydrofilných náterov na zdravotníckych pomôckach, ako sú katétre, vodiace drôty a implantáty.',
          },
          {
            imageSrc: applicationsImage2Doc.id,
            title: 'Povrchová modifikácia',
            description:
              'Umožňuje kovalentné pripojenie PEG reťazcov na povrchy ako nanočastice a biosenzory na dodanie odolnosti voči proteínom a biokompatibility.',
          },
          {
            imageSrc: applicationsImage3Doc.id,
            title: 'Aplikácie PEGylácie',
            description:
              'Používa sa v biokonjugácii na pripojenie PEG reťazcov k proteínom, peptidom a molekulám liečiv prostredníctvom reaktívnych amínových skupín.',
          },
          {
            imageSrc: applicationsImage4Doc.id,
            title: 'Pokročilá syntéza polymérov',
            description:
              'Slúži ako difunkčný stavebný blok pre špecializované polyméry ako hydrogély, blokové kopolyméry a dendriméry obsahujúce PEG segmenty.',
          },
          {
            imageSrc: applicationsImage5Doc.id,
            title: 'Výskumné chemikálie',
            description:
              'Vysokočistý reagent pre základný výskum v oblasti biomateriálov, povrchovej chémie a aplikácií polymérnej chémie.',
          },
        ],
      },
    }),
    payload.update({
      collection: 'productCategories',
      id: chromanolsDerivatives.id,
      locale: 'sk',
      data: {
        name: 'Chromanoly a deriváty',
        description:
          'Silné antioxidanty obsahujúce základnú štruktúru vitamínu E, vrátane Troloxu a príbuzných derivátov chromanolu používaných ako výskumné nástroje, analytické štandardy a špeciálne medziprodukty.',
        applications: [
          {
            imageSrc: applicationsdemoImageDoc.id,
            title: 'Výskum a vývoj antioxidantov',
            description:
              'Základné nástroje na štúdium antioxidačných mechanizmov a vývoj nových ochranných formulácií proti oxidačnému stresu.',
          },
          {
            imageSrc: applicationsImage2Doc.id,
            title: 'Analytické štandardy (TEAC test)',
            description:
              'Trolox slúži ako referenčný štandard v testoch TEAC (Trolox Equivalent Antioxidant Capacity) na meranie antioxidačnej aktivity.',
          },
          {
            imageSrc: applicationsImage3Doc.id,
            title: 'Štúdie oxidačného stresu',
            description:
              'Vodourozpustné analógy vitamínu E používané v bunkovom a biologickom výskume na skúmanie mechanizmov oxidačného poškodenia.',
          },
          {
            imageSrc: applicationsImage4Doc.id,
            title: 'Kozmetický a farmaceutický výskum',
            description:
              'Skríningové zlúčeniny pre antioxidačné vlastnosti v kozmetických formuláciách a programoch farmaceutického vývoja.',
          },
          {
            imageSrc: applicationsImage5Doc.id,
            title: 'Špeciálna chemická syntéza',
            description:
              'Cenné medziprodukty a stavebné bloky na syntézu pokročilých antioxidačných zlúčenín s prispôsobenými vlastnosťami.',
          },
        ],
      },
    }),
  ])

  // --------------------
  // ADDING JAPANESE TRANSLATIONS FOR PRODUCT CATEGORIES
  // --------------------

  payload.logger.info('- Adding Japanese translations for product categories...')

  await Promise.all([
    payload.update({
      collection: 'productCategories',
      id: hydroxyAcids.id,
      locale: 'jp',
      data: {
        name: 'ヒドロキシ酸',
        description:
          'DMPA、DMBA、HPVAを含む高純度ヒドロキシ酸。環境に優しい水系システム（PUD、アルキド、ポリエステル）と、コーティング、インク、接着剤、潤滑油に使用される高性能ポリマーの必須構成要素です。',
        applications: [
          {
            imageSrc: applicationsdemoImageDoc.id,
            title: '水性コーティング',
            description:
              '持続可能な産業用途向けに、VOCを削減し優れた性能を発揮する環境に優しいコーティングソリューション。',
          },
          {
            imageSrc: applicationsImage2Doc.id,
            title: 'ポリウレタンディスパージョン',
            description:
              '優れた特性と低い環境負荷で高度なコーティングを可能にする高品質な水性PUDシステム。',
          },
          {
            imageSrc: applicationsImage3Doc.id,
            title: '高耐久性ポリエステル',
            description:
              '卓越した熱、加水分解、耐候性を必要とする高耐久性ポリエステルのためのビルディングブロック。',
          },
          {
            imageSrc: applicationsImage4Doc.id,
            title: '粉体塗装',
            description:
              '優れた仕上がりと環境上の利点を提供する、プレミアムな無溶剤コーティング技術の主要な中間体。',
          },
          {
            imageSrc: applicationsImage5Doc.id,
            title: '接着剤とインク',
            description:
              '高強度の接着剤配合および鮮やかで耐久性のある印刷用途に不可欠なコンポーネント。',
          },
          {
            imageSrc: applicationsImage6Doc.id,
            title: '合成潤滑油',
            description: '過酷な条件下で卓越した性能を発揮する高度な産業用潤滑油の重要な中間体。',
          },
        ],
      },
    }),
    payload.update({
      collection: 'productCategories',
      id: hinderedAmines.id,
      locale: 'jp',
      data: {
        name: '立体障害アミン',
        description:
          '立体障害ピペリジン構造と安定ラジカルを持つ高純度立体障害アミン。HALS光安定剤、選択酸化用TEMPO誘導体、要求の厳しい用途向けの多用途中間体の必須構成要素です。',
        applications: [
          {
            imageSrc: applicationsdemoImageDoc.id,
            title: 'ポリマーの光安定化',
            description:
              'ポリマーを紫外線による劣化から保護し、耐用年数を延ばすHALS中間体および即時使用可能な光安定剤。',
          },
          {
            imageSrc: applicationsImage2Doc.id,
            title: '重合禁止',
            description:
              '産業用途におけるラジカルプロセスの制御と精密な重合制御のための安定ラジカルシステム。',
          },
          {
            imageSrc: applicationsImage3Doc.id,
            title: '選択的酸化',
            description:
              '有機合成における効率的で高選択的な化学変換を可能にするTEMPOベースの触媒。',
          },
          {
            imageSrc: applicationsImage4Doc.id,
            title: '医薬品中間体',
            description:
              '医薬品合成における重要なビルディングブロックおよびAPI中間体として機能する特殊なTEMPO誘導体。',
          },
          {
            imageSrc: applicationsImage5Doc.id,
            title: 'スピンラベリング / EPR分光法',
            description: '分子分析および分光学的研究用途のための高度な安定ラジカルプローブ。',
          },
          {
            imageSrc: applicationsImage6Doc.id,
            title: '高度な化学合成',
            description:
              '複雑な合成経路と研究のための多用途な立体障害アミン中間体および官能性分子。',
          },
        ],
      },
    }),
    payload.update({
      collection: 'productCategories',
      id: glycolEthers.id,
      locale: 'jp',
      data: {
        name: 'グリコールエーテル',
        description:
          'エーテルとアルコール官能基の両方を含む多用途の酸素系溶媒。エチレングリコールまたはプロピレングリコールから誘導され、これらの化合物は工業用途でカップリング剤と溶媒として優れています。',
        applications: [
          {
            imageSrc: applicationsdemoImageDoc.id,
            title: '塗料とコーティング',
            description:
              '塗料、ラッカー、ワニスに不可欠な溶剤で、優れた溶解特性と塗膜形成を提供します。',
          },
          {
            imageSrc: applicationsImage2Doc.id,
            title: '洗浄剤配合',
            description: '優れた脱脂能力を持つ産業用および家庭用洗浄製品の効果的な溶剤。',
          },
          {
            imageSrc: applicationsImage3Doc.id,
            title: '印刷インキ',
            description: '商業印刷用途で最適なインクフローと印刷品質を可能にする高性能溶剤。',
          },
          {
            imageSrc: applicationsImage4Doc.id,
            title: 'カップリング剤',
            description: '配合物中の水と有機相、または異なる有機液体間の混和性を向上させます。',
          },
          {
            imageSrc: applicationsImage5Doc.id,
            title: '化学中間体',
            description:
              '特殊化学品製造における酢酸エステルおよびその他の誘導体の合成のためのビルディングブロック。',
          },
          {
            imageSrc: applicationsImage6Doc.id,
            title: '特殊製品',
            description:
              'VUPIN重合禁止剤のようなVUP配合物において、担体および溶剤としての機能性成分。',
          },
        ],
      },
    }),
    payload.update({
      collection: 'productCategories',
      id: phospholipidPrecursors.id,
      locale: 'jp',
      data: {
        name: 'リン脂質前駆体',
        description:
          '健康な細胞膜の基盤であるリン脂質合成の必須生化学構成要素。VUPは高純度のColamin Phosphateとその塩類を供給し、サプリメント、獣医学、製薬用途に重要です。',
        applications: [
          {
            imageSrc: applicationsdemoImageDoc.id,
            title: '栄養補助食品',
            description:
              '一般的な健康維持と脳機能サポートを目的とした、認知機能と細胞の完全性のための配合。',
          },
          {
            imageSrc: applicationsImage2Doc.id,
            title: '動物栄養学',
            description: '獣医学的応用において動物の健康、発育、細胞機能を向上させる飼料添加物。',
          },
          {
            imageSrc: applicationsImage3Doc.id,
            title: '製剤',
            description: '医薬品製造および医薬品開発のための高純度中間体および賦形剤。',
          },
          {
            imageSrc: applicationsImage4Doc.id,
            title: '細胞培養培地',
            description: '細胞生物学研究、組織培養、およびバイオテクノロジー応用のための必須成分。',
          },
          {
            imageSrc: applicationsImage5Doc.id,
            title: '生化学研究',
            description: '科学的調査およびリン脂質代謝研究のためのプレミアムグレード試薬。',
          },
          {
            imageSrc: applicationsImage6Doc.id,
            title: '化粧品配合',
            description: '細胞の健康と膜の完全性を対象とした高度なスキンケア製品のための特殊成分。',
          },
        ],
      },
    }),
    payload.update({
      collection: 'productCategories',
      id: polymerisationInhibitors.id,
      locale: 'jp',
      data: {
        name: '重合禁止剤',
        description:
          '実績のあるH-TEMPO化学に基づくVUPINシリーズを含む先進的な液体重合禁止剤製剤。要求の厳しい石油化学用途でプロセス安全性を向上させ、設備を保護し、製品品質を確保するよう設計されています。',
        applications: [
          {
            imageSrc: applicationsdemoImageDoc.id,
            title: '製油所業務',
            description:
              '重要な製油所ストリームでの不要な重合を防ぐFCCガソリン安定化およびパイガス処理ソリューション。',
          },
          {
            imageSrc: applicationsImage2Doc.id,
            title: 'モノマーの貯蔵と輸送',
            description:
              'スチレン、アクリレート、ビニル化合物などの反応性モノマーの安全な取り扱いおよび貯蔵ソリューション。',
          },
          {
            imageSrc: applicationsImage3Doc.id,
            title: 'モノマー精製プロセス',
            description: 'モノマー精製中のファウリングを防ぎ、運転効率を確保する蒸留塔の保護。',
          },
          {
            imageSrc: applicationsImage4Doc.id,
            title: 'オレフィンプラントの運転',
            description:
              'プロセスの信頼性を維持し、不要な反応による機器の損傷を防ぐエチレンプラント保護システム。',
          },
          {
            imageSrc: applicationsImage5Doc.id,
            title: '機器保護',
            description: '効果的な重合制御とファウリング防止戦略による長期的な資産保全。',
          },
          {
            imageSrc: applicationsImage6Doc.id,
            title: 'プロセスの安全性と信頼性',
            description:
              '実績のあるTEMPOベースのラジカル捕捉技術と信頼性の高い禁止性能による運転安全性の向上。',
          },
        ],
      },
    }),
    payload.update({
      collection: 'productCategories',
      id: specialtyHinderedAmines.id,
      locale: 'jp',
      data: {
        name: '特殊立体障害アミンと誘導体',
        description:
          'VUPは豊富なR&D専門知識を活用して、HALS中間体、既製HALS製品、研究と先進材料用の独特な機能化TEMPO誘導体を含む特殊誘導体を提供します。',
        applications: [
          {
            imageSrc: applicationsdemoImageDoc.id,
            title: 'HALS合成中間体',
            description:
              '高性能な立体障害アミン光安定剤を合成するためのペンタメチルピペリジンやアミノTMPなどの高度な中間体。',
          },
          {
            imageSrc: applicationsImage2Doc.id,
            title: 'ポリマーの光安定化',
            description:
              'ポリマー、コーティング、プラスチックを紫外線劣化から保護するためのTinuvin 770および765/292と同等の即時使用可能なHALS製品。',
          },
          {
            imageSrc: applicationsImage3Doc.id,
            title: 'スピンラベリングとEPR分光法',
            description:
              '生体共役および高度な分析研究のためのアミノTEMPOやスピロTEMPO酸などの機能化TEMPO誘導体。',
          },
          {
            imageSrc: applicationsImage4Doc.id,
            title: 'カスタム合成ビルディングブロック',
            description:
              '特殊な化学合成および材料開発の出発物質として機能する多用途な機能化誘導体。',
          },
          {
            imageSrc: applicationsImage5Doc.id,
            title: 'ラジカル化学研究',
            description:
              'ラジカル機構の研究や新しいラジカルベースのアプリケーションを開発するための安定ラジカル化合物および中間体。',
          },
          {
            imageSrc: applicationsImage6Doc.id,
            title: '先端材料開発',
            description: '機能性材料、生体共役体、次世代化学製品の革新を可能にする特殊誘導体。',
          },
        ],
      },
    }),
    payload.update({
      collection: 'productCategories',
      id: diaminopolyethyleneGlycols.id,
      locale: 'jp',
      data: {
        name: 'ジアミノポリエチレングリコール',
        description:
          'VUPは反応性アミノ末端を持つPEG鎖を特徴とする高純度DAPEGポリマーの独自のグローバル生産者であり、生物医学コーティングと表面改質用途に不可欠です。',
        applications: [
          {
            imageSrc: applicationsdemoImageDoc.id,
            title: '生物医学コーティング',
            description:
              'カテーテル、ガイドワイヤー、インプラントなどの医療機器に高い潤滑性と親水性のコーティングを作成するための必須原料。',
          },
          {
            imageSrc: applicationsImage2Doc.id,
            title: '表面改質',
            description:
              'ナノ粒子やバイオセンサーなどの表面にPEG鎖を共有結合させ、タンパク質耐性と生体適合性を付与します。',
          },
          {
            imageSrc: applicationsImage3Doc.id,
            title: 'PEG化アプリケーション',
            description:
              '反応性アミン基を介してタンパク質、ペプチド、薬物分子にPEG鎖を結合させるバイオコンジュゲーションで使用されます。',
          },
          {
            imageSrc: applicationsImage4Doc.id,
            title: '高度なポリマー合成',
            description:
              'PEGセグメントを組み込んだヒドロゲル、ブロックコポリマー、デンドリマーなどの特殊ポリマーの二官能性ビルディングブロックとして機能します。',
          },
          {
            imageSrc: applicationsImage5Doc.id,
            title: '研究用化学品',
            description:
              '生体材料科学、表面化学、およびポリマー化学アプリケーションの基礎研究のための高純度試薬。',
          },
        ],
      },
    }),
    payload.update({
      collection: 'productCategories',
      id: chromanolsDerivatives.id,
      locale: 'jp',
      data: {
        name: 'クロマノール類と誘導体',
        description:
          'ビタミンEの核構造を特徴とする強力な抗酸化剤。Troloxと関連するクロマノール誘導体を含み、研究ツール、分析標準、特殊中間体として使用されます。',
        applications: [
          {
            imageSrc: applicationsdemoImageDoc.id,
            title: '抗酸化剤の研究開発',
            description:
              '抗酸化メカニズムを研究し、酸化ストレスに対する新しい保護処方を開発するための必須ツール。',
          },
          {
            imageSrc: applicationsImage2Doc.id,
            title: '分析標準（TEACアッセイ）',
            description:
              'Troloxは、抗酸化活性を測定するためのTEAC（Trolox Equivalent Antioxidant Capacity）アッセイにおけるベンチマーク標準として機能します。',
          },
          {
            imageSrc: applicationsImage3Doc.id,
            title: '酸化ストレス研究',
            description:
              '酸化損傷メカニズムを調査するために、細胞および生物学的研究で使用される水溶性ビタミンE類似体。',
          },
          {
            imageSrc: applicationsImage4Doc.id,
            title: '化粧品および医薬品研究',
            description:
              '化粧品処方および医薬品開発プログラムにおける抗酸化特性のスクリーニング化合物。',
          },
          {
            imageSrc: applicationsImage5Doc.id,
            title: '特殊化学合成',
            description:
              'カスタマイズされた特性を持つ高度な抗酸化化合物を合成するための貴重な中間体およびビルディングブロック。',
          },
        ],
      },
    }),
  ])

  // --------------------
  // SEEDING PRODUCTS
  // --------------------

  const [
    // Batch 1
    dmpa,
    dmba,
    hpva,
    // Batch 2
    hTempo,
    trolox,
    tempo,
    // Batch 3
    temp,
    dapeg,
    benzoyloxyTmp,
    // Batch 4
    acetamidoTempo,
    tempone,
    colamin,
    // Batch 5
    colaminPhosphate,
    colaminPhosphatesodiumSalt,
    vupin,
    // Batch 6
    pentamethylpiperidine,
    pentamethylpiperidinol,
    aminoTmp,
    // Batch 7
    hals770,
    hals765,
    aminoTempo,
    // Batch 8
    spiroTempoAcid,
    galvinoxyl,
  ] = await Promise.all([
    payload.create({
      collection: 'products',
      data: {
        name: 'Dimethylolbutyric Acid (DMBA)',
        _status: 'published',
        description:
          'An advanced trifunctional intermediate enabling next-generation waterborne resins. Facilitates solvent-free PUD synthesis with lower processing temperature and enhanced film resistance.',
        chemicalStructureImage: dmbaStructureDoc.id,
        technicalSpecifications: {
          chemicalName: '2,2-Bis(hydroxymethyl)butanoic acid',
          casNumber: '10097-02-6',
          ecNumber: '424-090-1',
          synonyms: [
            { synonym: '2,2-Bis(hydroxymethyl)butanoic acid' },
            { synonym: 'DMBA' },
            { synonym: 'Dimethylolbutyric Acid' },
          ],
          molecularFormula: 'C₆H₁₂O₄',
          molecularWeight: '148.16 g/mol',
          labVerified: 'Verified',
        },
        VupSpecifications: {
          appearance: 'White crystalline powder',
          purity: 'min. 99.0 % wt',
          acidValue: 'min. 375 mg KOH/g',
          hydroxylValue: 'min. 750 mg KOH/g',
          waterContent: 'max. 0.3 % wt',
          ashContent: 'max. 0.03 % wt',
        },
        chemicalFamily: [hydroxyAcids],
        applications: [
          {
            application: 'Solvent-Free PUDs',
            description:
              'Enables synthesis of high-performance waterborne polyurethane dispersions without organic solvents for eco-friendly coatings.',
            image: demoImageDoc.id,
          },
          {
            application: 'Electronic Coatings',
            description:
              'Used in waterborne conformal coatings for PCB protection offering enhanced water resistance and purity for demanding applications.',
            image: image2Doc.id,
          },
          {
            application: 'Leather Finishing',
            description:
              'Applied in water-based polyurethane emulsions for durable leather topcoats in automotive, footwear, and upholstery applications.',
            image: image3Doc.id,
          },
          {
            application: 'High-Performance Coatings',
            description:
              'Formulates waterborne systems requiring enhanced water resistance, hydrolytic stability, and low-VOC compliance.',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Solvent-Free Formulation Enabler',
            description:
              'Facilitates waterborne PUD synthesis with significantly reduced or eliminated organic solvents, lowering VOCs and improving workplace safety.',
          },
          {
            feature: 'Lower Processing Temperature',
            description:
              'Dissolves readily at lower temperatures compared to DMPA, simplifying melt processing and reducing energy consumption.',
          },
          {
            feature: 'Enhanced Film Performance',
            description:
              'Contributes to PUD films with superior water resistance and hydrolytic stability due to the ethyl side group structure.',
          },
          {
            feature: 'High Purity',
            description:
              'Supplied at 99% purity ensuring reliable performance in demanding applications including sensitive electronic coatings.',
          },
          {
            feature: 'Excellent Hydrophilic Agent',
            description:
              'Effectively incorporates carboxyl groups into polymer backbones ensuring stable water dispersibility after neutralization.',
          },
          {
            feature: 'Versatile Intermediate',
            description:
              'Suitable for advanced water-soluble alkyds, polyesters, adhesives, and biodegradable polymers requiring high performance.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'What are the main advantages of DMBA compared to DMPA?',
            answer:
              'DMBA offers easier processing due to lower melting point, facilitates solvent-free PUD synthesis, and potentially provides enhanced water resistance in final films.',
          },
          {
            question: 'Can DMBA be used to make solvent-free PUDs?',
            answer:
              "Yes, DMBA's properties are particularly well-suited for developing stable waterborne polyurethane dispersions with little or no organic co-solvents.",
          },
          {
            question: 'Is DMBA suitable for electronic coating applications?',
            answer:
              'Yes, DMBA forms high-purity, stable waterborne dispersions with good film properties making it ideal for conformal coatings and protective electronic layers.',
          },
          {
            question: 'What purity level does VUP offer for DMBA?',
            answer:
              'VUP offers high-purity DMBA at 99% minimum, ensuring reliable performance in demanding applications requiring consistent quality.',
          },
        ],
        slug: 'dmba',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        name: 'Dimethylolpropionic Acid (DMPA)',
        _status: 'published',
        description:
          'Essential trifunctional intermediate enabling high-performance waterborne coatings, polyurethane dispersions, alkyds, and polyesters with superior stability and environmental benefits.',
        chemicalStructureImage: dmpaStructureDoc.id,
        technicalSpecifications: {
          chemicalName: '3-Hydroxy-2-(hydroxymethyl)-2-methylpropanoic acid',
          casNumber: '4767-03-7',
          ecNumber: '225-306-3',
          synonyms: [{ synonym: '2,2-Bis(hydroxymethyl)propionic acid' }, { synonym: 'DMPA' }],
          molecularFormula: 'C₅H₁₀O₄',
          molecularWeight: '134.13 g/mol',
          labVerified: 'Verified',
        },
        VupSpecifications: {
          appearance: 'White crystalline powder',
          purity: 'min. 98.5 % wt',
          acidValue: 'min. 412 mg KOH/g',
          hydroxylValue: 'min. 824 mg KOH/g',
          waterContent: 'max. 0.3 % wt',
          ashContent: 'max. 0.03 % wt',
        },
        chemicalFamily: [hydroxyAcids],
        applications: [
          {
            application: 'Waterborne PUDs',
            description:
              'Key internal emulsifier for stable polyurethane dispersions enabling low-VOC automotive and industrial coatings.',
            image: demoImageDoc.id,
          },
          {
            application: 'Water-Soluble Alkyds',
            description:
              'Improves hydrolytic stability in alkyd resins for high-performance wood and furniture coatings.',
            image: image2Doc.id,
          },
          {
            application: 'Powder Coatings',
            description:
              'Enhances flow, gloss, and impact resistance in epoxy-polyester and polyester-based powder systems.',
            image: image3Doc.id,
          },
          {
            application: 'Electro-deposition Coatings',
            description:
              'Provides acid functionality crucial for automotive primers and demanding industrial E-coat applications.',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Enables Waterborne Formulations',
            description:
              'Carboxylic acid group allows easy incorporation into resins, promoting water dispersibility after neutralization for environmentally preferred systems.',
          },
          {
            feature: 'Improves Coating Properties',
            description:
              'Contributes to fast air-drying, high gloss, superior toughness, flexibility, and improved early water spot resistance in various coating systems.',
          },
          {
            feature: 'Enhances Adhesion',
            description:
              'Polar carboxyl groups improve adhesion of coatings and elastomers to various substrates including plastics, glass, and steel.',
          },
          {
            feature: 'High Purity & Consistency',
            description:
              'Offered at minimum 98.5% purity ensuring reliable performance and consistent results with low sodium grade available for sensitive applications.',
          },
          {
            feature: 'Versatile Reactivity',
            description:
              'Trifunctional structure with two primary hydroxyls and one tertiary carboxyl allows versatile use in polymer synthesis and water dispersion.',
          },
          {
            feature: 'Low Toxicity Profile',
            description:
              'Essentially non-toxic (Oral LD50 > 2000 mg/kg, rat) offering a safer alternative to other monomers used for similar purposes.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: "What is VUP's DMPA primarily used for?",
            answer:
              "VUP's DMPA is a key building block for environmentally friendly waterborne coatings like PUDs, alkyds, polyesters, inks, and adhesives for demanding applications.",
          },
          {
            question: "Is VUP's DMPA suitable for formulating waterborne systems?",
            answer:
              'Absolutely. DMPA enables excellent water solubility or dispersibility after neutralization, making it ideal for high-performance waterborne formulations.',
          },
          {
            question: "What is the physical form and purity of VUP's DMPA?",
            answer:
              'VUP supplies DMPA as high-purity (minimum 98.5%) white crystalline powder, ensuring consistent quality for your formulations.',
          },
          {
            question: 'Does VUP offer different grades of DMPA?',
            answer:
              'Yes, VUP offers both standard grade and low sodium grade DMPA. The low sodium grade provides benefits for certain high-performance dispersion applications.',
          },
          {
            question: 'How does DMPA improve coating properties?',
            answer:
              'DMPA contributes to fast air-drying, high gloss, superior toughness, flexibility, and improved water spot resistance while enhancing adhesion to various substrates.',
          },
        ],
        slug: 'dmpa',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        name: '3-Hydroxypivalic Acid (HPVA)',
        _status: 'published',
        description:
          'A unique hydroxy acid featuring a neopentyl structure, essential for synthesizing high-performance polyesters and esters with exceptional hydrolytic stability, thermal stability, and weather resistance.',
        chemicalStructureImage: hpvaStructureDoc.id,
        technicalSpecifications: {
          chemicalName: '3-Hydroxy-2,2-dimethylpropanoic acid',
          casNumber: '4835-90-9',
          ecNumber: '225-419-8',
          synonyms: [
            { synonym: 'Hydroxypivalic Acid' },
            { synonym: 'HPVA' },
            { synonym: '2,2-Dimethyl-3-hydroxypropionic acid' },
          ],
          molecularFormula: 'C₅H₁₀O₃',
          molecularWeight: '118.13 g/mol',
          labVerified: 'Verified',
        },
        VupSpecifications: {
          appearance: 'White crystalline powder/solid',
          purity: 'min. 98.0 % wt',
          meltingPoint: '122 – 124 °C',
        },
        chemicalFamily: [hydroxyAcids],
        applications: [
          {
            application: 'Polyester Resins for Coatings',
            description:
              'Key building block for high-performance polyester resins used in durable powder coatings and coil coatings with excellent weatherability and chemical resistance.',
            image: demoImageDoc.id,
          },
          {
            application: 'Ester Synthesis (HPN)',
            description:
              'Used to produce neopentyl glycol hydroxypivalate (HPN), an important diol modifier for coating resins and adhesives.',
            image: image2Doc.id,
          },
          {
            application: 'Synthetic Lubricants',
            description:
              'Raw material for specialty esters in high-temperature synthetic lubricant formulations, providing thermal and hydrolytic stability.',
            image: image3Doc.id,
          },
          {
            application: 'Chemical Intermediate',
            description:
              'Used in synthesis pathways for pharmaceuticals, agrochemicals, or specialty chemicals requiring its unique neopentyl structure.',
            image: demoImageDoc.id,
          },
          {
            application: 'Polyurethane Modification',
            description:
              'Incorporated as a co-monomer or modifier to enhance the stability of polyurethane systems in demanding applications.',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Exceptional Stability',
            description:
              'The neopentyl structure imparts outstanding hydrolytic stability, thermal stability, chemical resistance, and weather resistance to derived polymers.',
          },
          {
            feature: 'Durable Polymer Building Block',
            description:
              'Serves as a key monomer for producing high-performance polyester resins in applications demanding long-term durability.',
          },
          {
            feature: 'Versatile Ester Intermediate',
            description:
              'Readily undergoes esterification to produce valuable derivatives like HPN or esters for synthetic lubricants.',
          },
          {
            feature: 'High Purity',
            description:
              'VUP provides HPVA with minimum 98% purity, ensuring consistent reactivity and performance in sensitive synthesis processes.',
          },
          {
            feature: 'Modifier Potential',
            description:
              'Can be used as a co-monomer or modifier in polyurethane or other polymer systems where enhanced stability is desired.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'What makes HPVA different from other hydroxy acids like DMPA or DMBA?',
            answer:
              "HPVA's neopentyl structure provides exceptional thermal, hydrolytic, and chemical stability. Unlike DMPA/DMBA, it has one hydroxyl group, making it ideal as a stability-enhancing building block in polyesters/esters.",
          },
          {
            question: "What are the main applications for VUP's HPVA?",
            answer:
              "It's primarily used to produce highly durable polyester resins for powder and coil coatings, specialty esters like HPN or synthetic lubricants, and as an intermediate in pharmaceutical synthesis.",
          },
          {
            question: 'What purity level does VUP offer for HPVA?',
            answer:
              'VUP offers high-purity HPVA with a minimum specification of 98%. Full specifications are available in the Technical Data Sheet.',
          },
          {
            question: 'Why is HPVA preferred for weather-resistant applications?',
            answer:
              'The unique neopentyl structure of HPVA provides excellent weather resistance and durability in outdoor applications, making polymers more resistant to UV degradation and humidity.',
          },
          {
            question: 'Can HPVA be used in synthetic lubricant applications?',
            answer:
              'Yes, HPVA serves as a raw material for producing specialty esters used in high-temperature synthetic lubricants, benefiting from its thermal and hydrolytic stability.',
          },
          {
            question: 'What safety precautions should be taken when handling HPVA?',
            answer:
              'HPVA causes skin irritation, serious eye damage, and may cause respiratory irritation. Always consult the Safety Data Sheet for complete handling precautions.',
          },
        ],
        slug: 'hpva',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        name: '4-Hydroxy-TEMPO (TEMPOL / H-TEMPO)',
        _status: 'published',
        description:
          'A key functionalized derivative of TEMPO featuring both a stable nitroxyl radical and reactive hydroxyl group. Serves as a versatile antioxidant, catalyst, spin label, and crucial intermediate for synthesizing specialty chemicals.',
        chemicalStructureImage: hTempoStructureDoc.id,
        technicalSpecifications: {
          chemicalName: '4-Hydroxy-2,2,6,6-tetramethylpiperidin-1-oxyl',
          casNumber: '2226-96-2',
          ecNumber: '218-760-9',
          synonyms: [
            { synonym: 'H-TEMPO' },
            { synonym: 'TEMPOL' },
            { synonym: '4-Hydroxy-TEMPO' },
            { synonym: '4-Hydroxy-2,2,6,6-tetramethylpiperidinooxy' },
          ],
          molecularFormula: 'C₉H₁₈NO₂',
          molecularWeight: '172.24 g/mol',
          labVerified: 'Verified',
        },
        VupSpecifications: {
          appearance: 'Orange or reddish-orange crystalline solid/powder',
          purity: '≥98.0 % wt',
        },
        chemicalFamily: [hinderedAmines, polymerisationInhibitors],
        applications: [
          {
            application: 'Polymerization Inhibitor Synthesis',
            description:
              'Key raw material for producing formulated liquid polymerization inhibitors like the VUPIN range used in petrochemicals and monomer stabilization applications.',
            image: demoImageDoc.id,
          },
          {
            application: 'Catalysis & Oxidation',
            description:
              'Used as catalyst or co-catalyst in selective oxidation reactions, offering different solubility and reactivity profiles compared to standard TEMPO.',
            image: image2Doc.id,
          },
          {
            application: 'EPR Spectroscopy',
            description:
              'Utilized as a spin label probe to study molecular structure, dynamics, and environments in biophysical and chemical research applications.',
            image: image3Doc.id,
          },
          {
            application: 'Antioxidant Research',
            description:
              'Employed as a water-soluble antioxidant standard or protective agent in biochemical and cell-based studies investigating oxidative stress mechanisms.',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Functionalized Stable Radical',
            description:
              'Combines unique properties of TEMPO nitroxyl radical with a hydroxyl group, allowing for further chemical modification and enhanced solubility.',
          },
          {
            feature: 'Key Inhibitor Intermediate',
            description:
              "Serves as direct precursor for VUP's VUPIN range of liquid polymerization inhibitors, demonstrating significant industrial relevance.",
          },
          {
            feature: 'Versatile Research Tool',
            description:
              'Widely used as water-soluble antioxidant, catalyst in oxidation reactions, and spin label probe in EPR spectroscopy applications.',
          },
          {
            feature: 'Building Block Potential',
            description:
              'Hydroxyl group provides reactive site for synthesizing other functionalized TEMPO derivatives or incorporating nitroxyl moiety into larger molecules.',
          },
          {
            feature: 'Pilot Scale Production',
            description:
              "Manufactured at VUP's dedicated pilot plant facility ensuring availability for larger scale R&D, inhibitor production, and industrial applications.",
          },
          {
            feature: 'High Purity Quality',
            description:
              "VUP's production capabilities deliver high purity suitable for demanding applications including research and specialty chemical synthesis.",
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'What makes H-TEMPO different from standard TEMPO?',
            answer:
              'H-TEMPO features an additional hydroxyl group providing enhanced water solubility, different reactivity, and opportunities for further functionalization compared to standard TEMPO.',
          },
          {
            question: 'How is H-TEMPO used in polymerization inhibitor production?',
            answer:
              "H-TEMPO serves as the key raw material for producing VUP's VUPIN range of liquid polymerization inhibitors used in petrochemical and monomer stabilization applications.",
          },
          {
            question: 'What applications utilize H-TEMPO as a spin label?',
            answer:
              'H-TEMPO is used in EPR spectroscopy as a spin probe to study molecular structure, dynamics, and environments in biophysical and chemical research.',
          },
          {
            question: 'Can H-TEMPO be used as an antioxidant?',
            answer:
              'Yes, H-TEMPO serves as a water-soluble antioxidant standard and protective agent in biochemical studies investigating oxidative stress mechanisms.',
          },
          {
            question: 'What safety precautions are required when handling H-TEMPO?',
            answer:
              'H-TEMPO is an oxidizer that can cause skin, eye, and respiratory irritation. Handle with appropriate engineering controls and PPE. Always consult the official SDS.',
          },
          {
            question: 'What purity level does VUP offer for H-TEMPO?',
            answer:
              'VUP offers high-purity H-TEMPO at ≥98% suitable for demanding applications including research and specialty chemical synthesis.',
          },
        ],
        slug: 'h-tempo',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        name: 'Trolox',
        _status: 'published',
        description:
          'A potent, water-soluble analog of Vitamin E, widely recognized as the benchmark standard for measuring antioxidant capacity in TEAC assays and a valuable research tool for oxidative stress studies.',
        chemicalStructureImage: troloxStructureDoc.id,
        technicalSpecifications: {
          chemicalName: '6-Hydroxy-2,5,7,8-tetramethylchroman-2-carboxylic acid',
          casNumber: '53188-07-1',
          ecNumber: '258-422-8',
          synonyms: [
            { synonym: 'Trolox C' },
            { synonym: '6-Hydroxy-2,5,7,8-tetramethylchroman-2-carboxylic acid' },
          ],
          molecularFormula: 'C₁₄H₁₈O₄',
          molecularWeight: '250.29 g/mol',
          labVerified: 'Verified',
        },
        VupSpecifications: {
          appearance: 'Off-white to light yellow crystalline powder',
          purity: '≥98.0 % wt',
          solubility: 'Soluble in water and alcohols',
        },
        chemicalFamily: [chromanolsDerivatives],
        applications: [
          {
            application: 'Antioxidant Capacity Assays',
            description:
              'The reference standard compound for TEAC and similar assays measuring the total antioxidant capacity of food, beverages, natural extracts, and biological samples.',
            image: demoImageDoc.id,
          },
          {
            application: 'Oxidative Stress Research',
            description:
              'Used in cell culture and biochemical studies to protect against lipid peroxidation and investigate mechanisms of oxidative stress and antioxidant defense.',
            image: image2Doc.id,
          },
          {
            application: 'Cell Culture Protection',
            description:
              'Added to cell culture media as a protective antioxidant supplement to reduce background oxidative stress during experimental procedures.',
            image: image3Doc.id,
          },
          {
            application: 'Pharmaceutical R&D Screening',
            description:
              'Used as a screening tool in pharmaceutical and cosmetic R&D to evaluate the antioxidant potential of new compounds or formulations.',
            image: demoImageDoc.id,
          },
          {
            application: 'Analytical Reference Standard',
            description:
              'Employed as a standard in HPLC or other analytical methods for identifying or quantifying antioxidants in various samples.',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Benchmark Antioxidant Standard',
            description:
              'Globally recognized standard for Trolox Equivalent Antioxidant Capacity (TEAC) assays, enabling standardized comparison of antioxidant strengths.',
          },
          {
            feature: 'Water-Soluble Vitamin E Analog',
            description:
              'Offers the antioxidant properties related to Vitamin E but with significantly improved water solubility, making it ideal for aqueous systems and biological assays.',
          },
          {
            feature: 'Potent Radical Scavenger',
            description:
              'Effectively neutralizes various free radicals due to its 6-hydroxychromanol core structure, providing reliable antioxidant protection.',
          },
          {
            feature: 'High Purity Quality',
            description:
              'Produced to high purity levels (≥98%) suitable for demanding analytical and research applications requiring consistent performance.',
          },
          {
            feature: 'Research Versatility',
            description:
              'Widely used in academic and industrial research to study oxidative stress mechanisms, evaluate potential antioxidants, and protect cells or biochemicals from oxidative damage.',
          },
          {
            feature: 'Convenient Handling',
            description:
              'Water solubility makes it convenient for many biological and chemical assays, unlike fat-soluble Vitamin E requiring organic solvents.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'What is Trolox and how does it differ from Vitamin E?',
            answer:
              'Trolox is a synthetic water-soluble analog of Vitamin E. It shares the core chromanol ring structure but has a carboxylic acid group instead of the phytyl tail, making it water-soluble.',
          },
          {
            question: 'Why is Trolox used as an antioxidant standard?',
            answer:
              'Its water solubility makes it convenient for biological and chemical assays like TEAC, and its well-characterized antioxidant activity provides a reliable benchmark for comparison.',
          },
          {
            question: 'What are the main applications of VUP Trolox?',
            answer:
              'Primarily used in scientific research as an antioxidant standard, for studying oxidative stress in biological systems, cell culture protection, and as a reference compound in analytical methods.',
          },
          {
            question: 'What purity level does VUP offer for Trolox?',
            answer:
              'VUP offers high-purity Trolox at ≥98% suitable for demanding analytical and research applications requiring consistent and reliable performance.',
          },
          {
            question: 'Can Trolox be used in cell culture applications?',
            answer:
              'Yes, Trolox is commonly added to cell culture media as a protective antioxidant supplement to reduce background oxidative stress during experimental procedures.',
          },
          {
            question: 'How is Trolox used in TEAC assays?',
            answer:
              'Trolox serves as the reference standard in TEAC assays, with antioxidant capacity of test samples expressed as Trolox equivalents, enabling standardized comparison.',
          },
        ],
        slug: 'trolox',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        name: 'TEMPO (2,2,6,6-Tetramethylpiperidin-1-oxyl)',
        _status: 'published',
        description:
          'A highly versatile and stable nitroxyl radical, renowned for its utility as a catalyst in selective organic oxidations and as a mediator in controlled radical polymerization (NMP). VUP produces high-purity TEMPO at pilot scale.',
        chemicalStructureImage: tempoStructureDoc.id,
        technicalSpecifications: {
          chemicalName: '2,2,6,6-Tetramethyl-1-piperidinyloxyl',
          casNumber: '2564-83-2',
          ecNumber: '219-888-8',
          synonyms: [{ synonym: 'TEMPO' }],
          molecularFormula: 'C₉H₁₈NO',
          molecularWeight: '156.25 g/mol',
          labVerified: 'Verified',
        },
        VupSpecifications: {
          appearance: 'Orange-red crystalline solid',
          purity: 'min. 98.0 % wt',
          meltingPoint: '36-40 °C',
        },
        chemicalFamily: [hinderedAmines],
        applications: [
          {
            application: 'Selective Oxidation Catalyst',
            description:
              'Widely used as catalyst for efficient and selective oxidation of primary alcohols to aldehydes and secondary alcohols to ketones under mild conditions in fine chemical and pharmaceutical synthesis.',
            image: demoImageDoc.id,
          },
          {
            application: 'Controlled Radical Polymerization',
            description:
              'Mediator for Nitroxide Mediated Polymerization (NMP) enabling synthesis of polymers with controlled molecular weight, narrow polydispersity, and complex architectures.',
            image: image2Doc.id,
          },
          {
            application: 'EPR Spectroscopy',
            description:
              'Stable radical source used as spin label probe in Electron Paramagnetic Resonance spectroscopy for studying molecular environments, dynamics, and radical reaction mechanisms.',
            image: image3Doc.id,
          },
          {
            application: 'Pharmaceutical Intermediates',
            description:
              "Key precursor for synthesizing valuable derivatives including potential Active Pharmaceutical Ingredients (APIs) such as compounds for Parkinson's treatment.",
            image: demoImageDoc.id,
          },
          {
            application: 'Cellulose Oxidation',
            description:
              'Used in TEMPO-mediated oxidation of cellulose and pulp for producing modified cellulose materials with enhanced properties in specialty paper and biomaterial applications.',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Highly Selective Oxidation',
            description:
              'Provides exceptional selectivity in alcohol oxidation reactions under mild conditions, avoiding over-oxidation and maintaining product quality in sensitive synthetic processes.',
          },
          {
            feature: 'Stable Radical Source',
            description:
              'Persistent nitroxyl radical offers reliable performance as spin label probe and catalyst, unlike transient radicals that quickly decompose.',
          },
          {
            feature: 'Controlled Polymerization',
            description:
              'Enables precise control over polymer architecture through NMP, allowing synthesis of well-defined block copolymers and materials with specific performance characteristics.',
          },
          {
            feature: 'High Purity Grade',
            description:
              'Supplied at minimum 98% purity ensuring consistent reactivity and reliable performance in demanding catalytic and synthetic applications.',
          },
          {
            feature: 'Pilot Scale Production',
            description:
              'Manufactured at VUP pilot plant facility with documented capacity, ensuring availability beyond laboratory scale for commercial applications.',
          },
          {
            feature: 'Versatile Intermediate',
            description:
              'Serves as key building block for synthesizing functionalized TEMPO derivatives and valuable pharmaceutical intermediates with enhanced properties.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'What is TEMPO and what makes it special?',
            answer:
              'TEMPO is a stable nitroxyl radical based on the tetramethylpiperidine structure. Its exceptional stability makes it valuable as a reagent and catalyst, unlike most transient radicals that quickly decompose.',
          },
          {
            question: 'Why is TEMPO preferred for oxidation reactions?',
            answer:
              "TEMPO acts as a catalyst with co-oxidants to selectively oxidize alcohols under mild conditions. It's particularly known for converting primary alcohols to aldehydes with high selectivity and minimal over-oxidation.",
          },
          {
            question: 'How is TEMPO used in polymer chemistry?',
            answer:
              'TEMPO is essential for Nitroxide Mediated Polymerization (NMP), a controlled radical polymerization technique that allows synthesis of polymers with precise molecular weights and complex architectures.',
          },
          {
            question: 'What purity level does VUP offer for TEMPO?',
            answer:
              'VUP produces high-purity TEMPO with minimum 98% purity, ensuring consistent reactivity and reliable performance in sensitive catalytic and synthetic applications.',
          },
          {
            question: 'Is TEMPO considered hazardous to handle?',
            answer:
              'Yes, TEMPO is classified as an oxidizer and irritant requiring careful handling with appropriate PPE. It may intensify fire and can cause skin, eye, and respiratory irritation. Always consult the SDS.',
          },
          {
            question: 'Can VUP supply TEMPO at commercial scale?',
            answer:
              'VUP operates pilot plant production with documented capacity for TEMPO. Contact VUP directly to discuss availability and volumes for your specific commercial requirements.',
          },
        ],
        slug: 'tempo',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        name: '2,2,6,6-Tetramethylpiperidine (TEMP)',
        _status: 'published',
        description:
          'The foundational intermediate for producing a wide range of Hindered Amine Light Stabilizers (HALS) and the versatile stable radical TEMPO. VUP produces high-purity TEMP (min. 99%) at its pilot plant facility.',
        chemicalStructureImage: demoImageDoc.id,
        technicalSpecifications: {
          chemicalName: '2,2,6,6-Tetramethylpiperidine',
          casNumber: '768-66-1',
          ecNumber: '212-199-3',
          synonyms: [{ synonym: 'TEMP' }, { synonym: 'Norpempidine' }, { synonym: 'TMPH' }],
          molecularFormula: 'C₉H₁₉N',
          molecularWeight: '141.25 g/mol',
          labVerified: 'Verified',
        },
        VupSpecifications: {
          appearance: 'Colorless to light yellow low-melting solid or liquid',
          purity: 'min. 99.0 % wt',
        },
        chemicalFamily: [hinderedAmines],
        applications: [
          {
            application: 'HALS Manufacturing',
            description:
              'Essential intermediate for producing various Hindered Amine Light Stabilizers used extensively in the plastics and coatings industries for UV protection.',
            image: demoImageDoc.id,
          },
          {
            application: 'TEMPO Synthesis',
            description:
              'Direct precursor for manufacturing TEMPO and its derivatives, which are used as catalysts, oxidants, polymerization inhibitors, and research tools.',
            image: image2Doc.id,
          },
          {
            application: 'Organic Synthesis',
            description:
              'Employed as a hindered secondary amine base or building block in specific chemical reactions requiring this unique structural framework.',
            image: image3Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Essential HALS Intermediate',
            description:
              'The core starting material for synthesizing numerous high-performance HALS used to protect polymers from UV degradation.',
          },
          {
            feature: 'High Purity Product',
            description:
              'VUP supplies TEMP with a minimum purity of 99%, ensuring high quality for demanding downstream synthesis applications.',
          },
          {
            feature: 'Pilot Scale Production',
            description:
              'Manufactured at VUP pilot plant facility with 25 t/yr capacity, indicating capability for larger volume supply beyond lab scale.',
          },
          {
            feature: 'Direct TEMPO Precursor',
            description:
              'Key raw material used in the synthesis of TEMPO and its derivatives for various catalytic and research applications.',
          },
          {
            feature: 'Versatile Building Block',
            description:
              'Used as an intermediate in various organic synthesis applications beyond HALS and TEMPO production.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'What is TEMP primarily used for?',
            answer:
              'TEMP is the essential chemical building block used to synthesize Hindered Amine Light Stabilizers (HALS) and the stable radical TEMPO.',
          },
          {
            question: 'Is TEMP itself a light stabilizer?',
            answer:
              'No, TEMP is the intermediate or precursor. It needs to be further reacted to create the actual HALS molecules that provide light stabilization to polymers.',
          },
          {
            question: 'What purity does VUP offer for TEMP?',
            answer:
              'VUP produces TEMP with a minimum purity of 99%. Please request the Technical Data Sheet for full specifications.',
          },
          {
            question: 'Is TEMP hazardous to handle?',
            answer:
              'Yes, TEMP is classified as corrosive, flammable, and toxic. Strict safety precautions and appropriate PPE are essential. Always consult the SDS before use.',
          },
          {
            question: 'Does VUP produce TEMP at commercial scale?',
            answer:
              'VUP has documented pilot plant capacity for TEMP production. Contact VUP to discuss availability for your required volumes.',
          },
          {
            question: 'What makes VUP TEMP suitable for HALS synthesis?',
            answer:
              'VUP high-purity TEMP (99% min.) provides the quality and consistency required for producing high-performance HALS with reliable UV protection properties.',
          },
        ],
        slug: 'temp',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        name: 'Poly(ethylene glycol)bis(3-aminopropyl) terminated (DAPEG Series)',
        _status: 'published',
        description:
          'VUP is the unique global producer of high-purity DAPEG featuring PEG chains with reactive primary amine groups at both ends. Essential for advanced biomedical coatings, surface modification, PEGylation, and specialty polymer synthesis.',
        chemicalStructureImage: dapegStructureDoc.id,
        technicalSpecifications: {
          chemicalName: 'α-(3-Aminopropyl)-ω-(3-aminopropoxy)poly(oxy-1,2-ethanediyl)',
          casNumber: '34901-14-9',
          synonyms: [
            { synonym: 'DAPEG' },
            { synonym: 'Diaminopolyethylene Glycol' },
            { synonym: 'Amino-PEG-Amino' },
            { synonym: 'α,ω-Diamino-PEG' },
          ],
          molecularFormula: 'H₂N(CH₂)₃[O(CH₂)₂]nO(CH₂)₃NH₂',
          molecularWeight: '700-3400 g/mol',
          labVerified: 'Verified',
        },
        VupSpecifications: {
          appearance: 'Colorless to pale yellow liquid or white waxy solid',
          purity: 'min. 97.0 % wt',
        },
        chemicalFamily: [diaminopolyethyleneGlycols],
        applications: [
          {
            application: 'Biomedical Device Coatings',
            description:
              'Creating lubricious, hydrophilic, and biocompatible coatings for catheters, guidewires, stents, and other medical devices to improve patient comfort and device performance.',
            image: demoImageDoc.id,
          },
          {
            application: 'Surface Modification',
            description:
              'Functionalizing surfaces of implants, nanoparticles, biosensors, and microfluidic devices to enhance biocompatibility and reduce non-specific binding.',
            image: image2Doc.id,
          },
          {
            application: 'PEGylation & Bioconjugation',
            description:
              'Linking PEG chains to proteins, peptides, antibodies, or drug molecules to improve solubility, stability, circulation time, and reduce immunogenicity.',
            image: image3Doc.id,
          },
          {
            application: 'Advanced Polymer Synthesis',
            description:
              'Building block for synthesizing hydrogels for tissue engineering and drug delivery, block copolymers, and other functional polymer architectures.',
            image: demoImageDoc.id,
          },
          {
            application: 'PEGDAA Synthesis',
            description:
              'Direct precursor for producing Poly(ethylene glycol) diacrylamide (PEGDAA), used in hydrogel formation and specialized coating applications.',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Unique Global Supply',
            description:
              'Sourced directly from VUP, the sole global producer utilizing proprietary technology, ensuring a distinct and secure supply chain.',
          },
          {
            feature: 'High Purity Standards',
            description:
              'Manufactured to high purity standards (97% min), critical for demanding biomedical and pharmaceutical applications requiring consistent performance.',
          },
          {
            feature: 'Reactive Amine Termini',
            description:
              'Provides primary amine groups at both ends, enabling efficient covalent attachment to surfaces or reaction with other functional groups for polymer synthesis.',
          },
          {
            feature: 'PEG Chain Properties',
            description:
              'Imparts hydrophilicity, water solubility, biocompatibility, and resistance to non-specific protein adsorption inherent to polyethylene glycol chains.',
          },
          {
            feature: 'Versatile Molecular Weights',
            description:
              'Available in a range of average molecular weights, allowing tailoring of properties like chain length, flexibility, and hydrodynamic volume.',
          },
          {
            feature: 'Biomedical Application Focus',
            description:
              'Proven utility as a key raw material for creating lubricious, hydrophilic coatings essential for medical devices like catheters and guidewires.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'What is DAPEG and how does it differ from regular PEG?',
            answer:
              'DAPEG is a polyethylene glycol with reactive primary amine groups at both ends instead of hydroxyl groups, making it ideal for covalent attachment and bioconjugation applications.',
          },
          {
            question: 'Why is VUP the unique source for DAPEG?',
            answer:
              'VUP possesses proprietary production technology positioning them as the key global producer of this specialized high-purity material, particularly valued in biomedical applications.',
          },
          {
            question: 'What are the main advantages of terminal amine groups?',
            answer:
              'Primary amines are versatile reactive handles for covalent attachment to surfaces with carboxyl or NHS-ester groups and for conjugation in bioconjugation or polymer synthesis.',
          },
          {
            question: 'What molecular weight grades does VUP offer for DAPEG?',
            answer:
              'VUP offers DAPEG in various average molecular weight grades ranging from approximately 700 to 3400 g/mol. Contact VUP to discuss specific grades and availability.',
          },
          {
            question: 'Is DAPEG suitable for medical device applications?',
            answer:
              'Yes, DAPEG is widely used as a raw material for biomedical coatings. Discuss your specific application requirements with VUP to ensure appropriate grade selection.',
          },
          {
            question: 'How is DAPEG used in surface modification applications?',
            answer:
              'DAPEG functionalizes surfaces through its reactive amine groups, creating biocompatible layers that reduce protein adsorption and enable further chemical modifications.',
          },
        ],
        slug: 'dapeg',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        name: '4-Benzoyloxy-2,2,6,6-tetramethylpiperidine',
        _status: 'published',
        description:
          'A functionalized hindered amine intermediate based on the TEMP structure, serving as a valuable precursor for producing specific Hindered Amine Light Stabilizers (HALS) or other functional molecules where a benzoate-protected hydroxyl group is required on the piperidine ring.',
        chemicalStructureImage: benzoyloxyTmpStructureDoc.id,
        technicalSpecifications: {
          chemicalName: '(2,2,6,6-Tetramethylpiperidin-4-yl) benzoate',
          casNumber: '3589-98-4',
          ecNumber: '222-733-9',
          synonyms: [
            { synonym: '2,2,6,6-Tetramethyl-4-piperidinyl benzoate' },
            { synonym: '4-Benzoyloxy-TMP' },
          ],
          molecularFormula: 'C₁₆H₂₃NO₂',
          molecularWeight: '261.36 g/mol',
          labVerified: 'Verified',
        },
        VupSpecifications: {
          appearance: 'White to off-white solid/powder',
          purity: 'min. 97.0 % wt',
        },
        chemicalFamily: [hinderedAmines],
        applications: [
          {
            application: 'HALS Synthesis',
            description:
              'Used as a precursor in multi-step syntheses to produce specific types of Hindered Amine Light Stabilizers requiring the benzoate-protected hydroxyl functionality.',
            image: demoImageDoc.id,
          },
          {
            application: 'Organic Synthesis',
            description:
              'Employed as a building block for creating other functionalized piperidine derivatives for research or specialty chemical applications.',
            image: image2Doc.id,
          },
          {
            application: 'Research Chemical',
            description:
              'Used in academic or industrial laboratories studying hindered amine chemistry or developing new synthetic methodologies.',
            image: image3Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Functionalized Intermediate',
            description:
              'Provides the stable 2,2,6,6-tetramethylpiperidine core functionalized with a benzoyloxy group at the 4-position for selective reactivity.',
          },
          {
            feature: 'Protected Hydroxyl Group',
            description:
              'Contains a benzoate-protected hydroxyl functionality useful in multi-step synthetic sequences where selective reactions are required.',
          },
          {
            feature: 'High Purity Product',
            description:
              'Supplied at minimum 97% purity ensuring consistent reactivity and performance in demanding synthetic applications.',
          },
          {
            feature: 'HALS Precursor Potential',
            description:
              'Can serve as a key intermediate in the synthesis pathway for specific HALS structures requiring this functionalized scaffold.',
          },
          {
            feature: 'Versatile Building Block',
            description:
              'Useful starting material for creating other specialized molecules requiring modification at the 4-position after potential deprotection.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'What is 4-Benzoyloxy-TMP used for?',
            answer:
              'It is primarily used as a chemical intermediate, particularly as a precursor in the synthesis of specific HALS or other functionalized molecules derived from the TEMP structure.',
          },
          {
            question: 'Is this product a HALS itself?',
            answer:
              'No, it is generally considered an intermediate used to make certain HALS, not typically used directly as a light stabilizer in polymers.',
          },
          {
            question: 'What is the advantage of using this intermediate?',
            answer:
              'It provides the TEMP core structure with a protected hydroxyl group as a benzoate ester, useful in multi-step synthetic sequences where selective reactivity is needed.',
          },
          {
            question: 'What purity level does VUP offer for this compound?',
            answer:
              'VUP supplies 4-Benzoyloxy-TMP with minimum 97% purity, ensuring consistent reactivity and performance in demanding synthetic applications.',
          },
          {
            question: 'Can this compound be used in research applications?',
            answer:
              'Yes, it is used in academic and industrial laboratories studying hindered amine chemistry or developing new synthetic methodologies involving functionalized piperidines.',
          },
        ],
        slug: 'benzoyloxy-tmp',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        name: '4-Acetamido-TEMPO',
        _status: 'published',
        description:
          'A functionalized derivative of the stable nitroxyl radical TEMPO featuring an acetamido group. Primarily used as a spin label probe for Electron Paramagnetic Resonance (EPR) spectroscopy in biochemical and materials science research.',
        chemicalStructureImage: acetamidoTempoStructureDoc.id,
        technicalSpecifications: {
          chemicalName: 'N-(1-Oxyl-2,2,6,6-tetramethylpiperidin-4-yl)acetamide',
          casNumber: '14691-89-5',
          ecNumber: '238-751-8',
          synonyms: [
            { synonym: '4-Acetamido-TEMPO' },
            { synonym: '4-(Acetylamino)-2,2,6,6-tetramethyl-1-piperidinyloxy' },
            { synonym: 'N-(1-Oxyl-2,2,6,6-tetramethyl-4-piperidinyl)acetamide' },
          ],
          molecularFormula: 'C₁₁H₂₁N₂O₂',
          molecularWeight: '213.29 g/mol',
          labVerified: 'Verified',
        },
        VupSpecifications: {
          appearance: 'Orange to red crystalline solid',
          purity: '≥97.0 % wt',
        },
        chemicalFamily: [hinderedAmines],
        applications: [
          {
            application: 'EPR Spectroscopy',
            description:
              'Primary application as a spin label probe to study protein structure, conformational changes, lipid membrane fluidity, and molecular binding interactions.',
            image: demoImageDoc.id,
          },
          {
            application: 'Biochemical Research',
            description:
              'Used in biophysical studies to investigate molecular dynamics, radical scavenging processes, and local environments where EPR monitoring is required.',
            image: image2Doc.id,
          },
          {
            application: 'Polymer Studies',
            description:
              'Investigates polymer chain mobility, segmental dynamics, morphology, and glass transition behavior through temperature-dependent EPR analysis.',
            image: image3Doc.id,
          },
          {
            application: 'Materials Science Research',
            description:
              'Applied in studying structure-property relationships in synthetic materials and monitoring changes in molecular environments during processing.',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Functionalized Spin Label',
            description:
              'Provides stable TEMPO nitroxyl radical center with acetamido functionality for specific polarity and hydrogen bonding interactions in EPR studies.',
          },
          {
            feature: 'Research Grade Purity',
            description:
              'High purity specification (≥97%) ensures reliable and consistent performance in sensitive EPR spectroscopy and research applications.',
          },
          {
            feature: 'Membrane Probe Capability',
            description:
              'Effectively partitions into biological membranes allowing detailed investigation of lipid bilayer dynamics and drug-membrane interactions.',
          },
          {
            feature: 'Versatile Research Tool',
            description:
              'Suitable for multiple research applications from protein conformational studies to polymer chain dynamics across various temperature ranges.',
          },
          {
            feature: 'Conjugation Potential',
            description:
              'Acetamido group offers potential for further chemical modification or conjugation strategies in specialized labeling applications.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'What is 4-Acetamido-TEMPO and its primary use?',
            answer:
              'It is a TEMPO derivative with an acetamido group, primarily used as a spin label probe in EPR spectroscopy to study molecular structure, dynamics, and environments.',
          },
          {
            question: 'How does it compare to other TEMPO spin labels?',
            answer:
              'The acetamido group provides specific polarity and hydrogen bonding capabilities, making it suitable for probing certain molecular environments compared to other TEMPO derivatives.',
          },
          {
            question: 'What makes it suitable for membrane studies?',
            answer:
              'Its chemical properties allow effective partitioning into biological membranes, enabling detailed investigation of lipid bilayer dynamics and membrane-drug interactions.',
          },
          {
            question: 'What purity level does VUP offer for this compound?',
            answer:
              'VUP supplies 4-Acetamido-TEMPO with ≥97% purity, ensuring reliable performance in sensitive EPR spectroscopy and research applications.',
          },
          {
            question: 'Can it be used in polymer research applications?',
            answer:
              'Yes, it is valuable for studying polymer chain mobility, segmental dynamics, and glass transition behavior through temperature-dependent EPR analysis.',
          },
          {
            question: 'What safety precautions are required when handling this compound?',
            answer:
              'Handle as a specialty chemical with appropriate PPE. May cause skin, eye, and respiratory irritation. Always consult the official SDS for complete safety information.',
          },
        ],
        slug: 'acetamido-tempo',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        name: '4-Oxo-TEMPO (TEMPone)',
        _status: 'published',
        description:
          'A ketone-functionalized stable nitroxyl radical based on TEMPO, offering alternative reactivity in selective oxidation catalysis and serving as a versatile intermediate for synthesizing complex nitroxide derivatives.',
        chemicalStructureImage: temponeStructureDoc.id,
        technicalSpecifications: {
          chemicalName: '2,2,6,6-Tetramethyl-4-oxopiperidin-1-oxyl',
          casNumber: '2896-70-0',
          ecNumber: '608-279-9',
          synonyms: [{ synonym: 'TEMPOne' }, { synonym: '4-Oxo-2,2,6,6-tetramethylpiperidinooxy' }],
          molecularFormula: 'C₉H₁₆NO₂',
          molecularWeight: '170.23 g/mol',
          labVerified: 'Verified',
        },
        VupSpecifications: {
          appearance: 'Orange to red crystalline solid',
          purity: '≥97.0 % wt',
        },
        chemicalFamily: [hinderedAmines],
        applications: [
          {
            application: 'Selective Oxidation Catalyst',
            description:
              'Functions as catalyst for specific oxidation reactions, potentially offering different selectivity and performance characteristics compared to other TEMPO derivatives in certain transformations.',
            image: demoImageDoc.id,
          },
          {
            application: 'Intermediate Synthesis',
            description:
              'Serves as building block for synthesizing functionalized nitroxides and complex molecules, leveraging the ketone group as a reactive handle for further chemical modifications.',
            image: image2Doc.id,
          },
          {
            application: 'Radical Chemistry Research',
            description:
              'Employed as research tool for studying radical reaction mechanisms, nitroxide-mediated processes, and developing new synthetic methodologies in academic and industrial settings.',
            image: image3Doc.id,
          },
          {
            application: 'Materials Science',
            description:
              'Potential incorporation into functional polymers or advanced materials requiring stable radical centers for specialized properties and performance characteristics.',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Functionalized TEMPO Radical',
            description:
              'Provides the stable nitroxyl radical center functionalized with a ketone group at the 4-position, offering unique electronic and steric properties.',
          },
          {
            feature: 'Alternative Oxidant Properties',
            description:
              'Used in organic synthesis as catalyst for selective oxidations, potentially offering different performance characteristics compared to other TEMPO derivatives.',
          },
          {
            feature: 'Versatile Intermediate',
            description:
              'The ketone group serves as reactive handle for further chemical modifications to create more complex nitroxide derivatives and functionalized molecules.',
          },
          {
            feature: 'Research Tool',
            description:
              'Employed in research settings to study radical chemistry, catalysis mechanisms, and develop new synthetic methods for academic and industrial applications.',
          },
          {
            feature: 'VUP Synthetic Capability',
            description:
              'Falls within VUP expertise in hindered amine and TEMPO derivative chemistry, indicating potential for reliable supply or custom synthesis capabilities.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'What is 4-Oxo-TEMPO and how does it differ from standard TEMPO?',
            answer:
              'It is a TEMPO derivative with a ketone group at the 4-position, offering different chemical properties, reactivity, polarity, and potential applications compared to standard TEMPO.',
          },
          {
            question: 'What are the main applications for 4-Oxo-TEMPO?',
            answer:
              'Primarily used as a catalyst for selective oxidations in organic synthesis, as an intermediate for synthesizing functionalized nitroxides, and as a research tool in radical chemistry studies.',
          },
          {
            question: 'How is 4-Oxo-TEMPO used in catalytic oxidation reactions?',
            answer:
              'It functions as a catalyst offering potentially different selectivity and performance characteristics compared to other TEMPO derivatives in certain oxidation transformations.',
          },
          {
            question: 'Can 4-Oxo-TEMPO be used as a building block for synthesis?',
            answer:
              'Yes, the ketone group provides a reactive handle for further chemical modifications, making it valuable for creating complex nitroxide derivatives and functionalized molecules.',
          },
          {
            question: 'What purity level does VUP offer for 4-Oxo-TEMPO?',
            answer:
              'VUP supplies 4-Oxo-TEMPO with ≥97% purity, ensuring reliable performance for demanding research and synthesis applications requiring consistent quality.',
          },
          {
            question: 'What safety precautions are required when handling 4-Oxo-TEMPO?',
            answer:
              'Handle as specialty chemical and potential oxidizer. May cause skin, eye, and respiratory irritation. Use appropriate PPE and always consult the official SDS for complete safety information.',
          },
        ],
        slug: 'oxo-tempo',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        name: 'Colamin Phosphate Calcium Salt',
        _status: 'published',
        description:
          'A unique compound providing both the fundamental phospholipid precursor, Phosphorylethanolamine, and the essential mineral, Calcium. This synergistic combination supports both cellular membrane integrity and bone health, making it valuable for specialized dietary supplements, veterinary nutrition, and pharmaceutical applications.',
        chemicalStructureImage: colaminPhosphateStructureDoc.id,
        technicalSpecifications: {
          chemicalName: 'Calcium bis(2-aminoethyl hydrogen phosphate)',
          casNumber: '17257-58-0',
          synonyms: [
            { synonym: 'Calcium Phosphorylethanolamine' },
            { synonym: 'Colamin Phosphate Calcium' },
          ],
          molecularFormula: 'C₄H₁₄CaN₂O₈P₂',
          molecularWeight: '316.18 g/mol',
          labVerified: 'Verified',
        },
        VupSpecifications: {
          appearance: 'White to off-white solid/powder',
          purity: 'min. 98.0 % wt',
        },
        chemicalFamily: [phospholipidPrecursors],
        applications: [
          {
            application: 'Dietary Supplements',
            description:
              'Excellent ingredient for advanced supplements targeting both bone health (providing calcium) and cellular health/cognitive function (providing the PE precursor).',
            image: demoImageDoc.id,
          },
          {
            application: 'Veterinary Nutrition',
            description:
              'Used in feed additives or supplements for animals, supporting skeletal development (calcium) and overall cellular growth/health (PE precursor).',
            image: image2Doc.id,
          },
          {
            application: 'Pharmaceutical Formulations',
            description:
              'Potential use where co-delivery of calcium and phosphorylethanolamine is beneficial for therapeutic or formulation reasons requiring appropriate grade and regulatory compliance.',
            image: image3Doc.id,
          },
          {
            application: 'Biochemical Research',
            description:
              'Tool for studying the interplay between calcium signaling/metabolism and phospholipid synthesis or membrane function in research applications.',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Dual Nutritional Benefit',
            description:
              'Delivers both Phosphorylethanolamine (crucial for cell membrane synthesis) and bioavailable Calcium (essential for bone health, nerve function) in a single molecule.',
          },
          {
            feature: 'Supports Bone & Cellular Health',
            description:
              'Ideal for formulations aiming to synergistically support skeletal structure and cellular integrity in a comprehensive approach.',
          },
          {
            feature: 'Versatile Precursor',
            description:
              "Provides the core Colamin Phosphate moiety required for the body's synthesis of phosphatidylethanolamine (PE), a critical phospholipid component.",
          },
          {
            feature: 'Formulation Potential',
            description:
              'Offers a unique ingredient option for developers of advanced supplements, veterinary products, and potentially pharmaceutical formulations.',
          },
          {
            feature: 'High Purity Standards',
            description:
              'Manufactured to high purity standards ensuring consistent quality and performance in demanding nutritional and pharmaceutical applications.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'What is the main benefit of the Calcium Salt vs. other forms?',
            answer:
              'The primary benefit is providing both the essential phospholipid precursor (phosphorylethanolamine) and the mineral Calcium in one compound, particularly useful for applications targeting bone health alongside cellular health.',
          },
          {
            question: 'Is the calcium in this salt bioavailable?',
            answer:
              'Calcium salts of organic acids are generally considered bioavailable sources of calcium, but specific bioavailability would depend on the overall formulation and physiological factors.',
          },
          {
            question: 'What applications is this salt best suited for?',
            answer:
              "It's particularly well-suited for dietary supplements and veterinary nutrition products focused on bone health, growth, and cellular integrity.",
          },
          {
            question: 'How does this compound support cellular membrane integrity?',
            answer:
              'It provides phosphorylethanolamine, which is the fundamental precursor required for the synthesis of phosphatidylethanolamine (PE), a critical phospholipid component of all cell membranes.',
          },
          {
            question: 'What purity level does VUP offer for this product?',
            answer:
              'VUP offers Colamin Phosphate Calcium Salt with minimum 98% purity, ensuring consistent quality and performance in demanding nutritional and pharmaceutical applications.',
          },
          {
            question: 'Can this product be used in veterinary applications?',
            answer:
              'Yes, it is used in feed additives or supplements for animals, supporting skeletal development through calcium and overall cellular growth/health through the phospholipid precursor.',
          },
        ],
        slug: 'colamin-phosphate-calcium-salt',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        name: 'Colamin Phosphate (Phosphorylethanolamine)',
        _status: 'published',
        description:
          'High-purity fundamental biochemical precursor required for synthesizing phosphatidylethanolamine (PE), a critical phospholipid component of all cell membranes. Essential for cellular structure and function in pharmaceutical applications.',
        chemicalStructureImage: demoImageDoc.id,
        technicalSpecifications: {
          chemicalName: '2-Aminoethyl dihydrogen phosphate',
          casNumber: '1071-23-4',
          ecNumber: '213-988-5',
          synonyms: [
            { synonym: 'Phosphorylethanolamine' },
            { synonym: 'Ethanolamine Phosphate' },
            { synonym: 'O-Phosphoethanolamine' },
            { synonym: 'Colamin Phosphate' },
          ],
          molecularFormula: 'C₂H₈NO₄P',
          molecularWeight: '141.06 g/mol',
          labVerified: 'Verified',
        },
        VupSpecifications: {
          appearance: 'White crystalline powder/solid',
          purity: 'min. 98.0 % wt',
          solubility: 'Readily soluble in water',
        },
        chemicalFamily: [phospholipidPrecursors],
        applications: [
          {
            application: 'Pharmaceutical Synthesis',
            description:
              'Used as intermediate in drug synthesis or as active ingredient in specific formulations targeting cellular health and membrane integrity.',
            image: demoImageDoc.id,
          },
          {
            application: 'Dietary Supplements',
            description:
              'Key ingredient in supplements for cognitive function, brain health, liver health, and overall cellular membrane integrity support.',
            image: image2Doc.id,
          },
          {
            application: 'Veterinary Feed Additives',
            description:
              'Added to animal feed formulations to support cellular development and health in livestock and companion animals during growth phases.',
            image: image3Doc.id,
          },
          {
            application: 'Cell Culture Media',
            description:
              'Essential component in defined media for optimal growth and health of mammalian cell lines in biopharmaceutical production and research.',
            image: demoImageDoc.id,
          },
          {
            application: 'Biochemical Research',
            description:
              'Used as standard, reagent, or substrate in studies related to phospholipid metabolism, enzyme kinetics, and cell signaling pathways.',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Fundamental Building Block',
            description:
              'Directly involved in the primary pathway for synthesizing phosphatidylethanolamine (PE), essential for cell membrane structure and integrity across all tissues.',
          },
          {
            feature: 'High Purity Standards',
            description:
              'VUP provides minimum 98% purity, suitable for demanding applications in regulated industries including pharmaceuticals and dietary supplements.',
          },
          {
            feature: 'Water Soluble Properties',
            description:
              'Readily soluble in water, facilitating its use in aqueous formulations and biological systems for enhanced bioavailability and processing.',
          },
          {
            feature: 'Versatile Applications',
            description:
              'Widely used across pharmaceuticals, supplements, veterinary nutrition, and cell culture media, demonstrating broad industry acceptance and utility.',
          },
          {
            feature: 'Cellular Health Support',
            description:
              'Crucial for maintaining healthy cell function, membrane fluidity, and signaling processes, particularly important for brain and liver health applications.',
          },
          {
            feature: 'VUP Production Expertise',
            description:
              'Manufactured by VUP leveraging specialty chemical production experience with proven capability for scale-up and consistent quality delivery.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'What is Colamin Phosphate and why is it important for health?',
            answer:
              'It is a naturally occurring molecule essential for building phosphatidylethanolamine (PE), a major cell membrane component. Healthy cell membranes are crucial for all bodily functions.',
          },
          {
            question: 'What are the main applications for VUP Colamin Phosphate?',
            answer:
              'Used in pharmaceutical synthesis, dietary supplements for brain/cellular health, veterinary feed additives, cell culture media, and biochemical research applications.',
          },
          {
            question: 'What purity level does VUP offer for this product?',
            answer:
              'VUP supplies Colamin Phosphate with minimum 98% purity, suitable for demanding applications in regulated industries. Full specifications available in Technical Data Sheet.',
          },
          {
            question: 'How does it differ from Sodium or Calcium salt forms?',
            answer:
              'Colamin Phosphate is the base molecule, while sodium and calcium salts offer the same core with different solubility, handling properties, or additional nutritional minerals.',
          },
          {
            question: 'Is this product suitable for pharmaceutical and supplement use?',
            answer:
              'Yes, VUP produces high-purity Colamin Phosphate for pharmaceutical and supplement applications. Contact VUP for specific grade requirements and compliance documentation.',
          },
          {
            question: 'What makes VUP Colamin Phosphate suitable for cell culture applications?',
            answer:
              'High purity and water solubility make it ideal for defined media formulations, providing essential building blocks for robust cell membrane synthesis during proliferation.',
          },
        ],
        slug: 'colamin-phosphate',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        name: 'Colamin Phosphate Sodium Salt',
        _status: 'published',
        description:
          'The sodium salt form of the essential phospholipid precursor, Phosphorylethanolamine. This salt offers enhanced solubility and formulation flexibility compared to the parent compound, making it valuable for liquid supplements, pharmaceutical formulations, and specialized applications requiring improved dissolution characteristics.',
        chemicalStructureImage: colaminPhosphateStructureDoc.id,
        technicalSpecifications: {
          chemicalName: 'Sodium (2-aminoethyl) phosphate',
          casNumber: '3842-01-5',
          synonyms: [
            { synonym: 'Phosphorylethanolamine Sodium Salt' },
            { synonym: 'Ethanolamine Phosphate Sodium Salt' },
            { synonym: 'Colamin Phosphate Sodium' },
          ],
          molecularFormula: 'C₂H₇NNaO₄P',
          molecularWeight: '163.04 g/mol',
          labVerified: 'Verified',
        },
        VupSpecifications: {
          appearance: 'White crystalline powder/solid',
          purity: 'min. 98.0 % wt',
          solubility: 'Readily soluble in water',
        },
        chemicalFamily: [polymerisationInhibitors],
        applications: [
          {
            application: 'Liquid Formulations',
            description:
              'Enhanced water solubility makes it ideal for liquid supplements and pharmaceutical solutions where faster dissolution and improved compatibility are required.',
            image: demoImageDoc.id,
          },
          {
            application: 'Dietary Supplements',
            description:
              'Provides bioavailable phosphorylethanolamine for cellular health support with improved formulation flexibility in both liquid and solid dosage forms.',
            image: image2Doc.id,
          },
          {
            application: 'Cell Culture Media',
            description:
              'Component in specialized pH-controlled media formulations, providing essential building blocks for phosphatidylethanolamine synthesis during cell proliferation.',
            image: image3Doc.id,
          },
          {
            application: 'Pharmaceutical Formulations',
            description:
              'Used as intermediate or excipient where specific solubility profile and pH characteristics of the sodium salt offer formulation advantages over the parent compound.',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Enhanced Solubility',
            description:
              'Improved water solubility and faster dissolution rates compared to Colamin Phosphate, particularly beneficial in neutral to slightly alkaline aqueous solutions.',
          },
          {
            feature: 'Formulation Flexibility',
            description:
              'Offers formulators an alternative form that may be easier to handle or more stable in specific liquid or solid dosage forms requiring consistent performance.',
          },
          {
            feature: 'Essential Precursor Function',
            description:
              'Delivers the core phosphorylethanolamine molecule required for phosphatidylethanolamine synthesis and healthy cell membrane function across applications.',
          },
          {
            feature: 'pH Modification Potential',
            description:
              'Salt form provides controlled pH characteristics and potential buffering capacity beneficial for specialized formulation requirements.',
          },
          {
            feature: 'VUP Quality Assurance',
            description:
              'Manufactured leveraging VUP specialty chemical production expertise with proven capability for consistent quality delivery and reliable supply.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question:
              'What advantages does the sodium salt form offer over regular Colamin Phosphate?',
            answer:
              'The sodium salt provides enhanced water solubility, faster dissolution rates, and different handling characteristics, particularly beneficial for liquid formulations and neutral pH applications.',
          },
          {
            question: 'What are the main applications for Colamin Phosphate Sodium Salt?',
            answer:
              'Used in liquid supplements, pharmaceutical formulations, cell culture media, and veterinary applications where improved solubility and specific salt properties are advantageous.',
          },
          {
            question: 'How does it support cellular health like regular Colamin Phosphate?',
            answer:
              'It provides the same essential phosphorylethanolamine core for phosphatidylethanolamine synthesis and cell membrane health, just in a more soluble salt form.',
          },
          {
            question: 'What purity level does VUP offer for this sodium salt?',
            answer:
              'VUP supplies Colamin Phosphate Sodium Salt with minimum 98% purity, ensuring reliable performance for demanding pharmaceutical and supplement applications.',
          },
          {
            question: 'Is this form suitable for liquid supplement formulations?',
            answer:
              'Yes, the enhanced solubility makes it particularly suitable for liquid supplements where consistent dissolution and homogeneous distribution are critical.',
          },
          {
            question: 'How does the sodium content affect its nutritional profile?',
            answer:
              'While providing some sodium ions, the primary nutritional benefit remains the phosphorylethanolamine core for cellular health rather than sodium supplementation.',
          },
        ],
        slug: 'colamin-phosphate-sodium',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        name: 'VUPIN H37-B Polymerization Inhibitor',
        _status: 'published',
        description:
          'A liquid polymerization inhibitor formulation combining 4-Hydroxy-TEMPO with 2-Butoxyethanol solvent. Prevents unwanted polymerization in petrochemical streams, monomer handling, and FCC gasoline applications.',
        chemicalStructureImage: vupinStructureDoc.id,
        technicalSpecifications: {
          chemicalName:
            'Formulation of 4-Hydroxy-2,2,6,6-tetramethylpiperidin-1-oxyl in 2-Butoxyethanol',
          casNumber: '2226-96-2 (Active), 111-76-2 (Solvent)',
          ecNumber: '218-760-9 (Active), 203-905-0 (Solvent)',
          synonyms: [{ synonym: 'H-TEMPO in 2-Butoxyethanol' }, { synonym: 'VUPIN H37-B' }],
          molecularFormula: 'Formulation',
          molecularWeight: 'Formulation',
          labVerified: 'Verified',
        },
        VupSpecifications: {
          appearance: 'Clear amber to reddish liquid',
          purity: 'Proprietary Formulation',
          solubility: 'Miscible with most organic solvents',
        },
        chemicalFamily: [hinderedAmines, polymerisationInhibitors],
        applications: [
          {
            application: 'FCC Gasoline Stabilization',
            description:
              'Used as additive component in FCC gasoline packages for refineries, preventing degradation and ensuring stable fuel quality during storage and distribution.',
            image: demoImageDoc.id,
          },
          {
            application: 'Monomer Stabilization',
            description:
              'Prevents unwanted polymerization during storage and transport of reactive monomers like MMA, VAM, styrene, and acrylates in production facilities.',
            image: image2Doc.id,
          },
          {
            application: 'Petrochemical Process Safety',
            description:
              'Protects against polymer fouling in distillation columns, ethylene units, and pygas processing by scavenging radicals that initiate polymerization.',
            image: image3Doc.id,
          },
          {
            application: 'Refinery Operations',
            description:
              'Component in specialized additive packages for various refinery streams requiring polymerization inhibition and process equipment protection.',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Effective TEMPO-Based Inhibition',
            description:
              'Contains proven 4-Hydroxy-TEMPO radical scavenger that effectively prevents premature polymerization reactions in demanding industrial environments.',
          },
          {
            feature: 'Ready-to-Use Liquid Formulation',
            description:
              'Supplied as convenient liquid solution simplifying handling, dosing, and incorporation into process streams compared to solid inhibitors.',
          },
          {
            feature: 'Superior Solvency Properties',
            description:
              'Utilizes 2-Butoxyethanol glycol ether solvent providing excellent compatibility with various substances and effective distribution in process streams.',
          },
          {
            feature: 'Industrial-Grade Reliability',
            description:
              'Manufactured by VUP leveraging expertise in hindered amine chemistry and specialty chemical production for consistent quality and performance.',
          },
          {
            feature: 'Versatile Application Range',
            description:
              'Proven effectiveness across multiple petrochemical applications from FCC gasoline stabilization to monomer production and refinery operations.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'What exactly is VUPIN H37-B and its main components?',
            answer:
              'VUPIN H37-B is a liquid formulation containing 4-Hydroxy-TEMPO (CAS 2226-96-2) as the active polymerization inhibitor dissolved in 2-Butoxyethanol solvent for industrial petrochemical applications.',
          },
          {
            question: 'What is the primary application for VUPIN H37-B?',
            answer:
              'It is used as a component in additive packages for FCC gasoline in refineries and has proven effectiveness in stabilizing reactive monomers during storage, transport, and processing.',
          },
          {
            question: 'What makes VUPIN H37-B effective as a polymerization inhibitor?',
            answer:
              'It combines the potent radical scavenging ability of H-TEMPO with excellent solvency and compatibility properties of 2-Butoxyethanol carrier, ensuring effective distribution and performance.',
          },
          {
            question: 'How does VUPIN H37-B prevent polymer fouling in process equipment?',
            answer:
              'The H-TEMPO active ingredient scavenges free radicals that initiate unwanted polymerization, while the solvent ensures good distribution throughout the process stream, preventing fouling.',
          },
          {
            question: 'Is VUPIN H37-B available in different concentrations or formulations?',
            answer:
              'Please contact VUP directly to discuss specific requirements regarding inhibitor concentration, formulation needs, and custom solutions for your particular application.',
          },
          {
            question: 'What safety precautions are required when handling VUPIN H37-B?',
            answer:
              'Handle as specialty chemical formulation with appropriate PPE. Components have known hazards including eye/skin irritation. Always consult the official VUPIN H37-B SDS for complete safety information.',
          },
        ],
        slug: 'vupin-h37b',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        name: '1,2,2,6,6-Pentamethylpiperidine',
        _status: 'published',
        description:
          'An N-methylated hindered amine intermediate used for synthesizing specific types of HALS (Hindered Amine Light Stabilizers) like Tinuvin 765/292 and other functional molecules requiring this specialized piperidine structure.',
        chemicalStructureImage: demoImageDoc.id,
        technicalSpecifications: {
          chemicalName: '1,2,2,6,6-Pentamethylpiperidine',
          casNumber: '79-55-0',
          ecNumber: '201-212-8',
          synonyms: [
            { synonym: 'N-Methyl-2,2,6,6-tetramethylpiperidine' },
            { synonym: 'Pentamethylpiperidine' },
          ],
          molecularFormula: 'C₁₀H₂₁N',
          molecularWeight: '155.28 g/mol',
          labVerified: 'Verified',
        },
        VupSpecifications: {
          appearance: 'Colorless to pale yellow liquid',
          purity: 'min. 97.0 % wt',
        },
        chemicalFamily: [hinderedAmines],
        applications: [
          {
            application: 'HALS Synthesis',
            description:
              'Key intermediate for synthesizing Tinuvin 765/292 and related high-performance HALS compounds used in polymer stabilization applications.',
            image: demoImageDoc.id,
          },
          {
            application: 'Organic Synthesis',
            description:
              'Versatile building block for creating sterically hindered nitrogen-containing compounds in pharmaceutical and specialty chemical synthesis.',
            image: image2Doc.id,
          },
          {
            application: 'Research Applications',
            description:
              'Used in academic and industrial research for developing new hindered amine derivatives and studying steric hindrance effects in chemical reactions.',
            image: image3Doc.id,
          },
          {
            application: 'Custom Chemical Manufacturing',
            description:
              'Intermediate for contract manufacturing and custom synthesis projects requiring specific N-methylated hindered amine structures.',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'N-Methylated Structure',
            description:
              'The N-methyl group provides specific reactivity patterns and steric properties essential for certain HALS synthesis pathways.',
          },
          {
            feature: 'HALS Precursor',
            description:
              'Specifically designed intermediate for producing Tinuvin 765/292 and other commercial light stabilizers with proven performance.',
          },
          {
            feature: 'High Purity Product',
            description:
              'Supplied at minimum 97% purity ensuring consistent reactivity and performance in demanding synthetic applications.',
          },
          {
            feature: 'Steric Hindrance',
            description:
              'Provides optimal steric bulk around the nitrogen center, crucial for the effectiveness of derived HALS compounds.',
          },
          {
            feature: 'VUP Synthetic Expertise',
            description:
              'Manufactured leveraging VUP specialized knowledge in hindered amine chemistry with reliable supply and quality assurance.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'What is the primary use of 1,2,2,6,6-Pentamethylpiperidine?',
            answer:
              'It is primarily used as an intermediate in the synthesis of specific HALS like Tinuvin 765/292, providing the N-methylated hindered amine structure required for these light stabilizers.',
          },
          {
            question: 'How does the N-methyl group affect its chemical properties?',
            answer:
              'The N-methyl group reduces basicity compared to secondary amines and provides specific steric and electronic properties essential for certain HALS synthesis pathways.',
          },
          {
            question: 'What purity level does VUP offer for this compound?',
            answer:
              'VUP supplies 1,2,2,6,6-Pentamethylpiperidine with minimum 97% purity, ensuring consistent reactivity and performance in demanding synthetic applications.',
          },
          {
            question: 'Can this compound be used in other applications besides HALS synthesis?',
            answer:
              'Yes, it serves as a versatile building block for creating other sterically hindered nitrogen compounds in pharmaceutical and specialty chemical synthesis.',
          },
          {
            question: 'What safety precautions are required when handling this compound?',
            answer:
              'Handle as specialty chemical with appropriate PPE. May cause skin, eye, and respiratory irritation. Always consult the official SDS for complete safety information.',
          },
        ],
        slug: 'pentamethylpiperidine',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        name: '1,2,2,6,6-Pentamethyl-4-piperidinol',
        _status: 'published',
        description:
          'A functionalized N-methylated hindered amine containing a hydroxyl group, used as an intermediate for HALS synthesis (e.g., Tinuvin 765/292). The combination of N-methyl and hydroxyl functionalities provides unique reactivity.',
        chemicalStructureImage: image2Doc.id,
        technicalSpecifications: {
          chemicalName: '1,2,2,6,6-Pentamethyl-4-piperidinol',
          casNumber: '2403-89-6',
          ecNumber: '219-311-8',
          synonyms: [
            { synonym: 'N-Methyl-4-hydroxy-2,2,6,6-tetramethylpiperidine' },
            { synonym: 'Pentamethylpiperidinol' },
          ],
          molecularFormula: 'C₁₀H₂₁NO',
          molecularWeight: '171.28 g/mol',
          labVerified: 'Verified',
        },
        VupSpecifications: {
          appearance: 'White to off-white crystalline solid',
          purity: 'min. 98.0 % wt',
          meltingPoint: '35-38°C',
        },
        chemicalFamily: [hinderedAmines],
        applications: [
          {
            application: 'HALS Synthesis',
            description:
              'Critical intermediate for synthesizing Tinuvin 765/292 where both N-methyl and hydroxyl functionalities are required for the final product structure.',
            image: demoImageDoc.id,
          },
          {
            application: 'Specialty Chemical Synthesis',
            description:
              'Building block for creating complex hindered amine derivatives requiring dual functionality of tertiary nitrogen and secondary alcohol.',
            image: image2Doc.id,
          },
          {
            application: 'Pharmaceutical Intermediates',
            description:
              'Used in synthesis of pharmaceutical compounds where sterically hindered aminoalcohol structures provide desired biological activity.',
            image: image3Doc.id,
          },
          {
            application: 'Polymer Additive Development',
            description:
              'Intermediate for developing new polymer stabilizers and additives requiring specific steric and electronic properties.',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Dual Functionality',
            description:
              'Contains both N-methyl and hydroxyl groups, providing unique reactivity patterns essential for specific HALS synthesis routes.',
          },
          {
            feature: 'High Purity Standards',
            description:
              'Supplied at minimum 98% purity with VUP lab verification ensuring consistent quality for demanding synthetic applications.',
          },
          {
            feature: 'Sterically Hindered Alcohol',
            description:
              'The hydroxyl group is positioned in a sterically hindered environment, providing selective reactivity in chemical transformations.',
          },
          {
            feature: 'Tinuvin Precursor',
            description:
              'Specifically designed intermediate for commercial HALS production, particularly Tinuvin 765/292 synthesis pathways.',
          },
          {
            feature: 'VUP Production Excellence',
            description:
              'Manufactured using VUP specialized hindered amine chemistry expertise with proven track record in quality and reliability.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'What makes 1,2,2,6,6-Pentamethyl-4-piperidinol unique in HALS synthesis?',
            answer:
              'It contains both N-methyl and hydroxyl functionalities in a sterically hindered environment, making it essential for synthesizing specific HALS like Tinuvin 765/292.',
          },
          {
            question: 'How does the hydroxyl group affect its reactivity?',
            answer:
              'The sterically hindered hydroxyl group provides selective reactivity, allowing specific chemical transformations while protecting the nitrogen center.',
          },
          {
            question: 'What purity level does VUP offer for this compound?',
            answer:
              'VUP supplies this compound with minimum 98% purity, lab verified for consistent performance in demanding HALS synthesis applications.',
          },
          {
            question: 'Can this intermediate be used for applications other than HALS?',
            answer:
              'Yes, it serves as a versatile building block for pharmaceutical intermediates and specialty chemicals requiring sterically hindered aminoalcohol structures.',
          },
          {
            question: 'What are the typical handling and storage requirements?',
            answer:
              'Store in cool, dry conditions away from strong oxidizers. Handle with appropriate PPE and consult the SDS for complete safety and storage information.',
          },
        ],
        slug: 'pentamethylpiperidinol',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        name: '4-Amino-2,2,6,6-tetramethylpiperidine',
        _status: 'published',
        description:
          'A sterically hindered primary amine intermediate crucial for synthesizing specialized HALS compounds and pharmaceutical intermediates. The primary amino group provides excellent reactivity while the hindered structure offers stability and unique chemical properties for advanced applications.',
        chemicalStructureImage: image3Doc.id,
        technicalSpecifications: {
          chemicalName: '4-Amino-2,2,6,6-tetramethylpiperidine',
          casNumber: '36768-62-4',
          synonyms: [
            { synonym: '4-Amino-TMP' },
            { synonym: 'Piperidinamine, 2,2,6,6-tetramethyl-4-' },
          ],
          molecularFormula: 'C₉H₂₀N₂',
          molecularWeight: '156.27 g/mol',
          labVerified: 'Verified',
        },
        VupSpecifications: {
          appearance: 'White to off-white crystalline solid',
          purity: 'min. 98.0 % wt',
        },
        chemicalFamily: [hinderedAmines],
        applications: [
          {
            application: 'HALS Synthesis',
            description:
              'Key intermediate for synthesizing advanced hindered amine light stabilizers with specific functionality requirements. The primary amino group enables coupling reactions and derivatization pathways.',
            image: demoImageDoc.id,
          },
          {
            application: 'Pharmaceutical Intermediates',
            description:
              'Building block for developing pharmaceutical compounds requiring sterically hindered amine structures. Used in synthesis of potential drug candidates and active pharmaceutical ingredients.',
            image: image2Doc.id,
          },
          {
            application: 'Specialty Chemical Synthesis',
            description:
              'Versatile intermediate for creating custom hindered amine derivatives in specialty chemical manufacturing. Enables access to unique molecular architectures for various applications.',
            image: image3Doc.id,
          },
          {
            application: 'Research Applications',
            description:
              'Valuable tool in academic and industrial research for studying steric hindrance effects and developing new synthetic methodologies. Used in catalyst development and mechanism studies.',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Primary Amino Functionality',
            description:
              'Contains reactive primary amino group enabling diverse chemical transformations while maintaining structural stability from steric hindrance.',
          },
          {
            feature: 'Sterically Hindered Structure',
            description:
              'The hindered piperidine framework provides excellent stability and unique reactivity profile compared to conventional primary amines.',
          },
          {
            feature: 'High Purity Standards',
            description:
              'Manufactured to minimum 98% purity with VUP lab verification ensuring consistent performance in demanding synthetic applications.',
          },
          {
            feature: 'Versatile Building Block',
            description:
              'Serves as platform for creating diverse hindered amine derivatives in HALS, pharmaceutical, and specialty chemical synthesis.',
          },
          {
            feature: 'VUP Synthetic Expertise',
            description:
              'Produced leveraging VUP specialized knowledge in hindered amine chemistry with proven track record in quality and supply reliability.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'What makes 4-Amino-TMP unique compared to other hindered amines?',
            answer:
              'It contains a primary amino group in a sterically hindered environment, providing both high reactivity for derivatization and excellent stability from the hindered piperidine structure.',
          },
          {
            question: 'What are the main synthetic applications for this compound?',
            answer:
              'Primarily used as intermediate for HALS synthesis, pharmaceutical development, and specialty chemical manufacturing requiring hindered amine functionality.',
          },
          {
            question: 'How does the steric hindrance affect its chemical properties?',
            answer:
              'The hindrance provides thermal stability and resistance to oxidation while the primary amino group remains accessible for selective chemical reactions.',
          },
          {
            question: 'What purity level does VUP offer for 4-Amino-TMP?',
            answer:
              'VUP supplies this compound with minimum 98% purity, lab verified to ensure consistent performance in demanding synthetic and research applications.',
          },
          {
            question: 'Can this intermediate be used in pharmaceutical synthesis?',
            answer:
              'Yes, it serves as valuable building block for pharmaceutical intermediates and drug candidates requiring sterically hindered amine structures.',
          },
          {
            question: 'What are the typical storage and handling requirements?',
            answer:
              'Store in cool, dry conditions away from strong acids and oxidizers. Handle with appropriate PPE and consult SDS for complete safety information.',
          },
        ],
        slug: 'amino-tetramethylpiperidine',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        name: 'bis(2,2,6,6-tetramethyl-4-piperidyl) sebacate',
        _status: 'published',
        description:
          'Industry-standard high-molecular-weight HALS (equivalent to Tinuvin 770) providing superior UV protection for polyolefins, ABS, and other polymers. Low volatility and excellent thermal stability make it ideal for demanding outdoor applications requiring long-term performance.',
        chemicalStructureImage: demoImageDoc.id,
        technicalSpecifications: {
          chemicalName: 'bis(2,2,6,6-tetramethyl-4-piperidyl) sebacate',
          casNumber: '52829-07-9',
          synonyms: [
            { synonym: 'Tinuvin 770' },
            { synonym: 'HALS 770' },
            { synonym: 'Lowilite 77' },
            { synonym: 'Sabostab UV 70' },
            { synonym: 'ADK Stab LA-77' },
          ],
          molecularFormula: 'C₂₈H₅₂N₂O₄',
          molecularWeight: '484.72 g/mol',
          labVerified: 'Verified',
        },
        VupSpecifications: {
          appearance: 'White to off-white powder',
          purity: 'min. 98.0 % wt',
          meltingPoint: '81-86°C',
        },
        chemicalFamily: [hinderedAmines],
        applications: [
          {
            application: 'Polyolefin Stabilization',
            description:
              'Primary application in PP, PE, and other polyolefins for outdoor use requiring excellent UV protection. Provides long-term stability against photodegradation and maintains mechanical properties.',
            image: demoImageDoc.id,
          },
          {
            application: 'ABS Protection',
            description:
              'Highly effective in ABS resins for automotive, appliance, and outdoor applications. Prevents yellowing and brittleness while maintaining impact strength and surface quality.',
            image: image2Doc.id,
          },
          {
            application: 'Fiber Applications',
            description:
              'Used in polypropylene fibers for outdoor textiles, carpets, and geotextiles. Ensures color retention and prevents degradation in demanding environmental conditions.',
            image: image3Doc.id,
          },
          {
            application: 'Automotive Components',
            description:
              'Critical for automotive plastics exposed to UV radiation including bumpers, trim, and interior components. Provides durability and appearance retention over vehicle lifetime.',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'High Molecular Weight',
            description:
              'Low volatility and excellent permanence in polymer matrix, minimizing migration and ensuring long-term stabilization effectiveness.',
          },
          {
            feature: 'Proven Industry Standard',
            description:
              'Equivalent to Tinuvin 770 with decades of proven performance across multiple polymer applications and environmental conditions.',
          },
          {
            feature: 'Excellent Thermal Stability',
            description:
              'Maintains effectiveness at high processing temperatures and provides long-term stability in demanding thermal environments.',
          },
          {
            feature: 'Broad Polymer Compatibility',
            description:
              'Compatible with wide range of polymers and processing conditions, offering formulators flexibility in stabilization strategies.',
          },
          {
            feature: 'VUP Quality Assurance',
            description:
              'Manufactured with VUP expertise in HALS chemistry ensuring consistent quality, purity, and performance reliability.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'What polymers can HALS 770 effectively stabilize?',
            answer:
              'Particularly effective in polyolefins (PP, PE), ABS, and polystyrene, providing excellent UV protection and maintaining polymer properties in outdoor applications.',
          },
          {
            question: 'How does HALS 770 compare to other light stabilizers?',
            answer:
              'Offers superior long-term effectiveness due to regenerative mechanism, high thermal stability, and low volatility compared to conventional UV absorbers.',
          },
          {
            question: 'What is the typical usage level for HALS 770?',
            answer:
              'Generally used at 0.1-0.5% by weight depending on application requirements, polymer type, and desired level of UV protection.',
          },
          {
            question: 'Can HALS 770 be combined with other stabilizers?',
            answer:
              'Yes, often used synergistically with UV absorbers and antioxidants for comprehensive polymer stabilization in demanding applications.',
          },
          {
            question: 'What processing temperature limitations should be considered?',
            answer:
              'Stable up to 300°C during processing, making it suitable for most polymer processing conditions without decomposition or performance loss.',
          },
          {
            question: 'How does VUP ensure quality consistency for this product?',
            answer:
              'VUP employs rigorous lab verification, consistent synthesis protocols, and quality control testing to ensure batch-to-batch reliability.',
          },
        ],
        slug: 'hals-770',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        name: 'bis(1,2,2,6,6-pentamethyl-4-piperidyl) sebacate',
        _status: 'published',
        description:
          'High-performance liquid HALS light stabilizer providing exceptional UV protection for coatings, inks, and plastics. Features excellent thermal stability and broad polymer compatibility. VUP Lab Verified Synthesis ensures consistent quality.',
        chemicalStructureImage: image2Doc.id,
        technicalSpecifications: {
          chemicalName: 'bis(1,2,2,6,6-pentamethyl-4-piperidyl) sebacate',
          casNumber: '41556-26-7',
          synonyms: [
            { synonym: 'Tinuvin 765' },
            { synonym: 'Tinuvin 292' },
            { synonym: 'HALS 765' },
            { synonym: 'Lowilite 76' },
            { synonym: 'ADK Stab LA-72' },
            { synonym: 'Sabostab UV 62' },
          ],
          molecularFormula: 'C₃₀H₅₆N₂O₄',
          molecularWeight: '512.77 g/mol',
          labVerified: 'Verified',
        },
        VupSpecifications: {
          appearance: 'Colorless to pale yellow liquid',
          purity: '≥99.0%',
          density: '0.99 g/cm³ at 20°C',
          solubility: 'Soluble in most organic solvents',
        },
        chemicalFamily: [hinderedAmines],
        applications: [
          {
            application: 'Automotive Coatings',
            description:
              'Provides long-term UV protection for automotive topcoats and clearcoats, maintaining gloss and preventing color degradation in harsh outdoor conditions.',
            image: demoImageDoc.id,
          },
          {
            application: 'Printing Inks',
            description:
              'Ensures light stability in UV-curable and solvent-based printing inks, preventing color fading and maintaining print quality over time.',
            image: image2Doc.id,
          },
          {
            application: 'Industrial Coatings',
            description:
              'Stabilizes high-performance industrial coatings against UV degradation, extending service life in outdoor architectural and marine applications.',
            image: demoImageDoc.id,
          },
          {
            application: 'Wood Finishes',
            description:
              'Protects wood stains and varnishes from UV-induced discoloration and degradation, maintaining aesthetic appearance and performance.',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Liquid Form Processing',
            description:
              'Liquid state enables easy incorporation into formulations without grinding or dispersion requirements, simplifying manufacturing processes.',
          },
          {
            feature: 'Low Volatility',
            description:
              'Maintains effectiveness during high-temperature processing and provides long-term stability without significant loss during application.',
          },
          {
            feature: 'Excellent Compatibility',
            description:
              'Compatible with wide range of resins, solvents, and other additives, offering formulators maximum flexibility in system design.',
          },
          {
            feature: 'Regenerative Mechanism',
            description:
              'HALS mechanism regenerates the stabilizer, providing superior long-term protection compared to sacrificial UV absorbers.',
          },
          {
            feature: 'Thermal Stability',
            description:
              'Withstands processing temperatures up to 280°C without decomposition, suitable for high-temperature coating and ink applications.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'What is the recommended dosage level for HALS 765?',
            answer:
              'Typically used at 0.2-1.0% by weight depending on application requirements and desired UV protection level. Higher concentrations provide enhanced durability.',
          },
          {
            question: 'Can HALS 765 be used with other light stabilizers?',
            answer:
              'Yes, often combined synergistically with UV absorbers like benzotriazoles or benzophenones for comprehensive light stabilization systems.',
          },
          {
            question: 'What makes liquid HALS advantageous over solid forms?',
            answer:
              'Liquid form eliminates grinding, reduces dusting, ensures uniform distribution, and simplifies handling in automated manufacturing processes.',
          },
          {
            question: 'How does HALS 765 perform in water-based systems?',
            answer:
              'While primarily designed for solvent-based systems, it can be incorporated into water-based formulations using appropriate emulsification techniques.',
          },
          {
            question: 'What storage conditions are recommended for HALS 765?',
            answer:
              'Store in cool, dry conditions away from direct sunlight. Maintain temperature below 40°C and ensure containers are tightly sealed to prevent contamination.',
          },
          {
            question: 'How does VUP ensure quality consistency for this product?',
            answer:
              'VUP employs rigorous synthesis protocols, comprehensive analytical testing, and batch-to-batch verification to ensure consistent purity and performance.',
          },
        ],
        slug: 'hals-765',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        name: '4-Amino-TEMPO',
        _status: 'published',
        description:
          'Amino-functionalized TEMPO radical featuring stable nitroxyl functionality combined with reactive amino group. Ideal for spin labeling, bioconjugation, and advanced materials research. VUP Lab Researched quality.',
        chemicalStructureImage: image3Doc.id,
        technicalSpecifications: {
          chemicalName: '4-Amino-2,2,6,6-tetramethylpiperidinyloxyl',
          casNumber: '14691-88-4',
          synonyms: [
            { synonym: '4-Amino-2,2,6,6-tetramethylpiperidinyloxyl' },
            { synonym: 'TEMPO-amine' },
            { synonym: '4-NH2-TEMPO' },
          ],
          molecularFormula: 'C₉H₁₈N₂O',
          molecularWeight: '170.25 g/mol',
          labVerified: 'Researched',
        },
        VupSpecifications: {
          appearance: 'Orange-red crystalline solid',
          purity: '≥98.0%',
          meltingPoint: '69-72°C',
          solubility: 'Soluble in alcohols, moderately soluble in water',
        },
        chemicalFamily: [hinderedAmines],
        applications: [
          {
            application: 'EPR Spin Labeling',
            description:
              'Used as paramagnetic probe in electron paramagnetic resonance studies for investigating molecular dynamics and protein conformational changes.',
            image: demoImageDoc.id,
          },
          {
            application: 'Bioconjugation Chemistry',
            description:
              'Amino group enables coupling to biomolecules through amide bond formation, creating spin-labeled proteins, peptides, and nucleic acids for biophysical studies.',
            image: image2Doc.id,
          },
          {
            application: 'Polymer Modification',
            description:
              'Incorporates stable radical functionality into polymer chains for developing materials with unique magnetic and electronic properties.',
            image: demoImageDoc.id,
          },
          {
            application: 'Redox Chemistry',
            description:
              'Serves as mediator in electrochemical processes and oxidation reactions, particularly useful in organic synthesis and catalysis applications.',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Persistent Radical Stability',
            description:
              'Maintains radical character under ambient conditions without dimerization, providing reliable paramagnetic properties for analytical applications.',
          },
          {
            feature: 'Dual Functionality',
            description:
              'Combines stable nitroxyl radical with reactive amino group, enabling versatile chemical modifications and conjugation strategies.',
          },
          {
            feature: 'High Purity',
            description:
              'VUP research-grade quality ensures minimal impurities that could interfere with sensitive spectroscopic and biological applications.',
          },
          {
            feature: 'Water Compatibility',
            description:
              'Moderate water solubility allows use in aqueous biological systems and physiological conditions for biomedical research.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'How stable is the radical functionality of 4-Amino-TEMPO?',
            answer:
              'Extremely stable under normal conditions. The sterically hindered structure prevents radical dimerization, maintaining paramagnetic properties indefinitely when stored properly.',
          },
          {
            question: 'What coupling reactions can be performed with the amino group?',
            answer:
              'Amino group readily forms amide bonds with carboxylic acids/esters, reacts with aldehydes/ketones, and participates in various condensation reactions.',
          },
          {
            question: 'Is 4-Amino-TEMPO suitable for biological applications?',
            answer:
              'Yes, commonly used in protein labeling and biophysical studies. However, cytotoxicity should be evaluated for each specific biological system.',
          },
          {
            question: 'What are the storage requirements for 4-Amino-TEMPO?',
            answer:
              'Store in dark, cool conditions under inert atmosphere. Avoid exposure to strong reducing agents or acids that could compromise radical stability.',
          },
          {
            question: 'How does 4-Amino-TEMPO compare to other TEMPO derivatives?',
            answer:
              'The amino functionality provides unique reactivity while maintaining TEMPO radical stability, offering advantages over hydroxyl or carboxyl TEMPO variants.',
          },
        ],
        slug: 'amino-tempo',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        name: '8-Oxyl-7,7,9,9-tetramethyl-1,4-dioxa-8-azaspiro[4.5]decane-2-carboxylic acid',
        _status: 'published',
        description:
          'A stable nitroxyl radical with unique spiro structure and carboxylic acid functionality. Ideal for bioconjugation, spin labeling, and analytical applications requiring robust paramagnetic properties. VUP Lab Researched quality ensures reliable performance.',
        chemicalStructureImage: demoImageDoc.id,
        technicalSpecifications: {
          chemicalName:
            '8-Oxyl-7,7,9,9-tetramethyl-1,4-dioxa-8-azaspiro[4.5]decane-2-carboxylic acid',
          casNumber: '71792-73-7',
          synonyms: [{ synonym: 'Spiro-TEMPO-acid' }, { synonym: 'Spiro-TEMPO carboxylic acid' }],
          molecularFormula: 'C₁₂H₂₀NO₅',
          molecularWeight: '258.29 g/mol',
          labVerified: 'Researched',
        },
        VupSpecifications: {
          appearance: 'Orange to red crystalline solid',
          purity: 'min. 95.0 % wt',
          solubility: 'Soluble in organic solvents, limited water solubility',
        },
        chemicalFamily: [specialtyHinderedAmines],
        applications: [
          {
            application: 'Protein Spin Labeling',
            description:
              'Covalent attachment to proteins via amide bond formation for EPR spectroscopy studies. The spiro structure provides unique steric environment and reduced mobility.',
            image: demoImageDoc.id,
          },
          {
            application: 'Bioconjugation Chemistry',
            description:
              'Forms stable amide linkages with amino groups in biomolecules for creating paramagnetic bioconjugates. Enables tracking and structural analysis in biological systems.',
            image: image2Doc.id,
          },
          {
            application: 'Synthetic Building Block',
            description:
              'Intermediate for synthesizing more complex spin-labeled molecules and probes. The carboxylic acid provides versatile coupling chemistry for custom applications.',
            image: image3Doc.id,
          },
          {
            application: 'EPR Spectroscopy Research',
            description:
              'Standard probe for electron paramagnetic resonance studies requiring well-defined spin environments. Useful in distance measurements and conformational analysis.',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Unique Spiro Architecture',
            description:
              'Rigid spiro structure provides distinct steric environment and reduced conformational flexibility compared to linear TEMPO derivatives.',
          },
          {
            feature: 'Carboxylic Acid Reactivity',
            description:
              'Enables amide bond formation with amines and amino acids for bioconjugation. Compatible with standard peptide coupling chemistry.',
          },
          {
            feature: 'Stable Radical Character',
            description:
              'Maintains paramagnetic properties under physiological conditions. Resistant to reduction and dimerization in biological environments.',
          },
          {
            feature: 'Enhanced Rigidity',
            description:
              'Spiro structure reduces molecular motion providing sharper EPR signals and improved distance measurements in protein studies.',
          },
          {
            feature: 'VUP Research Grade',
            description:
              'Lab researched quality with controlled synthesis ensuring consistent radical properties and minimal paramagnetic impurities.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question:
              'What advantages does the spiro structure offer over linear TEMPO derivatives?',
            answer:
              'The spiro structure provides enhanced rigidity and unique steric environment, resulting in sharper EPR signals and reduced conformational flexibility for more precise measurements.',
          },
          {
            question: 'How stable is this compound under biological conditions?',
            answer:
              'Very stable under physiological pH and temperature. The spiro structure protects the radical center from reduction and maintains paramagnetic properties in biological systems.',
          },
          {
            question: 'What coupling methods work best with the carboxylic acid group?',
            answer:
              'Standard amide coupling reagents like EDC/NHS, HATU, or PyBOP work effectively. The carboxylic acid readily forms amide bonds with primary and secondary amines.',
          },
          {
            question: 'Is this compound suitable for protein labeling applications?',
            answer:
              'Yes, excellent for protein spin labeling via amide formation with lysine residues or N-terminus. The rigid structure provides well-defined spin environments for EPR studies.',
          },
          {
            question: 'What are the storage requirements for this radical compound?',
            answer:
              'Store in dark, cool conditions under inert atmosphere. Avoid exposure to reducing agents, strong acids, or bases that could compromise radical stability.',
          },
        ],
        slug: 'spiro-tempo-acid',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        name: 'Galvinoxyl Free Radical',
        _status: 'published',
        description:
          'A highly stable phenoxyl radical structurally distinct from TEMPO derivatives. Used as analytical standard for radical scavenging studies and antioxidant research. Deep blue color provides visual indication of radical concentration.',
        chemicalStructureImage: image2Doc.id,
        technicalSpecifications: {
          chemicalName:
            '2,6-di-tert-butyl-4-((3,5-di-tert-butyl-4-oxocyclohexa-2,5-dien-1-ylidene)methyl)phenoxy radical',
          casNumber: '2370-18-5',
          synonyms: [
            {
              synonym:
                '2,6-di-tert-butyl-4-((3,5-di-tert-butyl-4-oxocyclohexa-2,5-dien-1-ylidene)methyl)phenoxy radical',
            },
            { synonym: 'Galvinoxyl radical' },
          ],
          molecularFormula: 'C₂₉H₄₁O₂',
          molecularWeight: '421.64 g/mol',
          labVerified: 'Not Confirmed',
        },
        VupSpecifications: {
          appearance: 'Deep blue to purple crystalline solid',
          purity: 'Research grade',
          solubility: 'Soluble in organic solvents, insoluble in water',
        },
        chemicalFamily: [specialtyHinderedAmines],
        applications: [
          {
            application: 'Radical Scavenging Standards',
            description:
              'Reference compound for calibrating radical scavenging assays and antioxidant activity measurements. Provides reproducible results in analytical testing.',
            image: demoImageDoc.id,
          },
          {
            application: 'Antioxidant Research',
            description:
              'Model radical for studying antioxidant mechanisms and effectiveness. Used to evaluate radical quenching kinetics and antioxidant potency.',
            image: image2Doc.id,
          },
          {
            application: 'EPR Spectroscopy Reference',
            description:
              'Standard for electron paramagnetic resonance studies requiring well-characterized radical properties. Provides consistent signal for instrument calibration.',
            image: image3Doc.id,
          },
          {
            application: 'Polymer Stabilization Research',
            description:
              'Research tool for studying polymerization inhibition mechanisms and evaluating stabilizer effectiveness. Helps develop new antioxidant systems.',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Phenoxyl Radical Structure',
            description:
              'Structurally distinct from nitroxyl radicals like TEMPO, providing different reactivity patterns and scavenging mechanisms for comparative studies.',
          },
          {
            feature: 'Visual Color Indicator',
            description:
              'Deep blue color allows visual monitoring of radical concentration and reaction progress. Color intensity correlates with radical concentration.',
          },
          {
            feature: 'Exceptional Stability',
            description:
              'Highly stable under ambient conditions due to extensive steric hindrance from tert-butyl groups. Maintains radical character for extended periods.',
          },
          {
            feature: 'Research Standard',
            description:
              'Well-characterized properties make it ideal as analytical reference. Provides reproducible results across different laboratories and applications.',
          },
          {
            feature: 'Unique Reactivity Profile',
            description:
              'Different reaction kinetics compared to TEMPO radicals enabling study of structure-activity relationships in radical chemistry.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'How does Galvinoxyl differ from TEMPO in radical scavenging studies?',
            answer:
              'Galvinoxyl is a phenoxyl radical with different reactivity kinetics and mechanisms compared to TEMPO nitroxyl radicals, providing complementary data in scavenging studies.',
          },
          {
            question: 'Can the blue color be used for quantitative analysis?',
            answer:
              'Yes, the deep blue color correlates with radical concentration and can be used for UV-Vis spectrophotometric quantification and visual monitoring of reactions.',
          },
          {
            question: 'What makes Galvinoxyl particularly stable as a free radical?',
            answer:
              'Extensive steric hindrance from multiple tert-butyl groups prevents radical dimerization and protects the radical center from unwanted reactions.',
          },
          {
            question: 'Is Galvinoxyl suitable for biological antioxidant testing?',
            answer:
              'Primarily used in chemical systems due to limited water solubility. More suitable for organic solvent-based assays and mechanistic studies.',
          },
          {
            question: 'What are the typical storage and handling requirements?',
            answer:
              'Store in dark, cool conditions away from reducing agents. Handle under inert atmosphere to prevent unwanted reactions and maintain radical integrity.',
          },
        ],
        slug: 'galvinoxyl',
      },
    }),
  ])

  //? -------------------- START ADDING TRANSLATIONS FOR PRODUCTS -------------------- ?//

  // --------------------
  // ADDING SLOVAK TRANSLATIONS FOR PRODUCTS (BATCH 1: DMBA, DMPA, HPVA)
  // --------------------

  payload.logger.info('- Adding Slovak translations for first batch of products...')

  await Promise.all([
    payload.update({
      collection: 'products',
      id: dmba.id,
      locale: 'sk',
      data: {
        name: 'Dimetylobutánová kyselina (DMBA)',
        description:
          'Pokročilý trifunkčný medziproduk umožňujúci prípravku živíc na vodnej báze novej generácie. Umožňuje syntézu PUD bez rozpúšťadiel s nižšou spracovateľskou teplotou a zvýšenou odolnosťou filmu.',
        applications: [
          {
            application: 'PUD bez rozpúšťadiel',
            description:
              'Umožňuje syntézu vysokovýkonných polyuretánových disperzií na vodnej báze bez organických rozpúšťadiel pre ekologické nátery.',
            image: demoImageDoc.id,
          },
          {
            application: 'Elektronické nátery',
            description:
              'Používa sa vo vodných konformných náteroch na ochranu PCB, ktoré ponúkajú zvýšenú odolnosť voči vode a čistotu pre náročné aplikácie.',
            image: demoImageDoc.id,
          },
          {
            application: 'Úprava kože',
            description:
              'Aplikuje sa v polyuretánových emulziách na vodnej báze pre trvanlivé vrchné nátery kože v automobilovom, obuvníckom a čalúnnickom priemysle.',
            image: demoImageDoc.id,
          },
          {
            application: 'Vysokovýkonné nátery',
            description:
              'Formuluje systémy na vodnej báze vyžadujúce zvýšenú odolnosť voči vode, hydrolytickú stabilitu a súlad s nízkymi VOC.',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Umožňovač formulácií bez rozpúšťadiel',
            description:
              'Uľahčuje syntézu PUD na vodnej báze s výrazne zníženými alebo eliminovanými organickými rozpúšťadlami, znižuje VOC a zlepšuje bezpečnosť pracoviska.',
          },
          {
            feature: 'Nižšia spracovateľská teplota',
            description:
              'Rozpúšťa sa ľahko pri nižších teplotách v porovnaní s DMPA, zjednodušuje tavené spracovanie a znižuje spotrebu energie.',
          },
          {
            feature: 'Zvýšený výkon filmu',
            description:
              'Prispieva k PUD filmom s lepšou odolnosťou voči vode a hydrolytickou stabilitou vďaka štruktúre etylovej bočnej skupiny.',
          },
          {
            feature: 'Vysoká čistota',
            description:
              'Dodáva sa s čistotou 99 % zabezpečujúc spoľahlivý výkon v náročných aplikáciách vrátane citlivých elektronických náterov.',
          },
          {
            feature: 'Výborné hydrofilné činidlo',
            description:
              'Efektívne začleňuje karboxylové skupiny do polymerných kostier zabezpečujúc stabilnú dispergovateľnosť vo vode po neutralizácii.',
          },
          {
            feature: 'Všestranný medziproduk',
            description:
              'Vhodný pre pokročilé alkydové živice rozpustné vo vode, polyestre, lepidlá a biologicky rozložiteľné polymery vyžadujúce vysoký výkon.',
          },
        ],
        faq: [
          {
            question: 'Aké sú hlavné výhody DMBA v porovnaní s DMPA?',
            answer:
              'DMBA ponúka jednoduchšie spracovanie vďaka nižšiemu bodu topenia, uľahčuje syntézu PUD bez rozpúšťadiel a potenciálne poskytuje zvýšenú odolnosť voči vode v konečných filmoch.',
          },
          {
            question: 'Môže sa DMBA použiť na výrobu PUD bez rozpúšťadiel?',
            answer:
              'Áno, vlastnosti DMBA sú obzvlášť vhodné pre vývoj stabilných polyuretánových disperzií na vodnej báze s malým množstvom organických ko-rozpúšťadiel alebo bez nich.',
          },
          {
            question: 'Je DMBA vhodná pre aplikácie elektronických náterov?',
            answer:
              'Áno, DMBA tvorí vysokočisté, stabilné disperznosti na vodnej báze s dobrými vlastnosťami filmu, čo ju robí ideálnou pre konformné nátery a ochranné elektronické vrstvy.',
          },
          {
            question: 'Akú úroveň čistoty ponúka VUP pre DMBA?',
            answer:
              'VUP ponúka vysokočistú DMBA s minimálne 99 %, zabezpečujúc spoľahlivý výkon v náročných aplikáciách vyžadujúcich konzistentnú kvalitu.',
          },
        ],
      },
    }),
    payload.update({
      collection: 'products',
      id: dmpa.id,
      locale: 'sk',
      data: {
        name: 'Dimetylolpropiónová kyselina (DMPA)',
        description:
          'Základný trifunkčný medziproduk umožňujúci vysokovýkonné nátery na vodnej báze, polyuretánové diszperzie, alkydové a polyesterové živice s lepšou stabilitou a environmentálnymi výhodami.',
        applications: [
          {
            application: 'PUD na vodnej báze',
            description:
              'Kľúčový vnútorný emulgátor pre stabilné polyuretánové disperznosti umožňujúci automobilové a priemyselné nátery s nízkym VOC.',
            image: demoImageDoc.id,
          },
          {
            application: 'Alkydové živice rozpustné vo vode',
            description:
              'Zlepšuje hydrolytickú stabilitu v alkydových živiciach pre vysokovýkonné nátery na drevo a nábytok.',
            image: demoImageDoc.id,
          },
          {
            application: 'Práškové nátery',
            description:
              'Zvyšuje tok, lesk a odolnosť proti nárazu v epoxy-polyesterových a polyesterových práškových systémoch.',
            image: demoImageDoc.id,
          },
          {
            application: 'Elektroforetické nátery',
            description:
              'Poskytuje kyslú funkcionalitu kľúčovú pre automobilové základné nátery a náročné priemyselné E-coat aplikácie.',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Umožňuje formulácie na vodnej báze',
            description:
              'Karboxylová skupina umožňuje jednoduché začlenenie do živíc, podporuje dispergovateľnosť vo vode po neutralizácii pre environmentálne preferované systémy.',
          },
          {
            feature: 'Zlepšuje vlastnosti náterov',
            description:
              'Prispieva k rýchlemu sušeniu na vzduchu, vysokému lesku, vynikajúcej húževnatosti, flexibilite a zlepšenej odolnosti proti vodným škvrnám v rôznych náterových systémech.',
          },
          {
            feature: 'Zvyšuje adhéziu',
            description:
              'Polárne karboxylové skupiny zlepšujú adhéziu náterov a elastomérov k rôznym substrátom vrátane plastov, skla a ocele.',
          },
          {
            feature: 'Vysoká čistota a konzistencia',
            description:
              'Ponúkaná s minimálnou čistotou 98,5 % zabezpečujúc spoľahlivý výkon a konzistentné výsledky s dostupným nízkosódiovým stupňom pre citlivé aplikácie.',
          },
          {
            feature: 'Všestranná reaktivita',
            description:
              'Trifunkčná štruktúra s dvoma primárnymi hydroxylovými skupinami a jednou terciárnou karboxylovou umožňuje všestranné použitie v polymernej syntéze a vodnej disperzii.',
          },
          {
            feature: 'Nízky toxický profil',
            description:
              'V podstate netoxická (orálne LD50 > 2000 mg/kg, potkan) ponúka bezpečnejšiu alternatívu k iným monomerom používaným na podobné účely.',
          },
        ],
        faq: [
          {
            question: 'Na čo sa primárne používa DMPA od VUP?',
            answer:
              'DMPA od VUP je kľúčový stavebný blok pre environmentálne šetrné nátery na vodnej báze ako PUD, alkydové, polyesterové, farby a lepidlá pre náročné aplikácie.',
          },
          {
            question: 'Je DMPA od VUP vhodná na formulovanie systémov na vodnej báze?',
            answer:
              'Absolútne. DMPA umožňuje výbornú rozpustnosť alebo dispergovateľnosť vo vode po neutralizácii, čo ju robí ideálnou pre vysokovýkonné formulácie na vodnej báze.',
          },
          {
            question: 'Aká je fyzická forma a čistota DMPA od VUP?',
            answer:
              'VUP dodáva DMPA ako vysokočistý (minimálne 98,5 %) biely kryštalický prášok, zabezpečujúci konzistentnú kvalitu pre vaše formulácie.',
          },
          {
            question: 'Ponúka VUP rôzne stupne DMPA?',
            answer:
              'Áno, VUP ponúka štandardný stupeň aj nízkosódiový stupeň DMPA. Nízkosódiový stupeň poskytuje výhody pre určité vysokovýkonné disperzné aplikácie.',
          },
          {
            question: 'Ako DMPA zlepšuje vlastnosti náterov?',
            answer:
              'DMPA prispieva k rýchlemu sušeniu na vzduchu, vysokému lesku, vynikajúcej húževnatosti, flexibilite a zlepšenej odolnosti proti vodným škvrnám pri zlepšovaní adhézie k rôznym substrátom.',
          },
        ],
      },
    }),
    payload.update({
      collection: 'products',
      id: hpva.id,
      locale: 'sk',
      data: {
        name: '3-Hydroxypivalová kyselina (HPVA)',
        description:
          'Jedinečná hydroxykyselina s neopentylovou štruktúrou, nevyhnutná pre syntézu vysokovýkonných polyesterov a esterov s výnimočnou hydrolytickou stabilitou, tepelnou stabilitou a odolnosťou voči poveternosti.',
        applications: [
          {
            application: 'Polyesterové živice pre nátery',
            description:
              'Kľúčový stavebný blok pre vysokovýkonné polyesterové živice používané v trvanlivých práškových náteroch a náteroch na cievky s výbornou odolnosťou voči poveternosti a chemickej odolnosťou.',
            image: demoImageDoc.id,
          },
          {
            application: 'Syntéza esterov (HPN)',
            description:
              'Používa sa na výrobu neopentylglykol hydroxypivalátu (HPN), dôležitého diolového modifikátora pre náterové živice a lepidlá.',
            image: demoImageDoc.id,
          },
          {
            application: 'Syntetické mazivá',
            description:
              'Surovina pre špeciálne estery vo vysokoteplotných syntetických mazacích formuláciách, poskytujúca tepelnú a hydrolytickú stabilitu.',
            image: demoImageDoc.id,
          },
          {
            application: 'Chemický medziproduk',
            description:
              'Používa sa v syntetických cestách pre farmaceutiká, agrochemikálie alebo špeciálne chemikálie vyžadujúce jeho jedinečnú neopentylovú štruktúru.',
            image: demoImageDoc.id,
          },
          {
            application: 'Modifikácia polyuretánu',
            description:
              'Začleňuje sa ako ko-monomér alebo modifikátor na zvýšenie stability polyuretánových systémov v náročných aplikáciách.',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Výnimočná stabilita',
            description:
              'Neopentylová štruktúra poskytuje vynikajúcu hydrolytickú stabilitu, tepelnú stabilitu, chemickú odolnosť a odolnosť voči poveternosti odvodených polymérov.',
          },
          {
            feature: 'Trvanlivý polymerný stavebný blok',
            description:
              'Slúži ako kľúčový monomér pre výrobu vysokovýkonných polyesterových živíc v aplikáciách vyžadujúcich dlhodobú trvanlivosť.',
          },
          {
            feature: 'Všestranný esterový medziproduk',
            description:
              'Ľahko podlieha esterifikácii na výrobu cenných derivátov ako HPN alebo esterov pre syntetické mazivá.',
          },
          {
            feature: 'Vysoká čistota',
            description:
              'VUP poskytuje HPVA s minimálnou čistotou 98 %, zabezpečujúc konzistentnú reaktivitu a výkon v citlivých syntetických procesoch.',
          },
          {
            feature: 'Modifikačný potenciál',
            description:
              'Môže sa použiť ako ko-monomér alebo modifikátor v polyuretánových alebo iných polymerných systémoch, kde sa žiada zvýšená stabilita.',
          },
        ],
        faq: [
          {
            question: 'Čím sa HPVA líši od iných hydroxykyselín ako DMPA alebo DMBA?',
            answer:
              'Neopentylová štruktúra HPVA poskytuje výnimočnú tepelnú, hydrolytickú a chemickú stabilitu. Na rozdiel od DMPA/DMBA má jednu hydroxylovú skupinu, čo ju robí ideálnou ako stabilitu zvyšujúci stavebný blok v polyesteroch/esteroch.',
          },
          {
            question: 'Aké sú hlavné aplikácie HPVA od VUP?',
            answer:
              'Primárne sa používa na výrobu vysokotrvanlivých polyesterových živíc pre práškové a cievkové nátery, špeciálne estery ako HPN alebo syntetické mazivá a ako medziproduk vo farmaceutickej syntéze.',
          },
          {
            question: 'Akú úroveň čistoty ponúka VUP pre HPVA?',
            answer:
              'VUP ponúka vysokočistú HPVA s minimálnou špecifikáciou 98 %. Úplné špecifikácie sú dostupné v Technickom dátovom liste.',
          },
          {
            question: 'Prečo sa HPVA uprednostňuje pre aplikácie odolné voči poveternosti?',
            answer:
              'Jedinečná neopentylová štruktúra HPVA poskytuje výbornú odolnosť voči poveternosti a trvanlivosť v vonkajších aplikáciách, robí polymery odolnejšími voči UV degradácii a vlhkosti.',
          },
          {
            question: 'Môže sa HPVA použiť v aplikáciách syntetických mazív?',
            answer:
              'Áno, HPVA slúži ako surovina na výrobu špeciálnych esterov používaných vo vysokoteplotných syntetických mazivách, využívajúc jej tepelnú a hydrolytickú stabilitu.',
          },
          {
            question: 'Aké bezpečnostné opatrenia by sa mali dodržiavať pri manipulácii s HPVA?',
            answer:
              'HPVA spôsobuje podráždenie kože, vážne poškodenie očí a môže spôsobiť podráždenie dýchacích ciest. Vždy si preštudujte Bezpečnostný dátový list pre úplné bezpečnostné opatrenia.',
          },
        ],
      },
    }),
  ])

  // --------------------
  // ADDING JAPANESE TRANSLATIONS FOR PRODUCTS (BATCH 1: DMBA, DMPA, HPVA)
  // --------------------

  payload.logger.info('- Adding Japanese translations for first batch of products...')

  await Promise.all([
    payload.update({
      collection: 'products',
      id: dmba.id,
      locale: 'jp',
      data: {
        name: 'ジメチロール酪酸 (DMBA)',
        description:
          '次世代水系樹脂を可能にする先進的な三官能中間体。より低い加工温度と向上した皮膜抵抗性で溶媒フリーPUD合成を促進します。',
        applications: [
          {
            application: '溶媒フリーPUD',
            description:
              '有機溶媒なしで高性能水系ポリウレタン分散体の合成を可能にし、環境に優しいコーティングを実現します。',
            image: demoImageDoc.id,
          },
          {
            application: '電子コーティング',
            description:
              'PCB保護用の水系コンフォーマルコーティングで使用され、要求の厳しい用途での向上した耐水性と純度を提供します。',
            image: demoImageDoc.id,
          },
          {
            application: '革仕上げ',
            description:
              '自動車、履物、室内装飾品用途での耐久性のある革トップコート用水系ポリウレタンエマルションに適用されます。',
            image: demoImageDoc.id,
          },
          {
            application: '高性能コーティング',
            description:
              '向上した耐水性、加水分解安定性、低VOC適合性を要求する水系システムを配合します。',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: '溶媒フリー配合促進剤',
            description:
              '有機溶媒を大幅に削減または除去した水系PUD合成を促進し、VOCを低減し職場安全性を向上させます。',
          },
          {
            feature: 'より低い加工温度',
            description:
              'DMPAと比較してより低い温度で容易に溶解し、溶融加工を簡素化しエネルギー消費を削減します。',
          },
          {
            feature: '向上した皮膜性能',
            description:
              'エチル側鎖構造により、優れた耐水性と加水分解安定性を持つPUD皮膜に貢献します。',
          },
          {
            feature: '高純度',
            description:
              '99%純度で供給され、敏感な電子コーティングを含む要求の厳しい用途での信頼性の高い性能を保証します。',
          },
          {
            feature: '優れた親水性剤',
            description:
              'ポリマー主鎖にカルボキシル基を効果的に組み込み、中和後の安定した水分散性を確保します。',
          },
          {
            feature: '多用途中間体',
            description:
              '高性能を要求する先進的な水溶性アルキド、ポリエステル、接着剤、生分解性ポリマーに適用可能です。',
          },
        ],
        faq: [
          {
            question: 'DMPAと比較したDMBAの主な利点は何ですか？',
            answer:
              'DMBAは低融点による加工の容易さ、溶媒フリーPUD合成の促進、最終皮膜での向上した耐水性の可能性を提供します。',
          },
          {
            question: 'DMBAは溶媒フリーPUDの製造に使用できますか？',
            answer:
              'はい、DMBAの特性は有機共溶媒をほとんどまたは全く使用しない安定した水系ポリウレタン分散体の開発に特に適しています。',
          },
          {
            question: 'DMBAは電子コーティング用途に適していますか？',
            answer:
              'はい、DMBAは良好な皮膜特性を持つ高純度で安定した水系分散体を形成し、コンフォーマルコーティングや保護電子層に理想的です。',
          },
          {
            question: 'VUPはDMBAをどの純度レベルで提供していますか？',
            answer:
              'VUPは最低99%の高純度DMBAを提供し、一貫した品質を要求する要求の厳しい用途での信頼性の高い性能を保証します。',
          },
        ],
      },
    }),
    payload.update({
      collection: 'products',
      id: dmpa.id,
      locale: 'jp',
      data: {
        name: 'ジメチロールプロピオン酸 (DMPA)',
        description:
          '優れた安定性と環境利益を持つ高性能水系コーティング、ポリウレタン分散体、アルキド、ポリエステルを可能にする必須三官能中間体。',
        applications: [
          {
            application: '水系PUD',
            description:
              '低VOC自動車・工業コーティングを可能にする安定したポリウレタン分散体の主要内部乳化剤。',
            image: demoImageDoc.id,
          },
          {
            application: '水溶性アルキド',
            description:
              '高性能木材・家具コーティング用アルキド樹脂の加水分解安定性を向上させます。',
            image: demoImageDoc.id,
          },
          {
            application: '粉体塗料',
            description:
              'エポキシ-ポリエステルおよびポリエステル系粉体システムでの流動性、光沢、耐衝撃性を向上させます。',
            image: demoImageDoc.id,
          },
          {
            application: '電着塗料',
            description:
              '自動車プライマーと要求の厳しい工業用E-coat用途に重要な酸機能性を提供します。',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: '水系配合を可能にする',
            description:
              'カルボン酸基により樹脂への簡単な組み込みが可能で、中和後の水分散性を促進し環境に好ましいシステムを実現します。',
          },
          {
            feature: 'コーティング特性の向上',
            description:
              '各種コーティングシステムで速乾性、高光沢、優れた靭性、柔軟性、向上した初期耐水スポット性に貢献します。',
          },
          {
            feature: '接着性の向上',
            description:
              '極性カルボキシル基がプラスチック、ガラス、鋼材を含む様々な基材へのコーティングやエラストマーの接着性を向上させます。',
          },
          {
            feature: '高純度・一貫性',
            description:
              '最低98.5%純度で提供され、信頼性の高い性能と一貫した結果を保証し、敏感な用途向けの低ナトリウムグレードも利用可能です。',
          },
          {
            feature: '多用途反応性',
            description:
              '2つの一級水酸基と1つの三級カルボキシルを持つ三官能構造により、ポリマー合成と水分散での多用途使用が可能です。',
          },
          {
            feature: '低毒性プロファイル',
            description:
              '本質的に無毒（経口LD50 > 2000 mg/kg、ラット）で、類似目的に使用される他のモノマーより安全な代替品を提供します。',
          },
        ],
        faq: [
          {
            question: 'VUPのDMPAは主に何に使用されますか？',
            answer:
              'VUPのDMPAは、要求の厳しい用途向けのPUD、アルキド、ポリエステル、インク、接着剤など環境に優しい水系コーティングの主要構成要素です。',
          },
          {
            question: 'VUPのDMPAは水系システムの配合に適していますか？',
            answer:
              '絶対に適しています。DMPAは中和後の優れた水溶性または分散性を可能にし、高性能水系配合に理想的です。',
          },
          {
            question: 'VUPのDMPAの物理的形態と純度は？',
            answer:
              'VUPは高純度（最低98.5%）の白色結晶粉末としてDMPAを供給し、配合での一貫した品質を保証します。',
          },
          {
            question: 'VUPはDMPAの異なるグレードを提供していますか？',
            answer:
              'はい、VUPは標準グレードと低ナトリウムグレードのDMPAを提供しています。低ナトリウムグレードは特定の高性能分散用途で利益を提供します。',
          },
          {
            question: 'DMPAはどのようにコーティング特性を向上させますか？',
            answer:
              'DMPAは速乾性、高光沢、優れた靭性、柔軟性、向上した耐水スポット性に貢献し、様々な基材への接着性を向上させます。',
          },
        ],
      },
    }),
    payload.update({
      collection: 'products',
      id: hpva.id,
      locale: 'jp',
      data: {
        name: '3-ヒドロキシピバル酸 (HPVA)',

        description:
          'ネオペンチル構造を特徴とする独特なヒドロキシ酸で、卓越した加水分解安定性、熱安定性、耐候性を持つ高性能ポリエステルとエステルの合成に不可欠です。',
        applications: [
          {
            application: 'コーティング用ポリエステル樹脂',
            description:
              '優れた耐候性と化学抵抗性を持つ耐久性粉体塗料およびコイルコーティングで使用される高性能ポリエステル樹脂の主要構成要素。',
            image: demoImageDoc.id,
          },
          {
            application: 'エステル合成 (HPN)',
            description:
              'コーティング樹脂と接着剤の重要なジオール改質剤であるネオペンチルグリコールヒドロキシピバレート（HPN）の製造に使用されます。',
            image: demoImageDoc.id,
          },
          {
            application: '合成潤滑油',
            description:
              '熱安定性と加水分解安定性を提供する高温合成潤滑油配合での特殊エステルの原料。',
            image: demoImageDoc.id,
          },
          {
            application: '化学中間体',
            description:
              '独特なネオペンチル構造を要求する医薬品、農薬、または特殊化学品の合成経路で使用されます。',
            image: demoImageDoc.id,
          },
          {
            application: 'ポリウレタン改質',
            description:
              '要求の厳しい用途でのポリウレタンシステムの安定性を向上させるコモノマーまたは改質剤として組み込まれます。',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: '卓越した安定性',
            description:
              'ネオペンチル構造が誘導ポリマーに優れた加水分解安定性、熱安定性、化学抵抗性、耐候性を付与します。',
          },
          {
            feature: '耐久性ポリマー構成要素',
            description:
              '長期耐久性を要求する用途での高性能ポリエステル樹脂製造の主要モノマーとして機能します。',
          },
          {
            feature: '多用途エステル中間体',
            description:
              'HPNや合成潤滑油用エステルなどの貴重な誘導体を製造するためのエステル化を容易に行います。',
          },
          {
            feature: '高純度',
            description:
              'VUPは最低98%純度のHPVAを提供し、敏感な合成プロセスでの一貫した反応性と性能を保証します。',
          },
          {
            feature: '改質ポテンシャル',
            description:
              '向上した安定性が望まれるポリウレタンや他のポリマーシステムでコモノマーまたは改質剤として使用可能です。',
          },
        ],
        faq: [
          {
            question: 'HPVAはDMPAやDMBAなど他のヒドロキシ酸とどう違いますか？',
            answer:
              'HPVAのネオペンチル構造は卓越した熱、加水分解、化学安定性を提供します。DMPA/DMBAと異なり1つの水酸基を持ち、ポリエステル/エステルでの安定性向上構成要素として理想的です。',
          },
          {
            question: 'VUPのHPVAの主な用途は何ですか？',
            answer:
              '主に粉体・コイルコーティング用の高耐久性ポリエステル樹脂、HPNや合成潤滑油などの特殊エステル、医薬品合成での中間体として使用されます。',
          },
          {
            question: 'VUPはHPVAをどの純度レベルで提供していますか？',
            answer:
              'VUPは最低仕様98%の高純度HPVAを提供しています。完全な仕様は技術データシートで入手可能です。',
          },
          {
            question: 'なぜHPVAは耐候性用途で好まれるのですか？',
            answer:
              'HPVAの独特なネオペンチル構造は屋外用途での優れた耐候性と耐久性を提供し、ポリマーをUV劣化と湿度により耐性にします。',
          },
          {
            question: 'HPVAは合成潤滑油用途で使用できますか？',
            answer:
              'はい、HPVAは熱安定性と加水分解安定性を活用した高温合成潤滑油で使用される特殊エステル製造の原料として機能します。',
          },
          {
            question: 'HPVA取扱時にはどのような安全対策が必要ですか？',
            answer:
              'HPVAは皮膚刺激、重篤な眼損傷を引き起こし、呼吸器刺激を起こす可能性があります。完全な取扱注意事項については常に安全データシートを参照してください。',
          },
        ],
      },
    }),
  ])

  // --------------------
  // ADDING SLOVAK TRANSLATIONS FOR PRODUCTS (BATCH 2: H-TEMPO, TROLOX, TEMPO)
  // --------------------

  payload.logger.info('- Adding Slovak translations for second batch of products...')

  await Promise.all([
    payload.update({
      collection: 'products',
      id: hTempo.id,
      locale: 'sk',
      data: {
        name: '4-Hydroxy-TEMPO (TEMPOL / H-TEMPO)',
        description:
          'Kľúčový funkcionalizovaný derivát TEMPO obsahujúci stabilný nitroxylový radikál aj reaktívnu hydroxylovú skupinu. Slúži ako všestranný antioxidant, katalyzátor, spin značka a kľúčový medziproduk pre syntézu špeciálnych chemikálií.',
        applications: [
          {
            application: 'Syntéza inhibítorov polymerizácie',
            description:
              'Kľúčová surovina na výrobu formulovaných kvapalných inhibítorov polymerizácie ako je rada VUPIN používaná v petrochemických a stabilizačných aplikáciách monomerov.',
            image: demoImageDoc.id,
          },
          {
            application: 'Katalýza a oxidácia',
            description:
              'Používa sa ako katalyzátor alebo ko-katalyzátor v selektívnych oxidačných reakciách, ponúka odlišné profily rozpustnosti a reaktivity v porovnaní so štandardným TEMPO.',
            image: demoImageDoc.id,
          },
          {
            application: 'EPR spektroskopia',
            description:
              'Využíva sa ako spin značkovacia sonda na štúdium molekulárnej štruktúry, dynamiky a prostredí v biofyzikálnych a chemických výskumných aplikáciách.',
            image: demoImageDoc.id,
          },
          {
            application: 'Výskum antioxidantov',
            description:
              'Používa sa ako vo vode rozpustný antioxidant štandard alebo ochranné činidlo v biochemických a bunkovými štúdiách skúmajúcich mechanizmy oxidačného stresu.',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Funkcionalizovaný stabilný radikál',
            description:
              'Kombinuje jedinečné vlastnosti TEMPO nitroxylového radikálu s hydroxylovou skupinou, umožňujúc ďalšiu chemickú modifikáciu a zvýšenú rozpustnosť.',
          },
          {
            feature: 'Kľúčový medziproduk inhibítora',
            description:
              'Slúži ako priamy prekurzor pre VUP radu VUPIN kvapalných inhibítorov polymerizácie, demonštrujúc významný priemyselný význam.',
          },
          {
            feature: 'Všestranný výskumný nástroj',
            description:
              'Široko používaný ako vo vode rozpustný antioxidant, katalyzátor v oxidačných reakciách a spin značkovacia sonda v EPR spektroskopických aplikáciách.',
          },
          {
            feature: 'Potenciál stavebného bloku',
            description:
              'Hydroxylová skupina poskytuje reaktívne miesto pre syntézu iných funkcionalizovaných derivátov TEMPO alebo začlenenie nitroxylovej časti do väčších molekúl.',
          },
          {
            feature: 'Pilotná výroba',
            description:
              'Vyrábaný v VUP špecializovanom pilotnom zariadení zabezpečujúcom dostupnosť pre väčší R&D, výrobu inhibítorov a priemyselné aplikácie.',
          },
          {
            feature: 'Vysoká kvalita čistoty',
            description:
              'Výrobné kapacity VUP dodávajú vysokú čistotu vhodnú pre náročné aplikácie vrátane výskumu a syntézy špeciálnych chemikálií.',
          },
        ],
        faq: [
          {
            question: 'Čím sa H-TEMPO líši od štandardného TEMPO?',
            answer:
              'H-TEMPO obsahuje dodatočnú hydroxylovú skupinu poskytujúcu zvýšenú rozpustnosť vo vode, odlišnú reaktivitu a možnosti ďalšej funkcionalizácie v porovnaní so štandardným TEMPO.',
          },
          {
            question: 'Ako sa H-TEMPO používa vo výrobe inhibítorov polymerizácie?',
            answer:
              'H-TEMPO slúži ako kľúčová surovina na výrobu VUP rady VUPIN kvapalných inhibítorov polymerizácie používaných v petrochemických a stabilizačných aplikáciách monomerov.',
          },
          {
            question: 'Aké aplikácie využívajú H-TEMPO ako spin značku?',
            answer:
              'H-TEMPO sa používa v EPR spektroskopii ako spin sonda na štúdium molekulárnej štruktúry, dynamiky a prostredí v biofyzikálnom a chemickom výskume.',
          },
          {
            question: 'Môže sa H-TEMPO použiť ako antioxidant?',
            answer:
              'Áno, H-TEMPO slúži ako vo vode rozpustný antioxidant štandard a ochranné činidlo v biochemických štúdiách skúmajúcich mechanizmy oxidačného stresu.',
          },
          {
            question: 'Aké bezpečnostné opatrenia sú potrebné pri manipulácii s H-TEMPO?',
            answer:
              'H-TEMPO je oxidačné činidlo, ktoré môže spôsobiť podráždenie kože, očí a dýchacích ciest. Manipulujte s vhodnými technickými kontrolami a OOP. Vždy si preštudujte oficiálny SDS.',
          },
          {
            question: 'Akú úroveň čistoty ponúka VUP pre H-TEMPO?',
            answer:
              'VUP ponúka vysokočisté H-TEMPO s ≥98% vhodné pre náročné aplikácie vrátane výskumu a syntézy špeciálnych chemikálií.',
          },
        ],
      },
    }),
    payload.update({
      collection: 'products',
      id: trolox.id,
      locale: 'sk',
      data: {
        name: 'Trolox',
        description:
          'Silný, vo vode rozpustný analóg vitamínu E, široko uznávaný ako referenčný štandard na meranie antioxidačnej kapacity v TEAC testoch a cenný výskumný nástroj pre štúdie oxidačného stresu.',
        applications: [
          {
            application: 'Testy antioxidačnej kapacity',
            description:
              'Referenčná štandardná zlúčenina pre TEAC a podobné testy meranie celkovej antioxidačnej kapacity potravín, nápojov, prírodných extraktov a biologických vzoriek.',
            image: demoImageDoc.id,
          },
          {
            application: 'Výskum oxidačného stresu',
            description:
              'Používa sa v bunkovej kultúre a biochemických štúdiách na ochranu proti lipidovej peroxidácii a výskum mechanizmov oxidačného stresu a antioxidačnej obrany.',
            image: demoImageDoc.id,
          },
          {
            application: 'Ochrana bunkovej kultúry',
            description:
              'Pridáva sa do média bunkovej kultúry ako ochranný antioxidačný doplnok na zníženie pozadia oxidačného stresu počas experimentálnych postupov.',
            image: demoImageDoc.id,
          },
          {
            application: 'Farmaceutický R&D screening',
            description:
              'Používa sa ako screeningový nástroj vo farmaceutickom a kozmetickom R&D na hodnotenie antioxidačného potenciálu nových zlúčenín alebo formulácií.',
            image: demoImageDoc.id,
          },
          {
            application: 'Analytický referenčný štandard',
            description:
              'Používa sa ako štandard v HPLC alebo iných analytických metódach na identifikáciu alebo kvantifikáciu antioxidantov v rôznych vzorkách.',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Referenčný antioxidačný štandard',
            description:
              'Globálne uznávaný štandard pre Trolox Ekvivalentnú Antioxidačnú Kapacitu (TEAC) testy, umožňujúci štandardizované porovnanie sily antioxidantov.',
          },
          {
            feature: 'Vo vode rozpustný analóg vitamínu E',
            description:
              'Ponúka antioxidačné vlastnosti súvisiace s vitamínom E, ale s výrazne zlepšenou rozpustnosťou vo vode, čo ho robí ideálnym pre vodné systémy a biologické testy.',
          },
          {
            feature: 'Silný zachytávač radikálov',
            description:
              'Efektívne neutralizuje rôzne voľné radikály vďaka svojej 6-hydroxychromanólovej jadrovej štruktúre, poskytujúc spoľahlivú antioxidačnú ochranu.',
          },
          {
            feature: 'Vysoká kvalita čistoty',
            description:
              'Vyrábaný na vysoké úrovne čistoty (≥98%) vhodné pre náročné analytické a výskumné aplikácie vyžadujúce konzistentný výkon.',
          },
          {
            feature: 'Výskumná všestrannosť',
            description:
              'Široko používaný v akademickom a priemyselnom výskume na štúdium mechanizmov oxidačného stresu, hodnotenie potenciálnych antioxidantov a ochranu buniek alebo biochemikálií pred oxidačným poškodením.',
          },
          {
            feature: 'Pohodlná manipulácia',
            description:
              'Rozpustnosť vo vode ho robí pohodlným pre mnohé biologické a chemické testy, na rozdiel od tukovo rozpustného vitamínu E vyžadujúceho organické rozpúšťadlá.',
          },
        ],
        faq: [
          {
            question: 'Čo je Trolox a ako sa líši od vitamínu E?',
            answer:
              'Trolox je syntetický vo vode rozpustný analóg vitamínu E. Zdieľa jadrovú chromanólovú krúžkovú štruktúru, ale má karboxylovú skupinu namiesto fytylového chvosta, čo ho robí rozpustným vo vode.',
          },
          {
            question: 'Prečo sa Trolox používa ako antioxidačný štandard?',
            answer:
              'Jeho rozpustnosť vo vode ho robí pohodlným pre biologické a chemické testy ako TEAC, a jeho dobre charakterizovaná antioxidačná aktivita poskytuje spoľahlivý referenčný bod na porovnanie.',
          },
          {
            question: 'Aké sú hlavné aplikácie VUP Troloxu?',
            answer:
              'Primárne sa používa vo vedeckom výskume ako antioxidačný štandard, na štúdium oxidačného stresu v biologických systémoch, ochranu bunkovej kultúry a ako referenčná zlúčenina v analytických metódach.',
          },
          {
            question: 'Akú úroveň čistoty ponúka VUP pre Trolox?',
            answer:
              'VUP ponúka vysokočistý Trolox s ≥98% vhodný pre náročné analytické a výskumné aplikácie vyžadujúce konzistentný a spoľahlivý výkon.',
          },
          {
            question: 'Môže sa Trolox použiť v aplikáciách bunkovej kultúry?',
            answer:
              'Áno, Trolox sa bežne pridáva do média bunkovej kultúry ako ochranný antioxidačný doplnok na zníženie pozadia oxidačného stresu počas experimentálnych postupov.',
          },
          {
            question: 'Ako sa Trolox používa v TEAC testoch?',
            answer:
              'Trolox slúži ako referenčný štandard v TEAC testoch, s antioxidačnou kapacitou testovaných vzoriek vyjadrenou ako Trolox ekvivalenty, umožňujúc štandardizované porovnanie.',
          },
        ],
      },
    }),
    payload.update({
      collection: 'products',
      id: tempo.id,
      locale: 'sk',
      data: {
        name: 'TEMPO (2,2,6,6-Tetrametylpiperidin-1-oxyl)',
        description:
          'Vysoko všestranný a stabilný nitroxylový radikál, známy svojou užitočnosťou ako katalyzátor v selektívnych organických oxidáciách a ako mediátor v kontrolovanej radikálovej polymerizácii (NMP). VUP vyrába vysokočistý TEMPO v pilotnom meradle.',
        applications: [
          {
            application: 'Katalyzátor selektívnej oxidácie',
            description:
              'Široko používaný ako katalyzátor pre efektívnu a selektívnu oxidáciu primárnych alkoholov na aldehydy a sekundárnych alkoholov na ketóny za miernych podmienok vo fine chemical a farmaceutickej syntéze.',
            image: demoImageDoc.id,
          },
          {
            application: 'Kontrolovaná radikálová polymerizácia',
            description:
              'Mediátor pre Nitroxidom Mediovanú Polymerizáciu (NMP) umožňujúci syntézu polymérov s kontrolovanou molekulovou hmotnosťou, úzkou polydisperzitou a komplexnými architektúrami.',
            image: demoImageDoc.id,
          },
          {
            application: 'EPR spektroskopia',
            description:
              'Stabilný zdroj radikálov používaný ako spin značkovacia sonda v Elektrónovej Paramagnetickej Rezonančnej spektroskopii na štúdium molekulárnych prostredí, dynamiky a mechanizmov radikálových reakcií.',
            image: demoImageDoc.id,
          },
          {
            application: 'Farmaceutické medziprodukty',
            description:
              'Kľúčový prekurzor pre syntézu cenných derivátov vrátane potenciálnych Aktívnych Farmaceutických Ingrediencií (API) ako sú zlúčeniny na liečbu Parkinsonovej choroby.',
            image: demoImageDoc.id,
          },
          {
            application: 'Oxidácia celulózy',
            description:
              'Používa sa v TEMPO-mediovanej oxidácii celulózy a buničiny na výrobu modifikovaných celulózových materiálov so zvýšenými vlastnosťami v špeciálnych papierových a biomaterialových aplikáciách.',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Vysoko selektívna oxidácia',
            description:
              'Poskytuje výnimočnú selektivitu v oxidačných reakciách alkoholov za miernych podmienok, vyhýba sa nadmernej oxidácii a udržuje kvalitu produktu v citlivých syntetických procesoch.',
          },
          {
            feature: 'Stabilný zdroj radikálov',
            description:
              'Perzistentný nitroxylový radikál ponúka spoľahlivý výkon ako spin značkovacia sonda a katalyzátor, na rozdiel od prechodných radikálov, ktoré sa rýchlo rozkladajú.',
          },
          {
            feature: 'Kontrolovaná polymerizácia',
            description:
              'Umožňuje presnú kontrolu nad polymernou architektúrou prostredníctvom NMP, umožňujúc syntézu dobre definovaných blokových kopolymérov a materiálov so špecifickými výkonnostnými charakteristikami.',
          },
          {
            feature: 'Vysoký stupeň čistoty',
            description:
              'Dodáva sa s minimálnou čistotou 98% zabezpečujúc konzistentnú reaktivitu a spoľahlivý výkon v náročných katalytických a syntetických aplikáciách.',
          },
          {
            feature: 'Pilotná výroba',
            description:
              'Vyrábaný v VUP pilotnom zariadení s dokumentovanou kapacitou, zabezpečujúc dostupnosť nad laboratórne mierka pre komerčné aplikácie.',
          },
          {
            feature: 'Všestranný medziproduk',
            description:
              'Slúži ako kľúčový stavebný blok pre syntézu funkcionalizovaných derivátov TEMPO a cenných farmaceutických medziprodukto so zvýšenými vlastnosťami.',
          },
        ],
        faq: [
          {
            question: 'Čo je TEMPO a čo ho robí špecialným?',
            answer:
              'TEMPO je stabilný nitroxylový radikál založený na tetrametylpiperídínovej štruktúre. Jeho výnimočná stabilita ho robí cenným ako reagent a katalyzátor, na rozdiel od väčšiny prechodných radikálov, ktoré sa rýchlo rozkladajú.',
          },
          {
            question: 'Prečo je TEMPO uprednostňované pre oxidačné reakcie?',
            answer:
              'TEMPO pôsobí ako katalyzátor s ko-oxidantmi na selektívnu oxidáciu alkoholov za miernych podmienok. Je obzvlášť známe konverziou primárnych alkoholov na aldehydy s vysokou selektivitou a minimálnou nadmernou oxidáciou.',
          },
          {
            question: 'Ako sa TEMPO používa v polymernej chémii?',
            answer:
              'TEMPO je nevyhnutné pre Nitroxidom Mediovanú Polymerizáciu (NMP), kontrolovanú radikálovú polymerizačnú techniku, ktorá umožňuje syntézu polymérov s presnými molekulovými hmotnosťami a komplexnými architektúrami.',
          },
          {
            question: 'Akú úroveň čistoty ponúka VUP pre TEMPO?',
            answer:
              'VUP vyrába vysokočistý TEMPO s minimálnou čistotou 98%, zabezpečujúc konzistentnú reaktivitu a spoľahlivý výkon v citlivých katalytických a syntetických aplikáciách.',
          },
          {
            question: 'Je TEMPO považované za nebezpečné na manipuláciu?',
            answer:
              'Áno, TEMPO je klasifikované ako oxidačné činidlo a dráždivé vyžadujúce opatrné manipulovanie s vhodným OOP. Môže zintenzívniť oheň a spôsobiť podráždenie kože, očí a dýchacích ciest. Vždy si preštudujte SDS.',
          },
          {
            question: 'Môže VUP dodávať TEMPO v komerčnom meradle?',
            answer:
              'VUP prevádzkuje pilotnu výrobu s dokumentovanou kapacitou pre TEMPO. Kontaktujte VUP priamo na diskusiu o dostupnosti a objemoch pre vaše špecifické komerčné požiadavky.',
          },
        ],
      },
    }),
  ])

  // --------------------
  // ADDING JAPANESE TRANSLATIONS FOR PRODUCTS (BATCH 2: H-TEMPO, TROLOX, TEMPO)
  // --------------------

  payload.logger.info('- Adding Japanese translations for second batch of products...')

  await Promise.all([
    payload.update({
      collection: 'products',
      id: hTempo.id,
      locale: 'jp',
      data: {
        name: '4-ヒドロキシ-TEMPO (TEMPOL / H-TEMPO)',
        description:
          '安定ニトロキシルラジカルと反応性水酸基の両方を特徴とするTEMPOの主要機能化誘導体。多用途抗酸化剤、触媒、スピンラベル、特殊化学品合成の重要中間体として機能します。',
        applications: [
          {
            application: '重合禁止剤合成',
            description:
              '石油化学およびモノマー安定化用途で使用されるVUPINシリーズなどの配合液体重合禁止剤製造の主要原料。',
            image: demoImageDoc.id,
          },
          {
            application: '触媒および酸化',
            description:
              '選択酸化反応で触媒または共触媒として使用され、標準TEMPOと比較して異なる溶解性と反応性プロファイルを提供します。',
            image: demoImageDoc.id,
          },
          {
            application: 'EPR分光法',
            description:
              '生物物理学および化学研究用途で分子構造、動力学、環境を研究するスピンラベルプローブとして利用されます。',
            image: demoImageDoc.id,
          },
          {
            application: '抗酸化研究',
            description:
              '酸化ストレス機構を調査する生化学および細胞ベース研究で水溶性抗酸化標準または保護剤として使用されます。',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: '機能化安定ラジカル',
            description:
              'TEMPOニトロキシルラジカルの独特な特性を水酸基と組み合わせ、さらなる化学修飾と向上した溶解性を可能にします。',
          },
          {
            feature: '主要禁止剤中間体',
            description:
              'VUPのVUPINシリーズ液体重合禁止剤の直接前駆体として機能し、重要な工業的関連性を実証しています。',
          },
          {
            feature: '多用途研究ツール',
            description:
              '水溶性抗酸化剤、酸化反応の触媒、EPR分光用途のスピンラベルプローブとして広く使用されています。',
          },
          {
            feature: '構成要素ポテンシャル',
            description:
              '水酸基は他の機能化TEMPO誘導体の合成やニトロキシル部分のより大きな分子への組み込みのための反応部位を提供します。',
          },
          {
            feature: 'パイロット規模生産',
            description:
              'VUP専用パイロットプラント施設で製造され、大規模R&D、禁止剤生産、工業用途での入手可能性を確保しています。',
          },
          {
            feature: '高純度品質',
            description:
              'VUPの生産能力により、研究や特殊化学品合成を含む要求の厳しい用途に適した高純度を提供します。',
          },
        ],
        faq: [
          {
            question: 'H-TEMPOは標準TEMPOとどう違いますか？',
            answer:
              'H-TEMPOは追加の水酸基を特徴とし、標準TEMPOと比較して向上した水溶性、異なる反応性、さらなる機能化の機会を提供します。',
          },
          {
            question: 'H-TEMPOは重合禁止剤生産でどのように使用されますか？',
            answer:
              'H-TEMPOは石油化学およびモノマー安定化用途で使用されるVUPのVUPINシリーズ液体重合禁止剤製造の主要原料として機能します。',
          },
          {
            question: 'H-TEMPOをスピンラベルとして利用する用途は何ですか？',
            answer:
              'H-TEMPOは生物物理学および化学研究で分子構造、動力学、環境を研究するためのEPR分光法でスピンプローブとして使用されます。',
          },
          {
            question: 'H-TEMPOは抗酸化剤として使用できますか？',
            answer:
              'はい、H-TEMPOは酸化ストレス機構を調査する生化学研究で水溶性抗酸化標準および保護剤として機能します。',
          },
          {
            question: 'H-TEMPO取扱時に必要な安全対策は何ですか？',
            answer:
              'H-TEMPOは皮膚、眼、呼吸器刺激を引き起こす可能性のある酸化剤です。適切な技術的制御とPPEで取り扱ってください。常に公式SDSを参照してください。',
          },
          {
            question: 'VUPはH-TEMPOをどの純度レベルで提供していますか？',
            answer:
              'VUPは研究や特殊化学品合成を含む要求の厳しい用途に適した≥98%の高純度H-TEMPOを提供しています。',
          },
        ],
      },
    }),
    payload.update({
      collection: 'products',
      id: trolox.id,
      locale: 'jp',
      data: {
        name: 'Trolox',
        description:
          '強力で水溶性のビタミンEアナログ。TEACアッセイでの抗酸化能測定のベンチマーク標準として広く認識され、酸化ストレス研究の貴重な研究ツールです。',
        applications: [
          {
            application: '抗酸化能アッセイ',
            description:
              '食品、飲料、天然抽出物、生物学的サンプルの総抗酸化能を測定するTEACおよび類似アッセイの基準標準化合物。',
            image: demoImageDoc.id,
          },
          {
            application: '酸化ストレス研究',
            description:
              '細胞培養および生化学研究で脂質過酸化に対する保護と酸化ストレスおよび抗酸化防御の機構調査に使用されます。',
            image: demoImageDoc.id,
          },
          {
            application: '細胞培養保護',
            description:
              '実験手順中のバックグラウンド酸化ストレスを軽減するため、細胞培養培地に保護抗酸化サプリメントとして添加されます。',
            image: demoImageDoc.id,
          },
          {
            application: '医薬品R&Dスクリーニング',
            description:
              '医薬品および化粧品R&Dで新化合物や製剤の抗酸化ポテンシャルを評価するスクリーニングツールとして使用されます。',
            image: demoImageDoc.id,
          },
          {
            application: '分析参照標準',
            description:
              '様々なサンプル中の抗酸化物質を同定または定量するためのHPLCや他の分析法での標準として使用されます。',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'ベンチマーク抗酸化標準',
            description:
              'Trolox当量抗酸化能（TEAC）アッセイのグローバル認識標準で、抗酸化強度の標準化された比較を可能にします。',
          },
          {
            feature: '水溶性ビタミンEアナログ',
            description:
              'ビタミンEに関連する抗酸化特性を提供しますが、水溶性が大幅に向上しており、水系システムと生物学的アッセイに理想的です。',
          },
          {
            feature: '強力なラジカル捕捉剤',
            description:
              '6-ヒドロキシクロマノール核構造により様々なフリーラジカルを効果的に中和し、信頼性の高い抗酸化保護を提供します。',
          },
          {
            feature: '高純度品質',
            description:
              '一貫した性能を要求する要求の厳しい分析および研究用途に適した高純度レベル（≥98%）で製造されます。',
          },
          {
            feature: '研究の多様性',
            description:
              '酸化ストレス機構の研究、潜在的抗酸化物質の評価、酸化損傷からの細胞や生化学物質の保護のため学術・工業研究で広く使用されます。',
          },
          {
            feature: '便利な取扱い',
            description:
              '水溶性により多くの生物学的・化学的アッセイで便利で、有機溶媒を必要とする脂溶性ビタミンEとは異なります。',
          },
        ],
        faq: [
          {
            question: 'Troloxとは何で、ビタミンEとどう違いますか？',
            answer:
              'TroloxはビタミンEの合成水溶性アナログです。核クロマノール環構造を共有しますが、フィチル尾の代わりにカルボン酸基を持ち、水溶性にしています。',
          },
          {
            question: 'なぜTroloxが抗酸化標準として使用されるのですか？',
            answer:
              'その水溶性がTEACなどの生物学的・化学的アッセイで便利にし、よく特性化された抗酸化活性が比較のための信頼できるベンチマークを提供します。',
          },
          {
            question: 'VUP Troloxの主な用途は何ですか？',
            answer:
              '主に抗酸化標準として科学研究で、生物学的システムでの酸化ストレス研究、細胞培養保護、分析法での基準化合物として使用されます。',
          },
          {
            question: 'VUPはTroloxをどの純度レベルで提供していますか？',
            answer:
              'VUPは一貫した信頼性の高い性能を要求する要求の厳しい分析・研究用途に適した≥98%の高純度Troloxを提供しています。',
          },
          {
            question: 'Troloxは細胞培養用途で使用できますか？',
            answer:
              'はい、Troloxは実験手順中のバックグラウンド酸化ストレスを軽減するため、細胞培養培地に保護抗酸化サプリメントとして一般的に添加されます。',
          },
          {
            question: 'TroloxはTEACアッセイでどのように使用されますか？',
            answer:
              'TroloxはTEACアッセイの基準標準として機能し、試験サンプルの抗酸化能がTrolox当量として表現され、標準化された比較を可能にします。',
          },
        ],
      },
    }),
    payload.update({
      collection: 'products',
      id: tempo.id,
      locale: 'jp',
      data: {
        name: 'TEMPO (2,2,6,6-テトラメチルピペリジン-1-オキシル)',
        description:
          '選択的有機酸化での触媒および制御ラジカル重合（NMP）でのメディエーターとしての有用性で有名な、非常に多用途で安定なニトロキシルラジカル。VUPはパイロット規模で高純度TEMPOを製造しています。',
        applications: [
          {
            application: '選択酸化触媒',
            description:
              'ファインケミカルおよび医薬品合成において、穏やかな条件下での第一級アルコールのアルデヒドへの効率的で選択的な酸化および第二級アルコールのケトンへの酸化触媒として広く使用されます。',
            image: demoImageDoc.id,
          },
          {
            application: '制御ラジカル重合',
            description:
              '制御された分子量、狭い多分散性、複雑な構造を持つポリマーの合成を可能にするニトロキサイド媒介重合（NMP）のメディエーター。',
            image: demoImageDoc.id,
          },
          {
            application: 'EPR分光法',
            description:
              '分子環境、動力学、ラジカル反応機構の研究のため電子常磁性共鳴分光法でスピンラベルプローブとして使用される安定ラジカル源。',
            image: demoImageDoc.id,
          },
          {
            application: '医薬中間体',
            description:
              'パーキンソン病治療用化合物などの潜在的活性医薬品成分（API）を含む貴重な誘導体合成の主要前駆体。',
            image: demoImageDoc.id,
          },
          {
            application: 'セルロース酸化',
            description:
              '特殊紙およびバイオマテリアル用途で向上した特性を持つ修飾セルロース材料製造のためのセルロースおよびパルプのTEMPO媒介酸化で使用されます。',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: '高選択酸化',
            description:
              '穏やかな条件下でのアルコール酸化反応で卓越した選択性を提供し、過酸化を避け敏感な合成プロセスで製品品質を維持します。',
          },
          {
            feature: '安定ラジカル源',
            description:
              '持続ニトロキシルラジカルは、迅速に分解する一過性ラジカルとは異なり、スピンラベルプローブおよび触媒として信頼性の高い性能を提供します。',
          },
          {
            feature: '制御重合',
            description:
              'NMPによるポリマー構造の精密制御を可能にし、明確に定義されたブロック共重合体と特定の性能特性を持つ材料の合成を可能にします。',
          },
          {
            feature: '高純度グレード',
            description:
              '要求の厳しい触媒および合成用途での一貫した反応性と信頼性の高い性能を確保する最低98%純度で供給されます。',
          },
          {
            feature: 'パイロット規模生産',
            description:
              '文書化された能力を持つVUPパイロットプラント施設で製造され、商業用途のための実験室規模を超えた入手可能性を確保しています。',
          },
          {
            feature: '多用途中間体',
            description:
              '機能化TEMPO誘導体および向上した特性を持つ貴重な医薬中間体の合成のための主要構成要素として機能します。',
          },
        ],
        faq: [
          {
            question: 'TEMPOとは何で、何が特別なのですか？',
            answer:
              'TEMPOはテトラメチルピペリジン構造に基づく安定ニトロキシルラジカルです。その卓越した安定性により、迅速に分解するほとんどの一過性ラジカルとは異なり、試薬や触媒として価値があります。',
          },
          {
            question: 'なぜTEMPOが酸化反応で好まれるのですか？',
            answer:
              'TEMPOは共酸化剤とともに触媒として作用し、穏やかな条件下でアルコールを選択的に酸化します。特に第一級アルコールの高選択性でのアルデヒドへの変換と最小限の過酸化で知られています。',
          },
          {
            question: 'TEMPOはポリマー化学でどのように使用されますか？',
            answer:
              'TEMPOは精密な分子量と複雑な構造を持つポリマーの合成を可能にする制御ラジカル重合技術であるニトロキサイド媒介重合（NMP）に不可欠です。',
          },
          {
            question: 'VUPはTEMPOをどの純度レベルで提供していますか？',
            answer:
              'VUPは敏感な触媒および合成用途での一貫した反応性と信頼性の高い性能を確保する最低98%純度の高純度TEMPOを製造しています。',
          },
          {
            question: 'TEMPOは取扱いが危険と考えられますか？',
            answer:
              'はい、TEMPOは適切なPPEでの慎重な取扱いを要求する酸化剤および刺激剤に分類されます。火災を激化させ、皮膚、眼、呼吸器刺激を引き起こす可能性があります。常にSDSを参照してください。',
          },
          {
            question: 'VUPは商業規模でTEMPOを供給できますか？',
            answer:
              'VUPはTEMPOのための文書化された能力を持つパイロットプラント生産を運営しています。特定の商業要件のための入手可能性と量についてはVUPに直接お問い合わせください。',
          },
        ],
      },
    }),
  ])

  // --------------------
  // ADDING SLOVAK TRANSLATIONS FOR PRODUCTS (BATCH 3: TEMP, DAPEG, BENZOYLOXY-TMP)
  // --------------------

  payload.logger.info('- Adding Slovak translations for third batch of products...')

  await Promise.all([
    payload.update({
      collection: 'products',
      id: temp.id,
      locale: 'sk',
      data: {
        name: '2,2,6,6-Tetrametylpiperidin (TEMP)',
        description:
          'Základný medziproduk na výrobu širokej škály Stericky Bránených Amínových Svetelných Stabilizátorov (HALS) a všestranného stabilného radikálu TEMPO. VUP vyrába vysokočistý TEMP (min. 99%) vo svojom pilotnom zariadení.',
        applications: [
          {
            application: 'Výroba HALS',
            description:
              'Základný medziproduk na výrobu rôznych Stericky Bránených Amínových Svetelných Stabilizátorov široko používaných v plastikárskom a náterovom priemysle na UV ochranu.',
            image: demoImageDoc.id,
          },
          {
            application: 'Syntéza TEMPO',
            description:
              'Priamy prekurzor na výrobu TEMPO a jeho derivátov, ktoré sa používajú ako katalyzátory, oxidanty, inhibítory polymerizácie a výskumné nástroje.',
            image: demoImageDoc.id,
          },
          {
            application: 'Organická syntéza',
            description:
              'Používa sa ako stericky bránená sekundárna amínová báza alebo stavebný blok v špecifických chemických reakciách vyžadujúcich túto jedinečnú štruktúrnu kostru.',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Základný medziproduk HALS',
            description:
              'Jadrovým východiskovým materiálom na syntézu mnohých vysokovýkonných HALS používaných na ochranu polymérov pred UV degradáciou.',
          },
          {
            feature: 'Vysokočistý produkt',
            description:
              'VUP dodáva TEMP s minimálnou čistotou 99%, zabezpečujúc vysokú kvalitu pre náročné následné syntézy aplikácie.',
          },
          {
            feature: 'Pilotná výroba',
            description:
              'Vyrábaný v VUP pilotnom zariadení s kapacitou 25 t/rok, indikujúc schopnosť dodávky väčších objemov nad rámec laboratórneho meradla.',
          },
          {
            feature: 'Priamy prekurzor TEMPO',
            description:
              'Kľúčová surovina používaná v syntéze TEMPO a jeho derivátov pre rôzne katalytické a výskumné aplikácie.',
          },
          {
            feature: 'Všestranný stavebný blok',
            description:
              'Používa sa ako medziproduk v rôznych aplikáciách organickej syntézy nad rámec výroby HALS a TEMPO.',
          },
        ],
        faq: [
          {
            question: 'Na čo sa TEMP primárne používa?',
            answer:
              'TEMP je základný chemický stavebný blok používaný na syntézu Stericky Bránených Amínových Svetelných Stabilizátorov (HALS) a stabilného radikálu TEMPO.',
          },
          {
            question: 'Je TEMP sám o sebe svetelný stabilizátor?',
            answer:
              'Nie, TEMP je medziproduk alebo prekurzor. Musí byť ďalej spracovaný na vytvorenie skutočných HALS molekúl, ktoré poskytujú svetelnú stabilizáciu polymérom.',
          },
          {
            question: 'Akú čistotu ponúka VUP pre TEMP?',
            answer:
              'VUP vyrába TEMP s minimálnou čistotou 99%. Prosím, vyžiadajte si Technický list s úplnými špecifikáciami.',
          },
          {
            question: 'Je TEMP nebezpečný na manipuláciu?',
            answer:
              'Áno, TEMP je klasifikovaný ako korozívny, horľavý a toxický. Prísne bezpečnostné opatrenia a vhodné OOP sú nevyhnutné. Vždy si preštudujte SDS pred použitím.',
          },
          {
            question: 'Vyrába VUP TEMP v komerčnom meradle?',
            answer:
              'VUP má dokumentovanú kapacitu pilotného zariadenia na výrobu TEMP. Kontaktujte VUP na diskusiu o dostupnosti pre vaše požadované objemy.',
          },
          {
            question: 'Čo robí VUP TEMP vhodným pre syntézu HALS?',
            answer:
              'VUP vysokočistý TEMP (99% min.) poskytuje kvalitu a konzistentnosť potrebnú na výrobu vysokovýkonných HALS so spoľahlivými UV ochrannými vlastnosťami.',
          },
        ],
      },
    }),
    payload.update({
      collection: 'products',
      id: dapeg.id,
      locale: 'sk',
      data: {
        name: 'Poly(etylénglykolyl)bis(3-aminopropyl) zakončený (DAPEG Séria)',
        description:
          'VUP je jedinečný globálny výrobca vysokočistého DAPEG obsahujúceho PEG reťazce s reaktívnymi primárnymi amínovými skupinami na oboch koncoch. Nevyhnutný pre pokročilé biomedicínske nátery, povrchové úpravy, PEGyláciu a syntézu špeciálnych polymérov.',
        applications: [
          {
            application: 'Nátery biomedicínskych zariadení',
            description:
              'Vytváranie klzkých, hydrofilných a biokompatibilných náterov pre katétre, vodičové drôty, stenty a iné medicínske zariadenia na zlepšenie pohodlia pacienta a výkonu zariadenia.',
            image: demoImageDoc.id,
          },
          {
            application: 'Povrchová modifikácia',
            description:
              'Funkcionalizácia povrchov implantátov, nanočastíc, biosensorov a mikrofluidických zariadení na zlepšenie biokompatibility a zníženie nespecifického viazania.',
            image: demoImageDoc.id,
          },
          {
            application: 'PEGylácia a biokonjugácia',
            description:
              'Pripojenie PEG reťazcov k proteínom, peptidom, protilátkam alebo liekovým molekulám na zlepšenie rozpustnosti, stability, času cirkulácie a zníženie imunogenicity.',
            image: demoImageDoc.id,
          },
          {
            application: 'Pokročilá syntéza polymérov',
            description:
              'Stavebný blok na syntézu hydrogélov pre tkanivové inžinierstvo a dodávku liekov, blokové kopolyméry a iné funkčné polymérne architektúry.',
            image: demoImageDoc.id,
          },
          {
            application: 'Syntéza PEGDAA',
            description:
              'Priamy prekurzor na výrobu Poly(etylénglykolyl) diakrylamidu (PEGDAA), používaného pri tvorbe hydrogélov a špecializovaných náterových aplikáciách.',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Jedinečná globálna dodávka',
            description:
              'Získavaný priamo od VUP, jediného globálného výrobcu využívajúceho proprietárnu technológiu, zabezpečujúc odlišný a bezpečný dodávateľský reťazec.',
          },
          {
            feature: 'Vysoké štandardy čistoty',
            description:
              'Vyrábaný podľa vysokých štandardov čistoty (97% min), kritických pre náročné biomedicínske a farmaceutické aplikácie vyžadujúce konzistentný výkon.',
          },
          {
            feature: 'Reaktívne amínové terminály',
            description:
              'Poskytuje primárne amínové skupiny na oboch koncoch, umožňujúc efektívne kovalentné pripojenie k povrchom alebo reakciu s inými funkčnými skupinami pre syntézu polymérov.',
          },
          {
            feature: 'Vlastnosti PEG reťazca',
            description:
              'Prepožičiava hydrofilnosť, rozpustnosť vo vode, biokompatibilitu a odolnosť proti nespecifickej adsorpcii proteínov inherentnej polyetylénglykolovým reťazcom.',
          },
          {
            feature: 'Všestranné molekulové hmotnosti',
            description:
              'Dostupný v rozsahu priemerných molekulových hmotností, umožňujúc prispôsobenie vlastností ako dĺžka reťazca, flexibilita a hydrodynamický objem.',
          },
          {
            feature: 'Zameranie na biomedicínske aplikácie',
            description:
              'Overená užitočnosť ako kľúčová surovina na vytváranie klzkých, hydrofilných náterov nevyhnutných pre medicínske zariadenia ako katétre a vodičové drôty.',
          },
        ],
        faq: [
          {
            question: 'Čo je DAPEG a ako sa líši od bežného PEG?',
            answer:
              'DAPEG je polyetylénglykolyl s reaktívnymi primárnymi amínovými skupinami na oboch koncoch namiesto hydroxylových skupín, čo ho robí ideálnym pre kovalentné pripojenie a biokonjugačné aplikácie.',
          },
          {
            question: 'Prečo je VUP jedinečný zdroj pre DAPEG?',
            answer:
              'VUP vlastní proprietárnu výrobnú technológiu, ktorá ho pozicionuje ako kľúčového globálneho výrobcu tohto špecializovaného vysokočistého materiálu, osobitne oceňovaného v biomedicínskych aplikáciách.',
          },
          {
            question: 'Aké sú hlavné výhody terminálnych amínových skupín?',
            answer:
              'Primárne amíny sú všestranné reaktívne úchytky pre kovalentné pripojenie k povrchom s karboxylovou alebo NHS-esterovými skupinami a pre konjugáciu v biokonjugácii alebo syntéze polymérov.',
          },
          {
            question: 'Aké stupne molekulovej hmotnosti ponúka VUP pre DAPEG?',
            answer:
              'VUP ponúka DAPEG v rôznych stupňoch priemernej molekulovej hmotnosti v rozsahu približne 700 až 3400 g/mol. Kontaktujte VUP na diskusiu špecifických stupňov a dostupnosti.',
          },
          {
            question: 'Je DAPEG vhodný pre aplikácie medicínskych zariadení?',
            answer:
              'Áno, DAPEG sa široko používa ako surovina pre biomedicínske nátery. Prediskutujte vaše špecifické požiadavky aplikácie s VUP na zabezpečenie vhodného výberu stupňa.',
          },
          {
            question: 'Ako sa DAPEG používa v aplikáciách povrchových úprav?',
            answer:
              'DAPEG funkcionalizuje povrchy prostredníctvom svojich reaktívnych amínových skupín, vytvárając biokompatibilné vrstvy, ktoré znižujú adsorpciu proteínov a umožňujú ďalšie chemické modifikácie.',
          },
        ],
      },
    }),
    payload.update({
      collection: 'products',
      id: benzoyloxyTmp.id,
      locale: 'sk',
      data: {
        name: '4-Benzoyloxyza-2,2,6,6-tetrametylpiperidin',
        description:
          'Funkcionalizovaný medziproduk stericky bránených amínov založený na štruktúre TEMP, slúžiaci ako cenný prekurzor na výrobu špecifických Stericky Bránených Amínových Svetelných Stabilizátorov (HALS) alebo iných funkčných molekúl tam, kde sa vyžaduje benzoátom chránená hydroxylová skupina na piperidínovom kruhu.',
        applications: [
          {
            application: 'Syntéza HALS',
            description:
              'Používa sa ako prekurzor vo viacstupňových syntézach na výrobu špecifických typov Stericky Bránených Amínových Svetelných Stabilizátorov vyžadujúcich benzoátom chránenú hydroxylovú funkcionalitu.',
            image: demoImageDoc.id,
          },
          {
            application: 'Organická syntéza',
            description:
              'Používa sa ako stavebný blok na vytváranie iných funkcionalizovaných derivátov piperidínu pre výskumné alebo špeciálne chemické aplikácie.',
            image: demoImageDoc.id,
          },
          {
            application: 'Výskumná chemikália',
            description:
              'Používa sa v akademických alebo priemyselných laboratóriách študujúcich chémiu stericky bránených amínov alebo vyvíjajúcich nové syntetické metodológie.',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Funkcionalizovaný medziproduk',
            description:
              'Poskytuje stabilnú 2,2,6,6-tetrametylpiperidínovú kostru funkcionalizovanú benzoyloxyskupinou v 4-pozícii pre selektívnu reaktivitu.',
          },
          {
            feature: 'Chránená hydroxylová skupina',
            description:
              'Obsahuje benzoátom chránenú hydroxylovú funkcionalitu užitočnú vo viacstupňových syntetických sekvenciách, kde sú potrebné selektívne reakcie.',
          },
          {
            feature: 'Vysokočistý produkt',
            description:
              'Dodávaný s minimálnou čistotou 97% zabezpečujúc konzistentnú reaktivitu a výkon v náročných syntetických aplikáciách.',
          },
          {
            feature: 'Potenciál prekurzora HALS',
            description:
              'Môže slúžiť ako kľúčový medziproduk v syntetickej ceste pre špecifické HALS štruktúry vyžadujúce túto funkcionalizovanú kostru.',
          },
          {
            feature: 'Všestranný stavebný blok',
            description:
              'Užitočný východiskový materiál na vytváranie iných špecializovaných molekúl vyžadujúcich modifikáciu v 4-pozícii po potenciálnej deprotekcii.',
          },
        ],
        faq: [
          {
            question: 'Na čo sa používa 4-Benzoyloxyza-TMP?',
            answer:
              'Primárne sa používa ako chemický medziproduk, osobitne ako prekurzor v syntéze špecifických HALS alebo iných funkcionalizovaných molekúl odvodených od štruktúry TEMP.',
          },
          {
            question: 'Je tento produkt sám o sebe HALS?',
            answer:
              'Nie, všeobecne sa považuje za medziproduk používaný na výrobu určitých HALS, nie sa typicky používa priamo ako svetelný stabilizátor v polyméroch.',
          },
          {
            question: 'Aká je výhoda používania tohto medziproduktu?',
            answer:
              'Poskytuje kostru TEMP s chránenou hydroxylovou skupinou ako benzoátový ester, užitočné vo viacstupňových syntetických sekvenciách, kde je potrebná selektívna reaktivita.',
          },
          {
            question: 'Akú úroveň čistoty ponúka VUP pre túto zlúčeninu?',
            answer:
              'VUP dodáva 4-Benzoyloxyza-TMP s minimálnou čistotou 97%, zabezpečujúc konzistentnú reaktivitu a výkon v náročných syntetických aplikáciách.',
          },
          {
            question: 'Môže sa táto zlúčenina použiť vo výskumných aplikáciách?',
            answer:
              'Áno, používa sa v akademických a priemyselných laboratóriách študujúcich chémiu stericky bránených amínov alebo vyvíjajúcich nové syntetické metodológie zahŕňajúce funkcionalizované piperidíny.',
          },
        ],
      },
    }),
  ])

  // --------------------
  // ADDING JAPANESE TRANSLATIONS FOR PRODUCTS (BATCH 3: TEMP, DAPEG, BENZOYLOXY-TMP)
  // --------------------

  payload.logger.info('- Adding Japanese translations for third batch of products...')

  await Promise.all([
    payload.update({
      collection: 'products',
      id: temp.id,
      locale: 'jp',
      data: {
        name: '2,2,6,6-テトラメチルピペリジン（TEMP）',
        description:
          '幅広い立体障害アミン光安定剤（HALS）と多用途安定ラジカルTEMPOの製造のための基礎中間体。VUPはパイロットプラント施設で高純度TEMP（最低99%）を製造しています。',
        applications: [
          {
            application: 'HALS製造',
            description:
              'プラスチックおよびコーティング業界でUV保護のために広く使用される様々な立体障害アミン光安定剤の製造のための必須中間体。',
            image: demoImageDoc.id,
          },
          {
            application: 'TEMPO合成',
            description:
              '触媒、酸化剤、重合禁止剤、研究ツールとして使用されるTEMPOとその誘導体の製造のための直接前駆体。',
            image: demoImageDoc.id,
          },
          {
            application: '有機合成',
            description:
              'この独特な構造フレームワークを必要とする特定の化学反応において、立体障害二級アミン塩基または構成要素として使用。',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: '必須HALS中間体',
            description:
              'ポリマーをUV劣化から保護するために使用される多くの高性能HALSの合成のためのコア出発物質。',
          },
          {
            feature: '高純度製品',
            description:
              'VUPは最低純度99%のTEMPを供給し、要求の厳しい下流合成用途での高品質を確保。',
          },
          {
            feature: 'パイロットスケール生産',
            description:
              '25t/年の容量を持つVUPパイロットプラント施設で製造され、ラボスケールを超えたより大容量供給の能力を示している。',
          },
          {
            feature: '直接TEMPO前駆体',
            description:
              '様々な触媒および研究用途のためのTEMPOとその誘導体の合成で使用される主要原料。',
          },
          {
            feature: '多用途構成要素',
            description: 'HALSとTEMPO生産を超えた様々な有機合成用途での中間体として使用。',
          },
        ],
        faq: [
          {
            question: 'TEMPは主に何に使用されますか？',
            answer:
              'TEMPは立体障害アミン光安定剤（HALS）と安定ラジカルTEMPOの合成に使用される必須化学構成要素です。',
          },
          {
            question: 'TEMP自体が光安定剤ですか？',
            answer:
              'いいえ、TEMPは中間体または前駆体です。ポリマーに光安定化を提供する実際のHALS分子を作るためにさらに反応させる必要があります。',
          },
          {
            question: 'VUPはTEMPをどの純度で提供していますか？',
            answer:
              'VUPは最低純度99%のTEMPを製造しています。完全な仕様については技術データシートをお求めください。',
          },
          {
            question: 'TEMPは取扱いが危険ですか？',
            answer:
              'はい、TEMPは腐食性、可燃性、有毒として分類されています。厳格な安全対策と適切なPPEが不可欠です。使用前には必ずSDSを参照してください。',
          },
          {
            question: 'VUPは商業規模でTEMPを製造していますか？',
            answer:
              'VUPはTEMP生産のための文書化されたパイロットプラント容量（25t/年）を持っています。必要な容量の入手可能性についてはVUPにお問い合わせください。',
          },
          {
            question: 'VUP TEMPをHALS合成に適したものにするのは何ですか？',
            answer:
              'VUP高純度TEMP（99%最低）は、信頼性の高いUV保護特性を持つ高性能HALSの製造に必要な品質と一貫性を提供します。',
          },
        ],
      },
    }),
    payload.update({
      collection: 'products',
      id: dapeg.id,
      locale: 'jp',
      data: {
        name: 'ポリ（エチレングリコール）ビス（3-アミノプロピル）末端（DAPEGシリーズ）',
        description:
          'VUPは両端に反応性一級アミン基を持つPEG鎖を特徴とする高純度DAPEGの独特なグローバル生産者です。先進生物医学コーティング、表面改質、PEG化、特殊ポリマー合成に不可欠。',
        applications: [
          {
            application: '生物医学デバイスコーティング',
            description:
              'カテーテル、ガイドワイヤー、ステント、その他の医療デバイスのための潤滑性、親水性、生体適合性コーティングの作成により、患者の快適性とデバイス性能を向上。',
            image: demoImageDoc.id,
          },
          {
            application: '表面改質',
            description:
              'インプラント、ナノ粒子、バイオセンサー、マイクロ流体デバイスの表面の機能化により、生体適合性を向上させ、非特異的結合を減少。',
            image: demoImageDoc.id,
          },
          {
            application: 'PEG化とバイオコンジュゲーション',
            description:
              'タンパク質、ペプチド、抗体、または薬物分子へのPEG鎖の結合により、溶解性、安定性、循環時間を改善し、免疫原性を減少。',
            image: demoImageDoc.id,
          },
          {
            application: '高度ポリマー合成',
            description:
              '組織工学と薬物送達のためのハイドロゲル、ブロック共重合体、その他の機能的ポリマー構造の合成のための構成要素。',
            image: demoImageDoc.id,
          },
          {
            application: 'PEGDAA合成',
            description:
              'ハイドロゲル形成と特殊コーティング用途で使用されるポリ（エチレングリコール）ジアクリルアミド（PEGDAA）の製造のための直接前駆体。',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: '独特なグローバル供給',
            description:
              '独自技術を利用する唯一のグローバル生産者であるVUPから直接調達され、特異で安全なサプライチェーンを確保。',
          },
          {
            feature: '高純度基準',
            description:
              '高純度基準（97%最低）で製造され、一貫した性能を要求する厳しい生物医学および製薬用途に重要。',
          },
          {
            feature: '反応性アミン末端',
            description:
              '両端に一級アミン基を提供し、表面への効率的な共有結合またはポリマー合成のための他の官能基との反応を可能に。',
          },
          {
            feature: 'PEG鎖特性',
            description:
              'ポリエチレングリコール鎖に固有の親水性、水溶性、生体適合性、非特異的タンパク質吸着に対する耐性を付与。',
          },
          {
            feature: '多用途分子量',
            description:
              '平均分子量の範囲で利用可能で、鎖長、柔軟性、流体力学的体積などの特性の調整が可能。',
          },
          {
            feature: '生物医学用途重視',
            description:
              'カテーテルやガイドワイヤーなどの医療デバイスに不可欠な潤滑性、親水性コーティングを作成するための主要原料としての実証された有用性。',
          },
        ],
        faq: [
          {
            question: 'DAPEGとは何で、通常のPEGとはどう違いますか？',
            answer:
              'DAPEGはヒドロキシル基の代わりに両端に反応性一級アミン基を持つポリエチレングリコールで、共有結合とバイオコンジュゲーション用途に理想的です。',
          },
          {
            question: 'なぜVUPがDAPEGの独特な供給源なのですか？',
            answer:
              'VUPは独自の生産技術を所有し、特に生物医学用途で価値のあるこの特殊高純度材料の主要グローバル生産者として位置づけられています。',
          },
          {
            question: '末端アミン基の主な利点は何ですか？',
            answer:
              '一級アミンはカルボキシルまたはNHS-エステル基を持つ表面への共有結合およびバイオコンジュゲーションまたはポリマー合成での共役のための多用途反応ハンドルです。',
          },
          {
            question: 'VUPはDAPEGのどの分子量グレードを提供していますか？',
            answer:
              'VUPは約700から3400g/molの範囲の様々な平均分子量グレードでDAPEGを提供しています。特定のグレードと入手可能性についてはVUPにお問い合わせください。',
          },
          {
            question: 'DAPEGは医療デバイス用途に適していますか？',
            answer:
              'はい、DAPEGは生物医学コーティングの原料として広く使用されています。適切なグレード選択を確保するために特定の用途要件についてVUPと相談してください。',
          },
          {
            question: 'DAPEGは表面改質用途でどのように使用されますか？',
            answer:
              'DAPEGは反応性アミン基を通じて表面を機能化し、タンパク質吸着を減少させ、さらなる化学修飾を可能にする生体適合性層を作成します。',
          },
        ],
      },
    }),
    payload.update({
      collection: 'products',
      id: benzoyloxyTmp.id,
      locale: 'jp',
      data: {
        name: '4-ベンゾイルオキシ-2,2,6,6-テトラメチルピペリジン',
        description:
          'TEMP構造に基づく機能化立体障害アミン中間体で、ピペリジン環にベンゾエート保護ヒドロキシル基が必要な特定の立体障害アミン光安定剤（HALS）またはその他の機能性分子の製造のための貴重な前駆体として機能。',
        applications: [
          {
            application: 'HALS合成',
            description:
              'ベンゾエート保護ヒドロキシル機能を必要とする特定のタイプの立体障害アミン光安定剤の製造のための多段階合成の前駆体として使用。',
            image: demoImageDoc.id,
          },
          {
            application: '有機合成',
            description:
              '研究または特殊化学用途のための他の機能化ピペリジン誘導体を作成するための構成要素として使用。',
            image: demoImageDoc.id,
          },
          {
            application: '研究化学品',
            description:
              '立体障害アミン化学を研究したり、新しい合成方法論を開発したりする学術または産業研究室で使用。',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: '機能化中間体',
            description:
              '選択的反応性のために4位にベンゾイルオキシ基で機能化された安定な2,2,6,6-テトラメチルピペリジンコアを提供。',
          },
          {
            feature: '保護ヒドロキシル基',
            description:
              '選択的反応が必要な多段階合成配列で有用なベンゾエート保護ヒドロキシル機能を含有。',
          },
          {
            feature: '高純度製品',
            description:
              '要求の厳しい合成用途での一貫した反応性と性能を確保する最低97%純度で供給。',
          },
          {
            feature: 'HALS前駆体ポテンシャル',
            description:
              'この機能化スキャフォールドを必要とする特定のHALS構造の合成経路における主要中間体として機能可能。',
          },
          {
            feature: '多用途構成要素',
            description:
              '潜在的脱保護後の4位での修飾を必要とする他の特殊分子を作成するための有用な出発物質。',
          },
        ],
        faq: [
          {
            question: '4-ベンゾイルオキシ-TMPは何に使用されますか？',
            answer:
              '主に化学中間体として使用され、特にTEMP構造から誘導される特定のHALSまたは他の機能化分子の合成の前駆体として使用されます。',
          },
          {
            question: 'この製品はHALS自体ですか？',
            answer:
              'いいえ、一般的に特定のHALSを作るために使用される中間体と考えられ、ポリマーの光安定剤として直接使用されることは通常ありません。',
          },
          {
            question: 'この中間体を使用する利点は何ですか？',
            answer:
              'ベンゾエートエステルとして保護されたヒドロキシル基を持つTEMPコア構造を提供し、選択的反応性が必要な多段階合成配列で有用です。',
          },
          {
            question: 'VUPはこの化合物をどの純度レベルで提供していますか？',
            answer:
              'VUPは要求の厳しい合成用途での一貫した反応性と性能を確保する最低97%純度で4-ベンゾイルオキシ-TMPを供給しています。',
          },
          {
            question: 'この化合物は研究用途で使用できますか？',
            answer:
              'はい、立体障害アミン化学を研究したり、機能化ピペリジンを含む新しい合成方法論を開発したりする学術および産業研究室で使用されます。',
          },
        ],
      },
    }),
  ])

  // --------------------
  // ADDING SLOVAK TRANSLATIONS FOR PRODUCTS (BATCH 4: ACETAMIDO-TEMPO, TEMPONE, COLAMIN)
  // --------------------

  payload.logger.info('- Adding Slovak translations for fourth batch of products...')

  await Promise.all([
    payload.update({
      collection: 'products',
      id: acetamidoTempo.id,
      locale: 'sk',
      data: {
        name: '4-Acetamido-TEMPO',
        description:
          'Funkcionalizovaný derivát stabilného nitroxylového radikálu TEMPO obsahujúci acetamidovú skupinu. Primárne používaný ako spin značkovacia sonda pre Elektron Paramagnetickú Rezonančnú (EPR) spektroskopiu v biochemickom a materiálovom vedeckom výskume.',
        applications: [
          {
            application: 'EPR spektroskopia',
            description:
              'Primárna aplikácia ako spin značkovacia sonda na štúdium štruktúry proteínov, konformačných zmien, fluidity lipidových membrán a molekulárnych väzobných interakcií.',
            image: demoImageDoc.id,
          },
          {
            application: 'Biochemický výskum',
            description:
              'Používa sa v biofyzikálnych štúdiách na výskum molekulárnej dynamiky, procesov zachytávania radikálov a lokálnych prostredí, kde je potrebné EPR monitorovanie.',
            image: demoImageDoc.id,
          },
          {
            application: 'Štúdie polymérov',
            description:
              'Skúma mobilitu polymérnych reťazcov, segmentálnu dynamiku, morfológiu a správanie skleného prechodu prostredníctvom teplotne závislej EPR analýzy.',
            image: demoImageDoc.id,
          },
          {
            application: 'Výskum materiálových vied',
            description:
              'Aplikuje sa v štúdiu vzťahov štruktúra-vlastnosť v syntetických materiáloch a monitorovaní zmien v molekulárnych prostrediach počas spracovania.',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Funkcionalizovaná spin značka',
            description:
              'Poskytuje stabilný TEMPO nitroxylový radikálny center s acetamidovou funkcionalitou pre špecifické polárne a vodíkové väzobné interakcie v EPR štúdiách.',
          },
          {
            feature: 'Výskumná čistota kvality',
            description:
              'Vysoká špecifikácia čistoty (≥97%) zabezpečuje spoľahlivý a konzistentný výkon v citlivých EPR spektroskopických a výskumných aplikáciách.',
          },
          {
            feature: 'Schopnosť membránovej sondy',
            description:
              'Efektívne sa rozdeľuje do biologických membrán umožňujúc detailný výskum dynamiky lipidových dvojvrstiev a liek-membránových interakcií.',
          },
          {
            feature: 'Všestranný výskumný nástroj',
            description:
              'Vhodný pre viacero výskumných aplikácií od štúdií konformácie proteínov po dynamiku polymérnych reťazcov v rôznych teplotných rozsahoch.',
          },
          {
            feature: 'Konjugačný potenciál',
            description:
              'Acetamidová skupina ponúka potenciál pre ďalšie chemické modifikácie alebo konjugačné stratégie v špecializovaných značkovacích aplikáciách.',
          },
        ],
        faq: [
          {
            question: 'Čo je 4-Acetamido-TEMPO a jeho primárne použitie?',
            answer:
              'Je to derivát TEMPO s acetamidovou skupinou, primárne používaný ako spin značkovacia sonda v EPR spektroskopii na štúdium molekulárnej štruktúry, dynamiky a prostredí.',
          },
          {
            question: 'Ako sa porovnáva s inými TEMPO spin značkami?',
            answer:
              'Acetamidová skupina poskytuje špecifické polárne a vodíkové väzobné schopnosti, čo ho robí vhodným pre sondy určitých molekulárnych prostredí v porovnaní s inými TEMPO derivátmi.',
          },
          {
            question: 'Čo ho robí vhodným pre štúdie membrán?',
            answer:
              'Jeho chemické vlastnosti umožňujú efektívne rozdelenie do biologických membrán, umožňujúc detailný výskum dynamiky lipidových dvojvrstiev a membránovo-liekových interakcií.',
          },
          {
            question: 'Akú úroveň čistoty ponúka VUP pre túto zlúčeninu?',
            answer:
              'VUP dodáva 4-Acetamido-TEMPO s ≥97% čistotou, zabezpečujúc spoľahlivý výkon v citlivých EPR spektroskopických a výskumných aplikáciách.',
          },
          {
            question: 'Môže sa použiť v výskumných aplikáciách polymérov?',
            answer:
              'Áno, je cenný pre štúdium mobility polymérnych reťazcov, segmentálnej dynamiky a správania skleného prechodu prostredníctvom teplotne závislej EPR analýzy.',
          },
          {
            question: 'Aké bezpečnostné opatrenia sú potrebné pri manipulácii s touto zlúčeninou?',
            answer:
              'Manipulujte ako so špeciálnou chemikáliou s vhodnými OOP. Môže spôsobiť podráždenie kože, očí a dýchacích ciest. Vždy si preštudujte oficiálny SDS pre úplné bezpečnostné informácie.',
          },
        ],
      },
    }),
    payload.update({
      collection: 'products',
      id: tempone.id,
      locale: 'sk',
      data: {
        name: '4-Oxo-TEMPO (TEMPone)',
        description:
          'Ketónom funkcionalizovaný stabilný nitroxylový radikál založený na TEMPO, ponúkajúci alternatívnu reaktivitu v selektívnej oxidačnej katalýze a slúžiaci ako všestranný medziproduk na syntézu komplexných derivátov nitroxidov.',
        applications: [
          {
            application: 'Katalyzátor selektívnej oxidácie',
            description:
              'Funguje ako katalyzátor pre špecifické oxidačné reakcie, potenciálne ponúkajúc odlišnú selektivitu a výkonové charakteristiky v porovnaní s inými TEMPO derivátmi v určitých transformáciách.',
            image: demoImageDoc.id,
          },
          {
            application: 'Syntéza medziproduktu',
            description:
              'Slúži ako stavebný blok na syntézu funkcionalizovaných nitroxidov a komplexných molekúl, využívajúc ketónovú skupinu ako reaktívnu úchytku pre ďalšie chemické modifikácie.',
            image: demoImageDoc.id,
          },
          {
            application: 'Výskum radikálovej chémie',
            description:
              'Používa sa ako výskumný nástroj na štúdium mechanizmov radikálových reakcií, nitroxidom mediovaných procesov a vývoj nových syntetických metodológií v akademických a priemyselných prostrediach.',
            image: demoImageDoc.id,
          },
          {
            application: 'Materiálové vedy',
            description:
              'Potenciálne začlenenie do funkčných polymérov alebo pokročilých materiálov vyžadujúcich stabilné radikálové centrá pre špecializované vlastnosti a výkonové charakteristiky.',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Funkcionalizovaný TEMPO radikál',
            description:
              'Poskytuje stabilný nitroxylový radikálny center funkcionalizovaný ketónovou skupinou v 4-pozícii, ponúkajúc jedinečné elektronické a priestorové vlastnosti.',
          },
          {
            feature: 'Alternatívne vlastnosti oxidanta',
            description:
              'Používa sa v organickej syntéze ako katalyzátor pre selektívne oxidácie, potenciálne ponúkajúc odlišné výkonové charakteristiky v porovnaní s inými TEMPO derivátmi.',
          },
          {
            feature: 'Všestranný medziproduk',
            description:
              'Ketónová skupina slúži ako reaktívna úchytka pre ďalšie chemické modifikácie na vytvorenie komplexnejších derivátov nitroxidov a funkcionalizovaných molekúl.',
          },
          {
            feature: 'Výskumný nástroj',
            description:
              'Používa sa vo výskumných prostrediach na štúdium radikálovej chémie, mechanizmov katalýzy a vývoj nových syntetických metód pre akademické a priemyselné aplikácie.',
          },
          {
            feature: 'VUP syntetická schopnosť',
            description:
              'Spadá do odbornosti VUP v chémii stericky bránených amínov a TEMPO derivátov, indikujúc potenciál pre spoľahlivú dodávku alebo vlastné syntetické schopnosti.',
          },
        ],
        faq: [
          {
            question: 'Čo je 4-Oxo-TEMPO a ako sa líši od štandardného TEMPO?',
            answer:
              'Je to derivát TEMPO s ketónovou skupinou v 4-pozícii, ponúkajúc odlišné chemické vlastnosti, reaktivitu, polaritu a potenciálne aplikácie v porovnaní so štandardným TEMPO.',
          },
          {
            question: 'Aké sú hlavné aplikácie pre 4-Oxo-TEMPO?',
            answer:
              'Primárne sa používa ako katalyzátor pre selektívne oxidácie v organickej syntéze, ako medziproduk na syntézu funkcionalizovaných nitroxidov a ako výskumný nástroj v štúdiách radikálovej chémie.',
          },
          {
            question: 'Ako sa 4-Oxo-TEMPO používa v katalytických oxidačných reakciách?',
            answer:
              'Funguje ako katalyzátor ponúkajúc potenciálne odlišnú selektivitu a výkonové charakteristiky v porovnaní s inými TEMPO derivátmi v určitých oxidačných transformáciách.',
          },
          {
            question: 'Môže sa 4-Oxo-TEMPO použiť ako stavebný blok pre syntézu?',
            answer:
              'Áno, ketónová skupina poskytuje reaktívnu úchytku pre ďalšie chemické modifikácie, čo ho robí cenným pre vytváranie komplexných derivátov nitroxidov a funkcionalizovaných molekúl.',
          },
          {
            question: 'Akú úroveň čistoty ponúka VUP pre 4-Oxo-TEMPO?',
            answer:
              'VUP dodáva 4-Oxo-TEMPO s ≥97% čistotou, zabezpečujúc spoľahlivý výkon pre náročné výskumné a syntetické aplikácie vyžadujúce konzistentnú kvalitu.',
          },
          {
            question: 'Aké bezpečnostné opatrenia sú potrebné pri manipulácii s 4-Oxo-TEMPO?',
            answer:
              'Manipulujte ako so špeciálnou chemikáliou a potenciálnym oxidantom. Môže spôsobiť podráždenie kože, očí a dýchacích ciest. Používajte vhodné OOP a vždy si preštudujte oficiálny SDS pre úplné bezpečnostné informácie.',
          },
        ],
      },
    }),
    payload.update({
      collection: 'products',
      id: colamin.id,
      locale: 'sk',
      data: {
        name: 'Colamin Phosphate Calcium Salt',
        description:
          'Jedinečná zlúčenina poskytujúca základný prekurzor fosfolipidov, Phosphorylethanolamine, aj nevyhnutný minerál, Vápnik. Táto synergická kombinácia podporuje integráciu bunkovej membrány aj zdravie kostí, čo ju robí cennou pre špecializované dietetické doplnky, veterinárnu výživu a farmaceutické aplikácie.',
        applications: [
          {
            application: 'Dietetické doplnky',
            description:
              'Základná surovina pre doplnky podporujúce zdravie buniek a mozgu, poskytujúc fosfolipidové prekurzory pre syntézu a údržbu zdravých bunkových membrán.',
            image: demoImageDoc.id,
          },
          {
            application: 'Farmaceutické syntézy',
            description:
              'Medziproduk pri výrobe fosfolipidov a súvisiacich zlúčenín pre farmaceutické formulácie zamerané na neurologické a bunkovej zdravie.',
            image: demoImageDoc.id,
          },
          {
            application: 'Veterinárna výživa',
            description:
              'Pridáva sa do krmív pre zvieratá na podporu zdravého rozvoja bunkovej membrány, neurologickej funkcie a celkového fyziologického zdravia.',
            image: demoImageDoc.id,
          },
          {
            application: 'Média bunkovej kultúry',
            description:
              'Nevyhnutná zložka v definovaných médiách pre optimálny rast a zdravie cicavčích bunkových línií v biofarmaceutickej výrobe a výskume.',
            image: demoImageDoc.id,
          },
          {
            application: 'Biochemický výskum',
            description:
              'Používa sa ako štandard, činidlo alebo substrát v štúdiách súvisiacich s metabolizmom fosfolipidov, kinetikou enzýmov a signálnymi dráhami buniek.',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Základný stavebný blok',
            description:
              'Priamo zapojený do primárnej dráhy syntézy fosfatidyletanolamínu (PE), nevyhnutného pre štruktúru a integritu bunkovej membrány vo všetkých tkanivách.',
          },
          {
            feature: 'Vysoké štandardy čistoty',
            description:
              'VUP poskytuje minimálnu čistotu 98%, vhodnú pre náročné aplikácie v regulovaných priemysloch vrátane farmaceutík a dietetických doplnkov.',
          },
          {
            feature: 'Vo vode rozpustné vlastnosti',
            description:
              'Ľahko rozpustný vo vode, uľahčujúc jeho použitie vo vodných formuláciách a biologických systémoch pre zvýšenú biologickú dostupnosť a spracovanie.',
          },
          {
            feature: 'Všestranné aplikácie',
            description:
              'Široko používaný vo farmaceutikách, doplnkoch, veterinárnej výžive a médiách bunkovej kultúry, demonštrujúc širokú akceptáciu a užitočnosť v priemysle.',
          },
          {
            feature: 'Podpora bunkového zdravia',
            description:
              'Kľúčový pre udržanie zdravej bunkovej funkcie, fluidity membrány a signálnych procesov, osobitne dôležitý pre aplikácie zdravia mozgu a pečene.',
          },
          {
            feature: 'VUP produkčná odbornosť',
            description:
              'Vyrábaný VUP využívajúc skúsenosti s výrobou špeciálnych chemikálií s osvedčenou schopnosťou rozšírenia a konzistentného dodávania kvality.',
          },
        ],
        faq: [
          {
            question: 'Čo je Colamin Phosphate a prečo je dôležitý pre zdravie?',
            answer:
              'Je to prirodzene sa vyskytujúca molekula nevyhnutná pre budovanie fosfatidyletanolamínu (PE), hlavnej zložky bunkovej membrány. Zdravé bunkové membrány sú kľúčové pre všetky telesné funkcie.',
          },
          {
            question: 'Aké sú hlavné aplikácie pre VUP Colamin Phosphate?',
            answer:
              'Používa sa vo farmaceutickej syntéze, dietetických doplnkoch pre zdravie mozgu/buniek, veterinárnych krmivových doplnkoch, médiách bunkovej kultúry a biochemických výskumných aplikáciách.',
          },
          {
            question: 'Akú úroveň čistoty ponúka VUP pre tento produkt?',
            answer:
              'VUP dodáva Colamin Phosphate s minimálnou čistotou 98%, vhodný pre náročné aplikácie v regulovaných priemysloch. Úplné špecifikácie dostupné v Technickom liste.',
          },
          {
            question: 'Ako sa líši od foriem sodíkových alebo vápnikových solí?',
            answer:
              'Colamin Phosphate je základná molekula, zatiaľ čo sodíkové a vápnikové soli ponúkajú rovnaké jadro s odlišnou rozpustnosťou, manipulačnými vlastnosťami alebo dodatočnými výživovými minerálmi.',
          },
          {
            question: 'Je tento produkt vhodný pre farmaceutické a doplnkové použitie?',
            answer:
              'Áno, VUP vyrába vysokočistý Colamin Phosphate pre farmaceutické a doplnkové aplikácie. Kontaktujte VUP pre špecifické požiadavky na stupeň a dokumentáciu zhody.',
          },
          {
            question: 'Čo robí VUP Colamin Phosphate vhodným pre aplikácie bunkovej kultúry?',
            answer:
              'Vysoká čistota a rozpustnosť vo vode ho robia ideálnym pre formulácie definovaných médií, poskytujúc nevyhnutné stavebné bloky pre robustnú syntézu bunkovej membrány počas proliferácie.',
          },
        ],
      },
    }),
  ])

  // --------------------
  // ADDING JAPANESE TRANSLATIONS FOR PRODUCTS (BATCH 4: ACETAMIDO-TEMPO, TEMPONE, COLAMIN)
  // --------------------

  payload.logger.info('- Adding Japanese translations for fourth batch of products...')

  await Promise.all([
    payload.update({
      collection: 'products',
      id: acetamidoTempo.id,
      locale: 'jp',
      data: {
        name: '4-アセトアミド-TEMPO',
        description:
          'アセトアミド基を特徴とする安定ニトロキシルラジカルTEMPOの機能化誘導体。生化学および材料科学研究における電子常磁性共鳴（EPR）分光法のスピン標識プローブとして主に使用。',
        applications: [
          {
            application: 'EPR分光法',
            description:
              'タンパク質構造、構造変化、脂質膜流動性、分子結合相互作用を研究するためのスピン標識プローブとしての主要応用。',
            image: demoImageDoc.id,
          },
          {
            application: '生化学研究',
            description:
              'EPRモニタリングが必要な分子動力学、ラジカル消去過程、局所環境を調査する生物物理学研究で使用。',
            image: demoImageDoc.id,
          },
          {
            application: 'ポリマー研究',
            description:
              '温度依存EPR分析を通じてポリマー鎖移動度、セグメント動力学、形態学、ガラス転移挙動を調査。',
            image: demoImageDoc.id,
          },
          {
            application: '材料科学研究',
            description:
              '合成材料の構造-特性関係の研究および加工中の分子環境変化のモニタリングに応用。',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: '機能化スピン標識',
            description:
              'EPR研究における特定の極性と水素結合相互作用のためのアセトアミド機能を持つ安定TEMPO ニトロキシルラジカル中心を提供。',
          },
          {
            feature: '研究グレード純度',
            description:
              '高純度仕様（≥97%）により、敏感なEPR分光法および研究用途での信頼性と一貫した性能を確保。',
          },
          {
            feature: '膜プローブ能力',
            description:
              '生物膜に効率的に分配し、脂質二分子層動力学と薬物-膜相互作用の詳細な調査を可能に。',
          },
          {
            feature: '多用途研究ツール',
            description:
              'タンパク質構造研究からポリマー鎖動力学まで、様々な温度範囲での複数の研究用途に適している。',
          },
          {
            feature: '共役ポテンシャル',
            description:
              'アセトアミド基は特殊標識用途でのさらなる化学修飾または共役戦略のポテンシャルを提供。',
          },
        ],
        faq: [
          {
            question: '4-アセトアミド-TEMPOとは何で、その主要用途は？',
            answer:
              'アセトアミド基を持つTEMP誘導体で、主にEPR分光法のスピン標識プローブとして分子構造、動力学、環境の研究に使用されます。',
          },
          {
            question: '他のTEMPOスピン標識とどう比較されますか？',
            answer:
              'アセトアミド基は特定の極性と水素結合能力を提供し、他のTEMP誘導体と比較して特定の分子環境のプローブに適しています。',
          },
          {
            question: '膜研究に適している理由は？',
            answer:
              'その化学特性により生物膜への効果的な分配が可能で、脂質二分子層動力学と膜-薬物相互作用の詳細な調査ができます。',
          },
          {
            question: 'VUPはこの化合物をどの純度レベルで提供していますか？',
            answer:
              'VUPは敏感なEPR分光法および研究用途での信頼性の高い性能を確保する≥97%純度で4-アセトアミド-TEMPOを供給しています。',
          },
          {
            question: 'ポリマー研究用途で使用できますか？',
            answer:
              'はい、温度依存EPR分析を通じてポリマー鎖移動度、セグメント動力学、ガラス転移挙動の研究に価値があります。',
          },
          {
            question: 'この化合物を取扱う際に必要な安全対策は？',
            answer:
              '適切なPPEを使用して特殊化学品として取扱い。皮膚、眼、呼吸器刺激を引き起こす可能性があります。完全な安全情報については常に公式SDSを参照してください。',
          },
        ],
      },
    }),
    payload.update({
      collection: 'products',
      id: tempone.id,
      locale: 'jp',
      data: {
        name: '4-オキソ-TEMPO（TEMPone）',
        description:
          'TEMPOに基づくケトン機能化安定ニトロキシルラジカルで、選択酸化触媒における代替反応性を提供し、複雑なニトロキサイド誘導体合成のための多用途中間体として機能。',
        applications: [
          {
            application: '選択酸化触媒',
            description:
              '特定の酸化反応の触媒として機能し、特定の変換において他のTEMPO誘導体と比較して異なる選択性と性能特性を潜在的に提供。',
            image: demoImageDoc.id,
          },
          {
            application: '中間体合成',
            description:
              'ケトン基をさらなる化学修飾のための反応ハンドルとして活用し、機能化ニトロキサイドと複雑な分子の合成のための構成要素として機能。',
            image: demoImageDoc.id,
          },
          {
            application: 'ラジカル化学研究',
            description:
              '学術および産業環境でラジカル反応機構、ニトロキサイド媒介過程の研究、新しい合成方法論の開発のための研究ツールとして使用。',
            image: demoImageDoc.id,
          },
          {
            application: '材料科学',
            description:
              '特殊特性と性能特性のために安定ラジカル中心を必要とする機能ポリマーまたは先進材料への潜在的組み込み。',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: '機能化TEMPOラジカル',
            description:
              '4位にケトン基で機能化された安定ニトロキシルラジカル中心を提供し、独特な電子的および立体的特性を提供。',
          },
          {
            feature: '代替酸化剤特性',
            description:
              '選択酸化の触媒として有機合成で使用され、他のTEMPO誘導体と比較して異なる性能特性を潜在的に提供。',
          },
          {
            feature: '多用途中間体',
            description:
              'ケトン基はより複雑なニトロキサイド誘導体と機能化分子を作成するためのさらなる化学修飾の反応ハンドルとして機能。',
          },
          {
            feature: '研究ツール',
            description:
              '研究環境でラジカル化学、触媒機構の研究、学術および産業用途のための新しい合成方法の開発に使用。',
          },
          {
            feature: 'VUP合成能力',
            description:
              '立体障害アミンとTEMPO誘導体化学におけるVUPの専門知識の範囲内にあり、信頼性の高い供給またはカスタム合成能力のポテンシャルを示している。',
          },
        ],
        faq: [
          {
            question: '4-オキソ-TEMPOとは何で、標準TEMPOとどう違いますか？',
            answer:
              '4位にケトン基を持つTEMPO誘導体で、標準TEMPOと比較して異なる化学特性、反応性、極性、潜在的用途を提供します。',
          },
          {
            question: '4-オキソ-TEMPOの主な用途は何ですか？',
            answer:
              '主に有機合成での選択酸化の触媒として、機能化ニトロキサイド合成の中間体として、ラジカル化学研究の研究ツールとして使用されます。',
          },
          {
            question: '4-オキソ-TEMPOは触媒酸化反応でどのように使用されますか？',
            answer:
              '特定の酸化変換において他のTEMPO誘導体と比較して潜在的に異なる選択性と性能特性を提供する触媒として機能します。',
          },
          {
            question: '4-オキソ-TEMPOは合成の構成要素として使用できますか？',
            answer:
              'はい、ケトン基はさらなる化学修飾のための反応ハンドルを提供し、複雑なニトロキサイド誘導体と機能化分子の作成に価値があります。',
          },
          {
            question: 'VUPは4-オキソ-TEMPOをどの純度レベルで提供していますか？',
            answer:
              'VUPは一貫した品質を要求する厳しい研究および合成用途での信頼性の高い性能を確保する≥97%純度で4-オキソ-TEMPOを供給しています。',
          },
          {
            question: '4-オキソ-TEMPO取扱い時に必要な安全対策は？',
            answer:
              '特殊化学品および潜在的酸化剤として取扱い。皮膚、眼、呼吸器刺激を引き起こす可能性があります。適切なPPEを使用し、完全な安全情報については常に公式SDSを参照してください。',
          },
        ],
      },
    }),
    payload.update({
      collection: 'products',
      id: colamin.id,
      locale: 'jp',
      data: {
        name: 'コラミンリン酸カルシウム塩',
        description:
          '基本的なリン脂質前駆体であるフォスフォリルエタノールアミンと必須ミネラルであるカルシウムの両方を提供する独特な化合物。この相乗的組み合わせは細胞膜完全性と骨の健康の両方をサポートし、特殊栄養補助食品、獣医栄養、製薬用途に価値があります。',
        applications: [
          {
            application: '栄養補助食品',
            description:
              '細胞と脳の健康をサポートするサプリメントの基本原料で、健康な細胞膜の合成と維持のためのリン脂質前駆体を提供。',
            image: demoImageDoc.id,
          },
          {
            application: '製薬合成',
            description:
              '神経学的および細胞の健康に焦点を当てた製薬製剤のためのリン脂質および関連化合物の製造における中間体。',
            image: demoImageDoc.id,
          },
          {
            application: '獣医栄養',
            description:
              '健康な細胞膜発達、神経機能、全体的な生理学的健康をサポートするために動物飼料に添加。',
            image: demoImageDoc.id,
          },
          {
            application: '細胞培養培地',
            description:
              'バイオ医薬品製造と研究における哺乳動物細胞株の最適な成長と健康のための定義培地の必須成分。',
            image: demoImageDoc.id,
          },
          {
            application: '生化学研究',
            description:
              'リン脂質代謝、酵素動力学、細胞シグナル伝達経路に関連する研究で標準、試薬、または基質として使用。',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: '基本的な構成要素',
            description:
              '全ての組織での細胞膜構造と完全性に必須であるフォスファチジルエタノールアミン（PE）合成の主要経路に直接関与。',
          },
          {
            feature: '高純度基準',
            description:
              'VUPは製薬および栄養補助食品を含む規制産業での厳しい用途に適した最低98%純度を提供。',
          },
          {
            feature: '水溶性特性',
            description:
              '水に容易に溶解し、生物学的利用能と加工の向上のために水性製剤と生物学的システムでの使用を促進。',
          },
          {
            feature: '多用途用途',
            description:
              '製薬、サプリメント、獣医栄養、細胞培養培地で広く使用され、幅広い産業受容と有用性を実証。',
          },
          {
            feature: '細胞健康サポート',
            description:
              '健康な細胞機能、膜流動性、シグナル過程の維持に重要で、特に脳と肝臓の健康用途に重要。',
          },
          {
            feature: 'VUP生産専門知識',
            description:
              'スケールアップと一貫した品質配送の実証能力を持つ特殊化学生産経験を活用してVUPによって製造。',
          },
        ],
        faq: [
          {
            question: 'コラミンリン酸とは何で、なぜ健康に重要ですか？',
            answer:
              '主要な細胞膜成分であるフォスファチジルエタノールアミン（PE）を構築するために必須の自然発生分子です。健康な細胞膜は全ての身体機能に重要です。',
          },
          {
            question: 'VUPコラミンリン酸の主な用途は何ですか？',
            answer:
              '製薬合成、脳/細胞健康のための栄養補助食品、獣医飼料添加物、細胞培養培地、生化学研究用途で使用されます。',
          },
          {
            question: 'VUPはこの製品をどの純度レベルで提供していますか？',
            answer:
              'VUPは規制産業での厳しい用途に適した最低98%純度でコラミンリン酸を供給しています。完全な仕様は技術データシートで入手可能です。',
          },
          {
            question: 'ナトリウムまたはカルシウム塩形とどう違いますか？',
            answer:
              'コラミンリン酸は基本分子で、ナトリウムとカルシウム塩は異なる溶解性、取扱い特性、または追加の栄養ミネラルを持つ同じコアを提供します。',
          },
          {
            question: 'この製品は製薬およびサプリメント使用に適していますか？',
            answer:
              'はい、VUPは製薬およびサプリメント用途のための高純度コラミンリン酸を製造しています。特定のグレード要件と適合文書についてはVUPにお問い合わせください。',
          },
          {
            question: 'VUPコラミンリン酸を細胞培養用途に適したものにするのは何ですか？',
            answer:
              '高純度と水溶性により、定義培地製剤に理想的で、増殖中の堅牢な細胞膜合成のための必須構成要素を提供します。',
          },
        ],
      },
    }),
  ])

  // --------------------
  // ADDING SLOVAK TRANSLATIONS FOR PRODUCTS (BATCH 5: COLAMIN PHOSPHATE, COLAMIN PHOSPHATE SODIUM SALT, VUPIN)
  // --------------------

  payload.logger.info('- Adding Slovak translations for fifth batch of products...')

  await Promise.all([
    payload.update({
      collection: 'products',
      id: colaminPhosphate.id,
      locale: 'sk',
      data: {
        name: 'Colamin Phosphate (Phosphorylethanolamine)',
        description:
          'Vysokočistý fundamentálny biochemický prekurzor potrebný na syntézu fosfatidyletanolamínu (PE), kritickej fosfolipidovej zložky všetkých bunkových membrán. Nevyhnutný pre bunkovú štruktúru a funkciu vo farmaceutických aplikáciách.',
        applications: [
          {
            application: 'Farmaceutická syntéza',
            description:
              'Používa sa ako medziproduk v syntéze liekov alebo ako aktívna zložka v špecifických formuláciách zameraných na bunkové zdravie a integritu membrán.',
            image: demoImageDoc.id,
          },
          {
            application: 'Dietetické doplnky',
            description:
              'Kľúčová zložka v doplnkoch pre kognitívne funkcie, zdravie mozgu, zdravie pečene a celkovú podporu integrity bunkových membrán.',
            image: demoImageDoc.id,
          },
          {
            application: 'Veterinárne krmivové doplnky',
            description:
              'Pridáva sa do krmivových formulácií pre zvieratá na podporu bunkového vývoja a zdravia u hospodárskych a spoločenských zvierat počas rastových fáz.',
            image: demoImageDoc.id,
          },
          {
            application: 'Média bunkovej kultúry',
            description:
              'Nevyhnutná zložka v definovaných médiách pre optimálny rast a zdravie cicavčích bunkových línií v biofarmaceutickej výrobe a výskume.',
            image: demoImageDoc.id,
          },
          {
            application: 'Biochemický výskum',
            description:
              'Používa sa ako štandard, činidlo alebo substrát v štúdiách súvisiacich s metabolizmom fosfolipidov, kinetikou enzýmov a bunkovými signálnymi dráhami.',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Fundamentálny stavebný blok',
            description:
              'Priamo zapojený do primárnej dráhy syntézy fosfatidyletanolamínu (PE), nevyhnutného pre štruktúru a integritu bunkovej membrány vo všetkých tkanivách.',
          },
          {
            feature: 'Vysoké štandardy čistoty',
            description:
              'VUP poskytuje minimálnu čistotu 98%, vhodnú pre náročné aplikácie v regulovaných priemysloch vrátane farmaceutík a dietetických doplnkov.',
          },
          {
            feature: 'Vo vode rozpustné vlastnosti',
            description:
              'Ľahko rozpustný vo vode, uľahčujúc jeho použitie vo vodných formuláciách a biologických systémoch pre zvýšenú biologickú dostupnosť a spracovanie.',
          },
          {
            feature: 'Všestranné aplikácie',
            description:
              'Široko používaný vo farmaceutikách, doplnkoch, veterinárnej výžive a médiách bunkovej kultúry, demonštrujúc širokú akceptáciu a užitočnosť v priemysle.',
          },
          {
            feature: 'Podpora bunkového zdravia',
            description:
              'Kľúčový pre udržanie zdravej bunkovej funkcie, fluidity membrány a signálnych procesov, osobitne dôležitý pre aplikácie zdravia mozgu a pečene.',
          },
          {
            feature: 'VUP produkčná odbornosť',
            description:
              'Vyrábaný VUP využívajúc skúsenosti s výrobou špeciálnych chemikálií s osvedčenou schopnosťou rozšírenia a konzistentného dodávania kvality.',
          },
        ],
        faq: [
          {
            question: 'Čo je Colamin Phosphate a prečo je dôležitý pre zdravie?',
            answer:
              'Je to prirodzene sa vyskytujúca molekula nevyhnutná pre budovanie fosfatidyletanolamínu (PE), hlavnej zložky bunkovej membrány. Zdravé bunkové membrány sú kľúčové pre všetky telesné funkcie.',
          },
          {
            question: 'Aké sú hlavné aplikácie pre VUP Colamin Phosphate?',
            answer:
              'Používa sa vo farmaceutickej syntéze, dietetických doplnkoch pre zdravie mozgu/buniek, veterinárnych krmivových doplnkoch, médiách bunkovej kultúry a biochemických výskumných aplikáciách.',
          },
          {
            question: 'Akú úroveň čistoty ponúka VUP pre tento produkt?',
            answer:
              'VUP dodáva Colamin Phosphate s minimálnou čistotou 98%, vhodný pre náročné aplikácie v regulovaných priemysloch. Úplné špecifikácie dostupné v Technickom liste.',
          },
          {
            question: 'Ako sa líši od foriem sodíkových alebo vápnikových solí?',
            answer:
              'Colamin Phosphate je základná molekula, zatiaľ čo sodíkové a vápnikové soli ponúkajú rovnaké jadro s odlišnou rozpustnosťou, manipulačnými vlastnosťami alebo dodatočnými výživovými minerálmi.',
          },
          {
            question: 'Je tento produkt vhodný pre farmaceutické a doplnkové použitie?',
            answer:
              'Áno, VUP vyrába vysokočistý Colamin Phosphate pre farmaceutické a doplnkové aplikácie. Kontaktujte VUP pre špecifické požiadavky na stupeň a dokumentáciu zhody.',
          },
          {
            question: 'Čo robí VUP Colamin Phosphate vhodným pre aplikácie bunkovej kultúry?',
            answer:
              'Vysoká čistota a rozpustnosť vo vode ho robia ideálnym pre formulácie definovaných médií, poskytujúc nevyhnutné stavebné bloky pre robustnú syntézu bunkovej membrány počas proliferácie.',
          },
        ],
      },
    }),
    payload.update({
      collection: 'products',
      id: colaminPhosphatesodiumSalt.id,
      locale: 'sk',
      data: {
        name: 'Colamin Phosphate Sodium Salt',
        description:
          'Sodíková soľ formy nevyhnutného prekurzora fosfolipidov, Phosphorylethanolamine. Táto soľ ponúka zvýšenú rozpustnosť a formulačnú flexibilitu v porovnaní s materskou zlúčeninou, čo ju robí cennou pre tekuté doplnky, farmaceutické formulácie a špecializované aplikácie vyžadujúce zlepšené rozpúšťacie charakteristiky.',
        applications: [
          {
            application: 'Tekuté formulácie',
            description:
              'Zvýšená rozpustnosť vo vode ju robí ideálnou pre tekuté doplnky a farmaceutické roztoky, kde je potrebné rýchlejšie rozpúšťanie a zlepšená kompatibilita.',
            image: demoImageDoc.id,
          },
          {
            application: 'Dietetické doplnky',
            description:
              'Poskytuje bioprístupný phosphorylethanolamine pre podporu bunkového zdravia so zlepšenou formulačnou flexibilitou v tekutých aj pevných dávkovacích formách.',
            image: demoImageDoc.id,
          },
          {
            application: 'Média bunkovej kultúry',
            description:
              'Zložka v špecializovaných pH-kontrolovaných mediálnych formuláciách, poskytujúca nevyhnutné stavebné bloky pre syntézu fosfatidyletanolamínu počas bunkovej proliferácie.',
            image: demoImageDoc.id,
          },
          {
            application: 'Farmaceutické formulácie',
            description:
              'Používa sa ako medziproduk alebo pomocná látka, kde špecifický rozpustnostný profil a pH charakteristiky sodíkovej soli ponúkajú formulačné výhody oproti materskej zlúčenine.',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Zvýšená rozpustnosť',
            description:
              'Zlepšená rozpustnosť vo vode a rýchlejšie rýchlosti rozpúšťania v porovnaní s Colamin Phosphate, obzvlášť prospešné v neutrálnych až mierne alkalických vodných roztokoch.',
          },
          {
            feature: 'Formulačná flexibilita',
            description:
              'Ponúka formulátorom alternatívnu formu, ktorá môže byť ľahšia na manipuláciu alebo stabilnejšia v špecifických tekutých alebo pevných dávkovacích formách vyžadujúcich konzistentný výkon.',
          },
          {
            feature: 'Funkcia nevyhnutného prekurzora',
            description:
              'Dodáva jadrovú molekulu phosphorylethanolamine potrebnú pre syntézu fosfatidyletanolamínu a zdravú funkciu bunkovej membrány vo všetkých aplikáciách.',
          },
          {
            feature: 'Potenciál modifikácie pH',
            description:
              'Soľová forma poskytuje kontrolované pH charakteristiky a potenciálnu pufovaciu kapacitu prospešnú pre špecializované formulačné požiadavky.',
          },
          {
            feature: 'VUP zabezpečenie kvality',
            description:
              'Vyrábaný využívajúc odbornosť VUP v výrobe špeciálnych chemikálií s osvedčenou schopnosťou konzistentného dodávania kvality a spoľahlivého zásobovania.',
          },
        ],
        faq: [
          {
            question: 'Aké výhody ponúka forma sodíkovej soli oproti bežnému Colamin Phosphate?',
            answer:
              'Sodíková soľ poskytuje zvýšenú rozpustnosť vo vode, rýchlejšie rýchlosti rozpúšťania a odlišné manipulačné charakteristiky, obzvlášť prospešné pre tekuté formulácie a aplikácie s neutrálnym pH.',
          },
          {
            question: 'Aké sú hlavné aplikácie pre Colamin Phosphate Sodium Salt?',
            answer:
              'Používa sa v tekutých doplnkoch, farmaceutických formuláciách, médiách bunkovej kultúry a veterinárnych aplikáciách, kde sú výhodné zlepšená rozpustnosť a špecifické vlastnosti soli.',
          },
          {
            question: 'Ako podporuje bunkové zdravie ako bežný Colamin Phosphate?',
            answer:
              'Poskytuje rovnaké nevyhnutné jadro phosphorylethanolamine pre syntézu fosfatidyletanolamínu a zdravie bunkovej membrány, len v rozpustnejšej soľovej forme.',
          },
          {
            question: 'Akú úroveň čistoty ponúka VUP pre túto sodíkovú soľ?',
            answer:
              'VUP dodáva Colamin Phosphate Sodium Salt s minimálnou čistotou 98%, zabezpečujúc spoľahlivý výkon pre náročné farmaceutické a doplnkové aplikácie.',
          },
          {
            question: 'Je táto forma vhodná pre formulácie tekutých doplnkov?',
            answer:
              'Áno, zvýšená rozpustnosť ju robí obzvlášť vhodnou pre tekuté doplnky, kde sú kritické konzistentné rozpúšťanie a homogénne rozdelenie.',
          },
          {
            question: 'Ako obsah sodíka ovplyvňuje jej výživový profil?',
            answer:
              'Hoci poskytuje niektoré sodíkové ióny, primárny výživový prínos zostáva jadro phosphorylethanolamine pre bunkové zdravie skôr ako doplnok sodíka.',
          },
        ],
      },
    }),
    payload.update({
      collection: 'products',
      id: vupin.id,
      locale: 'sk',
      data: {
        name: 'VUPIN H37-B Polymerizačný inhibítor',
        description:
          'Tekutá formulácia polymerizačného inhibítora kombinujúca 4-Hydroxy-TEMPO s rozpúšťadlom 2-Butoxyethanol. Predchádza nežiaducemu polymerizácii v petrochemických tokoch, manipulácii s monomermi a aplikáciách FCC benzínu.',
        applications: [
          {
            application: 'Stabilizácia FCC benzínu',
            description:
              'Používa sa ako aditívna zložka v balíčkoch FCC benzínu pre rafinérie, predchádzajúc degradácii a zabezpečujúc stabilnú kvalitu paliva počas skladovania a distribúcie.',
            image: demoImageDoc.id,
          },
          {
            application: 'Stabilizácia monomerov',
            description:
              'Predchádza nežiaducemu polymerizácii počas skladovania a transportu reaktívnych monomerov ako MMA, VAM, styrén a akryláty vo výrobných zariadeniach.',
            image: demoImageDoc.id,
          },
          {
            application: 'Bezpečnosť petrochemických procesov',
            description:
              'Chráni proti polymérnemu zanášaniu v destilačných kolónach, etylénových jednotkách a spracovaní pygas zachytávaním radikálov, ktoré iniciujú polymerizáciu.',
            image: demoImageDoc.id,
          },
          {
            application: 'Rafinérske operácie',
            description:
              'Zložka v špecializovaných aditívnych balíčkoch pre rôzne rafinérske toky vyžadujúce inhibíciu polymerizácie a ochranu procesného zariadenia.',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Efektívna inhibícia založená na TEMPO',
            description:
              'Obsahuje osvedčený 4-Hydroxy-TEMPO radikálový zachytávač, ktorý efektívne predchádza predčasným polymerizačným reakciám v náročných priemyselných prostrediach.',
          },
          {
            feature: 'Pripravená na použitie tekutá formulácia',
            description:
              'Dodáva sa ako pohodlný tekutý roztok zjednodušujúci manipuláciu, dávkovanie a začlenenie do procesných tokov v porovnaní s pevnými inhibítormi.',
          },
          {
            feature: 'Vynikajúce rozpúšťacie vlastnosti',
            description:
              'Využíva rozpúšťadlo 2-Butoxyethanol glycol éter poskytujúce vynikajúcu kompatibilitu s rôznymi látkami a efektívne rozdelenie v procesných tokoch.',
          },
          {
            feature: 'Spoľahlivosť priemyselného stupňa',
            description:
              'Vyrábaný VUP využívajúc odbornosť v chémii stericky bránených amínov a výrobe špeciálnych chemikálií pre konzistentnú kvalitu a výkon.',
          },
          {
            feature: 'Všestranný rozsah aplikácií',
            description:
              'Osvedčená efektívnosť vo viacerých petrochemických aplikáciách od stabilizácie FCC benzínu po výrobu monomerov a rafinérske operácie.',
          },
        ],
        faq: [
          {
            question: 'Čo presne je VUPIN H37-B a jeho hlavné zložky?',
            answer:
              'VUPIN H37-B je tekutá formulácia obsahujúca 4-Hydroxy-TEMPO (CAS 2226-96-2) ako aktívny polymerizačný inhibítor rozpustený v rozpúšťadle 2-Butoxyethanol pre priemyselné petrochemické aplikácie.',
          },
          {
            question: 'Aká je primárna aplikácia pre VUPIN H37-B?',
            answer:
              'Používa sa ako zložka v aditívnych balíčkoch pre FCC benzín v rafinériách a má osvedčenú efektívnosť v stabilizácii reaktívnych monomerov počas skladovania, transportu a spracovania.',
          },
          {
            question: 'Čo robí VUPIN H37-B efektívnym ako polymerizačný inhibítor?',
            answer:
              'Kombinuje schopnosť zachytávania radikálov H-TEMPO s vynikajúcimi rozpúšťacími a kompatibilnými vlastnosťami nosiča 2-Butoxyethanol, zabezpečujúc efektívne rozdelenie a výkon.',
          },
          {
            question: 'Ako VUPIN H37-B predchádza polymérnemu zanášaniu v procesnom zariadení?',
            answer:
              'Aktívna zložka H-TEMPO zachytáva voľné radikály, ktoré iniciujú nežiaducu polymerizáciu, zatiaľ čo rozpúšťadlo zabezpečuje dobré rozdelenie v celom procesnom toku, predchádzajúc zanášaniu.',
          },
          {
            question: 'Je VUPIN H37-B dostupný v rôznych koncentráciách alebo formuláciách?',
            answer:
              'Prosím kontaktujte VUP priamo na prediskutovanie špecifických požiadaviek týkajúcich sa koncentrácie inhibítora, formulačných potrieb a vlastných riešení pre vašu konkrétnu aplikáciu.',
          },
          {
            question: 'Aké bezpečnostné opatrenia sú potrebné pri manipulácii s VUPIN H37-B?',
            answer:
              'Manipulujte ako s formuláciou špeciálnej chemikálie s vhodnými OOP. Zložky majú známe nebezpečenstvá vrátane podráždenia očí/kože. Vždy si preštudujte oficiálny VUPIN H37-B SDS pre úplné bezpečnostné informácie.',
          },
        ],
      },
    }),
  ])

  // --------------------
  // ADDING JAPANESE TRANSLATIONS FOR PRODUCTS (BATCH 5: COLAMIN PHOSPHATE, COLAMIN PHOSPHATE SODIUM SALT, VUPIN)
  // --------------------

  payload.logger.info('- Adding Japanese translations for fifth batch of products...')

  await Promise.all([
    payload.update({
      collection: 'products',
      id: colaminPhosphate.id,
      locale: 'jp',
      data: {
        name: 'コラミンリン酸（ホスホリルエタノールアミン）',
        description:
          'すべての細胞膜の重要なリン脂質成分であるホスファチジルエタノールアミン（PE）の合成に必要な高純度基本生化学前駆体。製薬用途での細胞構造と機能に必須。',
        applications: [
          {
            application: '製薬合成',
            description:
              '薬物合成における中間体として、または細胞の健康と膜完全性を対象とした特定の製剤における活性成分として使用。',
            image: demoImageDoc.id,
          },
          {
            application: '栄養補助食品',
            description:
              '認知機能、脳の健康、肝臓の健康、および全体的な細胞膜完全性サポートのためのサプリメントの主要成分。',
            image: demoImageDoc.id,
          },
          {
            application: '獣医飼料添加物',
            description:
              '成長期の家畜およびコンパニオンアニマルの細胞発達と健康をサポートするために動物飼料製剤に添加。',
            image: demoImageDoc.id,
          },
          {
            application: '細胞培養培地',
            description:
              'バイオ医薬品製造と研究における哺乳動物細胞株の最適な成長と健康のための定義培地の必須成分。',
            image: demoImageDoc.id,
          },
          {
            application: '生化学研究',
            description:
              'リン脂質代謝、酵素動力学、細胞シグナル伝達経路に関連する研究で標準、試薬、または基質として使用。',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: '基本的な構成要素',
            description:
              'すべての組織での細胞膜構造と完全性に必須であるホスファチジルエタノールアミン（PE）合成の主要経路に直接関与。',
          },
          {
            feature: '高純度基準',
            description:
              'VUPは製薬および栄養補助食品を含む規制産業での厳しい用途に適した最低98%純度を提供。',
          },
          {
            feature: '水溶性特性',
            description:
              '水に容易に溶解し、生物学的利用能と加工の向上のために水性製剤と生物学的システムでの使用を促進。',
          },
          {
            feature: '多用途用途',
            description:
              '製薬、サプリメント、獣医栄養、細胞培養培地で広く使用され、幅広い産業受容と有用性を実証。',
          },
          {
            feature: '細胞健康サポート',
            description:
              '健康な細胞機能、膜流動性、シグナル過程の維持に重要で、特に脳と肝臓の健康用途に重要。',
          },
          {
            feature: 'VUP生産専門知識',
            description:
              'スケールアップと一貫した品質配送の実証能力を持つ特殊化学生産経験を活用してVUPによって製造。',
          },
        ],
        faq: [
          {
            question: 'コラミンリン酸とは何で、なぜ健康に重要ですか？',
            answer:
              '主要な細胞膜成分であるホスファチジルエタノールアミン（PE）を構築するために必須の自然発生分子です。健康な細胞膜はすべての身体機能に重要です。',
          },
          {
            question: 'VUPコラミンリン酸の主な用途は何ですか？',
            answer:
              '製薬合成、脳/細胞健康のための栄養補助食品、獣医飼料添加物、細胞培養培地、生化学研究用途で使用されます。',
          },
          {
            question: 'VUPはこの製品をどの純度レベルで提供していますか？',
            answer:
              'VUPは規制産業での厳しい用途に適した最低98%純度でコラミンリン酸を供給しています。完全な仕様は技術データシートで入手可能です。',
          },
          {
            question: 'ナトリウムまたはカルシウム塩形とどう違いますか？',
            answer:
              'コラミンリン酸は基本分子で、ナトリウムとカルシウム塩は異なる溶解性、取扱い特性、または追加の栄養ミネラルを持つ同じコアを提供します。',
          },
          {
            question: 'この製品は製薬およびサプリメント使用に適していますか？',
            answer:
              'はい、VUPは製薬およびサプリメント用途のための高純度コラミンリン酸を製造しています。特定のグレード要件と適合文書についてはVUPにお問い合わせください。',
          },
          {
            question: 'VUPコラミンリン酸を細胞培養用途に適したものにするのは何ですか？',
            answer:
              '高純度と水溶性により、定義培地製剤に理想的で、増殖中の堅牢な細胞膜合成のための必須構成要素を提供します。',
          },
        ],
      },
    }),
    payload.update({
      collection: 'products',
      id: colaminPhosphatesodiumSalt.id,
      locale: 'jp',
      data: {
        name: 'コラミンリン酸ナトリウム塩',
        description:
          '必須リン脂質前駆体ホスホリルエタノールアミンのナトリウム塩形。この塩は親化合物と比較して溶解性と製剤柔軟性が向上し、改良された溶解特性を必要とする液体サプリメント、製薬製剤、特殊用途に価値があります。',
        applications: [
          {
            application: '液体製剤',
            description:
              '向上した水溶性により、より速い溶解と改良された適合性が必要な液体サプリメントと製薬溶液に理想的。',
            image: demoImageDoc.id,
          },
          {
            application: '栄養補助食品',
            description:
              '液体および固体剤形の両方での改良された製剤柔軟性により、細胞健康サポートのための生物学的利用可能なホスホリルエタノールアミンを提供。',
            image: demoImageDoc.id,
          },
          {
            application: '細胞培養培地',
            description:
              '特殊pH制御培地製剤の成分で、細胞増殖中のホスファチジルエタノールアミン合成のための必須構成要素を提供。',
            image: demoImageDoc.id,
          },
          {
            application: '製薬製剤',
            description:
              'ナトリウム塩の特定の溶解性プロファイルとpH特性が親化合物より製剤上の利点を提供する中間体または賦形剤として使用。',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: '向上した溶解性',
            description:
              'コラミンリン酸と比較して改良された水溶性とより速い溶解速度、特に中性からやや塩基性の水溶液で有益。',
          },
          {
            feature: '製剤柔軟性',
            description:
              '一貫した性能を要求する特定の液体または固体剤形で取扱いが容易または安定である代替形を製剤設計者に提供。',
          },
          {
            feature: '必須前駆体機能',
            description:
              'ホスファチジルエタノールアミン合成と健康な細胞膜機能に必要なコアホスホリルエタノールアミン分子を用途全体で提供。',
          },
          {
            feature: 'pH修飾ポテンシャル',
            description: '塩形は特殊製剤要件に有益な制御されたpH特性と潜在的緩衝能力を提供。',
          },
          {
            feature: 'VUP品質保証',
            description:
              '一貫した品質配送と信頼性の高い供給の実証能力を持つVUP特殊化学生産専門知識を活用して製造。',
          },
        ],
        faq: [
          {
            question: 'ナトリウム塩形は通常のコラミンリン酸と比較してどのような利点がありますか？',
            answer:
              'ナトリウム塩は向上した水溶性、より速い溶解速度、異なる取扱い特性を提供し、特に液体製剤と中性pH用途で有益です。',
          },
          {
            question: 'コラミンリン酸ナトリウム塩の主な用途は何ですか？',
            answer:
              '改良された溶解性と特定の塩特性が有利な液体サプリメント、製薬製剤、細胞培養培地、獣医用途で使用されます。',
          },
          {
            question: '通常のコラミンリン酸のように細胞健康をサポートしますか？',
            answer:
              'ホスファチジルエタノールアミン合成と細胞膜健康のための同じ必須ホスホリルエタノールアミンコアを、より溶解性の高い塩形で提供します。',
          },
          {
            question: 'VUPはこのナトリウム塩をどの純度レベルで提供していますか？',
            answer:
              'VUPは厳しい製薬およびサプリメント用途での信頼性の高い性能を確保する最低98%純度でコラミンリン酸ナトリウム塩を供給しています。',
          },
          {
            question: 'この形は液体サプリメント製剤に適していますか？',
            answer:
              'はい、向上した溶解性により、一貫した溶解と均質な分布が重要な液体サプリメントに特に適しています。',
          },
          {
            question: 'ナトリウム含有量は栄養プロファイルにどう影響しますか？',
            answer:
              'いくらかのナトリウムイオンを提供しますが、主要な栄養上の利益はナトリウム補給よりも細胞健康のためのホスホリルエタノールアミンコアです。',
          },
        ],
      },
    }),
    payload.update({
      collection: 'products',
      id: vupin.id,
      locale: 'jp',
      data: {
        name: 'VUPIN H37-B 重合禁止剤',
        description:
          '4-ヒドロキシ-TEMPOと2-ブトキシエタノール溶媒を組み合わせた液体重合禁止剤配合。石油化学ストリーム、モノマー取扱い、FCCガソリン用途での望ましくない重合を防止。',
        applications: [
          {
            application: 'FCCガソリン安定化',
            description:
              '製油所のFCCガソリンパッケージの添加剤成分として使用され、劣化を防止し、貯蔵と流通中の安定した燃料品質を確保。',
            image: demoImageDoc.id,
          },
          {
            application: 'モノマー安定化',
            description:
              '生産施設でのMMA、VAM、スチレン、アクリレートなどの反応性モノマーの貯蔵と輸送中の望ましくない重合を防止。',
            image: demoImageDoc.id,
          },
          {
            application: '石油化学プロセス安全',
            description:
              '重合を開始するラジカルを捕獲することで、蒸留塔、エチレン装置、パイガス処理でのポリマー汚染から保護。',
            image: demoImageDoc.id,
          },
          {
            application: '製油所運転',
            description:
              '重合禁止とプロセス機器保護を必要とする様々な製油所ストリームのための特殊添加剤パッケージの成分。',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: '効果的なTEMPOベース禁止',
            description:
              '厳しい産業環境での早期重合反応を効果的に防止する実証済みの4-ヒドロキシ-TEMPOラジカル捕獲剤を含有。',
          },
          {
            feature: '使用準備完了液体配合',
            description:
              '固体禁止剤と比較して取扱い、投薬、プロセスストリームへの組み込みを簡素化する便利な液体溶液として供給。',
          },
          {
            feature: '優れた溶媒特性',
            description:
              '様々な物質との優れた適合性とプロセスストリームでの効果的な分布を提供する2-ブトキシエタノールグリコールエーテル溶媒を利用。',
          },
          {
            feature: '産業グレード信頼性',
            description:
              '一貫した品質と性能のための立体障害アミン化学と特殊化学生産の専門知識を活用してVUPによって製造。',
          },
          {
            feature: '多用途用途範囲',
            description:
              'FCCガソリン安定化からモノマー生産と製油所運転まで、複数の石油化学用途での実証済み効果。',
          },
        ],
        faq: [
          {
            question: 'VUPIN H37-Bとは正確に何で、その主要成分は？',
            answer:
              'VUPIN H37-Bは産業石油化学用途のために2-ブトキシエタノール溶媒に溶解した活性重合禁止剤として4-ヒドロキシ-TEMPO（CAS 2226-96-2）を含む液体配合です。',
          },
          {
            question: 'VUPIN H37-Bの主要用途は何ですか？',
            answer:
              '製油所でのFCCガソリンの添加剤パッケージの成分として使用され、貯蔵、輸送、処理中の反応性モノマーの安定化で実証済みの効果があります。',
          },
          {
            question: 'VUPIN H37-Bを重合禁止剤として効果的にするのは何ですか？',
            answer:
              'H-TEMPOの強力なラジカル捕獲能力と2-ブトキシエタノールキャリアの優れた溶媒性と適合性特性を組み合わせ、効果的な分布と性能を確保。',
          },
          {
            question: 'VUPIN H37-Bはプロセス機器でのポリマー汚染をどのように防止しますか？',
            answer:
              'H-TEMPO活性成分が望ましくない重合を開始するフリーラジカルを捕獲し、溶媒がプロセスストリーム全体での良好な分布を確保し、汚染を防止します。',
          },
          {
            question: 'VUPIN H37-Bは異なる濃度または配合で利用可能ですか？',
            answer:
              '禁止剤濃度、配合ニーズ、特定用途のカスタムソリューションに関する具体的要件について、VUPに直接お問い合わせください。',
          },
          {
            question: 'VUPIN H37-B取扱い時に必要な安全対策は？',
            answer:
              '適切なPPEで特殊化学配合として取扱い。成分には眼/皮膚刺激を含む既知の危険があります。完全な安全情報については常に公式VUPIN H37-B SDSを参照してください。',
          },
        ],
      },
    }),
  ])

  // --------------------
  // ADDING SLOVAK TRANSLATIONS FOR PRODUCTS (BATCH 6: PENTAMETHYLPIPERIDINE, PENTAMETHYLPIPERIDINOL, AMINO-TMP)
  // --------------------

  payload.logger.info('- Adding Slovak translations for sixth batch of products...')

  await Promise.all([
    payload.update({
      collection: 'products',
      id: pentamethylpiperidine.id,
      locale: 'sk',
      data: {
        name: '1,2,2,6,6-Pentametylpiperidín',
        description:
          'N-metylovaný bránený amínový medziproduk používaný na syntézu špecifických typov HALS (Hindered Amine Light Stabilizers) ako Tinuvin 765/292 a iných funkčných molekúl vyžadujúcich túto špecializovanú piperidínovú štruktúru.',
        applications: [
          {
            application: 'Syntéza HALS',
            description:
              'Kľúčový medziproduk na syntézu Tinuvin 765/292 a súvisiacich vysokovýkonných HALS zlúčenín používaných v aplikáciách stabilizácie polymérov.',
            image: demoImageDoc.id,
          },
          {
            application: 'Organická syntéza',
            description:
              'Všestranný stavebný blok na tvorbu stericky bránených dusíkatých zlúčenín vo farmaceutickej a špeciálno-chemickej syntéze.',
            image: demoImageDoc.id,
          },
          {
            application: 'Výskumné aplikácie',
            description:
              'Používa sa v akademickom a priemyselnom výskume na vývoj nových derivátov bránených amínov a štúdium účinkov sterickej prekážky v chemických reakciách.',
            image: demoImageDoc.id,
          },
          {
            application: 'Zákazková chemická výroba',
            description:
              'Medziproduk pre zmluvnú výrobu a zákazkovú syntézu projektov vyžadujúcich špecifické N-metylované bránené amínové štruktúry.',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'N-metylovaná štruktúra',
            description:
              'N-metylová skupina poskytuje špecifické reaktivitné vzory a sterické vlastnosti nevyhnutné pre určité dráhy syntézy HALS.',
          },
          {
            feature: 'Prekurzor HALS',
            description:
              'Špecificky navrhnutý medziproduk na výrobu Tinuvin 765/292 a iných komerčných svetelných stabilizátorov s osvedčeným výkonom.',
          },
          {
            feature: 'Vysokočistý produkt',
            description:
              'Dodávaný s minimálnou čistotou 97%, zabezpečujúc konzistentnú reaktivitu a výkon v náročných syntetických aplikáciách.',
          },
          {
            feature: 'Sterická prekážka',
            description:
              'Poskytuje optimálny sterický objem okolo dusíkového centra, rozhodujúci pre účinnosť odvodených HALS zlúčenín.',
          },
          {
            feature: 'Syntetická odbornosť VUP',
            description:
              'Vyrábaný využívajúc špecializované znalosti VUP v chémii bránených amínov so spoľahlivým dodávaním a zabezpečovaním kvality.',
          },
        ],
        faq: [
          {
            question: 'Aké je primárne použitie 1,2,2,6,6-Pentametylpiperidínu?',
            answer:
              'Primárne sa používa ako medziproduk v syntéze špecifických HALS ako Tinuvin 765/292, poskytujúc N-metylovanú bránenú amínovú štruktúru potrebnú pre tieto svetelné stabilizátory.',
          },
          {
            question: 'Ako N-metylová skupina ovplyvňuje jeho chemické vlastnosti?',
            answer:
              'N-metylová skupina znižuje zásaditosť v porovnaní so sekundárnymi amínmi a poskytuje špecifické sterické a elektronické vlastnosti nevyhnutné pre určité dráhy syntézy HALS.',
          },
          {
            question: 'Akú úroveň čistoty ponúka VUP pre túto zlúčeninu?',
            answer:
              'VUP dodáva 1,2,2,6,6-Pentametylpiperidín s minimálnou čistotou 97%, zabezpečujúc konzistentnú reaktivitu a výkon v náročných syntetických aplikáciách.',
          },
          {
            question: 'Môže sa táto zlúčenina použiť v iných aplikáciách okrem syntézy HALS?',
            answer:
              'Áno, slúži ako všestranný stavebný blok na tvorbu iných stericky bránených dusíkatých zlúčenín vo farmaceutickej a špeciálno-chemickej syntéze.',
          },
          {
            question: 'Aké bezpečnostné opatrenia sú potrebné pri manipulácii s touto zlúčeninou?',
            answer:
              'Manipulovať ako špecializovanú chemikáliu s vhodným OOP. Môže spôsobiť podráždenie kože, očí a dýchacích ciest. Vždy sa obráťte na oficiálny SDS pre úplné bezpečnostné informácie.',
          },
        ],
      },
    }),
    payload.update({
      collection: 'products',
      id: pentamethylpiperidinol.id,
      locale: 'sk',
      data: {
        name: '1,2,2,6,6-Pentametyl-4-piperidínol',
        description:
          'Funkcionalizovaný N-metylovaný bránený amín obsahujúci hydroxylovú skupinu, používaný ako medziproduk pre syntézu HALS (napr. Tinuvin 765/292). Kombinácia N-metyl a hydroxylových funkcionalít poskytuje jedinečnú reaktivitu.',
        applications: [
          {
            application: 'Syntéza HALS',
            description:
              'Kritický medziproduk na syntézu Tinuvin 765/292, kde sú potrebné N-metyl aj hydroxylové funkcionality pre štruktúru konečného produktu.',
            image: demoImageDoc.id,
          },
          {
            application: 'Syntéza špeciálnych chemikálií',
            description:
              'Stavebný blok na tvorbu komplexných derivátov bránených amínov vyžadujúcich duálnu funkcionalitu terciárneho dusíka a sekundárneho alkoholu.',
            image: demoImageDoc.id,
          },
          {
            application: 'Farmaceutické medziprodukty',
            description:
              'Používa sa v syntéze farmaceutických zlúčenín, kde stericky bránené aminoalkoholové štruktúry poskytujú požadovanú biologickú aktivitu.',
            image: demoImageDoc.id,
          },
          {
            application: 'Vývoj polymérnych aditív',
            description:
              'Medziproduk na vývoj nových polymérnych stabilizátorov a aditív vyžadujúcich špecifické sterické a elektronické vlastnosti.',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Duálna funkcionalita',
            description:
              'Obsahuje N-metyl aj hydroxylové skupiny, poskytujúc jedinečné reaktivitné vzory nevyhnutné pre špecifické trasy syntézy HALS.',
          },
          {
            feature: 'Vysoké štandardy čistoty',
            description:
              'Dodávaný s minimálnou čistotou 98% s VUP laboratórnym overením zabezpečujúcim konzistentnú kvalitu pre náročné syntetické aplikácie.',
          },
          {
            feature: 'Stericky bránený alkohol',
            description:
              'Hydroxylová skupina je umiestnená v stericky bránenom prostredí, poskytujúc selektívnu reaktivitu v chemických transformáciách.',
          },
          {
            feature: 'Prekurzor Tinuvin',
            description:
              'Špecificky navrhnutý medziproduk pre výrobu komerčných HALS, osobitne syntézne dráhy Tinuvin 765/292.',
          },
          {
            feature: 'Výrobná excelentnosť VUP',
            description:
              'Vyrábaný využívajúc špecializovanú odbornosť VUP v chémii bránených amínov s osvedčenou históriou kvality a spoľahlivosti.',
          },
        ],
        faq: [
          {
            question: 'Čo robí 1,2,2,6,6-Pentametyl-4-piperidínol jedinečným v syntéze HALS?',
            answer:
              'Obsahuje N-metyl aj hydroxylové funkcionality v stericky bránenom prostredí, čo ho robí nevyhnutným pre syntézu špecifických HALS ako Tinuvin 765/292.',
          },
          {
            question: 'Ako hydroxylová skupina ovplyvňuje jeho reaktivitu?',
            answer:
              'Stericky bránená hydroxylová skupina poskytuje selektívnu reaktivitu, umožňujúc špecifické chemické transformácie pri ochrane dusíkového centra.',
          },
          {
            question: 'Akú úroveň čistoty ponúka VUP pre túto zlúčeninu?',
            answer:
              'VUP dodáva túto zlúčeninu s minimálnou čistotou 98%, laboratórne overenú pre konzistentný výkon v náročných aplikáciách syntézy HALS.',
          },
          {
            question: 'Môže sa tento medziproduk použiť pre aplikácie iné ako HALS?',
            answer:
              'Áno, slúži ako všestranný stavebný blok pre farmaceutické medziprodukty a špeciálne chemikálie vyžadujúce stericky bránené aminoalkoholové štruktúry.',
          },
          {
            question: 'Aké sú typické požiadavky na manipuláciu a skladovanie?',
            answer:
              'Skladovať v chladných, suchých podmienkach mimo silných oxidačných činidiel. Manipulovať s vhodným OOP a obrátiť sa na SDS pre úplné bezpečnostné a skladovacie informácie.',
          },
        ],
      },
    }),
    payload.update({
      collection: 'products',
      id: aminoTmp.id,
      locale: 'sk',
      data: {
        name: '4-Amino-2,2,6,6-tetrametylpiperidín',
        description:
          'Stericky bránený primárny amínový medziproduk rozhodujúci pre syntézu špecializovaných HALS zlúčenín a farmaceutických medziproduktov. Primárna aminoskupina poskytuje výbornú reaktivitu, zatiaľ čo bránená štruktúra ponúka stabilitu a jedinečné chemické vlastnosti pre pokročilé aplikácie.',
        applications: [
          {
            application: 'Syntéza HALS',
            description:
              'Primárne používaný na syntézu pokročilých svetelných stabilizátorov a UV protektorov pre polyméry vyžadujúce výnimočnú odolnosť voči fotodegradácii.',
            image: demoImageDoc.id,
          },
          {
            application: 'Farmaceutické medziprodukty',
            description:
              'Cenný stavebný blok na syntézu farmaceutických zlúčenín a kandidátov na lieky využívajúcich stericky bránené amínové štruktúry pre biologickú aktivitu.',
            image: demoImageDoc.id,
          },
          {
            application: 'Špeciálno-chemická syntéza',
            description:
              'Používa sa na vývoj pokročilých katalyzátorov, stabilizátorov a funkčných molekúl vyžadujúcich jedinečnú kombináciu reaktivity a sterických vlastností.',
            image: demoImageDoc.id,
          },
          {
            application: 'Výskum a vývoj',
            description:
              'Nevyhnutný nástroj v akademickom a priemyselnom výskume na štúdium sterickej prekážky a vývoj nových chemických entít s pokročilými vlastnosťami.',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Primárna amínová funkcionalita',
            description:
              'Ponúka vysokú reaktivitu pre derivatizáciu a syntézu komplexných molekúl pri zachovaní stability z bránenej piperidínovej štruktúry.',
          },
          {
            feature: 'Vysokočistý kvalitný štandard',
            description:
              'Dodávaný s minimálnou čistotou 98%, laboratórne overený pre zabezpečenie konzistentného výkonu v náročných syntetických a výskumných aplikáciách.',
          },
          {
            feature: 'Výnimočná stabilita',
            description:
              'Kombinuje termálnu stabilitu a odolnosť voči oxidácii s reaktívnou aminoskupinou, poskytujúc optimálnu rovnováhu medzi výkonom a spracovateľnosťou.',
          },
          {
            feature: 'Všestranná reaktivita',
            description:
              'Slúži ako platforma na tvorbu rôznych derivátov bránených amínov v syntéze HALS, farmaceutikách a špeciálnych chemikáliách.',
          },
          {
            feature: 'Syntetická odbornosť VUP',
            description:
              'Vyrábaný využívajúc špecializované znalosti VUP v chémii bránených amínov s osvedčenou históriou kvality a spoľahlivosti dodávok.',
          },
        ],
        faq: [
          {
            question: 'Čo robí 4-Amino-TMP jedinečným v porovnaní s inými bránenými amínmi?',
            answer:
              'Obsahuje primárnu aminoskupinu v stericky bránenom prostredí, poskytujúc vysokú reaktivitu pre derivatizáciu a výbornú stabilitu z bránenej piperidínovej štruktúry.',
          },
          {
            question: 'Aké sú hlavné syntetické aplikácie pre túto zlúčeninu?',
            answer:
              'Primárne sa používa ako medziproduk pre syntézu HALS, farmaceutický vývoj a výrobu špeciálnych chemikálií vyžadujúcich funkcionalitu bránených amínov.',
          },
          {
            question: 'Ako sterická prekážka ovplyvňuje jeho chemické vlastnosti?',
            answer:
              'Prekážka poskytuje termálnu stabilitu a odolnosť voči oxidácii, zatiaľ čo primárna aminoskupina zostáva prístupná pre selektívne chemické reakcie.',
          },
          {
            question: 'Akú úroveň čistoty ponúka VUP pre 4-Amino-TMP?',
            answer:
              'VUP dodáva túto zlúčeninu s minimálnou čistotou 98%, laboratórne overenú pre zabezpečenie konzistentného výkonu v náročných syntetických a výskumných aplikáciách.',
          },
          {
            question: 'Môže sa tento medziproduk použiť vo farmaceutickej syntéze?',
            answer:
              'Áno, slúži ako cenný stavebný blok pre farmaceutické medziprodukty a kandidátov na lieky vyžadujúcich stericky bránené amínové štruktúry.',
          },
          {
            question: 'Aké sú typické požiadavky na skladovanie a manipuláciu?',
            answer:
              'Skladovať v chladných, suchých podmienkach mimo silných kyselín a oxidačných činidiel. Manipulovať s vhodným OOP a obrátiť sa na SDS pre úplné bezpečnostné informácie.',
          },
        ],
      },
    }),
  ])

  // --------------------
  // ADDING JAPANESE TRANSLATIONS FOR PRODUCTS (BATCH 6: PENTAMETHYLPIPERIDINE, PENTAMETHYLPIPERIDINOL, AMINO-TMP)
  // --------------------

  payload.logger.info('- Adding Japanese translations for sixth batch of products...')

  await Promise.all([
    payload.update({
      collection: 'products',
      id: pentamethylpiperidine.id,
      locale: 'jp',
      data: {
        name: '1,2,2,6,6-ペンタメチルピペリジン',
        description:
          'Tinuvin 765/292などの特定のタイプのHALS（立体障害アミン光安定剤）や、この特殊なピペリジン構造を必要とする他の機能性分子の合成に使用されるN-メチル化立体障害アミン中間体。',
        applications: [
          {
            application: 'HALS合成',
            description:
              'ポリマー安定化用途で使用されるTinuvin 765/292および関連高性能HALS化合物の合成における重要な中間体。',
            image: demoImageDoc.id,
          },
          {
            application: '有機合成',
            description:
              '製薬および特殊化学品合成における立体障害窒素含有化合物の作成のための多用途構築ブロック。',
            image: demoImageDoc.id,
          },
          {
            application: '研究用途',
            description:
              '新しい立体障害アミン誘導体の開発および化学反応における立体障害効果の研究のための学術および産業研究で使用。',
            image: demoImageDoc.id,
          },
          {
            application: 'カスタム化学製造',
            description:
              '特定のN-メチル化立体障害アミン構造を必要とする受託製造およびカスタム合成プロジェクトの中間体。',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'N-メチル化構造',
            description:
              'N-メチル基は特定のHALS合成経路に必須な特定の反応性パターンと立体的性質を提供します。',
          },
          {
            feature: 'HALS前駆体',
            description:
              '実証済み性能を持つTinuvin 765/292およびその他の商業光安定剤の製造のために特別に設計された中間体。',
          },
          {
            feature: '高純度製品',
            description:
              '最低97%純度で供給され、厳しい合成用途での一貫した反応性と性能を確保します。',
          },
          {
            feature: '立体障害',
            description:
              '窒素中心周囲の最適な立体的嵩張りを提供し、誘導HALS化合物の効果に重要です。',
          },
          {
            feature: 'VUP合成専門知識',
            description:
              '信頼性の高い供給と品質保証とともに立体障害アミン化学におけるVUP専門知識を活用して製造。',
          },
        ],
        faq: [
          {
            question: '1,2,2,6,6-ペンタメチルピペリジンの主な用途は何ですか？',
            answer:
              '主にTinuvin 765/292などの特定のHALS合成の中間体として使用され、これらの光安定剤に必要なN-メチル化立体障害アミン構造を提供します。',
          },
          {
            question: 'N-メチル基はその化学的性質にどのような影響を与えますか？',
            answer:
              'N-メチル基は第二級アミンと比較して塩基性を低下させ、特定のHALS合成経路に必須な特定の立体的および電子的性質を提供します。',
          },
          {
            question: 'VUPはこの化合物をどの純度レベルで提供していますか？',
            answer:
              'VUPは厳しい合成用途での一貫した反応性と性能を確保する最低97%純度で1,2,2,6,6-ペンタメチルピペリジンを供給しています。',
          },
          {
            question: 'この化合物はHALS合成以外の用途で使用できますか？',
            answer:
              'はい、製薬および特殊化学品合成における他の立体障害窒素化合物の作成のための多用途構築ブロックとして機能します。',
          },
          {
            question: 'この化合物の取扱いで必要な安全予防措置は何ですか？',
            answer:
              '適切なPPEで特殊化学品として取扱い。皮膚、眼、呼吸器刺激を引き起こす可能性があります。完全な安全情報については常に公式SDSを参照してください。',
          },
        ],
      },
    }),
    payload.update({
      collection: 'products',
      id: pentamethylpiperidinol.id,
      locale: 'jp',
      data: {
        name: '1,2,2,6,6-ペンタメチル-4-ピペリジノール',
        description:
          'ヒドロキシル基を含む機能化N-メチル化立体障害アミンで、HALS合成（例：Tinuvin 765/292）の中間体として使用されます。N-メチルとヒドロキシル官能基の組み合わせが独特の反応性を提供します。',
        applications: [
          {
            application: 'HALS合成',
            description:
              '最終製品構造にN-メチルとヒドロキシル官能基の両方が必要なTinuvin 765/292合成の重要な中間体。',
            image: demoImageDoc.id,
          },
          {
            application: '特殊化学品合成',
            description:
              '第三級窒素と第二級アルコールの二重機能性を必要とする複雑な立体障害アミン誘導体の作成のための構築ブロック。',
            image: demoImageDoc.id,
          },
          {
            application: '医薬中間体',
            description:
              '立体障害アミノアルコール構造が望ましい生物活性を提供する医薬化合物の合成で使用。',
            image: demoImageDoc.id,
          },
          {
            application: 'ポリマー添加剤開発',
            description:
              '特定の立体的および電子的性質を必要とする新しいポリマー安定剤および添加剤の開発のための中間体。',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: '二重機能性',
            description:
              'N-メチルとヒドロキシル基の両方を含み、特定のHALS合成ルートに必須な独特の反応性パターンを提供します。',
          },
          {
            feature: '高純度基準',
            description:
              '厳しい合成用途での一貫した品質を確保するVUP実験室検証とともに最低98%純度で供給。',
          },
          {
            feature: '立体障害アルコール',
            description:
              'ヒドロキシル基は立体障害環境に位置し、化学変換において選択的反応性を提供します。',
          },
          {
            feature: 'Tinuvin前駆体',
            description:
              '商業HALS製造、特にTinuvin 765/292合成経路のために特別に設計された中間体。',
          },
          {
            feature: 'VUP製造卓越性',
            description:
              '品質と信頼性において実証済みの実績を持つVUP専門立体障害アミン化学専門知識を使用して製造。',
          },
        ],
        faq: [
          {
            question: '1,2,2,6,6-ペンタメチル-4-ピペリジノールがHALS合成で独特である理由は？',
            answer:
              '立体障害環境でN-メチルとヒドロキシル官能基の両方を含み、Tinuvin 765/292などの特定のHALS合成に必須です。',
          },
          {
            question: 'ヒドロキシル基はその反応性にどのような影響を与えますか？',
            answer:
              '立体障害ヒドロキシル基は選択的反応性を提供し、窒素中心を保護しながら特定の化学変換を可能にします。',
          },
          {
            question: 'VUPはこの化合物をどの純度レベルで提供していますか？',
            answer:
              'VUPは厳しいHALS合成用途での一貫した性能のために実験室検証された最低98%純度でこの化合物を供給しています。',
          },
          {
            question: 'この中間体はHALS以外の用途で使用できますか？',
            answer:
              'はい、立体障害アミノアルコール構造を必要とする医薬中間体および特殊化学品のための多用途構築ブロックとして機能します。',
          },
          {
            question: '典型的な取扱いと保管要件は何ですか？',
            answer:
              '強力な酸化剤から離れた涼しく乾燥した条件で保管。適切なPPEで取扱い、完全な安全および保管情報についてはSDSを参照してください。',
          },
        ],
      },
    }),
    payload.update({
      collection: 'products',
      id: aminoTmp.id,
      locale: 'jp',
      data: {
        name: '4-アミノ-2,2,6,6-テトラメチルピペリジン',
        description:
          '特殊HALS化合物および医薬中間体の合成に重要な立体障害第一級アミン中間体。第一級アミノ基は優れた反応性を提供し、立体障害構造は高度な用途のための安定性と独特の化学的性質を提供します。',
        applications: [
          {
            application: 'HALS合成',
            description:
              '光劣化に対する卓越した抵抗性を必要とするポリマー用の高度な光安定剤およびUV保護剤の合成に主に使用。',
            image: demoImageDoc.id,
          },
          {
            application: '医薬中間体',
            description:
              '生物活性のための立体障害アミン構造を利用する医薬化合物および薬物候補の合成のための価値ある構築ブロック。',
            image: demoImageDoc.id,
          },
          {
            application: '特殊化学品合成',
            description:
              '反応性と立体的性質の独特な組み合わせを必要とする高度な触媒、安定剤、機能性分子の開発に使用。',
            image: demoImageDoc.id,
          },
          {
            application: '研究開発',
            description:
              '立体障害の研究および高度な性質を持つ新しい化学実体の開発における学術および産業研究の必須ツール。',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: '第一級アミン官能性',
            description:
              '立体障害ピペリジン構造からの安定性を維持しながら、誘導体化および複雑な分子の合成のための高い反応性を提供。',
          },
          {
            feature: '高純度品質基準',
            description:
              '厳しい合成および研究用途での一貫した性能を確保するために実験室検証された最低98%純度で供給。',
          },
          {
            feature: '卓越した安定性',
            description:
              '熱安定性と酸化抵抗性を反応性アミノ基と組み合わせ、性能と加工性の最適なバランスを提供。',
          },
          {
            feature: '多用途反応性',
            description:
              'HALS、医薬品、特殊化学品合成における多様な立体障害アミン誘導体の作成のためのプラットフォームとして機能。',
          },
          {
            feature: 'VUP合成専門知識',
            description:
              '品質と供給信頼性において実証済みの実績を持つ立体障害アミン化学におけるVUP専門知識を活用して製造。',
          },
        ],
        faq: [
          {
            question: '4-アミノ-TMPが他の立体障害アミンと比較して独特である理由は？',
            answer:
              '立体障害環境で第一級アミノ基を含み、誘導体化のための高い反応性と立体障害ピペリジン構造からの優れた安定性の両方を提供します。',
          },
          {
            question: 'この化合物の主な合成用途は何ですか？',
            answer:
              '主にHALS合成、医薬品開発、立体障害アミン機能性を必要とする特殊化学品製造の中間体として使用されます。',
          },
          {
            question: '立体障害はその化学的性質にどのような影響を与えますか？',
            answer:
              '障害は熱安定性と酸化抵抗性を提供し、第一級アミノ基は選択的化学反応のためにアクセス可能なままです。',
          },
          {
            question: 'VUPは4-アミノ-TMPをどの純度レベルで提供していますか？',
            answer:
              'VUPは厳しい合成および研究用途での一貫した性能を確保するために実験室検証された最低98%純度でこの化合物を供給しています。',
          },
          {
            question: 'この中間体は医薬品合成で使用できますか？',
            answer:
              'はい、立体障害アミン構造を必要とする医薬中間体および薬物候補のための価値ある構築ブロックとして機能します。',
          },
          {
            question: '典型的な保管と取扱い要件は何ですか？',
            answer:
              '強酸と酸化剤から離れた涼しく乾燥した条件で保管。適切なPPEで取扱い、完全な安全情報についてはSDSを参照してください。',
          },
        ],
      },
    }),
  ])

  // --------------------
  // ADDING TRANSLATIONS FOR BATCH 7 PRODUCTS (HALS770, HALS765, AMINO-TEMPO)
  // --------------------

  payload.logger.info('- Adding Slovak translations for batch 7 products...')

  await Promise.all([
    payload.update({
      collection: 'products',
      id: hals770.id,
      locale: 'sk',
      data: {
        name: 'bis(2,2,6,6-tetrametyl-4-piperidyl) sebakát',
        description:
          'Priemyselný štandard vysokomolekulárnych HALS (ekvivalent Tinuvin 770) poskytujúci vynikajúcu UV ochranu pre polyolefíny, ABS a iné polymery. Nízka prchavosť a výborná tepelná stabilita ho robí ideálnym pre náročné vonkajšie aplikácie vyžadujúce dlhodobý výkon.',
        applications: [
          {
            application: 'Stabilizácia polyolefínov',
            description:
              'Primárna aplikácia v PP, PE a iných polyolefínoch pre vonkajšie použitie vyžadujúce vynikajúcu UV ochranu. Poskytuje dlhodobú stabilitu proti fotodegradácii a udržuje mechanické vlastnosti.',
            image: demoImageDoc.id,
          },
          {
            application: 'Ochrana ABS',
            description:
              'Vysoko účinný v ABS živiciach pre automobilové, spotrebičové a vonkajšie aplikácie. Zabraňuje žltnutiu a krehkosti pri zachovaní rázovej pevnosti a kvality povrchu.',
            image: demoImageDoc.id,
          },
          {
            application: 'Vláknové aplikácie',
            description:
              'Používa sa v polypropylénových vláknach pre vonkajšie textílie, koberce a geotextílie. Zabezpečuje uchovanie farby a zabraňuje degradácii v náročných environmentálnych podmienkach.',
            image: demoImageDoc.id,
          },
          {
            application: 'Automobilové komponenty',
            description:
              'Kritický pre automobilové plasty vystavené UV žiareniu vrátane nárazníkov, výzdoby a vnútorných komponentov. Poskytuje trvanlivosť a uchovanie vzhľadu počas životnosti vozidla.',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Vysoká molekulová hmotnosť',
            description:
              'Nízka prchavosť a výborná trvalá prítomnosť v polymernej matrici, minimalizuje migráciu a zabezpečuje dlhodobú stabilizačnú účinnosť.',
          },
          {
            feature: 'Overený priemyselný štandard',
            description:
              'Ekvivalent Tinuvin 770 s desaťročiami overeného výkonu v rôznych polymerných aplikáciách a environmentálnych podmienkach.',
          },
          {
            feature: 'Výborná tepelná stabilita',
            description:
              'Udržuje účinnosť pri vysokých spracovateľských teplotách a poskytuje dlhodobú stabilitu v náročných tepelných prostrediach.',
          },
          {
            feature: 'Široká kompatibilita polymérov',
            description:
              'Kompatibilný so širokou škálou polymérov a spracovateľských podmienok, ponúka formulátorom flexibilitu v stabilizačných stratégiách.',
          },
          {
            feature: 'VUP zabezpečenie kvality',
            description:
              'Vyrobený s expertízou VUP v HALS chémii zabezpečujúc konzistentnú kvalitu, čistotu a spoľahlivosť výkonu.',
          },
        ],
        faq: [
          {
            question: 'Ktoré polymery môže HALS 770 účinne stabilizovať?',
            answer:
              'Obzvlášť účinný v polyolefínoch (PP, PE), ABS a polystyréne, poskytuje vynikajúcu UV ochranu a udržuje vlastnosti polymérov vo vonkajších aplikáciách.',
          },
          {
            question: 'Ako sa HALS 770 porovnáva s inými svetelnými stabilizátormi?',
            answer:
              'Ponúka vynikajúcu dlhodobú účinnosť vďaka regeneratívnemu mechanizmu, vysokej tepelnej stabilite a nízkej prchavosti v porovnaní s konvenčnými UV absorbérmi.',
          },
          {
            question: 'Aká je typická úroveň použitia pre HALS 770?',
            answer:
              'Všeobecne sa používa pri 0,1-0,5 % hmotnostných v závislosti od požiadaviek aplikácie, typu polyméru a požadovanej úrovne UV ochrany.',
          },
          {
            question: 'Môže sa HALS 770 kombinovať s inými stabilizátormi?',
            answer:
              'Áno, často sa používa synergicky s UV absorbérmi a antioxidantmi pre komplexnú stabilizáciu polymérov v náročných aplikáciách.',
          },
          {
            question: 'Aké obmedzenia spracovateľskej teploty by sa mali zvážiť?',
            answer:
              'Stabilný až do 300°C počas spracovania, čo ho robí vhodným pre väčšinu polymerných spracovateľských podmienok bez rozkladu alebo straty výkonu.',
          },
          {
            question: 'Ako VUP zabezpečuje konzistentnosť kvality pre tento produkt?',
            answer:
              'VUP používa prísnu laboratórnu verifikáciu, konzistentné protokoly syntézy a kontrolu kvality testovanie pre zabezpečenie spoľahlivosti z dávky na dávku.',
          },
        ],
      },
    }),
    payload.update({
      collection: 'products',
      id: hals765.id,
      locale: 'sk',
      data: {
        name: 'bis(1,2,2,6,6-pentametyl-4-piperidyl) sebakát',
        description:
          'Vysokovýkonný kvapalný HALS svetelný stabilizátor poskytujúci výnimočnú UV ochranu pre nátery, farby a plasty. Vyznačuje sa výbornou tepelnou stabilitou a širokou kompatibilitou polymérov. VUP Lab Verified Synthesis zabezpečuje konzistentnú kvalitu.',
        applications: [
          {
            application: 'Automobilové nátery',
            description:
              'Poskytuje dlhodobú UV ochranu pre automobilové vrchné nátery a transparentné nátery, udržuje lesk a zabraňuje degradácii farby v drsných vonkajších podmienkach.',
            image: demoImageDoc.id,
          },
          {
            application: 'Tlačiarenské farby',
            description:
              'Zabezpečuje svetelnú stabilitu v UV-vytvrditeľných a rozpúšťadlových tlačiarenských farbách, zabraňuje vyblednutiu farby a udržuje kvalitu tlače v čase.',
            image: demoImageDoc.id,
          },
          {
            application: 'Priemyselné nátery',
            description:
              'Stabilizuje vysokovýkonné priemyselné nátery proti UV degradácii, predlžuje životnosť služby vo vonkajších architektonických a námorných aplikáciách.',
            image: demoImageDoc.id,
          },
          {
            application: 'Drevené povrchové úpravy',
            description:
              'Chráni drevené moriadka a laky pred UV-indukovaným sfarbením a degradáciou, udržuje estetický vzhľad a výkon.',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Spracovanie kvapalnej formy',
            description:
              'Kvapalný stav umožňuje jednoduché začlenenie do formulácií bez požiadaviek na mletie alebo disperziu, zjednodušuje výrobné procesy.',
          },
          {
            feature: 'Nízka prchavosť',
            description:
              'Udržuje účinnosť počas vysokoteplotného spracovania a poskytuje dlhodobú stabilitu bez významnej straty počas aplikácie.',
          },
          {
            feature: 'Výborná kompatibilita',
            description:
              'Kompatibilný so širokou škálou živíc, rozpúšťadiel a iných prísad, ponúka formulátorom maximálnu flexibilitu v návrhu systému.',
          },
          {
            feature: 'Regeneratívny mechanizmus',
            description:
              'HALS mechanizmus regeneruje stabilizátor, poskytuje vynikajúcu dlhodobú ochranu v porovnaní s obetovnými UV absorbérmi.',
          },
          {
            feature: 'Tepelná stabilita',
            description:
              'Odoláva spracovateľským teplotám až do 280°C bez rozkladu, vhodný pre vysokoteplotné náterové a farebné aplikácie.',
          },
        ],
        faq: [
          {
            question: 'Aká je odporúčaná dávka pre HALS 765?',
            answer:
              'Typicky sa používa pri 0,2-1,0 % hmotnostných v závislosti od požiadaviek aplikácie a požadovanej úrovne UV ochrany. Vyššie koncentrácie poskytujú zvýšenú trvanlivosť.',
          },
          {
            question: 'Môže sa HALS 765 používať s inými svetelnými stabilizátormi?',
            answer:
              'Áno, často sa kombinuje synergicky s UV absorbérmi ako benzotriazoly alebo benzofenóny pre komplexné svetelné stabilizačné systémy.',
          },
          {
            question: 'Čo robí kvapalné HALS výhodné oproti pevným formám?',
            answer:
              'Kvapalná forma eliminuje mletie, znižuje prašnosť, zabezpečuje rovnomernú distribúciu a zjednodušuje manipuláciu v automatizovaných výrobných procesoch.',
          },
          {
            question: 'Ako HALS 765 funguje vo vodných systémoch?',
            answer:
              'Hoci je primárne navrhnutý pre systémy na báze rozpúšťadiel, môže byť začlenený do vodných formulácií pomocou vhodných emulgačných techník.',
          },
          {
            question: 'Aké podmienky skladovania sa odporúčajú pre HALS 765?',
            answer:
              'Skladovať v chladných, suchých podmienkach mimo priameho slnečného svetla. Udržiavať teplotu pod 40°C a zabezpečiť, aby boli nádoby tesne uzavreté pre predchádzanie kontaminácii.',
          },
          {
            question: 'Ako VUP zabezpečuje konzistentnosť kvality pre tento produkt?',
            answer:
              'VUP používa prísne protokoly syntézy, komplexné analytické testovanie a verifikáciu z dávky na dávku pre zabezpečenie konzistentnej čistoty a výkonu.',
          },
        ],
      },
    }),
    payload.update({
      collection: 'products',
      id: aminoTempo.id,
      locale: 'sk',
      data: {
        name: '4-Amino-TEMPO',
        description:
          'Amino-funkcionalizovaný TEMPO radikál vyznačujúci sa stabilnou nitroxylovou funkcionalitou kombinovanou s reaktívnou aminoskupinou. Ideálny pre spin labeling, biokonjugáciu a výskum pokročilých materiálov. VUP Lab Researched kvalita.',
        applications: [
          {
            application: 'EPR Spin Labeling',
            description:
              'Používa sa ako paramagnetická sonda v štúdiách elektrónovej paramagnetickej rezonancie pre skúmanie molekulárnej dynamiky a konformačných zmien proteínov.',
            image: demoImageDoc.id,
          },
          {
            application: 'Biokonjugačná chémia',
            description:
              'Aminoskupina umožňuje spojenie s biomolekulami prostredníctvom tvorby amidovej väzby, vytvárajúc spin-označené proteíny, peptidy a nukleové kyseliny pre biofyzikálne štúdie.',
            image: demoImageDoc.id,
          },
          {
            application: 'Modifikácia polymérov',
            description:
              'Začleňuje stabilnú radikálovú funkcionalitu do polymerných reťazcov pre vývoj materiálov s jedinečnými magnetickými a elektronickými vlastnosťami.',
            image: demoImageDoc.id,
          },
          {
            application: 'Redoxná chémia',
            description:
              'Slúži ako mediátor v elektrochemických procesoch a oxidačných reakciách, obzvlášť užitočný v organickej syntéze a katalytických aplikáciách.',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Stabilita perzistentného radikálu',
            description:
              'Udržuje radikálový charakter za okolitých podmienok bez dimerizácie, poskytuje spoľahlivé paramagnetické vlastnosti pre analytické aplikácie.',
          },
          {
            feature: 'Duálna funkcionalita',
            description:
              'Kombinuje stabilný nitroxylový radikál s reaktívnou aminoskupinou, umožňuje všestranné chemické modifikácie a konjugačné stratégie.',
          },
          {
            feature: 'Vysoká čistota',
            description:
              'VUP výskumná kvalita zabezpečuje minimálne nečistoty, ktoré by mohli interferovať s citlivými spektroskopickými a biologickými aplikáciami.',
          },
          {
            feature: 'Kompatibilita s vodou',
            description:
              'Mierna rozpustnosť vo vode umožňuje použitie vo vodných biologických systémoch a fyziologických podmienkach pre biomedicínsky výskum.',
          },
        ],
        faq: [
          {
            question: 'Ako stabilná je radikálová funkcionalita 4-Amino-TEMPO?',
            answer:
              'Extrémne stabilná za normálnych podmienok. Stericky bránená štruktúra zabraňuje radikálovej dimerizácii, udržuje paramagnetické vlastnosti nekonečne pri správnom skladovaní.',
          },
          {
            question: 'Aké spojové reakcie môžu byť vykonané s aminoskupinou?',
            answer:
              'Aminoskupina ľahko tvorí amidové väzby s karboxylovými kyselinami/estermi, reaguje s aldehydmi/ketónmi a účastní sa rôznych kondenzačných reakcií.',
          },
          {
            question: 'Je 4-Amino-TEMPO vhodný pre biologické aplikácie?',
            answer:
              'Áno, bežne sa používa v označovaní proteínov a biofyzikálnych štúdiách. Avšak cytotoxicita by mala byť vyhodnotená pre každý špecifický biologický systém.',
          },
          {
            question: 'Aké sú požiadavky na skladovanie pre 4-Amino-TEMPO?',
            answer:
              'Skladovať v tmavých, chladných podmienkach pod inertnou atmosférou. Vyhnúť sa vystaveniu silným redukčným činidlám alebo kyselinám, ktoré by mohli kompromitovať stabilitu radikálu.',
          },
          {
            question: 'Ako sa 4-Amino-TEMPO porovnáva s inými TEMPO derivátmi?',
            answer:
              'Amino funkcionalita poskytuje jedinečnú reaktivitu pri zachovaní stability TEMPO radikálu, ponúka výhody oproti hydroxylovým alebo karboxylovým TEMPO variantom.',
          },
        ],
      },
    }),
  ])

  payload.logger.info('- Adding Japanese translations for batch 7 products...')

  await Promise.all([
    payload.update({
      collection: 'products',
      id: hals770.id,
      locale: 'jp',
      data: {
        name: 'ビス(2,2,6,6-テトラメチル-4-ピペリジル)セバケート',
        description:
          'ポリオレフィン、ABS、その他のポリマーに優れたUV保護を提供する業界標準の高分子量HALS（Tinuvin 770相当）。低揮発性と優れた熱安定性により、長期性能を要求する厳しい屋外用途に理想的です。',
        applications: [
          {
            application: 'ポリオレフィン安定化',
            description:
              '優れたUV保護を要求する屋外用途のPP、PE、その他のポリオレフィンでの主要用途。光分解に対する長期安定性を提供し、機械的特性を維持します。',
            image: demoImageDoc.id,
          },
          {
            application: 'ABS保護',
            description:
              '自動車、家電、屋外用途のABS樹脂で高い効果を発揮。黄変と脆化を防ぎながら、耐衝撃性と表面品質を維持します。',
            image: demoImageDoc.id,
          },
          {
            application: '繊維用途',
            description:
              '屋外繊維、カーペット、ジオテキスタイル用ポリプロピレン繊維で使用。厳しい環境条件での色保持を確保し、劣化を防ぎます。',
            image: demoImageDoc.id,
          },
          {
            application: '自動車部品',
            description:
              'バンパー、トリム、内装部品を含むUV放射に曝される自動車プラスチックに重要。車両寿命にわたる耐久性と外観保持を提供します。',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: '高分子量',
            description:
              '低揮発性とポリマーマトリックス中での優れた永続性により、移行を最小化し長期安定化効果を確保します。',
          },
          {
            feature: '実証済み業界標準',
            description:
              'Tinuvin 770相当で、複数のポリマー用途と環境条件で数十年の実証された性能を持ちます。',
          },
          {
            feature: '優れた熱安定性',
            description: '高加工温度で効果を維持し、厳しい熱環境で長期安定性を提供します。',
          },
          {
            feature: '広範なポリマー適合性',
            description:
              '幅広いポリマーと加工条件に適合し、配合者に安定化戦略の柔軟性を提供します。',
          },
          {
            feature: 'VUP品質保証',
            description:
              'HALS化学におけるVUPの専門知識で製造され、一貫した品質、純度、性能信頼性を確保します。',
          },
        ],
        faq: [
          {
            question: 'HALS 770はどのポリマーを効果的に安定化できますか？',
            answer:
              'ポリオレフィン（PP、PE）、ABS、ポリスチレンで特に効果的で、屋外用途での優れたUV保護とポリマー特性維持を提供します。',
          },
          {
            question: 'HALS 770は他の光安定剤と比較してどうですか？',
            answer:
              '再生機構、高熱安定性、低揮発性により、従来のUV吸収剤と比較して優れた長期効果を提供します。',
          },
          {
            question: 'HALS 770の典型的な使用レベルは？',
            answer:
              '用途要件、ポリマータイプ、望ましいUV保護レベルに応じて、一般的に0.1-0.5重量%で使用されます。',
          },
          {
            question: 'HALS 770は他の安定剤と組み合わせできますか？',
            answer:
              'はい、厳しい用途での包括的なポリマー安定化のためにUV吸収剤や酸化防止剤と相乗的に使用されることが多いです。',
          },
          {
            question: '考慮すべき加工温度制限は？',
            answer:
              '加工中300°Cまで安定で、分解や性能損失なしにほとんどのポリマー加工条件に適用可能です。',
          },
          {
            question: 'VUPはこの製品の品質一貫性をどのように確保していますか？',
            answer:
              'VUPは厳格な実験室検証、一貫した合成プロトコル、品質管理試験を採用してバッチ間信頼性を確保しています。',
          },
        ],
      },
    }),
    payload.update({
      collection: 'products',
      id: hals765.id,
      locale: 'jp',
      data: {
        name: 'ビス(1,2,2,6,6-ペンタメチル-4-ピペリジル)セバケート',
        description:
          'コーティング、インク、プラスチックに卓越したUV保護を提供する高性能液体HALS光安定剤。優れた熱安定性と広範なポリマー適合性を特徴とします。VUP Lab Verified Synthesisが一貫した品質を保証します。',
        applications: [
          {
            application: '自動車コーティング',
            description:
              '自動車トップコートとクリアコートに長期UV保護を提供し、厳しい屋外条件での光沢維持と色劣化防止を実現します。',
            image: demoImageDoc.id,
          },
          {
            application: '印刷インク',
            description:
              'UV硬化型および溶剤系印刷インクの光安定性を確保し、色褪せを防ぎ時間経過による印刷品質を維持します。',
            image: demoImageDoc.id,
          },
          {
            application: '工業用コーティング',
            description:
              '高性能工業用コーティングをUV劣化から安定化し、屋外建築・海洋用途での使用寿命を延長します。',
            image: demoImageDoc.id,
          },
          {
            application: '木材仕上げ',
            description:
              '木材ステインとワニスをUV誘起変色・劣化から保護し、美的外観と性能を維持します。',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: '液体形態加工',
            description:
              '液体状態により粉砕や分散要件なしに配合への容易な組み込みが可能で、製造プロセスを簡素化します。',
          },
          {
            feature: '低揮発性',
            description:
              '高温加工中の効果を維持し、適用中の著しい損失なしに長期安定性を提供します。',
          },
          {
            feature: '優れた適合性',
            description:
              '幅広い樹脂、溶剤、その他添加剤と適合し、配合者にシステム設計での最大限の柔軟性を提供します。',
          },
          {
            feature: '再生機構',
            description:
              'HALS機構が安定剤を再生し、犠牲的UV吸収剤と比較して優れた長期保護を提供します。',
          },
          {
            feature: '熱安定性',
            description:
              '分解なしに280°Cまでの加工温度に耐え、高温コーティング・インク用途に適用可能です。',
          },
        ],
        faq: [
          {
            question: 'HALS 765の推奨投与レベルは？',
            answer:
              '用途要件と望ましいUV保護レベルに応じて、通常0.2-1.0重量%で使用されます。高濃度はより高い耐久性を提供します。',
          },
          {
            question: 'HALS 765は他の光安定剤と使用できますか？',
            answer:
              'はい、包括的な光安定化システムのためにベンゾトリアゾールやベンゾフェノンなどのUV吸収剤と相乗的に組み合わせることが多いです。',
          },
          {
            question: '液体HALSが固体形態より有利な理由は？',
            answer:
              '液体形態は粉砕を排除し、粉塵を削減し、均一分布を確保し、自動化製造プロセスでの取扱いを簡素化します。',
          },
          {
            question: 'HALS 765は水系システムでどのように性能を発揮しますか？',
            answer:
              '主に溶剤系システム用に設計されていますが、適切な乳化技術を使用して水系配合に組み込むことができます。',
          },
          {
            question: 'HALS 765の推奨保管条件は？',
            answer:
              '直射日光を避けて涼しく乾燥した条件で保管。40°C以下の温度を維持し、汚染防止のため容器を密閉してください。',
          },
          {
            question: 'VUPはこの製品の品質一貫性をどのように確保していますか？',
            answer:
              'VUPは一貫した純度と性能を確保するために厳格な合成プロトコル、包括的分析試験、バッチ間検証を採用しています。',
          },
        ],
      },
    }),
    payload.update({
      collection: 'products',
      id: aminoTempo.id,
      locale: 'jp',
      data: {
        name: '4-アミノ-TEMPO',
        description:
          '安定なニトロキシル機能性と反応性アミノ基を組み合わせたアミノ官能化TEMPO ラジカル。スピンラベリング、バイオコンジュゲーション、先進材料研究に理想的。VUP Lab Researched品質。',
        applications: [
          {
            application: 'EPRスピンラベリング',
            description:
              '分子動力学とタンパク質構造変化の調査のための電子常磁性共鳴研究で常磁性プローブとして使用されます。',
            image: demoImageDoc.id,
          },
          {
            application: 'バイオコンジュゲーション化学',
            description:
              'アミノ基がアミド結合形成を通じて生体分子との結合を可能にし、生物物理学研究用のスピンラベル化タンパク質、ペプチド、核酸を作成します。',
            image: demoImageDoc.id,
          },
          {
            application: 'ポリマー修飾',
            description:
              '独特な磁気・電子特性を持つ材料開発のために、安定ラジカル機能性をポリマー鎖に組み込みます。',
            image: demoImageDoc.id,
          },
          {
            application: 'レドックス化学',
            description:
              '電気化学プロセスと酸化反応でメディエーターとして機能し、有機合成と触媒用途で特に有用です。',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: '持続ラジカル安定性',
            description:
              '二量化なしに周囲条件下でラジカル特性を維持し、分析用途に信頼性の高い常磁性特性を提供します。',
          },
          {
            feature: '二重機能性',
            description:
              '安定ニトロキシルラジカルと反応性アミノ基を組み合わせ、多様な化学修飾とコンジュゲーション戦略を可能にします。',
          },
          {
            feature: '高純度',
            description:
              'VUP研究グレード品質により、敏感な分光学的・生物学的用途を妨げる可能性のある不純物を最小化します。',
          },
          {
            feature: '水適合性',
            description:
              '中程度の水溶性により、生物医学研究のための水性生物学的システムと生理学的条件での使用が可能です。',
          },
        ],
        faq: [
          {
            question: '4-アミノ-TEMPOのラジカル機能性はどの程度安定ですか？',
            answer:
              '通常条件下で極めて安定です。立体的に阻害された構造がラジカル二量化を防ぎ、適切に保管すれば常磁性特性を無期限に維持します。',
          },
          {
            question: 'アミノ基でどのような結合反応が可能ですか？',
            answer:
              'アミノ基はカルボン酸/エステルと容易にアミド結合を形成し、アルデヒド/ケトンと反応し、様々な縮合反応に参加します。',
          },
          {
            question: '4-アミノ-TEMPOは生物学的用途に適していますか？',
            answer:
              'はい、タンパク質ラベリングと生物物理学研究で一般的に使用されます。ただし、各特定の生物学的システムについて細胞毒性を評価すべきです。',
          },
          {
            question: '4-アミノ-TEMPOの保管要件は？',
            answer:
              '不活性雰囲気下で暗く涼しい条件で保管。ラジカル安定性を損なう可能性のある強還元剤や酸への暴露を避けてください。',
          },
          {
            question: '4-アミノ-TEMPOは他のTEMPO誘導体と比較してどうですか？',
            answer:
              'アミノ機能性がTEMPOラジカル安定性を維持しながら独特の反応性を提供し、ヒドロキシルやカルボキシルTEMPO変異体より利点があります。',
          },
        ],
      },
    }),
  ])

  // --------------------
  // ADDING TRANSLATIONS FOR BATCH 8 PRODUCTS (SPIRO-TEMPO-ACID, GALVINOXYL)
  // --------------------

  payload.logger.info('- Adding Slovak translations for batch 8 products...')

  await Promise.all([
    payload.update({
      collection: 'products',
      id: spiroTempoAcid.id,
      locale: 'sk',
      data: {
        name: '8-Oxyl-7,7,9,9-tetrametyl-1,4-dioxa-8-azaspiro[4.5]dekán-2-karboxylová kyselina',
        description:
          'Stabilný nitroxylový radikál s jedinečnou spiro štruktúrou a funkcionalitou karboxylovej kyseliny. Ideálny pre biokonjugáciu, spin labeling a analytické aplikácie vyžadujúce robustné paramagnetické vlastnosti. VUP Lab Researched kvalita zabezpečuje spoľahlivý výkon.',
        applications: [
          {
            application: 'Spin labeling proteínov',
            description:
              'Kovalentné pripojenie k proteínom prostredníctvom tvorby amidovej väzby pre štúdie EPR spektroskopie. Spiro štruktúra poskytuje jedinečné sterické prostredie a zníženú mobilitu.',
            image: demoImageDoc.id,
          },
          {
            application: 'Biokonjugačná chémia',
            description:
              'Tvorí stabilné amidové väzby s aminoskupinami v biomolekulách pre vytvorenie paramagnetických biokonjugátov. Umožňuje sledovanie a štrukturálnu analýzu v biologických systémoch.',
            image: demoImageDoc.id,
          },
          {
            application: 'Syntetický stavebný blok',
            description:
              'Medziproduk pre syntézu zložitejších spin-označených molekúl a sond. Karboxylová kyselina poskytuje všestrannú spojovú chémiu pre vlastné aplikácie.',
            image: demoImageDoc.id,
          },
          {
            application: 'Výskum EPR spektroskopie',
            description:
              'Štandardná sonda pre štúdie elektrónovej paramagnetickej rezonancie vyžadujúce dobre definované spinové prostredia. Užitočná pri meraniach vzdialenosti a konformačnej analýze.',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Jedinečná spiro architektúra',
            description:
              'Rigídna spiro štruktúra poskytuje odlišné sterické prostredie a zníženú konformačnú flexibilitu v porovnaní s lineárnymi TEMPO derivátmi.',
          },
          {
            feature: 'Reaktivita karboxylovej kyseliny',
            description:
              'Umožňuje tvorbu amidových väzieb s amínmi a aminokyselinami pre biokonjugáciu. Kompatibilná so štandardnou peptidovou spojovacou chémiou.',
          },
          {
            feature: 'Stabilný radikálový charakter',
            description:
              'Udržuje paramagnetické vlastnosti za fyziologických podmienok. Odolný voči redukcii a dimerizácii v biologických prostrediach.',
          },
          {
            feature: 'Zvýšená rigidita',
            description:
              'Spiro štruktúra znižuje molekulárny pohyb poskytujúc ostrejšie EPR signály a zlepšené merania vzdialenosti v štúdiách proteínov.',
          },
          {
            feature: 'VUP výskumný stupeň',
            description:
              'Laboratórne skúmaná kvalita s kontrolovanou syntézou zabezpečujúca konzistentné radikálové vlastnosti a minimálne paramagnetické nečistoty.',
          },
        ],
        faq: [
          {
            question: 'Aké výhody ponúka spiro štruktúra oproti lineárnym TEMPO derivátom?',
            answer:
              'Spiro štruktúra poskytuje zvýšenú rigiditu a jedinečné sterické prostredie, výsledkom čoho sú ostrejšie EPR signály a znížená konformačná flexibilita pre presnejšie merania.',
          },
          {
            question: 'Ako stabilná je táto zlúčenina za biologických podmienok?',
            answer:
              'Veľmi stabilná pri fyziologickom pH a teplote. Spiro štruktúra chráni radikálové centrum pred redukciou a udržuje paramagnetické vlastnosti v biologických systémoch.',
          },
          {
            question: 'Ktoré spojové metódy fungují najlepšie s karboxylovou skupinou?',
            answer:
              'Štandardné amidové spojové činidlá ako EDC/NHS, HATU alebo PyBOP fungujú účinne. Karboxylová kyselina ľahko tvorí amidové väzby s primárnymi a sekundárnymi amínmi.',
          },
          {
            question: 'Je táto zlúčenina vhodná pre aplikácie označovania proteínov?',
            answer:
              'Áno, výborná pre spin labeling proteínov prostredníctvom tvorby amidu s lyzínovými zvyškami alebo N-terminálom. Rigídna štruktúra poskytuje dobre definované spinové prostredia pre EPR štúdie.',
          },
          {
            question: 'Aké sú požiadavky na skladovanie tejto radikálovej zlúčeniny?',
            answer:
              'Skladovať v tmavých, chladných podmienkach pod inertnou atmosférou. Vyhnúť sa vystaveniu redukčným činidlám, silným kyselinám alebo zásadám, ktoré by mohli kompromitovať stabilitu radikálu.',
          },
        ],
      },
    }),
    payload.update({
      collection: 'products',
      id: galvinoxyl.id,
      locale: 'sk',
      data: {
        name: 'Galvinoxyl voľný radikál',
        description:
          'Vysoko stabilný fenoxylový radikál štrukturálne odlišný od TEMPO derivátov. Používa sa ako analytický štandard pre štúdie zachytávania radikálov a výskum antioxidantov. Tmavo modrá farba poskytuje vizuálnu indikáciu koncentrácie radikálov.',
        applications: [
          {
            application: 'Štandardy zachytávania radikálov',
            description:
              'Referenčná zlúčenina pre kalibráciu testov zachytávania radikálov a merania antioxidačnej aktivity. Poskytuje reprodukovateľné výsledky v analytických testoch.',
            image: demoImageDoc.id,
          },
          {
            application: 'Výskum antioxidantov',
            description:
              'Modelový radikál pre štúdium mechanizmov antioxidantov a účinnosti. Používa sa na hodnotenie kinetiky zhášania radikálov a antioxidačnej potencie.',
            image: demoImageDoc.id,
          },
          {
            application: 'EPR spektroskopická referencia',
            description:
              'Štandard pre štúdie elektrónovej paramagnetickej rezonancie vyžadujúce dobre charakterizované radikálové vlastnosti. Poskytuje konzistentný signál pre kalibráciu prístrojov.',
            image: demoImageDoc.id,
          },
          {
            application: 'Výskum stabilizácie polymérov',
            description:
              'Výskumný nástroj pre štúdium mechanizmov inhibície polymerizácie a hodnotenie účinnosti stabilizátorov. Pomáha vyvíjať nové antioxidačné systémy.',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Štruktúra fenoxylového radikálu',
            description:
              'Štrukturálne odlišný od nitroxylových radikálov ako TEMPO, poskytuje rôzne reaktivitné vzory a mechanizmy zachytávania pre porovnávacie štúdie.',
          },
          {
            feature: 'Vizuálny farebný indikátor',
            description:
              'Tmavo modrá farba umožňuje vizuálne sledovanie koncentrácie radikálov a priebehu reakcie. Intenzita farby koreluje s koncentráciou radikálov.',
          },
          {
            feature: 'Výnimočná stabilita',
            description:
              'Vysoko stabilný za okolitých podmienok vďaka rozsiahlejšej sterickej bariére od tert-butylových skupín. Udržuje radikálový charakter po dlhé obdobia.',
          },
          {
            feature: 'Výskumný štandard',
            description:
              'Dobre charakterizované vlastnosti ho robia ideálnym ako analytickú referenciu. Poskytuje reprodukovateľné výsledky v rôznych laboratóriách a aplikáciách.',
          },
          {
            feature: 'Jedinečný reaktivitný profil',
            description:
              'Odlišná reakčná kinetika v porovnaní s TEMPO radikálmi umožňuje štúdium vzťahov štruktúra-aktivita v radikálovej chémii.',
          },
        ],
        faq: [
          {
            question: 'Ako sa Galvinoxyl líši od TEMPO v štúdiách zachytávania radikálov?',
            answer:
              'Galvinoxyl je fenoxylový radikál s odlišnou reaktivitnou kinetikou a mechanizmami v porovnaní s TEMPO nitroxylovými radikálmi, poskytuje komplementárne údaje v štúdiách zachytávania.',
          },
          {
            question: 'Môže sa modrá farba použiť pre kvantitatívnu analýzu?',
            answer:
              'Áno, tmavo modrá farba koreluje s koncentráciou radikálov a môže sa použiť pre UV-Vis spektrofotometrickú kvantifikáciu a vizuálne sledovanie reakcií.',
          },
          {
            question: 'Čo robí Galvinoxyl obzvlášť stabilný ako voľný radikál?',
            answer:
              'Rozsiahla sterická bariéra od viacerých tert-butylových skupín zabraňuje dimerizácii radikálov a chráni radikálové centrum pred nežiaducimi reakciami.',
          },
          {
            question: 'Je Galvinoxyl vhodný pre testovanie biologických antioxidantov?',
            answer:
              'Primárne sa používa v chemických systémoch kvôli obmedzenej rozpustnosti vo vode. Vhodnejší pre testy na báze organických rozpúšťadiel a mechanistické štúdie.',
          },
          {
            question: 'Aké sú typické požiadavky na skladovanie a manipuláciu?',
            answer:
              'Skladovať v tmavých, chladných podmienkach mimo redukčných činidiel. Manipulovať pod inertnou atmosférou pre predchádzanie nežiaducim reakciám a udržanie integrity radikálu.',
          },
        ],
      },
    }),
  ])

  payload.logger.info('- Adding Japanese translations for batch 8 products...')

  await Promise.all([
    payload.update({
      collection: 'products',
      id: spiroTempoAcid.id,
      locale: 'jp',
      data: {
        name: '8-オキシル-7,7,9,9-テトラメチル-1,4-ジオキサ-8-アザスピロ[4.5]デカン-2-カルボン酸',
        description:
          '独特なスピロ構造とカルボン酸機能性を持つ安定なニトロキシルラジカル。堅牢な常磁性特性を要求するバイオコンジュゲーション、スピンラベリング、分析用途に理想的。VUP Lab Researched品質が信頼性の高い性能を保証します。',
        applications: [
          {
            application: 'タンパク質スピンラベリング',
            description:
              'EPR分光研究のためのアミド結合形成を通じたタンパク質への共有結合。スピロ構造は独特な立体環境と低下した移動性を提供します。',
            image: demoImageDoc.id,
          },
          {
            application: 'バイオコンジュゲーション化学',
            description:
              '常磁性バイオコンジュゲート作成のために生体分子のアミノ基と安定なアミド結合を形成。生物学的システムでの追跡と構造解析を可能にします。',
            image: demoImageDoc.id,
          },
          {
            application: '合成構築ブロック',
            description:
              'より複雑なスピンラベル分子とプローブの合成のための中間体。カルボン酸はカスタム用途のための多用途結合化学を提供します。',
            image: demoImageDoc.id,
          },
          {
            application: 'EPR分光研究',
            description:
              '明確に定義されたスピン環境を要求する電子常磁性共鳴研究の標準プローブ。距離測定と構造解析で有用です。',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: '独特なスピロ構造',
            description:
              '剛直なスピロ構造が線形TEMPO誘導体と比較して独特な立体環境と低下した構造柔軟性を提供します。',
          },
          {
            feature: 'カルボン酸反応性',
            description:
              'バイオコンジュゲーションのためのアミンとアミノ酸とのアミド結合形成を可能にします。標準ペプチド結合化学と互換性があります。',
          },
          {
            feature: '安定ラジカル特性',
            description:
              '生理学的条件下で常磁性特性を維持。生物学的環境での還元と二量化に耐性があります。',
          },
          {
            feature: '向上した剛性',
            description:
              'スピロ構造が分子運動を減少させ、より鋭いEPR信号とタンパク質研究での改良された距離測定を提供します。',
          },
          {
            feature: 'VUP研究グレード',
            description:
              '一貫したラジカル特性と最小限の常磁性不純物を確保する制御された合成による実験室研究品質。',
          },
        ],
        faq: [
          {
            question: 'スピロ構造は線形TEMPO誘導体に対してどのような利点を提供しますか？',
            answer:
              'スピロ構造は向上した剛性と独特な立体環境を提供し、より鋭いEPR信号とより正確な測定のための低下した構造柔軟性をもたらします。',
          },
          {
            question: 'この化合物は生物学的条件下でどの程度安定ですか？',
            answer:
              '生理学的pHと温度で非常に安定です。スピロ構造がラジカル中心を還元から保護し、生物学的システムで常磁性特性を維持します。',
          },
          {
            question: 'カルボン酸基でどの結合方法が最も効果的ですか？',
            answer:
              'EDC/NHS、HATU、PyBOPなどの標準アミド結合試薬が効果的に機能します。カルボン酸は一級および二級アミンと容易にアミド結合を形成します。',
          },
          {
            question: 'この化合物はタンパク質ラベリング用途に適していますか？',
            answer:
              'はい、リジン残基またはN末端とのアミド形成を通じたタンパク質スピンラベリングに優れています。剛直な構造がEPR研究のための明確に定義されたスピン環境を提供します。',
          },
          {
            question: 'このラジカル化合物の保管要件は何ですか？',
            answer:
              '不活性雰囲気下で暗く涼しい条件で保管。ラジカル安定性を損なう可能性のある還元剤、強酸、強塩基への暴露を避けてください。',
          },
        ],
      },
    }),
    payload.update({
      collection: 'products',
      id: galvinoxyl.id,
      locale: 'jp',
      data: {
        name: 'ガルビノキシル フリーラジカル',
        description:
          'TEMPO誘導体とは構造的に異なる高度に安定なフェノキシルラジカル。ラジカル捕捉研究と抗酸化研究の分析標準として使用。深青色がラジカル濃度の視覚的指標を提供します。',
        applications: [
          {
            application: 'ラジカル捕捉標準',
            description:
              'ラジカル捕捉アッセイと抗酸化活性測定の較正のための参照化合物。分析試験で再現性のある結果を提供します。',
            image: demoImageDoc.id,
          },
          {
            application: '抗酸化研究',
            description:
              '抗酸化メカニズムと効果の研究のためのモデルラジカル。ラジカル消去動力学と抗酸化力の評価に使用されます。',
            image: demoImageDoc.id,
          },
          {
            application: 'EPR分光参照',
            description:
              '明確に特性化されたラジカル特性を要求する電子常磁性共鳴研究の標準。機器較正のための一貫した信号を提供します。',
            image: demoImageDoc.id,
          },
          {
            application: 'ポリマー安定化研究',
            description:
              '重合阻害メカニズムの研究と安定剤効果の評価のための研究ツール。新しい抗酸化システムの開発を支援します。',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'フェノキシルラジカル構造',
            description:
              'TEMPOなどのニトロキシルラジカルとは構造的に異なり、比較研究のための異なる反応性パターンと捕捉メカニズムを提供します。',
          },
          {
            feature: '視覚的色指標',
            description:
              '深青色がラジカル濃度と反応進行の視覚的監視を可能にします。色強度はラジカル濃度と相関します。',
          },
          {
            feature: '卓越した安定性',
            description:
              'tert-ブチル基からの広範な立体障害により周囲条件下で高度に安定。長期間ラジカル特性を維持します。',
          },
          {
            feature: '研究標準',
            description:
              '明確に特性化された特性により分析参照として理想的。異なる実験室と用途で再現性のある結果を提供します。',
          },
          {
            feature: '独特な反応性プロファイル',
            description:
              'TEMPOラジカルと比較して異なる反応動力学により、ラジカル化学における構造-活性関係の研究を可能にします。',
          },
        ],
        faq: [
          {
            question: 'ガルビノキシルはラジカル捕捉研究でTEMPOとどのように異なりますか？',
            answer:
              'ガルビノキシルはTEMPOニトロキシルラジカルと比較して異なる反応動力学とメカニズムを持つフェノキシルラジカルで、捕捉研究で補完的なデータを提供します。',
          },
          {
            question: '青色は定量分析に使用できますか？',
            answer:
              'はい、深青色はラジカル濃度と相関し、UV-Vis分光光度定量と反応の視覚的監視に使用できます。',
          },
          {
            question: 'ガルビノキシルがフリーラジカルとして特に安定な理由は何ですか？',
            answer:
              '複数のtert-ブチル基からの広範な立体障害がラジカル二量化を防ぎ、望ましくない反応からラジカル中心を保護します。',
          },
          {
            question: 'ガルビノキシルは生物学的抗酸化試験に適していますか？',
            answer:
              '限定された水溶性により主に化学系で使用されます。有機溶媒ベースのアッセイとメカニズム研究により適しています。',
          },
          {
            question: '典型的な保管と取扱い要件は何ですか？',
            answer:
              '還元剤から離れた暗く涼しい条件で保管。望ましくない反応を防ぎラジカル完全性を維持するために不活性雰囲気下で取扱い。',
          },
        ],
      },
    }),
  ])

  //? -------------------- END ADDING TRANSLATIONS FOR PRODUCTS -------------------- ?//

  // --------------------
  // UPDATING PRODUCT CATEGORIES WITH FEATURED PRODUCTS
  // --------------------

  payload.logger.info('- Updating product categories with featured products...')

  await Promise.all([
    payload
      .update({
        collection: 'productCategories',
        id: hydroxyAcids.id,
        data: {
          featuredProducts: [dmpa.id, dmba.id, hpva.id],
          image: dmpaStructureDoc.id,
        },
      })
      .catch((err) => {
        payload.logger.error(`- Error updating hydroxy-acids category: ${err}`)
      }),

    payload
      .update({
        collection: 'productCategories',
        id: hinderedAmines.id,
        data: {
          featuredProducts: [
            temp.id,
            tempo.id,
            hTempo.id,
            aminoTempo.id,
            tempone.id,
            vupin.id,
            pentamethylpiperidine.id,
            pentamethylpiperidinol.id,
            aminoTmp.id,
            hals770.id,
            hals765.id,
            spiroTempoAcid.id,
            galvinoxyl.id,
          ],
          image: hTempoStructureDoc.id,
        },
      })
      .catch((err) => {
        payload.logger.error(`- Error updating hindered-amines category: ${err}`)
      }),

    payload
      .update({
        collection: 'productCategories',
        id: chromanolsDerivatives.id,
        data: {
          featuredProducts: [trolox.id],
          image: troloxStructureDoc.id,
        },
      })
      .catch((err) => {
        payload.logger.error(`- Error updating chromanols-derivatives category: ${err}`)
      }),

    payload
      .update({
        collection: 'productCategories',
        id: diaminopolyethyleneGlycols.id,
        data: {
          featuredProducts: [dapeg.id],
          image: dapegStructureDoc.id,
        },
      })
      .catch((err) => {
        payload.logger.error(`- Error updating diaminopolyethylene-glycols category: ${err}`)
      }),

    payload
      .update({
        collection: 'productCategories',
        id: phospholipidPrecursors.id,
        data: {
          featuredProducts: [colaminPhosphate.id, colaminPhosphatesodiumSalt.id],
          image: colaminPhosphateStructureDoc.id,
        },
      })
      .catch((err) => {
        payload.logger.error(`- Error updating phospholipid-precursors category: ${err}`)
      }),

    payload
      .update({
        collection: 'productCategories',
        id: polymerisationInhibitors.id,
        data: {
          featuredProducts: [vupin.id],
          image: vupinStructureDoc.id,
        },
      })
      .catch((err) => {
        payload.logger.error(`- Error updating polymerisation-inhibitors category: ${err}`)
      }),
  ])

  return {
    categories: {
      hydroxyAcids,
      hinderedAmines,
      glycolEthers,
      phospholipidPrecursors,
      polymerisationInhibitors,
      specialtyHinderedAmines,
      diaminopolyethyleneGlycols,
      chromanolsDerivatives,
    },
    products: {
      dmpa,
      dmba,
      hpva,
      hTempo,
      trolox,
      tempo,
      temp,
      dapeg,
      benzoyloxyTmp,
      acetamidoTempo,
      tempone,
      colamin,
      colaminPhosphate,
      colaminPhosphatesodiumSalt,
      vupin,
      pentamethylpiperidine,
      pentamethylpiperidinol,
      aminoTmp,
      hals770,
      hals765,
      aminoTempo,
      spiroTempoAcid,
      galvinoxyl,
    },
  }
}

export type SeededProductData = Awaited<ReturnType<typeof seedProductData>>
