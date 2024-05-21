import { defineConfig, devices } from '@playwright/test';

export default defineConfig ({
    testDir: './src/test',
    timeout: 30 * 1000,
    expect: {
        timeout: 10 * 1000,
    },
    fullyParallel: true,
    forbidOnly: !!process.env['CI'],
    retries: process.env['CI'] ? 2 : 0,
    workers: process.env['CI'] ? 1 : undefined,
    reporter: [['html', {outputFolder: './report/playwright-report'}]],
    outputDir: './report/test-results',
    use: {
        actionTimeout: 0,
        baseURL: 'https://playwright.dev/',
        screenshot: 'on',
        trace: 'on-first-retry',
    },
    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome'],
                ignoreHTTPSErrors: true,
            }
        }
    ],
})