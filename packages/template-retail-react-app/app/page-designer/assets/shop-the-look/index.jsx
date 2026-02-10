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
 * ShopTheLook component for Page Designer.
 * Renders a "Shop the Look" tile with image and link.
 *
 * @param {object} props
 * @param {object} props.image - The image for the look.
 * @param {string} props.heading - Heading text for the look.
 * @param {string} props.callToActionUrl - The CTA link URL.
 * @param {string} props.callToActionText - The CTA link text.
 * @returns {React.ReactElement} - ShopTheLook component.
 */
export const ShopTheLook = ({image, heading, callToActionUrl, callToActionText}) => {
    return (
        <Box className={'shop-the-look'} position="relative" width="100%">
            {image?.path && (
                <Image
                    className={'shop-the-look-image'}
                    data-testid={'shop-the-look-image'}
                    src={image.path}
                    ignoreFallback={true}
                    alt={image?.alt || heading || ''}
                    width="100%"
                    objectFit="cover"
                    objectPosition={
                        image?.focal_point
                            ? `${image.focal_point.x * 100}% ${image.focal_point.y * 100}%`
                            : undefined
                    }
                />
            )}
            <Box textAlign="center" mt={2}>
                {heading && (
                    <Text as="h3" fontSize="lg" fontWeight="semibold">
                        {heading}
                    </Text>
                )}
                {callToActionUrl && callToActionText && (
                    <Link to={callToActionUrl}>
                        <Text as="span" color="blue.600" textDecoration="underline">
                            {callToActionText}
                        </Text>
                    </Link>
                )}
            </Box>
        </Box>
    )
}

ShopTheLook.propTypes = {
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
    heading: PropTypes.string,
    callToActionUrl: PropTypes.string,
    callToActionText: PropTypes.string
}

export default ShopTheLook
