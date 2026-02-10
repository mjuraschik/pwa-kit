/*
 * Copyright (c) 2025, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import {renderWithProviders} from '@salesforce/retail-react-app/app/utils/test-utils'
import MainBanner from '@salesforce/retail-react-app/app/page-designer/assets/main-banner/index'

const DEFAULT_PROPS = {
    image: {
        path: '/images/banner.png',
        alt: 'Banner Alt',
        focal_point: {x: 0.5, y: 0.5}
    },
    heading: 'New Arrivals',
    callToActionUrl: '/new-arrivals',
    callToActionText: 'Shop Now'
}

test('MainBanner renders image with correct src', () => {
    const {getByTestId} = renderWithProviders(<MainBanner {...DEFAULT_PROPS} />)

    expect(getByTestId('main-banner-image')).toHaveAttribute('src', '/images/banner.png')
})

test('MainBanner renders heading text', () => {
    const {getByText} = renderWithProviders(<MainBanner {...DEFAULT_PROPS} />)

    expect(getByText('New Arrivals')).toBeInTheDocument()
})

test('MainBanner renders call-to-action link', () => {
    const {getByText} = renderWithProviders(<MainBanner {...DEFAULT_PROPS} />)

    expect(getByText('Shop Now')).toBeInTheDocument()
})

test('MainBanner renders without image when image path is missing', () => {
    const {queryByTestId} = renderWithProviders(<MainBanner heading="No Image" />)

    expect(queryByTestId('main-banner-image')).toBeNull()
})

test('MainBanner does not render heading when not provided', () => {
    const {queryByText} = renderWithProviders(<MainBanner image={DEFAULT_PROPS.image} />)

    expect(queryByText('New Arrivals')).toBeNull()
})
