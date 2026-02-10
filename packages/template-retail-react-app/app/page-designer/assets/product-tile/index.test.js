/*
 * Copyright (c) 2025, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import {renderWithProviders} from '@salesforce/retail-react-app/app/utils/test-utils'
import ProductTile from '@salesforce/retail-react-app/app/page-designer/assets/product-tile/index'

const DEFAULT_PROPS = {
    product: {
        id: 'prod-001',
        name: 'Classic Shirt',
        price: 29.99
    },
    image: {
        path: '/images/shirt.png',
        alt: 'Classic Shirt Image',
        focal_point: {x: 0.5, y: 0.5}
    }
}

test('ProductTile renders image with correct src', () => {
    const {getByTestId} = renderWithProviders(<ProductTile {...DEFAULT_PROPS} />)

    expect(getByTestId('product-tile-image')).toHaveAttribute('src', '/images/shirt.png')
})

test('ProductTile renders product name', () => {
    const {getByText} = renderWithProviders(<ProductTile {...DEFAULT_PROPS} />)

    expect(getByText('Classic Shirt')).toBeInTheDocument()
})

test('ProductTile renders product price', () => {
    const {getByText} = renderWithProviders(<ProductTile {...DEFAULT_PROPS} />)

    expect(getByText('$29.99')).toBeInTheDocument()
})

test('ProductTile does not render image when image path is missing', () => {
    const {queryByTestId} = renderWithProviders(<ProductTile product={DEFAULT_PROPS.product} />)

    expect(queryByTestId('product-tile-image')).toBeNull()
})
