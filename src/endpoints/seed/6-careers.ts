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

  payload.logger.info('— Adding Slovak translations for careers...')

  await Promise.all([
    payload.update({
      collection: 'careers',
      id: chemist.id,
      locale: 'sk',
      data: {
        title: 'Senior výskumný chemik',
        category: 'Výskum a vývoj',
        location: 'Prievidza, Slovensko',
        type: 'fulltime',
        description: {
          root: {
            children: [
              {
                children: [
                  {
                    text: 'Hľadáme ',
                  },
                  {
                    format: 1,
                    text: 'vysoko motivovaného Senior výskumného chemika',
                  },
                  {
                    text: ' do nášho R&D tímu v Prievidzi. Budete viesť inovatívne výskumné projekty zamerané na vývoj nových chemických produktov a optimalizáciu existujúcich procesov. Táto pozícia ponúka príležitosť pracovať s ',
                  },
                  {
                    format: 2,
                    text: 'najmodernejšou technológiou',
                  },
                  {
                    text: ' a prispievať k udržateľným chemickým riešeniam, ktoré majú reálny dopad na globálne priemyselné odvetvia. Ako súčasť nášho tímu s viac ako 70-ročnými skúsenosťami v chémii a viac ako 900 patentmi, budete hnacou silou inovácií v oblasti špeciálnych chemikálií pri práci na projektoch, ktoré siahajú od laboratórnej syntézy až po priemyselnú výrobu.',
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
              'Navrhovať a realizovať zložité výskumné projekty v organickej a analytickej chémii so zameraním na udržateľné chemické procesy a princípy zelenej chémie.',
          },
          {
            responsibility:
              'Viesť medzifunkčné tímy pri vývoji nových chemických produktov a procesov, riadiť časové harmonogramy projektov, rozpočty a výstupy od konceptu po komercializáciu.',
          },
          {
            responsibility:
              'Vykonávať prieskum a štúdie uskutočniteľnosti syntetických ciest s využitím literárneho výskumu, patentovej analýzy a praktických chemických znalostí.',
          },
          {
            responsibility:
              'Vyvíjať a optimalizovať syntetické metódy pre špeciálne chemikálie, medziprodukty a aktívne farmaceutické zložky so zameraním na škálovateľnosť.',
          },
          {
            responsibility:
              'Spolupracovať s analytickými a procesnými vývojovými tímami na zavedení robustných analytických metód a postupov kontroly kvality.',
          },
          {
            responsibility:
              'Mentorovať mladších vedcov a poskytovať technické poradenstvo pri zložitých problémoch chemickej syntézy a purifikácie.',
          },
          {
            responsibility:
              'Pripravovať technické správy, patentové prihlášky a vedecké publikácie dokumentujúce výsledky výskumu a inovácie.',
          },
          {
            responsibility:
              'Komunikovať s klientmi a partnermi s cieľom porozumieť technickým požiadavkám a poskytovať odborné chemické poradenstvo.',
          },
        ],
        requirements: [
          {
            requirement:
              'PhD v chémii, chemickom inžinierstve alebo príbuznom odbore s preukázanou excelentnosťou vo výskume a silným publikačným záznamom.',
          },
          {
            requirement:
              '7+ rokov skúseností vo chemickom výskume a vývoji, preferovane v priemysle špeciálnych chemikálií, farmaceutickom priemysle alebo v oblasti čistých chemikálií.',
          },
          {
            requirement:
              'Odbornosť v organickej syntéze, vrátane viacstupňovej syntézy, purifikačných techník a optimalizácie reakcií.',
          },
          {
            requirement:
              'Silné znalosti analytických techník (NMR, GC-MS, HPLC, IR spektroskopia) pre charakterizáciu zlúčenín a analýzu čistoty.',
          },
          {
            requirement:
              'Skúsenosti s vývojom procesov a škálovaním z laboratória do poloprevádzkových operácií.',
          },
          {
            requirement:
              'Preukázateľné skúsenosti s riadením projektov a vedením technických tímov vo výskumnom prostredí.',
          },
          {
            requirement:
              'Vynikajúce písomné a verbálne komunikačné schopnosti v anglickom jazyku; znalosť slovenského alebo nemeckého jazyka je výhodou.',
          },
          {
            requirement:
              'Silné schopnosti riešenia problémov a inovatívne myslenie pri vývoji nových chemických riešení.',
          },
        ],
        preferredQualifications: [
          {
            qualification:
              'Skúsenosti s princípmi zelenej chémie a udržateľnými výrobnými procesmi.',
          },
          {
            qualification:
              'Znalosť regulačných požiadaviek na chemické výrobky (REACH, FDA, ICH smernice).',
          },
          {
            qualification:
              'Skúsenosti s nástrojmi výpočtovej chémie a softvérom na molekulárne modelovanie.',
          },
          {
            qualification:
              'Predchádzajúca práca v oblasti vývoja katalyzátorov, polymerizačnej chémie alebo farmaceutických medziproduktov.',
          },
          {
            qualification:
              'Skúsenosti s podávaním patentových prihlášok a vývojom duševného vlastníctva.',
          },
        ],
        benefits: [
          {
            benefit:
              'Konkurencieschopný plat zodpovedajúci skúsenostiam a bonusy založené na výkone.',
          },
          {
            benefit: 'Komplexné zdravotné poistenie a wellness programy pre vás a vašu rodinu.',
          },
          {
            benefit:
              'Možnosti profesionálneho rozvoja vrátane účasti na konferenciách a podpory ďalšieho vzdelávania.',
          },
          {
            benefit: 'Prístup k najmodernejším laboratórnym zariadeniam a analytickým prístrojom.',
          },
          {
            benefit: 'Flexibilné pracovné podmienky a štedrá dovolenková politika.',
          },
          {
            benefit:
              'Príležitosť pracovať na medzinárodne uznávaných projektoch s poprednými priemyselnými partnermi.',
          },
        ],
      },
    }),
    payload.update({
      collection: 'careers',
      id: chemist.id,
      locale: 'jp',
      data: {
        title: 'シニアリサーチケミスト',
        category: '研究開発',
        location: 'プリエヴィドザ、スロバキア',
        type: 'fulltime',
        description: {
          root: {
            children: [
              {
                children: [
                  {
                    text: 'プリエヴィドザの研究開発チームに参加していただく、',
                  },
                  {
                    format: 1,
                    text: '意欲の高いシニアリサーチケミスト',
                  },
                  {
                    text: 'を募集しています。新しい化学製品の開発や既存プロセスの最適化に焦点を当てた革新的な研究プロジェクトを主導していただきます。この役職では、',
                  },
                  {
                    format: 2,
                    text: '最先端技術',
                  },
                  {
                    text: 'を扱い、世界の産業に実質的な影響を与える持続可能な化学ソリューションに貢献する機会があります。70年以上の化学専門知識と900件以上の特許を持つ当社のチームの一員として、研究室規模の合成から工業生産に至るまでのプロジェクトに取り組みながら、特殊化学品分野の革新を推進していただきます。',
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
              '持続可能な化学プロセスとグリーンケミストリーの原則に焦点を当て、有機化学および分析化学における複雑な研究プロジェクトを設計・実行する。',
          },
          {
            responsibility:
              '部門横断的なチームを率いて新しい化学製品とプロセスを開発し、コンセプトから商業化までのプロジェクトのタイムライン、予算、成果物を管理する。',
          },
          {
            responsibility:
              '文献調査、特許分析、実践的な化学の専門知識を活用して、合成経路のルートスカウティングと実現可能性調査を実施する。',
          },
          {
            responsibility:
              'スケーラビリティに焦点を当て、特殊化学品、中間体、および原薬の合成方法を開発・最適化する。',
          },
          {
            responsibility:
              '分析およびプロセス開発チームと協力して、堅牢な分析方法と品質管理手順を確立する。',
          },
          {
            responsibility:
              '若手研究者を指導し、複雑な化学合成および精製の課題に関する技術的ガイダンスを提供する。',
          },
          {
            responsibility:
              '研究成果と革新を文書化するための技術報告書、特許出願、および科学出版物を準備する。',
          },
          {
            responsibility:
              'クライアントやパートナーと連携し、技術要件を理解し、専門的な化学コンサルテーションを提供する。',
          },
        ],
        requirements: [
          {
            requirement:
              '化学、化学工学、または関連分野の博士号（PhD）を有し、優れた研究実績と強力な出版記録を持つこと。',
          },
          {
            requirement:
              '化学の研究開発分野で7年以上の経験、できれば特殊化学品、医薬品、またはファインケミカル業界での経験があること。',
          },
          {
            requirement: '多段階合成、精製技術、反応最適化を含む有機合成の専門知識。',
          },
          {
            requirement:
              '化合物の特性評価および純度分析のための分析技術（NMR, GC-MS, HPLC, IR分光法）に関する深い知識。',
          },
          {
            requirement: '実験室からパイロットプラントへのプロセス開発およびスケールアップの経験。',
          },
          {
            requirement: '研究環境におけるプロジェクト管理と技術チームの指導実績。',
          },
          {
            requirement:
              '優れた英語の筆記および口頭コミュニケーション能力。スロバキア語またはドイツ語の知識があれば尚可。',
          },
          {
            requirement:
              '新しい化学ソリューションを開発するための強力な問題解決能力と革新的な思考力。',
          },
        ],
        preferredQualifications: [
          {
            qualification: 'グリーンケミストリーの原則と持続可能な製造プロセスに関する経験。',
          },
          {
            qualification: '化学製品に関する規制要件（REACH, FDA, ICHガイドライン）の知識。',
          },
          {
            qualification: '計算化学ツールと分子モデリングソフトウェアの経験。',
          },
          {
            qualification: '触媒開発、重合化学、または医薬品中間体の分野での実務経験。',
          },
          {
            qualification: '特許出願の経験と知的財産の開発。',
          },
        ],
        benefits: [
          {
            benefit: '経験に応じた競争力のある給与と業績連動型のボーナス。',
          },
          {
            benefit: 'あなたとあなたの家族のための包括的な健康保険とウェルネスプログラム。',
          },
          {
            benefit: '学会参加や継続教育支援を含む専門能力開発の機会。',
          },
          {
            benefit: '最新鋭の実験施設と分析機器へのアクセス。',
          },
          {
            benefit: '柔軟な勤務形態と手厚い休暇制度。',
          },
          {
            benefit: '業界をリードするパートナーと国際的に認められたプロジェクトに取り組む機会。',
          },
        ],
      },
    }),

    // Analyst

    payload.update({
      collection: 'careers',
      id: analyst.id,
      locale: 'sk',
      data: {
        title: 'Analytický chemik',
        category: 'Kontrola kvality',
        location: 'Prievidza, Slovensko',
        type: 'fulltime',
        description: {
          root: {
            children: [
              {
                children: [
                  {
                    text: 'Hľadáme skúseného ',
                  },
                  {
                    format: 1,
                    text: 'Analytického chemika',
                  },
                  {
                    text: ' do nášho SNAS akreditovaného laboratória Kontroly kvality (divízia ATBEL). V tejto úlohe budete vykonávať zložité analytické testovanie a vývoj metód na podporu našich procesov vývoja a výroby produktov. Budete pracovať v našom zariadení certifikovanom podľa normy ISO/IEC 17025, zabezpečovať najvyššie štandardy analytickej excelentnosti a prispievať k vývoju inovatívnych chemických riešení pre medzinárodné trhy.',
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
              'Vykonávať analytické testovanie pomocou pokročilých prístrojov vrátane HPLC, GC-MS, NMR, FT-IR, AAS a UV-Vis spektroskopie.',
          },
          {
            responsibility:
              'Vyvíjať a validovať analytické metódy pre kontrolu kvality, analýzu surovín a charakterizáciu produktov podľa medzinárodných noriem.',
          },
          {
            responsibility:
              'Vykonávať kvantitatívnu a kvalitatívnu analýzu organických a anorganických zlúčenín, vrátane profilovania nečistôt a štúdií stability.',
          },
          {
            responsibility:
              'Realizovať protokoly pre transfer a validáciu metód pre nové analytické postupy, zabezpečujúc súlad s regulačnými požiadavkami.',
          },
          {
            responsibility:
              'Podporovať projekty výskumu a vývoja poskytovaním analytických odborných znalostí a riešením analytických problémov.',
          },
          {
            responsibility:
              'Udržiavať a kalibrovať analytické prístroje, zabezpečovať ich optimálny výkon a dodržiavanie plánov údržby.',
          },
          {
            responsibility:
              'Pripravovať podrobné analytické správy a certifikáty o analýze pre interných a externých zákazníkov.',
          },
          {
            responsibility:
              'Podieľať sa na činnostiach systému manažérstva kvality laboratória vrátane interných auditov a iniciatív neustáleho zlepšovania.',
          },
          {
            responsibility:
              'Spolupracovať s výrobnými a R&D tímami pri riešení analytických problémov a optimalizácii testovacích postupov.',
          },
        ],
        requirements: [
          {
            requirement:
              'MSc alebo PhD v analytickej chémii, chémii alebo príbuznom odbore s vynikajúcimi študijnými výsledkami.',
          },
          {
            requirement:
              '4+ roky praktických skúseností s analytickými prístrojmi a vývojom metód v priemyselnom alebo výskumnom laboratórnom prostredí.',
          },
          {
            requirement:
              'Znalosť chromatografických techník (HPLC, GC) a spektroskopických metód (NMR, FT-IR, UV-Vis).',
          },
          {
            requirement:
              'Skúsenosti s validáciou metód, štatistickou analýzou a výpočtami neistoty podľa smerníc ICH/USP.',
          },
          {
            requirement:
              'Znalosť systémov manažérstva kvality (ISO/IEC 17025, ISO 9001) a správnej laboratórnej praxe (GLP).',
          },
          {
            requirement:
              'Silný zmysel pre detail a schopnosť presne pracovať pod časovým tlakom pri zachovaní vysokých štandardov kvality.',
          },
          {
            requirement:
              'Vynikajúce schopnosti analýzy a interpretácie dát s pokročilou znalosťou analytických softvérových balíkov.',
          },
          {
            requirement:
              'Dobré komunikačné schopnosti v anglickom jazyku; znalosť slovenského jazyka je výhodou.',
          },
        ],
        preferredQualifications: [
          {
            qualification:
              'Skúsenosti s hmotnostnou spektrometriou (LC-MS, GC-MS) a objasňovaním štruktúr.',
          },
          {
            qualification:
              'Znalosť analýzy farmaceutických alebo špeciálnych chemikálií a regulačných požiadaviek.',
          },
          {
            qualification:
              'Skúsenosti s titračnými metódami, termálnou analýzou a testovaním fyzikálno-chemických vlastností.',
          },
          {
            qualification: 'Znalosť LIMS systémov a technológií laboratórnej automatizácie.',
          },
          {
            qualification:
              'Predchádzajúca práca v akreditovanom testovacom laboratóriu so službami pre externých zákazníkov.',
          },
          {
            qualification:
              'Porozumenie metódam monitorovania životného prostredia a pracovnej atmosféry.',
          },
        ],
        benefits: [
          {
            benefit: 'Konkurencieschopný plat s ročným hodnotením výkonu a zásluhovými odmenami.',
          },
          {
            benefit: 'Komplexné zdravotné a zubné poistenie s možnosťami pre rodinu.',
          },
          {
            benefit:
              'Možnosti profesionálneho rozvoja vrátane školení o nových analytických technikách a zariadeniach.',
          },
          {
            benefit:
              'Prístup k najmodernejším analytickým prístrojom a moderným laboratórnym zariadeniam.',
          },
          {
            benefit:
              'Flexibilný pracovný čas a vynikajúca rovnováha medzi pracovným a súkromným životom v spolupracujúcom prostredí.',
          },
          {
            benefit:
              'Príležitosť pracovať s medzinárodnými klientmi a prispievať k celosvetovo uznávaným analytickým štandardom.',
          },
          {
            benefit: 'Dôchodkový plán a ďalší balík finančných výhod.',
          },
        ],
      },
    }),
    payload.update({
      collection: 'careers',
      id: analyst.id,
      locale: 'jp',
      data: {
        title: '分析化学者',
        category: '品質管理',
        location: 'プリエヴィドザ、スロバキア',
        type: 'fulltime',
        description: {
          root: {
            children: [
              {
                children: [
                  {
                    text: '当社のSNAS認定品質管理研究所（ATBEL部門）に参加していただく、経験豊富な',
                  },
                  {
                    format: 1,
                    text: '分析化学者',
                  },
                  {
                    text: 'を募集しています。この役職では、製品開発および製造プロセスをサポートするために、複雑な分析試験とメソッド開発を行っていただきます。ISO/IEC 17025認定施設で働き、最高水準の分析的卓越性を確保しながら、国際市場向けの革新的な化学ソリューションの開発に貢献していただきます。',
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
              'HPLC、GC-MS、NMR、FT-IR、AAS、UV-Vis分光法などの高度な機器を使用して分析試験を実施する。',
          },
          {
            responsibility:
              '国際基準に従い、品質管理、原料分析、製品特性評価のための分析メソッドを開発・検証する。',
          },
          {
            responsibility:
              '不純物プロファイリングや安定性試験を含む、有機および無機化合物の定量的および定性的分析を実施する。',
          },
          {
            responsibility:
              '新しい分析手順のためのメソッド移転および検証プロトコルを実行し、規制要件への準拠を確保する。',
          },
          {
            responsibility:
              '分析の専門知識を提供し、分析上の課題をトラブルシューティングすることで、研究開発プロジェクトをサポートする。',
          },
          {
            responsibility:
              '分析機器を保守・校正し、最適な性能とメンテナンススケジュールの遵守を確保する。',
          },
          {
            responsibility: '内外の顧客向けに詳細な分析報告書と分析証明書を作成する。',
          },
          {
            responsibility:
              '内部監査や継続的改善イニシアチブを含む、研究所の品質管理システム活動に参加する。',
          },
          {
            responsibility:
              '生産および研究開発チームと協力して、分析上の問題を解決し、試験手順を最適化する。',
          },
        ],
        requirements: [
          {
            requirement:
              '分析化学、化学、または関連分野の修士号（MSc）または博士号（PhD）を有し、優れた学業成績を持つこと。',
          },
          {
            requirement:
              '産業または研究室環境での分析機器およびメソッド開発に関する4年以上の実務経験。',
          },
          {
            requirement:
              'クロマトグラフィー技術（HPLC, GC）および分光法（NMR, FT-IR, UV-Vis）に習熟していること。',
          },
          {
            requirement:
              'ICH/USPガイドラインに従ったメソッド検証、統計分析、および不確かさの計算に関する経験。',
          },
          {
            requirement:
              '品質管理システム（ISO/IEC 17025, ISO 9001）および優良試験所規範（GLP）に関する知識。',
          },
          {
            requirement:
              '細部への強い注意力を持ち、高い品質基準を維持しながら時間的制約の下で正確に作業する能力。',
          },
          {
            requirement:
              '分析ソフトウェアパッケージに習熟し、優れたデータ分析および解釈スキルを持つこと。',
          },
          {
            requirement: '優れた英語のコミュニケーション能力。スロバキア語の知識があれば尚可。',
          },
        ],
        preferredQualifications: [
          {
            qualification: '質量分析技術（LC-MS, GC-MS）および構造解析の経験。',
          },
          {
            qualification: '医薬品または特殊化学品の分析および規制要件に関する知識。',
          },
          {
            qualification: '滴定法、熱分析、および物理化学的特性試験の経験。',
          },
          {
            qualification: 'LIMSシステムおよび研究室自動化技術に関する知識。',
          },
          {
            qualification: '外部顧客サービスを提供する認定試験所環境での実務経験。',
          },
          {
            qualification: '環境および職場雰囲気のモニタリング方法に関する理解。',
          },
        ],
        benefits: [
          {
            benefit: '年次業績評価と能力給による昇給を伴う競争力のある給与。',
          },
          {
            benefit: '家族も対象となる包括的な健康保険および歯科保険。',
          },
          {
            benefit: '新しい分析技術や機器に関するトレーニングを含む専門能力開発の機会。',
          },
          {
            benefit: '最先端の分析機器と近代的な実験施設へのアクセス。',
          },
          {
            benefit: '協力的な環境での柔軟な勤務時間と優れたワークライフバランス。',
          },
          {
            benefit: '国際的なクライアントと協力し、世界的に認められた分析基準に貢献する機会。',
          },
          {
            benefit: '年金制度および追加の財務的給付パッケージ。',
          },
        ],
      },
    }),
  ])

  payload.logger.info('✓ Careers seeded')

  return { chemist, analyst }
}

export type SeededCareers = Awaited<ReturnType<typeof seedCareers>>
