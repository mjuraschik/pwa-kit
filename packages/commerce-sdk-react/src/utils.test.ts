/*
 * Copyright (c) 2024, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import * as utils from './utils'
import {DEFAULT_TEST_CONFIG} from './test-utils'
import {ParameterInjectionConfig} from './hooks/types'

describe('Utils', () => {
    test.each([
        ['/callback', false],
        ['https://pwa-kit.mobify-storefront.com/callback', true],
        ['/social-login/callback', false]
    ])('isAbsoluteUrl', (url, expected) => {
        const isURL = utils.isAbsoluteUrl(url)
        expect(isURL).toBe(expected)
    })
    test('extractCustomParameters only returns custom parameters', () => {
        const parameters = {
            c_param1: 'this is a custom',
            param1: 'this is not a custom',
            c_param2: 1,
            param2: 2,
            param3: false,
            c_param3: true
        }
        const customParameters = utils.extractCustomParameters(parameters)
        expect(customParameters).toEqual({
            c_param1: 'this is a custom',
            c_param2: 1,
            c_param3: true
        })
    })

    describe('withParameterInjection', () => {
        let mockClient: any
        let mockConfig: ParameterInjectionConfig

        beforeEach(() => {
            mockClient = {
                getBasket: jest.fn().mockResolvedValue({basketId: 'test-basket'}),
                createBasket: jest.fn().mockResolvedValue({basketId: 'new-basket'}),
                nonFunctionProperty: 'some value'
            }

            mockConfig = {
                props: {
                    ...DEFAULT_TEST_CONFIG,
                    children: null
                },
                transformer: jest.fn((params, methodName, options) => options),
                onBeforeCall: jest.fn(),
                onAfterCall: jest.fn(),
                onError: jest.fn()
            }
        })

        afterEach(() => {
            jest.clearAllMocks()
        })

        test('should return a proxy that preserves non-function properties', () => {
            const proxiedClient = utils.withParameterInjection(mockClient, mockConfig)

            expect(proxiedClient.nonFunctionProperty).toBe('some value')
        })

        test('should wrap function methods with proxy behavior', () => {
            const proxiedClient = utils.withParameterInjection(mockClient, mockConfig)

            expect(typeof proxiedClient.getBasket).toBe('function')
            expect(typeof proxiedClient.createBasket).toBe('function')
        })

        test('should call original method with provided options', async () => {
            const proxiedClient = utils.withParameterInjection(mockClient, mockConfig)
            const options = {parameters: {basketId: 'test-123'}}

            await proxiedClient.getBasket(options)

            expect(mockClient.getBasket).toHaveBeenCalledWith(options)
        })

        test('should call original method with empty object if no options provided', async () => {
            const proxiedClient = utils.withParameterInjection(mockClient, mockConfig)

            await proxiedClient.getBasket()

            expect(mockClient.getBasket).toHaveBeenCalledWith({})
        })

        test('should apply transformer to options before calling original method', async () => {
            const transformedOptions = {
                parameters: {basketId: 'transformed-123'},
                headers: {'X-Custom': 'transformed'}
            }
            ;(mockConfig.transformer as jest.Mock).mockResolvedValue(transformedOptions)

            const proxiedClient = utils.withParameterInjection(mockClient, mockConfig)
            const originalOptions = {parameters: {basketId: 'original-123'}}

            await proxiedClient.getBasket(originalOptions)

            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const {children, ...expectedParams} = mockConfig.props
            expect(mockConfig.transformer).toHaveBeenCalledWith(
                expectedParams,
                'getBasket',
                originalOptions
            )
            expect(mockClient.getBasket).toHaveBeenCalledWith(transformedOptions)
        })

        test('should handle async transformer', async () => {
            const transformedOptions = {parameters: {basketId: 'async-transformed'}}
            ;(mockConfig.transformer as jest.Mock).mockResolvedValue(transformedOptions)

            const proxiedClient = utils.withParameterInjection(mockClient, mockConfig)

            await proxiedClient.getBasket({})

            expect(mockClient.getBasket).toHaveBeenCalledWith(transformedOptions)
        })

        test('should handle sync transformer', async () => {
            const transformedOptions = {parameters: {basketId: 'sync-transformed'}}
            ;(mockConfig.transformer as jest.Mock).mockReturnValue(transformedOptions)

            const proxiedClient = utils.withParameterInjection(mockClient, mockConfig)

            await proxiedClient.getBasket({})

            expect(mockClient.getBasket).toHaveBeenCalledWith(transformedOptions)
        })

        test('should call onBeforeCall callback before method execution', async () => {
            const proxiedClient = utils.withParameterInjection(mockClient, mockConfig)
            const options = {parameters: {basketId: 'test'}}

            await proxiedClient.getBasket(options)

            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const {children, ...expectedParams} = mockConfig.props
            expect(mockConfig.onBeforeCall).toHaveBeenCalledWith(
                'getBasket',
                expectedParams,
                options
            )
        })

        test('should call onAfterCall callback after successful method execution', async () => {
            const expectedResult = {basketId: 'success-basket'}
            mockClient.getBasket.mockResolvedValue(expectedResult)

            const proxiedClient = utils.withParameterInjection(mockClient, mockConfig)
            const options = {parameters: {basketId: 'test'}}

            const result = await proxiedClient.getBasket(options)

            expect(mockConfig.onAfterCall).toHaveBeenCalledWith(
                'getBasket',
                expectedResult,
                options
            )
            expect(result).toBe(expectedResult)
        })

        test('should call onError callback when method throws error', async () => {
            const error = new Error('API Error')
            mockClient.getBasket.mockRejectedValue(error)

            const proxiedClient = utils.withParameterInjection(mockClient, mockConfig)
            const options = {parameters: {basketId: 'test'}}

            await expect(proxiedClient.getBasket(options)).rejects.toThrow('API Error')

            expect(mockConfig.onError).toHaveBeenCalledWith('getBasket', error, options)
        })

        test('should rethrow error after calling onError callback', async () => {
            const error = new Error('API Error')
            mockClient.getBasket.mockRejectedValue(error)

            const proxiedClient = utils.withParameterInjection(mockClient, mockConfig)

            await expect(proxiedClient.getBasket({})).rejects.toThrow('API Error')
        })

        test('should work without optional callbacks', async () => {
            const configWithoutCallbacks = {
                props: {
                    ...DEFAULT_TEST_CONFIG,
                    children: null
                }
            }

            const proxiedClient = utils.withParameterInjection(mockClient, configWithoutCallbacks)

            await expect(proxiedClient.getBasket({})).resolves.toEqual({basketId: 'test-basket'})
        })

        test('should work without transformer', async () => {
            const configWithoutTransformer = {
                props: {
                    ...DEFAULT_TEST_CONFIG,
                    children: null
                },
                onBeforeCall: jest.fn(),
                onAfterCall: jest.fn(),
                onError: jest.fn()
            }

            const proxiedClient = utils.withParameterInjection(mockClient, configWithoutTransformer)
            const options = {parameters: {basketId: 'test'}}

            await proxiedClient.getBasket(options)

            expect(mockClient.getBasket).toHaveBeenCalledWith(options)
        })

        test('should handle multiple method calls independently', async () => {
            const proxiedClient = utils.withParameterInjection(mockClient, mockConfig)

            await proxiedClient.getBasket({parameters: {basketId: 'basket-1'}})
            await proxiedClient.createBasket({parameters: {currency: 'USD'}})

            expect(mockClient.getBasket).toHaveBeenCalledWith({parameters: {basketId: 'basket-1'}})
            expect(mockClient.createBasket).toHaveBeenCalledWith({parameters: {currency: 'USD'}})
            expect(mockConfig.onBeforeCall).toHaveBeenCalledTimes(2)
            expect(mockConfig.onAfterCall).toHaveBeenCalledTimes(2)
        })

        test('should preserve this context in original method calls', async () => {
            const contextClient = {
                getData: function () {
                    return Promise.resolve('test-data')
                }
            }

            const proxiedClient = utils.withParameterInjection(contextClient, mockConfig)

            const result = await proxiedClient.getData()

            expect(result).toBe('test-data')
        })

        test('should extract props correctly excluding children', () => {
            const propsWithChildren = {
                ...DEFAULT_TEST_CONFIG,
                children: 'Test Child' as any,
                customProp: 'custom-value'
            }

            const configWithChildren = {
                props: propsWithChildren,
                transformer: jest.fn((params) => {
                    expect(params).not.toHaveProperty('children')
                    expect(params).toHaveProperty('customProp', 'custom-value')
                    return {}
                })
            }

            const proxiedClient = utils.withParameterInjection(mockClient, configWithChildren)

            proxiedClient.getBasket({})

            expect(configWithChildren.transformer).toHaveBeenCalled()
        })
    })
})
