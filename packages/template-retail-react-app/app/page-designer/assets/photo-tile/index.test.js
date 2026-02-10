/*
 * Copyright (c) 2025, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import {renderWithProviders} from '@salesforce/retail-react-app/app/utils/test-utils'
import PhotoTile from '@salesforce/retail-react-app/app/page-designer/assets/photo-tile/index'

const DEFAULT_PROPS = {
    image: {
        path: '/images/photo.png',
        alt: 'Photo Alt',
        focal_point: {x: 0.5, y: 0.5}
    }
}

test('PhotoTile renders image with correct src', () => {
    const {getByTestId} = renderWithProviders(<PhotoTile {...DEFAULT_PROPS} />)

    expect(getByTestId('photo-tile-image')).toHaveAttribute('src', '/images/photo.png')
})

test('PhotoTile renders image with alt text', () => {
    const {getByTestId} = renderWithProviders(<PhotoTile {...DEFAULT_PROPS} />)

    expect(getByTestId('photo-tile-image')).toHaveAttribute('alt', 'Photo Alt')
})

test('PhotoTile renders nothing when image path is missing', () => {
    const {container} = renderWithProviders(<PhotoTile />)

    expect(container.querySelector('.photo-tile')).toBeNull()
})

test('PhotoTile renders nothing when image has no path', () => {
    const {container} = renderWithProviders(<PhotoTile image={{alt: 'No Path'}} />)

    expect(container.querySelector('.photo-tile')).toBeNull()
})
