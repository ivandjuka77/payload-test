// tests/e2e/utils/crawler.ts
import { Page } from '@playwright/test'

export async function crawlSite(
  startPaths: string[],
  page: Page,
  baseURL: string,
): Promise<Set<string>> {
  const visited = new Set<string>()
  const queue: string[] = [...startPaths]

  while (queue.length) {
    const path = queue.shift()!
    if (visited.has(path)) continue
    visited.add(path)

    console.log(`Crawling: ${path}`)

    try {
      const res = await page.goto(`${baseURL}${path}`, { waitUntil: 'load', timeout: 30000 })
      if (!res || res.status() >= 400) {
        console.error(`❌ HTTP ${res?.status()} on ${path}`)
        continue
      }

      // Collect internal <a> hrefs on this page
      const anchors = await page
        .$$eval('a[href^="/" i]:not([href^="/admin"])', (els: Element[]) =>
          els.map((a) => (a as HTMLAnchorElement).getAttribute('href')!),
        )
        .catch(() => []) // Handle pages with no matching links

      const newLinks = anchors
        .map((href: string) => href.split('#')[0]) // strip hash navigation
        .filter(Boolean)
        .filter((href: string) => !visited.has(href))
        .slice(0, 5) // Limit to 5 new links per page to prevent explosion

      newLinks.forEach((href: string) => queue.push(href))
      console.log(`Found ${newLinks.length} new links on ${path}`)
    } catch (error) {
      console.error(`Error crawling ${path}:`, error)
    }
  }

  return visited
}
