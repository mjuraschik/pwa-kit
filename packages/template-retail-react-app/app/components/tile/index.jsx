/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React from 'react'
import PropTypes from 'prop-types'
import {Box, Flex, Heading, Stack, Image, Link, HStack, Text} from '@chakra-ui/react'
import {BrandLogo, FigmaLogo, GithubLogo} from '../icons'
import SearchResults from '../searchResults'


const Tile = ({title, icon, ...props}) => {

    const iconCmps = {
        github: <GithubLogo width={12} height={12} />,
        figma: <FigmaLogo width={12} height={8} />,
        managed: <BrandLogo width={12} height={8} />
    }

    return (
        <Link target="_blank" href={props.href}>
            <Box
                background={'white'}
                boxShadow="0px 2px 2px rgba(0, 0, 0, 0.1)"
                borderRadius={'4px'}
            >
                <HStack>
                    <Flex
                        paddingLeft={6}
                        height={24}
                        align={'center'}
                        justify={'center'}
                    >
                        {iconCmps[icon]}
                    </Flex>
                    <Text fontWeight="700">
                        {title}
                    </Text>
                </HStack>
            </Box>
        </Link>
    )
}

Tile.displayName = 'Tile'
Tile.isDesignComponent = true


Tile.propTypes = {
    title: PropTypes.string,

    icon: PropTypes.string,

    href: PropTypes.string
}

export default Tile
