import type { Payload } from 'payload'
import type { SeededMedia } from './1-media'

export const seedServices = async (payload: Payload, media: SeededMedia) => {
  payload.logger.info('— Seeding services...')

  const { demoImageDoc, image2Doc } = media

  const [
    researchDevelopment,
    analyticalTesting,
    cosmeticsManufacturing,
    regulatoryTechnicalSupport,
    customSynthesisManufacturing,
  ] = await Promise.all([
    payload.create({
      collection: 'services',
      data: {
        title: 'Research & Development',
        _status: 'published',
        description:
          "VUP's R&D division solves complex chemistry challenges across diverse industries.With 70+ years of chemical expertise, we transform ideas into viable technological solutions tailored to your needs.",
        featuredImage: demoImageDoc.id,
        features: [
          {
            feature: 'Experience',
            description:
              '70+ years of expertise in chemical development and innovation with a proven track record of solving complex chemistry challenges',
          },
          {
            feature: 'Patents Granted',
            description:
              'Over 900 patents demonstrating our innovation capabilities and commitment to advancing chemical science',
          },
          {
            feature: 'Quality Management',
            description:
              'ISO 9001 certified processes ensuring consistent quality and reliable project execution across all R&D activities',
          },
          {
            feature: 'Pilot Capacity',
            description:
              '250 t/yr capacity for process scale-up and validation with dedicated pilot plant facilities for comprehensive testing',
          },
          {
            feature: 'Integrated Solutions',
            description:
              'Seamless support from analytical services to production capabilities, providing complete technological foundations for commercialization',
          },
          {
            feature: 'Proven Track Record',
            description:
              'Successful collaborations with leading international partners including DSM, UPM, and Perstorp across diverse chemical sectors',
          },
        ],
        subServices: [
          {
            title: 'Route Scouting & Feasibility',
            description:
              'Expert evaluation and design of synthetic routes through comprehensive literature research, patent analysis, and practical chemistry expertise to identify optimal pathways for your target compounds. Our experienced team conducts thorough feasibility studies, evaluating technical risks and commercial viability to ensure the most efficient and cost-effective synthetic approach for your specific requirements.',
            image: demoImageDoc.id,
            displayItems: [
              { item: 'Literature & Patent Analysis' },
              { item: 'Synthetic Route Design' },
              { item: 'Technical Risk Assessment' },
              { item: 'Commercial Feasibility Evaluation' },
            ],
            features: [
              {
                feature: 'Comprehensive Research',
                description:
                  'Extensive literature and patent analysis combined with practical chemistry insights to identify the most promising synthetic routes while avoiding potential IP conflicts.',
              },
              {
                feature: 'Risk Mitigation',
                description:
                  'Detailed technical and commercial risk assessment including safety considerations, regulatory requirements, and scalability challenges to minimize project uncertainties.',
              },
              {
                feature: 'Expert Evaluation',
                description:
                  'Practical chemistry insights from experienced specialists with deep knowledge in petrochemicals, organic synthesis, and specialty chemical development.',
              },
            ],
            link: 'route-scouting',
          },
          {
            title: 'Custom Synthesis',
            description:
              'Laboratory-scale synthesis of novel and known compounds, intermediates, and chemical specialties from grams to kilograms, with expertise in complex multi-step synthesis and challenging chemistry. Our flexible laboratory setups and experienced chemists handle demanding synthetic challenges including acetylene chemistry, TEMPO derivatives, methylolalkanoic acids, and other specialized chemical transformations.',
            image: image2Doc.id,
            displayItems: [
              { item: 'Gram to Kilogram Scale' },
              { item: 'Complex Multi-Step Synthesis' },
              { item: 'Novel Compound Development' },
              { item: 'Intermediate Production' },
            ],
            features: [
              {
                feature: 'Scale Flexibility',
                description:
                  'From milligrams to kilograms capability with consistent quality and reproducibility, utilizing flexible laboratory synthesis setups adapted to specific project requirements.',
              },
              {
                feature: 'Complex Chemistry',
                description:
                  'Expertise in challenging reagents, multi-step reactions, and specialized areas including acetylene chemistry, TEMPO derivatives, and polyurethane catalysts.',
              },
              {
                feature: 'Quality Assurance',
                description:
                  'Comprehensive analytical support through our SNAS-accredited ATBEL division ensuring product purity and specification compliance throughout the synthesis process.',
              },
            ],
            link: 'custom-synthesis',
          },
          {
            title: 'Process Development & Optimization',
            description:
              'Developing safe, efficient, and scalable synthetic processes with focus on optimizing reaction conditions, improving yields and purity, reducing costs, and implementing greener chemistry principles. Our team specializes in reaction calorimetry, distillation optimization, crystallization studies, and solvent elimination strategies to create robust, environmentally conscious manufacturing processes.',
            image: demoImageDoc.id,
            displayItems: [
              { item: 'Reaction Optimization' },
              { item: 'Yield Improvement' },
              { item: 'Cost Reduction' },
              { item: 'Green Chemistry Implementation' },
            ],
            features: [
              {
                feature: 'Process Efficiency',
                description:
                  'Optimization of reaction conditions, catalyst selection, and process parameters to maximize efficiency while maintaining product quality and safety standards.',
              },
              {
                feature: 'Sustainability Focus',
                description:
                  'Implementation of greener chemistry principles including solvent elimination, waste reduction, and energy-efficient processes to minimize environmental impact.',
              },
              {
                feature: 'Safety Enhancement',
                description:
                  'Development of safe and reliable synthetic processes with comprehensive safety parameter measurements and risk assessment protocols.',
              },
            ],
            link: 'process-development',
          },
          {
            title: 'Process Scale-Up & Verification',
            description:
              'Validating processes at laboratory and pilot plant scale utilizing pilot capacities up to 250 t/yr for specific products, gathering essential data for technological foundations and commercial viability. Our dedicated pilot plant facilities provide comprehensive process verification, enabling seamless technology transfer and de-risking commercial production scale-up.',
            image: image2Doc.id,
            displayItems: [
              { item: 'Pilot Plant Validation' },
              { item: 'Scale-Up Data Generation' },
              { item: 'Process Verification' },
              { item: 'Technology Transfer Support' },
            ],
            features: [
              {
                feature: 'Pilot Plant Facilities',
                description:
                  'Dedicated facilities with up to 250 t/yr capacity equipped with flexible reactor systems for comprehensive process verification and scale-up validation.',
              },
              {
                feature: 'Data Generation',
                description:
                  'Comprehensive data collection including reaction kinetics, heat transfer, mass balance, and safety parameters to establish solid technological foundations.',
              },
              {
                feature: 'Commercial Readiness',
                description:
                  'Validation protocols and technology transfer support ensuring seamless transition from pilot scale to commercial production with minimized technical risks.',
              },
            ],
            link: 'process-scale-up',
          },
          {
            title: 'Analytical Method Development',
            description:
              'Creating and validating analytical methods for raw materials, intermediates, and final products in collaboration with our SNAS-accredited ATBEL division, ensuring reliable quality control throughout development. Our comprehensive analytical capabilities include GC, LC, GC-MS, FT-IR, NMR, and specialized testing methods tailored to support your R&D and production requirements.',
            image: demoImageDoc.id,
            displayItems: [
              { item: 'Method Creation & Validation' },
              { item: 'Raw Material Analysis' },
              { item: 'Product Quality Control' },
              { item: 'SNAS Accredited Testing' },
            ],
            features: [
              {
                feature: 'Accredited Laboratory',
                description:
                  'SNAS accredited ATBEL division providing reliable analytical services with comprehensive quality management systems and certified procedures.',
              },
              {
                feature: 'Comprehensive Analysis',
                description:
                  'Full spectrum analytical capabilities including GC, LC, NMR, FT-IR, AAS, titration, and physical-safety testing to support all phases of chemical development.',
              },
              {
                feature: 'Method Validation',
                description:
                  'Rigorous validation protocols ensuring method reliability, accuracy, and precision according to international standards and regulatory requirements.',
              },
            ],
            link: 'analytical-method-development',
          },
          {
            title: 'Purification & Isolation',
            description:
              'Developing comprehensive strategies for achieving desired product purity through advanced separation techniques including distillation, crystallization, filtration, and extraction methods. Our expertise in purification processes ensures optimal product quality while maintaining cost-effectiveness and scalability for commercial applications.',
            image: image2Doc.id,
            displayItems: [
              { item: 'Distillation Optimization' },
              { item: 'Crystallization Studies' },
              { item: 'Advanced Filtration' },
              { item: 'Extraction Methods' },
            ],
            features: [
              {
                feature: 'Advanced Techniques',
                description:
                  'Expertise in multiple purification methods including fractional distillation, recrystallization, chromatographic separation, and membrane filtration technologies.',
              },
              {
                feature: 'Purity Optimization',
                description:
                  'Systematic approach to achieving target purity levels while optimizing yield and minimizing waste through tailored purification strategies.',
              },
              {
                feature: 'Scalability Focus',
                description:
                  'Development of purification processes with commercial scalability in mind, ensuring smooth transition from laboratory to production scale.',
              },
            ],
            link: 'purification-isolation',
          },
        ],
        accreditations: [
          {
            accreditation: 'ISO 9001 Certification',
          },
          {
            accreditation: 'R&D Competency Certificate',
          },
          {
            accreditation: 'SNAS Accreditation',
          },
        ],
        slug: 'research-development',
      },
    }),
    payload.create({
      collection: 'services',
      data: {
        title: 'Analytical Testing Services',
        _status: 'published',
        description:
          'Accredited analytical, technical-safety, and ecological testing services with SNAS S-118 (ISO/IEC 17025) certification. Comprehensive chemical analysis and regulatory compliance testing.',
        featuredImage: image2Doc.id,
        features: [
          {
            feature: 'SNAS Accreditation',
            description:
              'SNAS S-118 accreditation according to ISO/IEC 17025 ensuring reliable, internationally recognized analytical results with rigorous quality controls',
          },
          {
            feature: 'Comprehensive Testing',
            description:
              'Wide range of analytical techniques including chromatography, spectroscopy, titrimetric analysis, and physical-chemical testing in one accredited facility',
          },
          {
            feature: 'Expert Leadership',
            description:
              'Led by Ing. Ľudovít Žiak, PhD., with over 15 years of analytical laboratory experience and specialized expertise in workplace atmosphere monitoring',
          },
          {
            feature: 'Regulatory Compliance',
            description:
              'Testing according to international standards (OECD, ISO, DIN) and regulations including REACH compliance and automotive standards',
          },
        ],
        subServices: [
          {
            title: 'Chromatographic Analysis',
            description:
              'Advanced chromatographic techniques including gas chromatography (GC, GC-MS), high-performance liquid chromatography (HPLC), and isotachophoresis (ITP) for composition analysis, VOC determination, impurity identification, and anion determination. Our state-of-the-art equipment enables precise analysis of complex mixtures with method development capabilities.',
            image: demoImageDoc.id,
            displayItems: [
              { item: 'Gas Chromatography (GC, GC-MS)' },
              { item: 'High-Performance Liquid Chromatography (HPLC)' },
              { item: 'Isotachophoresis (ITP)' },
              { item: 'VOC Analysis (PV3341)' },
            ],
            features: [
              {
                feature: 'Advanced Instrumentation',
                description:
                  'Modern GC, HPLC, and GC-MS systems for precise composition analysis, impurity identification, and trace analysis with excellent sensitivity and reproducibility.',
              },
              {
                feature: 'Method Development',
                description:
                  'Custom analytical method development and validation capabilities to meet specific client requirements and regulatory standards.',
              },
            ],
            link: 'chromatographic-analysis',
          },
          {
            title: 'Spectroscopic Analysis',
            description:
              'Comprehensive spectroscopic analysis using atomic absorption spectrometry (AAS), infrared spectroscopy (FT-IR), nuclear magnetic resonance (NMR), UV/VIS spectrometry, and mass spectrometry for substance identification, metal determination, and structural analysis. Our spectroscopic capabilities support both qualitative and quantitative analysis needs.',
            image: image2Doc.id,
            displayItems: [
              { item: 'Atomic Absorption Spectrometry (AAS)' },
              { item: 'Infrared Spectroscopy (FT-IR)' },
              { item: 'Nuclear Magnetic Resonance (NMR)' },
              { item: 'UV/VIS Spectrometry' },
            ],
            features: [
              {
                feature: 'Multi-technique Approach',
                description:
                  'Comprehensive spectroscopic suite enabling complete structural characterization and identification of unknown substances with high confidence.',
              },
              {
                feature: 'Metal Analysis',
                description:
                  'Specialized atomic absorption spectrometry capabilities for accurate determination of metals in various sample matrices.',
              },
            ],
            link: 'spectroscopic-analysis',
          },
          {
            title: 'Physical & Technical-Safety Testing',
            description:
              'Physical property determination and technical-safety testing according to OECD and ISO standards including melting point, boiling point, density, vapour pressure, surface tension, water solubility, flash point, and flammability testing. Essential for regulatory compliance, safety assessments, and product characterization across multiple industries.',
            image: demoImageDoc.id,
            displayItems: [
              { item: 'Physical Properties (OECD Standards)' },
              { item: 'Flash Point & Flammability' },
              { item: 'Workplace Atmosphere Monitoring' },
              { item: 'REACH Compliance Testing' },
            ],
            features: [
              {
                feature: 'OECD Compliance',
                description:
                  'Testing according to internationally recognized OECD guidelines ensuring regulatory compliance for chemical registration and safety assessments.',
              },
              {
                feature: 'Safety Monitoring',
                description:
                  'Specialized workplace atmosphere monitoring and measurement of chemical factors to ensure occupational health and safety compliance.',
              },
            ],
            link: 'physical-safety-testing',
          },
          {
            title: 'Titrimetric & Gravimetric Analysis',
            description:
              'Classical analytical techniques including Karl Fischer titration for water content determination, acid and hydroxyl value measurements, iodometric titrations, and gravimetric determinations for moisture, ash, and extractable substances. These proven methods provide reliable quantitative analysis for quality control and specification testing.',
            image: image2Doc.id,
            displayItems: [
              { item: 'Karl Fischer Titration' },
              { item: 'Acid & Hydroxyl Value' },
              { item: 'Gravimetric Determinations' },
              { item: 'Moisture & Ash Content' },
            ],
            features: [
              {
                feature: 'Proven Methods',
                description:
                  'Well-established analytical techniques providing reliable and accurate quantitative results for routine quality control and specification testing.',
              },
              {
                feature: 'Quality Control',
                description:
                  'Essential testing for raw materials, in-process monitoring, and final product quality assurance across various industries.',
              },
            ],
            link: 'titrimetric-gravimetric',
          },
        ],
        accreditations: [
          {
            accreditation: 'SNAS S-118 Accreditation',
          },
          {
            accreditation: 'ISO 9001 Certification',
          },
          {
            accreditation: 'R&D Competency Certificate',
          },
        ],
        slug: 'analytical-testing',
      },
    }),
    payload.create({
      collection: 'services',
      data: {
        title: 'Custom Cosmetics Manufacturing',
        _status: 'published',
        description:
          "Leverage VUP's 70+ years of chemical production experience and dedicated cosmetics expertise (since 1990) for your custom cosmetic manufacturing needs.",
        featuredImage: demoImageDoc.id,
        features: [
          {
            feature: 'Proven Experience',
            description:
              '70+ years of chemical production expertise with dedicated cosmetics department since 1990, serving as a major producer of protective hand creams in Slovakia and Czech Republic',
          },
          {
            feature: 'Quality Certified',
            description:
              'ISO 9001:2015 certified manufacturing with rigorous quality controls and adherence to European cosmetic legislation ensuring compliant, high-quality products',
          },
          {
            feature: 'Award-Winning Products',
            description:
              'Slovak Gold award-winning Peggy Massage Gels and proven formulations including Fortea hand creams, body lotions, and medical diagnostic gels',
          },
          {
            feature: 'Scalable Production',
            description:
              'Flexible manufacturing capacity from small batches to large-scale production with packaging options including tubes, bottles, dispensers, and canisters',
          },
          {
            feature: 'Development Capabilities',
            description:
              'In-house formulation labs with expert cosmetic chemists creating custom solutions based on client specifications, market trends, and regulatory requirements',
          },
          {
            feature: 'Medical Grade Expertise',
            description:
              'Specialized production of medical and diagnostic gels including sonography gels (Gelson) and ECG/EEG conductive gels with health certificates',
          },
        ],
        subServices: [
          {
            title: 'White Label Services',
            description:
              "Brand and sell VUP's existing, market-tested cosmetic formulations including award-winning products. Our white label portfolio features proven formulations like Fortea hand creams and body lotions with various natural extracts and propolis, Fortea massage oils with essential oils, Slovak Gold award-winning Peggy massage gels with plant extracts (marigold, chestnut, capsaicin, menthol, comfrey, arnica), and medical diagnostic gels including alcohol-free Gelson sonography gel and EV ECG/EEG conductive gel.",
            image: demoImageDoc.id,
            displayItems: [
              { item: 'Fortea Hand Creams & Body Lotions' },
              { item: 'Award-Winning Peggy Massage Gels' },
              { item: 'Fortea Massage Oils' },
              { item: 'Medical Diagnostic Gels (Gelson, EV Gel)' },
            ],
            features: [
              {
                feature: 'Market-Tested Formulas',
                description:
                  'Proven formulations with established market success including award-winning products and major market share in protective hand creams across Slovakia and Czech Republic.',
              },
              {
                feature: 'Quick Market Entry',
                description:
                  'Faster time-to-market with existing formulations that have undergone rigorous testing and compliance verification, reducing development time and regulatory risks.',
              },
              {
                feature: 'Diverse Product Range',
                description:
                  'Comprehensive portfolio spanning skin care, massage products, and medical diagnostic gels with various natural extracts, essential oils, and specialized formulations.',
              },
            ],
            link: 'white-label',
          },
          {
            title: 'Private Label Services',
            description:
              'Custom formulation and manufacturing of unique cosmetic products based on your specifications and requirements. Our experienced team utilizes dedicated development laboratories to create tailored formulations incorporating desired ingredients, functions, and market trends such as natural extracts, paraben-free formulations, and hypoallergenic solutions. We provide comprehensive support from initial concept through finished product, including custom packaging solutions and regulatory compliance assistance.',
            image: image2Doc.id,
            displayItems: [
              { item: 'Custom Formulation Development' },
              { item: 'Product Range Expertise' },
              { item: 'Regulatory Compliance Support' },
              { item: 'Packaging Customization' },
            ],
            features: [
              {
                feature: 'Expert Formulation Team',
                description:
                  'Skilled cosmetic chemists and formulation experts led by experienced professionals creating innovative solutions tailored to your brand vision and target market requirements.',
              },
              {
                feature: 'Comprehensive Product Range',
                description:
                  'Proven capability across skin care products, massage oils and gels, medical diagnostic gels, and openness to developing new formulation types based on client needs.',
              },
              {
                feature: 'End-to-End Support',
                description:
                  'Complete turnkey solutions from initial formulation through production, packaging, quality control, and regulatory documentation including CPNP notification support.',
              },
            ],
            link: 'private-label',
          },
          {
            title: 'Quality Assurance & Compliance',
            description:
              'Rigorous quality management ensuring adherence to European cosmetic legislation and medical device requirements. Our comprehensive quality system includes in-house microbiological testing according to international standards (STN ISO 21527-2, STN EN ISO 21149), raw material and product quality control via SNAS S-118 accredited ATBEL laboratories using advanced analytical techniques (GC-MS, HPLC, FT-IR), and complete documentation supporting regulatory compliance including Certificates of Analysis and Product Information File elements.',
            image: demoImageDoc.id,
            displayItems: [
              { item: 'European Regulatory Compliance' },
              { item: 'Microbiological Testing' },
              { item: 'Accredited Analytical Testing' },
              { item: 'Complete Documentation' },
            ],
            features: [
              {
                feature: 'Certified Quality Systems',
                description:
                  'ISO 9001:2015 certified quality management system covering cosmetic production with Responsible Care certification ensuring consistent quality and environmental responsibility.',
              },
              {
                feature: 'Advanced Testing Capabilities',
                description:
                  'In-house microbiological laboratories and SNAS S-118 accredited analytical facilities providing comprehensive quality control from raw materials to finished products.',
              },
              {
                feature: 'Regulatory Expertise',
                description:
                  'Deep understanding of EU cosmetic regulations and medical device requirements with proven track record including health certificates for medical products like Gelson gel.',
              },
            ],
            link: 'quality-compliance',
          },
        ],
        accreditations: [
          {
            accreditation: 'ISO 9001:2015 Certification',
          },
          {
            accreditation: 'SNAS S-118 Accreditation',
          },
          {
            accreditation: 'Responsible Care Certification',
          },
          {
            accreditation: 'R&D Competency Certificate',
          },
        ],
        slug: 'cosmetics-manufacturing',
      },
    }),
    payload.create({
      collection: 'services',
      data: {
        title: 'Regulatory & Technical Support',
        _status: 'published',
        description:
          'Navigate complex chemical regulations and overcome technical hurdles with expert support combining deep regulatory knowledge and 70+ years of R&D expertise.',
        featuredImage: demoImageDoc.id,
        features: [
          {
            feature: 'REACH Expertise',
            description:
              'Proven experience with successful REACH registrations including DMPA, DMBA, and TEMPO derivatives, providing practical guidance based on real-world compliance achievements.',
          },
          {
            feature: 'Accredited Testing',
            description:
              'SNAS S-118 accredited analytical, technical-safety, and ecological laboratories providing reliable data for regulatory submissions and compliance documentation.',
          },
          {
            feature: 'Quality Certified',
            description:
              'ISO 9001:2015 certified quality management system ensuring consistent service delivery and reliable consultation processes across all regulatory and technical support activities.',
          },
          {
            feature: 'Industry Recognition',
            description:
              'Responsible Care certification and R&D Competency Certificate from Ministry of Education demonstrating commitment to safety, environment, and technical excellence.',
          },
          {
            feature: 'Expert Team',
            description:
              'Direct access to experienced department heads in R&D, analytics, and commercial operations with cross-functional expertise in regulatory compliance and technical problem-solving.',
          },
          {
            feature: 'Comprehensive Support',
            description:
              'End-to-end support from initial regulatory assessment through technical data provision to final compliance documentation and ongoing consultation services.',
          },
        ],
        subServices: [
          {
            title: 'REACH Compliance Support',
            description:
              "Comprehensive REACH guidance based on VUP's direct experience with successful full and intermediate registrations. We provide practical support for data gathering, dossier preparation, and compliance strategy development, leveraging our proven track record with substances like DMPA, DMBA, and TEMPO derivatives. Our accredited laboratories ensure reliable technical data for regulatory submissions.",
            image: demoImageDoc.id,
            displayItems: [
              { item: 'Registration Strategy Development' },
              { item: 'Technical Data Generation' },
              { item: 'Dossier Preparation Support' },
              { item: 'Compliance Assessment' },
            ],
            features: [
              {
                feature: 'Proven Experience',
                description:
                  'Direct experience with successful REACH registrations across multiple substance categories, providing practical insights and proven strategies for compliance.',
              },
              {
                feature: 'Data Generation',
                description:
                  'Access to SNAS S-118 accredited laboratories for generating reliable physical-chemical, technical-safety, and ecological data required for REACH submissions.',
              },
              {
                feature: 'Strategic Guidance',
                description:
                  'Expert consultation on registration strategies, data requirements, and cost-effective approaches to meeting REACH obligations while minimizing regulatory risks.',
              },
            ],
            link: 'reach-compliance',
          },
          {
            title: 'Quality Management Systems',
            description:
              'Expert consultation for implementing and maintaining ISO 9001 quality management systems in chemical R&D and production environments. Drawing from our own ISO 9001:2015 certification experience, we provide practical guidance for establishing robust quality processes, documentation systems, and continuous improvement frameworks tailored to chemical industry requirements.',
            image: image2Doc.id,
            displayItems: [
              { item: 'ISO 9001 Implementation' },
              { item: 'Quality Process Development' },
              { item: 'Documentation Systems' },
              { item: 'Audit Preparation' },
            ],
            features: [
              {
                feature: 'Practical Experience',
                description:
                  'Guidance based on our own successful ISO 9001:2015 implementation and maintenance across R&D, production, and analytical testing operations.',
              },
              {
                feature: 'Industry-Specific',
                description:
                  'Tailored approaches for chemical industry quality management addressing unique challenges in R&D, manufacturing, and analytical testing environments.',
              },
            ],
            link: 'quality-management',
          },
          {
            title: 'Safety & Environmental Compliance',
            description:
              'Comprehensive support for chemical safety and environmental compliance including workplace safety assessments, environmental impact evaluations, and regulatory guidance. Our Responsible Care certification and extensive safety testing capabilities ensure reliable guidance for safe handling, storage, disposal, and environmental protection measures across chemical operations.',
            image: demoImageDoc.id,
            displayItems: [
              { item: 'Safety Assessment Support' },
              { item: 'Environmental Impact Evaluation' },
              { item: 'Workplace Atmosphere Monitoring' },
              { item: 'Responsible Care Implementation' },
            ],
            features: [
              {
                feature: 'Certified Expertise',
                description:
                  'Responsible Care certification demonstrating commitment to safety and environmental protection with proven implementation experience.',
              },
              {
                feature: 'Testing Capabilities',
                description:
                  'Access to accredited safety testing including workplace atmosphere monitoring, flash point determination, and environmental impact assessments.',
              },
            ],
            link: 'safety-environmental',
          },
          {
            title: 'Technical Consultation',
            description:
              'In-depth technical consultation leveraging 70+ years of chemical R&D expertise and analytical capabilities to solve complex product and process challenges. Our experienced team provides expert advice on chemical processes, product optimization, troubleshooting, and application development, supported by comprehensive analytical testing and technical data provision from our accredited laboratories.',
            image: image2Doc.id,
            displayItems: [
              { item: 'Process Optimization' },
              { item: 'Product Development Support' },
              { item: 'Technical Problem Solving' },
              { item: 'Application Guidance' },
            ],
            features: [
              {
                feature: 'R&D Expertise',
                description:
                  'Access to 70+ years of chemical R&D experience with proven track record in complex synthesis, process development, and product optimization across diverse chemical sectors.',
              },
              {
                feature: 'Analytical Support',
                description:
                  'Comprehensive analytical capabilities through SNAS S-118 accredited laboratories providing technical data, troubleshooting support, and product characterization services.',
              },
              {
                feature: 'Cross-Functional Teams',
                description:
                  'Collaborative approach combining regulatory awareness, technical depth, and analytical expertise to provide comprehensive solutions for complex technical challenges.',
              },
            ],
            link: 'technical-consultation',
          },
        ],
        accreditations: [
          {
            accreditation: 'ISO 9001:2015 Certification',
          },
          {
            accreditation: 'SNAS S-118 Accreditation',
          },
          {
            accreditation: 'Responsible Care Certification',
          },
          {
            accreditation: 'R&D Competency Certificate',
          },
        ],
        slug: 'regulatory-technical-support',
      },
    }),
    payload.create({
      collection: 'services',
      data: {
        title: 'Custom Synthesis & Manufacturing',
        _status: 'published',
        description:
          'Partner with VUP for expert custom chemical synthesis and reliable small-scale manufacturing in Europe. Complex chemistry, reliably delivered.',
        featuredImage: demoImageDoc.id,
        features: [
          {
            feature: 'Expert Problem Solving',
            description:
              "Leverage VUP's 70+ years R&D experience for complex synthetic challenges including multi-step routes and specialized chemistries with proven track record in demanding applications.",
          },
          {
            feature: 'Quality Assured',
            description:
              'High-purity focus with rigorous QC backed by ISO 9001:2015 certified processes and SNAS S-118 accredited analytical laboratories ensuring reliable, internationally recognized results.',
          },
          {
            feature: 'Scalability',
            description:
              'Seamless transition from gram-scale synthesis to pilot-scale production with flexible manufacturing capacity up to 250 t/yr utilizing versatile pilot plant infrastructure.',
          },
          {
            feature: 'IP Security',
            description:
              'Strict confidentiality agreements and secure handling of intellectual property with proven experience in protecting client innovations and proprietary synthetic routes.',
          },
          {
            feature: 'European Partner',
            description:
              'Reliable EU-based synthesis and manufacturing services ensuring regulatory compliance, secure supply chains, and cost-effective solutions within the European market.',
          },
          {
            feature: 'Integrated Services',
            description:
              'Combined R&D, synthesis, analytical, and regulatory expertise providing comprehensive solutions from initial route development through commercial production and compliance support.',
          },
        ],
        subServices: [
          {
            title: 'Custom Synthesis',
            description:
              'Specialized synthesis of non-catalogue fine chemicals, complex intermediates, reference standards, and chemical specialties. We tackle challenging multi-step synthetic routes leveraging our deep expertise in acetylene chemistry, TEMPO derivatives, hydroxy acids, and other specialized chemistries. From route scouting and feasibility studies to laboratory-scale synthesis, we deliver high-purity compounds tailored to your specific requirements.',
            image: demoImageDoc.id,
            displayItems: [
              { item: 'Route Scouting & Feasibility Studies' },
              { item: 'Laboratory Scale Synthesis (g-kg)' },
              { item: 'High Purity Standards' },
              { item: 'Multi-step Complex Synthesis' },
            ],
            features: [
              {
                feature: 'Synthesis Expertise',
                description:
                  'Deep knowledge in complex organic synthesis including acetylene chemistry, TEMPO derivatives, and specialized functional molecules with proven commercial success.',
              },
              {
                feature: 'Scale Range',
                description:
                  'Flexible synthesis capabilities from laboratory grams to kilogram quantities with consistent quality and reproducibility across all scales.',
              },
              {
                feature: 'Purity Focus',
                description:
                  'Emphasis on achieving high purity standards tailored to client specifications with comprehensive analytical characterization and quality documentation.',
              },
            ],
            link: 'custom-synthesis',
          },
          {
            title: 'Process Development & Scale-Up',
            description:
              'Optimization of synthetic routes for improved efficiency, safety, yield, and cost-effectiveness. We provide comprehensive process development services from laboratory optimization through pilot plant validation, generating robust technological foundations for commercial production. Our experienced team combines practical chemistry knowledge with engineering expertise to ensure successful scale-up transitions.',
            image: image2Doc.id,
            displayItems: [
              { item: 'Process Optimization' },
              { item: 'Safety Assessment & Validation' },
              { item: 'Yield Improvement Studies' },
              { item: 'Scale-up Validation' },
            ],
            features: [
              {
                feature: 'Production Capacity',
                description:
                  'Pilot plant infrastructure with up to 250 t/yr capacity featuring versatile reactors and downstream processing units for comprehensive scale-up validation.',
              },
              {
                feature: 'Technical Documentation',
                description:
                  'Comprehensive process documentation including safety assessments, operating procedures, and technological foundations supporting commercial implementation.',
              },
              {
                feature: 'Risk Mitigation',
                description:
                  'Systematic approach to identifying and addressing scale-up challenges including safety considerations, equipment limitations, and process optimization opportunities.',
              },
            ],
            link: 'process-development',
          },
          {
            title: 'Small-Scale & Toll Manufacturing',
            description:
              'Reliable contract manufacturing of fine chemicals and specialties utilizing our versatile pilot plant infrastructure. We offer flexible toll manufacturing services for kilogram to multi-tonne campaigns based on established processes, whether VUP-developed or client-provided. Our ISO 9001:2015 certified manufacturing processes ensure consistent quality and reliable delivery for your production needs.',
            image: demoImageDoc.id,
            displayItems: [
              { item: 'Contract Manufacturing (kg-tonne)' },
              { item: 'Toll Processing Services' },
              { item: 'Rigorous Quality Control' },
              { item: 'Regulatory Compliance Support' },
            ],
            features: [
              {
                feature: 'Manufacturing Flexibility',
                description:
                  'Adaptable production capabilities utilizing versatile pilot plant equipment for various batch sizes and chemical processes with proven reliability.',
              },
              {
                feature: 'Quality Systems',
                description:
                  'ISO 9001:2015 certified manufacturing processes with rigorous in-process and final product QC using SNAS S-118 accredited analytical laboratories.',
              },
              {
                feature: 'Supply Chain Reliability',
                description:
                  'Secure European manufacturing base ensuring reliable supply chains, regulatory compliance, and cost-effective production within the EU market.',
              },
            ],
            link: 'toll-manufacturing',
          },
        ],
        accreditations: [
          {
            accreditation: 'ISO 9001:2015 Certification',
          },
          {
            accreditation: 'SNAS S-118 Accreditation',
          },
          {
            accreditation: 'R&D Competency Certificate',
          },
          {
            accreditation: 'Responsible Care Certification',
          },
        ],
        slug: 'custom-synthesis-manufacturing',
      },
    }),
  ])

  return {
    researchDevelopment,
    analyticalTesting,
    cosmeticsManufacturing,
    regulatoryTechnicalSupport,
    customSynthesisManufacturing,
  }
}

export type SeededServices = Awaited<ReturnType<typeof seedServices>>
