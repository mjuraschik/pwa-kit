import {renderHook, act} from '@testing-library/react'
import {useStoreLocator} from './use-store-locator'
import {StoreLocatorProvider} from './store-locator-provider'
import {useSearchStores} from '@salesforce/commerce-sdk-react'
import React from 'react'

// Mock the commerce-sdk-react hook
jest.mock('@salesforce/commerce-sdk-react', () => ({
    useSearchStores: jest.fn()
}))

// Test wrapper to provide context
const wrapper = ({children}) => {
    const config = {
        defaultDistance: 100,
        defaultDistanceUnit: 'mi'
    }
    
    return (
        <StoreLocatorProvider config={config}>
            {children}
        </StoreLocatorProvider>
    )
}

describe('useStoreLocator', () => {
    beforeEach(() => {
        useSearchStores.mockReset()
        // Default mock implementation
        useSearchStores.mockReturnValue({
            data: undefined,
            isLoading: false
        })
    })

    it('throws error when used outside provider', () => {
        const consoleError = console.error
        console.error = jest.fn()
        
        try {
            renderHook(() => useStoreLocator())
        } catch (error) {
            expect(error).toEqual(Error('useStoreLocator must be used within a StoreLocatorProvider'))
        }
        
        console.error = consoleError
    })

    it('initializes with default values', () => {
        const {result} = renderHook(() => useStoreLocator(), {wrapper})
        
        expect(result.current).toMatchObject({
            mode: 'input',
            formValues: {countryCode: '', postalCode: ''},
            deviceCoordinates: {latitude: null, longitude: null},
            isLoading: false,
            data: undefined
        })
    })

    it('updates form values and switches to input mode', () => {
        const {result} = renderHook(() => useStoreLocator(), {wrapper})

        act(() => {
            result.current.setFormValues({
                countryCode: 'US',
                postalCode: '94105'
            })
        })

        expect(result.current.mode).toBe('input')
        expect(result.current.formValues).toEqual({
            countryCode: 'US',
            postalCode: '94105'
        })
    })

    it('updates device coordinates and switches to device mode', () => {
        const {result} = renderHook(() => useStoreLocator(), {wrapper})

        act(() => {
            result.current.setDeviceCoordinates({
                latitude: 37.7749,
                longitude: -122.4194
            })
        })

        expect(result.current.mode).toBe('device')
        expect(result.current.deviceCoordinates).toEqual({
            latitude: 37.7749,
            longitude: -122.4194
        })
        // Should reset form values when switching to device mode
        expect(result.current.formValues).toEqual({
            countryCode: '',
            postalCode: ''
        })
    })

    it('calls useSearchStores with correct parameters in input mode', () => {
        const {result} = renderHook(() => useStoreLocator(), {wrapper})

        act(() => {
            result.current.setFormValues({
                countryCode: 'US',
                postalCode: '94105'
            })
        })

        expect(useSearchStores).toHaveBeenCalledWith(
            {
                parameters: {
                    countryCode: 'US',
                    postalCode: '94105',
                    maxDistance: 100,
                    limit: 200,
                    distanceUnit: 'mi'
                }
            },
            {
                enabled: true
            }
        )
    })

    it('calls useSearchStores with correct parameters in device mode', () => {
        const {result} = renderHook(() => useStoreLocator(), {wrapper})

        act(() => {
            result.current.setDeviceCoordinates({
                latitude: 37.7749,
                longitude: -122.4194
            })
        })

        expect(useSearchStores).toHaveBeenCalledWith(
            {
                parameters: {
                    latitude: 37.7749,
                    longitude: -122.4194,
                    maxDistance: 100,
                    limit: 200,
                    distanceUnit: 'mi'
                }
            },
            {
                enabled: true
            }
        )
    })

    it('handles loading state', () => {
        useSearchStores.mockReturnValue({
            data: undefined,
            isLoading: true
        })

        const {result} = renderHook(() => useStoreLocator(), {wrapper})
        
        expect(result.current.isLoading).toBe(true)
    })

    it('handles store data', () => {
        const mockStoreData = [{
            id: '1',
            name: 'Test Store',
            address: {
                address1: '123 Test St',
                city: 'Test City',
                stateCode: 'CA',
                postalCode: '94105'
            }
        }]

        useSearchStores.mockReturnValue({
            data: mockStoreData,
            isLoading: false
        })

        const {result} = renderHook(() => useStoreLocator(), {wrapper})
        
        expect(result.current.data).toEqual(mockStoreData)
    })
}) 