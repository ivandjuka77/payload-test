import type { Media, User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  featuredImage: Media
  author: User
}

export const post2En: (args: PostArgs) => RequiredDataFromCollectionSlug<'posts'> = ({
  featuredImage,
  author,
}) => {
  return {
    title: 'VUP Cosmetics launches upgraded online store on Shoptet',
    type: 'news',
    featured: false,
    description:
      'The cosmetics branch of VUP, a.s. has completed a digital upgrade with the launch of its new online store on the Shoptet platform.',
    featuredImage: featuredImage.id,
    author: author,
    content: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'The cosmetics branch of VUP, a.s. has completed a digital upgrade with the launch of its new online store on the Shoptet platform. The move brings a modern, user-friendly interface and streamlined shopping experience to the company’s loyal customer base.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'The updated e-shop offers detailed product information, clear categorization, and responsive design across all devices. Customers can now access VUP’s portfolio of creams, gels, and personal-care formulations more conveniently, supported by faster navigation and improved order processing.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: '“The Shoptet system allows us to serve our customers with the same precision and reliability that define our laboratory and production work,” said the director of VUP’s cosmetics division. “It’s a step toward better accessibility and transparency for consumers who value science-based care made in Slovakia.”',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'The upgrade also supports future integrations with VUP’s internal systems and marketing channels, ensuring a seamless connection between production, research, and customer service.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Visit the new cosmetics platform: ',
                version: 1,
              },
              {
                type: 'link',
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'https://www.vupcosmetics.sk/',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 3,
                fields: {
                  linkType: 'custom',
                  url: 'https://www.vupcosmetics.sk/',
                  newTab: true,
                },
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    tags: [
      { tag: 'VUP Cosmetics' },
      { tag: 'E-commerce' },
      { tag: 'Shoptet' },
      { tag: 'Slovakia' },
    ],
    meta: {
      title: 'VUP Cosmetics Launches New E-commerce Store on Shoptet',
      description:
        "VUP's cosmetics division launches its new online store on the Shoptet platform, offering a modern, user-friendly shopping experience.",
      image: featuredImage.id,
    },
    publishedAt: '2025-10-20T11:00:00.000Z',
    slug: 'vup-cosmetics-launches-shoptet-store',
    _status: 'published',
  }
}

export const post2Sk: (args: PostArgs) => RequiredDataFromCollectionSlug<'posts'> = ({
  featuredImage,
  author,
}) => {
  return {
    title: 'VUP Cosmetics spúšťa vylepšený online obchod na platforme Shoptet',
    type: 'news',
    featured: false,
    description:
      'Kozmetická divízia VUP, a.s. dokončila digitálnu modernizáciu spustením svojho nového online obchodu na platforme Shoptet.',
    featuredImage: featuredImage.id,
    author: author,
    content: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Kozmetická divízia VUP, a.s. dokončila digitálnu modernizáciu spustením svojho nového online obchodu na platforme Shoptet. Tento krok prináša moderne, užívateľsky prívetivé rozhranie a zefektívnené nákupné skúsenosti lojálnej zákazníckej základni spoločnosti.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Aktualizovaný e-shop ponúka podrobné informácie o produktoch, prehľadnú kategorizáciu a responzívny dizajn na všetkých zariadeniach. Zákazníci teraz môžu pohodlnejšie pristupovať k portfóliu krémov, gélov a prípravkov osobnej starostlivosti VUP, podporovanému rýchlejšou navigáciou a vylepšeným spracovaním objednávok.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: '„Systém Shoptet nám umožňuje obsluhovať našich zákazníkov s rovnakou presnosťou a spoľahlivosťou, ktoré definujú našu laboratórnu a výrobnú prácu," povedal riaditeľ kozmetickej divízie VUP. „Je to krok smerom k lepšej dostupnosti a transparentnosti pre spotrebiteľov, ktorí oceňujú vedecky podloženú starostlivosť vyrobenú na Slovensku."',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Modernizácia tiež podporuje budúce integrácie s internými systémami VUP a marketingovými kanálmi, zabezpečujúc bezproblémové prepojenie medzi výrobou, výskumom a zákazníckym servisom.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Navštívte novú kozmetickú platformu: ',
                version: 1,
              },
              {
                type: 'link',
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'https://www.vupcosmetics.sk/',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 3,
                fields: {
                  linkType: 'custom',
                  url: 'https://www.vupcosmetics.sk/',
                  newTab: true,
                },
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    tags: [
      { tag: 'VUP Cosmetics' },
      { tag: 'E-commerce' },
      { tag: 'Shoptet' },
      { tag: 'Slovensko' },
    ],
    meta: {
      title: 'VUP Cosmetics spúšťa nový e-commerce obchod na Shoptete',
      description:
        'Kozmetická divízia VUP spúšťa svoj nový online obchod na platforme Shoptet, ponúkajúci moderne, užívateľsky prívetivé nákupné skúsenosti.',
      image: featuredImage.id,
    },
    publishedAt: '2025-10-20T11:00:00.000Z',
    slug: 'vup-cosmetics-launches-shoptet-store',
    _status: 'published',
  }
}

export const post2Jp: (args: PostArgs) => RequiredDataFromCollectionSlug<'posts'> = ({
  featuredImage,
  author,
}) => {
  return {
    title: 'VUP Cosmetics、Shoptetでアップグレードされたオンラインストアを開設',
    type: 'news',
    featured: false,
    description:
      'VUP, a.s.の化粧品部門は、Shoptetプラットフォームでの新しいオンラインストアの開設によりデジタルアップグレードを完了しました。',
    featuredImage: featuredImage.id,
    author: author,
    content: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'VUP, a.s.の化粧品部門は、Shoptetプラットフォームでの新しいオンラインストアの開設によりデジタルアップグレードを完了しました。この移行により、同社の忠実な顧客ベースに、モダンでユーザーフレンドリーなインターフェースと合理化されたショッピング体験がもたらされます。',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'アップグレードされたeショップは、詳細な製品情報、明確なカテゴリ分類、すべてのデバイスでのレスポンシブデザインを提供します。お客様は、より速いナビゲーションと改善された注文処理によりサポートされ、VUPのクリーム、ジェル、パーソナルケア製剤のポートフォリオにより便利にアクセスできるようになりました。',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: '「Shoptetシステムにより、私たちは研究室および生産作業を特徴づける精度と信頼性と同じレベルでお客様にサービスを提供できます」とVUPの化粧品部門のディレクターは述べています。「これは、スロバキアで製造された科学に基づくケアを評価する消費者にとって、より優れたアクセシビリティと透明性への一歩です。」',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'このアップグレードは、VUPの内部システムおよびマーケティングチャネルとの将来的な統合もサポートし、生産、研究、顧客サービス間のシームレスな接続を確保します。',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: '新しい化粧品プラットフォームをご覧ください: ',
                version: 1,
              },
              {
                type: 'link',
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'https://www.vupcosmetics.sk/',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 3,
                fields: {
                  linkType: 'custom',
                  url: 'https://www.vupcosmetics.sk/',
                  newTab: true,
                },
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    tags: [
      { tag: 'VUP Cosmetics' },
      { tag: 'Eコマース' },
      { tag: 'Shoptet' },
      { tag: 'スロバキア' },
    ],
    meta: {
      title: 'VUP Cosmetics、ShoptetでEコマースストアを開設',
      description:
        'VUPの化粧品部門は、Shoptetプラットフォームで新しいオンラインストアを開設し、モダンでユーザーフレンドリーなショッピング体験を提供します。',
      image: featuredImage.id,
    },
    publishedAt: '2025-10-20T11:00:00.000Z',
    slug: 'vup-cosmetics-launches-shoptet-store',
    _status: 'published',
  }
}
