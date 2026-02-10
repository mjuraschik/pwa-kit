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
 * ProductTile component for Page Designer.
 * Renders a product tile with image, name, and price.
 *
 * @param {object} props
 * @param {object} props.product - The product data.
 * @param {object} props.image - The product image.
 * @returns {React.ReactElement} - ProductTile component.
 */
export const ProductTile = ({product, image}) => {
    const name = product?.name || ''
    const productUrl = product?.id ? `/product/${product.id}` : '#'

    return (
        <Box className={'product-tile'} textAlign="center">
            <Link to={productUrl}>
                {image?.path && (
                    <Image
                        className={'product-tile-image'}
                        data-testid={'product-tile-image'}
                        src={image.path}
                        ignoreFallback={true}
                        alt={name}
                        width="100%"
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
                {product?.price && (
                    <Text as="p" fontSize="sm" color="gray.600">
                        ${product.price}
                    </Text>
                )}
            </Link>
        </Box>
    )
}

ProductTile.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.number,
        image: PropTypes.shape({
            url: PropTypes.string,
            alt: PropTypes.string
        })
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
    })
}

export default ProductTile
