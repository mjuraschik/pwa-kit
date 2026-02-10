/*
 * Copyright (c) 2025, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import {renderWithProviders} from '@salesforce/retail-react-app/app/utils/test-utils'
import ShopTheLook from '@salesforce/retail-react-app/app/page-designer/assets/shop-the-look/index'

const DEFAULT_PROPS = {
    image: {
        path: '/images/look.png',
        alt: 'Look Alt',
        focal_point: {x: 0.5, y: 0.5}
    },
    heading: 'Summer Look',
    callToActionUrl: '/looks/summer',
    callToActionText: 'View Look'
}

test('ShopTheLook renders image with correct src', () => {
    const {getByTestId} = renderWithProviders(<ShopTheLook {...DEFAULT_PROPS} />)

    expect(getByTestId('shop-the-look-image')).toHaveAttribute('src', '/images/look.png')
})

test('ShopTheLook renders heading text', () => {
    const {getByText} = renderWithProviders(<ShopTheLook {...DEFAULT_PROPS} />)

    expect(getByText('Summer Look')).toBeInTheDocument()
})

test('ShopTheLook renders call-to-action link', () => {
    const {getByText} = renderWithProviders(<ShopTheLook {...DEFAULT_PROPS} />)

    expect(getByText('View Look')).toBeInTheDocument()
})

test('ShopTheLook renders without image when image path is missing', () => {
    const {queryByTestId} = renderWithProviders(<ShopTheLook heading="No Image Look" />)

    expect(queryByTestId('shop-the-look-image')).toBeNull()
})

test('ShopTheLook does not render CTA when url or text is missing', () => {
    const {queryByText} = renderWithProviders(
        <ShopTheLook image={DEFAULT_PROPS.image} heading="Test" callToActionUrl="/test" />
    )

    expect(queryByText('View Look')).toBeNull()
})
