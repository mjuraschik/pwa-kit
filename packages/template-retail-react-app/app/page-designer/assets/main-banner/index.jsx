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
 * MainBanner component for Page Designer.
 * Renders a main banner with image, heading, and call-to-action.
 *
 * @param {object} props
 * @param {object} props.image - The banner image.
 * @param {string} props.heading - The banner heading text.
 * @param {string} props.callToActionUrl - The CTA link URL.
 * @param {string} props.callToActionText - The CTA link text.
 * @returns {React.ReactElement} - MainBanner component.
 */
export const MainBanner = ({image, heading, callToActionUrl, callToActionText}) => {
    return (
        <Box className={'main-banner'} position="relative" width="100%">
            {image?.path && (
                <Image
                    className={'main-banner-image'}
                    data-testid={'main-banner-image'}
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
            {heading && (
                <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    textAlign="center"
                >
                    <Text as="h2" fontSize="3xl" fontWeight="bold" color="white">
                        {heading}
                    </Text>
                    {callToActionUrl && callToActionText && (
                        <Link to={callToActionUrl}>
                            <Text as="span" color="white" textDecoration="underline">
                                {callToActionText}
                            </Text>
                        </Link>
                    )}
                </Box>
            )}
        </Box>
    )
}

MainBanner.propTypes = {
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

export default MainBanner
