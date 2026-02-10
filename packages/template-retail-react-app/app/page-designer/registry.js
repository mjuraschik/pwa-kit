/*
 * Copyright (c) 2025, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import {registry} from '@salesforce/commerce-sdk-react'

/**
 * Initialize the component registry with all Page Designer components.
 *
 * This function registers lazy-loaded importers for Page Designer components,
 * allowing them to be dynamically loaded when needed. This reduces the initial
 * bundle size and improves performance.
 *
 * Component Type IDs follow the pattern: `{namespace}.{componentId}`
 * - commerce_assets: Visual components (images, text, etc.)
 * - commerce_layouts: Layout components (grids, carousels, etc.)
 *
 * @example
 * // Call this once during app initialization
 * initializeRegistry();
 *
 * // The registry will then lazy-load components as needed
 * const Component = registry.getComponent('commerce_assets.imageTile');
 */
export function initializeRegistry() {
    // Commerce Assets - Visual components
    registry.registerImporter('commerce_assets.imageTile', () => import('./assets/image-tile'))
    registry.registerImporter('commerce_assets.imageAndText', () =>
        import('./assets/image-with-text')
    )
    registry.registerImporter('commerce_assets.productTile', () =>
        import('./assets/image-with-text')
    )
    registry.registerImporter('commerce_assets.photoTile', () => import('./assets/photo-tile'))
    registry.registerImporter('commerce_assets.editorialRichText', () =>
        import('./assets/editorial-rich-text')
    )
    registry.registerImporter('commerce_assets.campaignBanner', () =>
        import('./assets/campaign-banner')
    )
    registry.registerImporter('commerce_assets.mainBanner', () => import('./assets/main-banner'))
    registry.registerImporter('commerce_assets.category', () => import('./assets/category'))
    registry.registerImporter('commerce_assets.popularCategory', () =>
        import('./assets/popular-category')
    )
    registry.registerImporter('commerce_assets.shopTheLook', () => import('./assets/shop-the-look'))
    registry.registerImporter('commerce_assets.productTile', () => import('./assets/product-tile'))

    // Commerce Layouts - Layout components
    registry.registerImporter('commerce_layouts.carousel', () => import('./layouts/carousel'))
    registry.registerImporter('commerce_layouts.mobileGrid1r1c', () =>
        import('./layouts/mobileGrid1r1c')
    )
    registry.registerImporter('commerce_layouts.mobileGrid2r1c', () =>
        import('./layouts/mobileGrid2r1c')
    )
    registry.registerImporter('commerce_layouts.mobileGrid2r2c', () =>
        import('./layouts/mobileGrid2r2c')
    )
    registry.registerImporter('commerce_layouts.mobileGrid2r3c', () =>
        import('./layouts/mobileGrid2r3c')
    )
    registry.registerImporter('commerce_layouts.mobileGrid3r1c', () =>
        import('./layouts/mobileGrid3r1c')
    )
    registry.registerImporter('commerce_layouts.mobileGrid3r2c', () =>
        import('./layouts/mobileGrid3r2c')
    )
    registry.registerImporter('commerce_layouts.popularCategories', () =>
        import('./layouts/popular-categories')
    )
    registry.registerImporter('commerce_layouts.mobileGridLookBook', () =>
        import('./layouts/mobileGridLookBook')
    )
}
