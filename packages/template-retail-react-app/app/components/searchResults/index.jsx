/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React from 'react'
import PropTypes from 'prop-types'
import {Box, Flex, Heading, Stack, Image, Link, HStack, Text} from '@chakra-ui/react'
import {useIntl} from 'react-intl'

import Section from '../section'
import ProductScroller from '../product-scroller'
import {HOME_SHOP_PRODUCTS_CATEGORY_ID, HOME_SHOP_PRODUCTS_LIMIT} from '@salesforce/retail-react-app/app/constants'
import {useProductSearch} from '@salesforce/commerce-sdk-react'

const SearchResults = ({title, ...props}) => {
    const intl = useIntl()
    const {data: productSearchResult, isLoading} = useProductSearch({
        parameters: {
            allImages: true,
            allVariationProperties: true,
            expand: ['promotions', 'variations', 'prices', 'images', 'custom_properties'],
            limit: HOME_SHOP_PRODUCTS_LIMIT,
            perPricebook: true,
            refine: [`cgid=${HOME_SHOP_PRODUCTS_CATEGORY_ID}`, 'htype=master']
        }
    })

    if (!productSearchResult) {
        return null;
    }

    return (
        <Section
            padding={4}
            paddingTop={16}
            title={title}
            subtitle={intl.formatMessage(
                {
                    defaultMessage: 'Shop Products',
                    id: 'home.description.shop_products',
                    description:
                        '{docLink} is a html button that links the user to https://sfdc.co/business-manager-manage-catalogs'
                },
                {
                    docLink: (
                        <Link
                            target="_blank"
                            href={'https://sfdc.co/business-manager-manage-catalogs'}
                            textDecoration={'none'}
                            position={'relative'}
                            _after={{
                                position: 'absolute',
                                content: `""`,
                                height: '2px',
                                bottom: '-2px',
                                margin: '0 auto',
                                left: 0,
                                right: 0,
                                background: 'gray.700'
                            }}
                            _hover={{textDecoration: 'none'}}
                        >
                            {intl.formatMessage({
                                defaultMessage: 'Read docs',
                                id: 'home.link.read_docs'
                            })}
                        </Link>
                    )
                }
            )}
        >
            <Stack pt={8} spacing={16}>
                <ProductScroller products={productSearchResult?.hits} isLoading={isLoading} />
            </Stack>
        </Section>
    )
}

SearchResults.displayName = 'SearchResults'
SearchResults.isDesignComponent = true

SearchResults.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
}

export default SearchResults
