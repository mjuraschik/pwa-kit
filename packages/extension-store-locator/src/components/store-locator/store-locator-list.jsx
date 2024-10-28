/*
 * Copyright (c) 2024, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React from 'react'
import PropTypes from 'prop-types'
import {useStoreLocator} from '*/components/store-locator/use-store-locator'
// import {AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Box} from '@chakra-ui/react'
import {Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel} from '@chakra-ui/react/dist/cjs/accordion/index.cjs'
import {Box} from '@chakra-ui/react/dist/cjs/box/box.cjs'

export const StoreLocatorList = ({storesInfo}) => {
    const {searchStoresParams, config} = useStoreLocator()
    const displayStoreLocatorStatusMessage = () => {
        if (storesInfo === undefined)
            return 'Loading locations...'
        if (storesInfo.length === 0)
            return 'Sorry, there are no locations in this area'
        if (searchStoresParams.postalCode !== undefined)
            return `Viewing stores within ${config.defaultDistance}${config.defaultDistanceUnit} of ${searchStoresParams.postalCode} in 
                ${
                    config.supportedCountries.length !== 0
                        ? config.supportedCountries.find(
                              (o) => o.countryCode === searchStoresParams.countryCode
                          ).countryName
                        : config.defaultCountry
                }`
        else
            return 'Viewing stores near your location'
    }
    return <Accordion allowMultiple flex={[1, 1, 1, 5]}>
        {/* Details */}
        <AccordionItem>
                    <Box
                        flex="1"
                        fontWeight="semibold"
                        fontSize="md"
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: '20px'
                        }}
                    >
                        {displayStoreLocatorStatusMessage()}
                    </Box>
                </AccordionItem>
        {storesInfo?.map((store, index) => {
        return (
            <AccordionItem key={index}>
                <Box margin="10px">
                    {store.name ? <Box fontSize="lg">{store.name}</Box> : ''}
                    <Box fontSize="md" color="gray.600">
                        {store.address1}
                    </Box>
                    <Box fontSize="md" color="gray.600">
                        {store.city}, {store.stateCode ? store.stateCode : ''} {store.postalCode}
                    </Box>
                    {store.distance !== undefined ? (
                        <>
                            <br />
                            <Box fontSize="md" color="gray.600">
                                {store.distance} {store.distanceUnit}{' away'}
                            </Box>
                        </>
                    ) : (
                        ''
                    )}
                    {store.phone !== undefined ? (
                        <>
                            <br />
                            <Box fontSize="md" color="gray.600">
                                {'Phone: '}{store.phone}
                            </Box>
                        </>
                    ) : (
                        ''
                    )}
                    {store?.storeHours ? (
                        <>
                            {' '}
                            <AccordionButton color="blue.700" style={{marginTop: '10px'}}>
                                <Box fontSize="lg">
                                View More
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel mb={6} mt={4}>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: store?.storeHours
                                    }}
                                />
                            </AccordionPanel>{' '}
                        </>
                    ) : (
                        ''
                    )}
                </Box>
                </AccordionItem>
        )

    })}
    </Accordion>
}

StoreLocatorList.propTypes = {
    storesInfo: PropTypes.array
}
