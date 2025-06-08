import type { Payload } from 'payload'
import type { SeededMedia } from './1-media'
import type { SeededServices } from './3-services'
import type { SeededProductData } from './4-product-data'

export const seedIndustries = async (
  payload: Payload,
  media: SeededMedia,
  services: SeededServices,
  products: SeededProductData['products'],
) => {
  payload.logger.info('— Seeding industries...')

  // Destructure needed documents for convenience
  const {
    automotiveDoc,
    automotiveChallenge1Doc,
    automotiveChallenge2Doc,
    automotiveChallenge3Doc,
    automotiveChallenge4Doc,
    coatingsPaintsInksDoc,
    coatingsChallenge1Doc,
    coatingsChallenge2Doc,
    coatingsChallenge3Doc,
    polymersPlasticsDoc,
    polymersChallenge1Doc,
    polymersChallenge2Doc,
    polymersChallenge3Doc,
    polymersChallenge4Doc,
    adhesivesSealantsDoc,
    adhesivesChallenge1Doc,
    adhesivesChallenge2Doc,
    adhesivesChallenge3Doc,
    adhesivesChallenge4Doc,
    pharmaceuticalsDoc,
    pharmaChallenge1Doc,
    pharmaChallenge2Doc,
    pharmaChallenge3Doc,
    pharmaChallenge4Doc,
    petrochemicalsRefineriesDoc,
    petroChallenge1Doc,
    petroChallenge2Doc,
    petroChallenge3Doc,
    petroChallenge4Doc,
    batteryEnergyStorageDoc,
    batteryChallenge1Doc,
    batteryChallenge2Doc,
    batteryChallenge3Doc,
    buildingConstructionDoc,
    constructionChallenge1Doc,
    constructionChallenge2Doc,
    constructionChallenge3Doc,
    constructionChallenge4Doc,
  } = media

  const { researchDevelopment, analyticalTesting, customSynthesisManufacturing } = services
  const { dmpa, dmba, hpva, tempo, hTempo, vupin } = products

  const [
    automotive,
    coatingsPaintsInks,
    polymersPlastics,
    adhesivesSealants,
    pharmaceuticals,
    petrochemicalsRefineries,
    batteryEnergyStorage,
    buildingConstruction,
  ] = await Promise.all([
    payload.create({
      collection: 'industries',
      data: {
        name: 'Automotive Industry',
        _status: 'published',
        description:
          'The automotive industry demands materials that deliver superior performance, durability, aesthetics, and meet increasingly strict environmental and safety standards. VUP, a.s. supports automotive manufacturers and suppliers by providing essential chemical intermediates for advanced, low-VOC coatings and high-performance adhesives, specialized cleaning agents for production processes, and tailored analytical testing services that ensure compliance with automotive standards. We partner with the industry to enable innovation in vehicle materials and manufacturing.',
        summary:
          'VUP provides essential chemical intermediates and services for automotive innovation, focusing on superior performance, durability, and compliance with stringent environmental and safety standards, enabling advancements in vehicle materials and manufacturing.',
        featuredImage: automotiveDoc.id,
        services: [researchDevelopment.id, analyticalTesting.id],
        challenges: [
          {
            title: 'Advanced Automotive Coatings (OEM & Refinish)',
            challenge:
              'Developing durable, high-performance, and environmentally compliant coatings (primers, basecoats, clearcoats) for vehicle bodies and components.',
            solution:
              'We supply key raw materials essential for modern automotive coatings. DMPA (CAS 4767-03-7) and DMBA (CAS 10097-02-6) are critical for producing waterborne Polyurethane Dispersions (PUDs) and polyester/alkyd resins used in eco-friendly, low-VOC automotive paints, contributing to excellent finish quality. HPVA (CAS 4835-90-9), particularly via its derivative HPN, is used in primers and solvent-borne paints to enhance properties like chip resistance. These methylolalkanoic acids are vital components for prime autocoatings.',
            image: automotiveChallenge1Doc.id,
            challengeLink: 'advanced-automotive-coatings',
            relatedProducts: [dmpa.id, dmba.id, hpva.id],
            relatedServices: [researchDevelopment.id, analyticalTesting.id],
            caseStudies: [],
          },
          {
            title: 'High-Performance Automotive Adhesives',
            challenge:
              'Bonding diverse materials securely and durably is essential in modern vehicle construction, often requiring high-performance adhesives, including waterborne systems.',
            solution:
              'DMBA (CAS 10097-02-6) serves as a crucial component in waterborne polyurethane, epoxy, and polyester adhesives used in automotive assembly. It enhances bonding strength and improves water resistance, contributing to the overall structural integrity and longevity of the vehicle.',
            image: automotiveChallenge2Doc.id,
            challengeLink: 'automotive-adhesives',
            relatedProducts: [dmba.id],
            relatedServices: [researchDevelopment.id],
            caseStudies: [],
          },
          {
            title: 'Surface Preparation & Cleaning',
            challenge:
              'Ensuring surfaces are properly cleaned and degreased is critical for achieving optimal adhesion and finish quality in painting, sealing, and bonding operations during automotive manufacturing and repair.',
            solution:
              'We offer OP VUPOL, a specialized degreasing agent recommended for use in the automotive industry. It is effective for applications such as degreasing brake linings and preparing surfaces prior to gluing, sealing, or painting.',
            image: automotiveChallenge3Doc.id,
            challengeLink: 'surface-preparation',
            relatedProducts: [],
            caseStudies: [],
          },
          {
            title: 'Component Testing & Compliance (VOCs)',
            challenge:
              'Meeting stringent industry standards and regulations for materials used in vehicle interiors and components, particularly regarding Volatile Organic Compound (VOC) emissions from plastics.',
            solution:
              'Our accredited ATBEL analytical laboratories (SNAS S-118) provide specialized testing services for the automotive sector, including the determination of VOC content in plastics according to the PV3341 automotive standard. We also offer regulatory support concerning the compliance of chemical raw materials (e.g., REACH).',
            image: automotiveChallenge4Doc.id,
            challengeLink: 'testing-compliance',
            relatedServices: [analyticalTesting.id],
            caseStudies: [],
          },
        ],
        slug: 'automotive',
      },
    }),
    payload.create({
      collection: 'industries',
      data: {
        name: 'Coatings, Paints & Inks',
        _status: 'published',
        description:
          'The coatings, paints, and inks industry continuously seeks innovations that enhance performance, durability, and environmental compatibility. Formulators face challenges in meeting stringent regulations (like low VOC targets) while delivering exceptional protection, aesthetics, and functionality. VUP, a.s., leverages over 70 years of chemical expertise to provide essential building blocks like Dimethylolpropionic Acid (DMPA) and the unique Dimethylolbutanoic Acid (DMBA), alongside other key intermediates, enabling the production of advanced waterborne systems and high-performance coatings. As a key European producer, we are your reliable partner for these critical raw materials, supported by robust R&D and regulatory know-how.',
        summary:
          'VUP offers key building blocks for waterborne systems and coatings, ensuring performance and regulatory compliance.',
        featuredImage: coatingsPaintsInksDoc.id,
        services: [researchDevelopment.id, analyticalTesting.id],
        keyProducts: [dmpa.id, dmba.id, hpva.id],
        challenges: [
          {
            title: 'Waterborne Coatings (PUDs, Alkyds, Polyesters)',
            challenge:
              'Developing stable, high-performance waterborne coatings with reduced environmental impact requires specialized hydrophilic monomers.',
            solution:
              'Our DMPA (CAS 4767-03-7) is a versatile building block ensuring stable dispersion of resins (polyurethanes, alkyds, polyesters) in water, leading to lower VOC formulations with enhanced adhesion, gloss, and impact resistance. Our unique DMBA (CAS 10097-02-6) offers potential advantages like superior solubility and faster reaction rates, beneficial for optimizing polyurethane production and application properties. Both are fully REACH registered, supporting regulatory compliance. We also offer Hydroxypivalic Acid (HPVA, CAS 4835-90-9), another key intermediate for durable waterborne resins.',
            image: coatingsChallenge1Doc.id,
            challengeLink: 'waterborne-coatings',
            relatedProducts: [dmpa.id, dmba.id, hpva.id],
            relatedServices: [researchDevelopment.id, analyticalTesting.id],
            caseStudies: [],
          },
          {
            title: 'Powder Coatings & Resin Modification',
            challenge:
              'Achieving optimal flow, leveling, durability, and flexibility in powder coatings and other resin systems often requires specific intermediates.',
            solution:
              'Hydroxypivalic Acid (HPVA) serves as a key intermediate for producing resins, including polyesters used in powder coatings where its derivative (HPN) improves flow and leveling. Acrylate esters of polyhydric alcohols act as versatile monomers providing crosslinking points, influencing hardness, flexibility, and durability in the final coating film. Our Custom Synthesis capabilities can further address specific monomer or additive needs.',
            image: coatingsChallenge2Doc.id,
            challengeLink: 'powder-coatings',
            relatedProducts: [hpva.id],
            relatedServices: [researchDevelopment.id],
            caseStudies: [],
          },
          {
            title: 'Meeting Environmental Regulations (Low VOC)',
            challenge:
              'Adhering to strict environmental regulations, particularly concerning Volatile Organic Compound (VOC) emissions, is critical for market access.',
            solution:
              "By supplying key monomers like DMPA and DMBA that enable high-performance waterborne formulations, VUP directly supports the industry's shift towards lower-VOC and more sustainable coating technologies. Our products are registered under REACH, and our Regulatory Support services can assist clients in navigating compliance requirements for their formulations.",
            image: coatingsChallenge3Doc.id,
            challengeLink: 'environmental-regulations',
            relatedProducts: [dmpa.id, dmba.id, hpva.id],
            relatedServices: [analyticalTesting.id],
            caseStudies: [],
          },
        ],
        slug: 'coatings-paints-inks',
      },
    }),
    payload.create({
      collection: 'industries',
      data: {
        name: 'Polymers & Plastics',
        _status: 'published',
        description:
          'The Polymers & Plastics industry relies on innovative chemistry to create materials with specific functionalities, enhanced durability, and improved processing characteristics. From controlling polymerization reactions to protecting final products from degradation, specialized chemical additives and intermediates play a critical role. VUP, a.s. provides key building blocks, stabilizers (like Hindered Amines/HALS), crosslinkers, and polymerization mediators (like TEMPO), supported by extensive R&D and analytical services, enabling our partners to develop advanced polymer solutions.',
        summary:
          'VUP offers building blocks and stabilizers for polymers, enhancing durability and processing with advanced R&D support.',
        featuredImage: polymersPlasticsDoc.id,
        services: [researchDevelopment.id, analyticalTesting.id],
        keyProducts: [tempo.id, hTempo.id, dmpa.id, dmba.id, hpva.id],
        challenges: [
          {
            title: 'Polymer Stabilization (Light, Heat, Oxidation)',
            challenge:
              'Protecting polymers from degradation caused by UV light, heat, and oxidation is crucial for extending product lifespan and maintaining performance, especially in demanding applications.',
            solution:
              'We offer Hindered Amines, including Hindered Amine Light Stabilizers (HALS) derived from our TAA production line. These additives act as potent radical scavengers, significantly inhibiting polymer degradation, preventing cracking and discoloration, and improving the long-term durability of plastics and coatings. Our TEMPO derivatives also contribute to polymer stability.',
            image: polymersChallenge1Doc.id,
            challengeLink: 'polymer-stabilization',
            relatedServices: [researchDevelopment.id, analyticalTesting.id],
            caseStudies: [],
          },
          {
            title: 'Controlled Polymerization & Architecture',
            challenge:
              'Achieving specific polymer properties often requires precise control over molecular weight, polydispersity, and architecture during synthesis.',
            solution:
              'TEMPO (CAS 2564-83-2) functions as a highly effective mediator in Nitroxide-Mediated Polymerization (NMP), allowing for the synthesis of polymers with well-defined structures. This control enables the development of materials with enhanced performance characteristics tailored for specific applications. H-TEMPO (CAS 2226-96-2) can serve as a polymerization inhibitor for process control or storage.',
            image: polymersChallenge2Doc.id,
            challengeLink: 'controlled-polymerization',
            relatedProducts: [tempo.id, hTempo.id],
            relatedServices: [researchDevelopment.id],
            caseStudies: [],
          },
          {
            title: 'Polyurethane Building Blocks',
            challenge:
              'Formulating high-performance polyurethanes (dispersions, elastomers, adhesives) requires specific intermediates to impart desired properties like water dispersibility, flexibility, and adhesion.',
            solution:
              "We provide key methylolalkanoic acids DMPA (CAS 4767-03-7) and DMBA (CAS 10097-02-6), essential for creating stable waterborne PUDs with enhanced performance. HPVA serves as an intermediate for durable polyester and polyurethane resins. Trimethylolethane (TME, CAS 77-85-0) offers an alternative polyol building block. Additionally, O,O'-Bis(3-aminopropyl)polyethyleneglycol can be used as a reactive component to impart flexibility and hydrophilicity.",
            image: polymersChallenge3Doc.id,
            challengeLink: 'polyurethane-building-blocks',
            relatedProducts: [dmpa.id, dmba.id, hpva.id],
            relatedServices: [researchDevelopment.id],
            caseStudies: [],
          },
          {
            title: 'Crosslinking & Property Enhancement',
            challenge:
              'Improving the mechanical strength, thermal stability, elasticity, and chemical resistance of polymers often involves creating crosslinked networks within the material.',
            solution:
              'We offer crosslinking agents such as Tetravup (VUP Brand) and Adipic acid dihydrazide. These multifunctional molecules react with polymer chains to enhance structural integrity and performance characteristics critical for demanding applications in adhesives, coatings, elastomers, and plastics.',
            image: polymersChallenge4Doc.id,
            challengeLink: 'crosslinking',
            relatedServices: [researchDevelopment.id, analyticalTesting.id],
            caseStudies: [],
          },
        ],
        slug: 'polymers-plastics',
      },
    }),
    payload.create({
      collection: 'industries',
      data: {
        name: 'Adhesives & Sealants',
        _status: 'published',
        description:
          'The Adhesives & Sealants industry demands materials that provide strong, durable bonds, excellent flexibility, and resistance to environmental factors, while increasingly favouring sustainable, low-VOC formulations. VUP, a.s. contributes key chemical intermediates that enable the development of advanced adhesive and sealant systems. We provide specialized building blocks like Dimethylolbutanoic Acid (DMBA) for high-performance waterborne adhesives, Hydroxypivalic Acid (HPVA) derivatives for reactive hot melts, and essential crosslinkers, supporting formulators in meeting performance and regulatory challenges.',
        summary:
          'VUP supplies intermediates for adhesives, enhancing strength, flexibility, and sustainability with low-VOC solutions.',
        featuredImage: adhesivesSealantsDoc.id,
        services: [researchDevelopment.id, analyticalTesting.id],
        keyProducts: [dmba.id, hpva.id, dmpa.id],
        challenges: [
          {
            title: 'Waterborne Adhesive Systems (Polyurethane, Polyester, Epoxy)',
            challenge:
              'Formulating high-performance waterborne adhesives requires intermediates that ensure stability, strong bonding, and water resistance.',
            solution:
              'Dimethylolbutanoic Acid (DMBA, CAS 10097-02-6) is a crucial component for waterborne polyurethane, epoxy, and polyester adhesives. Its superior water solubility improves processing efficiency, while its function as a cross-linking agent provides exceptional bonding strength and improved water resistance. Its potentially faster reaction rate can also enhance production throughput. We also offer DMPA, a related methylolalkanoic acid also used in PUDs for adhesives.',
            image: adhesivesChallenge1Doc.id,
            challengeLink: 'waterborne-adhesive-systems',
            relatedProducts: [dmba.id, dmpa.id],
            relatedServices: [researchDevelopment.id, analyticalTesting.id],
            caseStudies: [],
          },
          {
            title: 'Reactive Hot Melt Adhesives & Resin Modification',
            challenge:
              'Developing solvent-free reactive hot melts with good transparency, adhesion, and flexibility requires specific building blocks.',
            solution:
              "Hydroxypivalic Acid (HPVA, CAS 4835-90-9) is a precursor to Hydroxypivalic Acid Neopentyl Glycol Ester (HPN). HPN acts as a building block for polyurethane resins used in adhesives, contributing a favourable balance of hardness, flexibility, and adhesion. In reactive hot melts, HPN can improve transparency and reduce solvent requirements, supporting lower VOC formulations. VUP's Polyhydric Alcohols also serve as intermediates for resins used in this sector.",
            image: adhesivesChallenge2Doc.id,
            challengeLink: 'reactive-hot-melts',
            relatedProducts: [hpva.id],
            relatedServices: [researchDevelopment.id],
            caseStudies: [],
          },
          {
            title: 'Enhanced Strength & Durability via Crosslinking',
            challenge:
              'Achieving the necessary mechanical strength, thermal stability, and chemical resistance in high-performance adhesives and sealants often requires effective crosslinking.',
            solution:
              'We provide key crosslinking agents like Adipic acid dihydrazide. These components react within the adhesive or sealant formulation to create robust polymer networks, significantly enhancing the durability and performance characteristics required for demanding applications.',
            image: adhesivesChallenge3Doc.id,
            challengeLink: 'crosslinking-solutions',
            relatedServices: [analyticalTesting.id],
            caseStudies: [],
          },
          {
            title: 'Performance Additives & Custom Solutions',
            challenge:
              'Unique applications may require specialized additives or intermediates to achieve specific performance targets not met by standard components.',
            solution:
              'TEMPO derivatives show potential for enhancing polymerization processes or improving the thermal/mechanical strength of adhesives. Furthermore, our Custom Synthesis services allow us to develop and produce specific monomers or additives tailored to your unique adhesive or sealant formulation needs, backed by our extensive R&D capabilities.',
            image: adhesivesChallenge4Doc.id,
            challengeLink: 'custom-solutions',
            relatedProducts: [tempo.id],
            relatedServices: [researchDevelopment.id],
            caseStudies: [],
          },
        ],
        slug: 'adhesives-sealants',
      },
    }),
    payload.create({
      collection: 'industries',
      data: {
        name: 'Pharmaceuticals & Biotechnology',
        _status: 'published',
        description:
          'The Pharmaceutical and Biotechnology sectors demand exceptional purity, innovative chemistry, and strict adherence to regulatory standards. VUP, a.s. partners with companies in these critical industries by providing key chemical intermediates, specialized diagnostic aids, advanced biomedical materials, and expert R&D and custom synthesis services. Leveraging our 70+ years of chemical expertise, ISO 9001:2015 certification, and accredited analytical capabilities, we support the development and production of vital healthcare solutions.',
        summary:
          'VUP provides intermediates and services for pharma and biotech, ensuring purity and compliance with innovative chemistry.',
        featuredImage: pharmaceuticalsDoc.id,
        services: [researchDevelopment.id, analyticalTesting.id],
        keyProducts: [tempo.id, hTempo.id],
        challenges: [
          {
            title: 'API Synthesis & Pharmaceutical Intermediates',
            challenge:
              'Sourcing high-purity, reliably supplied raw materials and intermediates is crucial for Active Pharmaceutical Ingredient (API) manufacturing.',
            solution:
              "We specialize in the production of TEMPO (CAS 2564-83-2) and related nitroxide radicals, which serve as versatile catalysts, antioxidants, and raw materials, including use in APIs targeting Parkinson's disease. VUP's Custom Synthesis service provides tailored production of other complex organic intermediates needed for drug development pipelines, backed by robust quality control.",
            image: pharmaChallenge1Doc.id,
            challengeLink: 'api-synthesis',
            relatedProducts: [tempo.id, hTempo.id],
            relatedServices: [researchDevelopment.id, analyticalTesting.id],
            caseStudies: [],
          },
          {
            title: 'Biomedical Materials & Device Coatings',
            challenge:
              'Developing advanced medical devices and therapies often requires specialized biocompatible materials with unique functional properties.',
            solution:
              "VUP is the unique global producer of O,O'-Bis(3-aminopropyl)polyethyleneglycol (DAPEG), a high-value intermediate used to create lubricious, hydrophilic coatings for vascular intervention devices and other surgical applications. Building on this, we have developed pilot capabilities for PEG-diacrylamide (PEGDAA), a derivative with significant potential in tissue engineering, 3D bioprinting, and drug delivery systems. Our R&D team actively collaborates with partners like DSM Biomedical in this area.",
            image: pharmaChallenge2Doc.id,
            challengeLink: 'biomedical-materials',
            relatedServices: [researchDevelopment.id],
            caseStudies: [],
          },
          {
            title: 'Diagnostic Aids & Healthcare Products',
            challenge:
              'Reliable and safe consumable materials are essential for routine diagnostic procedures in healthcare settings.',
            solution:
              'We manufacture high-quality diagnostic gels, including GELSON for sonography and EV GEL for ECG/EEG examinations. These products are formulated using safe, dermatology/cosmetic-grade raw materials, are alcohol-free, non-irritating, and meet relevant health standards (Gelson holds a MoH SK health certificate). VUP also produces other fine chemicals and products for healthcare applications.',
            image: pharmaChallenge3Doc.id,
            challengeLink: 'diagnostic-aids',
            relatedServices: [analyticalTesting.id],
            caseStudies: [],
          },
          {
            title: 'Drug Discovery & Research Chemicals',
            challenge:
              'Researchers require access to specialized, high-purity chemicals and reagents for target identification, screening, and preclinical studies.',
            solution:
              'Our TEMPO derivatives serve as important tools (antioxidants, spin labels) in pharmaceutical research. VUP also produces unique laboratory chemicals specifically for medical applications and offers Custom Synthesis services to provide researchers with novel compounds or specific intermediates needed for their discovery programs.',
            image: pharmaChallenge4Doc.id,
            challengeLink: 'drug-discovery',
            relatedProducts: [tempo.id, hTempo.id],
            relatedServices: [researchDevelopment.id, analyticalTesting.id],
            caseStudies: [],
          },
        ],
        slug: 'pharmaceuticals',
      },
    }),
    payload.create({
      collection: 'industries',
      data: {
        name: 'Petrochemicals & Refineries',
        _status: 'published',
        description:
          'Born from the Petrochemical Research Institute founded in 1950, VUP, a.s. possesses deep historical roots and extensive expertise in petrochemical science and technology. While not a large-scale refiner, we partner with the Petrochemicals & Refineries sector by providing specialized chemical products (like fuel stabilizers and inhibitors), advanced analytical services, custom synthesis of intermediates, and expert R&D support for process optimization and development. Our commitment to quality (ISO 9001) and safety (Responsible Care) makes us a reliable partner for this demanding industry.',
        summary:
          'VUP offers specialized products and services for petrochemicals, focusing on quality, safety, and process optimization.',
        featuredImage: petrochemicalsRefineriesDoc.id,
        services: [researchDevelopment.id, analyticalTesting.id],
        challenges: [
          {
            title: 'Fuel Processing, Storage & Stability',
            challenge:
              'Ensuring fuel stability during processing, transportation, and storage is critical to prevent degradation, gum formation, and maintain quality specifications.',
            solution:
              'We produce specialized additives like VUPIN H37-B (Antioxidant/UV Stabilizer) designed for fuel processing and storage. Additionally, our expertise extends to polymerization inhibitors like H-TEMPO, which has been successfully used for years in refinery FCC units (e.g., at Slovnaft) to prevent unwanted reactions.',
            image: petroChallenge1Doc.id,
            challengeLink: 'fuel-processing-storage',
            relatedServices: [researchDevelopment.id, analyticalTesting.id],
            relatedProducts: [vupin.id, hTempo.id],
            caseStudies: [],
          },
          {
            title: 'Petrochemical Synthesis & Specialty Intermediates',
            challenge:
              'The petrochemical industry requires a wide range of specialized intermediates for downstream applications or specific process needs, often demanding custom chemical synthesis capabilities.',
            solution:
              'Leveraging our strong R&D foundation, we offer Custom Synthesis services for specialty organic intermediates. Our historical and ongoing research expertise includes areas directly relevant to petrochemical feedstocks and derivatives, such as acetylenic alcohols, epoxides, polyhydric alcohols, higher aldehydes, and brominated hydrocarbons.',
            image: petroChallenge2Doc.id,
            challengeLink: 'petrochemical-synthesis',
            relatedServices: [researchDevelopment.id],
            caseStudies: [],
          },
          {
            title: 'Raw Materials for Downstream Industries',
            challenge:
              'Refineries and petrochemical plants provide the fundamental building blocks for numerous downstream industries like polymers, plastics, coatings, and adhesives. Suppliers of intermediates for these sectors are key partners.',
            solution:
              'We manufacture key intermediates like DMPA, DMBA, and HPVA, which are derived from petrochemical value chains and are essential raw materials for producing high-performance polyurethanes (PUDs), polyesters, and alkyds used extensively in coatings, adhesives, and polymer applications.',
            image: petroChallenge3Doc.id,
            challengeLink: 'raw-materials',
            relatedProducts: [dmpa.id, dmba.id, hpva.id],
            relatedServices: [researchDevelopment.id],
            caseStudies: [],
          },
          {
            title: 'Process Optimization, Analysis & Safety',
            challenge:
              'Optimizing refinery and petrochemical processes, ensuring product quality, and maintaining high safety standards requires robust analytical support and technical expertise.',
            solution:
              'Our R&D services can assist with process development and optimization. Our accredited ATBEL Division (SNAS S-118) provides comprehensive analytical services relevant to this sector, including gas/liquid chromatography for composition analysis, VOC determination, physical property testing, and extensive technical-safety analyses (flash point, flammability, etc.) crucial for safe handling and process control.',
            image: petroChallenge4Doc.id,
            challengeLink: 'process-optimization',
            relatedServices: [researchDevelopment.id, analyticalTesting.id],
            caseStudies: [],
          },
        ],
        slug: 'petrochemicals-refineries',
      },
    }),
    payload.create({
      collection: 'industries',
      data: {
        name: 'Battery & Energy Storage',
        _status: 'published',
        description:
          'The global search for efficient, sustainable, and safe energy storage solutions is driving innovation beyond traditional lithium-ion batteries. Organic Radical Batteries (ORBs) represent a promising frontier, utilizing redox-active organic molecules like TEMPO (2,2,6,6-Tetramethylpiperidinooxy) and its derivatives. VUP, a.s., with its long-standing expertise in the R&D and production of high-purity TEMPO compounds, is positioned to support the development of this next generation of energy storage technology. Our scalable production capabilities and ongoing research efforts aim to provide key materials for ORBs and advanced redox flow batteries.',
        summary:
          'VUP supports energy storage innovation with TEMPO compounds for ORBs and redox flow batteries, focusing on sustainability and efficiency.',
        featuredImage: batteryEnergyStorageDoc.id,
        keyProducts: [tempo.id, hTempo.id],
        services: [researchDevelopment.id, analyticalTesting.id, customSynthesisManufacturing.id],
        challenges: [
          {
            title: 'Organic Radical Batteries (ORBs)',
            challenge:
              'Developing high-performance, metal-free, and potentially safer battery systems for applications ranging from portable electronics to grid storage.',
            solution:
              'TEMPO and its derivatives exhibit remarkable electrochemical performance, acting as highly efficient and reversible charge carriers. Their potential use as redox-active materials in ORB electrodes offers advantages like potentially high power density and fast charge/discharge rates. VUP produces high-purity TEMPO suitable for electrochemical research and development in this field.',
            image: batteryChallenge1Doc.id,
            challengeLink: 'organic-radical-batteries',
            relatedProducts: [tempo.id, hTempo.id],
            relatedServices: [researchDevelopment.id, customSynthesisManufacturing.id],
            caseStudies: [],
          },
          {
            title: 'Aqueous Redox Flow Batteries',
            challenge:
              'Improving the energy density, efficiency, and cost-effectiveness of aqueous redox flow batteries for grid-scale energy storage.',
            solution:
              "Research indicates significant potential for TEMPO-based catholytes to enhance the performance of aqueous redox flow batteries. VUP's expertise in TEMPO chemistry positions us to collaborate on developing and supplying tailored TEMPO derivatives optimized for stability and electrochemical potential in flow battery systems.",
            image: batteryChallenge2Doc.id,
            challengeLink: 'redox-flow-batteries',
            relatedProducts: [tempo.id],
            relatedServices: [researchDevelopment.id, customSynthesisManufacturing.id],
            caseStudies: [],
          },
          {
            title: 'Material Development & Optimization',
            challenge:
              'Optimizing the performance of TEMPO-based batteries requires understanding structure-property relationships and potentially synthesizing novel derivatives with enhanced stability, solubility, or redox potential. Performance optimization regarding energy density and charge/discharge efficiency is a key focus.',
            solution:
              'Leveraging our deep expertise in nitroxide radical chemistry and R&D capabilities, we partner with researchers and companies to develop and synthesize custom TEMPO derivatives. Our goal is to address specific performance bottlenecks and contribute to advancements in ORB and flow battery technology through targeted material innovation. VUP has technologies involving TEMPO ready for scaling up.',
            image: batteryChallenge3Doc.id,
            challengeLink: 'material-development',
            relatedServices: [
              researchDevelopment.id,
              customSynthesisManufacturing.id,
              analyticalTesting.id,
            ],
            caseStudies: [],
          },
        ],
        slug: 'battery-energy-storage',
      },
    }),
    payload.create({
      collection: 'industries',
      data: {
        name: 'Building & Construction',
        _status: 'published',
        description:
          'The Building & Construction industry continuously seeks materials and chemical solutions that improve durability, process efficiency, safety, and sustainability. VUP, a.s. contributes to this sector by providing specialized chemical preparations designed to enhance concrete and plaster properties (VUPPOR, VUPRANYL), improve formwork efficiency (VUPOFORM), and supply key intermediates (DMBA, DMPA) used in high-performance coatings and adhesives essential for modern construction. Our focus is on delivering reliable chemical solutions that add value to building materials and processes.',
        summary:
          'VUP enhances construction materials with chemical solutions for durability, efficiency, and sustainability.',
        featuredImage: buildingConstructionDoc.id,
        keyProducts: [dmba.id, dmpa.id, hpva.id],
        services: [researchDevelopment.id, analyticalTesting.id],
        challenges: [
          {
            title: 'Concrete & Cement Product Enhancement',
            challenge:
              'Improving the workability of concrete mixes and enhancing the properties of finished concrete products like paving stones, panels, and structures is key for efficiency and performance.',
            solution:
              'VUPPOR is specifically designed as an additive for concrete products. It improves processability and enhances thermal insulation properties. Recommended for a wide range of concrete items including pavings, edge-stones, gardening parts, construction panels, and monolithic constructions, VUPPOR contributes to better quality finished products. It is physiologically harmless and requires no special handling measures beyond standard practices.',
            image: constructionChallenge1Doc.id,
            challengeLink: 'concrete-cement-enhancement',
            relatedServices: [researchDevelopment.id],
            caseStudies: [],
          },
          {
            title: 'Improving Plasters & Coatings',
            challenge:
              'Enhancing the durability, application properties, and crack resistance of synthetic plasters and water-soluble coatings used in construction. Meeting low-VOC requirements for architectural coatings.',
            solution:
              'VUPRANYL, a stable water dispersion, serves as an additive for synthetic plasters and water-soluble coatings, leading to longer durability and a significant decrease in crack formation. Additionally, key intermediates like DMBA (CAS 10097-02-6) and DMPA (CAS 4767-03-7) are crucial for producing the waterborne polyurethane and polyester resins used in durable, low-VOC architectural and protective coatings, offering excellent adhesion and flexibility.',
            image: constructionChallenge2Doc.id,
            challengeLink: 'plasters-coatings',
            relatedProducts: [dmba.id, dmpa.id],
            relatedServices: [analyticalTesting.id],
            caseStudies: [],
          },
          {
            title: 'Efficient Formwork Release (Demoulding)',
            challenge:
              'Ensuring clean and easy release of concrete from formwork without damaging the forms or the concrete surface, while maintaining worker safety and environmental considerations.',
            solution:
              'VUPOFORM acts as a highly effective deforming (release) agent for all types of building forms. Its insolubility in water provides an excellent separation effect, allowing for multiple reuses of the form without reapplication. It does not attack sealing materials or corrode metal equipment. VUPOFORM offers significant safety and environmental benefits: negligible volatility (no air pollution), elimination of oil contamination in wastewater, and no special safety measures required for handling.',
            image: constructionChallenge3Doc.id,
            challengeLink: 'formwork-release',
            caseStudies: [],
          },
          {
            title: 'High-Performance Construction Adhesives & Sealants',
            challenge:
              'Modern construction relies on high-performance adhesives and sealants for bonding diverse materials, ensuring structural integrity, and providing effective sealing against environmental elements.',
            solution:
              'We supply key chemical intermediates like DMBA (CAS 10097-02-6), used in waterborne polyurethane, epoxy, and polyester adhesives where it enhances bonding strength and water resistance. Hydroxypivalic Acid (HPVA, CAS 4835-90-9), via its derivative HPN, contributes to the performance of adhesives and sealants by balancing hardness, flexibility, and adhesion, potentially enabling low-VOC formulations.',
            image: constructionChallenge4Doc.id,
            challengeLink: 'construction-adhesives-sealants',
            relatedProducts: [dmba.id, hpva.id],
            relatedServices: [researchDevelopment.id],
            caseStudies: [],
          },
        ],
        slug: 'building-construction',
      },
    }),
  ])

  payload.logger.info('✓ Industries seeded')

  return {
    automotive,
    coatingsPaintsInks,
    polymersPlastics,
    adhesivesSealants,
    pharmaceuticals,
    petrochemicalsRefineries,
    batteryEnergyStorage,
    buildingConstruction,
  }
}

export type SeededIndustries = Awaited<ReturnType<typeof seedIndustries>>
