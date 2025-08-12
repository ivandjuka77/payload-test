// tests/e2e/utils/sitemap.ts
import { parseStringPromise } from 'xml2js'
import fetch from 'node-fetch'

export async function fetchSitemapUrls(
  baseURL: string,
  paths = ['/pages-sitemap.xml', '/posts-sitemap.xml'],
): Promise<string[]> {
  const urls: string[] = []
  for (const p of paths) {
    const res = await fetch(new URL(p, baseURL).toString())
    if (!res.ok) continue
    const xml = await res.text()
    const data = await parseStringPromise(xml)
    const locs = data.urlset.url.map((u: any) => u.loc[0])
    urls.push(...locs)
  }
  return urls.map((u) => new URL(u).pathname)
}
