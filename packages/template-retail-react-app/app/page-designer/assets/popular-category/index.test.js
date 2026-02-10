/*
 * Copyright (c) 2025, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import {renderWithProviders} from '@salesforce/retail-react-app/app/utils/test-utils'
import PopularCategory from '@salesforce/retail-react-app/app/page-designer/assets/popular-category/index'

const DEFAULT_PROPS = {
    category: {
        id: 'cat-shoes',
        name: 'Shoes'
    },
    image: {
        path: '/images/shoes.png',
        alt: 'Shoes Category',
        focal_point: {x: 0.5, y: 0.5}
    },
    categoryUrl: '/category/shoes'
}

test('PopularCategory renders image with correct src', () => {
    const {getByTestId} = renderWithProviders(<PopularCategory {...DEFAULT_PROPS} />)

    expect(getByTestId('popular-category-image')).toHaveAttribute('src', '/images/shoes.png')
})

test('PopularCategory renders category name', () => {
    const {getByText} = renderWithProviders(<PopularCategory {...DEFAULT_PROPS} />)

    expect(getByText('Shoes')).toBeInTheDocument()
})

test('PopularCategory falls back to category id when name is missing', () => {
    const props = {...DEFAULT_PROPS, category: {id: 'cat-shoes'}}
    const {getByText} = renderWithProviders(<PopularCategory {...props} />)

    expect(getByText('cat-shoes')).toBeInTheDocument()
})

test('PopularCategory does not render image when image path is missing', () => {
    const {queryByTestId} = renderWithProviders(
        <PopularCategory category={DEFAULT_PROPS.category} />
    )

    expect(queryByTestId('popular-category-image')).toBeNull()
})
