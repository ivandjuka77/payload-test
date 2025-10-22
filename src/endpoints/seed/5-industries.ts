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
  payload.logger.info('- Seeding industries...')

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
    // buildingConstruction,
  ] = await Promise.all([
    payload.create({
      collection: 'industries',
      data: {
        name: 'Automotive Industry',
        _status: 'published',
        _order: '1',
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
              'We produce and supply key intermediates for coatings manufaturers and similar companies. DMPA (CAS 4767-03-7) and DMBA (CAS 10097-02-6) are critical for producing waterborne Polyurethane Dispersions (PUDs) and polyester/alkyd resins used in eco-friendly, low-VOC automotive paints, contributing to excellent finish quality. HPVA (CAS 4835-90-9), particularly via its derivative HPN, is used in primers and solvent-borne paints to enhance properties like chip resistance. These methylolalkanoic acids are vital components for prime autocoatings.',
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
        _order: '2',
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
        _order: '3',
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
              "We provide key methylolalkanoic acids DMPA (CAS 4767-03-7) and DMBA (CAS 10097-02-6), essential for creating stable waterborne PUDs with enhanced performance. HPVA serves as an intermediate for durable polyester and polyurethane resins. O,O'-Bis(3-aminopropyl)polyethyleneglycol can be used as a reactive component to impart flexibility and hydrophilicity.",
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
              'We offer crosslinking agents such as Adipic acid dihydrazide. These multifunctional molecules react with polymer chains to enhance structural integrity and performance characteristics critical for demanding applications in adhesives, coatings, elastomers, and plastics.',
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
        _order: '6',
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
        _order: '5',
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
              "We specialize in the production of TEMPO (CAS 2564-83-2) and related nitroxide radicals, which serve as versatile catalysts, antioxidants, and raw materials. VUP's Custom Synthesis service provides tailored production of other complex organic intermediates needed for drug development pipelines, backed by robust quality control.",
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
        _order: '4',
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
        _order: '7',
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
    // payload.create({
    //   collection: 'industries',
    //   data: {
    //     name: 'Building & Construction',
    //     _status: 'published',
    //     _order: '8',
    //     description:
    //       'The Building & Construction industry continuously seeks materials and chemical solutions that improve durability, process efficiency, safety, and sustainability. VUP, a.s. contributes to this sector by providing specialized chemical preparations designed to enhance concrete and plaster properties (VUPPOR, VUPRANYL), improve formwork efficiency (VUPOFORM), and supply key intermediates (DMBA, DMPA) used in high-performance coatings and adhesives essential for modern construction. Our focus is on delivering reliable chemical solutions that add value to building materials and processes.',
    //     summary:
    //       'VUP enhances construction materials with chemical solutions for durability, efficiency, and sustainability.',
    //     featuredImage: buildingConstructionDoc.id,
    //     keyProducts: [dmba.id, dmpa.id, hpva.id],
    //     services: [researchDevelopment.id, analyticalTesting.id],
    //     challenges: [
    //       {
    //         title: 'Concrete & Cement Product Enhancement',
    //         challenge:
    //           'Improving the workability of concrete mixes and enhancing the properties of finished concrete products like paving stones, panels, and structures is key for efficiency and performance.',
    //         solution:
    //           'VUPPOR is specifically designed as an additive for concrete products. It improves processability and enhances thermal insulation properties. Recommended for a wide range of concrete items including pavings, edge-stones, gardening parts, construction panels, and monolithic constructions, VUPPOR contributes to better quality finished products. It is physiologically harmless and requires no special handling measures beyond standard practices.',
    //         image: constructionChallenge1Doc.id,
    //         challengeLink: 'concrete-cement-enhancement',
    //         relatedServices: [researchDevelopment.id],
    //         caseStudies: [],
    //       },
    //       {
    //         title: 'Improving Plasters & Coatings',
    //         challenge:
    //           'Enhancing the durability, application properties, and crack resistance of synthetic plasters and water-soluble coatings used in construction. Meeting low-VOC requirements for architectural coatings.',
    //         solution:
    //           'VUPRANYL, a stable water dispersion, serves as an additive for synthetic plasters and water-soluble coatings, leading to longer durability and a significant decrease in crack formation. Additionally, key intermediates like DMBA (CAS 10097-02-6) and DMPA (CAS 4767-03-7) are crucial for producing the waterborne polyurethane and polyester resins used in durable, low-VOC architectural and protective coatings, offering excellent adhesion and flexibility.',
    //         image: constructionChallenge2Doc.id,
    //         challengeLink: 'plasters-coatings',
    //         relatedProducts: [dmba.id, dmpa.id],
    //         relatedServices: [analyticalTesting.id],
    //         caseStudies: [],
    //       },
    //       {
    //         title: 'Efficient Formwork Release (Demoulding)',
    //         challenge:
    //           'Ensuring clean and easy release of concrete from formwork without damaging the forms or the concrete surface, while maintaining worker safety and environmental considerations.',
    //         solution:
    //           'VUPOFORM acts as a highly effective deforming (release) agent for all types of building forms. Its insolubility in water provides an excellent separation effect, allowing for multiple reuses of the form without reapplication. It does not attack sealing materials or corrode metal equipment. VUPOFORM offers significant safety and environmental benefits: negligible volatility (no air pollution), elimination of oil contamination in wastewater, and no special safety measures required for handling.',
    //         image: constructionChallenge3Doc.id,
    //         challengeLink: 'formwork-release',
    //         caseStudies: [],
    //       },
    //       {
    //         title: 'High-Performance Construction Adhesives & Sealants',
    //         challenge:
    //           'Modern construction relies on high-performance adhesives and sealants for bonding diverse materials, ensuring structural integrity, and providing effective sealing against environmental elements.',
    //         solution:
    //           'We supply key chemical intermediates like DMBA (CAS 10097-02-6), used in waterborne polyurethane, epoxy, and polyester adhesives where it enhances bonding strength and water resistance. Hydroxypivalic Acid (HPVA, CAS 4835-90-9), via its derivative HPN, contributes to the performance of adhesives and sealants by balancing hardness, flexibility, and adhesion, potentially enabling low-VOC formulations.',
    //         image: constructionChallenge4Doc.id,
    //         challengeLink: 'construction-adhesives-sealants',
    //         relatedProducts: [dmba.id, hpva.id],
    //         relatedServices: [researchDevelopment.id],
    //         caseStudies: [],
    //       },
    //     ],
    //     slug: 'building-construction',
    //   },
    // }),
  ])

  payload.logger.info('- Adding Slovak translations for industries...')

  await Promise.all([
    // Automotive
    payload.update({
      collection: 'industries',
      id: automotive.id,
      locale: 'sk',
      data: {
        name: 'Automobilový priemysel',
        description:
          'Automobilový priemysel vyžaduje materiály, ktoré poskytujú vynikajúci výkon, odolnosť, estetiku a spĺňajú čoraz prísnejšie environmentálne a bezpečnostné normy. VUP, a.s. podporuje výrobcov a dodávateľov v automobilovom priemysle poskytovaním základných chemických medziproduktov pre pokročilé nátery s nízkym obsahom VOC a vysokovýkonné lepidlá, špecializovaných čistiacich prostriedkov pre výrobné procesy a na mieru šitých analytických testovacích služieb, ktoré zabezpečujú súlad s automobilovými normami. Spolupracujeme s priemyslom na umožnení inovácií v oblasti materiálov a výroby vozidiel.',
        summary:
          'VUP poskytuje základné chemické medziprodukty a služby pre inovácie v automobilovom priemysle so zameraním na vynikajúci výkon, odolnosť a súlad s prísnymi environmentálnymi a bezpečnostnými normami, čím umožňuje pokrok v materiáloch a výrobe vozidiel.',
        challenges: [
          {
            title: 'Pokročilé automobilové nátery (OEM & Refinish)',
            challenge:
              'Vývoj odolných, vysokovýkonných a ekologicky vyhovujúcich náterov (základné nátery, vrchné nátery, laky) pre karosérie a komponenty vozidiel.',
            solution:
              'Výroba a dodávame kľúčové medziprodukty pre výrobcov náterov a podobných spoločností. DMPA (CAS 4767-03-7) a DMBA (CAS 10097-02-6) sú kritické pre výrobu vodou riediteľných polyuretánových disperzií (PUD) a polyesterových/alkydových živíc používaných v ekologických automobilových farbách s nízkym obsahom VOC, ktoré prispievajú k vynikajúcej kvalite povrchovej úpravy. HPVA (CAS 4835-90-9), najmä prostredníctvom svojho derivátu HPN, sa používa v základných náteroch a rozpúšťadlových farbách na zlepšenie vlastností, ako je odolnosť proti odštiepeniu. Tieto metylolalkánové kyseliny sú životne dôležitými zložkami pre prvotriedne automobilové nátery.',
            image: automotiveChallenge1Doc.id,
          },
          {
            title: 'Vysokovýkonné automobilové lepidlá',
            challenge:
              'Bezpečné a trvanlivé spájanie rôznych materiálov je v modernej konštrukcii vozidiel nevyhnutné a často si vyžaduje vysokovýkonné lepidlá vrátane vodou riediteľných systémov.',
            solution:
              'DMBA (CAS 10097-02-6) slúži ako kľúčová zložka vo vodou riediteľných polyuretánových, epoxidových a polyesterových lepidlách používaných pri montáži automobilov. Zvyšuje pevnosť spoja a zlepšuje odolnosť voči vode, čím prispieva k celkovej štrukturálnej integrite a dlhej životnosti vozidla.',
            image: automotiveChallenge2Doc.id,
          },
          {
            title: 'Príprava a čistenie povrchov',
            challenge:
              'Zabezpečenie správneho vyčistenia a odmastenia povrchov je rozhodujúce pre dosiahnutie optimálnej priľnavosti a kvality povrchovej úpravy pri lakovaní, tesnení a lepení počas výroby a opráv automobilov.',
            solution:
              'Ponúkame OP VUPOL, špecializovaný odmasťovací prostriedok odporúčaný na použitie v automobilovom priemysle. Je účinný pre aplikácie, ako je odmasťovanie brzdových obložení a príprava povrchov pred lepením, tesnením alebo lakovaním.',
            image: automotiveChallenge3Doc.id,
          },
          {
            title: 'Testovanie komponentov a zhoda (VOC)',
            challenge:
              'Splnenie prísnych priemyselných noriem a predpisov pre materiály používané v interiéroch a komponentoch vozidiel, najmä pokiaľ ide o emisie prchavých organických zlúčenín (VOC) z plastov.',
            solution:
              'Naše akreditované analytické laboratóriá ATBEL (SNAS S-118) poskytujú špecializované testovacie služby pre automobilový sektor, vrátane stanovenia obsahu VOC v plastoch podľa automobilovej normy PV3341. Ponúkame tiež regulačnú podporu týkajúcu sa zhody chemických surovín (napr. REACH).',
            image: automotiveChallenge4Doc.id,
          },
        ],
      },
    }),

    //  Coating, Paints & Inks
    payload.update({
      collection: 'industries',
      id: coatingsPaintsInks.id,
      locale: 'sk',
      data: {
        name: 'Nátery, Farby a Atramenty',
        description:
          'Priemysel náterov, farieb a atramentov neustále hľadá inovácie, ktoré zlepšujú výkon, trvanlivosť a environmentálnu kompatibilitu. Výrobcovia čelia výzvam pri plnení prísnych predpisov (ako sú ciele s nízkym obsahom VOC) a zároveň poskytujú výnimočnú ochranu, estetiku a funkčnosť. VUP, a.s. využíva viac ako 70 rokov chemických skúseností na poskytovanie základných stavebných blokov, ako je kyselina dimetylolpropiónová (DMPA) a unikátna kyselina dimetylolbutánová (DMBA), spolu s ďalšími kľúčovými medziproduktmi, čo umožňuje výrobu pokročilých vodou riediteľných systémov a vysokovýkonných náterov. Ako kľúčový európsky výrobca sme vaším spoľahlivým partnerom pre tieto kritické suroviny, podporovaní robustným výskumom a vývojom a regulačným know-how.',
        summary:
          'VUP ponúka kľúčové stavebné bloky pre vodou riediteľné systémy a nátery, zabezpečujúc výkon a súlad s predpismi.',
        challenges: [
          {
            title: 'Vodou riediteľné nátery (PUD, Alkydy, Polyestery)',
            challenge:
              'Vývoj stabilných, vysokovýkonných vodou riediteľných náterov so zníženým dopadom na životné prostredie si vyžaduje špecializované hydrofilné monoméry.',
            solution:
              'Naša DMPA (CAS 4767-03-7) je všestranný stavebný blok zabezpečujúci stabilnú disperziu živíc (polyuretánov, alkydov, polyesterov) vo vode, čo vedie k formuláciám s nižším obsahom VOC so zlepšenou priľnavosťou, leskom a odolnosťou proti nárazu. Naša unikátna DMBA (CAS 10097-02-6) ponúka potenciálne výhody ako vynikajúca rozpustnosť a rýchlejšie reakčné rýchlosti, čo je prospešné pre optimalizáciu výroby polyuretánu a aplikačných vlastností. Obidva sú plne registrované v systéme REACH, čo podporuje súlad s predpismi. Ponúkame tiež kyselinu hydroxypivalovú (HPVA, CAS 4835-90-9), ďalší kľúčový medziprodukt pre trvanlivé vodou riediteľné živice.',
            image: coatingsChallenge1Doc.id,
          },
          {
            title: 'Práškové nátery a modifikácia živíc',
            challenge:
              'Dosiahnutie optimálneho toku, vyrovnávania, trvanlivosti a flexibility v práškových náteroch a iných živicových systémoch si často vyžaduje špecifické medziprodukty.',
            solution:
              'Kyselina hydroxypivalová (HPVA) slúži ako kľúčový medziprodukt pre výrobu živíc, vrátane polyesterov používaných v práškových náteroch, kde jej derivát (HPN) zlepšuje tok a vyrovnávanie. Akrylátové estery polyhydroxyalkoholov pôsobia ako všestranné monoméry poskytujúce zosieťovacie body, ktoré ovplyvňujú tvrdosť, flexibilitu a trvanlivosť vo výslednom náterovom filme. Naše kapacity Zákazkovej syntézy môžu ďalej riešiť špecifické potreby monomérov alebo aditív.',
            image: coatingsChallenge2Doc.id,
          },
          {
            title: 'Plnenie environmentálnych predpisov (nízke VOC)',
            challenge:
              'Dodržiavanie prísnych environmentálnych predpisov, najmä pokiaľ ide o emisie prchavých organických zlúčenín (VOC), je rozhodujúce pre prístup na trh.',
            solution:
              'Dodávaním kľúčových monomérov ako DMPA a DMBA, ktoré umožňujú vysokovýkonné vodou riediteľné formulácie, VUP priamo podporuje prechod priemyslu k technológiám náterov s nižším obsahom VOC a udržateľnejším technológiám. Naše výrobky sú registrované v systéme REACH a naše služby Regulačnej podpory môžu pomôcť klientom pri navigácii požiadaviek na zhodu pre ich formulácie.',
            image: coatingsChallenge3Doc.id,
          },
        ],
      },
    }),

    // Polymers & Plastics
    payload.update({
      collection: 'industries',
      id: polymersPlastics.id,
      locale: 'sk',
      data: {
        name: 'Polyméry a Plasty',
        description:
          'Priemysel polymérov a plastov sa spolieha na inovatívnu chémiu pri vytváraní materiálov so špecifickými funkciami, zvýšenou odolnosťou a zlepšenými spracovateľskými vlastnosťami. Od riadenia polymerizačných reakcií až po ochranu konečných produktov pred degradáciou hrajú špecializované chemické prísady a medziprodukty kľúčovú úlohu. VUP, a.s. poskytuje kľúčové stavebné bloky, stabilizátory (ako sú bránené amíny/HALS), zosieťovacie činidlá a mediátory polymerizácie (ako TEMPO), podporované rozsiahlymi službami v oblasti výskumu a vývoja a analytickými službami, čo umožňuje našim partnerom vyvíjať pokročilé polymérne riešenia.',
        summary:
          'VUP ponúka stavebné bloky a stabilizátory pre polyméry, zvyšujúc odolnosť a spracovanie s pokročilou podporou výskumu a vývoja.',
        challenges: [
          {
            title: 'Stabilizácia polymérov (svetlo, teplo, oxidácia)',
            challenge:
              'Ochrana polymérov pred degradáciou spôsobenou UV žiarením, teplom a oxidáciou je kľúčová pre predĺženie životnosti produktu a udržanie výkonu, najmä v náročných aplikáciách.',
            solution:
              'Ponúkame bránené amíny, vrátane svetelných stabilizátorov na báze bránených amínov (HALS) odvodených z našej výrobnej linky TAA. Tieto aditíva pôsobia ako silné lapače radikálov, významne inhibujú degradáciu polymérov, zabraňujú praskaniu a zmene farby a zlepšujú dlhodobú odolnosť plastov a náterov. Naše deriváty TEMPO tiež prispievajú k stabilite polymérov.',
            image: polymersChallenge1Doc.id,
          },
          {
            title: 'Riadená polymerizácia a architektúra',
            challenge:
              'Dosiahnutie špecifických vlastností polymérov si často vyžaduje presnú kontrolu molekulovej hmotnosti, polydisperzity a architektúry počas syntézy.',
            solution:
              'TEMPO (CAS 2564-83-2) funguje ako vysoko účinný mediátor v nitroxidom sprostredkovanej polymerizácii (NMP), čo umožňuje syntézu polymérov s dobre definovanými štruktúrami. Táto kontrola umožňuje vývoj materiálov so zlepšenými výkonnostnými charakteristikami prispôsobenými pre špecifické aplikácie. H-TEMPO (CAS 2226-96-2) môže slúžiť ako inhibítor polymerizácie na kontrolu procesu alebo skladovanie.',
            image: polymersChallenge2Doc.id,
          },
          {
            title: 'Stavebné bloky pre polyuretány',
            challenge:
              'Formulácia vysokovýkonných polyuretánov (disperzií, elastomérov, lepidiel) si vyžaduje špecifické medziprodukty na dodanie požadovaných vlastností, ako je dispergovateľnosť vo vode, flexibilita a priľnavosť.',
            solution:
              "Poskytujeme kľúčové metylolalkánové kyseliny DMPA (CAS 4767-03-7) a DMBA (CAS 10097-02-6), ktoré sú nevyhnutné pre vytváranie stabilných vodou riediteľných PUD s vylepšeným výkonom. HPVA slúži ako medziprodukt pre odolné polyesterové a polyuretánové živice. O,O'-Bis(3-aminopropyl)polyetylénglykol sa môže použiť ako reaktívna zložka na dodanie flexibility a hydrofilnosti.",
            image: polymersChallenge3Doc.id,
          },
          {
            title: 'Zosieťovanie a zlepšenie vlastností',
            challenge:
              'Zlepšenie mechanickej pevnosti, tepelnej stability, elasticity a chemickej odolnosti polymérov často zahŕňa vytváranie zosieťovaných sietí v materiáli.',
            solution:
              'Ponúkame zosieťovacie činidlá ako dihydrazid kyseliny adipovej. Tieto multifunkčné molekuly reagujú s polymérnymi reťazcami na zlepšenie štrukturálnej integrity a výkonnostných charakteristík kritických pre náročné aplikácie v lepidlách, náteroch, elastoméroch a plastoch.',
            image: polymersChallenge4Doc.id,
          },
        ],
      },
    }),

    // Adhesives & Sealants
    payload.update({
      collection: 'industries',
      id: adhesivesSealants.id,
      locale: 'sk',
      data: {
        name: 'Lepidlá a Tmely',
        description:
          'Priemysel lepidiel a tmelov vyžaduje materiály, ktoré poskytujú pevné, trvanlivé spoje, vynikajúcu flexibilitu a odolnosť voči environmentálnym faktorom, pričom čoraz viac uprednostňuje udržateľné formulácie s nízkym obsahom VOC. VUP, a.s. prispieva kľúčovými chemickými medziproduktmi, ktoré umožňujú vývoj pokročilých systémov lepidiel a tmelov. Poskytujeme špecializované stavebné bloky, ako je kyselina dimetylolbutánová (DMBA) pre vysokovýkonné vodou riediteľné lepidlá, deriváty kyseliny hydroxypivalovej (HPVA) pre reaktívne tavné lepidlá a nevyhnutné zosieťovacie činidlá, čím podporujeme výrobcov pri plnení výkonnostných a regulačných výziev.',
        summary:
          'VUP dodáva medziprodukty pre lepidlá, ktoré zvyšujú pevnosť, flexibilitu a udržateľnosť vďaka riešeniam s nízkym obsahom VOC.',
        challenges: [
          {
            title: 'Vodou riediteľné lepiace systémy (polyuretán, polyester, epoxid)',
            challenge:
              'Formulácia vysokovýkonných vodou riediteľných lepidiel si vyžaduje medziprodukty, ktoré zabezpečujú stabilitu, pevné lepenie a odolnosť voči vode.',
            solution:
              'Kyselina dimetylolbutánová (DMBA, CAS 10097-02-6) je kľúčovou zložkou pre vodou riediteľné polyuretánové, epoxidové a polyesterové lepidlá. Jej vynikajúca rozpustnosť vo vode zlepšuje efektivitu spracovania, zatiaľ čo jej funkcia ako zosieťovacieho činidla poskytuje výnimočnú pevnosť spoja a zlepšenú odolnosť voči vode. Jej potenciálne rýchlejšia reakčná rýchlosť môže tiež zvýšiť výrobnú kapacitu. Ponúkame tiež DMPA, príbuznú metylolalkánovú kyselinu, ktorá sa tiež používa v PUD pre lepidlá.',
            image: adhesivesChallenge1Doc.id,
          },
          {
            title: 'Reaktívne tavné lepidlá a modifikácia živíc',
            challenge:
              'Vývoj reaktívnych tavných lepidiel bez rozpúšťadiel s dobrou priehľadnosťou, priľnavosťou a flexibilitou si vyžaduje špecifické stavebné bloky.',
            solution:
              'Kyselina hydroxypivalová (HPVA, CAS 4835-90-9) je prekurzorom pre neopentylglykolester kyseliny hydroxypivalovej (HPN). HPN pôsobí ako stavebný blok pre polyuretánové živice používané v lepidlách, pričom prispieva k priaznivej rovnováhe tvrdosti, flexibility a priľnavosti. V reaktívnych tavných lepidlách môže HPN zlepšiť priehľadnosť a znížiť požiadavky na rozpúšťadlá, čím podporuje formulácie s nižším obsahom VOC. Polyhydroxyalkoholy od VUP tiež slúžia ako medziprodukty pre živice používané v tomto sektore.',
            image: adhesivesChallenge2Doc.id,
          },
          {
            title: 'Zvýšená pevnosť a trvanlivosť prostredníctvom zosieťovania',
            challenge:
              'Dosiahnutie potrebnej mechanickej pevnosti, tepelnej stability a chemickej odolnosti vo vysokovýkonných lepidlách a tmeloch si často vyžaduje účinné zosieťovanie.',
            solution:
              'Poskytujeme kľúčové zosieťovacie činidlá, ako je dihydrazid kyseliny adipovej. Tieto komponenty reagujú v rámci formulácie lepidla alebo tmelu na vytvorenie robustných polymérnych sietí, čím sa výrazne zvyšuje trvanlivosť a výkonnostné charakteristiky požadované pre náročné aplikácie.',
            image: adhesivesChallenge3Doc.id,
          },
          {
            title: 'Výkonnostné aditíva a zákazkové riešenia',
            challenge:
              'Unikátne aplikácie môžu vyžadovať špecializované aditíva alebo medziprodukty na dosiahnutie špecifických výkonnostných cieľov, ktoré štandardné komponenty nespĺňajú.',
            solution:
              'Deriváty TEMPO vykazujú potenciál na zlepšenie polymerizačných procesov alebo na zlepšenie tepelnej/mechanickej pevnosti lepidiel. Naše služby Zákazkovej syntézy nám navyše umožňujú vyvíjať a vyrábať špecifické monoméry alebo aditíva prispôsobené vašim jedinečným potrebám na formuláciu lepidiel alebo tmelov, podporené našimi rozsiahlymi schopnosťami v oblasti výskumu a vývoja.',
            image: adhesivesChallenge4Doc.id,
          },
        ],
      },
    }),

    // Pharmaceuticals
    payload.update({
      collection: 'industries',
      id: pharmaceuticals.id,
      locale: 'sk',
      data: {
        name: 'Farmácia a Biotechnológia',
        description:
          'Farmaceutický a biotechnologický sektor vyžadujú výnimočnú čistotu, inovatívnu chémiu a prísne dodržiavanie regulačných noriem. VUP, a.s. spolupracuje so spoločnosťami v týchto kritických odvetviach poskytovaním kľúčových chemických medziproduktov, špecializovaných diagnostických pomôcok, pokročilých biomedicínskych materiálov a expertných služieb v oblasti výskumu, vývoja a zákazkovej syntézy. Využívajúc naše viac ako 70-ročné chemické skúsenosti, certifikáciu ISO 9001:2015 a akreditované analytické kapacity, podporujeme vývoj a výrobu životne dôležitých riešení v zdravotníctve.',
        summary:
          'VUP poskytuje medziprodukty a služby pre farmáciu a biotechnológiu, zaručujúc čistotu a súlad s predpismi prostredníctvom inovatívnej chémie.',
        challenges: [
          {
            title: 'Syntéza API a farmaceutické medziprodukty',
            challenge:
              'Získavanie vysoko čistých, spoľahlivo dodávaných surovín a medziproduktov je kľúčové pre výrobu aktívnych farmaceutických zložiek (API).',
            solution:
              'Špecializujeme sa na výrobu TEMPO (CAS 2564-83-2) a príbuzných nitroxidových radikálov, ktoré slúžia ako všestranné katalyzátory, antioxidanty a suroviny. Služba Zákazkovej syntézy od VUP poskytuje na mieru šitú výrobu ďalších komplexných organických medziproduktov potrebných pre vývojové pipeline liekov, podloženú robustnou kontrolou kvality.',
            image: pharmaChallenge1Doc.id,
          },
          {
            title: 'Biomedicínske materiály a povlaky pre zdravotnícke pomôcky',
            challenge:
              'Vývoj pokročilých zdravotníckych pomôcok a terapií si často vyžaduje špecializované biokompatibilné materiály s unikátnymi funkčnými vlastnosťami.',
            solution:
              "VUP je unikátnym globálnym výrobcom O,O'-Bis(3-aminopropyl)polyetylénglykolu (DAPEG), vysokohodnotného medziproduktu používaného na vytváranie lubrikačných, hydrofilných povlakov pre cievne intervenčné pomôcky a iné chirurgické aplikácie. Na tomto základe sme vyvinuli pilotné kapacity pre PEG-diakrylamid (PEGDAA), derivát s významným potenciálom v tkanivovom inžinierstve, 3D biotlači a systémoch na podávanie liečiv. Náš tím výskumu a vývoja aktívne spolupracuje s partnermi ako DSM Biomedical v tejto oblasti.",
            image: pharmaChallenge2Doc.id,
          },
          {
            title: 'Diagnostické pomôcky a zdravotnícke výrobky',
            challenge:
              'Spoľahlivé a bezpečné spotrebné materiály sú nevyhnutné pre rutinné diagnostické postupy v zdravotníckych zariadeniach.',
            solution:
              'Vyrábame vysokokvalitné diagnostické gély, vrátane GELSON pre sonografiu a EV GEL pre EKG/EEG vyšetrenia. Tieto produkty sú formulované s použitím bezpečných surovín dermatologickej/kozmetickej kvality, sú bez alkoholu, nedráždivé a spĺňajú príslušné zdravotné normy (Gelson má zdravotný certifikát MZ SR). VUP tiež vyrába ďalšie čisté chemikálie a produkty pre zdravotnícke aplikácie.',
            image: pharmaChallenge3Doc.id,
          },
          {
            title: 'Objavovanie liekov a výskumné chemikálie',
            challenge:
              'Výskumníci potrebujú prístup k špecializovaným, vysoko čistým chemikáliám a reagenciám na identifikáciu cieľov, skríning a predklinické štúdie.',
            solution:
              'Naše deriváty TEMPO slúžia ako dôležité nástroje (antioxidanty, spinové značky) vo farmaceutickom výskume. VUP tiež vyrába unikátne laboratórne chemikálie špecificky pre medicínske aplikácie a ponúka služby Zákazkovej syntézy na poskytnutie výskumníkom nových zlúčenín alebo špecifických medziproduktov potrebných pre ich objaviteľské programy.',
            image: pharmaChallenge4Doc.id,
          },
        ],
      },
    }),

    // Petrochemicals & Refineries
    payload.update({
      collection: 'industries',
      id: petrochemicalsRefineries.id,
      locale: 'sk',
      data: {
        name: 'Petrochémia a Rafinérie',
        description:
          'Spoločnosť VUP, a.s., ktorá vznikla z Výskumného ústavu pre petrochémiu založeného v roku 1950, má hlboké historické korene a rozsiahle odborné znalosti v petrochemickej vede a technológii. Hoci nie sme veľkou rafinériou, spolupracujeme s odvetvím petrochémie a rafinérií poskytovaním špecializovaných chemických produktov (ako sú stabilizátory a inhibítory palív), pokročilých analytických služieb, zákazkovej syntézy medziproduktov a odbornej podpory výskumu a vývoja pre optimalizáciu a vývoj procesov. Náš záväzok ku kvalite (ISO 9001) a bezpečnosti (Responsible Care) z nás robí spoľahlivého partnera pre tento náročný priemysel.',
        summary:
          'VUP ponúka špecializované produkty a služby pre petrochemický priemysel so zameraním na kvalitu, bezpečnosť a optimalizáciu procesov.',
        challenges: [
          {
            title: 'Spracovanie, skladovanie a stabilita palív',
            challenge:
              'Zabezpečenie stability paliva počas spracovania, prepravy a skladovania je kľúčové na zabránenie degradácii, tvorbe živíc a udržanie kvalitatívnych špecifikácií.',
            solution:
              'Vyrábame špecializované aditíva ako VUPIN H37-B (antioxidant/UV stabilizátor) určené na spracovanie a skladovanie palív. Naše odborné znalosti sa navyše vzťahujú na inhibítory polymerizácie ako H-TEMPO, ktorý sa už roky úspešne používa v rafinérskych jednotkách FCC (napr. v Slovnafte) na zabránenie nežiaducim reakciám.',
            image: petroChallenge1Doc.id,
          },
          {
            title: 'Petrochemická syntéza a špeciálne medziprodukty',
            challenge:
              'Petrochemický priemysel vyžaduje širokú škálu špecializovaných medziproduktov pre nadväzujúce aplikácie alebo špecifické procesné potreby, čo si často vyžaduje schopnosti zákazkovej chemickej syntézy.',
            solution:
              'S využitím našej silnej základne v oblasti výskumu a vývoja ponúkame služby Zákazkovej syntézy pre špeciálne organické medziprodukty. Naše historické a prebiehajúce výskumné odborné znalosti zahŕňajú oblasti priamo relevantné pre petrochemické suroviny a deriváty, ako sú acetylénové alkoholy, epoxidy, polyhydroxyalkoholy, vyššie aldehydy a brómované uhľovodíky.',
            image: petroChallenge2Doc.id,
          },
          {
            title: 'Suroviny pre nadväzujúce priemyselné odvetvia',
            challenge:
              'Rafinérie a petrochemické závody poskytujú základné stavebné kamene pre početné nadväzujúce priemyselné odvetvia, ako sú polyméry, plasty, nátery a lepidlá. Dodávatelia medziproduktov pre tieto odvetvia sú kľúčovými partnermi.',
            solution:
              'Vyrábame kľúčové medziprodukty ako DMPA, DMBA a HPVA, ktoré sú odvodené z petrochemických hodnotových reťazcov a sú nevyhnutnými surovinami na výrobu vysokovýkonných polyuretánov (PUD), polyesterov a alkydov, ktoré sa vo veľkej miere používajú v náteroch, lepidlách a polymérnych aplikáciách.',
            image: petroChallenge3Doc.id,
          },
          {
            title: 'Optimalizácia procesov, analýza a bezpečnosť',
            challenge:
              'Optimalizácia rafinérskych a petrochemických procesov, zabezpečenie kvality produktov a udržiavanie vysokých bezpečnostných štandardov si vyžaduje robustnú analytickú podporu a technické odborné znalosti.',
            solution:
              'Naše služby v oblasti výskumu a vývoja môžu pomôcť pri vývoji a optimalizácii procesov. Naša akreditovaná divízia ATBEL (SNAS S-118) poskytuje komplexné analytické služby relevantné pre toto odvetvie, vrátane plynovej/kvapalinovej chromatografie na analýzu zloženia, stanovenie VOC, testovanie fyzikálnych vlastností a rozsiahle technicko-bezpečnostné analýzy (bod vzplanutia, horľavosť atď.), ktoré sú kľúčové pre bezpečnú manipuláciu a kontrolu procesov.',
            image: petroChallenge4Doc.id,
          },
        ],
      },
    }),

    // Battery Energy Storage
    payload.update({
      collection: 'industries',
      id: batteryEnergyStorage.id,
      locale: 'sk',
      data: {
        name: 'Batérie a Ukladanie Energie',
        description:
          'Globálne hľadanie účinných, udržateľných a bezpečných riešení na ukladanie energie poháňa inovácie nad rámec tradičných lítium-iónových batérií. Organické radikálové batérie (ORB) predstavujú sľubnú hranicu, využívajúc redoxne aktívne organické molekuly ako TEMPO (2,2,6,6-tetrametylpiperidin-1-oxyl) a jeho deriváty. VUP, a.s., so svojimi dlhoročnými skúsenosťami vo výskume, vývoji a výrobe vysoko čistých zlúčenín TEMPO, je pripravená podporiť vývoj tejto novej generácie technológie na ukladanie energie. Naše škálovateľné výrobné kapacity a pokračujúce výskumné úsilie majú za cieľ poskytovať kľúčové materiály pre ORB a pokročilé redoxné prietokové batérie.',
        summary:
          'VUP podporuje inovácie v ukladaní energie zlúčeninami TEMPO pre ORB a redoxné prietokové batérie so zameraním na udržateľnosť a účinnosť.',
        challenges: [
          {
            title: 'Organické radikálové batérie (ORB)',
            challenge:
              'Vývoj vysokovýkonných, bezkovových a potenciálne bezpečnejších batériových systémov pre aplikácie od prenosnej elektroniky po ukladanie energie v sieti.',
            solution:
              'TEMPO a jeho deriváty vykazujú pozoruhodný elektrochemický výkon, pôsobiac ako vysoko účinné a reverzibilné nosiče náboja. Ich potenciálne použitie ako redoxne aktívnych materiálov v elektródach ORB ponúka výhody ako potenciálne vysoká hustota výkonu a rýchle nabíjanie/vybíjanie. VUP vyrába vysoko čisté TEMPO vhodné pre elektrochemický výskum a vývoj v tejto oblasti.',
            image: batteryChallenge1Doc.id,
          },
          {
            title: 'Vodné redoxné prietokové batérie',
            challenge:
              'Zlepšenie energetickej hustoty, účinnosti a nákladovej efektívnosti vodných redoxných prietokových batérií pre ukladanie energie v sieti.',
            solution:
              'Výskum naznačuje významný potenciál pre katolytov na báze TEMPO na zlepšenie výkonu vodných redoxných prietokových batérií. Odborné znalosti VUP v chémii TEMPO nás stavajú do pozície spolupracovať na vývoji a dodávaní na mieru šitých derivátov TEMPO optimalizovaných pre stabilitu a elektrochemický potenciál v systémoch prietokových batérií.',
            image: batteryChallenge2Doc.id,
          },
          {
            title: 'Vývoj a optimalizácia materiálov',
            challenge:
              'Optimalizácia výkonu batérií na báze TEMPO si vyžaduje pochopenie vzťahov medzi štruktúrou a vlastnosťami a potenciálne syntézu nových derivátov so zlepšenou stabilitou, rozpustnosťou alebo redoxným potenciálom. Kľúčovým zameraním je optimalizácia výkonu týkajúca sa hustoty energie a účinnosti nabíjania/vybíjania.',
            solution:
              'Využívajúc naše hlboké odborné znalosti v chémii nitroxidových radikálov a schopnosti v oblasti výskumu a vývoja, spolupracujeme s výskumníkmi a spoločnosťami na vývoji a syntéze vlastných derivátov TEMPO. Naším cieľom je riešiť špecifické výkonnostné prekážky a prispievať k pokroku v technológii ORB a prietokových batérií prostredníctvom cielenej inovácie materiálov. VUP má technológie zahŕňajúce TEMPO pripravené na škálovanie.',
            image: batteryChallenge3Doc.id,
          },
        ],
      },
    }),

    // Building & Construction
    // payload.update({
    //   collection: 'industries',
    //   id: buildingConstruction.id,
    //   locale: 'sk',
    //   data: {
    //     name: 'Stavebníctvo',
    //     description:
    //       'Stavebný priemysel neustále hľadá materiály a chemické riešenia, ktoré zlepšujú trvanlivosť, efektivitu procesov, bezpečnosť a udržateľnosť. VUP, a.s. prispieva do tohto sektora poskytovaním špecializovaných chemických prípravkov určených na zlepšenie vlastností betónu a omietok (VUPPOR, VUPRANYL), zlepšenie efektivity debnenia (VUPOFORM) a dodávaním kľúčových medziproduktov (DMBA, DMPA) používaných vo vysokovýkonných náteroch a lepidlách nevyhnutných pre moderné stavebníctvo. Naším zameraním je dodávať spoľahlivé chemické riešenia, ktoré pridávajú hodnotu stavebným materiálom a procesom.',
    //     summary:
    //       'VUP vylepšuje stavebné materiály chemickými riešeniami pre trvanlivosť, efektivitu a udržateľnosť.',
    //     challenges: [
    //       {
    //         title: 'Zlepšenie betónových a cementových výrobkov',
    //         challenge:
    //           'Zlepšenie spracovateľnosti betónových zmesí a vylepšenie vlastností hotových betónových výrobkov, ako sú dlažobné kocky, panely a konštrukcie, je kľúčové pre efektivitu a výkon.',
    //         solution:
    //           'VUPPOR je špeciálne navrhnutý ako prísada do betónových výrobkov. Zlepšuje spracovateľnosť a zvyšuje tepelnoizolačné vlastnosti. Odporúča sa pre širokú škálu betónových výrobkov vrátane dlažieb, obrubníkov, záhradných dielcov, stavebných panelov a monolitických konštrukcií. VUPPOR prispieva k lepšej kvalite hotových výrobkov. Je fyziologicky neškodný a nevyžaduje žiadne špeciálne manipulačné opatrenia nad rámec bežnej praxe.',
    //         image: constructionChallenge1Doc.id,
    //       },
    //       {
    //         title: 'Zlepšovanie omietok a náterov',
    //         challenge:
    //           'Zvýšenie trvanlivosti, aplikačných vlastností a odolnosti proti praskaniu syntetických omietok a vodou riediteľných náterov používaných v stavebníctve. Splnenie požiadaviek na nízky obsah VOC pre architektonické nátery.',
    //         solution:
    //           'VUPRANYL, stabilná vodná disperzia, slúži ako prísada do syntetických omietok a vodou riediteľných náterov, čo vedie k dlhšej životnosti a výraznému zníženiu tvorby trhlín. Okrem toho sú kľúčové medziprodukty ako DMBA (CAS 10097-02-6) a DMPA (CAS 4767-03-7) rozhodujúce pre výrobu vodou riediteľných polyuretánových a polyesterových živíc používaných v trvanlivých, nízko-VOC architektonických a ochranných náteroch, ktoré ponúkajú vynikajúcu priľnavosť a flexibilitu.',
    //         image: constructionChallenge2Doc.id,
    //       },
    //       {
    //         title: 'Efektívne uvoľňovanie z debnenia (odformovanie)',
    //         challenge:
    //           'Zabezpečenie čistého a ľahkého uvoľnenia betónu z debnenia bez poškodenia foriem alebo povrchu betónu, pri zachovaní bezpečnosti pracovníkov a environmentálnych ohľadov.',
    //         solution:
    //           'VUPOFORM pôsobí ako vysoko účinný odformovací prostriedok pre všetky typy stavebných foriem. Jeho nerozpustnosť vo vode poskytuje vynikajúci separačný efekt, čo umožňuje viacnásobné opätovné použitie formy bez opätovnej aplikácie. Nenapáda tesniace materiály ani nekoroduje kovové zariadenia. VUPOFORM ponúka významné bezpečnostné a environmentálne výhody: zanedbateľnú prchavosť (žiadne znečistenie ovzdušia), elimináciu kontaminácie odpadových vôd olejom a žiadne špeciálne bezpečnostné opatrenia potrebné pri manipulácii.',
    //         image: constructionChallenge3Doc.id,
    //       },
    //       {
    //         title: 'Vysokovýkonné stavebné lepidlá a tmely',
    //         challenge:
    //           'Moderné stavebníctvo sa spolieha na vysokovýkonné lepidlá a tmely na spájanie rôznych materiálov, zabezpečenie štrukturálnej integrity a poskytovanie účinného tesnenia proti environmentálnym vplyvom.',
    //         solution:
    //           'Dodávame kľúčové chemické medziprodukty ako DMBA (CAS 10097-02-6), používané vo vodou riediteľných polyuretánových, epoxidových a polyesterových lepidlách, kde zvyšuje pevnosť spoja a odolnosť voči vode. Kyselina hydroxypivalová (HPVA, CAS 4835-90-9), prostredníctvom svojho derivátu HPN, prispieva k výkonu lepidiel a tmelov vyvažovaním tvrdosti, flexibility a priľnavosti, čo potenciálne umožňuje formulácie s nízkym obsahom VOC.',
    //         image: constructionChallenge4Doc.id,
    //       },
    //     ],
    //   },
    // }),
  ])

  payload.logger.info('- Adding Japanese translations for industries...')

  await Promise.all([
    // Automotive
    payload.update({
      collection: 'industries',
      id: automotive.id,
      locale: 'jp',
      data: {
        name: '自動車産業',
        description:
          '自動車産業では、優れた性能、耐久性、美観を提供し、ますます厳しくなる環境および安全基準を満たす材料が求められています。VUP, a.s.は、先進的な低VOCコーティングや高性能接着剤に不可欠な化学中間体、生産プロセス用の特殊洗浄剤、および自動車基準への準拠を保証する特注の分析試験サービスを提供することで、自動車メーカーおよびサプライヤーをサポートしています。私たちは、車両材料と製造における技術革新を可能にするために、業界と提携しています。',
        summary:
          'VUPは、優れた性能、耐久性、および厳しい環境・安全基準への準拠に重点を置き、車両材料と製造の進歩を可能にする、自動車技術革新に不可欠な化学中間体とサービスを提供しています。',
        challenges: [
          {
            title: '先進自動車用コーティング（OEMおよび補修用）',
            challenge:
              '車体および部品向けに、耐久性、高性能、環境対応性に優れたコーティング（プライマー、ベースコート、クリアコート）を開発すること。',
            solution:
              '現代の自動車用コーティングに不可欠な主要原料を供給しています。 DMPA（CAS 4767-03-7）およびDMBA（CAS 10097-02-6）は、環境に優しい低VOC自動車用塗料に使用される水性ポリウレタンディスパージョン（PUD）およびポリエステル/アルキド樹脂の製造に不可欠であり、優れた仕上げ品質に貢献します。HPVA（CAS 4835-90-9）は、特にその誘導体であるHPNを介して、プライマーや溶剤系塗料に使用され、耐チップ性などの特性を向上させます。これらのメチロールアルカン酸は、最高級の自動車用コーティングに不可欠な成分です。',
            image: automotiveChallenge1Doc.id,
          },
          {
            title: '高性能自動車用接着剤',
            challenge:
              '現代の車両構造において、多様な材料を安全かつ耐久性をもって接着することは不可欠であり、水性システムを含む高性能接着剤がしばしば要求されます。',
            solution:
              'DMBA（CAS 10097-02-6）は、自動車組立に使用される水性ポリウレタン、エポキシ、ポリエステル接着剤の重要な構成要素として機能します。接着強度を高め、耐水性を向上させることで、車両全体の構造的完全性と長寿命化に貢献します。',
            image: automotiveChallenge2Doc.id,
          },
          {
            title: '表面処理と洗浄',
            challenge:
              '自動車の製造および修理における塗装、シーリング、接着作業で最適な密着性と仕上げ品質を達成するためには、表面が適切に洗浄され、脱脂されていることが重要です。',
            solution:
              '当社は、自動車産業での使用を推奨される特殊脱脂剤OP VUPOLを提供しています。ブレーキライニングの脱脂や、接着、シーリング、塗装前の表面処理などの用途に効果的です。',
            image: automotiveChallenge3Doc.id,
          },
          {
            title: '部品試験とコンプライアンス（VOC）',
            challenge:
              '車両内装および部品に使用される材料、特にプラスチックからの揮発性有機化合物（VOC）排出に関して、厳しい業界基準および規制を満たすこと。',
            solution:
              '当社の認定分析試験所ATBEL（SNAS S-118）は、PV3341自動車基準に従ったプラスチック中のVOC含有量の測定を含む、自動車セクター向けの専門的な試験サービスを提供しています。また、化学原料のコンプライアンス（例：REACH）に関する規制サポートも提供しています。',
            image: automotiveChallenge4Doc.id,
          },
        ],
      },
    }),

    // Coatings, Paints, Inks
    payload.update({
      collection: 'industries',
      id: coatingsPaintsInks.id,
      locale: 'jp',
      data: {
        name: 'コーティング、塗料、インク',
        description:
          'コーティング、塗料、インク業界は、性能、耐久性、環境適合性を向上させる技術革新を絶えず求めています。配合設計者は、優れた保護性、美観、機能性を提供しつつ、厳しい規制（低VOC目標など）を満たすという課題に直面しています。VUP, a.s.は、70年以上にわたる化学の専門知識を活用し、ジメチロールプロピオン酸（DMPA）やユニークなジメチロールブタン酸（DMBA）などの基本的な構成要素を他の主要な中間体とともに提供し、先進的な水性システムや高性能コーティングの生産を可能にします。ヨーロッパの主要な生産者として、私たちは堅牢な研究開発と規制に関するノウハウに支えられた、これらの重要な原材料の信頼できるパートナーです。',
        summary:
          'VUPは、水性システムおよびコーティングの主要な構成要素を提供し、性能と規制順守を保証します。',
        challenges: [
          {
            title: '水性コーティング（PUD、アルキド、ポリエステル）',
            challenge:
              '環境への影響を低減した、安定で高性能な水性コーティングを開発するには、特殊な親水性モノマーが必要です。',
            solution:
              '当社のDMPA（CAS 4767-03-7）は、樹脂（ポリウレタン、アルキド、ポリエステル）を水中で安定的に分散させる多用途な構成要素であり、密着性、光沢、耐衝撃性を向上させた低VOC配合を実現します。当社独自のDMBA（CAS 10097-02-6）は、優れた溶解性や速い反応速度といった潜在的な利点を提供し、ポリウレタンの生産および塗布特性の最適化に有益です。両方とも完全にREACH登録されており、規制順守をサポートします。また、耐久性のある水性樹脂のもう一つの重要な中間体であるヒドロキシピバリン酸（HPVA, CAS 4835-90-9）も提供しています。',
            image: coatingsChallenge1Doc.id,
          },
          {
            title: '粉体塗装と樹脂改質',
            challenge:
              '粉体塗装や他の樹脂システムにおいて、最適な流動性、レベリング性、耐久性、柔軟性を達成するには、特定の​​中間体が必要となることがよくあります。',
            solution:
              'ヒドロキシピバリン酸（HPVA）は、粉体塗装で使用されるポリエステルなどの樹脂を製造するための主要な中間体として機能し、その誘導体（HPN）は流動性とレベリング性を向上させます。多価アルコールのアクリレートエステルは、架橋点を提供する多用途なモノマーとして機能し、最終的な塗膜の硬度、柔軟性、耐久性に影響を与えます。当社のカスタム合成能力は、特定のモノマーや添加剤のニーズにさらに対応できます。',
            image: coatingsChallenge2Doc.id,
          },
          {
            title: '環境規制への対応（低VOC）',
            challenge:
              '特に揮発性有機化合物（VOC）の排出に関する厳しい環境規制を遵守することは、市場アクセスにとって不可欠です。',
            solution:
              '高性能な水性配合を可能にするDMPAやDMBAのような主要モノマーを供給することにより、VUPは業界がより低VOCで持続可能なコーティング技術へ移行することを直接支援します。当社の製品はREACHに登録されており、当社の規制サポートサービスは、クライアントが自社の配合に関するコンプライアンス要件を乗り越えるのを支援します。',
            image: coatingsChallenge3Doc.id,
          },
        ],
      },
    }),

    // Polymers, Plastics
    payload.update({
      collection: 'industries',
      id: polymersPlastics.id,
      locale: 'jp',
      data: {
        name: 'ポリマー・プラスチック',
        description:
          'ポリマー・プラスチック産業は、特定の機能性、向上した耐久性、改善された加工特性を持つ材料を創出するために、革新的な化学に依存しています。重合反応の制御から最終製品の劣化防止まで、特殊な化学添加剤と中間体が重要な役割を果たします。VUP, a.s.は、主要な構成単位、安定剤（ヒンダードアミン/HALSなど）、架橋剤、重合メディエーター（TEMPOなど）を、広範な研究開発および分析サービスに支えられて提供し、パートナーが先進的なポリマーソリューションを開発できるようにします。',
        summary:
          'VUPはポリマー向けの構成単位と安定剤を提供し、先進的な研究開発支援により耐久性と加工性を向上させます。',
        challenges: [
          {
            title: 'ポリマーの安定化（光、熱、酸化）',
            challenge:
              '紫外線、熱、酸化によるポリマーの劣化から保護することは、製品寿命を延ばし、特に要求の厳しい用途で性能を維持するために不可欠です。',
            solution:
              '当社のTAA生産ラインから誘導されるヒンダードアミン光安定剤（HALS）を含むヒンダードアミンを提供しています。これらの添加剤は強力なラジカル捕捉剤として機能し、ポリマーの劣化を著しく抑制し、ひび割れや変色を防ぎ、プラスチックやコーティングの長期耐久性を向上させます。当社のTEMPO誘導体もポリマーの安定性に貢献します。',
            image: polymersChallenge1Doc.id,
          },
          {
            title: '制御重合と構造制御',
            challenge:
              '特定のポリマー特性を達成するには、合成中に分子量、多分散性、および構造を精密に制御することがしばしば必要です。',
            solution:
              'TEMPO（CAS 2564-83-2）は、ニトロキシド媒介重合（NMP）において非常に効果的なメディエーターとして機能し、明確に定義された構造を持つポリマーの合成を可能にします。この制御により、特定の用途に合わせた高性能特性を持つ材料の開発が可能になります。H-TEMPO（CAS 2226-96-2）は、プロセス制御や保管のための重合禁止剤として使用できます。',
            image: polymersChallenge2Doc.id,
          },
          {
            title: 'ポリウレタンの構成単位',
            challenge:
              '高性能ポリウレタン（ディスパージョン、エラストマー、接着剤）を配合するには、水分散性、柔軟性、接着性などの所望の特性を付与するための特定の中間体が必要です。',
            solution:
              "安定した高性能な水性PUDを創出するために不可欠な、主要なメチロールアルカン酸であるDMPA（CAS 4767-03-7）とDMBA（CAS 10097-02-6）を提供します。HPVAは耐久性のあるポリエステルおよびポリウレタン樹脂の中間体として機能します。トリメチロールエタン さらに、O,O'-ビス(3-アミノプロピル)ポリエチレングリコールは、柔軟性と親水性を付与する反応性成分として使用できます。",
            image: polymersChallenge3Doc.id,
          },
          {
            title: '架橋と特性向上',
            challenge:
              'ポリマーの機械的強度、熱安定性、弾性、および耐薬品性を向上させるには、材料内に架橋ネットワークを形成することがしばしば含まれます。',
            solution:
              'やアジピン酸ジヒドラジドなどの架橋剤を提供しています。これらの多機能分子はポリマー鎖と反応し、接着剤、コーティング、エラストマー、プラスチックなどの要求の厳しい用途に不可欠な構造的完全性と性能特性を向上させます。',
            image: polymersChallenge4Doc.id,
          },
        ],
      },
    }),

    // Adhesives, Sealants
    payload.update({
      collection: 'industries',
      id: adhesivesSealants.id,
      locale: 'jp',
      data: {
        name: '接着剤・シーラント',
        description:
          '接着剤・シーラント業界では、強力で耐久性のある接着、優れた柔軟性、環境要因への耐性を備え、同時に持続可能で低VOCの配合がますます好まれる材料が求められています。VUP, a.s.は、先進的な接着剤およびシーラントシステムの開発を可能にする主要な化学中間体を提供します。高性能水性接着剤向けのジメチロールブタン酸（DMBA）、反応性ホットメルト向けのヒドロキシピバリン酸（HPVA）誘導体、不可欠な架橋剤などの特殊な構成単位を提供し、配合設計者が性能および規制上の課題を克服するのを支援します。',
        summary:
          'VUPは接着剤用の中間体を供給し、低VOCソリューションで強度、柔軟性、持続可能性を向上させます。',
        challenges: [
          {
            title: '水性接着剤システム（ポリウレタン、ポリエステル、エポキシ）',
            challenge:
              '高性能な水性接着剤を配合するには、安定性、強力な接着力、耐水性を確保する中間体が必要です。',
            solution:
              'ジメチロールブタン酸（DMBA、CAS 10097-02-6）は、水性のポリウレタン、エポキシ、ポリエステル接着剤にとって重要な成分です。その優れた水溶性は加工効率を向上させ、架橋剤としての機能は卓越した接着強度と向上した耐水性を提供します。反応速度が速い可能性もあり、生産スループットを向上させることもできます。また、接着剤用のPUDで使用される関連メチロールアルカン酸であるDMPAも提供しています。',
            image: adhesivesChallenge1Doc.id,
          },
          {
            title: '反応性ホットメルト接着剤と樹脂改質',
            challenge:
              '良好な透明性、接着性、柔軟性を備えた無溶剤の反応性ホットメルトを開発するには、特定の構成単位が必要です。',
            solution:
              'ヒドロキシピバリン酸（HPVA、CAS 4835-90-9）は、ヒドロキシピバリン酸ネオペンチルグリコールエステル（HPN）の前駆体です。HPNは接着剤に使用されるポリウレタン樹脂の構成単位として機能し、硬度、柔軟性、接着性の好ましいバランスをもたらします。反応性ホットメルトにおいて、HPNは透明性を向上させ、溶剤要件を削減し、低VOC配合をサポートします。VUPの多価アルコールも、この分野で使用される樹脂の中間体として機能します。',
            image: adhesivesChallenge2Doc.id,
          },
          {
            title: '架橋による強度と耐久性の向上',
            challenge:
              '高性能の接着剤やシーラントで必要な機械的強度、熱安定性、耐薬品性を達成するには、効果的な架橋がしばしば必要です。',
            solution:
              'アジピン酸ジヒドラジドなどの主要な架橋剤を提供しています。これらの成分は接着剤やシーラントの配合内で反応し、堅牢なポリマーネットワークを形成し、要求の厳しい用途に必要な耐久性と性能特性を大幅に向上させます。',
            image: adhesivesChallenge3Doc.id,
          },
          {
            title: '高性能添加剤とカスタムソリューション',
            challenge:
              '独自の用途では、標準的な成分では満たされない特定の性能目標を達成するために、特殊な添加剤や中間体が必要になる場合があります。',
            solution:
              'TEMPO誘導体は、重合プロセスを強化したり、接着剤の熱的/機械的強度を向上させる可能性を示しています。さらに、当社のカスタム合成サービスにより、広範な研究開発能力に裏打ちされた、お客様独自の接着剤やシーラントの配合ニーズに合わせた特定のモノマーや添加剤を開発・製造することができます。',
            image: adhesivesChallenge4Doc.id,
          },
        ],
      },
    }),

    // Pharmaceuticals, Biotech
    payload.update({
      collection: 'industries',
      id: pharmaceuticals.id,
      locale: 'jp',
      data: {
        name: '医薬品・バイオテクノロジー',
        description:
          '医薬品およびバイオテクノロジー分野では、卓越した純度、革新的な化学、そして規制基準の厳格な遵守が求められます。VUP, a.s.は、主要な化学中間体、特殊な診断補助剤、先進的な生物医学材料、専門的な研究開発およびカスタム合成サービスを提供することで、これらの重要な産業の企業と提携しています。70年以上にわたる化学の専門知識、ISO 9001:2015認証、認定された分析能力を活用し、不可欠なヘルスケアソリューションの開発と生産を支援します。',
        summary:
          'VUPは医薬品・バイオテクノロジー向けの中間体とサービスを提供し、革新的な化学で純度とコンプライアンスを保証します。',
        challenges: [
          {
            title: 'API合成と医薬品中間体',
            challenge:
              '原薬（API）製造には、高純度で信頼性の高い供給が可能な原材料と中間体の調達が不可欠です。',
            solution:
              '当社は、TEMPO（CAS 2564-83-2）および関連するニトロキシドラジカルの製造を専門としています。これらは多目的な触媒、抗酸化剤、原料として機能します。VUPのカスタム合成サービスは、堅牢な品質管理に裏打ちされた、医薬品開発パイプラインに必要な他の複雑な有機中間体の特注生産を提供します。',
            image: pharmaChallenge1Doc.id,
          },
          {
            title: '生物医学材料とデバイスコーティング',
            challenge:
              '先進的な医療機器や治療法の開発には、独自の機能特性を持つ特殊な生体適合性材料がしばしば必要とされます。',
            solution:
              "VUPは、血管インターベンションデバイスやその他の外科用途向けの潤滑性、親水性コーティングを作成するために使用される高価値中間体であるO,O'-ビス(3-アミノプロピル)ポリエチレングリコール（DAPEG）のユニークな世界的生産者です。これを基に、組織工学、3Dバイオプリンティング、ドラッグデリバリーシステムで大きな可能性を秘めた誘導体であるPEG-ジアクリルアミド（PEGDAA）のパイロット能力を開発しました。当社の研究開発チームは、この分野でDSM Biomedicalなどのパートナーと積極的に協力しています。",
            image: pharmaChallenge2Doc.id,
          },
          {
            title: '診断補助剤とヘルスケア製品',
            challenge: '医療現場での日常的な診断手順には、信頼性が高く安全な消耗品が不可欠です。',
            solution:
              '当社は、超音波検査用のGELSONや心電図/脳波検査用のEV GELなど、高品質の診断用ゲルを製造しています。これらの製品は、安全な皮膚科学/化粧品グレードの原料を使用して処方されており、アルコールフリーで非刺激性であり、関連する健康基準を満たしています（GelsonはMoH SKの健康証明書を保持しています）。VUPはまた、他のファインケミカルやヘルスケア用途の製品も製造しています。',
            image: pharmaChallenge3Doc.id,
          },
          {
            title: '創薬と研究用化学品',
            challenge:
              '研究者は、標的同定、スクリーニング、および前臨床研究のために、特殊で高純度の化学品や試薬へのアクセスを必要とします。',
            solution:
              '当社のTEMPO誘導体は、医薬品研究において重要なツール（抗酸化剤、スピンラベル）として機能します。VUPはまた、医療用途に特化したユニークな実験用化学品を製造しており、研究者が発見プログラムに必要な新規化合物や特定の中間体を提供するためのカスタム合成サービスも提供しています。',
            image: pharmaChallenge4Doc.id,
          },
        ],
      },
    }),

    // Petrochemicals, Refineries
    payload.update({
      collection: 'industries',
      id: petrochemicalsRefineries.id,
      locale: 'jp',
      data: {
        name: '石油化学・製油所',
        description:
          '1950年に設立された石油化学研究所から生まれたVUP, a.s.は、石油化学の科学と技術において深い歴史的ルーツと広範な専門知識を有しています。大規模な精製業者ではありませんが、特殊化学製品（燃料安定剤や禁止剤など）、高度な分析サービス、中間体のカスタム合成、プロセス最適化と開発のための専門的な研究開発支援を提供することで、石油化学・製油所セクターと提携しています。品質（ISO 9001）と安全（レスポンシブル・ケア）へのコミットメントにより、この要求の厳しい業界にとって信頼できるパートナーとなっています。',
        summary:
          'VUPは石油化学向けに特化した製品とサービスを提供し、品質、安全性、プロセスの最適化に重点を置いています。',
        challenges: [
          {
            title: '燃料の処理、保管、安定性',
            challenge:
              '処理、輸送、保管中の燃料の安定性を確保することは、劣化やガムの生成を防ぎ、品質仕様を維持するために不可欠です。',
            solution:
              '燃料の処理および保管用に設計されたVUPIN H37-B（酸化防止剤/紫外線安定剤）などの特殊添加剤を製造しています。さらに、当社の専門知識はH-TEMPOのような重合禁止剤にも及び、これは製油所のFCCユニット（例：Slovnaft）で不要な反応を防ぐために長年成功裏に使用されています。',
            image: petroChallenge1Doc.id,
          },
          {
            title: '石油化学合成と特殊中間体',
            challenge:
              '石油化学産業は、下流の用途や特定のプロセスニーズのために幅広い特殊中間体を必要とし、しばしばカスタム化学合成能力が求められます。',
            solution:
              '当社の強力な研究開発基盤を活用し、特殊有機中間体向けのカスタム合成サービスを提供しています。当社の歴史的かつ継続的な研究専門知識には、アセチレンアルコール、エポキシド、多価アルコール、高級アルデヒド、臭素化炭化水素など、石油化学原料および誘導体に直接関連する分野が含まれます。',
            image: petroChallenge2Doc.id,
          },
          {
            title: '下流産業向けの原材料',
            challenge:
              '製油所や石油化学プラントは、ポリマー、プラスチック、コーティング、接着剤など、数多くの下流産業の基本的な構成要素を提供します。これらのセクターへの中間体供給業者は重要なパートナーです。',
            solution:
              'DMPA、DMBA、HPVAなどの主要な中間体を製造しています。これらは石油化学のバリューチェーンから派生し、コーティング、接着剤、ポリマー用途で広範に使用される高性能ポリウレタン（PUD）、ポリエステル、アルキドの製造に不可欠な原材料です。',
            image: petroChallenge3Doc.id,
          },
          {
            title: 'プロセスの最適化、分析、安全性',
            challenge:
              '製油所および石油化学プロセスの最適化、製品品質の確保、高い安全基準の維持には、堅牢な分析サポートと技術的専門知識が必要です。',
            solution:
              '当社の研究開発サービスは、プロセスの開発と最適化を支援できます。当社の認定ATBEL部門（SNAS S-118）は、組成分析のためのガスクロマトグラフィー/液体クロマトグラフィー、VOC測定、物理的特性試験、安全な取り扱いとプロセス制御に不可欠な広範な技術安全分析（引火点、可燃性など）を含む、このセクターに関連する包括的な分析サービスを提供します。',
            image: petroChallenge4Doc.id,
          },
        ],
      },
    }),

    // Battery Energy Storage
    payload.update({
      collection: 'industries',
      id: batteryEnergyStorage.id,
      locale: 'jp',
      data: {
        name: 'バッテリー・エネルギー貯蔵',
        description:
          '効率的で持続可能、かつ安全なエネルギー貯蔵ソリューションを世界的に探求する動きが、従来のリチウムイオン電池を超える技術革新を推進しています。有機ラジカル電池（ORB）は、TEMPO（2,2,6,6-テトラメチルピペリジノオキシ）やその誘導体のようなレドックス活性な有機分子を利用し、有望なフロンティアを代表しています。VUP, a.s.は、高純度TEMPO化合物の研究開発と生産における長年の専門知識を活かし、この次世代のエネルギー貯蔵技術の開発をサポートする態勢を整えています。当社のスケーラブルな生産能力と継続的な研究努力は、ORBおよび先進的なレドックスフロー電池向けの主要材料を提供することを目指しています。',
        summary:
          'VUPは、持続可能性と効率性に焦点を当て、ORBおよびレドックスフロー電池向けのTEMPO化合物でエネルギー貯蔵の革新を支援します。',
        challenges: [
          {
            title: '有機ラジカル電池（ORB）',
            challenge:
              'ポータブル電子機器からグリッドストレージまでの用途向けに、高性能で金属フリー、かつ潜在的により安全なバッテリーシステムを開発すること。',
            solution:
              'TEMPOとその誘導体は、非常に効率的で可逆的な電荷キャリアとして機能し、顕著な電気化学的性能を示します。ORB電極のレドックス活性材料としての潜在的な使用は、高い出力密度や高速な充放電速度などの利点を提供します。VUPは、この分野の電気化学的研究開発に適した高純度のTEMPOを生産しています。',
            image: batteryChallenge1Doc.id,
          },
          {
            title: '水系レドックスフロー電池',
            challenge:
              'グリッドスケールのエネルギー貯蔵向けに、水系レドックスフロー電池のエネルギー密度、効率、および費用対効果を向上させること。',
            solution:
              '研究によれば、TEMPOベースのカソライトが水系レドックスフロー電池の性能を向上させる大きな可能性があることが示されています。VUPのTEMPO化学における専門知識は、フロー電池システムにおける安定性と電気化学ポテンシャルに最適化された特注のTEMPO誘導体の開発と供給で協力する上で有利な立場にあります。',
            image: batteryChallenge2Doc.id,
          },
          {
            title: '材料開発と最適化',
            challenge:
              'TEMPOベースの電池の性能を最適化するには、構造と特性の関係を理解し、安定性、溶解度、またはレドックスポテンシャルが向上した新規誘導体を合成する可能性があります。エネルギー密度と充放電効率に関する性能最適化が主要な焦点です。',
            solution:
              'ニトロキシドラジカル化学と研究開発能力における深い専門知識を活用し、研究者や企業と提携してカスタムTEMPO誘導体を開発・合成します。私たちの目標は、特定の性能のボトルネックに対処し、的を絞った材料革新を通じてORBおよびフロー電池技術の進歩に貢献することです。VUPは、スケールアップ準備が整ったTEMPO関連技術を保有しています。',
            image: batteryChallenge3Doc.id,
          },
        ],
      },
    }),

    // Building Construction
    // payload.update({
    //   collection: 'industries',
    //   id: buildingConstruction.id,
    //   locale: 'jp',
    //   data: {
    //     name: '建築・建設',
    //     description:
    //       '建築・建設業界は、耐久性、プロセス効率、安全性、および持続可能性を向上させる材料と化学ソリューションを絶えず求めています。VUP, a.s.は、コンクリートおよび石膏の特性を向上させるための特殊化学調製品（VUPPOR、VUPRANYL）、型枠の効率を改善するための製品（VUPOFORM）、および現代建築に不可欠な高性能コーティングや接着剤に使用される主要中間体（DMBA、DMPA）を提供することで、この分野に貢献しています。私たちは、建築材料とプロセスに付加価値をもたらす信頼性の高い化学ソリューションを提供することに重点を置いています。',
    //     summary:
    //       'VUPは、耐久性、効率性、持続可能性のための化学ソリューションで建築材料を強化します。',
    //     challenges: [
    //       {
    //         title: 'コンクリート・セメント製品の強化',
    //         challenge:
    //           'コンクリート混合物の作業性を改善し、敷石、パネル、構造物などの完成したコンクリート製品の特性を向上させることは、効率と性能の鍵です。',
    //         solution:
    //           'VUPPORは、コンクリート製品向けの添加剤として特別に設計されています。加工性を向上させ、断熱特性を高めます。舗装材、縁石、ガーデニング部品、建設パネル、一体構造物など、幅広いコンクリート製品に推奨され、VUPPORはより高品質な完成品に貢献します。生理学的に無害であり、標準的な慣行を超える特別な取り扱い措置は必要ありません。',
    //         image: constructionChallenge1Doc.id,
    //       },
    //       {
    //         title: '石膏とコーティングの改善',
    //         challenge:
    //           '建設で使用される合成石膏および水溶性コーティングの耐久性、塗布特性、およびひび割れ耐性を向上させること。建築用コーティングの低VOC要件を満たすこと。',
    //         solution:
    //           '安定した水分散液であるVUPRANYLは、合成石膏および水溶性コーティングの添加剤として機能し、耐久性を延ばし、ひび割れの発生を大幅に減少させます。さらに、DMBA（CAS 10097-02-6）やDMPA（CAS 4767-03-7）などの主要な中間体は、優れた密着性と柔軟性を提供する、耐久性のある低VOC建築用および保護用コーティングに使用される水性ポリウレタンおよびポリエステル樹脂の製造に不可欠です。',
    //         image: constructionChallenge2Doc.id,
    //       },
    //       {
    //         title: '効率的な型枠剥離（離型）',
    //         challenge:
    //           '作業員の安全と環境への配慮を維持しつつ、型枠やコンクリート表面を損傷することなく、コンクリートを型枠からきれいに簡単に剥離させること。',
    //         solution:
    //           'VUPOFORMは、あらゆる種類の建築用型枠に対して非常に効果的な離型剤として機能します。水に不溶性であるため、優れた分離効果を発揮し、再塗布なしで型枠を複数回再利用できます。シーリング材を侵したり、金属機器を腐食させたりしません。VUPOFORMは、無視できる揮発性（大気汚染なし）、廃水中の油汚染の排除、取り扱いに特別な安全対策が不要といった、重要な安全性と環境上の利点を提供します。',
    //         image: constructionChallenge3Doc.id,
    //       },
    //       {
    //         title: '高性能建築用接着剤・シーラント',
    //         challenge:
    //           '現代の建設は、多様な材料を接着し、構造的完全性を確保し、環境要素に対する効果的なシーリングを提供するために、高性能の接着剤とシーラントに依存しています。',
    //         solution:
    //           '当社は、DMBA（CAS 10097-02-6）などの主要な化学中間体を供給しています。これは水性のポリウレタン、エポキシ、ポリエステル接着剤で使用され、接着強度と耐水性を向上させます。ヒドロキシピバリン酸（HPVA、CAS 4835-90-9）は、その誘導体であるHPNを介して、硬度、柔軟性、接着性のバランスを取ることで接着剤とシーラントの性能に貢献し、低VOC配合を可能にする可能性があります。',
    //         image: constructionChallenge4Doc.id,
    //       },
    //     ],
    //   },
    // }),
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
    // buildingConstruction,
  }
}

export type SeededIndustries = Awaited<ReturnType<typeof seedIndustries>>
