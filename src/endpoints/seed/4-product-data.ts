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
    cas68227338StructureDoc,
    cas1075540StructureDoc,
    cas1268863StructureDoc,
    cas1423003StructureDoc,
    cas1436346StructureDoc,
    cas1888897StructureDoc,
    cas2245309StructureDoc,
    cas2370185StructureDoc,
    cas2403896StructureDoc,
    cas2404446StructureDoc,
    cas2426075StructureDoc,
    cas2984501StructureDoc,
    cas10353534StructureDoc,
    cas14691884StructureDoc,
    cas19549985StructureDoc,
    cas19600636StructureDoc,
    cas36768624StructureDoc,
    cas41556267StructureDoc,
    cas52829079StructureDoc,
    cas768661StructureDoc,
    cas79550StructureDoc,
    cas2226962StructureDoc,
    cas3923522StructureDoc,
    cas1483745StructureDoc,
  } = media

  // --------------------
  // SEEDING PRODUCT CATEGORIES
  // --------------------

  const [
    // --- Main Categories --- //
    hydroxyAcids,
    freeRadicals,
    polymerisationInhibitors,
    epoxides,
    diaminopolyethyleneGlycols,
    hinderedAmines,
    // --- Other Categories --- //
    phosphocolamines,
    chromanolsDerivatives,
    acetylenicAlcohols,
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
        name: 'Free Radicals',
        description:
          'Specialty stable radicals — primarily TEMPO (2,2,6,6-Tetramethylpiperidin-1-oxyl) and its key derivatives — designed for controlled oxidation, polymerisation moderation, and mechanistic research. With over five decades of chemical R&D expertise, VUP offers pilot-plant and laboratory-scale radicals for precise control in organic synthesis, living polymerisation (NMP), and redox catalysis.',
        image: hTempoStructureDoc.id,
        slug: 'free-radicals',

        productComparison: true,
        featuredProducts: [],
        applications: [
          {
            imageSrc: applicationsdemoImageDoc.id,
            title: 'Catalytic Oxidation',
            description:
              'Selective alcohol-to-aldehyde and amine-to-imine transformations under mild conditions for fine chemical and pharmaceutical synthesis.',
          },
          {
            imageSrc: applicationsImage2Doc.id,
            title: 'Controlled Radical Polymerisation (NMP)',
            description:
              'Nitroxide-mediated polymerisation for precise molecular weight control and synthesis of well-defined polymer architectures.',
          },
          {
            imageSrc: applicationsImage3Doc.id,
            title: 'Redox Catalysis',
            description:
              'Employed in electrochemical and chemical redox cycles for organic synthesis and catalytic transformations.',
          },
          {
            imageSrc: applicationsImage4Doc.id,
            title: 'Spin Labeling & EPR Research',
            description:
              'Stable radicals for mechanistic and structural analysis in ESR/EPR spectroscopy and biophysical studies.',
          },
          {
            imageSrc: applicationsImage5Doc.id,
            title: 'Antioxidant & Stability Studies',
            description:
              'Used in oxidative stability modelling of polymers and organic materials for research and development applications.',
          },
        ],
      },
    }),
    payload.create({
      collection: 'productCategories',
      data: {
        _order: '3',
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
        _order: '4',
        name: 'Epoxides',
        description:
          'Specialty aliphatic and multifunctional epoxides offered in both pilot-plant and laboratory scales. Key reactive intermediates in polymer synthesis, coatings, adhesives, and fine-chemical development. With over 50 years of expertise, VUP supports industrial innovation in crosslinking, viscosity control, hydrophobic modification, and waterborne formulation design.',
        image: cas768661StructureDoc.id,
        slug: 'epoxides',

        productComparison: true,
        featuredProducts: [],
        applications: [
          {
            imageSrc: applicationsdemoImageDoc.id,
            title: 'Coatings & Sealants',
            description:
              'Improve flexibility, adhesion, and gloss in epoxy, urethane, and hybrid coatings for enhanced performance and durability.',
          },
          {
            imageSrc: applicationsImage2Doc.id,
            title: 'Adhesives',
            description:
              'Enhance substrate bonding and strength while lowering formulation viscosity for improved application properties.',
          },
          {
            imageSrc: applicationsImage3Doc.id,
            title: 'Polymer Modification',
            description:
              'Introduce epoxy or allyl functionality into polymer backbones for tailored material properties and performance.',
          },
          {
            imageSrc: applicationsImage4Doc.id,
            title: 'Reactive Diluents',
            description:
              'Enable VOC reduction and low-viscosity formulations for high-solids systems and environmentally friendly applications.',
          },
          {
            imageSrc: applicationsImage5Doc.id,
            title: 'Surface Functionalisation',
            description:
              'Modify hydrophobic or low-energy surfaces for enhanced compatibility and improved adhesion properties.',
          },
          {
            imageSrc: applicationsImage6Doc.id,
            title: 'Fine Chemical Synthesis',
            description:
              'Versatile intermediates for creating specialty monomers and modifiers in advanced chemical synthesis.',
          },
        ],
      },
    }),
    payload.create({
      collection: 'productCategories',
      data: {
        _order: '5',
        name: 'Diaminopolyethylene Glycols',
        description:
          'VUP is the unique global producer of high-quality DAPEG polymers featuring PEG chains with reactive amino terminals, essential for biomedical coatings and surface modification applications.',
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
              'High-quality reagent for fundamental research in biomaterials science, surface chemistry, and polymer chemistry applications.',
          },
        ],
      },
    }),
    payload.create({
      collection: 'productCategories',
      data: {
        _order: '6',
        name: 'Hindered Amines',
        description:
          'High-purity hindered amines with sterically hindered piperidine structure. Essential building blocks for HALS light stabilizers and versatile intermediates for demanding applications.',
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
        _order: '7',
        name: 'Phosphocolamines',
        description:
          'Essential biochemical building blocks for phospholipid synthesis - the foundation of healthy cell membranes. VUP supplies high-purity Colamin Phosphate and its salts, crucial for supplement, veterinary, and pharmaceutical applications.',
        image: image3Doc.id,
        slug: 'phosphocolamines',

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
    payload.create({
      collection: 'productCategories',
      data: {
        _order: '9',
        name: 'Acetylenic Alcohols',
        description:
          'High-purity acetylenic alcohols — a family of triple-bond diols and tertiary propargylic alcohols widely used as wetting agents, flow modifiers, and reactive intermediates in coatings, polymer, and ink systems. These molecules combine hydroxyl functionality with acetylenic unsaturation, providing a balance of reactivity and surface activity essential for modern formulations.',
        image: cas1268863StructureDoc.id,
        slug: 'acetylenic-alcohols',

        productComparison: true,
        featuredProducts: [],
        applications: [
          {
            imageSrc: applicationsdemoImageDoc.id,
            title: 'Coatings & Paints',
            description:
              'Used as wetting and flow-control agents for even film formation and improved gloss in coating systems.',
          },
          {
            imageSrc: applicationsImage2Doc.id,
            title: 'Printing Inks',
            description:
              'Reduce surface tension and enhance pigment dispersion in solvent and aqueous ink systems for superior print quality.',
          },
          {
            imageSrc: applicationsImage3Doc.id,
            title: 'Adhesives & Sealants',
            description:
              'Aid in surface wetting and bonding of low-energy substrates for improved adhesion performance.',
          },
          {
            imageSrc: applicationsImage4Doc.id,
            title: 'Polymer Additives',
            description:
              'Serve as reactive modifiers improving flexibility and stability in polymer backbones for enhanced material properties.',
          },
          {
            imageSrc: applicationsImage5Doc.id,
            title: 'Fine Chemical Intermediates',
            description:
              'Building blocks for synthesis of specialty surfactants, stabilisers, and catalysts in advanced chemical applications.',
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
          'Vysokočisté stericky bránené amíny so stericky bránenou piperidínovou štruktúrou. Základné stavebné bloky pre svetelné stabilizátory HALS a všestranné medziprodukty pre náročné aplikácie.',
        applications: [
          {
            imageSrc: applicationsdemoImageDoc.id,
            title: 'Svetelná stabilizácia polymérov',
            description:
              'Medziprodukty HALS a hotové svetelné stabilizátory chrániace polyméry pred UV degradáciou a predlžujúce ich životnosť.',
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
      id: phosphocolamines.id,
      locale: 'sk',
      data: {
        name: 'Phosphocolamines',
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
      id: diaminopolyethyleneGlycols.id,
      locale: 'sk',
      data: {
        name: 'Diaminopolyetylénglykoly',
        description:
          'VUP je jedinečný globálny výrobca vysokej kvality polymérov DAPEG s PEG reťazcami s reaktívnymi aminovými koncovými skupinami, nevyhnutné pre biomedicínske nátery a aplikácie povrchovej modifikácie.',
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
    payload.update({
      collection: 'productCategories',
      id: freeRadicals.id,
      locale: 'sk',
      data: {
        name: 'Voľné radikály',
        description:
          'Špeciálne stabilné radikály — primárne TEMPO (2,2,6,6-Tetrametylpiperidin-1-oxyl) a jeho kľúčové deriváty — navrhnuté pre kontrolovanú oxidáciu, moderáciu polymerizácie a mechanistický výskum. S viac ako päťdesiatimi rokmi skúseností v oblasti chemického R&D, VUP ponúka pilotné a laboratórne radikály pre presnú kontrolu v organickej syntéze, živej polymerizácii (NMP) a redoxnej katalýze.',
        applications: [
          {
            imageSrc: applicationsdemoImageDoc.id,
            title: 'Katalytická oxidácia',
            description:
              'Selektívne transformácie alkoholov na aldehydy a amínov na imíny za miernych podmienok pre jemnú chemickú a farmaceutickú syntézu.',
          },
          {
            imageSrc: applicationsImage2Doc.id,
            title: 'Kontrolovaná radikálová polymerizácia (NMP)',
            description:
              'Nitroxidom mediovaná polymerizácia pre presnú kontrolu molekulovej hmotnosti a syntézu dobre definovaných polymerných architektúr.',
          },
          {
            imageSrc: applicationsImage3Doc.id,
            title: 'Redoxná katalýza',
            description:
              'Používaná v elektrochemických a chemických redoxných cykloch pre organickú syntézu a katalytické transformácie.',
          },
          {
            imageSrc: applicationsImage4Doc.id,
            title: 'Spinové značenie a EPR výskum',
            description:
              'Stabilné radikály pre mechanistickú a štrukturálnu analýzu v ESR/EPR spektroskopii a biofyzikálnych štúdiách.',
          },
          {
            imageSrc: applicationsImage5Doc.id,
            title: 'Antioxidačné a stabilizačné štúdie',
            description:
              'Používané pri modelovaní oxidačnej stability polymérov a organických materiálov pre výskum a vývoj.',
          },
        ],
      },
    }),
    payload.update({
      collection: 'productCategories',
      id: epoxides.id,
      locale: 'sk',
      data: {
        name: 'Epoxidy',
        description:
          'Špeciálne alifatické a multifunkčné epoxidy ponúkané v pilotnom aj laboratórnom meradle. Kľúčové reaktívne medziprodukty v syntéze polymérov, náteroch, lepidlách a vývoji jemných chemikálií. S viac ako 50-ročnými skúsenosťami VUP podporuje priemyselnú inováciu v oblasti zosieťovania, kontroly viskozity, hydrofóbnej modifikácie a dizajnu vodouriediteľných formulácií.',
        applications: [
          {
            imageSrc: applicationsdemoImageDoc.id,
            title: 'Nátery a tesniace materiály',
            description:
              'Zlepšenie flexibility, adhézie a lesku v epoxidových, uretánových a hybridných náteroch pre zvýšený výkon a trvanlivosť.',
          },
          {
            imageSrc: applicationsImage2Doc.id,
            title: 'Lepidlá',
            description:
              'Zlepšenie väzby na substrát a pevnosti pri znížení viskozity formulácie pre lepšie aplikačné vlastnosti.',
          },
          {
            imageSrc: applicationsImage3Doc.id,
            title: 'Modifikácia polymérov',
            description:
              'Zavedenie epoxidovej alebo alylovej funkčnosti do polymerových reťazcov pre prispôsobené materiálové vlastnosti a výkon.',
          },
          {
            imageSrc: applicationsImage4Doc.id,
            title: 'Reaktívne riedidlá',
            description:
              'Umožnenie redukcie VOC a nízkoviskóznych formulácií pre systémy s vysokým obsahom pevných látok a environmentálne priateľské aplikácie.',
          },
          {
            imageSrc: applicationsImage5Doc.id,
            title: 'Povrchová funkcionalizácia',
            description:
              'Modifikácia hydrofóbnych alebo nízkoenergetických povrchov pre zlepšenú kompatibilitu a lepšie adhézne vlastnosti.',
          },
          {
            imageSrc: applicationsImage6Doc.id,
            title: 'Jemná chemická syntéza',
            description:
              'Všestranné medziprodukty na vytváranie špeciálnych monomerov a modifikátorov v pokročilej chemickej syntéze.',
          },
        ],
      },
    }),
    payload.update({
      collection: 'productCategories',
      id: acetylenicAlcohols.id,
      locale: 'sk',
      data: {
        name: 'Acetylénové alkoholy',
        description:
          'Vysokočisté acetylénové alkoholy — rodina trojväzbových diolov a terciárnych propargylových alkoholov široko používaných ako zmáčacie činidlá, modifikátory toku a reaktívne medziprodukty v náteroch, polymeroch a atramentových systémoch. Tieto molekuly kombinujú hydroxylovú funkčnosť s acetylénovým nenasýtením, poskytujúc rovnováhu reaktivity a povrchovej aktivity nevyhnutnú pre moderné formulácie.',
        applications: [
          {
            imageSrc: applicationsdemoImageDoc.id,
            title: 'Nátery a farby',
            description:
              'Používané ako zmáčacie činidlá a látky na kontrolu toku pre rovnomernú tvorbu filmu a zlepšený lesk v náterových systémoch.',
          },
          {
            imageSrc: applicationsImage2Doc.id,
            title: 'Tlačiarenské atramenty',
            description:
              'Znižujú povrchové napätie a zlepšujú disperziu pigmentov v rozpúšťadlových a vodných atramentových systémoch pre vynikajúcu kvalitu tlače.',
          },
          {
            imageSrc: applicationsImage3Doc.id,
            title: 'Lepidlá a tesniace materiály',
            description:
              'Pomáhajú pri zmáčaní povrchu a lepení nízkoenergetických substrátov pre zlepšený adhézny výkon.',
          },
          {
            imageSrc: applicationsImage4Doc.id,
            title: 'Polymerné prísady',
            description:
              'Slúžia ako reaktívne modifikátory zlepšujúce flexibilitu a stabilitu v polymerových reťazcoch pre vylepšené materiálové vlastnosti.',
          },
          {
            imageSrc: applicationsImage5Doc.id,
            title: 'Jemné chemické medziprodukty',
            description:
              'Stavebné bloky na syntézu špeciálnych povrchovo aktívnych látok, stabilizátorov a katalyzátorov v pokročilých chemických aplikáciách.',
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
          '立体障害ピペリジン構造を持つ高純度立体障害アミン。HALS光安定剤、要求の厳しい用途向けの多用途中間体の必須構成要素です。',
        applications: [
          {
            imageSrc: applicationsdemoImageDoc.id,
            title: 'ポリマーの光安定化',
            description:
              'ポリマーを紫外線による劣化から保護し、耐用年数を延ばすHALS中間体および即時使用可能な光安定剤。',
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
      id: phosphocolamines.id,
      locale: 'jp',
      data: {
        name: 'Phosphocolamines',
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
      id: diaminopolyethyleneGlycols.id,
      locale: 'jp',
      data: {
        name: 'ジアミノポリエチレングリコール',
        description:
          'VUPは反応性アミノ末端を持つPEG鎖を特徴とする高品質DAPEGポリマーの独自のグローバル生産者であり、生物医学コーティングと表面改質用途に不可欠です。',
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
    payload.update({
      collection: 'productCategories',
      id: freeRadicals.id,
      locale: 'jp',
      data: {
        name: 'フリーラジカル',
        description:
          '特殊な安定ラジカル — 主にTEMPO（2,2,6,6-テトラメチルピペリジン-1-オキシル）とその主要誘導体 — 制御酸化、重合調整、メカニズム研究のために設計されています。50年以上の化学R&D専門知識により、VUPは有機合成、リビング重合（NMP）、レドックス触媒における精密制御のためのパイロットプラントおよび実験室スケールのラジカルを提供します。',
        applications: [
          {
            imageSrc: applicationsdemoImageDoc.id,
            title: '触媒酸化',
            description:
              'ファインケミカルおよび医薬品合成のための穏やかな条件下でのアルコールからアルデヒドへ、アミンからイミンへの選択的変換。',
          },
          {
            imageSrc: applicationsImage2Doc.id,
            title: '制御ラジカル重合（NMP）',
            description:
              '精密な分子量制御と明確に定義されたポリマーアーキテクチャの合成のためのニトロキシド媒介重合。',
          },
          {
            imageSrc: applicationsImage3Doc.id,
            title: 'レドックス触媒',
            description:
              '有機合成および触媒変換のための電気化学的および化学的レドックスサイクルで使用されます。',
          },
          {
            imageSrc: applicationsImage4Doc.id,
            title: 'スピンラベリングおよびEPR研究',
            description:
              'ESR/EPR分光法およびバイオフィジカル研究におけるメカニズムおよび構造解析のための安定ラジカル。',
          },
          {
            imageSrc: applicationsImage5Doc.id,
            title: '抗酸化および安定性研究',
            description:
              '研究開発用途のためのポリマーおよび有機材料の酸化安定性モデリングで使用されます。',
          },
        ],
      },
    }),
    payload.update({
      collection: 'productCategories',
      id: epoxides.id,
      locale: 'jp',
      data: {
        name: 'エポキシド',
        description:
          'パイロットプラントおよび実験室スケールで提供される特殊な脂肪族および多官能性エポキシド。ポリマー合成、コーティング、接着剤、ファインケミカル開発における主要な反応性中間体。50年以上の専門知識により、VUPは架橋、粘度制御、疎水性改質、水性配合設計における産業イノベーションを支援します。',
        applications: [
          {
            imageSrc: applicationsdemoImageDoc.id,
            title: 'コーティングとシーラント',
            description:
              'エポキシ、ウレタン、ハイブリッドコーティングにおける柔軟性、接着性、光沢を改善し、性能と耐久性を向上させます。',
          },
          {
            imageSrc: applicationsImage2Doc.id,
            title: '接着剤',
            description:
              '配合粘度を低減しながら、基材との接着性と強度を向上させ、優れた応用特性を実現します。',
          },
          {
            imageSrc: applicationsImage3Doc.id,
            title: 'ポリマー改質',
            description:
              'ポリマー主鎖にエポキシまたはアリル官能性を導入し、材料特性と性能をカスタマイズします。',
          },
          {
            imageSrc: applicationsImage4Doc.id,
            title: '反応性希釈剤',
            description:
              'VOC削減と高固形分システムのための低粘度配合を可能にし、環境に優しい用途を実現します。',
          },
          {
            imageSrc: applicationsImage5Doc.id,
            title: '表面機能化',
            description: '疎水性または低エネルギー表面を改質し、相溶性と接着特性を向上させます。',
          },
          {
            imageSrc: applicationsImage6Doc.id,
            title: 'ファインケミカル合成',
            description:
              '高度な化学合成における特殊モノマーおよび改質剤を作成するための多用途中間体。',
          },
        ],
      },
    }),
    payload.update({
      collection: 'productCategories',
      id: acetylenicAlcohols.id,
      locale: 'jp',
      data: {
        name: 'アセチレンアルコール',
        description:
          '高純度アセチレンアルコール — コーティング、ポリマー、インクシステムにおける濡れ剤、流動改質剤、反応性中間体として広く使用される三重結合ジオールおよび第三級プロパルギルアルコールのファミリー。これらの分子はヒドロキシル官能性とアセチレン不飽和を組み合わせ、現代の配合に不可欠な反応性と表面活性のバランスを提供します。',
        applications: [
          {
            imageSrc: applicationsdemoImageDoc.id,
            title: 'コーティングと塗料',
            description:
              'コーティングシステムにおける均一な膜形成と改善された光沢のための濡れおよび流動制御剤として使用されます。',
          },
          {
            imageSrc: applicationsImage2Doc.id,
            title: '印刷インク',
            description:
              '溶剤および水性インクシステムにおける表面張力を低減し、顔料分散を向上させ、優れた印刷品質を実現します。',
          },
          {
            imageSrc: applicationsImage3Doc.id,
            title: '接着剤とシーラント',
            description: '低エネルギー基材の表面濡れと接着を助け、改善された接着性能を提供します。',
          },
          {
            imageSrc: applicationsImage4Doc.id,
            title: 'ポリマー添加剤',
            description:
              'ポリマー主鎖の柔軟性と安定性を向上させる反応性改質剤として機能し、材料特性を向上させます。',
          },
          {
            imageSrc: applicationsImage5Doc.id,
            title: 'ファインケミカル中間体',
            description:
              '高度な化学用途における特殊界面活性剤、安定剤、触媒の合成のためのビルディングブロック。',
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
    tempo,
    temp,

    // Batch 3
    dapeg,
    vupin,
    trolox,

    // Batch 4
    benzoyloxyTmp,
    acetamidoTempo,
    tempone,

    // Batch 5
    colaminPhosphateCalciumSalt,
    colaminPhosphate,

    // Batch 6
    pentamethylpiperidine,
    pentamethylpiperidinol,
    aminoTmp,

    // Batch 7
    hals770,
    hals765,
    aminoTempo,

    // Batch 8
    // spiroTempoAcid,
    galvinoxyl,
    diepoxyoctane,

    // Batch 9
    epoxyHexene,
    epoxyhexane,
    epoxyoctane,

    // Batch 10
    epoxy7octene,
    epoxydecane,
    diepoxyhexane,

    // Batch 11
    dimethylepoxybutane,
    tmdd,
    longChainTmdd,

    // Batch 12
    dmhd,
    dimethylhexynol,
    dimethylheptynol,

    // Batch 13
    diphenylpropynol,
    tetraphenylbutynediol,
  ] = await Promise.all([
    payload.create({
      collection: 'products',
      data: {
        isKeyProduct: true,
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
            image: media.DMBAApplication1Doc.id,
          },
          {
            application: 'Electronic Coatings',
            description:
              'Used in waterborne conformal coatings for PCB protection offering enhanced water resistance and purity for demanding applications.',
            image: media.DMBAApplication2Doc.id,
          },
          {
            application: 'Leather Finishing',
            description:
              'Applied in water-based polyurethane emulsions for durable leather topcoats in automotive, footwear, and upholstery applications.',
            image: media.DMBAApplication3Doc.id,
          },
          {
            application: 'High-Performance Coatings',
            description:
              'Formulates waterborne systems requiring enhanced water resistance, hydrolytic stability, and low-VOC compliance.',
            image: media.DMBAApplication4Doc.id,
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
        isKeyProduct: true,
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
            image: media.DMPAApplication1Doc.id,
          },
          {
            application: 'Water-Soluble Alkyds',
            description:
              'Improves hydrolytic stability in alkyd resins for high-performance wood and furniture coatings.',
            image: media.DMPAApplication2Doc.id,
          },
          {
            application: 'Powder Coatings',
            description:
              'Enhances flow, gloss, and impact resistance in epoxy-polyester and polyester-based powder systems.',
            image: media.DMPAApplication3Doc.id,
          },
          {
            application: 'Electro-deposition Coatings',
            description:
              'Provides acid functionality crucial for automotive primers and demanding industrial E-coat applications.',
            image: media.DMPAApplication4Doc.id,
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
        isKeyProduct: true,
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
            image: media.HPVAApplication1Doc.id,
          },
          {
            application: 'Ester Synthesis (HPN)',
            description:
              'Used to produce neopentyl glycol hydroxypivalate (HPN), an important diol modifier for coating resins and adhesives.',
            image: media.HPVAApplication2Doc.id,
          },
          {
            application: 'Synthetic Lubricants',
            description:
              'Raw material for specialty esters in high-temperature synthetic lubricant formulations, providing thermal and hydrolytic stability.',
            image: media.HPVAApplication3Doc.id,
          },
          {
            application: 'Chemical Intermediate',
            description:
              'Used in synthesis pathways for pharmaceuticals, agrochemicals, or specialty chemicals requiring its unique neopentyl structure.',
            image: media.HPVAApplication4Doc.id,
          },
          {
            application: 'Polyurethane Modification',
            description:
              'Incorporated as a co-monomer or modifier to enhance the stability of polyurethane systems in demanding applications.',
            image: media.HPVAApplication5Doc.id,
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
        isKeyProduct: true,
        name: '4-Hydroxy-TEMPO (TEMPOL / H-TEMPO)',
        _status: 'published',
        description:
          'A key functionalized derivative of TEMPO featuring both a stable nitroxyl radical and reactive hydroxyl group. Serves as a versatile antioxidant, catalyst, spin label, and crucial intermediate for synthesizing specialty chemicals.',
        chemicalStructureImage: cas2226962StructureDoc.id,
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
        chemicalFamily: [hinderedAmines],
        applications: [
          {
            application: 'Catalysis & Oxidation',
            description:
              'Used as catalyst or co-catalyst in selective oxidation reactions, offering different solubility and reactivity profiles compared to standard TEMPO.',
            image: media.HTempoApplication2Doc.id,
          },
          {
            application: 'EPR Spectroscopy',
            description:
              'Utilized as a spin label probe to study molecular structure, dynamics, and environments in biophysical and chemical research applications.',
            image: media.HTempoApplication3Doc.id,
          },
          {
            application: 'Antioxidant Research',
            description:
              'Employed as a water-soluble antioxidant standard or protective agent in biochemical and cell-based studies investigating oxidative stress mechanisms.',
            image: media.HTempoApplication4Doc.id,
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
        isKeyProduct: true,
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
            image: media.TEMPOApplication1Doc.id,
          },
          {
            application: 'Controlled Radical Polymerization',
            description:
              'Mediator for Nitroxide Mediated Polymerization (NMP) enabling synthesis of polymers with controlled molecular weight, narrow polydispersity, and complex architectures.',
            image: media.TEMPOApplication2Doc.id,
          },
          {
            application: 'EPR Spectroscopy',
            description:
              'Stable radical source used as spin label probe in Electron Paramagnetic Resonance spectroscopy for studying molecular environments, dynamics, and radical reaction mechanisms.',
            image: media.TEMPOApplication3Doc.id,
          },
          {
            application: 'Pharmaceutical Intermediates',
            description:
              "Key precursor for synthesizing valuable derivatives including potential Active Pharmaceutical Ingredients (APIs) such as compounds for Parkinson's treatment.",
            image: media.TEMPOApplication4Doc.id,
          },
          {
            application: 'Cellulose Oxidation',
            description:
              'Used in TEMPO-mediated oxidation of cellulose and pulp for producing modified cellulose materials with enhanced properties in specialty paper and biomaterial applications.',
            image: media.TEMPOApplication5Doc.id,
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
        isKeyProduct: true,
        name: '2,2,6,6-Tetramethylpiperidine (TEMP)',
        _status: 'published',
        description:
          'The foundational intermediate for producing a wide range of Hindered Amine Light Stabilizers (HALS) and the versatile stable radical TEMPO. VUP produces high-purity TEMP (min. 99%) at its pilot plant facility.',
        chemicalStructureImage: cas768661StructureDoc.id,
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
            image: media.TEMPApplication1Doc.id,
          },
          {
            application: 'TEMPO Synthesis',
            description:
              'Direct precursor for manufacturing TEMPO and its derivatives, which are used as catalysts, oxidants, polymerization inhibitors, and research tools.',
            image: media.TEMPApplication2Doc.id,
          },
          {
            application: 'Organic Synthesis',
            description:
              'Employed as a hindered secondary amine base or building block in specific chemical reactions requiring this unique structural framework.',
            image: media.TEMPApplication3Doc.id,
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
        isKeyProduct: true,
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
            image: media.DAPEGApplication1Doc.id,
          },
          {
            application: 'Surface Modification',
            description:
              'Functionalizing surfaces of implants, nanoparticles, biosensors, and microfluidic devices to enhance biocompatibility and reduce non-specific binding.',
            image: media.DAPEGApplication2Doc.id,
          },
          {
            application: 'PEGylation & Bioconjugation',
            description:
              'Linking PEG chains to proteins, peptides, antibodies, or drug molecules to improve solubility, stability, circulation time, and reduce immunogenicity.',
            image: media.DAPEGApplication3Doc.id,
          },
          {
            application: 'Advanced Polymer Synthesis',
            description:
              'Building block for synthesizing hydrogels for tissue engineering and drug delivery, block copolymers, and other functional polymer architectures.',
            image: media.DAPEGApplication4Doc.id,
          },
          {
            application: 'PEGDAA Synthesis',
            description:
              'Direct precursor for producing Poly(ethylene glycol) diacrylamide (PEGDAA), used in hydrogel formation and specialized coating applications.',
            image: media.DAPEGApplication5Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Unique Global Supply',
            description:
              'Sourced directly from VUP, the sole global producer utilizing proprietary technology, ensuring a distinct and secure supply chain.',
          },
          {
            feature: 'High Quality Standards',
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
        isKeyProduct: true,
        name: 'VUPIN H37-B Polymerization Inhibitor',
        _status: 'published',
        description:
          'A liquid polymerization inhibitor formulation combining 4-Hydroxy-TEMPO with 2-Butoxyethanol solvent. Prevents unwanted polymerization in petrochemical streams, monomer handling, and FCC gasoline applications.',
        chemicalStructureImage: cas2226962StructureDoc.id,
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
            image: media.VUPINApplication1Doc.id,
          },
          {
            application: 'Monomer Stabilization',
            description:
              'Prevents unwanted polymerization during storage and transport of reactive monomers like MMA, VAM, styrene, and acrylates in production facilities.',
            image: media.VUPINApplication2Doc.id,
          },
          {
            application: 'Petrochemical Process Safety',
            description:
              'Protects against polymer fouling in distillation columns, ethylene units, and pygas processing by scavenging radicals that initiate polymerization.',
            image: media.VUPINApplication3Doc.id,
          },
          {
            application: 'Refinery Operations',
            description:
              'Component in specialized additive packages for various refinery streams requiring polymerization inhibition and process equipment protection.',
            image: media.VUPINApplication4Doc.id,
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
        isKeyProduct: false,
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
        isKeyProduct: false,
        name: '4-Benzoyloxy-2,2,6,6-tetramethylpiperidine',
        _status: 'published',
        description:
          'A functionalized hindered amine intermediate based on the TEMP structure, serving as a valuable precursor for producing specific Hindered Amine Light Stabilizers (HALS) or other functional molecules where a benzoate-protected hydroxyl group is required on the piperidine ring.',
        chemicalStructureImage: benzoyloxyTmpStructureDoc.id,
        technicalSpecifications: {
          chemicalName: '(2,2,6,6-Tetramethylpiperidin-4-yl) benzoate',
          casNumber: '26275-88-7',
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
        isKeyProduct: false,
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
        isKeyProduct: false,
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
        isKeyProduct: false,
        name: 'Colamin Phosphate Calcium Salt',
        _status: 'published',
        description:
          'A unique compound providing both the fundamental phospholipid precursor, Phosphorylethanolamine, and the essential mineral, Calcium. This synergistic combination supports both cellular membrane integrity and bone health, making it valuable for specialized dietary supplements, veterinary nutrition, and pharmaceutical applications.',
        chemicalStructureImage: colaminPhosphateStructureDoc.id,
        technicalSpecifications: {
          chemicalName: 'Calcium bis(2-aminoethyl hydrogen phosphate)',
          casNumber: '18672-70-3',
          synonyms: [
            { synonym: 'Calcium Phosphorylethanolamine' },
            { synonym: 'Colamin Phosphate Calcium' },
          ],
          molecularFormula: 'C₄H₁₄CaN₂O₈P₂',
          molecularWeight: '320.19 g/mol',
          labVerified: 'Verified',
        },
        VupSpecifications: {
          appearance: 'White to off-white solid/powder',
          purity: 'min. 98.0 % wt',
        },
        chemicalFamily: [phosphocolamines],
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
        isKeyProduct: false,
        name: 'Colamin Phosphate (Phosphorylethanolamine)',
        _status: 'published',
        description:
          'High-purity fundamental biochemical precursor required for synthesizing phosphatidylethanolamine (PE), a critical phospholipid component of all cell membranes. Essential for cellular structure and function in pharmaceutical applications.',
        chemicalStructureImage: colaminPhosphateStructureDoc.id,
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
        chemicalFamily: [phosphocolamines],
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
        isKeyProduct: false,
        name: '1,2,2,6,6-Pentamethylpiperidine',
        _status: 'published',
        description:
          'An N-methylated hindered amine intermediate used for synthesizing specific types of HALS (Hindered Amine Light Stabilizers) like Tinuvin 765/292 and other functional molecules requiring this specialized piperidine structure.',
        chemicalStructureImage: cas79550StructureDoc.id,
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
        isKeyProduct: false,
        name: '1,2,2,6,6-Pentamethyl-4-piperidinol',
        _status: 'published',
        description:
          'A functionalized N-methylated hindered amine containing a hydroxyl group, used as an intermediate for HALS synthesis (e.g., Tinuvin 765/292). The combination of N-methyl and hydroxyl functionalities provides unique reactivity.',
        chemicalStructureImage: cas2403896StructureDoc.id,
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
        isKeyProduct: false,
        name: '4-Amino-2,2,6,6-tetramethylpiperidine',
        _status: 'published',
        description:
          'A sterically hindered primary amine intermediate crucial for synthesizing specialized HALS compounds and pharmaceutical intermediates. The primary amino group provides excellent reactivity while the hindered structure offers stability and unique chemical properties for advanced applications.',
        chemicalStructureImage: cas36768624StructureDoc.id,
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
        isKeyProduct: false,
        name: 'bis(2,2,6,6-tetramethyl-4-piperidyl) sebacate',
        _status: 'published',
        description:
          'Industry-standard high-molecular-weight HALS (equivalent to Tinuvin 770) providing superior UV protection for polyolefins, ABS, and other polymers. Low volatility and excellent thermal stability make it ideal for demanding outdoor applications requiring long-term performance.',
        chemicalStructureImage: cas52829079StructureDoc.id,
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
          molecularWeight: '480.72 g/mol',
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
        isKeyProduct: false,
        name: 'bis(1,2,2,6,6-pentamethyl-4-piperidyl) sebacate',
        _status: 'published',
        description:
          'High-performance liquid HALS light stabilizer providing exceptional UV protection for coatings, inks, and plastics. Features excellent thermal stability and broad polymer compatibility. VUP Lab Verified Synthesis ensures consistent quality.',
        chemicalStructureImage: cas41556267StructureDoc.id,
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
          molecularWeight: '508.78 g/mol',
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
        isKeyProduct: false,
        name: '4-Amino-TEMPO',
        _status: 'published',
        description:
          'Amino-functionalized TEMPO radical featuring stable nitroxyl functionality combined with reactive amino group. Ideal for spin labeling, bioconjugation, and advanced materials research. VUP Lab Researched quality.',
        chemicalStructureImage: cas14691884StructureDoc.id,
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
    // payload.create({
    //   collection: 'products',
    //   data: {
    //     isKeyProduct: false,
    //     name: '8-Oxyl-7,7,9,9-tetramethyl-1,4-dioxa-8-azaspiro[4.5]decane-2-carboxylic acid',
    //     _status: 'published',
    //     description:
    //       'A stable nitroxyl radical with unique spiro structure and carboxylic acid functionality. Ideal for bioconjugation, spin labeling, and analytical applications requiring robust paramagnetic properties. VUP Lab Researched quality ensures reliable performance.',
    //     chemicalStructureImage: demoImageDoc.id,
    //     technicalSpecifications: {
    //       chemicalName:
    //         '8-Oxyl-7,7,9,9-tetramethyl-1,4-dioxa-8-azaspiro[4.5]decane-2-carboxylic acid',
    //       casNumber: '71792-73-7',
    //       synonyms: [{ synonym: 'Spiro-TEMPO-acid' }, { synonym: 'Spiro-TEMPO carboxylic acid' }],
    //       molecularFormula: 'C₁₂H₂₀NO₅',
    //       molecularWeight: '258.29 g/mol',
    //       labVerified: 'Researched',
    //     },
    //     VupSpecifications: {
    //       appearance: 'Orange to red crystalline solid',
    //       purity: 'min. 95.0 % wt',
    //       solubility: 'Soluble in organic solvents, limited water solubility',
    //     },
    //     chemicalFamily: [specialtyHinderedAmines],
    //     applications: [
    //       {
    //         application: 'Protein Spin Labeling',
    //         description:
    //           'Covalent attachment to proteins via amide bond formation for EPR spectroscopy studies. The spiro structure provides unique steric environment and reduced mobility.',
    //         image: demoImageDoc.id,
    //       },
    //       {
    //         application: 'Bioconjugation Chemistry',
    //         description:
    //           'Forms stable amide linkages with amino groups in biomolecules for creating paramagnetic bioconjugates. Enables tracking and structural analysis in biological systems.',
    //         image: image2Doc.id,
    //       },
    //       {
    //         application: 'Synthetic Building Block',
    //         description:
    //           'Intermediate for synthesizing more complex spin-labeled molecules and probes. The carboxylic acid provides versatile coupling chemistry for custom applications.',
    //         image: image3Doc.id,
    //       },
    //       {
    //         application: 'EPR Spectroscopy Research',
    //         description:
    //           'Standard probe for electron paramagnetic resonance studies requiring well-defined spin environments. Useful in distance measurements and conformational analysis.',
    //         image: demoImageDoc.id,
    //       },
    //     ],
    //     keyFeatures: [
    //       {
    //         feature: 'Unique Spiro Architecture',
    //         description:
    //           'Rigid spiro structure provides distinct steric environment and reduced conformational flexibility compared to linear TEMPO derivatives.',
    //       },
    //       {
    //         feature: 'Carboxylic Acid Reactivity',
    //         description:
    //           'Enables amide bond formation with amines and amino acids for bioconjugation. Compatible with standard peptide coupling chemistry.',
    //       },
    //       {
    //         feature: 'Stable Radical Character',
    //         description:
    //           'Maintains paramagnetic properties under physiological conditions. Resistant to reduction and dimerization in biological environments.',
    //       },
    //       {
    //         feature: 'Enhanced Rigidity',
    //         description:
    //           'Spiro structure reduces molecular motion providing sharper EPR signals and improved distance measurements in protein studies.',
    //       },
    //       {
    //         feature: 'VUP Research Grade',
    //         description:
    //           'Lab researched quality with controlled synthesis ensuring consistent radical properties and minimal paramagnetic impurities.',
    //       },
    //     ],
    //     caseStudies: [],
    //     relatedProducts: [],
    //     faq: [
    //       {
    //         question:
    //           'What advantages does the spiro structure offer over linear TEMPO derivatives?',
    //         answer:
    //           'The spiro structure provides enhanced rigidity and unique steric environment, resulting in sharper EPR signals and reduced conformational flexibility for more precise measurements.',
    //       },
    //       {
    //         question: 'How stable is this compound under biological conditions?',
    //         answer:
    //           'Very stable under physiological pH and temperature. The spiro structure protects the radical center from reduction and maintains paramagnetic properties in biological systems.',
    //       },
    //       {
    //         question: 'What coupling methods work best with the carboxylic acid group?',
    //         answer:
    //           'Standard amide coupling reagents like EDC/NHS, HATU, or PyBOP work effectively. The carboxylic acid readily forms amide bonds with primary and secondary amines.',
    //       },
    //       {
    //         question: 'Is this compound suitable for protein labeling applications?',
    //         answer:
    //           'Yes, excellent for protein spin labeling via amide formation with lysine residues or N-terminus. The rigid structure provides well-defined spin environments for EPR studies.',
    //       },
    //       {
    //         question: 'What are the storage requirements for this radical compound?',
    //         answer:
    //           'Store in dark, cool conditions under inert atmosphere. Avoid exposure to reducing agents, strong acids, or bases that could compromise radical stability.',
    //       },
    //     ],
    //     slug: 'spiro-tempo-acid',
    //   },
    // }),
    payload.create({
      collection: 'products',
      data: {
        isKeyProduct: false,
        name: 'Galvinoxyl Free Radical',
        _status: 'published',
        description:
          'A highly stable phenoxyl radical structurally distinct from TEMPO derivatives. Used as analytical standard for radical scavenging studies and antioxidant research. Deep blue color provides visual indication of radical concentration.',
        chemicalStructureImage: cas2370185StructureDoc.id,
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
        chemicalFamily: [freeRadicals],
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
    payload.create({
      collection: 'products',
      data: {
        isKeyProduct: false,
        name: '1,2,7,8-Diepoxyoctane',
        _status: 'published',
        description:
          'A bifunctional aliphatic diepoxide used as a reactive, low-viscosity diluent and crosslinking agent in epoxy coatings, adhesives, and composites. Produced at pilot-plant scale by VUP with short EU lead times and REACH coverage.',
        chemicalStructureImage: cas2426075StructureDoc.id,
        technicalSpecifications: {
          chemicalName: '1,2,7,8-Diepoxyoctane',
          casNumber: '2426-07-5',
          ecNumber: '219-375-9',
          synonyms: [
            { synonym: 'Aliphatic diepoxide' },
            { synonym: 'Diepoxy-octane' },
            { synonym: 'Octane, 1,2,7,8-diepoxy-' },
          ],
          molecularFormula: 'C₈H₁₄O₂',
          molecularWeight: '142.19 g/mol',
          labVerified: 'Verified',
        },
        VupSpecifications: {
          appearance: 'Clear, colourless to pale yellow liquid',
          purity: 'min. 98.0 % wt',
          waterContent: 'max. 0.5 % wt',
        },
        chemicalFamily: [epoxides],
        applications: [
          {
            application: 'Epoxy Coatings',
            description:
              'Reactive diluent and flexibiliser to adjust viscosity and flow in industrial, metal, and floor coatings while balancing hardness and flexibility.',
            image: demoImageDoc.id,
          },
          {
            application: 'Adhesives & Sealants',
            description:
              'Low-viscosity component that improves wetting and penetration into porous substrates, becoming part of the cured network for low VOC performance.',
            image: image2Doc.id,
          },
          {
            application: 'Polymer & Resin Modification',
            description:
              'Building block for functional polymers and surface-modified oligomers, introducing additional epoxy functionality into prepolymers.',
            image: image3Doc.id,
          },
          {
            application: 'Composites / Electronics',
            description:
              'Used in potting and encapsulation systems where low colour, low viscosity and good cure response with amines/anhydrides are required.',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Bifunctional Reactivity',
            description:
              'Two terminal epoxy groups enable efficient crosslinking and grafting into epoxy, urethane and acrylic systems for enhanced performance.',
          },
          {
            feature: 'Low-Viscosity Reactive Diluent',
            description:
              'Reduces viscosity of standard epoxy resins while remaining chemically bound after cure, unlike inert solvents, for lower VOC formulations.',
          },
          {
            feature: 'Improved Flexibility & Toughness',
            description:
              'Aliphatic backbone increases elongation and impact resistance of otherwise brittle epoxy networks for more durable coatings.',
          },
          {
            feature: 'Good Substrate Wetting',
            description:
              'Lower viscosity and polarity profile support better substrate wetting in coatings and adhesives for improved adhesion.',
          },
          {
            feature: 'Pilot-Plant Availability from EU',
            description:
              'Produced by VUP in Slovakia with short lead times, EU-origin supply, and REACH coverage for reliable sourcing.',
          },
          {
            feature: 'Quality & Traceability',
            description:
              'Manufactured under ISO 9001:2015 with batch-level documentation ensuring consistent quality and regulatory compliance.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'What is VUP 1,2,7,8-Diepoxyoctane mainly used for?',
            answer:
              'As a reactive, low-viscosity aliphatic diepoxide for modifying epoxy, coating and adhesive systems to improve flow, reduce viscosity, and enhance flexibility.',
          },
          {
            question: 'Can it be used as a reactive diluent in epoxy resins?',
            answer:
              'Yes. Unlike inert solvents, it participates in the cure reaction, helping to reduce VOC while remaining part of the final cured network.',
          },
          {
            question: 'What purity does VUP supply?',
            answer:
              'Typical pilot batches target ≥98% purity with exact batch specifications listed in the TDS/SDS provided with deliveries.',
          },
          {
            question: 'Is this product REACH covered?',
            answer:
              'The substance is listed under EC 219-375-9. For the exact registration scenario applicable to your supply, please contact VUP.',
          },
          {
            question: 'How does it improve epoxy system performance?',
            answer:
              'It reduces viscosity for better processing, adds flexibility to reduce brittleness, improves substrate wetting, and participates in crosslinking for a robust cured network.',
          },
        ],
        slug: 'diepoxyoctane',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        isKeyProduct: false,
        name: '1,2-Epoxy-5-hexene',
        _status: 'published',
        description:
          'A versatile reactive monoepoxide containing both an epoxy group and a terminal double bond. Used as a reactive diluent, chain extender, and building block in epoxy coatings, adhesives, and specialty polymer systems.',
        chemicalStructureImage: cas10353534StructureDoc.id,
        technicalSpecifications: {
          chemicalName: '1,2-Epoxy-5-hexene',
          casNumber: '10353-53-4',
          ecNumber: '233-771-9',
          synonyms: [
            { synonym: '1,2-Epoxy-5-hexene' },
            { synonym: '5,6-Epoxy-1-hexene' },
            { synonym: 'Allyl glycidyl ether (Note: distinct from CAS 106-92-3)' },
          ],
          molecularFormula: 'C₆H₁₀O',
          molecularWeight: '98.14 g/mol',
          labVerified: 'Not Confirmed',
        },
        VupSpecifications: {
          appearance: 'Clear, colourless liquid',
          purity: '≥ 98.0 % wt',
          waterContent: 'max. 0.5 % wt',
        },
        chemicalFamily: [epoxides],
        applications: [
          {
            application: 'Epoxy & Acrylic Coatings',
            description:
              'Reactive diluent or chain extender enhancing flexibility and surface adhesion in coating systems.',
            image: demoImageDoc.id,
          },
          {
            application: 'Adhesives & Sealants',
            description:
              'Viscosity adjustment and improved bonding strength in structural adhesive formulations.',
            image: image2Doc.id,
          },
          {
            application: 'Polymer Modification',
            description:
              'Introduces pendant allyl and epoxy groups for advanced crosslinked polymers and copolymers.',
            image: image3Doc.id,
          },
          {
            application: 'Surface Treatment',
            description:
              'Used in silane or polymer functionalisation for adhesion improvement in surface treatments.',
            image: demoImageDoc.id,
          },
          {
            application: 'Specialty Intermediates',
            description:
              'Building block for synthesis of specialty resins and chemical intermediates.',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Dual Functionality',
            description:
              'Contains both an epoxy group and a terminal double bond, offering diverse chemical reactivity for copolymerisation, crosslinking, or surface grafting.',
          },
          {
            feature: 'Reactive Diluent',
            description:
              'Can be used as a viscosity-reducing component in epoxy or acrylic formulations while remaining reactive in the cured network.',
          },
          {
            feature: 'Enhanced Flexibility',
            description:
              'The aliphatic chain imparts improved toughness and elasticity to cured coatings and adhesives.',
          },
          {
            feature: 'Excellent Compatibility',
            description:
              'Mixes easily with standard epoxy, urethane, and acrylate systems for versatile formulation options.',
          },
          {
            feature: 'Pilot-Plant Availability',
            description:
              'Supplied in pilot volumes for R&D, evaluation, and specialty production applications.',
          },
          {
            feature: 'EU-Origin Quality',
            description:
              'Produced by VUP, a.s. (Slovakia) under ISO 9001:2015, ensuring traceability and regulatory compliance.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: "What is VUP's 1,2-Epoxy-5-hexene used for?",
            answer:
              'As a reactive monoepoxide and alkene intermediate in coatings, adhesives, and specialty polymer systems requiring dual functionality.',
          },
          {
            question: 'What distinguishes this product from standard epoxides?',
            answer:
              'Its dual functionality (epoxy + terminal double bond) enables unique crosslinking and copolymerization pathways not achievable with standard epoxides.',
          },
          {
            question: 'Is it available for scale-up supply?',
            answer:
              'Yes, VUP offers pilot-plant quantities suitable for industrial evaluation or collaborative R&D projects.',
          },
          {
            question: 'How should it be handled?',
            answer:
              'Handle under well-ventilated conditions with standard PPE. It is a flammable liquid. Consult the SDS for full storage and handling details.',
          },
          {
            question:
              'What is the difference between this and Allyl Glycidyl Ether (CAS 106-92-3)?',
            answer:
              'While sometimes referred to by similar names, CAS 10353-53-4 (1,2-Epoxy-5-hexene) is distinct from CAS 106-92-3 (Allyl Glycidyl Ether). Ensure correct CAS number for your application.',
          },
          {
            question: 'What regulatory status does this product have?',
            answer:
              'Listed under EC Number 233-771-9. The substance is in the ECHA database. For specific REACH registration and tonnage coverage, contact VUP, a.s.',
          },
        ],
        slug: '12-epoxy-5-hexene',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        isKeyProduct: false,
        name: '1,2-Epoxyhexane',
        _status: 'published',
        description:
          'A versatile reactive monoepoxide providing terminal epoxy functionality for organic synthesis and polymer modifications. Used as a low-viscosity reactive diluent in high-solids epoxy coatings, adhesives, and specialty chemical applications.',
        chemicalStructureImage: cas1436346StructureDoc.id,
        technicalSpecifications: {
          chemicalName: '1,2-Epoxyhexane',
          casNumber: '1436-34-6',
          ecNumber: '215-864-6',
          synonyms: [
            { synonym: 'Hexene oxide' },
            { synonym: 'Butylethylene oxide' },
            { synonym: '1,2-Hexene oxide' },
          ],
          molecularFormula: 'C₆H₁₂O',
          molecularWeight: '100.16 g/mol',
          labVerified: 'Not Confirmed',
        },
        VupSpecifications: {
          appearance: 'Clear, colourless liquid',
          purity: '≥ 98.0 % wt (typical)',
          waterContent: 'max. 0.5 % wt',
        },
        chemicalFamily: [epoxides],
        applications: [
          {
            application: 'Epoxy & Industrial Coatings',
            description:
              'Reactive diluent to adjust viscosity and flexibility in high-solids epoxy coating systems.',
            image: demoImageDoc.id,
          },
          {
            application: 'Adhesives & Sealants',
            description:
              'Enhances wetting and improves film formation in reactive adhesive and sealant systems.',
            image: image2Doc.id,
          },
          {
            application: 'Polymer Synthesis',
            description:
              'Functions as a reactive monomer for polymer and copolymer formation in specialty applications.',
            image: image3Doc.id,
          },
          {
            application: 'Surface Treatment',
            description:
              'Used in modification of silanes and polymers to improve adhesion properties.',
            image: demoImageDoc.id,
          },
          {
            application: 'Specialty Chemicals',
            description:
              'Intermediate for the production of fine chemicals and tailored resin systems.',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Reactive Intermediate',
            description:
              'Provides terminal epoxy functionality for a wide range of organic syntheses and polymer modifications.',
          },
          {
            feature: 'Low Viscosity',
            description:
              'Effective as a reactive diluent for high-solids epoxy coatings and adhesives, reducing viscosity while participating in cure.',
          },
          {
            feature: 'Enhanced Flexibility',
            description:
              'Aliphatic backbone increases ductility and impact resistance in cured resin systems.',
          },
          {
            feature: 'Good Compatibility',
            description:
              'Readily blends with epoxy resins, acrylates, and urethane systems for versatile formulations.',
          },
          {
            feature: 'High Purity',
            description:
              'Manufactured in pilot-plant quantities under ISO 9001:2015 quality control ensuring consistent performance.',
          },
          {
            feature: 'REACH-Listed EU Origin',
            description:
              'Ensures consistent quality and full regulatory transparency from VUP, a.s. (Slovakia).',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: "What is VUP's 1,2-Epoxyhexane used for?",
            answer:
              'As a reactive monoepoxide in coatings, adhesives, and polymer synthesis applications requiring low viscosity and flexibility.',
          },
          {
            question: 'Is it suitable for reactive diluent applications?',
            answer:
              'Yes, it can reduce viscosity in epoxy systems while participating in the cure reaction, making it ideal for high-solids formulations.',
          },
          {
            question: 'What purity level does VUP supply?',
            answer:
              'Pilot batches typically meet ≥ 98% purity. Confirm exact specifications via TDS/SDS for your specific batch.',
          },
          {
            question: 'How is it classified for transport?',
            answer:
              'Generally classified as a flammable liquid. Consult the SDS for full transport classification, UN number, and storage requirements.',
          },
          {
            question: 'What distinguishes 1,2-Epoxyhexane from other aliphatic epoxides?',
            answer:
              'Its six-carbon aliphatic structure provides an optimal balance of low viscosity and flexibility enhancement while maintaining good reactivity.',
          },
          {
            question: 'What regulatory status does this product have?',
            answer:
              'Listed under EC Number 215-864-6 on ECHA inventory. Contact VUP for specific REACH registration details applicable to your supply.',
          },
        ],
        slug: '12-epoxyhexane',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        isKeyProduct: false,
        name: '1,2-Epoxyoctane',
        _status: 'published',
        description:
          'A reactive aliphatic monoepoxide combining low volatility and high reactivity, serving as a flexible building block for advanced resin and adhesive formulations. Supports formulation development in coatings, polymer modification, and crosslinking applications.',
        chemicalStructureImage: cas2984501StructureDoc.id,
        technicalSpecifications: {
          chemicalName: '1,2-Epoxyoctane',
          casNumber: '2984-50-1',
          ecNumber: '221-047-5',
          synonyms: [
            { synonym: 'Octene oxide' },
            { synonym: '1,2-Octene oxide' },
            { synonym: 'n-Octylene oxide' },
          ],
          molecularFormula: 'C₈H₁₆O',
          molecularWeight: '128.21 g/mol',
          labVerified: 'Not Confirmed',
        },
        VupSpecifications: {
          appearance: 'Clear, colourless liquid',
          purity: '≥ 98.0 % wt',
          waterContent: 'max. 0.5 % wt',
        },
        chemicalFamily: [epoxides],
        applications: [
          {
            application: 'Epoxy & Industrial Coatings',
            description:
              'Reactive diluent enhancing flexibility, film toughness, and substrate wetting in high-performance coating systems.',
            image: demoImageDoc.id,
          },
          {
            application: 'Adhesives & Sealants',
            description:
              'Improves adhesion and elongation in structural and flexible adhesive systems.',
            image: image2Doc.id,
          },
          {
            application: 'Polymer Modification',
            description:
              'Functions as a monomer for creating hydrophobic polyethers and specialty copolymers.',
            image: image3Doc.id,
          },
          {
            application: 'Surface Functionalisation',
            description:
              'Used to graft epoxy functionality onto polymer surfaces or silane-modified substrates.',
            image: demoImageDoc.id,
          },
          {
            application: 'Chemical Synthesis',
            description:
              'Starting material for synthesis of fine chemicals and stabilised resin intermediates.',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Reactive Monoepoxide',
            description:
              'Provides controlled reactivity for polymer crosslinking and chain-extension reactions in demanding applications.',
          },
          {
            feature: 'Low Volatility & Odour',
            description:
              'Suitable for high-performance coatings and adhesives where stability and workplace safety are priorities.',
          },
          {
            feature: 'Flexible Aliphatic Chain',
            description:
              'Imparts improved elasticity and hydrophobic character to cured resin systems.',
          },
          {
            feature: 'Excellent Compatibility',
            description:
              'Blends well with standard epoxy, acrylate, and urethane chemistries for versatile formulations.',
          },
          {
            feature: 'EU-Origin Pilot Production',
            description:
              'Produced under ISO 9001:2015 at VUP, a.s. (Slovakia), with traceable quality assurance.',
          },
          {
            feature: 'Sustainability Focus',
            description:
              'Enables low-VOC, high-solids formulations through reactive-diluent behaviour.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: "What is VUP's 1,2-Epoxyoctane primarily used for?",
            answer:
              'As a reactive aliphatic monoepoxide for coatings, adhesives, and polymer modification where low volatility and controlled reactivity are required.',
          },
          {
            question: 'Can it be used as a reactive diluent?',
            answer:
              'Yes, it effectively reduces viscosity while chemically bonding into the cured matrix, making it ideal for high-solids formulations.',
          },
          {
            question: 'What are its key handling precautions?',
            answer:
              'Avoid heat, acids, and moisture. Store in a cool, dry, ventilated area. Consult the SDS for full safety guidelines and handling procedures.',
          },
          {
            question: 'Is this product REACH registered?',
            answer:
              'Yes, the substance is listed under EC 221-047-5. Confirm specific registration details with VUP regulatory team for your supply.',
          },
          {
            question: 'How does the longer C8 chain affect performance?',
            answer:
              'The eight-carbon aliphatic chain provides lower volatility, enhanced hydrophobicity, and improved flexibility compared to shorter-chain epoxides.',
          },
          {
            question: 'What distinguishes 1,2-Epoxyoctane from other aliphatic epoxides?',
            answer:
              'Its combination of low volatility, controlled reactivity, and flexibility enhancement makes it particularly suitable for high-performance, low-odour applications.',
          },
        ],
        slug: '12-epoxyoctane',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        isKeyProduct: false,
        name: '1,2-Epoxy-7-octene',
        _status: 'published',
        description:
          'A dual-functional aliphatic epoxide featuring both an oxirane ring and a terminal double bond, providing versatile reactivity for polymer modification and crosslinking. Suitable for coatings, adhesives, and specialty intermediates benefiting from controlled flexibility.',
        chemicalStructureImage: cas19600636StructureDoc.id,
        technicalSpecifications: {
          chemicalName: '1,2-Epoxy-7-octene',
          casNumber: '19600-63-6',
          ecNumber: '243-178-7',
          synonyms: [{ synonym: '1,2-Epoxy-7-oct-1-ene' }, { synonym: 'Allylbutyl oxide' }],
          molecularFormula: 'C₈H₁₄O',
          molecularWeight: '126.20 g/mol',
          labVerified: 'Not Confirmed',
        },
        VupSpecifications: {
          appearance: 'Clear, colourless liquid',
          purity: '≥ 98.0 % wt (typical)',
          waterContent: 'max. 0.5 % wt',
        },
        chemicalFamily: [epoxides],
        applications: [
          {
            application: 'Coatings & Sealants',
            description:
              'Improves flexibility, adhesion, and film integrity in epoxy and hybrid coating systems.',
            image: demoImageDoc.id,
          },
          {
            application: 'Adhesives',
            description:
              'Enhances bonding strength and wetting while lowering viscosity in adhesive formulations.',
            image: image2Doc.id,
          },
          {
            application: 'Polymer & Resin Modification',
            description:
              'Reacts via epoxy or allyl groups for tailored polymer architectures in advanced applications.',
            image: image3Doc.id,
          },
          {
            application: 'Surface Functionalisation',
            description:
              'Introduces reactive sites for crosslinking or grafting in advanced composite materials.',
            image: demoImageDoc.id,
          },
          {
            application: 'Fine Chemicals',
            description:
              'Intermediate in synthesis of custom epoxy monomers and reactive modifiers.',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Dual Functionality',
            description:
              'Combines an epoxy group and an allylic double bond, enabling selective reactions for advanced polymer modification.',
          },
          {
            feature: 'Reactive Diluent Potential',
            description:
              'Lowers viscosity while remaining fully reactive during curing, ideal for high-solids formulations.',
          },
          {
            feature: 'Enhanced Flexibility',
            description:
              'The aliphatic chain structure provides excellent film elasticity and impact resistance.',
          },
          {
            feature: 'Excellent Compatibility',
            description:
              'Suitable for epoxy, acrylate, and polyurethane systems for versatile formulation options.',
          },
          {
            feature: 'High Purity',
            description:
              'Manufactured under ISO 9001:2015 in EU pilot-plant conditions ensuring consistent quality.',
          },
          {
            feature: 'Low Colour and Low Odour',
            description:
              'Ideal for high-specification coating and adhesive systems where aesthetics matter.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'What is 1,2-Epoxy-7-octene used for?',
            answer:
              'As a dual-functional reactive monomer for coatings, adhesives, and polymer modification applications requiring both epoxy and allylic reactivity.',
          },
          {
            question: 'Why is it unique among epoxides?',
            answer:
              'It contains both epoxy and allylic reactive sites, offering enhanced formulation versatility and enabling selective reactions not possible with single-functional epoxides.',
          },
          {
            question: 'Is it suitable for pilot-scale testing?',
            answer:
              'Yes, VUP offers pilot-plant quantities ideal for evaluation and development purposes in R&D and industrial testing.',
          },
          {
            question: 'How should it be stored?',
            answer:
              'Store in sealed containers in a cool, ventilated area. Consult the SDS for detailed handling and PPE recommendations.',
          },
          {
            question: 'How does it compare to 1,2-Epoxy-5-hexene?',
            answer:
              'Both offer dual functionality, but 1,2-Epoxy-7-octene has a longer C8 chain providing lower volatility and enhanced flexibility compared to the C6 chain of 1,2-Epoxy-5-hexene.',
          },
          {
            question: 'What regulatory status does this product have?',
            answer:
              'Listed under EC Number 243-178-7 in the ECHA database. Contact VUP for registration and supply details specific to your requirements.',
          },
        ],
        slug: '12-epoxy-7-octene',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        isKeyProduct: false,
        name: '1,2-Epoxydecane',
        _status: 'published',
        description:
          'A long-chain aliphatic monoepoxide that combines high hydrophobicity with reactive epoxy functionality. Suitable for coatings, adhesives, and surface modification applications where flexibility, low polarity, and water resistance are required.',
        chemicalStructureImage: cas2404446StructureDoc.id,
        technicalSpecifications: {
          chemicalName: '1,2-Epoxydecane',
          casNumber: '2404-44-6',
          ecNumber: '219-295-4',
          synonyms: [
            { synonym: 'Decene oxide' },
            { synonym: '1,2-Decene oxide' },
            { synonym: 'n-Decylene oxide' },
          ],
          molecularFormula: 'C₁₀H₂₀O',
          molecularWeight: '156.27 g/mol',
          labVerified: 'Not Confirmed',
        },
        VupSpecifications: {
          appearance: 'Clear, colourless liquid',
          purity: '≥ 98.0 % wt',
          waterContent: 'max. 0.5 % wt',
        },
        chemicalFamily: [epoxides],
        applications: [
          {
            application: 'Coatings & Sealants',
            description:
              'Improves flexibility, gloss, and hydrophobicity in epoxy or urethane-based coating systems.',
            image: demoImageDoc.id,
          },
          {
            application: 'Adhesives',
            description:
              'Enhances adhesion and elasticity while reducing water uptake in adhesive formulations.',
            image: image2Doc.id,
          },
          {
            application: 'Polymer Modification',
            description:
              'Used to introduce epoxy functionality in hydrophobic copolymers or surfactant-modified resins.',
            image: image3Doc.id,
          },
          {
            application: 'Surface Treatment',
            description:
              'Grafts epoxy groups onto low-energy surfaces to increase paintability and adhesion.',
            image: demoImageDoc.id,
          },
          {
            application: 'Fine Chemical Intermediates',
            description: 'Building block for higher-molecular-weight epoxides and surfactants.',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Long-Chain Aliphatic Epoxide',
            description:
              'Provides hydrophobic and flexible properties when incorporated into polymers or coatings.',
          },
          {
            feature: 'Reactive Intermediate',
            description:
              'Enables controlled epoxy crosslinking and modification of polyurethanes, acrylics, and resins.',
          },
          {
            feature: 'Improved Water Resistance',
            description:
              'Ideal for low-polarity coatings and adhesives requiring moisture repellency.',
          },
          {
            feature: 'Low Volatility',
            description:
              'Enhances workplace safety and stability in high-temperature applications.',
          },
          {
            feature: 'EU Pilot Production',
            description: 'Supplied by VUP, a.s. (Slovakia) under ISO 9001:2015 quality system.',
          },
          {
            feature: 'Versatile Applications',
            description:
              'Serves as an epoxy-functional hydrophobe for R&D and specialty formulations.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: "What is VUP's 1,2-Epoxydecane primarily used for?",
            answer:
              'As a reactive aliphatic monoepoxide for hydrophobic coatings, adhesives, and polymer modification where water resistance is critical.',
          },
          {
            question: 'What distinguishes it from shorter-chain epoxides?',
            answer:
              'Its longer ten-carbon chain provides enhanced flexibility and water resistance, ideal for low-polarity systems requiring hydrophobic characteristics.',
          },
          {
            question: 'Is it suitable as a reactive diluent?',
            answer:
              'Yes, it acts as a low-volatility reactive modifier, improving flexibility and lowering viscosity in resin formulations.',
          },
          {
            question: 'How is it stored and handled?',
            answer:
              'Store in sealed containers, away from heat and oxidisers. Follow SDS guidelines for PPE and ventilation requirements.',
          },
          {
            question: 'What applications benefit most from this long-chain epoxide?',
            answer:
              'Applications requiring hydrophobic modification, water resistance, and flexibility such as marine coatings, outdoor adhesives, and low-polarity surface treatments.',
          },
          {
            question: 'What regulatory status does this product have?',
            answer:
              'Listed under EC Number 219-295-4 in ECHA inventory. Contact VUP for registration and supply chain details.',
          },
        ],
        slug: '12-epoxydecane',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        isKeyProduct: false,
        name: '1,2,5,6-Diepoxyhexane',
        _status: 'published',
        description:
          'A bifunctional aliphatic epoxide containing two terminal oxirane groups. Serves as a specialty crosslinker and chain extender in coatings, adhesives, and polymer synthesis applications that require increased flexibility, low viscosity, and enhanced reactivity.',
        chemicalStructureImage: cas1888897StructureDoc.id,
        technicalSpecifications: {
          chemicalName: '1,2,5,6-Diepoxyhexane',
          casNumber: '1888-89-7',
          ecNumber: '217-564-0',
          synonyms: [
            { synonym: 'Hexane diepoxide' },
            { synonym: '1,2:5,6-Diepoxyhexane' },
            { synonym: 'Hexamethylene diepoxide' },
          ],
          molecularFormula: 'C₆H₁₀O₂',
          molecularWeight: '114.14 g/mol',
          labVerified: 'Not Confirmed',
        },
        VupSpecifications: {
          appearance: 'Clear, colourless to light yellow liquid',
          purity: '≥ 98.0 % wt (typical)',
          waterContent: 'max. 0.5 % wt',
        },
        chemicalFamily: [epoxides],
        applications: [
          {
            application: 'Coatings & Sealants',
            description:
              'Enhances crosslink density and hardness in epoxy and urethane coatings while maintaining flexibility.',
            image: demoImageDoc.id,
          },
          {
            application: 'Adhesives',
            description:
              'Functions as a bifunctional modifier improving adhesion and curing speed.',
            image: image2Doc.id,
          },
          {
            application: 'Polymer Modification',
            description:
              'Introduces additional epoxy functionality into polyesters, polyethers, and copolymers.',
            image: image3Doc.id,
          },
          {
            application: 'Composite & Resin Systems',
            description: 'Provides low-viscosity crosslinker for thermoset resin systems.',
            image: demoImageDoc.id,
          },
          {
            application: 'Fine Chemicals & Specialty Synthesis',
            description:
              'Used in laboratory and pilot-scale synthesis of reactive intermediates and oligomers.',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Bifunctional Reactivity',
            description:
              'Two epoxy groups provide strong crosslinking potential for thermoset and polymer systems.',
          },
          {
            feature: 'Low Viscosity',
            description: 'Effective as a reactive diluent in epoxy and polyurethane formulations.',
          },
          {
            feature: 'High Reactivity',
            description:
              'Supports fast cure rates and improved conversion in cationic and anionic polymerisation.',
          },
          {
            feature: 'Improved Mechanical Performance',
            description: 'Adds flexibility, toughness, and hydrolytic stability to cured systems.',
          },
          {
            feature: 'Pilot-Plant Availability',
            description:
              'Produced by VUP, a.s. under controlled conditions for evaluation and specialty applications.',
          },
          {
            feature: 'EU-Origin & REACH Compliance',
            description:
              'Manufactured under ISO 9001:2015 ensuring traceability and consistent quality.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'What is 1,2,5,6-Diepoxyhexane primarily used for?',
            answer:
              'As a bifunctional reactive epoxide for coatings, adhesives, and polymer modification requiring enhanced crosslinking.',
          },
          {
            question: 'How does it differ from monoepoxides?',
            answer:
              'It provides two epoxy groups, enhancing crosslinking and reactivity in thermoset and elastomer systems compared to single-functional epoxides.',
          },
          {
            question: 'What are its handling precautions?',
            answer:
              'Avoid moisture, heat, and acids. Store in sealed containers; refer to the SDS for full handling instructions.',
          },
          {
            question: 'Is it REACH listed?',
            answer:
              'Yes, the substance is listed under CAS 1888-89-7, EC 217-564-0. Contact VUP regulatory for specific registration details.',
          },
          {
            question: 'How does it compare to 1,2,7,8-Diepoxyoctane?',
            answer:
              'Both are bifunctional diepoxides, but 1,2,5,6-Diepoxyhexane has a shorter C6 chain providing higher epoxide density per unit weight and different physical properties.',
          },
          {
            question: 'What applications benefit from its bifunctional structure?',
            answer:
              'Applications requiring high crosslink density such as high-performance coatings, structural adhesives, and thermoset composites benefit most from its dual epoxy functionality.',
          },
        ],
        slug: '1256-diepoxyhexane',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        isKeyProduct: false,
        name: '3,3-Dimethyl-1,2-epoxybutane',
        _status: 'published',
        description:
          'A compact tertiary monoepoxide valued for its sterically hindered reactivity and volatility, making it suitable for laboratory-scale synthesis and mechanistic studies. Serves as a reactive intermediate for fine chemical development, coatings research, and polymer model systems.',
        chemicalStructureImage: cas2245309StructureDoc.id,
        technicalSpecifications: {
          chemicalName: '3,3-Dimethyl-1,2-epoxybutane',
          casNumber: '2245-30-9',
          ecNumber: 'Not listed',
          synonyms: [
            { synonym: 'tert-Butyl ethylene oxide' },
            { synonym: '3,3-Dimethylbutylene oxide' },
          ],
          molecularFormula: 'C₆H₁₂O',
          molecularWeight: '100.16 g/mol',
          labVerified: 'Not Confirmed',
        },
        VupSpecifications: {
          appearance: 'Clear, colourless liquid',
          purity: '≥ 98.0 % (analytical/lab-grade)',
        },
        chemicalFamily: [epoxides],
        applications: [
          {
            application: 'Research & Development',
            description:
              'For studying epoxide ring-opening reactions, nucleophilic substitutions, and polymerisation mechanisms.',
            image: demoImageDoc.id,
          },
          {
            application: 'Fine Chemical Synthesis',
            description: 'Used in developing high-purity intermediates and specialty reagents.',
            image: image2Doc.id,
          },
          {
            application: 'Coatings Research',
            description:
              'Serves as a reactive monomer analogue in lab-scale resin modification and performance modelling.',
            image: image3Doc.id,
          },
          {
            application: 'Polymer Chemistry',
            description:
              'Benchmark compound for reactivity studies and simulation of steric hindrance effects.',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Sterically Hindered Epoxide',
            description:
              'Ideal for controlled reactivity and model reaction studies due to its tertiary structure.',
          },
          {
            feature: 'High Volatility',
            description:
              'Suitable for gas-phase or kinetic investigation setups requiring volatile reagents.',
          },
          {
            feature: 'Compact Tertiary Structure',
            description:
              'Enables investigation of substitution and ring-opening mechanisms under various conditions.',
          },
          {
            feature: 'Fine-Chemistry Utility',
            description:
              'Precursor for high-value intermediates in coatings and polymer chemistry research.',
          },
          {
            feature: 'Lab-Scale Availability',
            description:
              'Supplied in limited research quantities for analytical, kinetic, or synthetic use.',
          },
          {
            feature: 'Produced under ISO 9001:2015',
            description:
              'Ensuring analytical traceability and purity control for laboratory applications.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'What makes 3,3-Dimethyl-1,2-epoxybutane distinct from other epoxides?',
            answer:
              'Its tertiary structure provides steric hindrance, making it ideal for reactivity and mechanism studies where controlled reactivity is required.',
          },
          {
            question: 'Is it available for industrial use?',
            answer:
              'Currently produced in laboratory-scale quantities only, suitable for R&D and testing rather than industrial-scale applications.',
          },
          {
            question: 'What are the main safety considerations?',
            answer:
              'Highly flammable—handle in a fume hood away from ignition sources. Store below 25°C in a cool, ventilated area. Consult SDS for full handling precautions.',
          },
          {
            question: 'What applications benefit from its steric hindrance?',
            answer:
              'Mechanistic studies, kinetic investigations, polymer model systems, and research requiring controlled epoxide reactivity benefit most from its tertiary structure.',
          },
          {
            question: 'Is this product REACH registered?',
            answer:
              'CAS 2245-30-9 is listed in international inventories. Contact VUP regulatory for specific REACH coverage details.',
          },
        ],
        slug: '33-dimethyl-12-epoxybutane',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        isKeyProduct: false,
        name: '2,4,7,9-Tetramethyl-5-decyne-4,7-diol',
        _status: 'published',
        description:
          'A high-performance acetylenic diol surfactant offering superior control of surface tension and flow in coating and ink formulations. TMDD serves as a multifunctional additive providing improved wetting, leveling, and compatibility across a wide range of solvent-borne and aqueous systems.',
        chemicalStructureImage: cas1268863StructureDoc.id,
        technicalSpecifications: {
          chemicalName: '2,4,7,9-Tetramethyl-5-decyne-4,7-diol',
          casNumber: '126-86-3',
          ecNumber: '204-809-1',
          synonyms: [
            { synonym: 'TMDD' },
            { synonym: 'Surfynol® 104 analogue' },
            { synonym: 'Acetylenic diol surfactant' },
          ],
          molecularFormula: 'C₁₄H₂₆O₂',
          molecularWeight: '226.36 g/mol',
          labVerified: 'Not Confirmed',
        },
        VupSpecifications: {
          appearance: 'White to pale solid / waxy flakes',
          purity: '≥ 98.0 % (typical)',
        },
        chemicalFamily: [acetylenicAlcohols],
        applications: [
          {
            application: 'Coatings & Paints',
            description:
              'Controls surface tension, enhances film uniformity, and improves gloss in coating formulations.',
            image: demoImageDoc.id,
          },
          {
            application: 'Printing Inks',
            description:
              'Promotes pigment dispersion and print quality through improved substrate wetting.',
            image: image2Doc.id,
          },
          {
            application: 'Adhesives & Sealants',
            description:
              'Enhances spreading and adhesion on low-energy surfaces for improved bonding.',
            image: image3Doc.id,
          },
          {
            application: 'Polymer Emulsions',
            description:
              'Acts as a dynamic surfactant improving emulsion stability and performance.',
            image: demoImageDoc.id,
          },
          {
            application: 'Textile Finishes & Cleaners',
            description:
              'Used in specialty formulations where wetting and flow control are critical.',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Surface Tension Control',
            description:
              'Reduces both static and dynamic surface tension for improved substrate wetting.',
          },
          {
            feature: 'Improved Flow & Leveling',
            description:
              'Prevents defects such as craters, pinholes, and orange peel in coatings and inks.',
          },
          {
            feature: 'Broad Compatibility',
            description: 'Performs well in waterborne, solventborne, and UV-curable systems.',
          },
          {
            feature: 'Low Foam Formation',
            description: 'Enables stable film formation without excessive foaming.',
          },
          {
            feature: 'Versatile Functionality',
            description:
              'Acts as wetting agent, flow modifier, or coalescing additive in various formulations.',
          },
          {
            feature: 'EU-Origin Quality',
            description:
              'Manufactured under ISO 9001:2015, ensuring high purity and batch consistency.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'What is TMDD used for?',
            answer:
              'TMDD is used as a surface-active agent and wetting additive in coatings, inks, adhesives, and polymer emulsions to improve flow, leveling, and substrate wetting.',
          },
          {
            question: 'Is TMDD compatible with both waterborne and solvent systems?',
            answer:
              'Yes, TMDD performs effectively in both waterborne and solventborne formulations, as well as UV-curable systems.',
          },
          {
            question: 'Does TMDD cause foaming?',
            answer:
              'No, TMDD is designed for low foam generation while maintaining effective surface activity, making it ideal for coating and ink applications.',
          },
          {
            question: "How pure is VUP's TMDD?",
            answer:
              'Pilot-plant batches are typically ≥ 98% purity, verified through GC and titration methods, ensuring consistent performance.',
          },
          {
            question: 'What makes TMDD different from conventional surfactants?',
            answer:
              'TMDD is an acetylenic diol with unique triple-bond structure providing superior dynamic surface tension reduction and excellent compatibility across diverse coating systems.',
          },
          {
            question: 'Is TMDD REACH registered?',
            answer:
              'Yes, TMDD (CAS 126-86-3, EC 204-809-1) is a registered substance under EU REACH. Contact VUP for specific registration details.',
          },
        ],
        slug: 'tmdd-tetramethyl-decyne-diol',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        isKeyProduct: false,
        name: '2,5,8,11-Tetramethyl-6-dodecyne-5,8-diol',
        _status: 'published',
        description:
          'A long-chain acetylenic diol surfactant combining excellent dynamic surface tension control with enhanced hydrophobicity. Provides superior performance in solventborne and high-solids systems, supporting improved wetting, leveling, and film uniformity.',
        chemicalStructureImage: cas68227338StructureDoc.id,
        technicalSpecifications: {
          chemicalName: '2,5,8,11-Tetramethyl-6-dodecyne-5,8-diol',
          casNumber: '68227-33-8',
          ecNumber: '269-348-0',
          synonyms: [
            { synonym: 'Long-chain TMDD analogue' },
            { synonym: 'Acetylenic diol surfactant' },
            { synonym: 'Surfactant 12D' },
          ],
          molecularFormula: 'C₁₆H₃₂O₂',
          molecularWeight: '256.43 g/mol',
          labVerified: 'Not Confirmed',
        },
        VupSpecifications: {
          appearance: 'White to off-white waxy solid',
          purity: '≥ 98.0 % (typical)',
        },
        chemicalFamily: [acetylenicAlcohols],
        applications: [
          {
            application: 'Coatings & Paints',
            description:
              'Improves surface wetting, flow, and gloss control in solventborne coating formulations.',
            image: demoImageDoc.id,
          },
          {
            application: 'Printing Inks',
            description:
              'Facilitates pigment dispersion and consistent substrate coverage for high-quality prints.',
            image: image2Doc.id,
          },
          {
            application: 'Adhesives & Sealants',
            description: 'Provides improved spreading and adhesion to hydrophobic surfaces.',
            image: image3Doc.id,
          },
          {
            application: 'Polymer Additives',
            description:
              'Used as a surface-active additive in high-solids and solvent-based polymer systems.',
            image: demoImageDoc.id,
          },
          {
            application: 'Textile & Leather Treatments',
            description: 'Promotes uniform wetting and absorption on difficult substrates.',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Enhanced Hydrophobicity',
            description: 'Longer carbon chain delivers superior wetting on low-energy substrates.',
          },
          {
            feature: 'Dynamic Surface Tension Reduction',
            description:
              'Maintains consistent leveling and spread even under high-speed application.',
          },
          {
            feature: 'Excellent Compatibility',
            description: 'Performs in both solventborne and high-solids formulations.',
          },
          {
            feature: 'Improved Gloss & Flow',
            description: 'Enhances film smoothness and appearance without cratering.',
          },
          {
            feature: 'Low Foam Profile',
            description: 'Ensures stable application performance with minimal foaming.',
          },
          {
            feature: 'ISO-Certified Quality',
            description: 'Produced under ISO 9001:2015 with consistent batch traceability.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'How does this product differ from TMDD?',
            answer:
              'The longer carbon chain provides increased hydrophobicity and compatibility with high-solids and solventborne systems compared to standard TMDD.',
          },
          {
            question: 'Is it suitable for aqueous coatings?',
            answer:
              'It can be used in dispersed form with surfactants but is primarily designed for solventborne and high-solids formulations.',
          },
          {
            question: 'What is the purity level?',
            answer:
              '≥ 98%, with analytical verification via GC and NMR for consistent performance.',
          },
          {
            question: 'Does it influence gloss?',
            answer:
              'Yes, it enhances gloss and film uniformity by improving surface flow and leveling.',
          },
          {
            question: 'What applications benefit most from the longer chain?',
            answer:
              'High-solids coatings, solventborne systems, and applications requiring enhanced wetting on low-energy or hydrophobic substrates benefit most.',
          },
          {
            question: 'Is this product REACH registered?',
            answer:
              'Yes, it is listed under EC 269-348-0 and registered under the acetylenic diols category. Contact VUP for specific registration details.',
          },
        ],
        slug: 'long-chain-tmdd-dodecyne-diol',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        isKeyProduct: false,
        name: '2,5-Dimethyl-3-hexyne-2,5-diol',
        _status: 'published',
        description:
          'A symmetrical acetylenic diol used as a reactive intermediate for surfactant and additive development. Serves as a model compound for structure–activity studies and as a versatile wetting and surface-control additive precursor.',
        chemicalStructureImage: cas1423003StructureDoc.id,
        technicalSpecifications: {
          chemicalName: '2,5-Dimethyl-3-hexyne-2,5-diol',
          casNumber: '142-30-3',
          ecNumber: '205-533-4',
          synonyms: [
            { synonym: 'DMHD' },
            { synonym: 'Acetylenic diol' },
            { synonym: 'Dimethylhexynediol' },
          ],
          molecularFormula: 'C₈H₁₄O₂',
          molecularWeight: '142.20 g/mol',
          labVerified: 'Not Confirmed',
        },
        VupSpecifications: {
          appearance: 'White crystalline solid',
          purity: '≥ 98.0 %',
        },
        chemicalFamily: [acetylenicAlcohols],
        applications: [
          {
            application: 'Surfactant Development',
            description:
              'Intermediate for nonionic surfactants and dynamic surface tension agents.',
            image: demoImageDoc.id,
          },
          {
            application: 'Coatings Research',
            description:
              'Evaluated as a model diol for flow and leveling studies in coating formulations.',
            image: image2Doc.id,
          },
          {
            application: 'Printing Inks',
            description:
              'Precursor to surface modifiers for improved wetting and pigment dispersion.',
            image: image3Doc.id,
          },
          {
            application: 'Polymer Additives',
            description: 'Used in synthesis of acetylenic-modified resin intermediates.',
            image: demoImageDoc.id,
          },
          {
            application: 'Academic & Industrial Research',
            description:
              'Reference compound for reaction mechanism exploration and surface chemistry studies.',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Symmetrical Diol Structure',
            description:
              'Simplifies modelling of surfactant and additive behaviour in research applications.',
          },
          {
            feature: 'High Purity',
            description: 'Suitable for analytical research and reaction mechanism studies.',
          },
          {
            feature: 'Reactive Intermediate',
            description: 'Enables synthesis of specialty surfactants and performance additives.',
          },
          {
            feature: 'Surface Activity',
            description: 'Forms the structural core of many wetting and leveling agents.',
          },
          {
            feature: 'Stable Under Normal Conditions',
            description: 'Safe to handle in standard laboratory environments.',
          },
          {
            feature: 'Produced under ISO 9001:2015',
            description:
              'Ensures traceable quality and analytical verification for laboratory use.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'What is the main function of this compound?',
            answer:
              'It serves as a symmetrical diol for surfactant synthesis and as a reference compound in surface chemistry research.',
          },
          {
            question: 'Can it be used directly in coatings?',
            answer:
              'Primarily for laboratory evaluation or formulation development; not intended for direct industrial use.',
          },
          {
            question: 'What purity does VUP supply?',
            answer:
              'Laboratory-grade purity is typically ≥ 98%, verified by GC and titration methods.',
          },
          {
            question: 'Is it REACH registered?',
            answer:
              'It is listed in the ECHA database (EC 205-533-4) and available for laboratory research applications under laboratory exemption.',
          },
          {
            question: 'What makes this compound useful for research?',
            answer:
              'Its symmetrical structure simplifies molecular modeling and makes it an ideal reference compound for studying acetylenic diol behavior in surface-active applications.',
          },
          {
            question: 'How does it differ from TMDD?',
            answer:
              'DMHD is a smaller, symmetrical molecule used primarily for research and development, while TMDD is a commercial surfactant used in industrial coatings and inks.',
          },
        ],
        slug: 'dmhd-dimethyl-hexyne-diol',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        isKeyProduct: false,
        name: '3,5-Dimethyl-1-hexyne-3-ol',
        _status: 'published',
        description:
          'A short-chain acetylenic alcohol used as a key intermediate in surfactant and coating additive synthesis. Produced in pilot-plant quantities by VUP, a.s. (Prievidza, Slovakia), this compound combines reactivity and solubility ideal for applications in polymer modification, adhesives, and fine-chemical development.',
        chemicalStructureImage: cas1075540StructureDoc.id,
        technicalSpecifications: {
          chemicalName: '3,5-Dimethyl-1-hexyne-3-ol',
          casNumber: '107-54-0',
          ecNumber: '203-500-9',
          synonyms: [{ synonym: '3,5-Dimethylhexyn-3-ol' }, { synonym: 'Dimethylbutynol' }],
          molecularFormula: 'C₈H₁₄O',
          molecularWeight: '126.19 g/mol',
          labVerified: 'Not Confirmed',
        },
        VupSpecifications: {
          appearance: 'Colourless to pale yellow liquid',
          purity: '≥ 98.0 % (typical)',
          solubility: 'Soluble in alcohols, ethers, and hydrocarbons; slightly soluble in water',
        },
        chemicalFamily: [acetylenicAlcohols],
        applications: [
          {
            application: 'Coatings & Paints',
            description:
              'Precursor to flow and leveling modifiers for solventborne systems, improving surface finish and performance.',
            image: demoImageDoc.id,
          },
          {
            application: 'Adhesives & Sealants',
            description:
              'Improves substrate wetting and adhesion properties for enhanced bonding performance.',
            image: image2Doc.id,
          },
          {
            application: 'Surfactants',
            description:
              'Used in synthesis of dynamic surface tension control agents for coating and ink applications.',
            image: image3Doc.id,
          },
          {
            application: 'Polymer Additives',
            description:
              'Intermediate for flexible, acetylenic-functionalised polymers with tailored properties.',
            image: demoImageDoc.id,
          },
          {
            application: 'Fine Chemicals',
            description:
              'Precursor for specialty alkyne- and diol-based intermediates in custom synthesis.',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Reactive Intermediate',
            description:
              'Key building block for synthesis of acetylenic diols and surface-active agents.',
          },
          {
            feature: 'Excellent Solvent Compatibility',
            description: 'Miscible with common organic solvents for versatile formulation use.',
          },
          {
            feature: 'Enhanced Wetting & Flow',
            description:
              'Serves as a performance component in coating and adhesive additive systems.',
          },
          {
            feature: 'Stable Handling',
            description:
              'Low volatility compared to lower-molecular-weight alkynols for safer processing.',
          },
          {
            feature: 'Pilot-Scale Availability',
            description:
              'Produced under controlled conditions for industrial evaluation and custom synthesis.',
          },
          {
            feature: 'Quality Assurance',
            description:
              'Manufactured under ISO 9001:2015 certification for consistent purity and performance.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'What is 3,5-Dimethyl-1-hexyne-3-ol mainly used for?',
            answer:
              "It's a precursor to acetylenic diol surfactants and flow-control additives in coatings and inks.",
          },
          {
            question: 'Is it compatible with both polar and nonpolar solvents?',
            answer:
              'Yes, it shows broad solvent compatibility including alcohols, ketones, and hydrocarbons.',
          },
          {
            question: 'How pure is the pilot-grade material?',
            answer: 'VUP typically supplies ≥ 98% purity, verified by GC analysis.',
          },
          {
            question: 'Does it have any hazard classification?',
            answer:
              'Not classified as hazardous under normal transport conditions; handle per SDS guidance.',
          },
          {
            question: 'What makes this compound suitable for coating applications?',
            answer:
              'Its acetylenic structure combined with hydroxyl functionality provides the ideal balance of reactivity and surface activity needed for flow and wetting modifiers.',
          },
          {
            question: 'Is it REACH compliant?',
            answer:
              'Registered under ECHA as an acetylenic alcohol; REACH compliant. Contact VUP for specific registration details.',
          },
        ],
        slug: '35-dimethyl-1-hexyne-3-ol',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        isKeyProduct: false,
        name: '3,6-Dimethyl-1-heptyne-3-ol',
        _status: 'published',
        description:
          'A tertiary acetylenic alcohol used as an intermediate for surfactant and coating additive synthesis. Produced in pilot-plant quantities by VUP, a.s. (Prievidza, Slovakia), this compound combines reactivity with hydrophobic character, making it valuable in formulating wetting and flow-control agents for coatings, inks, and adhesives.',
        chemicalStructureImage: cas19549985StructureDoc.id,
        technicalSpecifications: {
          chemicalName: '3,6-Dimethyl-1-heptyne-3-ol',
          casNumber: '19549-98-5',
          ecNumber: 'Not listed',
          synonyms: [
            { synonym: 'Heptynol derivative' },
            { synonym: 'Tertiary acetylenic alcohol' },
          ],
          molecularFormula: 'C₉H₁₆O',
          molecularWeight: '140.23 g/mol',
          labVerified: 'Not Confirmed',
        },
        VupSpecifications: {
          appearance: 'Colourless to light yellow liquid',
          purity: '≥ 98.0 % (typical)',
          solubility: 'Miscible with common organic solvents; low solubility in water',
        },
        chemicalFamily: [acetylenicAlcohols],
        applications: [
          {
            application: 'Coatings & Paints',
            description:
              'Enhances flow, gloss, and defect control through dynamic surface tension reduction.',
            image: demoImageDoc.id,
          },
          {
            application: 'Printing Inks',
            description: 'Promotes wetting and pigment dispersion on hydrophobic substrates.',
            image: image2Doc.id,
          },
          {
            application: 'Adhesives & Sealants',
            description: 'Improves spreading and interfacial adhesion for enhanced bonding.',
            image: image3Doc.id,
          },
          {
            application: 'Polymer Synthesis',
            description:
              'Intermediate for functional monomers and reactive additives in polymer applications.',
            image: demoImageDoc.id,
          },
          {
            application: 'Fine Chemical R&D',
            description: 'Used as a reference compound in acetylenic alcohol reactivity studies.',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Reactive Intermediate',
            description: 'Used for synthesis of acetylenic surfactants and surface-active agents.',
          },
          {
            feature: 'Hydrophobic Chain Balance',
            description: 'Provides strong wetting and flow performance in solventborne systems.',
          },
          {
            feature: 'Tertiary Alcohol Stability',
            description: 'Resistant to oxidation under normal processing conditions.',
          },
          {
            feature: 'Formulation Versatility',
            description: 'Effective in coatings, inks, and polymer formulations.',
          },
          {
            feature: 'Pilot-Plant Availability',
            description: 'Suitable for scale-up, development trials, and formulation evaluation.',
          },
          {
            feature: 'Consistent Quality',
            description: 'Manufactured under ISO 9001:2015 for traceable analytical performance.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'What is the primary use of 3,6-Dimethyl-1-heptyne-3-ol?',
            answer:
              'It serves as a tertiary acetylenic alcohol intermediate for coatings, surfactants, and adhesives.',
          },
          {
            question: "Is this product part of VUP's acetylenic diol family?",
            answer:
              'Yes, it is structurally related to TMDD and other dynamic surface tension control agents.',
          },
          {
            question: 'What purity is supplied by VUP?',
            answer: 'Pilot-grade material typically has ≥ 98% purity, confirmed via GC.',
          },
          {
            question: 'Is the product REACH registered?',
            answer:
              'It is covered under acetylenic alcohol group registration; contact VUP regulatory for details.',
          },
          {
            question: 'What makes this compound different from other acetylenic alcohols?',
            answer:
              'Its tertiary alcohol structure provides enhanced oxidation resistance while maintaining reactivity and hydrophobic character ideal for solventborne formulations.',
          },
          {
            question: 'Can it be used in aqueous systems?',
            answer:
              'While primarily suited for solventborne systems due to low water solubility, it can be formulated into emulsions or dispersions with appropriate co-surfactants.',
          },
        ],
        slug: '36-dimethyl-1-heptyne-3-ol',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        isKeyProduct: false,
        name: '1,1-Diphenyl-2-propyn-1-ol',
        _status: 'published',
        description:
          'An aromatic acetylenic alcohol combining a reactive C≡C triple bond with two phenyl substituents that impart high thermal and oxidative stability. Produced in laboratory quantities by VUP, serving as a model intermediate in fine-chemical synthesis, polymer research, and coordination-chemistry studies.',
        chemicalStructureImage: cas3923522StructureDoc.id,
        technicalSpecifications: {
          chemicalName: '1,1-Diphenyl-2-propyn-1-ol',
          casNumber: '3923-52-2',
          ecNumber: 'Not listed',
          synonyms: [
            { synonym: 'Diphenylpropargyl alcohol' },
            { synonym: 'α,α-Diphenylpropargyl alcohol' },
          ],
          molecularFormula: 'C₁₅H₁₂O',
          molecularWeight: '208.26 g/mol',
          labVerified: 'Verified',
        },
        VupSpecifications: {
          appearance: 'White to faintly beige crystalline solid',
          purity: '≥ 98.0 % (laboratory grade)',
          meltingPoint: '94 – 97 °C (lit.)',
          boilingPoint: '~ 174 °C (5 mm Hg)',
          solubility: 'Soluble in ethanol, acetone, benzene; insoluble in water',
        },
        chemicalFamily: [acetylenicAlcohols],
        applications: [
          {
            application: 'Fine Organic Synthesis',
            description:
              'Intermediate for aromatic alkyne derivatives in advanced chemical synthesis.',
            image: demoImageDoc.id,
          },
          {
            application: 'Catalyst Development',
            description:
              'Test substrate for transition-metal hydrogenation or coupling reactions in catalytic research.',
            image: image2Doc.id,
          },
          {
            application: 'Polymer R&D',
            description:
              'Monomeric model for rigid aromatic units in advanced polymer materials research.',
            image: image3Doc.id,
          },
          {
            application: 'Academic Research',
            description:
              'Reference compound for propargylic alcohol mechanism studies in research laboratories.',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Reactive Acetylenic Alcohol',
            description:
              'Useful precursor for oxidative coupling and metal-catalysed addition studies.',
          },
          {
            feature: 'Aromatic Stability',
            description:
              'Phenyl groups enhance thermal and oxidative resistance for demanding applications.',
          },
          {
            feature: 'Dual Reactivity',
            description:
              'Hydroxyl and alkyne groups enable diverse derivatisation pathways in synthesis.',
          },
          {
            feature: 'High-Purity Research Grade',
            description: '≥ 98% purity, verified by GC/NMR for reliable experimental results.',
          },
          {
            feature: 'ISO 9001:2015 Production',
            description:
              'Prepared under controlled laboratory conditions at VUP ensuring consistent quality.',
          },
          {
            feature: 'Laboratory-Scale Availability',
            description:
              'Available in 25 g, 100 g, or 250 g quantities suitable for research applications.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'What is 1,1-Diphenyl-2-propyn-1-ol used for?',
            answer:
              'It serves as a model intermediate for fine-chemical synthesis, polymer research, and coordination-chemistry studies in laboratory settings.',
          },
          {
            question: 'What makes this compound different from other acetylenic alcohols?',
            answer:
              'The two phenyl substituents provide exceptional thermal and oxidative stability while maintaining the reactive acetylenic functionality.',
          },
          {
            question: 'What purity level does VUP supply?',
            answer:
              'VUP supplies laboratory-grade material at ≥ 98% purity, verified by GC and NMR analysis.',
          },
          {
            question: 'Is this product REACH registered?',
            answer:
              'Research-use exemption applies (< 1 t per year). No CLP classification found; standard laboratory PPE recommended.',
          },
          {
            question: 'What are the storage requirements?',
            answer:
              'Store in a tightly sealed container in a cool and dry environment to maintain stability and purity.',
          },
          {
            question: 'What applications is this compound suitable for?',
            answer:
              'All applications are restricted to research and development use, including fine synthesis, catalyst development, and polymer research.',
          },
        ],
        slug: '11-diphenyl-2-propyn-1-ol',
      },
    }),
    payload.create({
      collection: 'products',
      data: {
        isKeyProduct: false,
        name: '1,1,4,4-Tetraphenyl-2-butyne-1,4-diol',
        _status: 'published',
        description:
          'A rigid, aromatic acetylenic diol featuring two tertiary alcohol groups and a central carbon–carbon triple bond. Produced by VUP on a laboratory scale, this compound is primarily used as a model structure and specialty intermediate in polymer and catalyst studies.',
        chemicalStructureImage: cas1483745StructureDoc.id,
        technicalSpecifications: {
          chemicalName: '1,1,4,4-Tetraphenyl-2-butyne-1,4-diol',
          casNumber: '1483-74-5',
          ecNumber: 'Not listed',
          synonyms: [
            { synonym: 'Tetraphenylbutynediol' },
            { synonym: '1,4-Di-tert-phenyl-2-butyne-1,4-diol' },
          ],
          molecularFormula: 'C₂₈H₂₀O₂',
          molecularWeight: '388.46 g/mol',
          labVerified: 'Verified',
        },
        VupSpecifications: {
          appearance: 'White to pale-cream crystalline solid',
          purity: '≥ 98.0 % (laboratory grade)',
          meltingPoint: '~ 234 – 236 °C (lit.)',
          solubility: 'Low in water; soluble in aromatic solvents and alcohols',
        },
        chemicalFamily: [acetylenicAlcohols],
        applications: [
          {
            application: 'Polymer R&D',
            description:
              'Structural model for rigid, phenyl-substituted diols in advanced polymer research.',
            image: demoImageDoc.id,
          },
          {
            application: 'Catalyst Studies',
            description:
              'Ligand precursor or model substrate for oxidative coupling research in catalytic systems.',
            image: image2Doc.id,
          },
          {
            application: 'Organic Synthesis',
            description:
              'Intermediate in aryl-acetylene chemistry for complex molecule construction.',
            image: image3Doc.id,
          },
          {
            application: 'Materials Science',
            description:
              'Used in design of cross-linking and aromatic network polymers for advanced materials.',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Rigid Aromatic Core',
            description:
              'Provides thermal stability and defined geometry for model polymer and catalyst systems.',
          },
          {
            feature: 'Dual Hydroxyl Groups',
            description:
              'Allows derivatisation to esters or ethers for polymer backbone modification.',
          },
          {
            feature: 'Stable Triple Bond',
            description:
              'Useful for studying acetylene reactivity and oxidative coupling mechanisms.',
          },
          {
            feature: 'High Purity, Research Grade',
            description: '≥ 98% purity verified by GC/NMR analysis for reliable results.',
          },
          {
            feature: 'Laboratory Production by VUP',
            description: 'Prepared under ISO 9001:2015 analytical control for consistent quality.',
          },
          {
            feature: 'Exceptional Thermal Stability',
            description:
              'High melting point (234-236°C) enables processing under demanding thermal conditions.',
          },
        ],
        caseStudies: [],
        relatedProducts: [],
        faq: [
          {
            question: 'What is 1,1,4,4-Tetraphenyl-2-butyne-1,4-diol used for?',
            answer:
              'It serves as a model structure and specialty intermediate in polymer research, catalyst studies, and materials science applications.',
          },
          {
            question: 'What makes this compound unique?',
            answer:
              'The combination of rigid aromatic core with four phenyl groups, dual tertiary alcohols, and a central triple bond provides exceptional thermal stability and defined geometry.',
          },
          {
            question: 'What purity does VUP supply?',
            answer:
              'VUP supplies laboratory-grade material at ≥ 98% purity, verified by GC and NMR analysis.',
          },
          {
            question: 'Is this product REACH registered?',
            answer:
              'Laboratory use only (< 1 t per year exemption). Not classified under CLP; handle with standard PPE.',
          },
          {
            question: 'What are the solubility characteristics?',
            answer:
              'Low solubility in water; soluble in aromatic solvents and alcohols, making it suitable for organic synthesis applications.',
          },
          {
            question: 'What applications is this compound suitable for?',
            answer:
              'All applications are restricted to research and development use, including polymer R&D, catalyst studies, and materials science.',
          },
        ],
        slug: '1144-tetraphenyl-2-butyne-14-diol',
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
            feature: 'Vysoké štandardy kvality',
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
            feature: '高品質基準',
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
      id: colaminPhosphateCalciumSalt.id,
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
      id: colaminPhosphateCalciumSalt.id,
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
  // ADDING SLOVAK TRANSLATIONS FOR PRODUCTS (BATCH 8: SPIRO-TEMPO-ACID, GALVINOXYL, DIEPOXYOCTANE)
  // --------------------

  payload.logger.info('- Adding Slovak translations for batch 8 products...')

  await Promise.all([
    // payload.update({
    //   collection: 'products',
    //   id: spiroTempoAcid.id,
    //   locale: 'sk',
    //   data: {
    //     name: '8-Oxyl-7,7,9,9-tetrametyl-1,4-dioxa-8-azaspiro[4.5]dekán-2-karboxylová kyselina',
    //     description:
    //       'Stabilný nitroxylový radikál s jedinečnou spiro štruktúrou a funkcionalitou karboxylovej kyseliny. Ideálny pre biokonjugáciu, spin labeling a analytické aplikácie vyžadujúce robustné paramagnetické vlastnosti. VUP Lab Researched kvalita zabezpečuje spoľahlivý výkon.',
    //     applications: [
    //       {
    //         application: 'Spin labeling proteínov',
    //         description:
    //           'Kovalentné pripojenie k proteínom prostredníctvom tvorby amidovej väzby pre štúdie EPR spektroskopie. Spiro štruktúra poskytuje jedinečné sterické prostredie a zníženú mobilitu.',
    //         image: demoImageDoc.id,
    //       },
    //       {
    //         application: 'Biokonjugačná chémia',
    //         description:
    //           'Tvorí stabilné amidové väzby s aminoskupinami v biomolekulách pre vytvorenie paramagnetických biokonjugátov. Umožňuje sledovanie a štrukturálnu analýzu v biologických systémoch.',
    //         image: demoImageDoc.id,
    //       },
    //       {
    //         application: 'Syntetický stavebný blok',
    //         description:
    //           'Medziproduk pre syntézu zložitejších spin-označených molekúl a sond. Karboxylová kyselina poskytuje všestrannú spojovú chémiu pre vlastné aplikácie.',
    //         image: demoImageDoc.id,
    //       },
    //       {
    //         application: 'Výskum EPR spektroskopie',
    //         description:
    //           'Štandardná sonda pre štúdie elektrónovej paramagnetickej rezonancie vyžadujúce dobre definované spinové prostredia. Užitočná pri meraniach vzdialenosti a konformačnej analýze.',
    //         image: demoImageDoc.id,
    //       },
    //     ],
    //     keyFeatures: [
    //       {
    //         feature: 'Jedinečná spiro architektúra',
    //         description:
    //           'Rigídna spiro štruktúra poskytuje odlišné sterické prostredie a zníženú konformačnú flexibilitu v porovnaní s lineárnymi TEMPO derivátmi.',
    //       },
    //       {
    //         feature: 'Reaktivita karboxylovej kyseliny',
    //         description:
    //           'Umožňuje tvorbu amidových väzieb s amínmi a aminokyselinami pre biokonjugáciu. Kompatibilná so štandardnou peptidovou spojovacou chémiou.',
    //       },
    //       {
    //         feature: 'Stabilný radikálový charakter',
    //         description:
    //           'Udržuje paramagnetické vlastnosti za fyziologických podmienok. Odolný voči redukcii a dimerizácii v biologických prostrediach.',
    //       },
    //       {
    //         feature: 'Zvýšená rigidita',
    //         description:
    //           'Spiro štruktúra znižuje molekulárny pohyb poskytujúc ostrejšie EPR signály a zlepšené merania vzdialenosti v štúdiách proteínov.',
    //       },
    //       {
    //         feature: 'VUP výskumný stupeň',
    //         description:
    //           'Laboratórne skúmaná kvalita s kontrolovanou syntézou zabezpečujúca konzistentné radikálové vlastnosti a minimálne paramagnetické nečistoty.',
    //       },
    //     ],
    //     faq: [
    //       {
    //         question: 'Aké výhody ponúka spiro štruktúra oproti lineárnym TEMPO derivátom?',
    //         answer:
    //           'Spiro štruktúra poskytuje zvýšenú rigiditu a jedinečné sterické prostredie, výsledkom čoho sú ostrejšie EPR signály a znížená konformačná flexibilita pre presnejšie merania.',
    //       },
    //       {
    //         question: 'Ako stabilná je táto zlúčenina za biologických podmienok?',
    //         answer:
    //           'Veľmi stabilná pri fyziologickom pH a teplote. Spiro štruktúra chráni radikálové centrum pred redukciou a udržuje paramagnetické vlastnosti v biologických systémoch.',
    //       },
    //       {
    //         question: 'Ktoré spojové metódy fungují najlepšie s karboxylovou skupinou?',
    //         answer:
    //           'Štandardné amidové spojové činidlá ako EDC/NHS, HATU alebo PyBOP fungujú účinne. Karboxylová kyselina ľahko tvorí amidové väzby s primárnymi a sekundárnymi amínmi.',
    //       },
    //       {
    //         question: 'Je táto zlúčenina vhodná pre aplikácie označovania proteínov?',
    //         answer:
    //           'Áno, výborná pre spin labeling proteínov prostredníctvom tvorby amidu s lyzínovými zvyškami alebo N-terminálom. Rigídna štruktúra poskytuje dobre definované spinové prostredia pre EPR štúdie.',
    //       },
    //       {
    //         question: 'Aké sú požiadavky na skladovanie tejto radikálovej zlúčeniny?',
    //         answer:
    //           'Skladovať v tmavých, chladných podmienkach pod inertnou atmosférou. Vyhnúť sa vystaveniu redukčným činidlám, silným kyselinám alebo zásadám, ktoré by mohli kompromitovať stabilitu radikálu.',
    //       },
    //     ],
    //   },
    // }),
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
    payload.update({
      collection: 'products',
      id: diepoxyoctane.id,
      locale: 'sk',
      data: {
        name: '1,2,7,8-Diepoxioktán',
        description:
          'Bifunkčný alifatický diepoxid používaný ako reaktívne, nízkoviskózne riedidlo a zosieťovacie činidlo v epoxidových náteroch, lepidlách a kompozitoch. Vyrábaný v pilotnom meradle VUP s krátkymi dodacími lehotami z EÚ a pokrytím REACH.',
        applications: [
          {
            application: 'Epoxidové nátery',
            description:
              'Reaktívne riedidlo a flexibilizátor na úpravu viskozity a toku v priemyselných, kovových a podlahových náteroch pri vyvažovaní tvrdosti a flexibility.',
            image: demoImageDoc.id,
          },
          {
            application: 'Lepidlá a tesniace materiály',
            description:
              'Nízkoviskózna zložka zlepšujúca zmáčanie a prenikanie do poréznych substrátov, stávajúca sa súčasťou vytvrdnutej siete pre nízku emisiu VOC.',
            image: image2Doc.id,
          },
          {
            application: 'Modifikácia polymérov a živíc',
            description:
              'Stavebný blok pre funkčné polyméry a povrchovo modifikované oligoméry, zavádzajúci dodatočnú epoxidovú funkčnosť do prepolymérov.',
            image: image3Doc.id,
          },
          {
            application: 'Kompozity / Elektronika',
            description:
              'Používaný v zalievacích a zapúzdrovacích systémoch, kde sa vyžaduje nízka farba, nízka viskozita a dobrá vytvrdzovaciu odozva s amínmi/anhydridmi.',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Bifunkčná reaktivita',
            description:
              'Dve koncové epoxidové skupiny umožňujú efektívne zosieťovanie a napojenie do epoxidových, uretánových a akrylových systémov pre zvýšený výkon.',
          },
          {
            feature: 'Nízkoviskózne reaktívne riedidlo',
            description:
              'Znižuje viskozitu štandardných epoxidových živíc pri zachovaní chemickej väzby po vytvrdení, na rozdiel od inertných rozpúšťadiel, pre nižšie VOC formulácie.',
          },
          {
            feature: 'Zlepšená flexibilita a húževnatosť',
            description:
              'Alifatický reťazec zvyšuje elongáciu a nárazovú odolnosť inak krehkých epoxidových sietí pre trvanlivejšie nátery.',
          },
          {
            feature: 'Dobré zmáčanie substrátu',
            description:
              'Nižšia viskozita a polaritný profil podporujú lepšie zmáčanie substrátu v náteroch a lepidlách pre zlepšenú adhéziu.',
          },
          {
            feature: 'Dostupnosť z pilotného závodu v EÚ',
            description:
              'Vyrábaný VUP na Slovensku s krátkymi dodacími lehotami, dodávkou z EÚ a pokrytím REACH pre spoľahlivé zásobovanie.',
          },
          {
            feature: 'Kvalita a sledovateľnosť',
            description:
              'Vyrábaný podľa ISO 9001:2015 s dokumentáciou na úrovni šarže zabezpečujúcou konzistentnú kvalitu a dodržiavanie predpisov.',
          },
        ],
        faq: [
          {
            question: 'Na čo sa hlavne používa VUP 1,2,7,8-Diepoxioktán?',
            answer:
              'Ako reaktívny, nízkoviskózny alifatický diepoxid na modifikáciu epoxidových, náterových a lepiacich systémov na zlepšenie toku, zníženie viskozity a zvýšenie flexibility.',
          },
          {
            question: 'Môže sa použiť ako reaktívne riedidlo v epoxidových živiciach?',
            answer:
              'Áno. Na rozdiel od inertných rozpúšťadiel sa zúčastňuje vytvrdzovacej reakcie, pomáha znižovať VOC pri zachovaní časti finálnej vytvrdnutej siete.',
          },
          {
            question: 'Akú čistotu dodáva VUP?',
            answer:
              'Typické pilotné šarže cieľujú na ≥98% čistotu s presnou špecifikáciou šarže uvedenou v TDS/SDS dodávanom s dodávkami.',
          },
          {
            question: 'Je tento produkt pokrytý REACH?',
            answer:
              'Látka je uvedená pod EC 219-375-9. Pre presný registračný scenár aplikovateľný na vašu dodávku kontaktujte VUP.',
          },
          {
            question: 'Ako zlepšuje výkon epoxidového systému?',
            answer:
              'Znižuje viskozitu pre lepšie spracovanie, pridáva flexibilitu na zníženie krehkosti, zlepšuje zmáčanie substrátu a zúčastňuje sa zosieťovania pre robustnú vytvrdnutú sieť.',
          },
        ],
      },
    }),
  ])

  // --------------------
  // ADDING SLOVAK TRANSLATIONS FOR PRODUCTS (BATCH 9: EPOXY-5-HEXENE, EPOXYHEXANE, EPOXYOCTANE)
  // --------------------

  payload.logger.info('- Adding Slovak translations for batch 9 products...')

  await Promise.all([
    payload.update({
      collection: 'products',
      id: epoxyHexene.id,
      locale: 'sk',
      data: {
        name: '1,2-Epoxi-5-hexén',
        description:
          'Všestranný reaktívny monoepoxid obsahujúci epoxidovú skupinu aj terminálnu dvojnú väzbu. Používa sa ako reaktívne riedidlo, predlžovač reťazca a stavebný blok v epoxidových náteroch, lepidlách a špeciálnych polymerových systémoch.',
        applications: [
          {
            application: 'Epoxidové a akrylové nátery',
            description:
              'Reaktívne riedidlo alebo predlžovač reťazca zvyšujúci flexibilitu a povrchové priľnutie v náterových systémoch.',
            image: demoImageDoc.id,
          },
          {
            application: 'Lepidlá a tesniace materiály',
            description:
              'Úprava viskozity a zlepšená pevnosť väzby v štrukturálnych lepiacich formuláciách.',
            image: image2Doc.id,
          },
          {
            application: 'Modifikácia polymérov',
            description:
              'Zavedenie bočných alylových a epoxidových skupín pre pokročilé zosieťované polyméry a kopolyméry.',
            image: image3Doc.id,
          },
          {
            application: 'Povrchová úprava',
            description:
              'Používa sa pri funkcionalizácii silánom alebo polymérom pre zlepšenie adhézie pri povrchových úpravách.',
            image: demoImageDoc.id,
          },
          {
            application: 'Špeciálne medziprodukty',
            description: 'Stavebný blok na syntézu špeciálnych živíc a chemických medziprodukkov.',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Dvojitá funkčnosť',
            description:
              'Obsahuje epoxidovú skupinu aj terminálnu dvojnú väzbu, ponúkajúc rôznorodú chemickú reaktivitu pre kopolymerizáciu, zosieťovanie alebo povrchové naštepovanie.',
          },
          {
            feature: 'Reaktívne riedidlo',
            description:
              'Možno použiť ako zložku znižujúcu viskozitu v epoxidových alebo akrylových formuláciách pri zachovaní reaktivity vo vytvrdnutej sieti.',
          },
          {
            feature: 'Zlepšená flexibilita',
            description:
              'Alifatický reťazec dodáva zlepšenú húževnatosť a elasticitu vytvrdnutým náterom a lepidlám.',
          },
          {
            feature: 'Výborná kompatibilita',
            description:
              'Ľahko sa mieša so štandardnými epoxidovými, uretánovými a akrylátovými systémami pre všestranné formulačné možnosti.',
          },
          {
            feature: 'Dostupnosť z pilotného závodu',
            description:
              'Dodávaný v pilotných objemoch pre R&D, hodnotenie a aplikácie špeciálnej výroby.',
          },
          {
            feature: 'Kvalita z EÚ',
            description:
              'Vyrábaný VUP, a.s. (Slovensko) podľa ISO 9001:2015, zabezpečujúci sledovateľnosť a súlad s predpismi.',
          },
        ],
        faq: [
          {
            question: 'Na čo sa používa VUP 1,2-Epoxi-5-hexén?',
            answer:
              'Ako reaktívny monoepoxid a alkénový medziproduk v náteroch, lepidlách a špeciálnych polymerových systémoch vyžadujúcich dvojitú funkčnosť.',
          },
          {
            question: 'Čím sa tento produkt odlišuje od štandardných epoxidov?',
            answer:
              'Jeho dvojitá funkčnosť (epoxid + terminálna dvojná väzba) umožňuje jedinečné zosieťovacie a kopolymerizačné dráhy nedosiahnuteľné so štandardnými epoxidmi.',
          },
          {
            question: 'Je dostupný pre zvyšovanie objemu dodávky?',
            answer:
              'Áno, VUP ponúka množstvá z pilotného závodu vhodné pre priemyselné hodnotenie alebo spoločné R&D projekty.',
          },
          {
            question: 'Ako by sa mal manipulovať?',
            answer:
              'Manipulovať za dobre vetraných podmienok so štandardným OOP. Je to horľavá kvapalina. Pre úplné podrobnosti o skladovaní a manipulácii konzultujte SDS.',
          },
          {
            question: 'Aký je rozdiel medzi týmto a Allyl glycidyl éterom (CAS 106-92-3)?',
            answer:
              'Hoci sa niekedy označujú podobnými názvami, CAS 10353-53-4 (1,2-Epoxi-5-hexén) sa líši od CAS 106-92-3 (Allyl glycidyl éter). Uistite sa o správnom CAS čísle pre vašu aplikáciu.',
          },
          {
            question: 'Aký je regulačný stav tohto produktu?',
            answer:
              'Uvedený pod EC číslom 233-771-9. Látka je v databáze ECHA. Pre špecifickú registráciu REACH a pokrytie tonáže kontaktujte VUP, a.s.',
          },
        ],
      },
    }),
    payload.update({
      collection: 'products',
      id: epoxyhexane.id,
      locale: 'sk',
      data: {
        name: '1,2-Epoxihexán',
        description:
          'Všestranný reaktívny monoepoxid poskytujúci terminálnu epoxidovú funkčnosť pre organickú syntézu a modifikácie polymérov. Používa sa ako nízkoviskózne reaktívne riedidlo v vysokosušinových epoxidových náteroch, lepidlách a špeciálnych chemických aplikáciách.',
        applications: [
          {
            application: 'Epoxidové a priemyselné nátery',
            description:
              'Reaktívne riedidlo na úpravu viskozity a flexibility v vysokosušinových epoxidových náterových systémoch.',
            image: demoImageDoc.id,
          },
          {
            application: 'Lepidlá a tesniace materiály',
            description:
              'Zlepšuje zmáčanie a zlepšuje tvorbu filmu v reaktívnych lepiacich a tesniacich systémoch.',
            image: image2Doc.id,
          },
          {
            application: 'Syntéza polymérov',
            description:
              'Funguje ako reaktívny monomér pre tvorbu polymérov a kopolymérov v špeciálnych aplikáciách.',
            image: image3Doc.id,
          },
          {
            application: 'Povrchová úprava',
            description:
              'Používa sa pri modifikácii silánov a polymérov na zlepšenie adhéznych vlastností.',
            image: demoImageDoc.id,
          },
          {
            application: 'Špeciálne chemikálie',
            description:
              'Medziproduk na výrobu jemných chemikálií a prispôsobených živičných systémov.',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Reaktívny medziproduk',
            description:
              'Poskytuje terminálnu epoxidovú funkčnosť pre širokú škálu organických syntéz a modifikácií polymérov.',
          },
          {
            feature: 'Nízka viskozita',
            description:
              'Efektívne ako reaktívne riedidlo pre vysokosušinové epoxidové nátery a lepidlá, znižuje viskozitu pri zúčastnení sa vytvrdzovania.',
          },
          {
            feature: 'Zlepšená flexibilita',
            description:
              'Alifatický reťazec zvyšuje ťažnosť a nárazovú odolnosť vo vytvrdnutých živičných systémoch.',
          },
          {
            feature: 'Dobrá kompatibilita',
            description:
              'Ľahko sa mieša s epoxidovými živicami, akrylátmi a uretánovými systémami pre všestranné formulácie.',
          },
          {
            feature: 'Vysoká čistota',
            description:
              'Vyrábaný v pilotných množstvách podľa kontroly kvality ISO 9001:2015 zabezpečujúcej konzistentný výkon.',
          },
          {
            feature: 'REACH uvedený, pôvod z EÚ',
            description:
              'Zabezpečuje konzistentnú kvalitu a plnú regulačnú transparentnosť od VUP, a.s. (Slovensko).',
          },
        ],
        faq: [
          {
            question: 'Na čo sa používa VUP 1,2-Epoxihexán?',
            answer:
              'Ako reaktívny monoepoxid v náteroch, lepidlách a aplikáciách syntézy polymérov vyžadujúcich nízku viskozitu a flexibilitu.',
          },
          {
            question: 'Je vhodný pre aplikácie reaktívneho riedidla?',
            answer:
              'Áno, môže znížiť viskozitu v epoxidových systémoch pri zúčastnení sa vytvrdzovacej reakcie, čo ho robí ideálnym pre vysokosušinové formulácie.',
          },
          {
            question: 'Akú úroveň čistoty dodáva VUP?',
            answer:
              'Pilotné šarže typicky spĺňajú ≥ 98% čistotu. Potvrďte presné špecifikácie prostredníctvom TDS/SDS pre vašu konkrétnu šaržu.',
          },
          {
            question: 'Ako je klasifikovaný na prepravu?',
            answer:
              'Všeobecne klasifikovaný ako horľavá kvapalina. Konzultujte SDS pre úplnú klasifikáciu prepravy, UN číslo a požiadavky na skladovanie.',
          },
          {
            question: 'Čím sa 1,2-Epoxihexán odlišuje od iných alifatických epoxidov?',
            answer:
              'Jeho šesťuhlíková alifatická štruktúra poskytuje optimálnu rovnováhu nízkej viskozity a zvýšenia flexibility pri zachovaní dobrej reaktivity.',
          },
          {
            question: 'Aký je regulačný stav tohto produktu?',
            answer:
              'Uvedený pod EC číslom 215-864-6 v inventári ECHA. Kontaktujte VUP pre špecifické podrobnosti registrácie REACH aplikovateľné na vašu dodávku.',
          },
        ],
      },
    }),
    payload.update({
      collection: 'products',
      id: epoxyoctane.id,
      locale: 'sk',
      data: {
        name: '1,2-Epoxioktán',
        description:
          'Reaktívny alifatický monoepoxid kombinujúci nízku prchavosť a vysokú reaktivitu, slúžiaci ako flexibilný stavebný blok pre pokročilé živičné a lepiace formulácie. Podporuje vývoj formulácií v náteroch, modifikácii polymérov a zosieťovacích aplikáciách.',
        applications: [
          {
            application: 'Epoxidové a priemyselné nátery',
            description:
              'Reaktívne riedidlo zvyšujúce flexibilitu, húževnatosť filmu a zmáčanie substrátu vo vysokovýkonných náterových systémoch.',
            image: demoImageDoc.id,
          },
          {
            application: 'Lepidlá a tesniace materiály',
            description:
              'Zlepšuje adhéziu a elongáciu v štrukturálnych a flexibilných lepiacich systémoch.',
            image: image2Doc.id,
          },
          {
            application: 'Modifikácia polymérov',
            description:
              'Funguje ako monomér na vytváranie hydrofóbnych polyéterov a špeciálnych kopolymérov.',
            image: image3Doc.id,
          },
          {
            application: 'Povrchová funkcionalizácia',
            description:
              'Používa sa na naštepovanie epoxidovej funkčnosti na polymerové povrchy alebo silánmi modifikované substráty.',
            image: demoImageDoc.id,
          },
          {
            application: 'Chemická syntéza',
            description:
              'Východiskový materiál pre syntézu jemných chemikálií a stabilizovaných živičných medziproduktov.',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Reaktívny monoepoxid',
            description:
              'Poskytuje kontrolovanú reaktivitu pre zosieťovanie polymérov a reakcie predlžovania reťazcov v náročných aplikáciách.',
          },
          {
            feature: 'Nízka prchavosť a zápach',
            description:
              'Vhodný pre vysokovýkonné nátery a lepidlá, kde sú prioritou stabilita a bezpečnosť pracoviska.',
          },
          {
            feature: 'Flexibilný alifatický reťazec',
            description:
              'Dodáva zlepšenú elasticitu a hydrofóbny charakter vytvrdnutým živičným systémom.',
          },
          {
            feature: 'Výborná kompatibilita',
            description:
              'Dobre sa mieša so štandardnými epoxidovými, akrylátovými a uretánovými chémiami pre všestranné formulácie.',
          },
          {
            feature: 'Pilotná výroba z EÚ',
            description:
              'Vyrábaný podľa ISO 9001:2015 vo VUP, a.s. (Slovensko), s sledovateľným zabezpečením kvality.',
          },
          {
            feature: 'Zameranie na udržateľnosť',
            description:
              'Umožňuje formulácie s nízkym obsahom VOC a vysokým obsahom pevných látok prostredníctvom správania reaktívneho riedidla.',
          },
        ],
        faq: [
          {
            question: 'Na čo sa primárne používa VUP 1,2-Epoxioktán?',
            answer:
              'Ako reaktívny alifatický monoepoxid pre nátery, lepidlá a modifikáciu polymérov, kde sa vyžaduje nízka prchavosť a kontrolovaná reaktivita.',
          },
          {
            question: 'Môže sa použiť ako reaktívne riedidlo?',
            answer:
              'Áno, efektívne znižuje viskozitu pri chemickom viazaní do vytvrdnutej matrice, čo ho robí ideálnym pre vysokosušinové formulácie.',
          },
          {
            question: 'Aké sú jeho kľúčové opatrenia pri manipulácii?',
            answer:
              'Vyhnite sa teplu, kyselinám a vlhkosti. Skladujte v chladnom, suchom, vetranom priestore. Konzultujte SDS pre úplné bezpečnostné pokyny a postupy manipulácie.',
          },
          {
            question: 'Je tento produkt registrovaný v REACH?',
            answer:
              'Áno, látka je uvedená pod EC 221-047-5. Potvrďte konkrétne podrobnosti registrácie s regulačným tímom VUP pre vašu dodávku.',
          },
          {
            question: 'Ako dlhší C8 reťazec ovplyvňuje výkon?',
            answer:
              'Osem-uhlíkový alifatický reťazec poskytuje nižšiu prchavosť, zvýšenú hydrofóbnosť a zlepšenú flexibilitu v porovnaní s kratšími epoxidmi.',
          },
          {
            question: 'Čím sa 1,2-Epoxioktán odlišuje od iných alifatických epoxidov?',
            answer:
              'Jeho kombinácia nízkej prchavosti, kontrolovanej reaktivity a zvýšenia flexibility ho robí obzvlášť vhodným pre vysokovýkonné aplikácie s nízkym zápachom.',
          },
        ],
      },
    }),
  ])

  // --------------------
  // ADDING SLOVAK TRANSLATIONS FOR PRODUCTS (BATCH 10: EPOXY-7-OCTENE, EPOXYDECANE, DIEPOXYHEXANE)
  // --------------------

  payload.logger.info('- Adding Slovak translations for batch 10 products...')

  await Promise.all([
    payload.update({
      collection: 'products',
      id: epoxy7octene.id,
      locale: 'sk',
      data: {
        name: '1,2-Epoxi-7-oktén',
        description:
          'Dvojfunkčný alifatický epoxid obsahujúci oxiránový kruh aj terminálnu dvojnú väzbu, poskytujúci všestrannú reaktivitu pre modifikáciu polymérov a zosieťovanie. Vhodný pre nátery, lepidlá a špeciálne medziprodukty využívajúce kontrolovanú flexibilitu.',
        applications: [
          {
            application: 'Nátery a tesniace materiály',
            description:
              'Zlepšuje flexibilitu, adhéziu a integritu filmu v epoxidových a hybridných náterových systémoch.',
            image: demoImageDoc.id,
          },
          {
            application: 'Lepidlá',
            description:
              'Zvyšuje pevnosť väzby a zmáčanie pri znižovaní viskozity v lepiacich formuláciách.',
            image: image2Doc.id,
          },
          {
            application: 'Modifikácia polymérov a živíc',
            description:
              'Reaguje prostredníctvom epoxidových alebo alylových skupín pre prispôsobené polymerové architektúry v pokročilých aplikáciách.',
            image: image3Doc.id,
          },
          {
            application: 'Povrchová funkcionalizácia',
            description:
              'Zavádzanie reaktívnych miest pre zosieťovanie alebo naštepovanie v pokročilých kompozitných materiáloch.',
            image: demoImageDoc.id,
          },
          {
            application: 'Jemné chemikálie',
            description:
              'Medziproduk pri syntéze vlastných epoxidových monomerov a reaktívnych modifikátorov.',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Dvojitá funkčnosť',
            description:
              'Kombinuje epoxidovú skupinu a alylovú dvojnú väzbu, umožňujúc selektívne reakcie pre pokročilú modifikáciu polymérov.',
          },
          {
            feature: 'Potenciál reaktívneho riedidla',
            description:
              'Znižuje viskozitu pri zachovaní plnej reaktivity počas vytvrdzovania, ideálne pre vysokosušinové formulácie.',
          },
          {
            feature: 'Zlepšená flexibilita',
            description:
              'Alifatická reťazová štruktúra poskytuje vynikajúcu elasticitu filmu a nárazovú odolnosť.',
          },
          {
            feature: 'Výborná kompatibilita',
            description:
              'Vhodný pre epoxidové, akrylátové a polyuretánové systémy pre všestranné formulačné možnosti.',
          },
          {
            feature: 'Vysoká čistota',
            description:
              'Vyrábaný podľa ISO 9001:2015 v pilotných podmienkach EÚ zabezpečujúc konzistentnú kvalitu.',
          },
          {
            feature: 'Nízka farba a nízky zápach',
            description:
              'Ideálny pre vysoko špecifikované náterové a lepiace systémy, kde záleží na estetike.',
          },
        ],
        faq: [
          {
            question: 'Na čo sa používa 1,2-Epoxi-7-oktén?',
            answer:
              'Ako dvojfunkčný reaktívny monomér pre nátery, lepidlá a aplikácie modifikácie polymérov vyžadujúce epoxidovú aj alylovú reaktivitu.',
          },
          {
            question: 'Prečo je medzi epoxidmi jedinečný?',
            answer:
              'Obsahuje epoxidové aj alylové reaktívne miesta, ponúkajúc zvýšenú všestrannosť formulácie a umožňujúc selektívne reakcie nemožné s monofunkčnými epoxidmi.',
          },
          {
            question: 'Je vhodný pre testovanie v pilotnom meradle?',
            answer:
              'Áno, VUP ponúka množstvá z pilotného závodu ideálne pre hodnotenie a vývojové účely v R&D a priemyselnom testovaní.',
          },
          {
            question: 'Ako by sa mal skladovať?',
            answer:
              'Skladujte v utesnených nádobách v chladnom, vetranom priestore. Konzultujte SDS pre podrobné pokyny k manipulácii a OOP.',
          },
          {
            question: 'Ako sa porovnáva s 1,2-Epoxi-5-hexénom?',
            answer:
              'Obidva ponúkajú dvojitú funkčnosť, ale 1,2-Epoxi-7-oktén má dlhší C8 reťazec poskytujúci nižšiu prchavosť a zvýšenú flexibilitu v porovnaní s C6 reťazcom 1,2-Epoxi-5-hexénu.',
          },
          {
            question: 'Aký je regulačný stav tohto produktu?',
            answer:
              'Uvedený pod EC číslom 243-178-7 v databáze ECHA. Kontaktujte VUP pre podrobnosti registrácie a dodávky špecifické pre vaše požiadavky.',
          },
        ],
      },
    }),
    payload.update({
      collection: 'products',
      id: epoxydecane.id,
      locale: 'sk',
      data: {
        name: '1,2-Epoxidekán',
        description:
          'Dlhý reťazcový alifatický monoepoxid kombinujúci vysokú hydrofóbnosť s reaktívnou epoxidovou funkčnosťou. Vhodný pre nátery, lepidlá a aplikácie povrchových úprav, kde sa vyžaduje flexibilita, nízka polarita a odolnosť voči vode.',
        applications: [
          {
            application: 'Nátery a tesniace materiály',
            description:
              'Zlepšuje flexibilitu, lesk a hydrofóbnosť v epoxidových alebo uretánových náterových systémoch.',
            image: demoImageDoc.id,
          },
          {
            application: 'Lepidlá',
            description:
              'Zvyšuje adhéziu a elasticitu pri znižovaní absorpcie vody v lepiacich formuláciách.',
            image: image2Doc.id,
          },
          {
            application: 'Modifikácia polymérov',
            description:
              'Používa sa na zavedenie epoxidovej funkčnosti v hydrofóbnych kopolyméroch alebo povrchovo aktívnymi látkami modifikovaných živiciach.',
            image: image3Doc.id,
          },
          {
            application: 'Povrchová úprava',
            description:
              'Naštepuje epoxidové skupiny na nízkoenergetické povrchy na zvýšenie natierateľnosti a adhézie.',
            image: demoImageDoc.id,
          },
          {
            application: 'Jemné chemické medziprodukty',
            description:
              'Stavebný blok pre epoxidy s vyššou molekulovou hmotnosťou a povrchovo aktívne látky.',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Dlhý reťazcový alifatický epoxid',
            description:
              'Poskytuje hydrofóbne a flexibilné vlastnosti pri začlenení do polymérov alebo náterov.',
          },
          {
            feature: 'Reaktívny medziproduk',
            description:
              'Umožňuje kontrolované epoxidové zosieťovanie a modifikáciu polyuretánov, akrylov a živíc.',
          },
          {
            feature: 'Zlepšená odolnosť voči vode',
            description:
              'Ideálny pre nízko polárne nátery a lepidlá vyžadujúce odpudenie vlhkosti.',
          },
          {
            feature: 'Nízka prchavosť',
            description:
              'Zvyšuje bezpečnosť pracoviska a stabilitu pri vysokoteplotných aplikáciách.',
          },
          {
            feature: 'Pilotná výroba z EÚ',
            description: 'Dodávaný VUP, a.s. (Slovensko) podľa systému kvality ISO 9001:2015.',
          },
          {
            feature: 'Všestranné aplikácie',
            description: 'Slúži ako epoxidovo-funkčný hydrofób pre R&D a špeciálne formulácie.',
          },
        ],
        faq: [
          {
            question: 'Na čo sa primárne používa VUP 1,2-Epoxidekán?',
            answer:
              'Ako reaktívny alifatický monoepoxid pre hydrofóbne nátery, lepidlá a modifikáciu polymérov, kde je odolnosť voči vode kritická.',
          },
          {
            question: 'Čím sa odlišuje od epoxidov s kratším reťazcom?',
            answer:
              'Jeho dlhší desaťuhlíkový reťazec poskytuje zvýšenú flexibilitu a odolnosť voči vode, ideálny pre nízko polárne systémy vyžadujúce hydrofóbne charakteristiky.',
          },
          {
            question: 'Je vhodný ako reaktívne riedidlo?',
            answer:
              'Áno, pôsobí ako nízkoprchavý reaktívny modifikátor, zlepšujúci flexibilitu a znižujúci viskozitu v živičných formuláciách.',
          },
          {
            question: 'Ako sa skladuje a manipuluje?',
            answer:
              'Skladujte v uzavretých nádobách, ďaleko od tepla a oxidačných činidiel. Dodržujte pokyny SDS pre OOP a vetracie požiadavky.',
          },
          {
            question: 'Ktoré aplikácie majú najväčší úžitok z tohto dlhého reťazcového epoxidu?',
            answer:
              'Aplikácie vyžadujúce hydrofóbnu modifikáciu, odolnosť voči vode a flexibilitu, ako sú námorné nátery, vonkajšie lepidlá a nízko polárne povrchové úpravy.',
          },
          {
            question: 'Aký je regulačný stav tohto produktu?',
            answer:
              'Uvedený pod EC číslom 219-295-4 v inventári ECHA. Kontaktujte VUP pre podrobnosti registrácie a dodávateľského reťazca.',
          },
        ],
      },
    }),
    payload.update({
      collection: 'products',
      id: diepoxyhexane.id,
      locale: 'sk',
      data: {
        name: '1,2,5,6-Diepoxihexán',
        description:
          'Bifunkčný alifatický epoxid obsahujúci dve terminálne oxiránové skupiny. Slúži ako špecializovaný zosieťovač a predlžovač reťazca v náteroch, lepidlách a aplikáciách syntézy polymérov, ktoré vyžadujú zvýšenú flexibilitu, nízku viskozitu a vylepšenú reaktivitu.',
        applications: [
          {
            application: 'Nátery a tesniace materiály',
            description:
              'Zvyšuje hustotu zosieťovania a tvrdosť epoxidových a uretánových náteroch pri zachovaní flexibility.',
            image: demoImageDoc.id,
          },
          {
            application: 'Lepidlá',
            description:
              'Funguje ako bifunkčný modifikátor zlepšujúci adhéziu a rýchlosť vytvrdzovania.',
            image: image2Doc.id,
          },
          {
            application: 'Modifikácia polymérov',
            description:
              'Zavádza dodatočnú epoxidovú funkcionalitu do polyesterov, polyéterov a kopolymérov.',
            image: image3Doc.id,
          },
          {
            application: 'Kompozitné a živičné systémy',
            description: 'Poskytuje nízkoviskózny zosieťovač pre termosetové živičné systémy.',
            image: demoImageDoc.id,
          },
          {
            application: 'Jemné chemikálie a špecializovaná syntéza',
            description:
              'Používa sa v laboratórnej a pilotnej syntéze reaktívnych medziproduktov a oligomérov.',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Bifunkčná reaktivita',
            description:
              'Dve epoxidové skupiny poskytujú silný potenciál zosieťovania pre termosetové a polymérové systémy.',
          },
          {
            feature: 'Nízka viskozita',
            description:
              'Účinný ako reaktívne riedidlo v epoxidových a polyuretánových formuláciách.',
          },
          {
            feature: 'Vysoká reaktivita',
            description:
              'Podporuje rýchle rýchlosti vytvrdzovania a zlepšenú konverziu pri katiónovej a aniónnej polymerizácii.',
          },
          {
            feature: 'Zlepšený mechanický výkon',
            description:
              'Pridáva flexibilitu, odolnosť a hydrolytickú stabilitu do vytvrdených systémov.',
          },
          {
            feature: 'Dostupnosť z pilotného závodu',
            description:
              'Vyrábané spoločnosťou VUP, a.s. za kontrolovaných podmienok pre hodnotenie a špeciálne aplikácie.',
          },
          {
            feature: 'Pôvod z EÚ a zhoda s REACH',
            description:
              'Vyrobené podľa ISO 9001:2015 zabezpečujúce sledovateľnosť a konzistentnú kvalitu.',
          },
        ],
        faq: [
          {
            question: 'Na čo sa primárne používa 1,2,5,6-Diepoxihexán?',
            answer:
              'Ako bifunkčný reaktívny epoxid pre nátery, lepidlá a modifikáciu polymérov vyžadujúcu zlepšené zosieťovanie.',
          },
          {
            question: 'Ako sa líši od monoepoxidov?',
            answer:
              'Poskytuje dve epoxidové skupiny, čím zvyšuje zosieťovanie a reaktivitu v termosetových a elastomérových systémoch v porovnaní s jednofunkčnými epoxidmi.',
          },
          {
            question: 'Aké sú jeho bezpečnostné opatrenia pri manipulácii?',
            answer:
              'Vyhýbajte sa vlhkosti, teplu a kyselinám. Skladujte v uzavretých nádobách; pre úplné pokyny k manipulácii si pozrite SDS.',
          },
          {
            question: 'Je uvedený v REACH?',
            answer:
              'Áno, látka je uvedená pod CAS 1888-89-7, EC 217-564-0. Pre konkrétne podrobnosti registrácie kontaktujte regulačné oddelenie VUP.',
          },
          {
            question: 'Ako sa porovnáva s 1,2,7,8-Diepoxioktánom?',
            answer:
              'Obe sú bifunkčné diepoxidy, ale 1,2,5,6-Diepoxihexán má kratší C6 reťazec poskytujúci vyššiu hustotu epoxidových skupín na jednotku hmotnosti a odlišné fyzikálne vlastnosti.',
          },
          {
            question: 'Ktoré aplikácie majú úžitok z jeho bifunkčnej štruktúry?',
            answer:
              'Aplikácie vyžadujúce vysokú hustotu zosieťovania, ako sú vysoko výkonné nátery, štrukturálne lepidlá a termosetové kompozity, majú najväčší úžitok z jeho duálnej epoxidovej funkčnosti.',
          },
        ],
      },
    }),
  ])

  // --------------------
  // ADDING SLOVAK TRANSLATIONS FOR PRODUCTS (BATCH 11: DIMETHYL-EPOXYBUTANE, TMDD, LONG-CHAIN-TMDD)
  // --------------------

  payload.logger.info('- Adding Slovak translations for batch 11 products...')

  await Promise.all([
    payload.update({
      collection: 'products',
      id: dimethylepoxybutane.id,
      locale: 'sk',
      data: {
        name: '3,3-Dimetyl-1,2-epoxybután',
        description:
          'Kompaktný terciárny monoepoxid cenený pre svoju stericky bránenú reaktivitu a prchavosť, vhodný pre laboratórnu syntézu a mechanistické štúdie. Slúži ako reaktívny medziproduk pre vývoj jemných chemikálií, výskum náterov a modelové systémy polymérov.',
        applications: [
          {
            application: 'Výskum a vývoj',
            description:
              'Pre štúdium reakcií otvárania epoxidového kruhu, nukleofilných substitúcií a mechanizmov polymerizácie.',
            image: demoImageDoc.id,
          },
          {
            application: 'Syntéza jemných chemikálií',
            description:
              'Používa sa pri vývoji medziproduktov vysokej čistoty a špecializovaných činidiel.',
            image: image2Doc.id,
          },
          {
            application: 'Výskum náterov',
            description:
              'Slúži ako analóg reaktívneho monoméru v laboratórnej modifikácii živíc a modelovaní výkonu.',
            image: image3Doc.id,
          },
          {
            application: 'Chémia polymérov',
            description:
              'Referenčná zlúčenina pre štúdie reaktivity a simuláciu účinkov sterického brzdenia.',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Stericky bránený epoxid',
            description:
              'Ideálny pre kontrolovanú reaktivitu a modelové reakčné štúdie vďaka svojej terciárnej štruktúre.',
          },
          {
            feature: 'Vysoká prchavosť',
            description:
              'Vhodný pre nastavenia plynnej fázy alebo kinetického výskumu vyžadujúce prchavé činidlá.',
          },
          {
            feature: 'Kompaktná terciárna štruktúra',
            description:
              'Umožňuje skúmanie substitučných a kruho-otváracích mechanizmov za rôznych podmienok.',
          },
          {
            feature: 'Využitie v jemnej chémii',
            description:
              'Prekurzor pre vysoko hodnotné medziprodukty vo výskume náterov a chémie polymérov.',
          },
          {
            feature: 'Dostupnosť v laboratórnom meradle',
            description:
              'Dodávané v obmedzených výskumných množstvách pre analytické, kinetické alebo syntetické použitie.',
          },
          {
            feature: 'Vyrobené podľa ISO 9001:2015',
            description:
              'Zabezpečuje analytickú sledovateľnosť a kontrolu čistoty pre laboratórne aplikácie.',
          },
        ],
        faq: [
          {
            question: 'Čím sa 3,3-Dimetyl-1,2-epoxybután líši od iných epoxidov?',
            answer:
              'Jeho terciárna štruktúra poskytuje sterické brzdenie, čo ho robí ideálnym pre štúdie reaktivity a mechanizmov, kde je požadovaná kontrolovaná reaktivita.',
          },
          {
            question: 'Je dostupný pre priemyselné použitie?',
            answer:
              'V súčasnosti sa vyrába len v laboratórnych množstvách, vhodný pre výskum a testovanie, nie pre priemyselnú výrobu.',
          },
          {
            question: 'Aké sú hlavné bezpečnostné opatrenia?',
            answer:
              'Vysoko horľavý—manipulujte v digestori ďaleko od zdrojov vznietenia. Skladujte pod 25°C v chladnom, vetranom priestore. Pre úplné bezpečnostné pokyny konzultujte SDS.',
          },
          {
            question: 'Ktoré aplikácie majú úžitok z jeho sterického brzdenia?',
            answer:
              'Mechanistické štúdie, kinetické výskumy, modelové systémy polymérov a výskum vyžadujúci kontrolovanú reaktivitu epoxidu majú najväčší úžitok z jeho terciárnej štruktúry.',
          },
          {
            question: 'Je tento produkt registrovaný v REACH?',
            answer:
              'CAS 2245-30-9 je uvedený v medzinárodných inventároch. Pre konkrétne podrobnosti o pokrytí REACH kontaktujte regulačné oddelenie VUP.',
          },
        ],
      },
    }),
    payload.update({
      collection: 'products',
      id: tmdd.id,
      locale: 'sk',
      data: {
        name: '2,4,7,9-Tetrametyl-5-decín-4,7-diol',
        description:
          'Vysoko výkonný acetylenický diolový surfaktant ponúkajúci vynikajúcu kontrolu povrchového napätia a toku vo formuláciách náterov a tlačiarenských farieb. TMDD slúži ako multifunkčné aditívum poskytujúce zlepšené zmáčanie, vyrovnávanie a kompatibilitu v širokej škále systémov na báze rozpúšťadiel a vodných systémov.',
        applications: [
          {
            application: 'Nátery a farby',
            description:
              'Kontroluje povrchové napätie, zlepšuje rovnomernosť filmu a zvyšuje lesk v náterových formuláciách.',
            image: demoImageDoc.id,
          },
          {
            application: 'Tlačiarenské farby',
            description:
              'Podporuje disperziu pigmentov a kvalitu tlače zlepšeným zmáčaním substrátu.',
            image: image2Doc.id,
          },
          {
            application: 'Lepidlá a tesniace materiály',
            description:
              'Zlepšuje rozloženie a adhéziu na nízkoenergetických povrchoch pre zlepšené spojenie.',
            image: image3Doc.id,
          },
          {
            application: 'Polymérne emulzie',
            description: 'Pôsobí ako dynamický surfaktant zlepšujúci stabilitu a výkon emulzie.',
            image: demoImageDoc.id,
          },
          {
            application: 'Textilné úpravy a čistiace prostriedky',
            description:
              'Používa sa v špeciálnych formuláciách, kde je zmáčanie a kontrola toku kritická.',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Kontrola povrchového napätia',
            description:
              'Znižuje statické aj dynamické povrchové napätie pre zlepšené zmáčanie substrátu.',
          },
          {
            feature: 'Zlepšený tok a vyrovnávanie',
            description:
              'Predchádza defektom, ako sú krátery, dutinky a pomarančová koža v náteroch a tlačiarenských farbách.',
          },
          {
            feature: 'Široká kompatibilita',
            description: 'Dobre funguje vo vodných, rozpúšťadlových a UV-vytvrditeľných systémoch.',
          },
          {
            feature: 'Nízka tvorba peny',
            description: 'Umožňuje stabilnú tvorbu filmu bez nadmerného penenia.',
          },
          {
            feature: 'Všestranná funkcionalita',
            description:
              'Pôsobí ako zmáčadlo, modifikátor toku alebo koalescenčné aditívum v rôznych formuláciách.',
          },
          {
            feature: 'Kvalita z EÚ',
            description:
              'Vyrobené podľa ISO 9001:2015, zabezpečujúce vysokú čistotu a konzistenciu šarže.',
          },
        ],
        faq: [
          {
            question: 'Na čo sa TMDD používa?',
            answer:
              'TMDD sa používa ako povrchovo aktívne činidlo a zmáčacie aditívum v náteroch, tlačiarenských farbách, lepidlách a polymérnych emulziách na zlepšenie toku, vyrovnávania a zmáčania substrátu.',
          },
          {
            question: 'Je TMDD kompatibilný s vodnými aj rozpúšťadlovými systémami?',
            answer:
              'Áno, TMDD účinne funguje vo vodných aj rozpúšťadlových formuláciách, ako aj v UV-vytvrditeľných systémoch.',
          },
          {
            question: 'Spôsobuje TMDD penenie?',
            answer:
              'Nie, TMDD je navrhnutý pre nízku tvorbu peny pri zachovaní účinnej povrchovej aktivity, čo ho robí ideálnym pre aplikácie náterov a tlačiarenských farieb.',
          },
          {
            question: 'Aká čistá je TMDD od VUP?',
            answer:
              'Šarže z pilotného závodu majú zvyčajne čistotu ≥ 98%, overe­nú metódami GC a titrácie, zabezpečujúc konzistentný výkon.',
          },
          {
            question: 'Čím sa TMDD líši od konvenčných surfaktantov?',
            answer:
              'TMDD je acetylenický diol s jedinečnou trojväzbovou štruktúrou poskytujúcou vynikajúce zníženie dynamického povrchového napätia a vynikajúcu kompatibilitu v rôznych náterových systémoch.',
          },
          {
            question: 'Je TMDD registrovaný v REACH?',
            answer:
              'Áno, TMDD (CAS 126-86-3, EC 204-809-1) je registrovaná látka podľa EU REACH. Pre konkrétne podrobnosti registrácie kontaktujte VUP.',
          },
        ],
      },
    }),
    payload.update({
      collection: 'products',
      id: longChainTmdd.id,
      locale: 'sk',
      data: {
        name: '2,5,8,11-Tetrametyl-6-dodecín-5,8-diol',
        description:
          'Dlhý reťazcový acetylenický diolový surfaktant kombinujúci vynikajúcu kontrolu dynamického povrchového napätia so zvýšenou hydrofóbnosťou. Poskytuje vynikajúci výkon v systémoch na báze rozpúšťadiel a vysoko plnených systémoch, podporujúc zlepšené zmáčanie, vyrovnávanie a uniformitu filmu.',
        applications: [
          {
            application: 'Nátery a farby',
            description:
              'Zlepšuje zmáčanie povrchu, tok a kontrolu lesku v náterových formuláciách na báze rozpúšťadiel.',
            image: demoImageDoc.id,
          },
          {
            application: 'Tlačiarenské farby',
            description:
              'Uľahčuje disperziu pigmentov a konzistentnú pokrytie substrátu pre vysoko kvalitné tlače.',
            image: image2Doc.id,
          },
          {
            application: 'Lepidlá a tesniace materiály',
            description: 'Poskytuje zlepšené rozloženie a adhéziu na hydrofóbnych povrchoch.',
            image: image3Doc.id,
          },
          {
            application: 'Polymérne prísady',
            description:
              'Používa sa ako povrchovo aktívna prísada vo vysoko plnených a rozpúšťadlových polymérnych systémoch.',
            image: demoImageDoc.id,
          },
          {
            application: 'Úprava textilu a kože',
            description: 'Podporuje rovnomerné zmáčanie a absorpciu na náročných substrátoch.',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Zvýšená hydrofóbnosť',
            description:
              'Dlhší uhlíkový reťazec poskytuje vynikajúce zmáčanie na nízkoenergetických substrátoch.',
          },
          {
            feature: 'Zníženie dynamického povrchového napätia',
            description:
              'Udržuje konzistentné vyrovnávanie a rozloženie aj pri vysokorýchlostnej aplikácii.',
          },
          {
            feature: 'Vynikajúca kompatibilita',
            description: 'Funguje v rozpúšťadlových aj vysoko plnených formuláciách.',
          },
          {
            feature: 'Zlepšený lesk a tok',
            description: 'Zvyšuje hladkosť filmu a vzhľad bez tvorby kráterov.',
          },
          {
            feature: 'Nízky penový profil',
            description: 'Zabezpečuje stabilný aplikačný výkon s minimálnym penením.',
          },
          {
            feature: 'ISO certifikovaná kvalita',
            description: 'Vyrobené podľa ISO 9001:2015 s konzistentnou sledovateľnosťou šarže.',
          },
        ],
        faq: [
          {
            question: 'Ako sa tento produkt líši od TMDD?',
            answer:
              'Dlhší uhlíkový reťazec poskytuje zvýšenú hydrofóbnosť a kompatibilitu s vysoko plnenými a rozpúšťadlovými systémami v porovnaní so štandardným TMDD.',
          },
          {
            question: 'Je vhodný pre vodné nátery?',
            answer:
              'Môže sa používať v dispergovanej forme s surfaktantmi, ale je primárne navrhnutý pre rozpúšťadlové a vysoko plnené formulácie.',
          },
          {
            question: 'Aká je úroveň čistoty?',
            answer: '≥ 98%, s analytickým overením pomocou GC a NMR pre konzistentný výkon.',
          },
          {
            question: 'Ovplyvňuje lesk?',
            answer: 'Áno, zvyšuje lesk a uniformitu filmu zlepšením toku a vyrovnávania povrchu.',
          },
          {
            question: 'Ktoré aplikácie majú najväčší úžitok z dlhšieho reťazca?',
            answer:
              'Vysoko plnené nátery, rozpúšťadlové systémy a aplikácie vyžadujúce zlepšené zmáčanie na nízkoenergetických alebo hydrofóbnych substrátoch majú najväčší úžitok.',
          },
          {
            question: 'Je tento produkt registrovaný v REACH?',
            answer:
              'Áno, je uvedený pod EC 269-348-0 a registrovaný v kategórii acetylenických diolov. Pre konkrétne podrobnosti registrácie kontaktujte VUP.',
          },
        ],
      },
    }),
  ])

  // --------------------
  // ADDING SLOVAK TRANSLATIONS FOR PRODUCTS (BATCH 12: DMHD, DIMETHYL-HEXYNOL, DIMETHYL-HEPTYNOL)
  // --------------------

  payload.logger.info('- Adding Slovak translations for batch 12 products...')

  await Promise.all([
    payload.update({
      collection: 'products',
      id: dmhd.id,
      locale: 'sk',
      data: {
        name: '2,5-Dimetyl-3-hexín-2,5-diol',
        description:
          'Symetrický acetylenický diol používaný ako reaktívny medziproduk pre vývoj surfaktantov a aditív. Slúži ako modelová zlúčenina pre štúdie štruktúra–aktivita a ako všestranný prekurzor pre zmáčacie a povrchovo kontrolné aditíva.',
        applications: [
          {
            application: 'Vývoj surfaktantov',
            description:
              'Medziproduk pre neionogénne surfaktanty a činidlá pre dynamické povrchové napätie.',
            image: demoImageDoc.id,
          },
          {
            application: 'Výskum náterov',
            description:
              'Hodnotený ako modelový diol pre štúdie toku a vyrovnávania v náterových formuláciách.',
            image: image2Doc.id,
          },
          {
            application: 'Tlačiarenské farby',
            description:
              'Prekurzor pre povrchové modifikátory na zlepšené zmáčanie a disperziu pigmentov.',
            image: image3Doc.id,
          },
          {
            application: 'Polymérne prísady',
            description:
              'Používa sa pri syntéze acetylenický-modifikovaných živičných medziproduktov.',
            image: demoImageDoc.id,
          },
          {
            application: 'Akademický a priemyselný výskum',
            description:
              'Referenčná zlúčenina pre skúmanie reakčných mechanizmov a štúdie povrchovej chémie.',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Symetrická diolová štruktúra',
            description:
              'Zjednodušuje modelovanie správania surfaktantov a aditív vo výskumných aplikáciách.',
          },
          {
            feature: 'Vysoká čistota',
            description: 'Vhodné pre analytický výskum a štúdie reakčných mechanizmov.',
          },
          {
            feature: 'Reaktívny medziproduk',
            description: 'Umožňuje syntézu špeciálnych surfaktantov a výkonnostných aditív.',
          },
          {
            feature: 'Povrchová aktivita',
            description: 'Tvorí štrukturálne jadro mnohých zmáčacích a vyrovnávacích činidiel.',
          },
          {
            feature: 'Stabilný za normálnych podmienok',
            description: 'Bezpečné na manipuláciu v štandardných laboratórnych prostrediach.',
          },
          {
            feature: 'Vyrobené podľa ISO 9001:2015',
            description:
              'Zabezpečuje sledovateľnú kvalitu a analytické overenie pre laboratórne použitie.',
          },
        ],
        faq: [
          {
            question: 'Aká je hlavná funkcia tejto zlúčeniny?',
            answer:
              'Slúži ako symetrický diol pre syntézu surfaktantov a ako referenčná zlúčenina vo výskume povrchovej chémie.',
          },
          {
            question: 'Môže sa použiť priamo v náteroch?',
            answer:
              'Primárne pre laboratórne hodnotenie alebo vývoj formulácií; nie je určené pre priame priemyselné použitie.',
          },
          {
            question: 'Akú čistotu dodáva VUP?',
            answer:
              'Čistota laboratórnej kvality je zvyčajne ≥ 98%, overená metódami GC a titrácie.',
          },
          {
            question: 'Je to registrované v REACH?',
            answer:
              'Je uvedené v databáze ECHA (EC 205-533-4) a dostupné pre laboratórne výskumné aplikácie pod laboratórnou výnimkou.',
          },
          {
            question: 'Čo robí túto zlúčeninu užitočnou pre výskum?',
            answer:
              'Jeho symetrická štruktúra zjednodušuje molekulárne modelovanie a robí z neho ideálnu referenčnú zlúčeninu pre štúdium správania acetylenických diolov v povrchovo aktívnych aplikáciách.',
          },
          {
            question: 'Ako sa líši od TMDD?',
            answer:
              'DMHD je menšia, symetrická molekula používaná primárne pre výskum a vývoj, zatiaľ čo TMDD je komerčný surfaktant používaný v priemyselných náteroch a tlačiarenských farbách.',
          },
        ],
      },
    }),
    payload.update({
      collection: 'products',
      id: dimethylhexynol.id,
      locale: 'sk',
      data: {
        name: '3,5-Dimetyl-1-hexín-3-ol',
        description:
          'Krátko-reťazcový acetylenický alkohol používaný ako kľúčový medziproduk pri syntéze surfaktantov a aditív pre nátery. Vyrábaný v pilotných množstvách spoločnosťou VUP, a.s. (Prievidza, Slovensko), táto zlúčenina kombinuje reaktivitu a rozpustnosť ideálnu pre aplikácie v modifikácii polymérov, lepidlách a vývoji jemných chemikálií.',
        applications: [
          {
            application: 'Nátery a farby',
            description:
              'Prekurzor pre modifikátory toku a vyrovnávania pre systémy na báze rozpúšťadiel, zlepšujúci povrchový povrch a výkon.',
            image: demoImageDoc.id,
          },
          {
            application: 'Lepidlá a tesniace materiály',
            description:
              'Zlepšuje zmáčanie substrátu a adhézne vlastnosti pre lepší výkon pri spájaní.',
            image: image2Doc.id,
          },
          {
            application: 'Surfaktanty',
            description:
              'Používa sa pri syntéze činidiel na dynamickú kontrolu povrchového napätia pre nátery a aplikácie atramentov.',
            image: image3Doc.id,
          },
          {
            application: 'Polymérne prísady',
            description:
              'Medziproduk pre flexibilné, acetylenicky funkcionalizované polyméry s prispôsobenými vlastnosťami.',
            image: demoImageDoc.id,
          },
          {
            application: 'Jemné chemikálie',
            description:
              'Prekurzor pre špeciálne medziprodukty na báze alkínov a diolov pri zákazkovej syntéze.',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Reaktívny medziproduk',
            description:
              'Kľúčový stavebný blok pre syntézu acetylenických diolov a povrchovo aktívnych činidiel.',
          },
          {
            feature: 'Vynikajúca kompatibilita s rozpúšťadlami',
            description:
              'Miešateľný s bežnými organickými rozpúšťadlami pre všestranné použitie vo formuláciách.',
          },
          {
            feature: 'Zlepšené zmáčanie a tok',
            description: 'Slúži ako výkonnostná zložka v systémoch prísad pre nátery a lepidlá.',
          },
          {
            feature: 'Stabilná manipulácia',
            description:
              'Nízka prchavosť v porovnaní s alkínolmi s nižšou molekulovou hmotnosťou pre bezpečnejšie spracovanie.',
          },
          {
            feature: 'Dostupnosť v pilotnom meradle',
            description:
              'Vyrábaný za kontrolovaných podmienok pre priemyselné hodnotenie a zákazkovú syntézu.',
          },
          {
            feature: 'Zabezpečenie kvality',
            description:
              'Vyrábaný podľa certifikácie ISO 9001:2015 pre konzistentnú čistotu a výkon.',
          },
        ],
        faq: [
          {
            question: 'Na čo sa 3,5-dimetyl-1-hexín-3-ol hlavne používa?',
            answer:
              'Je to prekurzor pre acetylenické diolové surfaktanty a prísady na kontrolu toku v náteroch a atramentoch.',
          },
          {
            question: 'Je kompatibilný s polárne aj nepolárne rozpúšťadlami?',
            answer:
              'Áno, vykazuje širokú kompatibilitu s rozpúšťadlami vrátane alkoholov, ketónov a uhľovodíkov.',
          },
          {
            question: 'Akú čistotu má pilotný materiál?',
            answer: 'VUP zvyčajne dodáva čistotu ≥ 98%, overenú analýzou GC.',
          },
          {
            question: 'Má nejakú klasifikáciu nebezpečenstva?',
            answer:
              'Nie je klasifikovaný ako nebezpečný za normálnych transportných podmienok; manipulujte podľa pokynov SDS.',
          },
          {
            question: 'Čo robí túto zlúčeninu vhodnou pre náterové aplikácie?',
            answer:
              'Jeho acetylenická štruktúra v kombinácii s hydroxylovom funkčnosťou poskytuje ideálnu rovnováhu reaktivity a povrchovej aktivity potrebnej pre modifikátory toku a zmáčania.',
          },
          {
            question: 'Je kompatibilný s REACH?',
            answer:
              'Registrovaný v ECHA ako acetylenický alkohol; kompatibilný s REACH. Pre špecifické registračné podrobnosti kontaktujte VUP.',
          },
        ],
      },
    }),
    payload.update({
      collection: 'products',
      id: dimethylheptynol.id,
      locale: 'sk',
      data: {
        name: '3,6-Dimetyl-1-heptín-3-ol',
        description:
          'Terciárny acetylenický alkohol používaný ako medziproduk pre syntézu surfaktantov a aditív pre nátery. Vyrábaný v pilotných množstvách spoločnosťou VUP, a.s. (Prievidza, Slovensko), táto zlúčenina kombinuje reaktivitu s hydrofóbnym charakterom, čo ju robí cennou pri formulovaní zmáčacích a tokom kontrolných činidiel pre nátery, atramenty a lepidlá.',
        applications: [
          {
            application: 'Nátery a farby',
            description:
              'Zlepšuje tok, lesk a kontrolu defektov prostredníctvom zníženia dynamického povrchového napätia.',
            image: demoImageDoc.id,
          },
          {
            application: 'Tlačiarenské farby',
            description: 'Podporuje zmáčanie a disperziu pigmentov na hydrofóbnych substrátoch.',
            image: image2Doc.id,
          },
          {
            application: 'Lepidlá a tesniace materiály',
            description: 'Zlepšuje rozprestieranie a medzifázovú adhéziu pre lepšie spojenie.',
            image: image3Doc.id,
          },
          {
            application: 'Polymérna syntéza',
            description:
              'Medziproduk pre funkčné monoméry a reaktívne prísady v polymérnych aplikáciách.',
            image: demoImageDoc.id,
          },
          {
            application: 'Výskum jemných chemikálií',
            description:
              'Používa sa ako referenčná zlúčenina v štúdiách reaktivity acetylenických alkoholov.',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Reaktívny medziproduk',
            description:
              'Používa sa pri syntéze acetylenických surfaktantov a povrchovo aktívnych činidiel.',
          },
          {
            feature: 'Hydrofóbna reťazová rovnováha',
            description: 'Poskytuje silný výkon zmáčania a toku v systémoch na báze rozpúšťadiel.',
          },
          {
            feature: 'Stabilita terciárneho alkoholu',
            description: 'Odolný voči oxidácii za normálnych podmienok spracovania.',
          },
          {
            feature: 'Všestrannosť formulácií',
            description: 'Účinný v náteroch, atramentoch a polymérnych formuláciách.',
          },
          {
            feature: 'Dostupnosť v pilotnom meradle',
            description: 'Vhodný pre zväčšenie výroby, vývojové skúšky a hodnotenie formulácií.',
          },
          {
            feature: 'Konzistentná kvalita',
            description: 'Vyrábaný podľa ISO 9001:2015 pre sledovateľný analytický výkon.',
          },
        ],
        faq: [
          {
            question: 'Aké je primárne použitie 3,6-dimetyl-1-heptín-3-olu?',
            answer:
              'Slúži ako terciárny acetylenický alkoholový medziproduk pre nátery, surfaktanty a lepidlá.',
          },
          {
            question: 'Je tento produkt súčasťou rodiny acetylenických diolov VUP?',
            answer:
              'Áno, je štrukturálne príbuzný s TMDD a inými činidlami na dynamickú kontrolu povrchového napätia.',
          },
          {
            question: 'Akú čistotu dodáva VUP?',
            answer: 'Pilotný materiál má zvyčajne čistotu ≥ 98%, potvrdenú pomocou GC.',
          },
          {
            question: 'Je produkt registrovaný v REACH?',
            answer:
              'Je zahrnutý v rámci skupinovej registrácie acetylenických alkoholov; pre podrobnosti kontaktujte regulatórne oddelenie VUP.',
          },
          {
            question: 'Čo robí túto zlúčeninu odlišnou od iných acetylenických alkoholov?',
            answer:
              'Jeho terciárna alkoholová štruktúra poskytuje zvýšenú odolnosť voči oxidácii pri zachovaní reaktivity a hydrofóbneho charakteru ideálneho pre formulácie na báze rozpúšťadiel.',
          },
          {
            question: 'Môže sa použiť vo vodných systémoch?',
            answer:
              'Hoci je primárne vhodný pre systémy na báze rozpúšťadiel kvôli nízkej rozpustnosti vo vode, môže byť formulovaný do emulzií alebo disperzií s vhodnými ko-surfaktantmi.',
          },
        ],
      },
    }),
  ])

  // --------------------
  // ADDING SLOVAK TRANSLATIONS FOR PRODUCTS (BATCH 13: DIPHENYL-PROPYNOL, TETRAPHENYL-BUTYNEDIOL, COLAMIN-PHOSPHATE-CA)
  // --------------------

  payload.logger.info('- Adding Slovak translations for batch 13 products...')

  await Promise.all([
    payload.update({
      collection: 'products',
      id: diphenylpropynol.id,
      locale: 'sk',
      data: {
        name: '1,1-Difenyl-2-propín-1-ol',
        description:
          'Aromatický acetylenický alkohol kombinujúci reaktívnu trojitú väzbu C≡C s dvoma fenylovými substituentmi, ktoré poskytujú vysokú tepelnú a oxidačnú stabilitu. Vyrábaný v laboratórnych množstvách spoločnosťou VUP, slúži ako modelový medziproduk v syntéze jemných chemikálií, výskume polymérov a koordinačno-chemických štúdiách.',
        applications: [
          {
            application: 'Jemná organická syntéza',
            description:
              'Medziproduk pre deriváty aromatických alkýnov v pokročilej chemickej syntéze.',
            image: demoImageDoc.id,
          },
          {
            application: 'Vývoj katalyzátorov',
            description:
              'Testovací substrát pre hydrogenovanie prechodných kovov alebo väzbové reakcie v katalytickom výskume.',
            image: image2Doc.id,
          },
          {
            application: 'Výskum a vývoj polymérov',
            description:
              'Monomérny model pre tuhé aromatické jednotky vo výskume pokročilých polymérnych materiálov.',
            image: image3Doc.id,
          },
          {
            application: 'Akademický výskum',
            description:
              'Referenčná zlúčenina pre štúdie mechanizmov propargylových alkoholov vo výskumných laboratóriách.',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Reaktívny acetylenický alkohol',
            description:
              'Užitočný prekurzor pre oxidačné väzbové a kovom katalyzované adičné štúdie.',
          },
          {
            feature: 'Aromatická stabilita',
            description:
              'Fenylové skupiny zvyšujú tepelnú a oxidačnú odolnosť pre náročné aplikácie.',
          },
          {
            feature: 'Duálna reaktivita',
            description:
              'Hydroxylové a alkýnové skupiny umožňujú rôzne derivatizačné dráhy v syntéze.',
          },
          {
            feature: 'Vysoká čistota výskumnej kvality',
            description:
              'Čistota ≥ 98%, overená pomocou GC/NMR pre spoľahlivé experimentálne výsledky.',
          },
          {
            feature: 'Výroba podľa ISO 9001:2015',
            description:
              'Pripravené v kontrolovaných laboratórnych podmienkach vo VUP zabezpečujúc konzistentnú kvalitu.',
          },
          {
            feature: 'Dostupnosť v laboratórnom meradle',
            description:
              'K dispozícii v množstvách 25 g, 100 g alebo 250 g vhodných pre výskumné aplikácie.',
          },
        ],
        faq: [
          {
            question: 'Na čo sa používa 1,1-Difenyl-2-propín-1-ol?',
            answer:
              'Slúži ako modelový medziproduk pre syntézu jemných chemikálií, výskum polymérov a koordinačno-chemické štúdie v laboratórnom prostredí.',
          },
          {
            question: 'Čo robí túto zlúčeninu odlišnou od iných acetylenických alkoholov?',
            answer:
              'Dva fenylové substituenty poskytujú výnimočnú tepelnú a oxidačnú stabilitu pri zachovaní reaktívnej acetylénickej funkčnosti.',
          },
          {
            question: 'Akú úroveň čistoty dodáva VUP?',
            answer: 'VUP dodáva laboratórny materiál s čistotou ≥ 98%, overenou analýzou GC a NMR.',
          },
          {
            question: 'Je tento produkt registrovaný podľa REACH?',
            answer:
              'Platí výnimka pre výskumné použitie (< 1 t ročne). Žiadna klasifikácia CLP nebola nájdená; odporúča sa štandardné laboratórne OOP.',
          },
          {
            question: 'Aké sú požiadavky na skladovanie?',
            answer:
              'Skladujte v tesne uzavretej nádobe v chladnom a suchom prostredí na zachovanie stability a čistoty.',
          },
          {
            question: 'Pre aké aplikácie je táto zlúčenina vhodná?',
            answer:
              'Všetky aplikácie sú obmedzené na výskum a vývoj, vrátane jemnej syntézy, vývoja katalyzátorov a výskumu polymérov.',
          },
        ],
      },
    }),
    payload.update({
      collection: 'products',
      id: tetraphenylbutynediol.id,
      locale: 'sk',
      data: {
        name: '1,1,4,4-Tetrafenyl-2-butín-1,4-diol',
        description:
          'Tuhý, aromatický acetylenický diol obsahujúci dve terciárne alkoholové skupiny a centrálnu trojitú väzbu uhlík–uhlík. Vyrábaný spoločnosťou VUP v laboratórnom meradle, táto zlúčenina sa primárne používa ako modelová štruktúra a špecializovaný medziproduk v štúdiách polymérov a katalyzátorov.',
        applications: [
          {
            application: 'Výskum a vývoj polymérov',
            description:
              'Štrukturálny model pre tuhé, fenylom substituované dioly v pokročilom výskume polymérov.',
            image: demoImageDoc.id,
          },
          {
            application: 'Štúdie katalyzátorov',
            description:
              'Prekurzor ligandu alebo modelový substrát pre výskum oxidačného spojenia v katalytických systémoch.',
            image: image2Doc.id,
          },
          {
            application: 'Organická syntéza',
            description:
              'Medziproduk v aryl-acetylénovej chémii pre konštrukciu komplexných molekúl.',
            image: image3Doc.id,
          },
          {
            application: 'Materiálové vedy',
            description:
              'Používa sa pri navrhovaní sieťovaných a aromatických sieťových polymérov pre pokročilé materiály.',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: 'Tuhé aromatické jadro',
            description:
              'Poskytuje tepelnú stabilitu a definovanú geometriu pre modelové polymérne a katalyzátorové systémy.',
          },
          {
            feature: 'Duálne hydroxylové skupiny',
            description:
              'Umožňuje derivatizáciu na estery alebo étery pre modifikáciu polymernej kostry.',
          },
          {
            feature: 'Stabilná trojitá väzba',
            description:
              'Užitočná pre štúdium reaktivity acetylénu a mechanizmov oxidačného spojenia.',
          },
          {
            feature: 'Vysoká čistota výskumnej kvality',
            description: 'Čistota ≥ 98% overená analýzou GC/NMR pre spoľahlivé výsledky.',
          },
          {
            feature: 'Laboratórna výroba vo VUP',
            description:
              'Pripravené pod analytickou kontrolou ISO 9001:2015 pre konzistentnú kvalitu.',
          },
          {
            feature: 'Výnimočná tepelná stabilita',
            description:
              'Vysoký bod topenia (234-236°C) umožňuje spracovanie v náročných tepelných podmienkach.',
          },
        ],
        faq: [
          {
            question: 'Na čo sa používa 1,1,4,4-Tetrafenyl-2-butín-1,4-diol?',
            answer:
              'Slúži ako modelová štruktúra a špecializovaný medziproduk vo výskume polymérov, štúdiách katalyzátorov a aplikáciách materiálových vied.',
          },
          {
            question: 'Čo robí túto zlúčeninu jedinečnou?',
            answer:
              'Kombinácia tuhého aromatického jadra so štyrmi fenylovými skupinami, duálnymi terciárnymi alkoholmi a centrálnou trojitou väzbou poskytuje výnimočnú tepelnú stabilitu a definovanú geometriu.',
          },
          {
            question: 'Akú čistotu dodáva VUP?',
            answer: 'VUP dodáva laboratórny materiál s čistotou ≥ 98%, overenou analýzou GC a NMR.',
          },
          {
            question: 'Je tento produkt registrovaný podľa REACH?',
            answer:
              'Len na laboratórne použitie (výnimka < 1 t ročne). Nie je klasifikovaný podľa CLP; manipulujte so štandardným OOP.',
          },
          {
            question: 'Aké sú charakteristiky rozpustnosti?',
            answer:
              'Nízka rozpustnosť vo vode; rozpustný v aromatických rozpúšťadlách a alkoholoch, čo ho robí vhodným pre aplikácie organickej syntézy.',
          },
          {
            question: 'Pre aké aplikácie je táto zlúčenina vhodná?',
            answer:
              'Všetky aplikácie sú obmedzené na výskum a vývoj, vrátane výskumu polymérov, štúdií katalyzátorov a materiálových vied.',
          },
        ],
      },
    }),
  ])

  // --------------------
  // ADDING JAPANESE TRANSLATIONS FOR PRODUCTS (BATCH 8: SPIRO-TEMPO-ACID, GALVINOXYL, DIEPOXYOCTANE)
  // --------------------

  payload.logger.info('- Adding Japanese translations for batch 8 products...')

  await Promise.all([
    // payload.update({
    //   collection: 'products',
    //   id: spiroTempoAcid.id,
    //   locale: 'jp',
    //   data: {
    //     name: '8-オキシル-7,7,9,9-テトラメチル-1,4-ジオキサ-8-アザスピロ[4.5]デカン-2-カルボン酸',
    //     description:
    //       '独特なスピロ構造とカルボン酸機能性を持つ安定なニトロキシルラジカル。堅牢な常磁性特性を要求するバイオコンジュゲーション、スピンラベリング、分析用途に理想的。VUP Lab Researched品質が信頼性の高い性能を保証します。',
    //     applications: [
    //       {
    //         application: 'タンパク質スピンラベリング',
    //         description:
    //           'EPR分光研究のためのアミド結合形成を通じたタンパク質への共有結合。スピロ構造は独特な立体環境と低下した移動性を提供します。',
    //         image: demoImageDoc.id,
    //       },
    //       {
    //         application: 'バイオコンジュゲーション化学',
    //         description:
    //           '常磁性バイオコンジュゲート作成のために生体分子のアミノ基と安定なアミド結合を形成。生物学的システムでの追跡と構造解析を可能にします。',
    //         image: demoImageDoc.id,
    //       },
    //       {
    //         application: '合成構築ブロック',
    //         description:
    //           'より複雑なスピンラベル分子とプローブの合成のための中間体。カルボン酸はカスタム用途のための多用途結合化学を提供します。',
    //         image: demoImageDoc.id,
    //       },
    //       {
    //         application: 'EPR分光研究',
    //         description:
    //           '明確に定義されたスピン環境を要求する電子常磁性共鳴研究の標準プローブ。距離測定と構造解析で有用です。',
    //         image: demoImageDoc.id,
    //       },
    //     ],
    //     keyFeatures: [
    //       {
    //         feature: '独特なスピロ構造',
    //         description:
    //           '剛直なスピロ構造が線形TEMPO誘導体と比較して独特な立体環境と低下した構造柔軟性を提供します。',
    //       },
    //       {
    //         feature: 'カルボン酸反応性',
    //         description:
    //           'バイオコンジュゲーションのためのアミンとアミノ酸とのアミド結合形成を可能にします。標準ペプチド結合化学と互換性があります。',
    //       },
    //       {
    //         feature: '安定ラジカル特性',
    //         description:
    //           '生理学的条件下で常磁性特性を維持。生物学的環境での還元と二量化に耐性があります。',
    //       },
    //       {
    //         feature: '向上した剛性',
    //         description:
    //           'スピロ構造が分子運動を減少させ、より鋭いEPR信号とタンパク質研究での改良された距離測定を提供します。',
    //       },
    //       {
    //         feature: 'VUP研究グレード',
    //         description:
    //           '一貫したラジカル特性と最小限の常磁性不純物を確保する制御された合成による実験室研究品質。',
    //       },
    //     ],
    //     faq: [
    //       {
    //         question: 'スピロ構造は線形TEMPO誘導体に対してどのような利点を提供しますか？',
    //         answer:
    //           'スピロ構造は向上した剛性と独特な立体環境を提供し、より鋭いEPR信号とより正確な測定のための低下した構造柔軟性をもたらします。',
    //       },
    //       {
    //         question: 'この化合物は生物学的条件下でどの程度安定ですか？',
    //         answer:
    //           '生理学的pHと温度で非常に安定です。スピロ構造がラジカル中心を還元から保護し、生物学的システムで常磁性特性を維持します。',
    //       },
    //       {
    //         question: 'カルボン酸基でどの結合方法が最も効果的ですか？',
    //         answer:
    //           'EDC/NHS、HATU、PyBOPなどの標準アミド結合試薬が効果的に機能します。カルボン酸は一級および二級アミンと容易にアミド結合を形成します。',
    //       },
    //       {
    //         question: 'この化合物はタンパク質ラベリング用途に適していますか？',
    //         answer:
    //           'はい、リジン残基またはN末端とのアミド形成を通じたタンパク質スピンラベリングに優れています。剛直な構造がEPR研究のための明確に定義されたスピン環境を提供します。',
    //       },
    //       {
    //         question: 'このラジカル化合物の保管要件は何ですか？',
    //         answer:
    //           '不活性雰囲気下で暗く涼しい条件で保管。ラジカル安定性を損なう可能性のある還元剤、強酸、強塩基への暴露を避けてください。',
    //       },
    //     ],
    //   },
    // }),
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
    payload.update({
      collection: 'products',
      id: diepoxyoctane.id,
      locale: 'jp',
      data: {
        name: '1,2,7,8-ジエポキシオクタン',
        description:
          'エポキシコーティング、接着剤、複合材料における反応性低粘度希釈剤および架橋剤として使用される二官能性脂肪族ジエポキシド。VUPがパイロットプラントスケールで生産し、EUからの短納期とREACHカバレッジを提供します。',
        applications: [
          {
            application: 'エポキシコーティング',
            description:
              '工業用、金属用、床用コーティングにおける粘度と流動性を調整する反応性希釈剤およびフレキシビライザーで、硬度と柔軟性のバランスを取ります。',
            image: demoImageDoc.id,
          },
          {
            application: '接着剤とシーラント',
            description:
              '多孔質基材への濡れと浸透を改善する低粘度成分で、硬化後にネットワークの一部となり低VOC性能を実現します。',
            image: image2Doc.id,
          },
          {
            application: 'ポリマーおよび樹脂改質',
            description:
              '機能性ポリマーおよび表面改質オリゴマーのビルディングブロックで、プレポリマーに追加のエポキシ官能性を導入します。',
            image: image3Doc.id,
          },
          {
            application: '複合材料/電子機器',
            description:
              '低色、低粘度、アミン/無水物との良好な硬化応答が求められるポッティングおよびカプセル化システムで使用されます。',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: '二官能性反応性',
            description:
              '2つの末端エポキシ基により、エポキシ、ウレタン、アクリルシステムへの効率的な架橋とグラフトが可能で、性能が向上します。',
          },
          {
            feature: '低粘度反応性希釈剤',
            description:
              '不活性溶剤とは異なり、硬化後も化学的に結合したまま標準エポキシ樹脂の粘度を低減し、低VOC配合を実現します。',
          },
          {
            feature: '柔軟性と靭性の向上',
            description:
              '脂肪族主鎖が、もろいエポキシネットワークの伸びと耐衝撃性を向上させ、より耐久性のあるコーティングを実現します。',
          },
          {
            feature: '良好な基材濡れ',
            description:
              '低粘度と極性プロファイルがコーティングおよび接着剤における基材濡れを改善し、接着性を向上させます。',
          },
          {
            feature: 'EUのパイロットプラントからの供給可能性',
            description:
              'スロバキアのVUPで生産され、短納期、EU原産供給、REACHカバレッジにより信頼性の高い調達を実現します。',
          },
          {
            feature: '品質と追跡可能性',
            description:
              'ISO 9001:2015に基づいて製造され、バッチレベルの文書化により一貫した品質と規制遵守を保証します。',
          },
        ],
        faq: [
          {
            question: 'VUP 1,2,7,8-ジエポキシオクタンは主に何に使用されますか？',
            answer:
              'エポキシ、コーティング、接着剤システムを改質して流動性を向上させ、粘度を低減し、柔軟性を高めるための反応性低粘度脂肪族ジエポキシドとして使用されます。',
          },
          {
            question: 'エポキシ樹脂の反応性希釈剤として使用できますか？',
            answer:
              'はい。不活性溶剤とは異なり、硬化反応に参加し、最終硬化ネットワークの一部として残りながらVOCの削減に役立ちます。',
          },
          {
            question: 'VUPはどのような純度を供給していますか？',
            answer:
              '典型的なパイロットバッチは≥98%の純度を目標とし、正確なバッチ仕様は配送時に提供されるTDS/SDSに記載されています。',
          },
          {
            question: 'この製品はREACHでカバーされていますか？',
            answer:
              'この物質はEC 219-375-9に登録されています。お客様の供給に適用される正確な登録シナリオについては、VUPにお問い合わせください。',
          },
          {
            question: 'エポキシシステムの性能をどのように向上させますか？',
            answer:
              '処理を改善するために粘度を低減し、脆性を減らすために柔軟性を追加し、基材濡れを改善し、架橋に参加して強固な硬化ネットワークを形成します。',
          },
        ],
      },
    }),
  ])

  // --------------------
  // ADDING JAPANESE TRANSLATIONS FOR PRODUCTS (BATCH 9: EPOXY-5-HEXENE, EPOXYHEXANE, EPOXYOCTANE)
  // --------------------

  payload.logger.info('- Adding Japanese translations for batch 9 products...')

  await Promise.all([
    payload.update({
      collection: 'products',
      id: epoxyHexene.id,
      locale: 'jp',
      data: {
        name: '1,2-エポキシ-5-ヘキセン',
        description:
          'エポキシ基と末端二重結合の両方を含む多用途な反応性モノエポキシド。エポキシコーティング、接着剤、特殊ポリマーシステムにおける反応性希釈剤、鎖延長剤、ビルディングブロックとして使用されます。',
        applications: [
          {
            application: 'エポキシおよびアクリルコーティング',
            description:
              'コーティングシステムにおいて柔軟性と表面接着性を向上させる反応性希釈剤または鎖延長剤。',
            image: demoImageDoc.id,
          },
          {
            application: '接着剤とシーラント',
            description: '構造用接着剤配合における粘度調整と結合強度の向上。',
            image: image2Doc.id,
          },
          {
            application: 'ポリマー改質',
            description:
              '高度な架橋ポリマーおよびコポリマーのためのペンダントアリル基とエポキシ基を導入します。',
            image: image3Doc.id,
          },
          {
            application: '表面処理',
            description:
              '表面処理における接着性向上のためのシランまたはポリマー官能化に使用されます。',
            image: demoImageDoc.id,
          },
          {
            application: '特殊中間体',
            description: '特殊樹脂および化学中間体の合成のためのビルディングブロック。',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: '二重機能性',
            description:
              'エポキシ基と末端二重結合の両方を含み、共重合、架橋、表面グラフトのための多様な化学反応性を提供します。',
          },
          {
            feature: '反応性希釈剤',
            description:
              'エポキシまたはアクリル配合における粘度低減成分として使用でき、硬化ネットワークで反応性を維持します。',
          },
          {
            feature: '柔軟性の向上',
            description:
              '脂肪族鎖が硬化したコーティングおよび接着剤に改善された靭性と弾性を付与します。',
          },
          {
            feature: '優れた相溶性',
            description:
              '標準的なエポキシ、ウレタン、アクリレートシステムと容易に混合でき、多用途な配合オプションを提供します。',
          },
          {
            feature: 'パイロットプラントでの供給可能性',
            description: 'R&D、評価、特殊生産用途のためのパイロット量で供給されます。',
          },
          {
            feature: 'EU原産の品質',
            description:
              'VUP, a.s.（スロバキア）がISO 9001:2015のもとで生産し、トレーサビリティと規制遵守を確保します。',
          },
        ],
        faq: [
          {
            question: 'VUPの1,2-エポキシ-5-ヘキセンは何に使用されますか？',
            answer:
              '二重機能性を必要とするコーティング、接着剤、特殊ポリマーシステムにおける反応性モノエポキシドおよびアルケン中間体として。',
          },
          {
            question: 'この製品は標準的なエポキシドとどう異なりますか？',
            answer:
              'その二重機能性（エポキシ+末端二重結合）により、標準的なエポキシドでは達成できない独特な架橋および共重合経路が可能になります。',
          },
          {
            question: 'スケールアップ供給は可能ですか？',
            answer:
              'はい、VUPは産業評価または共同R&Dプロジェクトに適したパイロットプラント量を提供しています。',
          },
          {
            question: 'どのように取り扱うべきですか？',
            answer:
              '標準的なPPEを使用して換気の良い条件下で取り扱ってください。可燃性液体です。保管と取扱いの完全な詳細についてはSDSをご覧ください。',
          },
          {
            question: 'この製品とアリルグリシジルエーテル（CAS 106-92-3）の違いは何ですか？',
            answer:
              '類似の名称で呼ばれることもありますが、CAS 10353-53-4（1,2-エポキシ-5-ヘキセン）はCAS 106-92-3（アリルグリシジルエーテル）とは異なります。用途に応じて正しいCAS番号を確認してください。',
          },
          {
            question: 'この製品の規制状況は？',
            answer:
              'EC番号233-771-9のもとにリストされています。物質はECHAデータベースに登録されています。特定のREACH登録とトン数カバレッジについては、VUP, a.s.にお問い合わせください。',
          },
        ],
      },
    }),
    payload.update({
      collection: 'products',
      id: epoxyhexane.id,
      locale: 'jp',
      data: {
        name: '1,2-エポキシヘキサン',
        description:
          '有機合成およびポリマー改質のための末端エポキシ官能性を提供する多用途な反応性モノエポキシド。高固形分エポキシコーティング、接着剤、特殊化学用途における低粘度反応性希釈剤として使用されます。',
        applications: [
          {
            application: 'エポキシおよび工業用コーティング',
            description:
              '高固形分エポキシコーティングシステムにおける粘度と柔軟性を調整する反応性希釈剤。',
            image: demoImageDoc.id,
          },
          {
            application: '接着剤とシーラント',
            description:
              '反応性接着剤およびシーラントシステムにおいて濡れ性を向上させ、皮膜形成を改善します。',
            image: image2Doc.id,
          },
          {
            application: 'ポリマー合成',
            description:
              '特殊用途におけるポリマーおよびコポリマー形成のための反応性モノマーとして機能します。',
            image: image3Doc.id,
          },
          {
            application: '表面処理',
            description: '接着性を向上させるためのシランおよびポリマーの改質に使用されます。',
            image: demoImageDoc.id,
          },
          {
            application: '特殊化学品',
            description:
              'ファインケミカルおよびカスタマイズされた樹脂システムの製造のための中間体。',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: '反応性中間体',
            description: '幅広い有機合成およびポリマー改質のための末端エポキシ官能性を提供します。',
          },
          {
            feature: '低粘度',
            description:
              '高固形分エポキシコーティングおよび接着剤の反応性希釈剤として効果的で、硬化に参加しながら粘度を低減します。',
          },
          {
            feature: '柔軟性の向上',
            description: '脂肪族主鎖が硬化した樹脂システムにおいて延性と耐衝撃性を向上させます。',
          },
          {
            feature: '優れた相溶性',
            description:
              'エポキシ樹脂、アクリレート、ウレタンシステムと容易に混合でき、多用途な配合が可能です。',
          },
          {
            feature: '高純度',
            description:
              'ISO 9001:2015品質管理のもとでパイロットプラント量で製造され、一貫した性能を保証します。',
          },
          {
            feature: 'REACH登録済みEU原産',
            description:
              'VUP, a.s.（スロバキア）からの一貫した品質と完全な規制透明性を確保します。',
          },
        ],
        faq: [
          {
            question: 'VUPの1,2-エポキシヘキサンは何に使用されますか？',
            answer:
              '低粘度と柔軟性を必要とするコーティング、接着剤、ポリマー合成用途における反応性モノエポキシドとして。',
          },
          {
            question: '反応性希釈剤用途に適していますか？',
            answer:
              'はい、硬化反応に参加しながらエポキシシステムの粘度を低減でき、高固形分配合に理想的です。',
          },
          {
            question: 'VUPはどのような純度レベルを供給していますか？',
            answer:
              'パイロットバッチは通常≥ 98%の純度を満たします。特定のバッチについてはTDS/SDSで正確な仕様を確認してください。',
          },
          {
            question: '輸送にはどのように分類されますか？',
            answer:
              '一般的に可燃性液体として分類されます。完全な輸送分類、UN番号、保管要件についてはSDSをご参照ください。',
          },
          {
            question: '1,2-エポキシヘキサンは他の脂肪族エポキシドとどう異なりますか？',
            answer:
              'その六炭素脂肪族構造は、良好な反応性を維持しながら低粘度と柔軟性向上の最適なバランスを提供します。',
          },
          {
            question: 'この製品の規制状況は？',
            answer:
              'ECHAインベントリにEC番号215-864-6のもとにリストされています。お客様の供給に適用される特定のREACH登録詳細についてはVUPにお問い合わせください。',
          },
        ],
      },
    }),
    payload.update({
      collection: 'products',
      id: epoxyoctane.id,
      locale: 'jp',
      data: {
        name: '1,2-エポキシオクタン',
        description:
          '低揮発性と高反応性を兼ね備えた反応性脂肪族モノエポキシド。高度な樹脂および接着剤配合のための柔軟なビルディングブロックとして機能します。コーティング、ポリマー改質、架橋用途における配合開発をサポートします。',
        applications: [
          {
            application: 'エポキシおよび工業用コーティング',
            description:
              '高性能コーティングシステムにおいて柔軟性、皮膜靭性、基材濡れ性を向上させる反応性希釈剤。',
            image: demoImageDoc.id,
          },
          {
            application: '接着剤とシーラント',
            description: '構造用および柔軟性接着剤システムにおいて接着性と伸びを向上させます。',
            image: image2Doc.id,
          },
          {
            application: 'ポリマー改質',
            description:
              '疎水性ポリエーテルおよび特殊コポリマーを作成するためのモノマーとして機能します。',
            image: image3Doc.id,
          },
          {
            application: '表面官能化',
            description:
              'ポリマー表面またはシラン改質基材にエポキシ官能性をグラフトするために使用されます。',
            image: demoImageDoc.id,
          },
          {
            application: '化学合成',
            description: 'ファインケミカルおよび安定化樹脂中間体の合成のための出発原料。',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: '反応性モノエポキシド',
            description:
              '要求の厳しい用途におけるポリマー架橋および鎖延長反応のための制御された反応性を提供します。',
          },
          {
            feature: '低揮発性・低臭気',
            description:
              '安定性と職場の安全性が優先される高性能コーティングおよび接着剤に適しています。',
          },
          {
            feature: '柔軟な脂肪族鎖',
            description: '硬化した樹脂システムに改善された弾性と疎水性を付与します。',
          },
          {
            feature: '優れた相溶性',
            description:
              '標準的なエポキシ、アクリレート、ウレタン化学と良好に混合でき、多用途な配合が可能です。',
          },
          {
            feature: 'EU原産のパイロット生産',
            description:
              'VUP, a.s.（スロバキア）においてISO 9001:2015のもとで生産され、追跡可能な品質保証を提供します。',
          },
          {
            feature: '持続可能性への注力',
            description: '反応性希釈剤挙動を通じて低VOC、高固形分配合を可能にします。',
          },
        ],
        faq: [
          {
            question: 'VUPの1,2-エポキシオクタンは主に何に使用されますか？',
            answer:
              '低揮発性と制御された反応性が必要なコーティング、接着剤、ポリマー改質のための反応性脂肪族モノエポキシドとして。',
          },
          {
            question: '反応性希釈剤として使用できますか？',
            answer:
              'はい、硬化マトリックスに化学的に結合しながら粘度を効果的に低減し、高固形分配合に理想的です。',
          },
          {
            question: '主な取扱い上の注意事項は何ですか？',
            answer:
              '熱、酸、湿気を避けてください。涼しく乾燥した換気の良い場所に保管してください。完全な安全ガイドラインと取扱い手順についてはSDSをご参照ください。',
          },
          {
            question: 'この製品はREACH登録されていますか？',
            answer:
              'はい、物質はEC 221-047-5のもとにリストされています。お客様の供給に関する特定の登録詳細についてはVUPの規制チームにご確認ください。',
          },
          {
            question: '長いC8鎖は性能にどのように影響しますか？',
            answer:
              '8炭素脂肪族鎖は、短鎖エポキシドと比較して、より低い揮発性、強化された疎水性、改善された柔軟性を提供します。',
          },
          {
            question: '1,2-エポキシオクタンは他の脂肪族エポキシドとどう異なりますか？',
            answer:
              '低揮発性、制御された反応性、柔軟性向上の組み合わせにより、高性能・低臭気用途に特に適しています。',
          },
        ],
      },
    }),
  ])

  // --------------------
  // ADDING JAPANESE TRANSLATIONS FOR PRODUCTS (BATCH 10: EPOXY-7-OCTENE, EPOXYDECANE, DIEPOXYHEXANE)
  // --------------------

  payload.logger.info('- Adding Japanese translations for batch 10 products...')

  await Promise.all([
    payload.update({
      collection: 'products',
      id: epoxy7octene.id,
      locale: 'jp',
      data: {
        name: '1,2-エポキシ-7-オクテン',
        description:
          'オキシラン環と末端二重結合の両方を特徴とする二重官能性脂肪族エポキシド。ポリマー改質および架橋のための多用途な反応性を提供します。制御された柔軟性を利用するコーティング、接着剤、特殊中間体に適しています。',
        applications: [
          {
            application: 'コーティングとシーラント',
            description:
              'エポキシおよびハイブリッドコーティングシステムにおいて柔軟性、接着性、皮膜完全性を向上させます。',
            image: demoImageDoc.id,
          },
          {
            application: '接着剤',
            description: '接着剤配合において結合強度と濡れ性を向上させながら粘度を低下させます。',
            image: image2Doc.id,
          },
          {
            application: 'ポリマーおよび樹脂改質',
            description:
              '高度な用途におけるカスタマイズされたポリマーアーキテクチャのために、エポキシまたはアリル基を介して反応します。',
            image: image3Doc.id,
          },
          {
            application: '表面官能化',
            description:
              '高度な複合材料における架橋またはグラフトのための反応性サイトを導入します。',
            image: demoImageDoc.id,
          },
          {
            application: 'ファインケミカル',
            description: 'カスタムエポキシモノマーおよび反応性改質剤の合成における中間体。',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: '二重官能性',
            description:
              'エポキシ基とアリル二重結合を組み合わせ、高度なポリマー改質のための選択的反応を可能にします。',
          },
          {
            feature: '反応性希釈剤ポテンシャル',
            description:
              '硬化中に完全に反応性を維持しながら粘度を低下させ、高固形分配合に理想的です。',
          },
          {
            feature: '柔軟性の向上',
            description: '脂肪族鎖構造が優れた皮膜弾性と耐衝撃性を提供します。',
          },
          {
            feature: '優れた相溶性',
            description:
              'エポキシ、アクリレート、ポリウレタンシステムに適しており、多用途な配合オプションを提供します。',
          },
          {
            feature: '高純度',
            description:
              'EUパイロットプラント条件においてISO 9001:2015のもとで製造され、一貫した品質を保証します。',
          },
          {
            feature: '低色・低臭気',
            description: '美観が重要な高仕様コーティングおよび接着剤システムに理想的です。',
          },
        ],
        faq: [
          {
            question: '1,2-エポキシ-7-オクテンは何に使用されますか？',
            answer:
              'エポキシとアリル反応性の両方を必要とするコーティング、接着剤、ポリマー改質用途のための二重官能性反応性モノマーとして。',
          },
          {
            question: 'エポキシドの中でなぜ独特なのですか？',
            answer:
              'エポキシとアリルの反応性サイトの両方を含み、配合の多様性を高め、単一官能性エポキシドでは不可能な選択的反応を可能にします。',
          },
          {
            question: 'パイロットスケールテストに適していますか？',
            answer:
              'はい、VUPはR&Dおよび工業試験における評価および開発目的に理想的なパイロットプラント量を提供しています。',
          },
          {
            question: 'どのように保管すべきですか？',
            answer:
              '密閉容器に入れて涼しく換気の良い場所に保管してください。詳細な取扱いおよびPPE推奨事項についてはSDSをご参照ください。',
          },
          {
            question: '1,2-エポキシ-5-ヘキセンと比較してどうですか？',
            answer:
              '両方とも二重官能性を提供しますが、1,2-エポキシ-7-オクテンはより長いC8鎖を持ち、1,2-エポキシ-5-ヘキセンのC6鎖と比較してより低い揮発性と向上した柔軟性を提供します。',
          },
          {
            question: 'この製品の規制状況は？',
            answer:
              'ECHAデータベースにEC番号243-178-7のもとにリストされています。お客様の要件に特有の登録および供給詳細についてはVUPにお問い合わせください。',
          },
        ],
      },
    }),
    payload.update({
      collection: 'products',
      id: epoxydecane.id,
      locale: 'jp',
      data: {
        name: '1,2-エポキシデカン',
        description:
          '高い疎水性と反応性エポキシ官能性を組み合わせた長鎖脂肪族モノエポキシド。柔軟性、低極性、耐水性が求められるコーティング、接着剤、表面改質用途に適しています。',
        applications: [
          {
            application: 'コーティングとシーラント',
            description:
              'エポキシまたはウレタンベースのコーティングシステムにおいて柔軟性、光沢、疎水性を向上させます。',
            image: demoImageDoc.id,
          },
          {
            application: '接着剤',
            description: '接着剤配合において接着性と弾性を向上させながら吸水性を低減します。',
            image: image2Doc.id,
          },
          {
            application: 'ポリマー改質',
            description:
              '疎水性コポリマーまたは界面活性剤改質樹脂にエポキシ官能性を導入するために使用されます。',
            image: image3Doc.id,
          },
          {
            application: '表面処理',
            description: '低エネルギー表面にエポキシ基をグラフトして塗装性と接着性を向上させます。',
            image: demoImageDoc.id,
          },
          {
            application: 'ファインケミカル中間体',
            description: '高分子量エポキシドおよび界面活性剤のビルディングブロック。',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: '長鎖脂肪族エポキシド',
            description:
              'ポリマーまたはコーティングに組み込まれる際に疎水性および柔軟性特性を提供します。',
          },
          {
            feature: '反応性中間体',
            description:
              'ポリウレタン、アクリル、樹脂の制御されたエポキシ架橋および改質を可能にします。',
          },
          {
            feature: '耐水性の向上',
            description: '防湿性を必要とする低極性コーティングおよび接着剤に理想的です。',
          },
          {
            feature: '低揮発性',
            description: '高温用途における職場の安全性と安定性を向上させます。',
          },
          {
            feature: 'EUパイロット生産',
            description:
              'ISO 9001:2015品質システムのもとでVUP, a.s.（スロバキア）により供給されます。',
          },
          {
            feature: '多用途な用途',
            description: 'R&Dおよび特殊配合のためのエポキシ官能性疎水剤として機能します。',
          },
        ],
        faq: [
          {
            question: 'VUPの1,2-エポキシデカンは主に何に使用されますか？',
            answer:
              '耐水性が重要な疎水性コーティング、接着剤、ポリマー改質のための反応性脂肪族モノエポキシドとして。',
          },
          {
            question: '短鎖エポキシドとどう異なりますか？',
            answer:
              'より長い十炭素鎖が向上した柔軟性と耐水性を提供し、疎水性特性を必要とする低極性システムに理想的です。',
          },
          {
            question: '反応性希釈剤として適していますか？',
            answer:
              'はい、低揮発性反応性改質剤として作用し、樹脂配合において柔軟性を向上させ粘度を低下させます。',
          },
          {
            question: 'どのように保管および取り扱いますか？',
            answer:
              '密閉容器に入れ、熱および酸化剤から離れて保管してください。PPEおよび換気要件についてはSDSガイドラインに従ってください。',
          },
          {
            question: 'この長鎖エポキシドから最も恩恵を受ける用途は何ですか？',
            answer:
              '疎水性改質、耐水性、柔軟性を必要とする用途、例えば船舶用コーティング、屋外用接着剤、低極性表面処理など。',
          },
          {
            question: 'この製品の規制状況は？',
            answer:
              'ECHAインベントリにEC番号219-295-4のもとにリストされています。登録およびサプライチェーンの詳細についてはVUPにお問い合わせください。',
          },
        ],
      },
    }),
    payload.update({
      collection: 'products',
      id: diepoxyhexane.id,
      locale: 'jp',
      data: {
        name: '1,2,5,6-ジエポキシヘキサン',
        description:
          '2つの末端オキシラン基を含む二官能性脂肪族エポキシド。コーティング、接着剤、ポリマー合成用途における特殊架橋剤および鎖延長剤として機能し、柔軟性の向上、低粘度、および反応性の向上を提供します。',
        applications: [
          {
            application: 'コーティングとシーラント',
            description:
              'エポキシおよびウレタンコーティングにおいて架橋密度と硬度を向上させながら柔軟性を維持します。',
            image: demoImageDoc.id,
          },
          {
            application: '接着剤',
            description: '二官能性改質剤として機能し、接着性と硬化速度を向上させます。',
            image: image2Doc.id,
          },
          {
            application: 'ポリマー改質',
            description:
              'ポリエステル、ポリエーテル、コポリマーに追加のエポキシ官能性を導入します。',
            image: image3Doc.id,
          },
          {
            application: '複合材料および樹脂システム',
            description: '熱硬化性樹脂システムのための低粘度架橋剤を提供します。',
            image: demoImageDoc.id,
          },
          {
            application: 'ファインケミカルおよび特殊合成',
            description:
              '反応性中間体およびオリゴマーの実験室およびパイロットスケール合成に使用されます。',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: '二官能性反応性',
            description:
              '2つのエポキシ基が熱硬化性およびポリマーシステムに強力な架橋ポテンシャルを提供します。',
          },
          {
            feature: '低粘度',
            description:
              'エポキシおよびポリウレタン配合において効果的な反応性希釈剤として機能します。',
          },
          {
            feature: '高反応性',
            description:
              'カチオンおよびアニオン重合において速い硬化速度と改善された転化率をサポートします。',
          },
          {
            feature: '機械的性能の向上',
            description: '硬化システムに柔軟性、靭性、加水分解安定性を追加します。',
          },
          {
            feature: 'パイロットプラント利用可能性',
            description:
              '評価および特殊用途のためにVUP, a.s.によって管理された条件下で製造されています。',
          },
          {
            feature: 'EU原産およびREACH準拠',
            description:
              'ISO 9001:2015のもとで製造され、トレーサビリティと一貫した品質を保証します。',
          },
        ],
        faq: [
          {
            question: '1,2,5,6-ジエポキシヘキサンは主に何に使用されますか？',
            answer:
              'コーティング、接着剤、および架橋性の向上を必要とするポリマー改質のための二官能性反応性エポキシドとして。',
          },
          {
            question: 'モノエポキシドとどう異なりますか？',
            answer:
              '2つのエポキシ基を提供し、単一官能性エポキシドと比較して熱硬化性およびエラストマーシステムにおける架橋性と反応性を向上させます。',
          },
          {
            question: '取扱い上の注意事項は何ですか？',
            answer:
              '湿気、熱、酸を避けてください。密閉容器に保管してください。完全な取扱い指示についてはSDSをご参照ください。',
          },
          {
            question: 'REACHにリストされていますか？',
            answer:
              'はい、この物質はCAS 1888-89-7、EC 217-564-0のもとにリストされています。具体的な登録詳細についてはVUP規制部門にお問い合わせください。',
          },
          {
            question: '1,2,7,8-ジエポキシオクタンと比較してどうですか？',
            answer:
              '両方とも二官能性ジエポキシドですが、1,2,5,6-ジエポキシヘキサンはより短いC6鎖を持ち、単位重量あたりより高いエポキシド密度と異なる物理的特性を提供します。',
          },
          {
            question: 'その二官能性構造から恩恵を受ける用途は何ですか？',
            answer:
              '高性能コーティング、構造用接着剤、熱硬化性複合材料など、高架橋密度を必要とする用途がその二重エポキシ官能性から最も恩恵を受けます。',
          },
        ],
      },
    }),
  ])

  // --------------------
  // ADDING JAPANESE TRANSLATIONS FOR PRODUCTS (BATCH 11: DIMETHYL-EPOXYBUTANE, TMDD, LONG-CHAIN-TMDD)
  // --------------------

  payload.logger.info('- Adding Japanese translations for batch 11 products...')

  await Promise.all([
    payload.update({
      collection: 'products',
      id: dimethylepoxybutane.id,
      locale: 'jp',
      data: {
        name: '3,3-ジメチル-1,2-エポキシブタン',
        description:
          '立体障害による反応性と揮発性を特徴とするコンパクトな三級モノエポキシド。実験室スケールの合成およびメカニズム研究に適しています。ファインケミカル開発、コーティング研究、ポリマーモデルシステムのための反応性中間体として機能します。',
        applications: [
          {
            application: '研究開発',
            description:
              'エポキシド開環反応、求核置換反応、重合メカニズムの研究のために使用されます。',
            image: demoImageDoc.id,
          },
          {
            application: 'ファインケミカル合成',
            description: '高純度中間体および特殊試薬の開発に使用されます。',
            image: image2Doc.id,
          },
          {
            application: 'コーティング研究',
            description:
              '実験室スケールの樹脂改質および性能モデリングにおける反応性モノマー類似体として機能します。',
            image: image3Doc.id,
          },
          {
            application: 'ポリマー化学',
            description:
              '反応性研究および立体障害効果のシミュレーションのためのベンチマーク化合物。',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: '立体障害エポキシド',
            description: '三級構造により、制御された反応性とモデル反応研究に理想的です。',
          },
          {
            feature: '高揮発性',
            description: '揮発性試薬を必要とする気相または動力学的調査セットアップに適しています。',
          },
          {
            feature: 'コンパクトな三級構造',
            description: '様々な条件下での置換および開環メカニズムの調査を可能にします。',
          },
          {
            feature: 'ファインケミストリーでの有用性',
            description: 'コーティングおよびポリマー化学研究における高価値中間体の前駆体。',
          },
          {
            feature: '実験室スケールでの利用可能性',
            description: '分析、動力学、または合成用途のための限定的な研究量で供給されます。',
          },
          {
            feature: 'ISO 9001:2015のもとで製造',
            description: '実験室用途のための分析的トレーサビリティと純度管理を保証します。',
          },
        ],
        faq: [
          {
            question: '3,3-ジメチル-1,2-エポキシブタンが他のエポキシドと異なる点は何ですか？',
            answer:
              'その三級構造が立体障害を提供し、制御された反応性が求められる反応性およびメカニズム研究に理想的です。',
          },
          {
            question: '工業用途に利用できますか？',
            answer:
              '現在、実験室スケール量のみで製造されており、工業規模の用途ではなくR&Dおよびテストに適しています。',
          },
          {
            question: '主な安全上の注意事項は何ですか？',
            answer:
              '高可燃性—点火源から離れたドラフトチャンバー内で取り扱ってください。25°C以下の涼しく換気の良い場所に保管してください。完全な取扱い注意事項についてはSDSをご参照ください。',
          },
          {
            question: 'その立体障害から恩恵を受ける用途は何ですか？',
            answer:
              'メカニズム研究、動力学的調査、ポリマーモデルシステム、および制御されたエポキシド反応性を必要とする研究がその三級構造から最も恩恵を受けます。',
          },
          {
            question: 'この製品はREACH登録されていますか？',
            answer:
              'CAS 2245-30-9は国際インベントリにリストされています。具体的なREACHカバレッジの詳細についてはVUP規制部門にお問い合わせください。',
          },
        ],
      },
    }),
    payload.update({
      collection: 'products',
      id: tmdd.id,
      locale: 'jp',
      data: {
        name: '2,4,7,9-テトラメチル-5-デシン-4,7-ジオール',
        description:
          'コーティングおよびインク配合において表面張力とフローの優れた制御を提供する高性能アセチレン系ジオール界面活性剤。TMDDは、溶剤系および水系システムの幅広い範囲で改善された濡れ性、平滑性、適合性を提供する多機能添加剤として機能します。',
        applications: [
          {
            application: 'コーティングと塗料',
            description:
              'コーティング配合において表面張力を制御し、膜の均一性を向上させ、光沢を改善します。',
            image: demoImageDoc.id,
          },
          {
            application: '印刷インク',
            description: '基材の濡れ性を改善することで顔料分散と印刷品質を促進します。',
            image: image2Doc.id,
          },
          {
            application: '接着剤とシーラント',
            description: '低エネルギー表面での広がりと接着性を向上させ、接合を改善します。',
            image: image3Doc.id,
          },
          {
            application: 'ポリマーエマルション',
            description: 'エマルションの安定性と性能を向上させる動的界面活性剤として作用します。',
            image: demoImageDoc.id,
          },
          {
            application: '繊維仕上げ剤およびクリーナー',
            description: '濡れ性とフロー制御が重要な特殊配合に使用されます。',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: '表面張力制御',
            description: '静的および動的表面張力の両方を低減し、基材の濡れ性を向上させます。',
          },
          {
            feature: 'フローと平滑性の改善',
            description:
              'コーティングおよびインクにおけるクレーター、ピンホール、オレンジピールなどの欠陥を防ぎます。',
          },
          {
            feature: '広範な適合性',
            description: '水系、溶剤系、およびUV硬化系システムで良好に機能します。',
          },
          {
            feature: '低発泡性',
            description: '過度の発泡なしで安定した膜形成を可能にします。',
          },
          {
            feature: '多用途な機能性',
            description:
              '様々な配合において濡れ剤、フロー改質剤、または凝集添加剤として作用します。',
          },
          {
            feature: 'EU原産品質',
            description: 'ISO 9001:2015のもとで製造され、高純度とバッチ一貫性を保証します。',
          },
        ],
        faq: [
          {
            question: 'TMDDは何に使用されますか？',
            answer:
              'TMDDは、コーティング、インク、接着剤、ポリマーエマルションにおいて、フロー、平滑性、基材の濡れ性を改善するための表面活性剤および濡れ添加剤として使用されます。',
          },
          {
            question: 'TMDDは水系および溶剤系システムの両方と適合しますか？',
            answer:
              'はい、TMDDは水系および溶剤系配合の両方、ならびにUV硬化系システムで効果的に機能します。',
          },
          {
            question: 'TMDDは発泡を引き起こしますか？',
            answer:
              'いいえ、TMDDは効果的な表面活性を維持しながら低発泡生成のために設計されており、コーティングおよびインク用途に理想的です。',
          },
          {
            question: 'VUPのTMDDはどの程度純粋ですか？',
            answer:
              'パイロットプラントバッチは通常≥ 98%の純度であり、GCおよび滴定法により検証され、一貫した性能を保証します。',
          },
          {
            question: 'TMDDが従来の界面活性剤と異なる点は何ですか？',
            answer:
              'TMDDは、優れた動的表面張力低減と多様なコーティングシステムにわたる優れた適合性を提供する独自の三重結合構造を持つアセチレン系ジオールです。',
          },
          {
            question: 'TMDDはREACH登録されていますか？',
            answer:
              'はい、TMDD（CAS 126-86-3、EC 204-809-1）はEU REACHのもとで登録された物質です。具体的な登録詳細についてはVUPにお問い合わせください。',
          },
        ],
      },
    }),
    payload.update({
      collection: 'products',
      id: longChainTmdd.id,
      locale: 'jp',
      data: {
        name: '2,5,8,11-テトラメチル-6-ドデシン-5,8-ジオール',
        description:
          '優れた動的表面張力制御と向上した疎水性を組み合わせた長鎖アセチレン系ジオール界面活性剤。溶剤系および高固形分システムで優れた性能を提供し、改善された濡れ性、平滑性、膜均一性をサポートします。',
        applications: [
          {
            application: 'コーティングと塗料',
            description: '溶剤系コーティング配合において表面濡れ性、フロー、光沢制御を改善します。',
            image: demoImageDoc.id,
          },
          {
            application: '印刷インク',
            description: '顔料分散を促進し、高品質印刷のための一貫した基材カバレッジを提供します。',
            image: image2Doc.id,
          },
          {
            application: '接着剤とシーラント',
            description: '疎水性表面への広がりと接着性を改善します。',
            image: image3Doc.id,
          },
          {
            application: 'ポリマー添加剤',
            description:
              '高固形分および溶剤ベースのポリマーシステムにおける表面活性添加剤として使用されます。',
            image: demoImageDoc.id,
          },
          {
            application: '繊維および皮革処理',
            description: '困難な基材への均一な濡れ性と吸収を促進します。',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: '向上した疎水性',
            description: 'より長い炭素鎖が低エネルギー基材への優れた濡れ性を提供します。',
          },
          {
            feature: '動的表面張力の低減',
            description: '高速適用下でも一貫した平滑化と広がりを維持します。',
          },
          {
            feature: '優れた適合性',
            description: '溶剤系および高固形分配合の両方で機能します。',
          },
          {
            feature: '光沢とフローの改善',
            description: 'クレータリングなしで膜の滑らかさと外観を向上させます。',
          },
          {
            feature: '低発泡プロファイル',
            description: '最小限の発泡で安定した適用性能を保証します。',
          },
          {
            feature: 'ISO認証品質',
            description:
              'ISO 9001:2015のもとで製造され、一貫したバッチトレーサビリティを備えています。',
          },
        ],
        faq: [
          {
            question: 'この製品はTMDDとどう異なりますか？',
            answer:
              'より長い炭素鎖が、標準TMDDと比較して高固形分および溶剤系システムとの疎水性と適合性を向上させます。',
          },
          {
            question: '水系コーティングに適していますか？',
            answer:
              '界面活性剤との分散形態で使用できますが、主に溶剤系および高固形分配合用に設計されています。',
          },
          {
            question: '純度レベルは？',
            answer: '≥ 98%、一貫した性能のためGCおよびNMRによる分析検証付きです。',
          },
          {
            question: '光沢に影響しますか？',
            answer: 'はい、表面フローと平滑化を改善することで光沢と膜均一性を向上させます。',
          },
          {
            question: 'より長い鎖から最も恩恵を受ける用途は？',
            answer:
              '高固形分コーティング、溶剤系システム、低エネルギーまたは疎水性基材への改善された濡れ性を必要とする用途が最も恩恵を受けます。',
          },
          {
            question: 'この製品はREACH登録されていますか？',
            answer:
              'はい、EC 269-348-0のもとにリストされ、アセチレン系ジオールカテゴリーで登録されています。具体的な登録詳細についてはVUPにお問い合わせください。',
          },
        ],
      },
    }),
  ])

  // --------------------
  // ADDING JAPANESE TRANSLATIONS FOR PRODUCTS (BATCH 12: DMHD, DIMETHYL-HEXYNOL, DIMETHYL-HEPTYNOL)
  // --------------------

  payload.logger.info('- Adding Japanese translations for batch 12 products...')

  await Promise.all([
    payload.update({
      collection: 'products',
      id: dmhd.id,
      locale: 'jp',
      data: {
        name: '2,5-ジメチル-3-ヘキシン-2,5-ジオール',
        description:
          '界面活性剤および添加剤開発のための反応性中間体として使用される対称アセチレン系ジオール。構造-活性研究のためのモデル化合物として、また多用途な濡れ性および表面制御添加剤前駆体として機能します。',
        applications: [
          {
            application: '界面活性剤開発',
            description: '非イオン性界面活性剤および動的表面張力剤の中間体。',
            image: demoImageDoc.id,
          },
          {
            application: 'コーティング研究',
            description:
              'コーティング配合におけるフローおよび平滑化研究のためのモデルジオールとして評価されます。',
            image: image2Doc.id,
          },
          {
            application: '印刷インク',
            description: '改善された濡れ性と顔料分散のための表面改質剤の前駆体。',
            image: image3Doc.id,
          },
          {
            application: 'ポリマー添加剤',
            description: 'アセチレン改質樹脂中間体の合成に使用されます。',
            image: demoImageDoc.id,
          },
          {
            application: '学術および産業研究',
            description: '反応メカニズムの探求および表面化学研究のための参照化合物。',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: '対称ジオール構造',
            description: '研究用途における界面活性剤および添加剤の挙動のモデリングを簡素化します。',
          },
          {
            feature: '高純度',
            description: '分析研究および反応メカニズム研究に適しています。',
          },
          {
            feature: '反応性中間体',
            description: '特殊界面活性剤および性能添加剤の合成を可能にします。',
          },
          {
            feature: '表面活性',
            description: '多くの濡れ剤および平滑剤の構造コアを形成します。',
          },
          {
            feature: '通常条件下で安定',
            description: '標準的な実験室環境での取扱いが安全です。',
          },
          {
            feature: 'ISO 9001:2015のもとで製造',
            description: '実験室使用のためのトレース可能な品質と分析検証を保証します。',
          },
        ],
        faq: [
          {
            question: 'この化合物の主な機能は何ですか？',
            answer:
              '界面活性剤合成のための対称ジオールとして、また表面化学研究における参照化合物として機能します。',
          },
          {
            question: 'コーティングに直接使用できますか？',
            answer: '主に実験室評価または配合開発用であり、直接的な工業用途を意図していません。',
          },
          {
            question: 'VUPはどの純度を供給していますか？',
            answer: '実験室グレードの純度は通常≥ 98%であり、GCおよび滴定法により検証されています。',
          },
          {
            question: 'REACH登録されていますか？',
            answer:
              'ECHAデータベース（EC 205-533-4）にリストされており、実験室免除のもとで実験室研究用途に利用可能です。',
          },
          {
            question: 'この化合物が研究に有用な理由は何ですか？',
            answer:
              'その対称構造が分子モデリングを簡素化し、表面活性用途におけるアセチレン系ジオールの挙動を研究するための理想的な参照化合物となります。',
          },
          {
            question: 'TMDDとどう異なりますか？',
            answer:
              'DMHDは主に研究開発に使用される小型の対称分子であり、TMDDは工業用コーティングおよびインクで使用される商業用界面活性剤です。',
          },
        ],
      },
    }),
    payload.update({
      collection: 'products',
      id: dimethylhexynol.id,
      locale: 'jp',
      data: {
        name: '3,5-ジメチル-1-ヘキシン-3-オール',
        description:
          '界面活性剤およびコーティング添加剤合成における主要中間体として使用される短鎖アセチレンアルコール。VUP, a.s.（プリエヴィッザ、スロバキア）によってパイロットプラント規模で生産されており、この化合物はポリマー改質、接着剤、ファインケミカル開発における用途に理想的な反応性と溶解性を組み合わせています。',
        applications: [
          {
            application: 'コーティングと塗料',
            description:
              '溶剤系システム用のフローおよび平滑化改質剤の前駆体で、表面仕上げと性能を向上させます。',
            image: demoImageDoc.id,
          },
          {
            application: '接着剤とシーラント',
            description: '基材の濡れ性と接着特性を改善し、接着性能を向上させます。',
            image: image2Doc.id,
          },
          {
            application: '界面活性剤',
            description:
              'コーティングおよびインク用途向けの動的表面張力制御剤の合成に使用されます。',
            image: image3Doc.id,
          },
          {
            application: 'ポリマー添加剤',
            description: 'カスタマイズされた特性を持つ柔軟なアセチレン官能化ポリマーの中間体。',
            image: demoImageDoc.id,
          },
          {
            application: 'ファインケミカル',
            description: 'カスタム合成における特殊アルキンおよびジオール系中間体の前駆体。',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: '反応性中間体',
            description:
              'アセチレン系ジオールおよび表面活性剤の合成における重要なビルディングブロック。',
          },
          {
            feature: '優れた溶媒適合性',
            description: '一般的な有機溶媒と混和性があり、多用途な配合使用が可能です。',
          },
          {
            feature: '強化された濡れ性とフロー',
            description: 'コーティングおよび接着剤添加剤システムにおける性能成分として機能します。',
          },
          {
            feature: '安定な取扱い',
            description: '低分子量アルキノールと比較して揮発性が低く、より安全な処理が可能です。',
          },
          {
            feature: 'パイロットスケールの入手可能性',
            description: '産業評価およびカスタム合成のために管理された条件下で生産されています。',
          },
          {
            feature: '品質保証',
            description: '一貫した純度と性能のためにISO 9001:2015認証のもとで製造されています。',
          },
        ],
        faq: [
          {
            question: '3,5-ジメチル-1-ヘキシン-3-オールは主に何に使用されますか？',
            answer:
              'コーティングおよびインクにおけるアセチレン系ジオール界面活性剤およびフロー制御添加剤の前駆体です。',
          },
          {
            question: '極性および非極性溶媒の両方と適合性がありますか？',
            answer: 'はい、アルコール、ケトン、炭化水素を含む幅広い溶媒適合性を示します。',
          },
          {
            question: 'パイロットグレード材料の純度はどのくらいですか？',
            answer: 'VUPは通常≥ 98%の純度を供給し、GC分析により検証されています。',
          },
          {
            question: '危険有害性分類はありますか？',
            answer:
              '通常の輸送条件下では危険物として分類されていません。SDSガイダンスに従って取り扱ってください。',
          },
          {
            question: 'この化合物をコーティング用途に適したものにするものは何ですか？',
            answer:
              'ヒドロキシル官能性と組み合わせたアセチレン構造が、フローおよび濡れ改質剤に必要な反応性と表面活性の理想的なバランスを提供します。',
          },
          {
            question: 'REACH準拠ですか？',
            answer:
              'アセチレンアルコールとしてECHAに登録されており、REACH準拠です。具体的な登録詳細についてはVUPまでお問い合わせください。',
          },
        ],
      },
    }),
    payload.update({
      collection: 'products',
      id: dimethylheptynol.id,
      locale: 'jp',
      data: {
        name: '3,6-ジメチル-1-ヘプチン-3-オール',
        description:
          '界面活性剤およびコーティング添加剤合成における中間体として使用される第三級アセチレンアルコール。VUP, a.s.（プリエヴィッザ、スロバキア）によってパイロットプラント規模で生産されており、この化合物は反応性と疎水性特性を組み合わせ、コーティング、インク、接着剤用の濡れ剤およびフロー制御剤の配合に有用です。',
        applications: [
          {
            application: 'コーティングと塗料',
            description: '動的表面張力の低減によりフロー、光沢、欠陥制御を向上させます。',
            image: demoImageDoc.id,
          },
          {
            application: '印刷インク',
            description: '疎水性基材上での濡れ性と顔料分散を促進します。',
            image: image2Doc.id,
          },
          {
            application: '接着剤とシーラント',
            description: '拡散と界面接着を改善し、結合性能を向上させます。',
            image: image3Doc.id,
          },
          {
            application: 'ポリマー合成',
            description: 'ポリマー用途における官能性モノマーおよび反応性添加剤の中間体。',
            image: demoImageDoc.id,
          },
          {
            application: 'ファインケミカル研究開発',
            description: 'アセチレンアルコール反応性研究における参照化合物として使用されます。',
            image: image2Doc.id,
          },
        ],
        keyFeatures: [
          {
            feature: '反応性中間体',
            description: 'アセチレン系界面活性剤および表面活性剤の合成に使用されます。',
          },
          {
            feature: '疎水性鎖バランス',
            description: '溶剤系システムにおいて強力な濡れ性とフロー性能を提供します。',
          },
          {
            feature: '第三級アルコールの安定性',
            description: '通常の処理条件下で酸化に耐性があります。',
          },
          {
            feature: '配合の多様性',
            description: 'コーティング、インク、ポリマー配合で効果的です。',
          },
          {
            feature: 'パイロットプラントの入手可能性',
            description: 'スケールアップ、開発試験、配合評価に適しています。',
          },
          {
            feature: '一貫した品質',
            description: 'トレーサブルな分析性能のためにISO 9001:2015のもとで製造されています。',
          },
        ],
        faq: [
          {
            question: '3,6-ジメチル-1-ヘプチン-3-オールの主な用途は何ですか？',
            answer:
              'コーティング、界面活性剤、接着剤用の第三級アセチレンアルコール中間体として機能します。',
          },
          {
            question: 'この製品はVUPのアセチレン系ジオールファミリーの一部ですか？',
            answer: 'はい、TMDDおよび他の動的表面張力制御剤と構造的に関連しています。',
          },
          {
            question: 'VUPが供給する純度はどのくらいですか？',
            answer: 'パイロットグレード材料は通常≥ 98%の純度を有し、GCにより確認されています。',
          },
          {
            question: '製品はREACH登録されていますか？',
            answer:
              'アセチレンアルコールのグループ登録でカバーされています。詳細についてはVUP規制部門までお問い合わせください。',
          },
          {
            question: 'この化合物を他のアセチレンアルコールと異なるものにするものは何ですか？',
            answer:
              'その第三級アルコール構造は、反応性と溶剤系配合に理想的な疎水性特性を維持しながら、酸化に対する耐性を強化します。',
          },
          {
            question: '水系システムで使用できますか？',
            answer:
              '水溶性が低いため主に溶剤系システムに適していますが、適切な共界面活性剤を使用してエマルジョンまたは分散液に配合することができます。',
          },
        ],
      },
    }),
  ])

  // --------------------
  // ADDING JAPANESE TRANSLATIONS FOR PRODUCTS (BATCH 13: DIPHENYL-PROPYNOL, TETRAPHENYL-BUTYNEDIOL, COLAMIN-PHOSPHATE-CA)
  // --------------------

  payload.logger.info('- Adding Japanese translations for batch 13 products...')

  await Promise.all([
    payload.update({
      collection: 'products',
      id: diphenylpropynol.id,
      locale: 'jp',
      data: {
        name: '1,1-ジフェニル-2-プロピン-1-オール',
        description:
          '反応性C≡C三重結合と、高い熱的および酸化的安定性を与える2つのフェニル置換基を組み合わせた芳香族アセチレンアルコール。VUPによって実験室規模で生産され、ファインケミカル合成、ポリマー研究、配位化学研究におけるモデル中間体として機能します。',
        applications: [
          {
            application: 'ファイン有機合成',
            description: '高度な化学合成における芳香族アルキン誘導体の中間体。',
            image: demoImageDoc.id,
          },
          {
            application: '触媒開発',
            description: '触媒研究における遷移金属水素化またはカップリング反応の試験基質。',
            image: image2Doc.id,
          },
          {
            application: 'ポリマー研究開発',
            description: '高度なポリマー材料研究における剛性芳香族ユニットのモノマーモデル。',
            image: image3Doc.id,
          },
          {
            application: '学術研究',
            description: '研究室におけるプロパルギルアルコールメカニズム研究の参照化合物。',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: '反応性アセチレンアルコール',
            description: '酸化カップリングおよび金属触媒付加研究の有用な前駆体。',
          },
          {
            feature: '芳香族安定性',
            description: 'フェニル基が要求の厳しい用途に対して熱的および酸化的耐性を強化。',
          },
          {
            feature: '二重反応性',
            description: '合成における多様な誘導体化経路を可能にするヒドロキシル基とアルキン基。',
          },
          {
            feature: '高純度研究グレード',
            description: '信頼性の高い実験結果のためにGC/NMRで検証された≥ 98%純度。',
          },
          {
            feature: 'ISO 9001:2015生産',
            description: '一貫した品質を確保するVUPの管理された実験室条件下で調製。',
          },
          {
            feature: '実験室規模の入手可能性',
            description: '研究用途に適した25 g、100 g、または250 g量で入手可能。',
          },
        ],
        faq: [
          {
            question: '1,1-ジフェニル-2-プロピン-1-オールは何に使用されますか？',
            answer:
              '実験室環境におけるファインケミカル合成、ポリマー研究、配位化学研究のモデル中間体として機能します。',
          },
          {
            question: 'この化合物を他のアセチレンアルコールと異なるものにするものは何ですか？',
            answer:
              '2つのフェニル置換基が、反応性アセチレン官能性を維持しながら、卓越した熱的および酸化的安定性を提供します。',
          },
          {
            question: 'VUPはどのような純度レベルを供給していますか？',
            answer:
              'VUPはGCおよびNMR分析により検証された≥ 98%純度の実験室グレード材料を供給します。',
          },
          {
            question: 'この製品はREACH登録されていますか？',
            answer:
              '研究使用免除が適用されます（年間< 1トン）。CLP分類は見つかりませんでした。標準的な実験室用PPEを推奨します。',
          },
          {
            question: '保管要件は何ですか？',
            answer:
              '安定性と純度を維持するために、密閉容器に入れて涼しく乾燥した環境で保管してください。',
          },
          {
            question: 'この化合物はどのような用途に適していますか？',
            answer:
              'すべての用途は研究開発使用に限定されており、ファイン合成、触媒開発、ポリマー研究が含まれます。',
          },
        ],
      },
    }),
    payload.update({
      collection: 'products',
      id: tetraphenylbutynediol.id,
      locale: 'jp',
      data: {
        name: '1,1,4,4-テトラフェニル-2-ブチン-1,4-ジオール',
        description:
          '2つの第三級アルコール基と中央の炭素–炭素三重結合を特徴とする剛性芳香族アセチレンジオール。VUPによって実験室規模で生産され、この化合物は主にポリマーおよび触媒研究におけるモデル構造および特殊中間体として使用されます。',
        applications: [
          {
            application: 'ポリマー研究開発',
            description: '高度なポリマー研究における剛性フェニル置換ジオールの構造モデル。',
            image: demoImageDoc.id,
          },
          {
            application: '触媒研究',
            description: '触媒系における酸化カップリング研究のリガンド前駆体またはモデル基質。',
            image: image2Doc.id,
          },
          {
            application: '有機合成',
            description: '複雑な分子構築のためのアリール-アセチレン化学における中間体。',
            image: image3Doc.id,
          },
          {
            application: '材料科学',
            description: '高度な材料のための架橋および芳香族ネットワークポリマーの設計に使用。',
            image: demoImageDoc.id,
          },
        ],
        keyFeatures: [
          {
            feature: '剛性芳香族コア',
            description:
              'モデルポリマーおよび触媒系のための熱安定性と定義された幾何学的構造を提供。',
          },
          {
            feature: '二重ヒドロキシル基',
            description:
              'ポリマー骨格改質のためのエステルまたはエーテルへの誘導体化を可能にします。',
          },
          {
            feature: '安定した三重結合',
            description: 'アセチレン反応性および酸化カップリング機構の研究に有用。',
          },
          {
            feature: '高純度研究グレード',
            description: '信頼性の高い結果のためにGC/NMR分析により検証された≥ 98%純度。',
          },
          {
            feature: 'VUPによる実験室生産',
            description: '一貫した品質のためにISO 9001:2015分析管理下で調製。',
          },
          {
            feature: '卓越した熱安定性',
            description: '高い融点（234-236°C）により、厳しい熱条件下での加工が可能。',
          },
        ],
        faq: [
          {
            question: '1,1,4,4-テトラフェニル-2-ブチン-1,4-ジオールは何に使用されますか？',
            answer:
              'ポリマー研究、触媒研究、材料科学応用におけるモデル構造および特殊中間体として機能します。',
          },
          {
            question: 'この化合物の独自性は何ですか？',
            answer:
              '4つのフェニル基を持つ剛性芳香族コア、二重第三級アルコール、中央三重結合の組み合わせが、卓越した熱安定性と定義された幾何学的構造を提供します。',
          },
          {
            question: 'VUPはどのような純度を供給していますか？',
            answer:
              'VUPはGCおよびNMR分析により検証された≥ 98%純度の実験室グレード材料を供給します。',
          },
          {
            question: 'この製品はREACH登録されていますか？',
            answer:
              '実験室使用のみ（年間< 1トン免除）。CLP分類なし。標準的なPPEで取り扱ってください。',
          },
          {
            question: '溶解性の特性は何ですか？',
            answer:
              '水への溶解性は低く、芳香族溶媒およびアルコールに可溶で、有機合成用途に適しています。',
          },
          {
            question: 'この化合物はどのような用途に適していますか？',
            answer:
              'すべての用途は研究開発使用に限定されており、ポリマー研究、触媒研究、材料科学が含まれます。',
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
            pentamethylpiperidine.id,
            pentamethylpiperidinol.id,
            aminoTmp.id,
            hals770.id,
            hals765.id,
            // spiroTempoAcid.id,
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
        id: phosphocolamines.id,
        data: {
          featuredProducts: [colaminPhosphate.id],
          image: colaminPhosphateStructureDoc.id,
        },
      })
      .catch((err) => {
        payload.logger.error(`- Error updating phosphocolamines category: ${err}`)
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

    payload
      .update({
        collection: 'productCategories',
        id: epoxides.id,
        data: {
          featuredProducts: [
            diepoxyoctane.id,
            epoxyHexene.id,
            epoxyhexane.id,
            epoxyoctane.id,
            epoxy7octene.id,
            epoxydecane.id,
            diepoxyhexane.id,
            dimethylepoxybutane.id,
          ],
          image: demoImageDoc.id,
        },
      })
      .catch((err) => {
        payload.logger.error(`- Error updating epoxides category: ${err}`)
      }),

    payload
      .update({
        collection: 'productCategories',
        id: acetylenicAlcohols.id,
        data: {
          featuredProducts: [
            tmdd.id,
            longChainTmdd.id,
            dmhd.id,
            dimethylhexynol.id,
            dimethylheptynol.id,
          ],
          image: demoImageDoc.id,
        },
      })
      .catch((err) => {
        payload.logger.error(`- Error updating acetylenic-alcohols category: ${err}`)
      }),
    payload
      .update({
        collection: 'productCategories',
        id: freeRadicals.id,
        data: {
          featuredProducts: [
            tempo.id,
            hTempo.id,
            tempone.id,
            acetamidoTempo.id,
            aminoTempo.id,
            galvinoxyl.id,
          ],
          image: tempoStructureDoc.id,
        },
      })
      .catch((err) => {
        payload.logger.error(`- Error updating free-radicals category: ${err}`)
      }),
  ])

  return {
    categories: {
      hydroxyAcids,
      hinderedAmines,
      phosphocolamines,
      polymerisationInhibitors,
      diaminopolyethyleneGlycols,
      chromanolsDerivatives,
      freeRadicals,
      epoxides,
      acetylenicAlcohols,
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
      colaminPhosphateCalciumSalt,
      colaminPhosphate,
      vupin,
      pentamethylpiperidine,
      pentamethylpiperidinol,
      aminoTmp,
      hals770,
      hals765,
      aminoTempo,
      // spiroTempoAcid,
      galvinoxyl,
      diepoxyoctane,
      epoxyHexene,
      epoxyhexane,
      epoxyoctane,
      epoxy7octene,
      epoxydecane,
      diepoxyhexane,
      dimethylepoxybutane,
      tmdd,
      longChainTmdd,
      dmhd,
      dimethylhexynol,
      dimethylheptynol,
      diphenylpropynol,
      tetraphenylbutynediol,
    },
  }
}

export type SeededProductData = Awaited<ReturnType<typeof seedProductData>>
