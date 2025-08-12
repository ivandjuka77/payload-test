import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './tests/e2e',
  timeout: 300_000, // 5 minutes for full site crawl
  retries: 0,
  workers: 1, // Run tests sequentially to avoid overwhelming the server
  reporter: [['list'], ['html', { outputFolder: 'playwright-report', open: 'never' }]],
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
    headless: false, // Show the browser window
    viewport: { width: 1280, height: 800 },
    ignoreHTTPSErrors: true,
    actionTimeout: 10000, // 10 seconds for individual actions
    navigationTimeout: 30000, // 30 seconds for navigation
  },
})
