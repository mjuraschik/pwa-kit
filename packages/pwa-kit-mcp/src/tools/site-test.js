/*
 * Copyright (c) 2025, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import {runPerformanceTest} from './site-test-performance'
import {runAccessibilityTest} from './site-test-accessibility'

const DEFAULT_SITE_URL = 'https://pwa-kit.mobify-storefront.com'

export class TestWithPlaywrightTool {
    /**
     * Runs a Playwright test file by name (e.g., 'performance' or 'accessibility')
     * @param {string} test_type - 'performance' or 'accessibility'
     * @param {string} [site_url] - Optional site URL to test
     * @returns {object} - Result of the test run
     */
    async run(test_type, site_url = DEFAULT_SITE_URL) {
        switch (test_type) {
            case 'performance': {
                return runPerformanceTest(site_url)
            }
            case 'accessibility': {
                return runAccessibilityTest(site_url)
            }
            default: {
                const result = {error: 'unsupported test type'}
                console.log('Unsupported test type result:', result)
                return result
            }
        }
    }
}
