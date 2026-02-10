/*
 * Copyright (c) 2025, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import {renderWithProviders} from '@salesforce/retail-react-app/app/utils/test-utils'
import Category from '@salesforce/retail-react-app/app/page-designer/assets/category/index'

const DEFAULT_PROPS = {
    category: {
        id: 'cat-123',
        name: 'Womens'
    },
    image: {
        path: '/images/womens.png',
        alt: 'Womens Category',
        focal_point: {x: 0.5, y: 0.5}
    },
    categoryUrl: '/category/womens'
}

test('Category renders image with correct src', () => {
    const {getByTestId} = renderWithProviders(<Category {...DEFAULT_PROPS} />)

    expect(getByTestId('category-image')).toHaveAttribute('src', '/images/womens.png')
})

test('Category renders category name', () => {
    const {getByText} = renderWithProviders(<Category {...DEFAULT_PROPS} />)

    expect(getByText('Womens')).toBeInTheDocument()
})

test('Category falls back to category id when name is missing', () => {
    const props = {...DEFAULT_PROPS, category: {id: 'cat-123'}}
    const {getByText} = renderWithProviders(<Category {...props} />)

    expect(getByText('cat-123')).toBeInTheDocument()
})

test('Category does not render image when image path is missing', () => {
    const {queryByTestId} = renderWithProviders(<Category category={DEFAULT_PROPS.category} />)

    expect(queryByTestId('category-image')).toBeNull()
})
