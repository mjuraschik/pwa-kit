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
 * MobileGridLookBook layout component for Page Designer.
 * Displays child components in a grid layout optimized for look book content.
 *
 * @param {object} props
 * @param {Array} props.regions - The page designer regions for this component.
 * @returns {React.ReactElement} - MobileGridLookBook layout component.
 */
export const MobileGridLookBook = ({regions}) => (
    <SimpleGrid className="mobile-grid-look-book" columns={{base: 1, sm: 2, md: 3}} spacing={4}>
        {regions.map((region) => {
            const component = {
                regions
            }
            return <Region key={region.id} regionId={region.id} component={component} />
        })}
    </SimpleGrid>
)

MobileGridLookBook.displayName = 'MobileGridLookBook'

MobileGridLookBook.propTypes = {
    regions: PropTypes.arrayOf(regionPropType).isRequired
}

export default MobileGridLookBook
