import type { Payload } from 'payload'

export const seedCareers = async (payload: Payload) => {
  payload.logger.info('- Seeding careers in Slovak...')

  const [chemistDoc, analystDoc] = await Promise.all([
    payload.create({
      collection: 'careers',
      depth: 0,
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
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Hľadáme ',
                    type: 'text',
                    version: 1,
                  },
                  {
                    detail: 0,
                    format: 1,
                    mode: 'normal',
                    style: '',
                    text: 'vysoko motivovaného Senior výskumného chemika',
                    type: 'text',
                    version: 1,
                  },
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: ' do nášho R&D tímu v Prievidzi. Budete viesť inovatívne výskumné projekty zamerané na vývoj nových chemických produktov a optimalizáciu existujúcich procesov. Táto pozícia ponúka príležitosť pracovať s ',
                    type: 'text',
                    version: 1,
                  },
                  {
                    detail: 0,
                    format: 2,
                    mode: 'normal',
                    style: '',
                    text: 'najmodernejšou technológiou',
                    type: 'text',
                    version: 1,
                  },
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: ' a prispievať k udržateľným chemickým riešeniam, ktoré majú reálny dopad na globálne priemyselné odvetvia. Ako súčasť nášho tímu s viac ako 70-ročnými skúsenosťami v chémii a viac ako 900 patentmi, budete hnacou silou inovácií v oblasti špeciálnych chemikálií pri práci na projektoch, ktoré siahajú od laboratórnej syntézy až po priemyselnú výrobu.',
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
        slug: 'senior-research-chemist',
        _status: 'published',
      },
    }),
    payload.create({
      collection: 'careers',
      depth: 0,
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
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Hľadáme skúseného ',
                    type: 'text',
                    version: 1,
                  },
                  {
                    detail: 0,
                    format: 1,
                    mode: 'normal',
                    style: '',
                    text: 'Analytického chemika',
                    type: 'text',
                    version: 1,
                  },
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: ' do nášho SNAS akreditovaného laboratória Kontroly kvality (divízia ATBEL). V tejto úlohe budete vykonávať zložité analytické testovanie a vývoj metód na podporu našich procesov vývoja a výroby produktov. Budete pracovať v našom zariadení certifikovanom podľa normy ISO/IEC 17025, zabezpečovať najvyššie štandardy analytickej excelentnosti a prispievať k vývoju inovatívnych chemických riešení pre medzinárodné trhy.',
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
        slug: 'analytical-chemist',
        _status: 'published',
      },
    }),
  ])

  payload.logger.info('✓ Careers seeded')

  return { chemistDoc, analystDoc }
}

export type SeededCareers = Awaited<ReturnType<typeof seedCareers>>
