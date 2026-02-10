/*
 * Copyright (c) 2025, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import PropTypes from 'prop-types'
import {SimpleGrid} from '@salesforce/retail-react-app/app/components/shared/ui'
import {Region, regionPropType} from '@salesforce/commerce-sdk-react/components'

/**
 * PopularCategories layout component for Page Designer.
 * Displays child components in a responsive grid suited for popular category tiles.
 *
 * @param {object} props
 * @param {Array} props.regions - The page designer regions for this component.
 * @returns {React.ReactElement} - PopularCategories layout component.
 */
export const PopularCategories = ({regions}) => (
    <SimpleGrid className="popular-categories" columns={{base: 2, sm: 3, md: 4, lg: 6}} spacing={4}>
        {regions.map((region) => {
            const component = {
                regions
            }
            return <Region key={region.id} regionId={region.id} component={component} />
        })}
    </SimpleGrid>
)

PopularCategories.displayName = 'PopularCategories'

PopularCategories.propTypes = {
    regions: PropTypes.arrayOf(regionPropType).isRequired
}

export default PopularCategories
