/*
 * Copyright (c) 2025, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import PropTypes from 'prop-types'
import {Box} from '@salesforce/retail-react-app/app/components/shared/ui'

/**
 * EditorialRichText component for Page Designer.
 * Renders rich text content from Page Designer.
 *
 * @param {object} props
 * @param {string} props.richText - The rich text HTML content.
 * @returns {React.ReactElement} - EditorialRichText component.
 */
export const EditorialRichText = ({richText}) => {
    if (!richText) {
        return null
    }

    return (
        <Box className={'editorial-rich-text'}>
            {/* The `dangerouslySetInnerHTML` is safe to use in this context. */}
            {/* The HTML in the response from Page Designer API is already sanitized. */}
            <Box
                dangerouslySetInnerHTML={{__html: richText}}
                sx={{
                    ['h1, h2, h3, h4, h5, h6']: {
                        fontSize: 'revert',
                        fontWeight: 'revert'
                    },
                    p: {
                        marginBottom: '1em'
                    }
                }}
            />
        </Box>
    )
}

EditorialRichText.propTypes = {
    richText: PropTypes.string
}

export default EditorialRichText
