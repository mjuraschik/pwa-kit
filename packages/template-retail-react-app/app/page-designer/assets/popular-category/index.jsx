/*
 * Copyright (c) 2025, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import PropTypes from 'prop-types'
import {Box, Image, Text} from '@salesforce/retail-react-app/app/components/shared/ui'
import Link from '@salesforce/retail-react-app/app/components/link'

/**
 * PopularCategory component for Page Designer.
 * Renders a popular category tile with image and name.
 *
 * @param {object} props
 * @param {object} props.category - The category data.
 * @param {object} props.image - The category image.
 * @param {string} props.categoryUrl - The URL to the category page.
 * @returns {React.ReactElement} - PopularCategory component.
 */
export const PopularCategory = ({category, image, categoryUrl}) => {
    const name = category?.name || category?.id || ''
    const url = categoryUrl || (category?.id ? `/category/${category.id}` : '#')

    return (
        <Box className={'popular-category'} textAlign="center">
            <Link to={url}>
                {image?.path && (
                    <Image
                        className={'popular-category-image'}
                        data-testid={'popular-category-image'}
                        src={image.path}
                        ignoreFallback={true}
                        alt={name}
                        width="100%"
                        borderRadius="full"
                        objectFit="cover"
                        objectPosition={
                            image?.focal_point
                                ? `${image.focal_point.x * 100}% ${image.focal_point.y * 100}%`
                                : undefined
                        }
                    />
                )}
                {name && (
                    <Text as="p" fontSize="md" fontWeight="semibold" mt={2}>
                        {name}
                    </Text>
                )}
            </Link>
        </Box>
    )
}

PopularCategory.propTypes = {
    category: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string
    }),
    image: PropTypes.shape({
        path: PropTypes.string,
        alt: PropTypes.string,
        focal_point: PropTypes.shape({
            x: PropTypes.number,
            y: PropTypes.number
        }),
        meta_data: PropTypes.shape({
            height: PropTypes.number,
            width: PropTypes.number
        })
    }),
    categoryUrl: PropTypes.string
}

export default PopularCategory
