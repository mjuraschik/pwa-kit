/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React from 'react'
import PropTypes from 'prop-types'
import {Box, Flex, Heading, Stack, Image, Button, Link} from '@chakra-ui/react'
import Hero from '../hero'

const SmartHero = ({title, img, ...props}) => {
    if (typeof img === 'string') {
        img = JSON.parse(img)
    }
    return (
        <Hero
            title={title}
            img={img.path}
            actions={
                <Stack spacing={{base: 4, sm: 6}} direction={{base: 'column', sm: 'row'}}>
                    <Button
                        as={Link}
                        href={props.button.href}
                        target="_blank"
                        width={{base: 'full', md: 'inherit'}}
                        paddingX={7}
                        _hover={{textDecoration: 'none'}}
                    >
                        {props.button.text}
                    </Button>
                </Stack>
            }
        />
    )
}

SmartHero.displayName = 'Hero'
SmartHero.isDesignComponent = true

SmartHero.propTypes = {
    /**
     * Hero component image
     */
    img: PropTypes.shape({
        path: PropTypes.string,
        alt: PropTypes.string
    }),
    /**
     * Hero component main title
     */
    title: PropTypes.string,

    button: PropTypes.shape({
        href: PropTypes.string,
        text: PropTypes.string
    })
}

export default SmartHero
