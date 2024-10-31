/*
 * Copyright (c) 2024, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React, {useEffect, useState} from 'react'
import {
    Box,
    Button,
    InputGroup,
    Select,
    FormControl,
    FormErrorMessage,
    Input
} from '@chakra-ui/react'
import {useForm, Controller} from 'react-hook-form'
import {useStoreLocator} from './use-store-locator'

// todo
interface FormData {
    countryCode: string
    postalCode: string
}

interface GeolocationCoordinates {
    latitude: number | null
    longitude: number | null
}

export function useGeolocation(options = {}) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<GeolocationPositionError | null>(null)
    const [coordinates, setCoordinates] = useState<GeolocationCoordinates>({
        latitude: null,
        longitude: null
    })

    const getLocation = () => {
        setLoading(true)
        setError(null)

        try {
            if (!navigator.geolocation) {
                throw new Error('Geolocation is not supported by this browser.')
            }
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setCoordinates({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    })
                    setLoading(false)
                },
                (err) => {
                    setError(err instanceof GeolocationPositionError ? err : null)
                    setLoading(false)
                },
                options
            )
        } catch (err) {
            setError(err instanceof GeolocationPositionError ? err : null)
            setLoading(false)
        }
    }

    useEffect(() => {
        getLocation()
    }, [])

    return {
        coordinates,
        loading,
        error,
        refresh: getLocation
    }
}

export const StoreLocatorForm: React.FC = () => {
    const {config, formValues, setFormValues, setDeviceCoordinates} = useStoreLocator()

    const {coordinates, error, refresh} = useGeolocation()
    const form = useForm<FormData>({
        mode: 'onChange',
        reValidateMode: 'onChange',
        defaultValues: {
            countryCode: formValues.countryCode,
            postalCode: formValues.postalCode
        }
    })
    const {control} = form
    useEffect(() => {
        if (coordinates.latitude && coordinates.longitude) {
            setDeviceCoordinates(coordinates)
        }
    }, [coordinates])

    const showCountrySelector = config.supportedCountries.length > 0

    const submitForm = (formData: FormData) => {
        setFormValues(formData)
    }

    const clearForm = () => {
        form.reset()
        setFormValues({
            countryCode: '',
            postalCode: ''
        })
    }

    return (
        <form id="store-locator-form" onSubmit={form.handleSubmit(submitForm)}>
            <InputGroup>
                {showCountrySelector && (
                    <Controller
                        name="countryCode"
                        control={control}
                        rules={{
                            required: 'Please select a country.'
                        }}
                        render={({field}) => {
                            return (
                                <FormControl isInvalid={!!form.formState.errors.countryCode}>
                                    <Select
                                        {...field}
                                        marginBottom="10px"
                                        placeholder={'Select a country'}
                                        borderColor="gray.500"
                                    >
                                        {config.supportedCountries.map(
                                            ({countryCode, countryName}) => {
                                                return (
                                                    <option value={countryCode} key={countryCode}>
                                                        {countryName}
                                                    </option>
                                                )
                                            }
                                        )}
                                    </Select>
                                    {form.formState.errors.countryCode && (
                                        <FormErrorMessage
                                            sx={{marginBottom: '10px'}}
                                            color="red.600"
                                        >
                                            {form.formState.errors.countryCode.message}
                                        </FormErrorMessage>
                                    )}
                                </FormControl>
                            )
                        }}
                    />
                )}
            </InputGroup>
            <InputGroup>
                <Controller
                    name="postalCode"
                    control={control}
                    rules={{
                        required: 'Please enter a postal code.'
                    }}
                    render={({field}) => {
                        return (
                            <FormControl isInvalid={!!form.formState.errors.postalCode}>
                                <Input {...field} placeholder={'Enter postal code'} />
                                {form.formState.errors.postalCode && (
                                    <FormErrorMessage sx={{top: '-20px'}} color="red.600">
                                        {form.formState.errors.postalCode.message}
                                    </FormErrorMessage>
                                )}
                            </FormControl>
                        )
                    }}
                />
                <Button key="find-button" type="submit" width="15%" marginLeft={2} variant="solid">
                    Find
                </Button>
            </InputGroup>
            <Box
                style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                margin="10px"
            >
                Or
            </Box>
            <Button
                onClick={() => {
                    clearForm()
                    refresh()
                }}
                width="100%"
                variant="solid"
                fontWeight="bold"
                marginBottom={4}
            >
                Use My Location
            </Button>
            <FormControl isInvalid={!!error}>
                <FormErrorMessage
                    color="red.600"
                    alignItems="center"
                    justifyContent="center"
                    marginBottom={4}
                >
                    Please agree to share your location
                </FormErrorMessage>
            </FormControl>
        </form>
    )
}
