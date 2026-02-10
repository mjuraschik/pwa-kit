/*
 * Copyright (c) 2023, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import PropTypes from 'prop-types'
import {Box, Image} from '@salesforce/retail-react-app/app/components/shared/ui'

/**
 * Simple ImageTile component that can be used inside any Layout component.
 * @param image Object containing the image path, focal_point and meta_data.
 * @returns {JSX.Element}
 */
export const ImageTile = ({image}) => {
    if (!image?.path) {
        return null
    }

    return (
        <Box className={'image-tile'}>
            <figure className={'image-tile-figure'}>
                <Image
                    className={'image-tile-image'}
                    data-testid={'image-tile-image'}
                    src={image.path}
                    ignoreFallback={true}
                    alt={image?.alt || ''}
                    title={image?.alt}
                    width="100%"
                    objectPosition={
                        image?.focal_point
                            ? `${image.focal_point.x * 100}% ${image.focal_point.y * 100}%`
                            : undefined
                    }
                />
            </figure>
        </Box>
    )
}

ImageTile.propTypes = {
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

export default ImageTile
