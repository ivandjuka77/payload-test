// src/payload/seed/6-careers.ts
import type { Payload } from 'payload'

export const seedCareers = async (payload: Payload) => {
  payload.logger.info('— Seeding careers...')

  const [chemist, analyst] = await Promise.all([
    payload.create({
      collection: 'careers',
      depth: 0,
      data: {
        title: 'Senior Research Chemist',
        category: 'Research and Development',
        location: 'Prievidza, Slovakia',
        type: 'fulltime',
        description: {
          root: {
            children: [
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'We are seeking a ',
                    type: 'text',
                    version: 1,
                  },
                  {
                    detail: 0,
                    format: 1,
                    mode: 'normal',
                    style: '',
                    text: 'highly motivated Senior Research Chemist',
                    type: 'text',
                    version: 1,
                  },
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: ' to join our R&D team in Prievidza. You will lead innovative research projects focused on developing new chemical products and optimizing existing processes. This role offers the opportunity to work with ',
                    type: 'text',
                    version: 1,
                  },
                  {
                    detail: 0,
                    format: 2,
                    mode: 'normal',
                    style: '',
                    text: 'cutting-edge technology',
                    type: 'text',
                    version: 1,
                  },
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: ' and contribute to sustainable chemistry solutions that make a real-world impact on global industries. As part of our team with 70+ years of chemical expertise and over 900 patents, you will drive innovation in specialty chemicals while working on projects that span from laboratory-scale synthesis to industrial production.',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            type: 'root',
            version: 1,
          },
        },
        keyResponsibilities: [
          {
            responsibility:
              'Design and execute complex research projects in organic and analytical chemistry, focusing on sustainable chemical processes and green chemistry principles',
          },
          {
            responsibility:
              'Lead cross-functional teams to develop new chemical products and processes, managing project timelines, budgets, and deliverables from concept to commercialization',
          },
          {
            responsibility:
              'Conduct route scouting and feasibility studies for synthetic pathways, utilizing literature research, patent analysis, and practical chemistry expertise',
          },
          {
            responsibility:
              'Develop and optimize synthetic methods for specialty chemicals, intermediates, and active pharmaceutical ingredients with focus on scalability',
          },
          {
            responsibility:
              'Collaborate with analytical and process development teams to establish robust analytical methods and quality control procedures',
          },
          {
            responsibility:
              'Mentor junior scientists and provide technical guidance on complex chemical synthesis and purification challenges',
          },
          {
            responsibility:
              'Prepare technical reports, patent applications, and scientific publications documenting research findings and innovations',
          },
          {
            responsibility:
              'Interface with clients and partners to understand technical requirements and provide expert chemical consultation',
          },
        ],
        requirements: [
          {
            requirement:
              'PhD in Chemistry, Chemical Engineering, or related field with demonstrated research excellence and strong publication record',
          },
          {
            requirement:
              '7+ years of experience in chemical research and development, preferably in specialty chemicals, pharmaceuticals, or fine chemicals industry',
          },
          {
            requirement:
              'Expertise in organic synthesis, including multi-step synthesis, purification techniques, and reaction optimization',
          },
          {
            requirement:
              'Strong knowledge of analytical techniques (NMR, GC-MS, HPLC, IR spectroscopy) for compound characterization and purity analysis',
          },
          {
            requirement:
              'Experience with process development and scale-up from laboratory to pilot plant operations',
          },
          {
            requirement:
              'Proven track record of project management and leading technical teams in research environments',
          },
          {
            requirement:
              'Excellent written and verbal communication skills in English; knowledge of Slovak or German is a plus',
          },
          {
            requirement:
              'Strong problem-solving abilities and innovative thinking for developing novel chemical solutions',
          },
        ],
        preferredQualifications: [
          {
            qualification:
              'Experience with green chemistry principles and sustainable manufacturing processes',
          },
          {
            qualification:
              'Knowledge of regulatory requirements for chemical products (REACH, FDA, ICH guidelines)',
          },
          {
            qualification:
              'Experience with computational chemistry tools and molecular modeling software',
          },
          {
            qualification:
              'Previous work in catalyst development, polymerization chemistry, or pharmaceutical intermediates',
          },
          {
            qualification: 'Patent application experience and intellectual property development',
          },
        ],
        benefits: [
          {
            benefit:
              'Competitive salary commensurate with experience and performance-based bonuses',
          },
          {
            benefit: 'Comprehensive health insurance and wellness programs for you and your family',
          },
          {
            benefit:
              'Professional development opportunities including conference attendance and continuing education support',
          },
          {
            benefit:
              'Access to state-of-the-art laboratory facilities and analytical instrumentation',
          },
          {
            benefit: 'Flexible working arrangements and generous vacation policy',
          },
          {
            benefit:
              'Opportunity to work on internationally recognized projects with leading industry partners',
          },
        ],
        slug: 'senior-research-chemist',
        _status: 'published',
      },
    }),
    payload.create({
      collection: 'careers',
      depth: 0,
      data: {
        title: 'Analytical Chemist',
        category: 'Quality Control',
        location: 'Prievidza, Slovakia',
        type: 'fulltime',
        description: {
          root: {
            children: [
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'We are looking for an experienced ',
                    type: 'text',
                    version: 1,
                  },
                  {
                    detail: 0,
                    format: 1,
                    mode: 'normal',
                    style: '',
                    text: 'Analytical Chemist',
                    type: 'text',
                    version: 1,
                  },
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: ' to join our SNAS-accredited Quality Control laboratory (ATBEL division). In this role, you will perform complex analytical testing and method development to support our product development and manufacturing processes. You will work in our ISO/IEC 17025 certified facility, ensuring the highest standards of analytical excellence while contributing to the development of innovative chemical solutions for international markets.',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            type: 'root',
            version: 1,
          },
        },
        keyResponsibilities: [
          {
            responsibility:
              'Conduct analytical testing using advanced instrumentation including HPLC, GC-MS, NMR, FT-IR, AAS, and UV-Vis spectroscopy',
          },
          {
            responsibility:
              'Develop and validate analytical methods for quality control, raw material analysis, and product characterization according to international standards',
          },
          {
            responsibility:
              'Perform quantitative and qualitative analysis of organic and inorganic compounds, including impurity profiling and stability studies',
          },
          {
            responsibility:
              'Execute method transfer and validation protocols for new analytical procedures, ensuring compliance with regulatory requirements',
          },
          {
            responsibility:
              'Support research and development projects by providing analytical expertise and troubleshooting analytical challenges',
          },
          {
            responsibility:
              'Maintain and calibrate analytical instruments, ensuring optimal performance and compliance with maintenance schedules',
          },
          {
            responsibility:
              'Prepare detailed analytical reports and certificates of analysis for internal and external customers',
          },
          {
            responsibility:
              'Participate in laboratory quality management system activities including internal audits and continuous improvement initiatives',
          },
          {
            responsibility:
              'Collaborate with production and R&D teams to resolve analytical issues and optimize testing procedures',
          },
        ],
        requirements: [
          {
            requirement:
              'MSc or PhD in Analytical Chemistry, Chemistry, or related field with strong academic performance',
          },
          {
            requirement:
              '4+ years of hands-on experience with analytical instrumentation and method development in industrial or research laboratory setting',
          },
          {
            requirement:
              'Proficiency in chromatographic techniques (HPLC, GC) and spectroscopic methods (NMR, FT-IR, UV-Vis)',
          },
          {
            requirement:
              'Experience with method validation, statistical analysis, and uncertainty calculations according to ICH/USP guidelines',
          },
          {
            requirement:
              'Knowledge of quality management systems (ISO/IEC 17025, ISO 9001) and good laboratory practices (GLP)',
          },
          {
            requirement:
              'Strong attention to detail and ability to work accurately under time constraints while maintaining high quality standards',
          },
          {
            requirement:
              'Excellent data analysis and interpretation skills with proficiency in analytical software packages',
          },
          {
            requirement:
              'Good communication skills in English; knowledge of Slovak language is preferred',
          },
        ],
        preferredQualifications: [
          {
            qualification:
              'Experience with mass spectrometry techniques (LC-MS, GC-MS) and structural elucidation',
          },
          {
            qualification:
              'Knowledge of pharmaceutical or specialty chemical analysis and regulatory requirements',
          },
          {
            qualification:
              'Experience with titration methods, thermal analysis, and physical-chemical property testing',
          },
          {
            qualification: 'Familiarity with LIMS systems and laboratory automation technologies',
          },
          {
            qualification:
              'Previous work in accredited testing laboratory environment with external customer service',
          },
          {
            qualification:
              'Understanding of environmental and workplace atmosphere monitoring methods',
          },
        ],
        benefits: [
          {
            benefit: 'Competitive salary with annual performance reviews and merit-based increases',
          },
          {
            benefit: 'Comprehensive health and dental insurance coverage with family options',
          },
          {
            benefit:
              'Professional development opportunities including training on new analytical techniques and equipment',
          },
          {
            benefit:
              'Access to cutting-edge analytical instrumentation and modern laboratory facilities',
          },
          {
            benefit:
              'Flexible working hours and excellent work-life balance in a collaborative environment',
          },
          {
            benefit:
              'Opportunity to work with international clients and contribute to globally recognized analytical standards',
          },
          {
            benefit: 'Pension plan and additional financial benefits package',
          },
        ],
        slug: 'analytical-chemist',
        _status: 'published',
      },
    }),
  ])

  payload.logger.info('✓ Careers seeded')

  return { chemist, analyst }
}

export type SeededCareers = Awaited<ReturnType<typeof seedCareers>>
