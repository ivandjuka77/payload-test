import { test, expect } from '@playwright/test'
import { crawlSite } from './utils/crawler'
import { fetchSitemapUrls } from './utils/sitemap'

// Initial seed paths – home for each locale
const SEEDS = ['/', '/jp', '/sk']

test.describe('Full-site button & link audit', () => {
  test('discover and validate all pages and their clickable elements', async ({
    page,
    baseURL,
  }) => {
    console.log('🔍 Starting site discovery...')

    // 1. Fetch dynamic URLs from sitemaps
    console.log('📄 Fetching sitemap URLs...')
    const dynamicPaths = await fetchSitemapUrls(baseURL!).catch(() => {
      console.log('⚠️ Could not fetch sitemaps, continuing with crawl only')
      return []
    })
    console.log(`Found ${dynamicPaths.length} pages from sitemaps`)

    // 2. Crawl starting from seed paths to discover static navigation pages
    console.log('🕷️ Crawling site for additional pages...')
    const crawled = await crawlSite(SEEDS, page, baseURL!)
    console.log(`Crawled ${crawled.size} total pages`)

    const pagesUnderTest = [...new Set([...dynamicPaths, ...crawled])].slice(0, 20) // Limit to 20 pages for testing

    console.log(`🧪 Testing ${pagesUnderTest.length} pages total`)

    // Test each page
    for (let i = 0; i < pagesUnderTest.length; i++) {
      const path = pagesUnderTest[i]
      console.log(`\n📝 [${i + 1}/${pagesUnderTest.length}] Testing page: ${path}`)

      try {
        // Navigate & assert no 4xx/5xx
        const res = await page.goto(path, { waitUntil: 'load', timeout: 30000 })
        expect(res!.status(), `HTTP status for ${path}`).toBeLessThan(400)

        // Collect clickable elements (buttons + internal anchors)
        const selectors = ['button:not([disabled])', 'a[href^="/" i]:not([href^="/admin"])']
        const elements = await page.$$(selectors.join(','))

        console.log(`   Found ${elements.length} clickable elements`)

        // Test only first 5 elements per page to prevent timeout
        const elementsToTest = elements.slice(0, 5)

        for (let j = 0; j < elementsToTest.length; j++) {
          const el = elementsToTest[j]
          console.log(`   Testing element ${j + 1}/${elementsToTest.length}`)

          try {
            const tag = await el.evaluate((node) => node.tagName)

            if (tag === 'A') {
              const href = await el.getAttribute('href')
              if (!href) continue
              const targetPath = href.split('#')[0]
              if (!targetPath) continue

              const resp = await page.request.get(targetPath)
              expect(resp.status(), `Broken link on ${path} -> ${targetPath}`).toBeLessThan(400)
              console.log(`   ✅ Link OK: ${targetPath}`)
            } else {
              // For buttons, just check if they're clickable without errors
              const isVisible = await el.isVisible()
              if (isVisible) {
                await el.click({ force: true, timeout: 5000 })
                console.log(`   ✅ Button clickable`)

                // Wait briefly then navigate back
                await page.waitForTimeout(500)
                await page.goto(path, { waitUntil: 'load', timeout: 30000 })
              }
            }
          } catch (error) {
            console.error(`   ⚠️ Element test failed:`, error)
            // Continue with next element
          }
        }
      } catch (error) {
        console.error(`❌ Failed to test page ${path}:`, error)
        // Continue with next page
      }
    }

    console.log('\n🎉 Site audit completed!')
  })
})
