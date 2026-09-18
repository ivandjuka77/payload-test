import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'sk', 'jp'],

  // Used when no locale matches
  defaultLocale: 'en',
  localePrefix: 'as-needed',

  // next-intl would emit Link headers using the URL locale code (hreflang="jp"), which
  // conflicts with the ISO 639-1 tags generated in src/utilities/generateMeta.ts
  alternateLinks: false,
})
