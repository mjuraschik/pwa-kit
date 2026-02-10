/*
 * Copyright (c) 2023, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import PropTypes from 'prop-types'
import {
    Box,
    Image,
    Link as ChakraLink,
    Text
} from '@salesforce/retail-react-app/app/components/shared/ui'
import Link from '@salesforce/retail-react-app/app/components/link'
import {isAbsoluteURL} from '@salesforce/retail-react-app/app/page-designer/utils'

/**
 * Image with text component
 *
 * @param {object} props
 * @param {string} - props.ITCLink - Image Link.
 * @param {string} - props.ITCText - Text Below Image.
 * @param {image} - props.image - Image.
 * @param {string} - props.heading - Text Overlay.
 * @param {string} - props.alt - The image alt text shown by the component.
 * @returns {React.ReactElement} - ImageWithText component.
 */
export const ImageWithText = ({ITCLink, ITCText, image, heading, alt}) => {
    if (!image?.path) {
        return null
    }
    const hasCaption = ITCText || heading
    const isAbsolute = isAbsoluteURL(ITCLink)
    const LinkWrapper = isAbsolute ? ChakraLink : Link
    const linkProps = isAbsolute ? {href: ITCLink} : {to: ITCLink}

    const ImageComponent = () => (
        <Image
            className={'image-with-text-image'}
            data-testid={'image-with-text-image'}
            src={image.path}
            ignoreFallback={true}
            alt={alt}
            title={alt}
            width="100%"
            objectFit="cover"
            objectPosition={
                image?.focal_point
                    ? `${image.focal_point.x * 100}% ${image.focal_point.y * 100}%`
                    : undefined
            }
            filter={heading ? 'brightness(40%)' : undefined}
        />
    )

    return (
        <Box className={'image-with-text'} width="100%">
            <Box
                as="figure"
                className={'image-with-text-figure'}
                position={'relative'}
                margin={0}
                width={'100%'}
            >
                {ITCLink ? (
                    <LinkWrapper {...linkProps}>
                        <ImageComponent />
                    </LinkWrapper>
                ) : (
                    <ImageComponent />
                )}
                {hasCaption && (
                    <Text as="figcaption">
                        {heading && (
                            <Box
                                className={'image-with-text-heading-container'}
                                position={'absolute'}
                                top={'50%'}
                                width={'100%'}
                                transform={'translateY(-50%)'}
                                padding={'15px'}
                                textAlign={{base: 'center', sm: 'left'}}
                            >
                                <Text
                                    as="span"
                                    className={'image-with-text-heading-text'}
                                    color={'white'}
                                >
                                    {/* The `dangerouslySetInnerHTML` is safe to use in this context. */}
                                    {/* The HTML in the response from Page Designer API is already sanitized. */}
                                    <Box
                                        dangerouslySetInnerHTML={{
                                            __html: heading
                                        }}
                                        sx={{
                                            ['h1, h2, h3, h4, h5, h6']: {
                                                fontSize: 'revert',
                                                fontWeight: 'revert'
                                            },
                                            p: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }
                                        }}
                                    />
                                </Text>
                            </Box>
                        )}
                        {ITCText && (
                            <Box>
                                <Text as="span" className={'image-with-text-text-underneath'}>
                                    {/* The `dangerouslySetInnerHTML` is safe to use in this context. */}
                                    {/* The HTML in the response from Page Designer API is already sanitized. */}
                                    <Box
                                        dangerouslySetInnerHTML={{
                                            __html: ITCText
                                        }}
                                        sx={{
                                            p: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }
                                        }}
                                    />
                                </Text>
                            </Box>
                        )}
                    </Text>
                )}
            </Box>
        </Box>
    )
}

ImageWithText.propTypes = {
    ITCLink: PropTypes.string,
    ITCText: PropTypes.string,
    image: PropTypes.shape({
        path: PropTypes.string,
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
    alt: PropTypes.string
}

export default ImageWithText
