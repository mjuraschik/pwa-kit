/*
 * Copyright (c) 2023, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import {renderHook} from '@testing-library/react'
import React from 'react'
import {usePageDesignerParams} from './usePageDesignerParams'
import CommerceApiProvider from '../../provider'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const DEFAULT_CONFIG = {
    proxy: 'http://localhost:8888/mobify/proxy/api',
    redirectURI: 'http://localhost:8888/callback',
    clientId: '12345678-1234-1234-1234-123412341234',
    organizationId: 'f_ecom_zzrmy_orgf_001',
    shortCode: '12345678',
    siteId: 'RefArchGlobal',
    locale: 'en-US',
    currency: 'USD'
}

const createWrapper = (pageDesignerParams?: {
    mode?: 'edit' | 'preview'
    pdToken?: string
    pageId?: string
}) => {
    const queryClient = new QueryClient({
        defaultOptions: {queries: {retry: false}, mutations: {retry: false}}
    })
    const Wrapper = ({children}: {children: React.ReactNode}) => (
        <QueryClientProvider client={queryClient}>
            <CommerceApiProvider {...DEFAULT_CONFIG} pageDesignerParams={pageDesignerParams}>
                {children}
            </CommerceApiProvider>
        </QueryClientProvider>
    )
    return Wrapper
}

describe('usePageDesignerParams', () => {
    test('returns empty object when no pageDesignerParams provided', () => {
        const {result} = renderHook(() => usePageDesignerParams(), {
            wrapper: createWrapper()
        })

        expect(result.current).toEqual({})
    })

    test('returns mode when provided', () => {
        const {result} = renderHook(() => usePageDesignerParams(), {
            wrapper: createWrapper({mode: 'edit'})
        })

        expect(result.current.mode).toBe('edit')
    })

    test('returns pdToken when provided', () => {
        const {result} = renderHook(() => usePageDesignerParams(), {
            wrapper: createWrapper({pdToken: 'test-token'})
        })

        expect(result.current.pdToken).toBe('test-token')
    })

    test('returns pageId when provided', () => {
        const {result} = renderHook(() => usePageDesignerParams(), {
            wrapper: createWrapper({pageId: 'test-page-id'})
        })

        expect(result.current.pageId).toBe('test-page-id')
    })

    test('returns all params when all provided', () => {
        const pageDesignerParams = {
            mode: 'preview' as const,
            pdToken: 'my-token',
            pageId: 'my-page'
        }

        const {result} = renderHook(() => usePageDesignerParams(), {
            wrapper: createWrapper(pageDesignerParams)
        })

        expect(result.current).toEqual(pageDesignerParams)
    })

    test('returns partial params when partially provided', () => {
        const {result} = renderHook(() => usePageDesignerParams(), {
            wrapper: createWrapper({mode: 'edit', pdToken: 'token'})
        })

        expect(result.current.mode).toBe('edit')
        expect(result.current.pdToken).toBe('token')
        expect(result.current.pageId).toBeUndefined()
    })
})
