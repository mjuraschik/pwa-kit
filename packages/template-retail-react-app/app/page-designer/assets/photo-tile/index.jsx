/*
 * Copyright (c) 2025, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import PropTypes from 'prop-types'
import {Box, Image} from '@salesforce/retail-react-app/app/components/shared/ui'

/**
 * PhotoTile component for Page Designer.
 * Renders a photo tile with an image.
 *
 * @param {object} props
 * @param {object} props.image - The image object containing url and alt text.
 * @returns {React.ReactElement} - PhotoTile component.
 */
export const PhotoTile = ({image}) => {
    if (!image?.path) {
        return null
    }

    return (
        <Box className={'photo-tile'}>
            <figure className={'photo-tile-figure'}>
                <Image
                    className={'photo-tile-image'}
                    data-testid={'photo-tile-image'}
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

PhotoTile.propTypes = {
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

export default PhotoTile
