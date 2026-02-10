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
import PopularCategories from '@salesforce/retail-react-app/app/page-designer/layouts/popular-categories/index'

test('PopularCategories renders without errors', () => {
    const PopularCategoriesWithPageProvider = withPageProvider(PopularCategories)
    const {container} = renderWithProviders(
        <PopularCategoriesWithPageProvider
            regions={[
                {
                    components: [
                        {
                            data: {richText: '<p>Category 1</p>'},
                            id: 'comp1',
                            typeId: 'commerce_assets.editorialRichText'
                        }
                    ],
                    id: 'column1'
                },
                {
                    components: [
                        {
                            data: {richText: '<p>Category 2</p>'},
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
