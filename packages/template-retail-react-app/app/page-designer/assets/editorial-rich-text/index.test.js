/*
 * Copyright (c) 2025, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import {renderWithProviders} from '@salesforce/retail-react-app/app/utils/test-utils'
import EditorialRichText from '@salesforce/retail-react-app/app/page-designer/assets/editorial-rich-text/index'

test('EditorialRichText renders rich text HTML content', () => {
    const {container} = renderWithProviders(<EditorialRichText richText="<p>Hello World</p>" />)

    expect(container.querySelector('.editorial-rich-text')).not.toBeNull()
    expect(container.querySelector('p')).toHaveTextContent('Hello World')
})

test('EditorialRichText renders nothing when richText is not provided', () => {
    const {container} = renderWithProviders(<EditorialRichText />)

    expect(container.querySelector('.editorial-rich-text')).toBeNull()
})

test('EditorialRichText renders nothing when richText is empty string', () => {
    const {container} = renderWithProviders(<EditorialRichText richText="" />)

    expect(container.querySelector('.editorial-rich-text')).toBeNull()
})
