import type { Payload } from 'payload'
import type { SeededMedia } from './1-media'

export const seedServices = async (payload: Payload, media: SeededMedia) => {
  payload.logger.info('- Seeding services...')

  const {
    demoImageDoc,
    image2Doc,
    atbelImageDoc,
    customSynthesisImageDoc,
    researchDevelopmentImageDoc,
    regulatoryTechnicalSupportImageDoc,
    customCosmeticsManufacturingImageDoc,

    // Service Page Images
    RDServicePageService1Doc,
    RDServicePageService2Doc,
    RDServicePageService3Doc,
    RDServicePageService4Doc,
    RDServicePageService5Doc,
    RDServicePageService6Doc,

    ATBELServicePageService1Doc,
    ATBELServicePageService2Doc,
    ATBELServicePageService3Doc,
    ATBELServicePageService4Doc,

    CCMServicePageService1Doc,
    CCMServicePageService2Doc,
    CCMServicePageService3Doc,

    RTServicePageService1Doc,
    RTServicePageService2Doc,
    RTServicePageService3Doc,
    RTServicePageService4Doc,

    CSMServicePageService1Doc,
    CSMServicePageService2Doc,
    CSMServicePageService3Doc,
  } = media

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
        _order: '2',
        title: 'Research & Development',
        _status: 'published',
        description:
          "VUP's R&D division solves complex chemistry challenges across diverse industries.With 70+ years of chemical expertise, we transform ideas into viable technological solutions tailored to your needs.",
        featuredImage: researchDevelopmentImageDoc.id,
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
            image: RDServicePageService1Doc.id,
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
            image: RDServicePageService2Doc.id,
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
            image: RDServicePageService3Doc.id,
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
            image: RDServicePageService4Doc.id,
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
            image: RDServicePageService5Doc.id,
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
            image: RDServicePageService6Doc.id,
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
        title: 'Accredited Analytical, Technical-Safety & Environmental Services',
        _status: 'published',
        _order: '3',
        description:
          'The ATBEL (Analytical, Technical-Safety, and Environmental Laboratories) division is a specialized testing center within VUP, a.s., providing expert analytical services to both internal R&D projects and external partners. We deliver reliable, accredited results under SNAS Certificate No. S-118 (ISO/IEC 17025) and ISO 9001, ensuring the highest standards of quality and precision. Our services are led by division head Ing. Ľudovít Žiak, PhD.',
        featuredImage: atbelImageDoc.id,
        features: [
          {
            feature: 'Accredited & Certified Quality',
            description:
              'Confidence in data quality supported by SNAS S-118 (ISO/IEC 17025) accreditation and ISO 9001 certification for all analytical and laboratory testing.',
          },
          {
            feature: 'Comprehensive Service Portfolio',
            description:
              'A wide range of analytical techniques including chromatography, spectroscopy, wet chemistry, and technical-safety testing available in one facility.',
          },
          {
            feature: 'Expert Leadership & Team',
            description:
              'Led by Ing. Ľudovít Žiak, PhD., a graduate of Analytical Chemistry with over 15 years of experience, specializing in chemical analysis and workplace air sampling.',
          },
          {
            feature: 'Regulatory Compliance & Support',
            description:
              'Testing according to international standards (OECD, ISO, DIN) to support your REACH registration, workplace safety monitoring, and quality control needs.',
          },
          {
            feature: 'Problem Solving & Method Development',
            description:
              'Expert support for R&D troubleshooting, contamination analysis, and the capability to develop custom analytical methodologies for unique challenges.',
          },
        ],
        subServices: [
          {
            title: 'Chromatographic Analysis',
            description:
              'Advanced separation techniques for precise composition analysis, impurity identification, and trace analysis. We utilize Gas Chromatography (GC, GC-MS) for VOC determination (e.g., PV3341 for automotive), High-Performance Liquid Chromatography (HPLC), and Isotachophoresis (ITP) for anion determination (chlorides, sulfates). We also offer custom methodology development to meet your specific needs.',
            image: ATBELServicePageService1Doc.id,
            displayItems: [
              { item: 'Gas Chromatography (GC & GC-MS)' },
              { item: 'High-Performance Liquid Chromatography (HPLC)' },
              { item: 'Isotachophoresis (ITP) for Anions' },
              { item: 'VOC Analysis (Automotive Standard PV3341)' },
              { item: 'Impurity Identification' },
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
              'A comprehensive suite of spectroscopic techniques for substance identification, structural elucidation, and quantitative analysis. Our capabilities include Atomic Absorption Spectrometry (AAS) for metals, FT-IR and NMR for structural confirmation, and UV/VIS spectrometry for quantitative analysis and color determination (APHA, Gardner).',
            image: ATBELServicePageService2Doc.id,
            displayItems: [
              { item: 'Atomic Absorption Spectrometry (AAS)' },
              { item: 'Infrared Spectroscopy (FT-IR)' },
              { item: 'Nuclear Magnetic Resonance (NMR)' },
              { item: 'UV/VIS Spectrometry' },
              { item: 'Color Determination (APHA, Gardner)' },
            ],
            features: [
              {
                feature: 'Multi-technique Approach',
                description:
                  'Comprehensive spectroscopic suite enabling complete structural characterization and identification of unknown substances with high confidence.',
              },
              {
                feature: 'Trace Metal Analysis',
                description:
                  'Specialized atomic absorption spectrometry for the accurate determination of metals in a wide variety of sample matrices.',
              },
            ],
            link: 'spectroscopic-analysis',
          },
          {
            title: 'Physical & Technical-Safety Testing',
            description:
              'Accredited determination of physical and technical-safety parameters essential for regulatory compliance (REACH) and safety data sheets. We test according to international standards, including melting point (OECD 102), boiling point (OECD 103), density (OECD 109), vapor pressure (OECD 104), flash point (A.9), and flammability of solids (A.10).',
            image: ATBELServicePageService3Doc.id,
            displayItems: [
              { item: 'Melting & Boiling Point (OECD 102/103)' },
              { item: 'Density & Vapour Pressure (OECD 109/104)' },
              { item: 'Flash Point & Flammability (A.9/A.10)' },
              { item: 'Water Solubility & Partition Coefficient (OECD 105/107)' },
              { item: 'Workplace Atmosphere Monitoring' },
            ],
            features: [
              {
                feature: 'OECD Guideline Compliance',
                description:
                  'Testing performed according to internationally recognized OECD guidelines, ensuring data acceptance for regulatory submissions like REACH.',
              },
              {
                feature: 'Workplace Safety Monitoring',
                description:
                  'Expert sampling and measurement of chemical factors and solid aerosols in the working air to ensure occupational health and safety compliance.',
              },
            ],
            link: 'physical-safety-testing',
          },
          {
            title: 'Titrimetric & Gravimetric Analysis',
            description:
              'Classic and robust wet chemistry techniques for reliable quantitative analysis. Our services include Karl Fischer titration for water content (ISO 760), acidity number (DIN 51558), hydroxyl number (DIN 53240-2), iodometric titration for peroxides, and gravimetric determination of moisture, ash, and non-volatile residues.',
            image: ATBELServicePageService4Doc.id,
            displayItems: [
              { item: 'Karl Fischer Titration (ISO 760)' },
              { item: 'Acid & Hydroxyl Value (DIN standards)' },
              { item: 'Iodometric Titration' },
              { item: 'Gravimetric (Moisture, Ash, Residue)' },
              { item: 'Non-polar Extractable Substances' },
            ],
            features: [
              {
                feature: 'Standardized Methods',
                description:
                  'Well-established analytical techniques providing reliable and accurate quantitative results according to ISO, DIN, and other international standards.',
              },
              {
                feature: 'Essential Quality Control',
                description:
                  'Fundamental testing for raw materials, in-process monitoring, and final product quality assurance across various manufacturing industries.',
              },
            ],
            link: 'titrimetric-gravimetric',
          },
        ],
        accreditations: [
          {
            accreditation: 'SNAS S-118 (ISO/IEC 17025)',
          },
          {
            accreditation: 'ISO 9001 Certification',
          },
          {
            accreditation: 'R&D Competency Certificate',
          },
        ],
        slug: 'analytical-testing-atbel',
      },
    }),
    payload.create({
      collection: 'services',
      data: {
        title: 'Custom Cosmetics Manufacturing',
        _status: 'published',
        _order: '5',
        description:
          "Leverage VUP's 70+ years of chemical production experience and dedicated cosmetics expertise (since 1990) for your custom cosmetic manufacturing needs.",
        featuredImage: customCosmeticsManufacturingImageDoc.id,
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
            image: CCMServicePageService1Doc.id,
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
          // {
          //   title: 'Private Label Services',
          //   description:
          //     'Custom formulation and manufacturing of unique cosmetic products based on your specifications and requirements. Our experienced team utilizes dedicated development laboratories to create tailored formulations incorporating desired ingredients, functions, and market trends such as natural extracts, paraben-free formulations, and hypoallergenic solutions. We provide comprehensive support from initial concept through finished product, including custom packaging solutions and regulatory compliance assistance.',
          //   image: CCMServicePageService2Doc.id,
          //   displayItems: [
          //     { item: 'Custom Formulation Development' },
          //     { item: 'Product Range Expertise' },
          //     { item: 'Regulatory Compliance Support' },
          //     { item: 'Packaging Customization' },
          //   ],
          //   features: [
          //     {
          //       feature: 'Expert Formulation Team',
          //       description:
          //         'Skilled cosmetic chemists and formulation experts led by experienced professionals creating innovative solutions tailored to your brand vision and target market requirements.',
          //     },
          //     {
          //       feature: 'Comprehensive Product Range',
          //       description:
          //         'Proven capability across skin care products, massage oils and gels, medical diagnostic gels, and openness to developing new formulation types based on client needs.',
          //     },
          //     {
          //       feature: 'End-to-End Support',
          //       description:
          //         'Complete turnkey solutions from initial formulation through production, packaging, quality control, and regulatory documentation including CPNP notification support.',
          //     },
          //   ],
          //   link: 'private-label',
          // },
          {
            title: 'Quality Assurance & Compliance',
            description:
              'Rigorous quality management ensuring adherence to European cosmetic legislation and medical device requirements. Our comprehensive quality system includes in-house microbiological testing according to international standards (STN ISO 21527-2, STN EN ISO 21149), raw material and product quality control via SNAS S-118 accredited ATBEL laboratories using advanced analytical techniques (GC-MS, HPLC, FT-IR), and complete documentation supporting regulatory compliance including Certificates of Analysis and Product Information File elements.',
            image: CCMServicePageService3Doc.id,
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
        _order: '4',
        _status: 'published',
        description:
          'Navigate complex chemical regulations and overcome technical hurdles with expert support combining deep regulatory knowledge and 70+ years of R&D expertise.',
        featuredImage: regulatoryTechnicalSupportImageDoc.id,
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
            image: RTServicePageService1Doc.id,
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
            image: RTServicePageService2Doc.id,
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
            image: RTServicePageService3Doc.id,
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
            image: RTServicePageService4Doc.id,
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
        _order: '1',
        _status: 'published',
        description:
          'Partner with VUP for expert custom chemical synthesis and reliable small-scale manufacturing in Europe. Complex chemistry, reliably delivered.',
        featuredImage: customSynthesisImageDoc.id,
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
            image: CSMServicePageService1Doc.id,
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
            image: CSMServicePageService2Doc.id,
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
            image: CSMServicePageService3Doc.id,
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

  // Add Slovak translations
  payload.logger.info('- Adding Slovak translations for services...')

  // Slovak translation for Research & Development
  await payload.update({
    id: researchDevelopment.id,
    collection: 'services',
    locale: 'sk',
    data: {
      title: 'Výskum a vývoj',
      description:
        'Divízia VUP pre výskum a vývoj rieši komplexné chemické výzvy v rôznych priemyselných odvetviach. S viac ako 70-ročnými skúsenosťami v oblasti chémie transformujeme nápady na životaschopné technologické riešenia prispôsobené vašim potrebám.',
      features: [
        {
          feature: 'Skúsenosti',
          description:
            'Viac ako 70 rokov odborných znalostí v chemickom vývoji a inovácii s preukázateľnou históriou riešenia komplexných chemických výziev',
        },
        {
          feature: 'Udelené patenty',
          description:
            'Viac ako 900 patentov dokazujúcich naše inovačné schopnosti a záväzok k pokroku v chemickej vede',
        },
        {
          feature: 'Riadenie kvality',
          description:
            'ISO 9001 certifikované procesy zabezpečujúce konzistentnú kvalitu a spoľahlivé vykonávanie projektov vo všetkých aktivitách výskumu a vývoja',
        },
        {
          feature: 'Pilotná kapacita',
          description:
            'Kapacita 250 t/rok pre škálovanie procesov a validáciu s vyhradenými pilotními zariadeniami pre komplexné testovanie',
        },
        {
          feature: 'Integrované riešenia',
          description:
            'Bezproblémová podpora od analytických služieb po výrobné schopnosti, poskytujúca kompletné technologické základy pre komercializáciu',
        },
        {
          feature: 'Overená história úspechov',
          description:
            'Úspešná spolupráca s popredných medzinárodných partnermi vrátane DSM, UPM a Perstorp v rôznych chemických sektoroch',
        },
      ],
      subServices: [
        {
          title: 'Prieskum ciest a uskutočniteľnosť',
          description:
            'Odborné hodnotenie a návrh syntetických ciest prostredníctvom komplexného literárneho výskumu, analýzy patentov a praktických chemických odborných znalostí na identifikáciu optimálnych ciest pre vaše cieľové zlúčeniny. Náš skúsený tím vykonáva dôkladné štúdie uskutočniteľnosti, hodnotí technické riziká a komerčnú životaschopnosť na zabezpečenie najefektívnejšieho a nákladovo najefektívnejšieho syntetického prístupu pre vaše špecifické požiadavky.',
          image: RDServicePageService1Doc.id,
          displayItems: [
            { item: 'Literárna a patentová analýza' },
            { item: 'Návrh syntetickej cesty' },
            { item: 'Hodnotenie technických rizík' },
            { item: 'Hodnotenie komerčnej uskutočniteľnosti' },
          ],
          features: [
            {
              feature: 'Komplexný výskum',
              description:
                'Rozsiahla literárna a patentová analýza kombinovaná s praktickými chemickými poznatkami na identifikáciu najsľubnejších syntetických ciest pri vyhýbaní sa potenciálnym konfliktom duševného vlastníctva.',
            },
            {
              feature: 'Zmierňovanie rizík',
              description:
                'Podrobné technické a komerčné hodnotenie rizík vrátane bezpečnostných úvah, regulačných požiadaviek a výziev škálovateľnosti na minimalizáciu neistôt projektu.',
            },
            {
              feature: 'Odborné hodnotenie',
              description:
                'Praktické chemické poznatky od skúsených špecialistov s hlbokými znalosťami v petrochémii, organickej syntéze a vývoji špecializovaných chemikálií.',
            },
          ],
          link: 'route-scouting',
        },
        {
          title: 'Zákazková syntéza',
          description:
            'Laboratórna syntéza nových a známych zlúčenín, medziprodukty a chemické špeciality od gramov po kilogramy, s odbornosťou v komplexnej viacstupňovej syntéze a náročnej chémii. Naše flexibilné laboratórne nastavenia a skúsení chemici zvládajú náročné syntetické výzvy vrátane acetylénovej chémie, TEMPO derivátov, metylolalkánových kyselín a ďalších špecializovaných chemických transformácií.',
          image: RDServicePageService2Doc.id,
          displayItems: [
            { item: 'Rozsah od gramov po kilogramy' },
            { item: 'Komplexná viacstupňová syntéza' },
            { item: 'Vývoj nových zlúčenín' },
            { item: 'Výroba medziprodukty' },
          ],
          features: [
            {
              feature: 'Flexibilita škály',
              description:
                'Schopnosť od miligramov po kilogramy s konzistentnou kvalitou a reprodukovateľnosťou, využívajúc flexibilné laboratórne syntetické nastavenia prispôsobené špecifickým požiadavkám projektu.',
            },
            {
              feature: 'Komplexná chémia',
              description:
                'Odbornosť v náročných reagencie, viacstupňových reakciách a špecializovaných oblastiach vrátane acetylénovej chémie, TEMPO derivátov a polyuretánových katalyzátorov.',
            },
            {
              feature: 'Zabezpečenie kvality',
              description:
                'Komplexná analytická podpora prostredníctvom našej SNAS-akreditovanej divízie ATBEL zabezpečujúca čistotu produktu a súlad so špecifikáciami počas celého procesu syntézy.',
            },
          ],
          link: 'custom-synthesis',
        },
        {
          title: 'Vývoj a optimalizácia procesov',
          description:
            'Vývoj bezpečných, efektívnych a škálovateľných syntetických procesov so zameraním na optimalizáciu reakčných podmienok, zlepšenie výťažkov a čistoty, zníženie nákladov a implementáciu princípov zelenej chémie. Náš tím sa špecializuje na reakčnú kalorimetriu, optimalizáciu destilácie, štúdie kryštalizácie a stratégie eliminácie rozpúšťadiel na vytvorenie robustných, environmentálne uvedomelých výrobných procesov.',
          image: RDServicePageService3Doc.id,
          displayItems: [
            { item: 'Optimalizácia reakcií' },
            { item: 'Zlepšenie výťažkov' },
            { item: 'Zníženie nákladov' },
            { item: 'Implementácia zelenej chémie' },
          ],
          features: [
            {
              feature: 'Efektívnosť procesov',
              description:
                'Optimalizácia reakčných podmienok, výberu katalyzátorov a parametrov procesov na maximalizáciu efektívnosti pri zachovaní kvality produktu a bezpečnostných štandardov.',
            },
            {
              feature: 'Zameranie na udržateľnosť',
              description:
                'Implementácia princípov zelenej chémie vrátane eliminácie rozpúšťadiel, zníženia odpadu a energeticky efektívnych procesov na minimalizáciu environmentálneho dopadu.',
            },
            {
              feature: 'Zvýšenie bezpečnosti',
              description:
                'Vývoj bezpečných a spoľahlivých syntetických procesov s komplexnými meraniami bezpečnostných parametrov a protokolmi hodnotenia rizík.',
            },
          ],
          link: 'process-development',
        },
        {
          title: 'Škálovanie a verifikácia procesov',
          description:
            'Validácia procesov v laboratórnom a pilotnom meradle využívajúc pilotné kapacity až do 250 t/rok pre špecifické produkty, zber základných dát pre technologické základy a komerčnú životaschopnosť. Naše vyhradené pilotné zariadenia poskytujú komplexnú verifikáciu procesov, umožňujúc bezproblémový transfer technológií a zníženie rizík komerčného škálovania výroby.',
          image: RDServicePageService4Doc.id,
          displayItems: [
            { item: 'Validácia pilotného závodu' },
            { item: 'Generovanie údajov pre škálovanie' },
            { item: 'Verifikácia procesov' },
            { item: 'Podpora transferu technológií' },
          ],
          features: [
            {
              feature: 'Pilotné zariadenia',
              description:
                'Vyhradené zariadenia s kapacitou až 250 t/rok vybavené flexibilnými reaktorovými systémami pre komplexnú verifikáciu procesov a validáciu škálovania.',
            },
            {
              feature: 'Generovanie údajov',
              description:
                'Komplexné zbieranie údajov vrátane reakčnej kinetiky, prenosu tepla, hmotnostnej bilancie a bezpečnostných parametrov na vytvorenie pevných technologických základov.',
            },
            {
              feature: 'Komerčná pripravenosť',
              description:
                'Validačné protokoly a podpora transferu technológií zabezpečujúca bezproblémový prechod z pilotného mierka na komerčnú výrobu s minimalizovanými technickými rizikami.',
            },
          ],
          link: 'process-scale-up',
        },
        {
          title: 'Vývoj analytických metód',
          description:
            'Vytváranie a validácia analytických metód pre suroviny, medziprodukty a finálne produkty v spolupráci s našou SNAS-akreditovanou divíziou ATBEL, zabezpečujúc spoľahlivú kontrolu kvality počas celého vývoja. Naše komplexné analytické schopnosti zahŕňajú GC, LC, GC-MS, FT-IR, NMR a špecializované testovacie metódy prispôsobené na podporu vašich požiadaviek výskumu a vývoja a výroby.',
          image: RDServicePageService5Doc.id,
          displayItems: [
            { item: 'Vytvorenie a validácia metód' },
            { item: 'Analýza surovín' },
            { item: 'Kontrola kvality produktov' },
            { item: 'SNAS akreditované testovanie' },
          ],
          features: [
            {
              feature: 'Akreditované laboratórium',
              description:
                'SNAS akreditovaná divízia ATBEL poskytujúca spoľahlivé analytické služby s komplexnými systémami riadenia kvality a certifikovanými postupmi.',
            },
            {
              feature: 'Komplexná analýza',
              description:
                'Plné spektrum analytických schopností vrátane GC, LC, NMR, FT-IR, AAS, titrácie a fyzikálno-bezpečnostného testovania na podporu všetkých fáz chemického vývoja.',
            },
            {
              feature: 'Validácia metód',
              description:
                'Prísne validačné protokoly zabezpečujúce spoľahlivosť, presnosť a presnosť metód podľa medzinárodných štandardov a regulačných požiadaviek.',
            },
          ],
          link: 'analytical-method-development',
        },
        {
          title: 'Purifikácia a izolácia',
          description:
            'Vývoj komplexných stratégií na dosiahnutie požadovanej čistoty produktu prostredníctvom pokročilých separačných techník vrátane destilácie, kryštalizácie, filtrácie a extrakčných metód. Naša odbornosť v purifikačných procesoch zabezpečuje optimálnu kvalitu produktu pri zachovaní nákladovej efektívnosti a škálovateľnosti pre komerčné aplikácie.',
          image: RDServicePageService6Doc.id,
          displayItems: [
            { item: 'Optimalizácia destilácie' },
            { item: 'Štúdie kryštalizácie' },
            { item: 'Pokročilá filtrácia' },
            { item: 'Extrakčné metódy' },
          ],
          features: [
            {
              feature: 'Pokročilé techniky',
              description:
                'Odbornosť v mnohých purifikačných metódach vrátane frakčnej destilácie, rekryštalizácie, chromatografickej separácie a technológií membránovej filtrácie.',
            },
            {
              feature: 'Optimalizácia čistoty',
              description:
                'Systematický prístup k dosiahnutiu cieľových úrovní čistoty pri optimalizácii výťažku a minimalizácii odpadu prostredníctvom prispôsobených purifikačných stratégií.',
            },
            {
              feature: 'Zameranie na škálovateľnosť',
              description:
                'Vývoj purifikačných procesov s ohľadom na komerčnú škálovateľnosť, zabezpečujúc hladký prechod z laboratória na produkčné mierka.',
            },
          ],
          link: 'purification-isolation',
        },
      ],
      accreditations: [
        {
          accreditation: 'ISO 9001 certifikácia',
        },
        {
          accreditation: 'Certifikát kompetentnosti výskumu a vývoja',
        },
        {
          accreditation: 'SNAS akreditácia',
        },
      ],
    },
  })

  // Slovak translation for Analytical Testing Services
  await payload.update({
    id: analyticalTesting.id,
    collection: 'services',
    locale: 'sk',
    data: {
      title: 'Akreditované analytické, technickobezpečnostné a environmentálne služby',
      description:
        'Divízia ATBEL (Analytické, technickobezpečnostné a environmentálne laboratóriá) je špecializované testovacie centrum v rámci VUP, a.s., poskytujúce odborné analytické služby pre interné projekty výskumu a vývoja aj externých partnerov. Dodávame spoľahlivé, akreditované výsledky podľa Certifikátu SNAS č. S-118 (ISO/IEC 17025) a ISO 9001, zabezpečujúce najvyššie štandardy kvality a presnosti. Naše služby vedie vedúci divízie Ing. Ľudovít Žiak, PhD.',
      features: [
        {
          feature: 'Akreditovaná a certifikovaná kvalita',
          description:
            'Dôvera v kvalitu údajov podporená akreditáciou SNAS S-118 (ISO/IEC 17025) a certifikáciou ISO 9001 pre všetky analytické a laboratórne testovanie.',
        },
        {
          feature: 'Komplexné portfólio služieb',
          description:
            'Široká škála analytických techník vrátane chromatografie, spektroskopie, mokrej chémie a technickobezpečnostného testovania dostupných v jednom zariadení.',
        },
        {
          feature: 'Odborné vedenie a tím',
          description:
            'Vedené Ing. Ľudovítom Žiakom, PhD., absolventom analytickej chémie s viac ako 15-ročnými skúsenosťami, špecializujúcim sa na chemickú analýzu a odbery vzoriek vzduchu na pracovisku.',
        },
        {
          feature: 'Regulačná súlad a podpora',
          description:
            'Testovanie podľa medzinárodných štandardov (OECD, ISO, DIN) na podporu vašej registrácie REACH, monitorovania bezpečnosti na pracovisku a potrieb kontroly kvality.',
        },
        {
          feature: 'Riešenie problémov a vývoj metód',
          description:
            'Odborná podpora pre riešenie problémov výskumu a vývoja, analýzu kontaminácie a schopnosť vyvíjať vlastné analytické metodiky pre jedinečné výzvy.',
        },
      ],
      subServices: [
        {
          title: 'Chromatografická analýza',
          description:
            'Pokročilé chromatografické techniky vrátane plynové chromatografie (GC, GC-MS), vysokoúčinnej kvapalinové chromatografie (HPLC) a izotachoforézy (ITP) pre analýzu zloženia, stanovenie VOC, identifikáciu nečistôt a stanovenie aniónov. Naše najmodernejšie vybavenie umožňuje presnú analýzu komplexných zmesí s možnosťami vývoja metód.',
          image: ATBELServicePageService1Doc.id,
          displayItems: [
            { item: 'Plynová chromatografia (GC, GC-MS)' },
            { item: 'Vysokoúčinná kvapalinová chromatografia (HPLC)' },
            { item: 'Izotachoforéza (ITP)' },
            { item: 'Analýza VOC (PV3341)' },
          ],
          features: [
            {
              feature: 'Pokročilé prístrojové vybavenie',
              description:
                'Moderné GC, HPLC a GC-MS systémy pre presnú analýzu zloženia, identifikáciu nečistôt a stopovú analýzu s vynikajúcou citlivosťou a reprodukovateľnosťou.',
            },
            {
              feature: 'Vývoj metód',
              description:
                'Schopnosti vývoja a validácie vlastných analytických metód na splnenie špecifických požiadaviek klientov a regulačných štandardov.',
            },
          ],
          link: 'chromatographic-analysis',
        },
        {
          title: 'Spektroskopická analýza',
          description:
            'Komplexná spektroskopická analýza pomocou atómovej absorpčnej spektrometrie (AAS), infračervenej spektroskopie (FT-IR), nukleárnej magnetickej rezonancie (NMR), UV/VIS spektrometrie a hmotnostnej spektrometrie pre identifikáciu látok, stanovenie kovov a štrukturálnu analýzu. Naše spektroskopické schopnosti podporujú potreby kvalitatívnej aj kvantitatívnej analýzy.',
          image: ATBELServicePageService2Doc.id,
          displayItems: [
            { item: 'Atómová absorpčná spektrometria (AAS)' },
            { item: 'Infračervená spektroskopia (FT-IR)' },
            { item: 'Nukleárna magnetická rezonancia (NMR)' },
            { item: 'UV/VIS spektrometria' },
          ],
          features: [
            {
              feature: 'Viacetechnický prístup',
              description:
                'Komplexný spektroskopický súbor umožňujúci úplnú štrukturálnu charakterizáciu a identifikáciu neznámych látok s vysokou spoľahlivosťou.',
            },
            {
              feature: 'Analýza kovov',
              description:
                'Špecializované schopnosti atómovej absorpčnej spektrometrie pre presné stanovenie kovov v rôznych vzorkových matriciach.',
            },
          ],
          link: 'spectroscopic-analysis',
        },
        {
          title: 'Fyzikálne a technickobezpečnostné testovanie',
          description:
            'Stanovenie fyzikálnych vlastností a technickobezpečnostné testovanie podľa OECD a ISO štandardov vrátane bodu topenia, bodu varu, hustoty, tlaku pár, povrchového napätia, rozpustnosti vo vode, bodu vzplanutia a testovania horľavosti. Nevyhnutné pre regulačnú súladu, bezpečnostné hodnotenia a charakterizáciu produktov naprieč viacerými priemyslami.',
          image: ATBELServicePageService3Doc.id,
          displayItems: [
            { item: 'Fyzikálne vlastnosti (OECD štandardy)' },
            { item: 'Bod vzplanutia a horľavosť' },
            { item: 'Monitorovanie atmosféry na pracovisku' },
            { item: 'Testovanie súlady s REACH' },
          ],
          features: [
            {
              feature: 'Súlada s OECD',
              description:
                'Testovanie podľa medzinárodne uznávaných smerníc OECD zabezpečujúcich regulačnú súladu pre registráciu chemikálií a bezpečnostné hodnotenia.',
            },
            {
              feature: 'Bezpečnostné monitorovanie',
              description:
                'Špecializované monitorovanie atmosféry na pracovisku a meranie chemických faktorov na zabezpečenie súlady s bezpečnosťou a ochranou zdravia pri práci.',
            },
          ],
          link: 'physical-safety-testing',
        },
        {
          title: 'Titrimetrická a gravimetrická analýza',
          description:
            'Klasické analytické techniky vrátane Karl Fischer titrácie pre stanovenie obsahu vody, merania kyslosti a hydroxylového čísla, jodometrických titrácií a gravimetrických stanovení pre vlhkosť, popol a extrahovateľné látky. Tieto overené metódy poskytujú spoľahlivú kvantitatívnu analýzu pre kontrolu kvality a testovanie špecifikácií.',
          image: ATBELServicePageService4Doc.id,
          displayItems: [
            { item: 'Karl Fischer titrácia' },
            { item: 'Kyslé a hydroxylové číslo' },
            { item: 'Gravimetrické stanovenia' },
            { item: 'Obsah vlhkosti a popola' },
          ],
          features: [
            {
              feature: 'Overené metódy',
              description:
                'Dobre zavedené analytické techniky poskytujúce spoľahlivé a presné kvantitatívne výsledky pre rutinnú kontrolu kvality a testovanie špecifikácií.',
            },
            {
              feature: 'Kontrola kvality',
              description:
                'Nevyhnutné testovanie pre suroviny, kontrolu procesu a zabezpečenie kvality finálnych produktov naprieč rôznymi priemyslami.',
            },
          ],
          link: 'titrimetric-gravimetric',
        },
      ],
      accreditations: [
        {
          accreditation: 'SNAS S-118 akreditácia',
        },
        {
          accreditation: 'ISO 9001 certifikácia',
        },
        {
          accreditation: 'Certifikát kompetentnosti výskumu a vývoja',
        },
      ],
    },
  })

  // Slovak translation for Custom Cosmetics Manufacturing
  await payload.update({
    id: cosmeticsManufacturing.id,
    collection: 'services',
    locale: 'sk',
    data: {
      title: 'Zákazková výroba kozmetiky',
      description:
        'Využite 70+ ročné skúsenosti VUP s chemickou výrobou a špecializovanú odbornosť v kozmetike (od roku 1990) pre vaše potreby zákazkovej výroby kozmetiky.',
      features: [
        {
          feature: 'Overené skúsenosti',
          description:
            'Viac ako 70 rokov skúseností s chemickou výrobou s vyhradený oddelenie kozmetiky od roku 1990, pôsobiace ako hlavný výrobca ochranných krémov na ruky na Slovensku a v Českej republike',
        },
        {
          feature: 'Certifikovaná kvalita',
          description:
            'ISO 9001:2015 certifikovaná výroba s prísnymi kontrolami kvality a dodržiavaním európskej kozmetickej legislatívy zabezpečujúcich súladné, vysokkokvalitné produkty',
        },
        {
          feature: 'Ocenené produkty',
          description:
            'Slovenská zlatá medaila víťazné Peggy masážne gély a overené formulácie vrátane Fortea krémov na ruky, telových mliečok a diagnostických gélov pre medicínu',
        },
        {
          feature: 'Škálovateľná výroba',
          description:
            'Flexibilná výrobná kapacita od malých šarží po veľkomierknu výrobu s možnosťami balenia vrátane tub, fliaš, dávkovačov a kanistrov',
        },
        {
          feature: 'Vývojové schopnosti',
          description:
            'Vlastné formulačné laboratóriá s expertními kozmetickými chemikmi vytvárajúcimi zákazkové riešenia na základe špecifikácií klientov, trhových trendov a regulačných požiadaviek',
        },
        {
          feature: 'Odbornosť medicínskej kvality',
          description:
            'Špecializovaná výroba medicínskych a diagnostických gélov vrátane sonografických gélov (Gelson) a EKG/EEG vodivých gélov s certifikátmi zdravia',
        },
      ],
      subServices: [
        {
          title: 'Služby bielej značky',
          description:
            'Značkovanie a predaj existujúcich, trhovotestovaných kozmetických formulácií VUP vrátane ocenených produktov. Naše portfólio bielych značiek obsahuje overené formulácie ako Fortea krémy na ruky a telové mliečka s rôznymi prírodnými extraktmi a propolisom, Fortea masážne oleje s esenciálnymi olejmi, slovenskou zlatou medailou ocenené Peggy masážne gély s rastlinnými extraktmi (nechtík, gaštan, kapsaicín, mentol, kostihoj, arnika) a medicínske diagnostické gély vrátane bezalkoholového Gelson sonografického gélu a EV EKG/EEG vodivého gélu.',
          image: CCMServicePageService1Doc.id,
          displayItems: [
            { item: 'Fortea krémy na ruky a telové mliečka' },
            { item: 'Ocenené Peggy masážne gély' },
            { item: 'Fortea masážne oleje' },
            { item: 'Medicínske diagnostické gély (Gelson, EV Gél)' },
          ],
          features: [
            {
              feature: 'Trhovo testované formuly',
              description:
                'Overené formulácie s etablovaným trhovým úspechom vrátane ocenených produktov a hlavného podiel na trhu ochranných krémov na ruky na Slovensku a v Českej republike.',
            },
            {
              feature: 'Rýchly vstup na trh',
              description:
                'Rýchlejší čas uvedenia na trh s existujúcimi formuláciami, ktoré prešli prísnym testovaním a verifikáciou súlady, znižujúc čas vývoja a regulačné riziká.',
            },
            {
              feature: 'Rozmanitý produktový sortiment',
              description:
                'Komplexné portfólio pokrývajúce starostlivosť o pokožku, masážne produkty a medicínske diagnostické gély s rôznymi prírodnými extraktmi, esenciálnymi olejmi a špecializovanými formuláciami.',
            },
          ],
          link: 'white-label',
        },
        // {
        //   title: 'Služby súkromnej značky',
        //   description:
        //     'Zákazková formulácia a výroba jedinečných kozmetických produktov na základe vašich špecifikácií a požiadaviek. Náš skúsený tím využíva vyhradené vývojové laboratóriá na vytvorenie prispôsobených formulácií zahŕňajúcich požadované ingrediencie, funkcie a trhové trendy ako prírodné extrakty, formulácie bez parabénov a hypoalergénne riešenia. Poskytujeme komplexnú podporu od počiatočnej koncepcie cez hotový produkt, vrátane zákazkových baliacich riešení a asistencie s regulačnou súladou.',
        //   image: CCMServicePageService2Doc.id,
        //   displayItems: [
        //     { item: 'Vývoj zákazkovej formulácie' },
        //     { item: 'Odbornosť produktového sortimentu' },
        //     { item: 'Podpora regulačnej súlady' },
        //     { item: 'Prispôsobenie balenia' },
        //   ],
        //   features: [
        //     {
        //       feature: 'Expertný formulačný tím',
        //       description:
        //         'Zručný kozmetickí chemici a formulační experti vedení skúsenými profesionálmi vytvárajúci inovačné riešenia prispôsobené vašej vízii značky a požiadavkám cieľového trhu.',
        //     },
        //     {
        //       feature: 'Komplexný produktový sortiment',
        //       description:
        //         'Overená schopnosť naprieč produktmi starostlivosti o pokožku, masážnymi olejmi a gélmi, medicínskymi diagnostickými gélmi a otvorenosť rozvíjať nové typy formulácií na základe potrieb klientov.',
        //     },
        //     {
        //       feature: 'Podpora od začiatku do konca',
        //       description:
        //         'Kompletné riešenia na kľúč od počiatočnej formulácie cez výrobu, balenie, kontrolu kvality a regulačnú dokumentáciu vrátane podpory notifikácie CPNP.',
        //     },
        //   ],
        //   link: 'private-label',
        // },
        {
          title: 'Zabezpečenie kvality a súlada',
          description:
            'Prísne riadenie kvality zabezpečujúce dodržiavanie európskej kozmetickej legislatívy a požiadaviek na zdravotnícke pomôcky. Náš komplexný systém kvality zahŕňa vlastné mikrobiologické testovanie podľa medzinárodných štandardov (STN ISO 21527-2, STN EN ISO 21149), kontrolu kvality surovín a produktov prostredníctvom SNAS S-118 akreditovaných laboratórií ATBEL používajúcich pokročilé analytické techniky (GC-MS, HPLC, FT-IR) a kompletnú dokumentáciu podporujúcu regulačnú súladu vrátane certifikátov analýzy a prvkov súboru informácií o produkte.',
          image: CCMServicePageService3Doc.id,
          displayItems: [
            { item: 'Európska regulačná súlada' },
            { item: 'Mikrobiologické testovanie' },
            { item: 'Akreditované analytické testovanie' },
            { item: 'Kompletná dokumentácia' },
          ],
          features: [
            {
              feature: 'Certifikované systémy kvality',
              description:
                'ISO 9001:2015 certifikovaný systém riadenia kvality pokrývajúci kozmetickú výrobu s certifikáciou Responsible Care zabezpečujúcou konzistentnú kvalitu a environmentálnu zodpovednosť.',
            },
            {
              feature: 'Pokročilé testovacie schopnosti',
              description:
                'Vlastné mikrobiologické laboratóriá a SNAS S-118 akreditované analytické zariadenia poskytujúce komplexnú kontrolu kvality od surovín po hotové produkty.',
            },
            {
              feature: 'Regulačná odbornosť',
              description:
                'Hlboké porozumenie európskych kozmetických predpisov a požiadaviek na zdravotnícke pomôcky s overenou históriou vrátane certifikátov zdravia pre medicínske produkty ako Gelson gél.',
            },
          ],
          link: 'quality-compliance',
        },
      ],
      accreditations: [
        {
          accreditation: 'ISO 9001:2015 certifikácia',
        },
        {
          accreditation: 'SNAS S-118 akreditácia',
        },
        {
          accreditation: 'Responsible Care certifikácia',
        },
        {
          accreditation: 'Certifikát kompetentnosti výskumu a vývoja',
        },
      ],
    },
  })

  // Slovak translation for Regulatory & Technical Support
  await payload.update({
    id: regulatoryTechnicalSupport.id,
    collection: 'services',
    locale: 'sk',
    data: {
      title: 'Regulačná a technická podpora',
      description:
        'Navigujte v komplexných chemických predpisoch a prekonajte technické prekážky s odbornou podporou kombinujúcou hlboké regulačné znalosti a viac ako 70-ročné skúsenosti s výskumom a vývojom.',
      features: [
        {
          feature: 'Odbornosť REACH',
          description:
            'Overené skúsenosti s úspešnými registráciami REACH vrátane DMPA, DMBA a TEMPO derivátov, poskytujúcich praktické usmernenia založené na skutočných dosiahnuých úspechoch v súlade.',
        },
        {
          feature: 'Akreditované testovanie',
          description:
            'SNAS S-118 akreditované analytické, technickobezpečnostné a ekologické laboratóriá poskytujúce spoľahlivé údaje pre regulačné podania a dokumentáciu súlady.',
        },
        {
          feature: 'Certifikovaná kvalita',
          description:
            'ISO 9001:2015 certifikovaný systém riadenia kvality zabezpečujúci konzistentné poskytovanie služieb a spoľahlivé konzultačné procesy naprieč všetkými aktivitami regulačnej a technickej podpory.',
        },
        {
          feature: 'Priemyselné uznanie',
          description:
            'Certifikácia Responsible Care a certifikát kompetentnosti výskumu a vývoja od Ministerstva školstva dokazujúci záväzok k bezpečnosti, životnému prostrediu a technickej dokonalosti.',
        },
        {
          feature: 'Expertný tím',
          description:
            'Priamy prístup k skúseným vedúcim oddelení výskumu a vývoja, analytiky a komerčných operácií s krížovofunkčnou odbornosťou v regulačnej súlade a riešení technických problémov.',
        },
        {
          feature: 'Komplexná podpora',
          description:
            'Podpora od začiatku do konca od počiatočného regulačného hodnotenia cez poskytovanie technických údajov po finálnu dokumentáciu súlady a pokračujúce konzultačné služby.',
        },
      ],
      subServices: [
        {
          title: 'Podpora súlady s REACH',
          description:
            'Komplexné usmernenia REACH založené na priamych skúsenostiach VUP s úspešnými úplnými a medziľahlými registráciami. Poskytujeme praktickú podporu pre zbieranie údajov, prípravu súborov a vývoj stratégie súlady, využívajúc naš overený track record s látkami ako DMPA, DMBA a TEMPO deriváty. Naše akreditované laboratóriá zabezpečujú spoľahlivé technické údaje pre regulačné podania.',
          image: RTServicePageService1Doc.id,
          displayItems: [
            { item: 'Vývoj registračnej stratégie' },
            { item: 'Generovanie technických údajov' },
            { item: 'Podpora prípravy súborov' },
            { item: 'Hodnotenie súlady' },
          ],
          features: [
            {
              feature: 'Overené skúsenosti',
              description:
                'Priame skúsenosti s úspešnými registráciami REACH naprieč viacerými kategóriami látok, poskytujúcich praktické poznatky a overené stratégie pre súladu.',
            },
            {
              feature: 'Generovanie údajov',
              description:
                'Prístup k SNAS S-118 akreditovaným laboratóriám pre generovanie spoľahlivých fyzikálno-chemických, technickobezpečnostných a ekologických údajov potrebných pre podania REACH.',
            },
            {
              feature: 'Strategické usmernenia',
              description:
                'Odborné konzultácie o registračných stratégiách, požiadavkách na údaje a nákladovo efektívnych prístupoch k splneniu povinností REACH pri minimalizácii regulačných rizík.',
            },
          ],
          link: 'reach-compliance',
        },
        {
          title: 'Systémy riadenia kvality',
          description:
            'Odborné konzultácie pre implementáciu a udržiavanie systémov riadenia kvality ISO 9001 v chemických prostrediach výskumu a vývoja a výroby. Čerpajúc z našich vlastných skúseností s certifikáciou ISO 9001:2015, poskytujeme praktické usmernenia pre vytvorenie robustných procesov kvality, dokumentačných systémov a rámcov neustáleho zlepšovania prispôsobených požiadavkám chemického priemyslu.',
          image: RTServicePageService2Doc.id,
          displayItems: [
            { item: 'Implementácia ISO 9001' },
            { item: 'Vývoj procesov kvality' },
            { item: 'Dokumentačné systémy' },
            { item: 'Príprava na audity' },
          ],
          features: [
            {
              feature: 'Praktické skúsenosti',
              description:
                'Usmernenia založené na našej vlastnej úspešnej implementácii a udržiavaní ISO 9001:2015 naprieč operáciami výskumu a vývoja, výroby a analytického testovania.',
            },
            {
              feature: 'Špecifické pre priemysel',
              description:
                'Prispôsobené prístupy pre riadenie kvality chemického priemyslu rieršiace jedinečné výzvy v prostrediach výskumu a vývoja, výroby a analytického testovania.',
            },
          ],
          link: 'quality-management',
        },
        {
          title: 'Bezpečnostná a environmentálna súlada',
          description:
            'Komplexná podpora pre bezpečnosť chemikálií a environmentálnu súladu vrátane hodnotení bezpečnosti na pracovisku, hodnotení environmentálnych dopadov a regulačných usmernení. Naša certifikácia Responsible Care a rozsiahle schopnosti bezpečnostného testovania zabezpečujú spoľahlivé usmernenia pre bezpečné manipuláciu, skladovanie, likvidáciu a opatrenia ochrany životného prostredia naprieč chemickými operáciami.',
          image: RTServicePageService3Doc.id,
          displayItems: [
            { item: 'Podpora hodnotenia bezpečnosti' },
            { item: 'Hodnotenie environmentálnych dopadov' },
            { item: 'Monitorovanie atmosféry na pracovisku' },
            { item: 'Implementácia Responsible Care' },
          ],
          features: [
            {
              feature: 'Certifikovaná odbornosť',
              description:
                'Certifikácia Responsible Care dokazujúca záväzok k bezpečnosti a ochrane životného prostredia s overenou implementačnou skúsenosťou.',
            },
            {
              feature: 'Testovacie schopnosti',
              description:
                'Prístup k akreditovanému bezpečnostnému testovaniu vrátane monitorovania atmosféry na pracovisku, stanovenia bodu vzplanutia a hodnotení environmentálnych dopadov.',
            },
          ],
          link: 'safety-environmental',
        },
        {
          title: 'Technické konzultácie',
          description:
            'Hĺbkové technické konzultácie využívajúce viac ako 70-ročné skúsenosti s chemickým výskumom a vývojom a analytické schopnosti na riešenie komplexných produktových a procesných výziev. Náš skúsený tím poskytuje odborné rady o chemických procesoch, optimalizácii produktov, riešení problémov a vývoji aplikácií, podporené komplexným analytickým testovaním a poskytovaním technických údajov z našich akreditovaných laboratórií.',
          image: RTServicePageService4Doc.id,
          displayItems: [
            { item: 'Optimalizácia procesov' },
            { item: 'Podpora vývoja produktov' },
            { item: 'Riešenie technických problémov' },
            { item: 'Usmernenia aplikácií' },
          ],
          features: [
            {
              feature: 'Odbornosť výskumu a vývoja',
              description:
                'Prístup k viac ako 70-ročným skúsenostiam s chemickým výskumom a vývojom s overeným track recordom v komplexnej syntéze, vývoji procesov a optimalizácii produktov naprieč rôznymi chemickými sektormi.',
            },
            {
              feature: 'Analytická podpora',
              description:
                'Komplexné analytické schopnosti prostredníctvom SNAS S-118 akreditovaných laboratórií poskytujúcich technické údaje, podporu riešenia problémov a služby charakterizácie produktov.',
            },
            {
              feature: 'Krížovofunkčné tímy',
              description:
                'Kolaboratívny prístup kombinujúci regulačné povedomie, technickú hĺbku a analytickú odbornosť na poskytovanie komplexných riešení pre komplexné technické výzvy.',
            },
          ],
          link: 'technical-consultation',
        },
      ],
      accreditations: [
        {
          accreditation: 'ISO 9001:2015 certifikácia',
        },
        {
          accreditation: 'SNAS S-118 akreditácia',
        },
        {
          accreditation: 'Responsible Care certifikácia',
        },
        {
          accreditation: 'Certifikát kompetentnosti výskumu a vývoja',
        },
      ],
    },
  })

  // Slovak translation for Custom Synthesis & Manufacturing
  await payload.update({
    id: customSynthesisManufacturing.id,
    collection: 'services',
    locale: 'sk',
    data: {
      title: 'Zákazková syntéza a výroba',
      description:
        'Spolupracujte s VUP na odbornej zákazkovej chemickej syntéze a spoľahlivej malomierknej výrobe v Európe. Komplexná chémia, spoľahlivo dodávaná.',
      features: [
        {
          feature: 'Expertné riešenie problémov',
          description:
            'Využite viac ako 70-ročné skúsenosti VUP s výskumom a vývojom pre komplexné syntetické výzvy vrátane viacstupňových ciest a špecializovaných chémií s overeným track recordom v náročných aplikáciách.',
        },
        {
          feature: 'Zabezpečená kvalita',
          description:
            'Zameranie na vysokú čistotu s prísnou kontrolou kvality podporenou ISO 9001:2015 certifikovanými procesmi a SNAS S-118 akreditovanými analytickými laboratóriami zabezpečujúcimi spoľahlivé, medzinárodne uznávané výsledky.',
        },
        {
          feature: 'Škálovateľnosť',
          description:
            'Bezproblémový prechod od syntézy v gramovom meradle po pilotnu výrobu s flexibilnou výrobnou kapacitou až do 250 t/rok využívajúc všestrannú infraštruktúru pilotného závodu.',
        },
        {
          feature: 'Bezpečnosť duševného vlastníctva',
          description:
            'Prísne dohody o dôvernosti a bezpečné zaobchádzanie s duševným vlastníctvom s overenými skúsenosťami v ochrane inovácií klientov a proprietárnych syntetických ciest.',
        },
        {
          feature: 'Európsky partner',
          description:
            'Spoľahlivé služby syntézy a výroby so sídlom v EÚ zabezpečujúce regulačnú súladu, bezpečné dodávateľské reťazce a nákladovo efektívne riešenia v rámci európskeho trhu.',
        },
        {
          feature: 'Integrované služby',
          description:
            'Kombinovaná odbornosť výskumu a vývoja, syntézy, analytiky a regulácie poskytujúca komplexné riešenia od počiatočného vývoja cesty po komerčnú výrobu a podporu súlady.',
        },
      ],
      subServices: [
        {
          title: 'Zákazková syntéza',
          description:
            'Špecializovaná syntéza nekatalógových jemných chemikálií, komplexných medziprodukty, referenčných štandardov a chemických špecialít. Riešíme náročné viacstupňové syntetické cesty využívajúc našu hlbokú odbornosť v acetylénovej chémii, TEMPO derivátoch, hydroxykyselinách a ďalších špecializovaných chémiách. Od prieskumu ciest a štúdií uskutočniteľnosti po laboratórnu syntézu dodávame vysokočisté zlúčeniny prispôsobené vašim špecifickým požiadavkám.',
          image: CSMServicePageService1Doc.id,
          displayItems: [
            { item: 'Prieskum ciest a štúdie uskutočniteľnosti' },
            { item: 'Laboratórna syntéza (g-kg)' },
            { item: 'Štandardy vysokej čistoty' },
            { item: 'Viacstupňová komplexná syntéza' },
          ],
          features: [
            {
              feature: 'Odbornosť syntézy',
              description:
                'Hlboké znalosti v komplexnej organickej syntéze vrátane acetylénovej chémie, TEMPO derivátov a špecializovaných funkčných molekúl s overeným komerčným úspechom.',
            },
            {
              feature: 'Rozsah škály',
              description:
                'Flexibilné schopnosti syntézy od laboratórnych gramov po kilogramové množstvá s konzistentnou kvalitou a reprodukovateľnosťou naprieč všetkými škálami.',
            },
            {
              feature: 'Zameranie na čistotu',
              description:
                'Dôraz na dosiahnutie štandardov vysokej čistoty prispôsobených špecifikáciám klientov s komplexnou analytickou charakterizáciou a dokumentáciou kvality.',
            },
          ],
          link: 'custom-synthesis',
        },
        {
          title: 'Vývoj procesov a škálovanie',
          description:
            'Optimalizácia syntetických ciest pre zlepšenú efektívnosť, bezpečnosť, výťažok a nákladovú efektívnosť. Poskytujeme komplexné služby vývoja procesov od laboratórnej optimalizácie cez validáciu pilotného závodu, generujúc robustné technologické základy pre komerčnú výrobu. Náš skúsený tím kombinuje praktické chemické znalosti s inžinierskou odbornosťou na zabezpečenie úspešných prechodov na škálovanie.',
          image: CSMServicePageService2Doc.id,
          displayItems: [
            { item: 'Optimalizácia procesov' },
            { item: 'Hodnotenie a validácia bezpečnosti' },
            { item: 'Štúdie zlepšenia výťažkov' },
            { item: 'Validácia škálovania' },
          ],
          features: [
            {
              feature: 'Výrobná kapacita',
              description:
                'Infraštruktúra pilotného závodu s kapacitou až 250 t/rok s všestrannými reaktormi a jednotkami následného spracovania pre komplexnú validáciu škálovania.',
            },
            {
              feature: 'Technická dokumentácia',
              description:
                'Komplexná dokumentácia procesov vrátane hodnotení bezpečnosti, prevádzkových postupov a technologických základov podporujúcich komerčnú implementáciu.',
            },
            {
              feature: 'Zmierňovanie rizík',
              description:
                'Systematický prístup k identifikácii a riešeniu výziev škálovania vrátane bezpečnostných úvah, obmedzení zariadení a príležitostí optimalizácie procesov.',
            },
          ],
          link: 'process-development',
        },
        {
          title: 'Malomierknú a mýtnu výroba',
          description:
            'Spoľahlivá zmluvná výroba jemných chemikálií a špecialít využívajúc našu všestrannú infraštruktúru pilotného závodu. Ponúkame flexibilné služby mýtnej výroby pre kampane od kilogramov po viactonových na základe etablovaných procesov, či už vyvinutých VUP alebo poskytnutých klientom. Naše ISO 9001:2015 certifikované výrobné procesy zabezpečujú konzistentnú kvalitu a spoľahlivé dodávky pre vaše výrobné potreby.',
          image: CSMServicePageService3Doc.id,
          displayItems: [
            { item: 'Zmluvná výroba (kg-tona)' },
            { item: 'Služby mýtneho spracovania' },
            { item: 'Prísna kontrola kvality' },
            { item: 'Podpora regulačnej súlady' },
          ],
          features: [
            {
              feature: 'Flexibilita výroby',
              description:
                'Adaptabilné výrobné schopnosti využívajúce všestranné zariadenia pilotného závodu pre rôzne veľkosti šarží a chemické procesy s overenou spoľahlivosťou.',
            },
            {
              feature: 'Systémy kvality',
              description:
                'ISO 9001:2015 certifikované výrobné procesy s prísnou kontrolou kvality počas procesu a finálneho produktu využívajúc SNAS S-118 akreditované analytické laboratóriá.',
            },
            {
              feature: 'Spoľahlivosť dodávateľského reťazca',
              description:
                'Bezpečná európska výrobná základňa zabezpečujúca spoľahlivé dodávateľské reťazce, regulačnú súladu a nákladovo efektívnu výrobu v rámci európskeho trhu.',
            },
          ],
          link: 'toll-manufacturing',
        },
      ],
      accreditations: [
        {
          accreditation: 'ISO 9001:2015 certifikácia',
        },
        {
          accreditation: 'SNAS S-118 akreditácia',
        },
        {
          accreditation: 'Certifikát kompetentnosti výskumu a vývoja',
        },
        {
          accreditation: 'Responsible Care certifikácia',
        },
      ],
    },
  })

  // Add Japanese translations
  payload.logger.info('- Adding Japanese translations for services...')

  // Japanese translation for Research & Development
  await payload.update({
    id: researchDevelopment.id,
    collection: 'services',
    locale: 'jp',
    data: {
      title: '研究開発',
      description:
        'VUPの研究開発部門は、多様な産業にわたる複雑な化学的課題を解決します。70年以上の化学専門知識により、お客様のニーズに合わせた実用的な技術ソリューションにアイデアを変換します。',
      features: [
        {
          feature: '経験',
          description:
            '複雑な化学的課題を解決する実績を持つ化学開発とイノベーションにおける70年以上の専門知識',
        },
        {
          feature: '特許取得',
          description: '化学科学の進歩への革新能力とコミットメントを実証する900件以上の特許',
        },
        {
          feature: '品質管理',
          description:
            'すべての研究開発活動において一貫した品質と信頼性のあるプロジェクト実行を保証するISO 9001認証プロセス',
        },
        {
          feature: 'パイロット容量',
          description:
            '包括的なテストのための専用パイロットプラント施設を備えたプロセススケールアップと検証のための250 t/年の容量',
        },
        {
          feature: '統合ソリューション',
          description:
            '分析サービスから生産能力まで、商業化のための完全な技術基盤を提供するシームレスなサポート',
        },
        {
          feature: '実績ある成功記録',
          description:
            'DSM、UPM、Perstorpを含む多様な化学セクターにわたる主要な国際パートナーとの成功した協力',
        },
      ],
      subServices: [
        {
          title: 'ルート探索と実現可能性',
          description:
            '包括的な文献調査、特許分析、実用的な化学専門知識を通じて、目標化合物の最適な経路を特定する合成ルートの専門的評価と設計。経験豊富なチームが徹底的な実現可能性研究を実施し、技術的リスクと商業的実行可能性を評価して、お客様の特定の要件に最も効率的で費用対効果の高い合成アプローチを確保します。',
          image: RDServicePageService1Doc.id,
          displayItems: [
            { item: '文献・特許分析' },
            { item: '合成ルート設計' },
            { item: '技術リスク評価' },
            { item: '商業的実現可能性評価' },
          ],
          features: [
            {
              feature: '包括的研究',
              description:
                '知的財産紛争を回避しながら最も有望な合成ルートを特定するため、実用的な化学洞察と組み合わせた広範囲な文献と特許分析。',
            },
            {
              feature: 'リスク軽減',
              description:
                'プロジェクトの不確実性を最小限に抑えるため、安全性考慮事項、規制要件、スケーラビリティ課題を含む詳細な技術的・商業的リスク評価。',
            },
            {
              feature: '専門評価',
              description:
                '石油化学、有機合成、専門化学品開発における深い知識を持つ経験豊富な専門家からの実用的な化学洞察。',
            },
          ],
          link: 'route-scouting',
        },
        {
          title: 'カスタム合成',
          description:
            'グラムからキログラムまでの新規および既知化合物、中間体、化学特殊品の実験室規模合成、複雑な多段階合成と困難な化学における専門知識。当社の柔軟な実験室設定と経験豊富な化学者は、アセチレン化学、TEMPO誘導体、メチロールアルカン酸、その他の専門化学変換を含む要求の厳しい合成課題を処理します。',
          image: RDServicePageService2Doc.id,
          displayItems: [
            { item: 'グラムからキログラムスケール' },
            { item: '複雑な多段階合成' },
            { item: '新規化合物開発' },
            { item: '中間体生産' },
          ],
          features: [
            {
              feature: 'スケール柔軟性',
              description:
                '特定のプロジェクト要件に適応した柔軟な実験室合成設定を利用して、一貫した品質と再現性でミリグラムからキログラムまでの能力。',
            },
            {
              feature: '複雑な化学',
              description:
                'アセチレン化学、TEMPO誘導体、ポリウレタン触媒を含む困難な試薬、多段階反応、専門分野における専門知識。',
            },
            {
              feature: '品質保証',
              description:
                '合成プロセス全体を通じて製品純度と仕様適合性を保証するSNAS認定ATBEL部門による包括的な分析サポート。',
            },
          ],
          link: 'custom-synthesis',
        },
        {
          title: 'プロセス開発と最適化',
          description:
            '反応条件の最適化、収率と純度の向上、コスト削減、グリーンケミストリー原則の実施に焦点を当てた安全で効率的でスケーラブルな合成プロセスの開発。当社のチームは反応熱量測定、蒸留最適化、結晶化研究、溶媒除去戦略を専門とし、堅牢で環境に配慮した製造プロセスを作成します。',
          image: RDServicePageService3Doc.id,
          displayItems: [
            { item: '反応最適化' },
            { item: '収率改善' },
            { item: 'コスト削減' },
            { item: 'グリーンケミストリー実装' },
          ],
          features: [
            {
              feature: 'プロセス効率',
              description:
                '製品品質と安全基準を維持しながら効率を最大化するための反応条件、触媒選択、プロセスパラメータの最適化。',
            },
            {
              feature: '持続可能性重視',
              description:
                '環境への影響を最小限に抑えるため、溶媒除去、廃棄物削減、エネルギー効率的プロセスを含むグリーンケミストリー原則の実装。',
            },
            {
              feature: '安全性向上',
              description:
                '包括的な安全パラメータ測定とリスク評価プロトコルによる安全で信頼性の高い合成プロセスの開発。',
            },
          ],
          link: 'process-development',
        },
        {
          title: 'プロセススケールアップと検証',
          description:
            '特定製品の最大250 t/年のパイロット容量を利用した実験室とパイロットプラントスケールでのプロセス検証、技術基盤と商業的実行可能性のための重要データの収集。当社の専用パイロットプラント施設は包括的なプロセス検証を提供し、シームレスな技術移転と商業生産スケールアップのリスク軽減を可能にします。',
          image: RDServicePageService4Doc.id,
          displayItems: [
            { item: 'パイロットプラント検証' },
            { item: 'スケールアップデータ生成' },
            { item: 'プロセス検証' },
            { item: '技術移転サポート' },
          ],
          features: [
            {
              feature: 'パイロットプラント施設',
              description:
                '包括的なプロセス検証とスケールアップ検証のための柔軟な反応器システムを備えた最大250 t/年の容量を持つ専用施設。',
            },
            {
              feature: 'データ生成',
              description:
                '堅実な技術基盤を確立するための反応動力学、熱移動、物質収支、安全パラメータを含む包括的なデータ収集。',
            },
            {
              feature: '商業準備性',
              description:
                '技術的リスクを最小化してパイロットスケールから商業生産への シームレスな移行を保証する検証プロトコルと技術移転サポート。',
            },
          ],
          link: 'process-scale-up',
        },
        {
          title: '分析方法開発',
          description:
            'SNAS認定ATBEL部門との協力により、原材料、中間体、最終製品の分析方法を作成・検証し、開発全体を通じて信頼性の高い品質管理を保証。当社の包括的な分析能力には、お客様の研究開発と生産要件をサポートするためにカスタマイズされたGC、LC、GC-MS、FT-IR、NMR、専門テスト方法が含まれます。',
          image: RDServicePageService5Doc.id,
          displayItems: [
            { item: '方法作成・検証' },
            { item: '原材料分析' },
            { item: '製品品質管理' },
            { item: 'SNAS認定テスト' },
          ],
          features: [
            {
              feature: '認定実験室',
              description:
                '包括的な品質管理システムと認定手順で信頼性の高い分析サービスを提供するSNAS認定ATBEL部門。',
            },
            {
              feature: '包括的分析',
              description:
                '化学開発のすべての段階をサポートするGC、LC、NMR、FT-IR、AAS、滴定、物理安全テストを含む全スペクトラム分析能力。',
            },
            {
              feature: '方法検証',
              description:
                '国際基準と規制要件に従って方法の信頼性、正確性、精度を保証する厳格な検証プロトコル。',
            },
          ],
          link: 'analytical-method-development',
        },
        {
          title: '精製と分離',
          description:
            '蒸留、結晶化、濾過、抽出方法を含む高度な分離技術により、望ましい製品純度を達成するための包括的戦略の開発。精製プロセスにおける当社の専門知識は、商業応用のコスト効率性とスケーラビリティを維持しながら最適な製品品質を保証します。',
          image: RDServicePageService6Doc.id,
          displayItems: [
            { item: '蒸留最適化' },
            { item: '結晶化研究' },
            { item: '高度濾過' },
            { item: '抽出方法' },
          ],
          features: [
            {
              feature: '高度技術',
              description:
                '分別蒸留、再結晶、クロマトグラフィー分離、膜濾過技術を含む複数の精製方法における専門知識。',
            },
            {
              feature: '純度最適化',
              description:
                'カスタマイズされた精製戦略により収率を最適化し廃棄物を最小化しながら目標純度レベルを達成する体系的アプローチ。',
            },
            {
              feature: 'スケーラビリティ重視',
              description:
                '実験室から生産スケールへのスムーズな移行を保証する商業スケーラビリティを念頭に置いた精製プロセスの開発。',
            },
          ],
          link: 'purification-isolation',
        },
      ],
      accreditations: [
        {
          accreditation: 'ISO 9001認証',
        },
        {
          accreditation: '研究開発能力証明書',
        },
        {
          accreditation: 'SNAS認定',
        },
      ],
    },
  })

  // Japanese translation for Analytical Testing Services
  await payload.update({
    id: analyticalTesting.id,
    collection: 'services',
    locale: 'jp',
    data: {
      title: '認定分析、技術安全、環境サービス',
      description:
        'ATBEL（分析、技術安全、環境ラボ）部門は、VUP, a.s.内の専門テストセンターであり、内部研究開発プロジェクトと外部パートナーの両方に専門的な分析サービスを提供しています。SNAS証明書No. S-118（ISO/IEC 17025）とISO 9001に基づく信頼性の高い認定結果を提供し、最高水準の品質と精度を保証します。当社のサービスは部門長Ing. Ľudovít Žiak, PhD.が率いています。',
      features: [
        {
          feature: '認定・認証品質',
          description:
            'すべての分析およびラボテストに対するSNAS S-118（ISO/IEC 17025）認定とISO 9001認証に支えられたデータ品質への信頼。',
        },
        {
          feature: '包括的サービスポートフォリオ',
          description:
            'クロマトグラフィー、分光法、湿式化学、技術安全テストを含む幅広い分析技術を一つの施設で利用可能。',
        },
        {
          feature: '専門的リーダーシップとチーム',
          description:
            '化学分析と職場空気サンプリングを専門とする15年以上の経験を持つ分析化学の卒業生Ing. Ľudovít Žiak, PhD.が率いる。',
        },
        {
          feature: '規制コンプライアンスとサポート',
          description:
            'REACH登録、職場安全モニタリング、品質管理ニーズをサポートするための国際基準（OECD、ISO、DIN）に従ったテスト。',
        },
        {
          feature: '問題解決と方法開発',
          description:
            '研究開発トラブルシューティング、汚染分析、および独自の課題に対するカスタム分析方法を開発する能力のための専門サポート。',
        },
      ],
      subServices: [
        {
          title: 'クロマトグラフィー分析',
          description:
            'ガスクロマトグラフィー（GC、GC-MS）、高性能液体クロマトグラフィー（HPLC）、等速電気泳動（ITP）を含む高度なクロマトグラフィー技術による組成分析、VOC測定、不純物同定、陰イオン測定。最先端設備により、方法開発機能を持つ複雑な混合物の精密分析が可能です。',
          image: ATBELServicePageService1Doc.id,
          displayItems: [
            { item: 'ガスクロマトグラフィー（GC、GC-MS）' },
            { item: '高性能液体クロマトグラフィー（HPLC）' },
            { item: '等速電気泳動（ITP）' },
            { item: 'VOC分析（PV3341）' },
          ],
          features: [
            {
              feature: '高度な機器',
              description:
                '優れた感度と再現性で精密な組成分析、不純物同定、微量分析のための最新のGC、HPLC、GC-MSシステム。',
            },
            {
              feature: '方法開発',
              description:
                '特定のクライアント要件と規制基準を満たすためのカスタム分析方法開発と検証機能。',
            },
          ],
          link: 'chromatographic-analysis',
        },
        {
          title: '分光分析',
          description:
            '原子吸光分光法（AAS）、赤外分光法（FT-IR）、核磁気共鳴（NMR）、UV/VIS分光法、質量分析法を用いた物質同定、金属測定、構造分析のための包括的分光分析。当社の分光能力は定性・定量分析の両方のニーズをサポートします。',
          image: ATBELServicePageService2Doc.id,
          displayItems: [
            { item: '原子吸光分光法（AAS）' },
            { item: '赤外分光法（FT-IR）' },
            { item: '核磁気共鳴（NMR）' },
            { item: 'UV/VIS分光法' },
          ],
          features: [
            {
              feature: 'マルチ技術アプローチ',
              description:
                '高い信頼性で未知物質の完全な構造特性化と同定を可能にする包括的分光スイート。',
            },
            {
              feature: '金属分析',
              description:
                '様々なサンプルマトリックス中の金属の正確な測定のための専門的原子吸光分光能力。',
            },
          ],
          link: 'spectroscopic-analysis',
        },
        {
          title: '物理・技術安全テスト',
          description:
            '融点、沸点、密度、蒸気圧、表面張力、水溶解度、引火点、可燃性テストを含むOECDとISO基準による物理特性測定と技術安全テスト。複数の産業にわたる規制コンプライアンス、安全評価、製品特性化に必須。',
          image: ATBELServicePageService3Doc.id,
          displayItems: [
            { item: '物理特性（OECD基準）' },
            { item: '引火点・可燃性' },
            { item: '職場環境モニタリング' },
            { item: 'REACHコンプライアンステスト' },
          ],
          features: [
            {
              feature: 'OECDコンプライアンス',
              description:
                '化学物質登録と安全評価のための規制コンプライアンスを保証する国際的に認められたOECDガイドラインに従ったテスト。',
            },
            {
              feature: '安全モニタリング',
              description:
                '労働安全衛生コンプライアンスを保証するための専門的職場環境モニタリングと化学因子測定。',
            },
          ],
          link: 'physical-safety-testing',
        },
        {
          title: '滴定・重量分析',
          description:
            '水分測定のためのカールフィッシャー滴定、酸価・水酸基価測定、ヨード滴定、水分・灰分・抽出可能物質の重量測定を含む古典的分析技術。これらの実証済み方法は品質管理と仕様テストのための信頼性の高い定量分析を提供します。',
          image: ATBELServicePageService4Doc.id,
          displayItems: [
            { item: 'カールフィッシャー滴定' },
            { item: '酸価・水酸基価' },
            { item: '重量測定' },
            { item: '水分・灰分含量' },
          ],
          features: [
            {
              feature: '実証済み方法',
              description:
                '日常的な品質管理と仕様テストのための信頼性が高く正確な定量結果を提供する確立された分析技術。',
            },
            {
              feature: '品質管理',
              description:
                '様々な産業にわたる原材料、工程内モニタリング、最終製品品質保証のための必須テスト。',
            },
          ],
          link: 'titrimetric-gravimetric',
        },
      ],
      accreditations: [
        {
          accreditation: 'SNAS S-118認定',
        },
        {
          accreditation: 'ISO 9001認証',
        },
        {
          accreditation: '研究開発能力証明書',
        },
      ],
    },
  })

  // Japanese translation for Custom Cosmetics Manufacturing
  await payload.update({
    id: cosmeticsManufacturing.id,
    collection: 'services',
    locale: 'jp',
    data: {
      title: 'カスタム化粧品製造',
      description:
        'VUPの70年以上の化学製造経験と専門的な化粧品技術（1990年から）をお客様のカスタム化粧品製造ニーズにご活用ください。',
      features: [
        {
          feature: '実証済み経験',
          description:
            '70年以上の化学製造専門知識と1990年からの専門化粧品部門により、スロバキアとチェコ共和国の保護ハンドクリームの主要生産者として活動',
        },
        {
          feature: '品質認証',
          description:
            'ISO 9001:2015認証製造による厳格な品質管理とヨーロッパ化粧品法規制の遵守により、コンプライアンスの取れた高品質製品を保証',
        },
        {
          feature: '受賞製品',
          description:
            'スロバキア金賞受賞のPeggyマッサージジェルと実証済み処方（Forteaハンドクリーム、ボディローション、医療診断ジェルを含む）',
        },
        {
          feature: 'スケーラブル生産',
          description:
            '小ロットから大規模生産まで柔軟な製造能力、チューブ、ボトル、ディスペンサー、キャニスターを含む包装オプション',
        },
        {
          feature: '開発能力',
          description:
            'クライアント仕様、市場トレンド、規制要件に基づくカスタムソリューションを作成する専門化粧品化学者による社内処方ラボ',
        },
        {
          feature: '医療グレード専門知識',
          description:
            '超音波検査ジェル（Gelson）およびECG/EEG導電ジェルを含む医療・診断ジェルの専門生産（健康証明書付き）',
        },
      ],
      subServices: [
        {
          title: 'ホワイトラベルサービス',
          description:
            '受賞製品を含むVUPの既存の市場テスト済み化粧品処方のブランド化と販売。当社のホワイトラベルポートフォリオには、様々な天然エキスとプロポリスを含むForteaハンドクリームとボディローション、エッセンシャルオイルを含むForteaマッサージオイル、植物エキス（マリーゴールド、栗、カプサイシン、メントール、コンフリー、アルニカ）を含むスロバキア金賞受賞Peggyマッサージジェル、アルコールフリーGelson超音波検査ジェルとEV ECG/EEG導電ジェルを含む医療診断ジェルなど、実証済み処方が含まれています。',
          image: CCMServicePageService1Doc.id,
          displayItems: [
            { item: 'Forteaハンドクリーム・ボディローション' },
            { item: '受賞歴のあるPeggyマッサージジェル' },
            { item: 'Forteaマッサージオイル' },
            { item: '医療診断ジェル（Gelson、EVジェル）' },
          ],
          features: [
            {
              feature: '市場テスト済み処方',
              description:
                '受賞製品とスロバキア・チェコ共和国の保護ハンドクリーム市場での主要シェアを含む確立された市場成功を持つ実証済み処方。',
            },
            {
              feature: '迅速な市場参入',
              description:
                '厳格なテストとコンプライアンス検証を経た既存処方による市場投入時間の短縮、開発時間と規制リスクの削減。',
            },
            {
              feature: '多様な製品ライン',
              description:
                '様々な天然エキス、エッセンシャルオイル、専門処方を持つスキンケア、マッサージ製品、医療診断ジェルをカバーする包括的ポートフォリオ。',
            },
          ],
          link: 'white-label',
        },
        // {
        //   title: 'プライベートラベルサービス',
        //   description:
        //     'お客様の仕様と要件に基づくユニークな化粧品製品のカスタム処方と製造。経験豊富なチームが専用開発ラボを利用して、天然エキス、パラベンフリー処方、低アレルギー性ソリューションなどの望ましい成分、機能、市場トレンドを組み込んだカスタマイズ処方を作成します。初期コンセプトから完成品まで、カスタム包装ソリューションと規制コンプライアンス支援を含む包括的サポートを提供します。',
        //   image: CCMServicePageService2Doc.id,
        //   displayItems: [
        //     { item: 'カスタム処方開発' },
        //     { item: '製品ライン専門知識' },
        //     { item: '規制コンプライアンスサポート' },
        //     { item: '包装カスタマイゼーション' },
        //   ],
        //   features: [
        //     {
        //       feature: '専門処方チーム',
        //       description:
        //         'ブランドビジョンとターゲット市場要件に合わせた革新的ソリューションを作成する経験豊富な専門家による熟練化粧品化学者と処方専門家。',
        //     },
        //     {
        //       feature: '包括的製品ライン',
        //       description:
        //         'スキンケア製品、マッサージオイル・ジェル、医療診断ジェルにわたる実証済み能力とクライアントニーズに基づく新しい処方タイプの開発への開放性。',
        //     },
        //     {
        //       feature: 'エンドツーエンドサポート',
        //       description:
        //         '初期処方から生産、包装、品質管理、CPNP通知サポートを含む規制文書まで、完全なターンキーソリューション。',
        //     },
        //   ],
        //   link: 'private-label',
        // },
        {
          title: '品質保証とコンプライアンス',
          description:
            'ヨーロッパ化粧品法規制と医療機器要件の遵守を保証する厳格な品質管理。当社の包括的品質システムには、国際基準（STN ISO 21527-2、STN EN ISO 21149）による社内微生物テスト、高度な分析技術（GC-MS、HPLC、FT-IR）を使用するSNAS S-118認定ATBELラボによる原材料・製品品質管理、分析証明書と製品情報ファイル要素を含む規制コンプライアンスをサポートする完全な文書化が含まれます。',
          image: CCMServicePageService3Doc.id,
          displayItems: [
            { item: 'ヨーロッパ規制コンプライアンス' },
            { item: '微生物テスト' },
            { item: '認定分析テスト' },
            { item: '完全な文書化' },
          ],
          features: [
            {
              feature: '認証品質システム',
              description:
                '一貫した品質と環境責任を保証するResponsible Care認証を伴う化粧品生産をカバーするISO 9001:2015認証品質管理システム。',
            },
            {
              feature: '高度テスト能力',
              description:
                '原材料から完成品までの包括的品質管理を提供する社内微生物ラボとSNAS S-118認定分析施設。',
            },
            {
              feature: '規制専門知識',
              description:
                'Gelsonジェルなどの医療製品の健康証明書を含む実証済み実績を持つEU化粧品規制と医療機器要件の深い理解。',
            },
          ],
          link: 'quality-compliance',
        },
      ],
      accreditations: [
        {
          accreditation: 'ISO 9001:2015認証',
        },
        {
          accreditation: 'SNAS S-118認定',
        },
        {
          accreditation: 'Responsible Care認証',
        },
        {
          accreditation: '研究開発能力証明書',
        },
      ],
    },
  })

  // Japanese translation for Regulatory & Technical Support
  await payload.update({
    id: regulatoryTechnicalSupport.id,
    collection: 'services',
    locale: 'jp',
    data: {
      title: '規制・技術サポート',
      description:
        '深い規制知識と70年以上の研究開発専門知識を組み合わせた専門サポートにより、複雑な化学規制をナビゲートし、技術的ハードルを克服します。',
      features: [
        {
          feature: 'REACH専門知識',
          description:
            'DMPA、DMBA、TEMPO誘導体を含む成功したREACH登録の実証済み経験により、実際のコンプライアンス達成に基づく実用的ガイダンスを提供。',
        },
        {
          feature: '認定テスト',
          description:
            'SNAS S-118認定分析、技術安全、生態学的ラボが規制申請とコンプライアンス文書のための信頼性の高いデータを提供。',
        },
        {
          feature: '品質認証',
          description:
            'ISO 9001:2015認証品質管理システムがすべての規制・技術サポート活動にわたって一貫したサービス提供と信頼性の高いコンサルテーションプロセスを保証。',
        },
        {
          feature: '業界認定',
          description:
            '教育省からのResponsible Care認証と研究開発能力証明書により、安全性、環境、技術的卓越性へのコミットメントを実証。',
        },
        {
          feature: '専門チーム',
          description:
            '規制コンプライアンスと技術問題解決における分野横断的専門知識を持つ研究開発、分析、商業運営の経験豊富な部門長への直接アクセス。',
        },
        {
          feature: '包括的サポート',
          description:
            '初期規制評価から技術データ提供、最終コンプライアンス文書、継続的コンサルテーションサービスまでのエンドツーエンドサポート。',
        },
      ],
      subServices: [
        {
          title: 'REACHコンプライアンスサポート',
          description:
            '成功した完全・中間登録におけるVUPの直接経験に基づく包括的REACHガイダンス。DMPA、DMBA、TEMPO誘導体などの物質での実証済み実績を活用して、データ収集、書類準備、コンプライアンス戦略開発のための実用的サポートを提供します。当社の認定ラボが規制申請のための信頼性の高い技術データを保証します。',
          image: RTServicePageService1Doc.id,
          displayItems: [
            { item: '登録戦略開発' },
            { item: '技術データ生成' },
            { item: '書類準備サポート' },
            { item: 'コンプライアンス評価' },
          ],
          features: [
            {
              feature: '実証済み経験',
              description:
                '複数の物質カテゴリにわたる成功したREACH登録の直接経験により、コンプライアンスのための実用的洞察と実証済み戦略を提供。',
            },
            {
              feature: 'データ生成',
              description:
                'REACH申請に必要な信頼性の高い物理化学、技術安全、生態学データ生成のためのSNAS S-118認定ラボへのアクセス。',
            },
            {
              feature: '戦略ガイダンス',
              description:
                '規制リスクを最小化しながらREACH義務を満たすための登録戦略、データ要件、費用効果的アプローチに関する専門コンサルテーション。',
            },
          ],
          link: 'reach-compliance',
        },
        {
          title: '品質管理システム',
          description:
            '化学研究開発・生産環境におけるISO 9001品質管理システムの実装と維持のための専門コンサルテーション。当社自身のISO 9001:2015認証経験から得た知見により、化学業界要件に合わせた堅牢な品質プロセス、文書システム、継続的改善フレームワークの確立のための実用的ガイダンスを提供します。',
          image: RTServicePageService2Doc.id,
          displayItems: [
            { item: 'ISO 9001実装' },
            { item: '品質プロセス開発' },
            { item: '文書システム' },
            { item: '監査準備' },
          ],
          features: [
            {
              feature: '実用的経験',
              description:
                '研究開発、生産、分析テスト運営にわたる当社自身の成功したISO 9001:2015実装と維持に基づくガイダンス。',
            },
            {
              feature: '業界特化',
              description:
                '研究開発、製造、分析テスト環境における独特な課題に対応する化学業界品質管理のためのカスタマイズアプローチ。',
            },
          ],
          link: 'quality-management',
        },
        {
          title: '安全・環境コンプライアンス',
          description:
            '職場安全評価、環境影響評価、規制ガイダンスを含む化学安全・環境コンプライアンスのための包括的サポート。当社のResponsible Care認証と広範囲な安全テスト能力により、化学運営にわたる安全な取扱い、保管、廃棄、環境保護対策のための信頼性の高いガイダンスを保証します。',
          image: RTServicePageService3Doc.id,
          displayItems: [
            { item: '安全評価サポート' },
            { item: '環境影響評価' },
            { item: '職場環境モニタリング' },
            { item: 'Responsible Care実装' },
          ],
          features: [
            {
              feature: '認定専門知識',
              description:
                '実証済み実装経験を持つ安全・環境保護へのコミットメントを実証するResponsible Care認証。',
            },
            {
              feature: 'テスト能力',
              description:
                '職場環境モニタリング、引火点測定、環境影響評価を含む認定安全テストへのアクセス。',
            },
          ],
          link: 'safety-environmental',
        },
        {
          title: '技術コンサルテーション',
          description:
            '70年以上の化学研究開発専門知識と分析能力を活用した複雑な製品・プロセス課題解決のための詳細技術コンサルテーション。経験豊富なチームが、認定ラボからの包括的分析テストと技術データ提供に支えられて、化学プロセス、製品最適化、トラブルシューティング、アプリケーション開発に関する専門アドバイスを提供します。',
          image: RTServicePageService4Doc.id,
          displayItems: [
            { item: 'プロセス最適化' },
            { item: '製品開発サポート' },
            { item: '技術問題解決' },
            { item: 'アプリケーションガイダンス' },
          ],
          features: [
            {
              feature: '研究開発専門知識',
              description:
                '多様な化学セクターにわたる複雑な合成、プロセス開発、製品最適化での実証済み実績を持つ70年以上の化学研究開発経験へのアクセス。',
            },
            {
              feature: '分析サポート',
              description:
                '技術データ、トラブルシューティングサポート、製品特性化サービスを提供するSNAS S-118認定ラボによる包括的分析能力。',
            },
            {
              feature: '分野横断チーム',
              description:
                '複雑な技術課題のための包括的ソリューション提供のため、規制認識、技術的深さ、分析専門知識を組み合わせた協力的アプローチ。',
            },
          ],
          link: 'technical-consultation',
        },
      ],
      accreditations: [
        {
          accreditation: 'ISO 9001:2015認証',
        },
        {
          accreditation: 'SNAS S-118認定',
        },
        {
          accreditation: 'Responsible Care認証',
        },
        {
          accreditation: '研究開発能力証明書',
        },
      ],
    },
  })

  // Japanese translation for Custom Synthesis & Manufacturing
  await payload.update({
    id: customSynthesisManufacturing.id,
    collection: 'services',
    locale: 'jp',
    data: {
      title: 'カスタム合成・製造',
      description:
        'VUPと協力して、ヨーロッパでの専門的なカスタム化学合成と信頼性の高い小規模製造を実現。複雑な化学、確実な納品。',
      features: [
        {
          feature: '専門的問題解決',
          description:
            '要求の厳しいアプリケーションでの実証済み実績を持つ、多段階ルートや専門化学を含む複雑な合成課題のためのVUPの70年以上の研究開発経験の活用。',
        },
        {
          feature: '品質保証',
          description:
            'ISO 9001:2015認証プロセスとSNAS S-118認定分析ラボに裏付けられた高純度重視と厳格な品質管理により、信頼性の高い国際的に認められた結果を保証。',
        },
        {
          feature: 'スケーラビリティ',
          description:
            '多用途パイロットプラントインフラを利用した最大250 t/年の柔軟な製造能力により、グラムスケール合成からパイロットスケール生産へのシームレスな移行。',
        },
        {
          feature: '知的財産セキュリティ',
          description:
            'クライアントイノベーションと独自合成ルートの保護における実証済み経験による厳格な機密保持契約と知的財産の安全な取扱い。',
        },
        {
          feature: 'ヨーロッパパートナー',
          description:
            'ヨーロッパ市場内での規制コンプライアンス、安全なサプライチェーン、費用対効果の高いソリューションを保証する信頼性の高いEUベースの合成・製造サービス。',
        },
        {
          feature: '統合サービス',
          description:
            '初期ルート開発から商業生産とコンプライアンスサポートまで、包括的ソリューションを提供する研究開発、合成、分析、規制専門知識の統合。',
        },
      ],
      subServices: [
        {
          title: 'カスタム合成',
          description:
            'カタログ外ファインケミカル、複雑な中間体、標準物質、化学特殊品の専門合成。アセチレン化学、TEMPO誘導体、ヒドロキシ酸、その他の専門化学における深い専門知識を活用して、困難な多段階合成ルートに取り組みます。ルート探索と実現可能性研究から実験室スケール合成まで、お客様の特定要件に合わせた高純度化合物を提供します。',
          image: CSMServicePageService1Doc.id,
          displayItems: [
            { item: 'ルート探索・実現可能性研究' },
            { item: '実験室スケール合成（g-kg）' },
            { item: '高純度基準' },
            { item: '多段階複雑合成' },
          ],
          features: [
            {
              feature: '合成専門知識',
              description:
                '実証済みの商業的成功を持つアセチレン化学、TEMPO誘導体、専門機能性分子を含む複雑な有機合成における深い知識。',
            },
            {
              feature: 'スケール範囲',
              description:
                'すべてのスケールで一貫した品質と再現性を持つ、実験室グラムからキログラム量までの柔軟な合成能力。',
            },
            {
              feature: '純度重視',
              description:
                '包括的な分析特性化と品質文書によるクライアント仕様に合わせた高純度基準の達成重視。',
            },
          ],
          link: 'custom-synthesis',
        },
        {
          title: 'プロセス開発とスケールアップ',
          description:
            '効率性、安全性、収率、費用対効果の向上のための合成ルートの最適化。実験室最適化からパイロットプラント検証まで、商業生産のための堅牢な技術基盤を生成する包括的プロセス開発サービスを提供します。経験豊富なチームが実用的な化学知識とエンジニアリング専門知識を組み合わせて、成功したスケールアップの移行を保証します。',
          image: CSMServicePageService2Doc.id,
          displayItems: [
            { item: 'プロセス最適化' },
            { item: '安全性評価と検証' },
            { item: '収率改善研究' },
            { item: 'スケールアップ検証' },
          ],
          features: [
            {
              feature: '生産能力',
              description:
                '包括的スケールアップ検証のための多用途反応器と下流処理ユニットを備えた最大250 t/年の容量を持つパイロットプラントインフラ。',
            },
            {
              feature: '技術文書',
              description:
                '商業実装をサポートする安全性評価、操作手順、技術基盤を含む包括的プロセス文書。',
            },
            {
              feature: 'リスク軽減',
              description:
                '安全性考慮事項、設備制限、プロセス最適化機会を含むスケールアップ課題の特定と対処のための体系的アプローチ。',
            },
          ],
          link: 'process-development',
        },
        {
          title: '小規模・委託製造',
          description:
            '多用途パイロットプラントインフラを利用したファインケミカルと特殊品の信頼性の高い受託製造。VUP開発またはクライアント提供の確立されたプロセスに基づく、キログラムから複数トンのキャンペーンのための柔軟な委託製造サービスを提供します。当社のISO 9001:2015認証製造プロセスは、お客様の生産ニーズに対して一貫した品質と信頼性の高い納品を保証します。',
          image: CSMServicePageService3Doc.id,
          displayItems: [
            { item: '受託製造（kg-トン）' },
            { item: '委託加工サービス' },
            { item: '厳格な品質管理' },
            { item: '規制コンプライアンスサポート' },
          ],
          features: [
            {
              feature: '製造柔軟性',
              description:
                '実証済みの信頼性を持つ様々なバッチサイズと化学プロセスのための多用途パイロットプラント設備を利用した適応可能な生産能力。',
            },
            {
              feature: '品質システム',
              description:
                'SNAS S-118認定分析ラボを使用した厳格な工程内および最終製品品質管理を伴うISO 9001:2015認証製造プロセス。',
            },
            {
              feature: 'サプライチェーンの信頼性',
              description:
                'EU市場内での信頼性の高いサプライチェーン、規制コンプライアンス、費用対効果の高い生産を保証する安全なヨーロッパ製造拠点。',
            },
          ],
          link: 'toll-manufacturing',
        },
      ],
      accreditations: [
        {
          accreditation: 'ISO 9001:2015認証',
        },
        {
          accreditation: 'SNAS S-118認定',
        },
        {
          accreditation: 'Responsible Care認証',
        },
        {
          accreditation: '研究開発能力証明書',
        },
      ],
    },
  })

  return {
    researchDevelopment,
    analyticalTesting,
    cosmeticsManufacturing,
    regulatoryTechnicalSupport,
    customSynthesisManufacturing,
  }
}

export type SeededServices = Awaited<ReturnType<typeof seedServices>>
