/*
 * Copyright (c) 2025, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import {
    renderWithProviders,
    withPageProvider
} from '@salesforce/retail-react-app/app/utils/test-utils'
import MobileGridLookBook from '@salesforce/retail-react-app/app/page-designer/layouts/mobileGridLookBook/index'

test('MobileGridLookBook renders without errors', () => {
    const MobileGridLookBookWithPageProvider = withPageProvider(MobileGridLookBook)
    const {container} = renderWithProviders(
        <MobileGridLookBookWithPageProvider
            regions={[
                {
                    components: [
                        {
                            data: {richText: '<p>Look 1</p>'},
                            id: 'comp1',
                            typeId: 'commerce_assets.editorialRichText'
                        }
                    ],
                    id: 'column1'
                },
                {
                    components: [
                        {
                            data: {richText: '<p>Look 2</p>'},
                            id: 'comp2',
                            typeId: 'commerce_assets.editorialRichText'
                        }
                    ],
                    id: 'column2'
                }
            ]}
        />
    )
    expect(container).toBeDefined()
})
