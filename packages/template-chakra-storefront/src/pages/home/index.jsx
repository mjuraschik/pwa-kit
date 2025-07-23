/*
 * Copyright (c) 2022, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React, {useEffect} from 'react'
import {FormattedMessage, useIntl} from 'react-intl'
import {useLocation} from 'react-router-dom'
import homeJson from './home.json'

// Components
import {
    Box,
    Button,
    Container,
    Flex,
    HStack,
    Link,
    SimpleGrid,
    Text,
    VStack
} from '@chakra-ui/react'

// Project Components
import Section from '../../components/section'

// Others
import {features} from './data'

//Hooks
import useDataCloud from '../../hooks/use-datacloud'
import useEinstein from '../../hooks/use-einstein'

// Constants
import {useServerContext} from '@salesforce/pwa-kit-react-sdk/ssr/universal/hooks'
import {getConfig} from '@salesforce/pwa-kit-runtime/utils/ssr-config'
import {renderPage} from '../../utils/page-utils'


/**
 * This is the home page for Chakra Storefront.
 * The page is created for demonstration purposes.
 * The page renders SEO metadata and a few promotion
 * categories and products, data is from local file.
 */
const Home = () => {
    const intl = useIntl()
    const einstein = useEinstein()
    const dataCloud = useDataCloud()
    const {pathname} = useLocation()
    const {maxCacheAge: MAX_CACHE_AGE, staleWhileRevalidate: STALE_WHILE_REVALIDATE} = getConfig()
    const {res} = useServerContext()
    if (res) {
        res.set(
            'Cache-Control',
            `s-maxage=${MAX_CACHE_AGE}, stale-while-revalidate=${STALE_WHILE_REVALIDATE}`
        )
    }

    /**************** Einstein ****************/
    useEffect(() => {
        einstein.sendViewPage(pathname)
        dataCloud.sendViewPage(pathname)
    }, [])

    return (
        <Box data-testid="home-page" layerStyle="page">
            {renderPage(homeJson)}

            <Section
                padding={4}
                paddingTop={32}
                title={intl.formatMessage({
                    defaultMessage: 'Features',
                    id: 'home.heading.features'
                })}
                subtitle={intl.formatMessage({
                    defaultMessage:
                        'Out-of-the-box features so that you focus only on adding enhancements.',
                    id: 'home.description.features'
                })}
            >
                <Container maxW={'6xl'} marginTop={10}>
                    <SimpleGrid columns={{base: 1, md: 2, lg: 3}} spacing={10}>
                        {features.map((feature, index) => {
                            const featureMessage = feature.message
                            return (
                                <HStack key={index} align={'top'}>
                                    <VStack align={'start'}>
                                        <Flex
                                            width={16}
                                            height={16}
                                            align={'center'}
                                            justify={'left'}
                                            color={'gray.900'}
                                            paddingX={2}
                                        >
                                            {feature.icon}
                                        </Flex>
                                        <Text
                                            as="h3"
                                            color={'black'}
                                            fontWeight={700}
                                            fontSize={20}
                                        >
                                            {intl.formatMessage(featureMessage.title)}
                                        </Text>
                                        <Text color={'black'}>
                                            {intl.formatMessage(featureMessage.text)}
                                        </Text>
                                    </VStack>
                                </HStack>
                            )
                        })}
                    </SimpleGrid>
                </Container>
            </Section>

            <Section
                padding={4}
                paddingTop={32}
                title={intl.formatMessage({
                    defaultMessage: "We're here to help",
                    id: 'home.heading.here_to_help'
                })}
                subtitle={
                    <>
                        <>
                            {intl.formatMessage({
                                defaultMessage: 'Contact our support staff.',
                                id: 'home.description.here_to_help'
                            })}
                        </>
                        <br />
                        <>
                            {intl.formatMessage({
                                defaultMessage: 'They will get you to the right place.',
                                id: 'home.description.here_to_help_line_2'
                            })}
                        </>
                    </>
                }
                actions={
                    <Button
                        as={Link}
                        href="https://help.salesforce.com/s/?language=en_US"
                        target="_blank"
                        width={'auto'}
                        paddingX={7}
                        _hover={{textDecoration: 'none'}}
                    >
                        <FormattedMessage defaultMessage="Contact Us" id="home.link.contact_us" />
                    </Button>
                }
                maxWidth={'xl'}
            />
        </Box>
    )
}

Home.getTemplateName = () => 'home'

export default Home
