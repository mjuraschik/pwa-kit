/*
 * Copyright (c) 2024, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import {useContext} from 'react'
import {StoreLocatorContext} from './v2-store-locator-provider'
import type {
    StoreLocatorState,
    Mode,
    FormValues
} from './v2-store-locator-provider'

interface DeviceCoordinates {
    latitude: number | null
    longitude: number | null
}

interface StoreLocatorActions {
    // setMode: (mode: Mode) => void
    setFormValues: (formValues: FormValues) => void
    setDeviceCoordinates: (coordinates: DeviceCoordinates) => void
}

type UseStoreLocatorReturn = StoreLocatorState & StoreLocatorActions

export const useStoreLocator = (): UseStoreLocatorReturn => {
    const context = useContext(StoreLocatorContext)
    if (!context) {
        throw new Error('useStoreLocator must be used within a StoreLocatorProvider')
    }
    
    const {state, setState} = context

    // const setMode = (mode: Mode) => {
    //     setState(prev => ({...prev, mode}))
    // }

    const setFormValues = (formValues: FormValues) => {
        console.log('setFormValues', formValues)
        setState(prev => ({...prev, formValues, mode: 'input'}))
    }

    const setDeviceCoordinates = (coordinates: DeviceCoordinates) => {
        console.log('setDeviceCoordinates', coordinates)
        setState(prev => ({...prev, deviceCoordinates: coordinates, mode: 'device'}))
    }

    return {
        ...state,
        // Actions
        // setMode,
        setFormValues,
        setDeviceCoordinates
    }
}