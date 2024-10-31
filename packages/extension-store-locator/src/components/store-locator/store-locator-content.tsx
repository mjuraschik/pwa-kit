/*
 * Copyright (c) 2024, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React from 'react'
import {Heading} from '@chakra-ui/react'

import {StoreLocatorList} from './store-locator-list'
import {StoreLocatorForm} from './store-locator-form'

export const StoreLocatorContent = (): JSX.Element => {
    return (
        <>
            <Heading fontSize="2xl" marginBottom={6}>
                Find a Store
            </Heading>
            <StoreLocatorForm />
            <StoreLocatorList />
        </>
    )
}
