/*
 * Copyright (c) 2025, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import {renderWithProviders} from '@salesforce/retail-react-app/app/utils/test-utils'
import CampaignBanner from '@salesforce/retail-react-app/app/page-designer/assets/campaign-banner/index'

const DEFAULT_PROPS = {
    image: {
        path: '/images/campaign.png',
        alt: 'Campaign Alt',
        focal_point: {x: 0.5, y: 0.5}
    },
    heading: 'Summer Sale',
    callToActionUrl: '/sale',
    callToActionText: 'Shop Now'
}

test('CampaignBanner renders image with correct src', () => {
    const {getByTestId} = renderWithProviders(<CampaignBanner {...DEFAULT_PROPS} />)

    expect(getByTestId('campaign-banner-image')).toHaveAttribute('src', '/images/campaign.png')
})

test('CampaignBanner renders heading text', () => {
    const {getByText} = renderWithProviders(<CampaignBanner {...DEFAULT_PROPS} />)

    expect(getByText('Summer Sale')).toBeInTheDocument()
})

test('CampaignBanner renders call-to-action link', () => {
    const {getByText} = renderWithProviders(<CampaignBanner {...DEFAULT_PROPS} />)

    expect(getByText('Shop Now')).toBeInTheDocument()
})

test('CampaignBanner renders without image when image path is missing', () => {
    const {queryByTestId} = renderWithProviders(<CampaignBanner heading="No Image" />)

    expect(queryByTestId('campaign-banner-image')).toBeNull()
})

test('CampaignBanner does not render heading when not provided', () => {
    const {queryByText} = renderWithProviders(<CampaignBanner image={DEFAULT_PROPS.image} />)

    expect(queryByText('Summer Sale')).toBeNull()
})
