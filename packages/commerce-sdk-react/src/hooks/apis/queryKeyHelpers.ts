/*
 * Copyright (c) 2023, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import {ShopperSearch, ShopperProducts, ShopperSearchTypes, ShopperProductsTypes} from 'commerce-sdk-isomorphic'
import {ApiClientConfigParams} from '../types'
import {pickValidParams} from '../utils'

/**
 * Factory function to create query key helpers for specific API endpoints
 */
function createQueryKeyHelper<P>(
    endpointPath: string,
    paramKeys: ReadonlyArray<string>
) {
    return {
        path: (params: P) => [
            '/commerce-sdk-react',
            '/organizations/',
            (params as any).organizationId,
            endpointPath
        ],
        
        queryKey: (params: P) => {
            const path = [
                '/commerce-sdk-react',
                '/organizations/',
                (params as any).organizationId,
                endpointPath
            ];
            
            return [
                ...path,
                pickValidParams(params as Record<string, any>, Array.from(paramKeys))
            ];
        }
    };
}

const queryKeyHelpers = {
    shopperSearch: {
        productSearch: createQueryKeyHelper<NonNullable<Parameters<ShopperSearchTypes.ShopperSearch<ApiClientConfigParams>['productSearch']>[0]>['parameters']>(
            '/product-search',
            ShopperSearch.paramKeys.productSearch
        ),
        getSearchSuggestions: createQueryKeyHelper<NonNullable<Parameters<ShopperSearchTypes.ShopperSearch<ApiClientConfigParams>['getSearchSuggestions']>[0]>['parameters']>(
            '/search-suggestions',
            ShopperSearch.paramKeys.getSearchSuggestions
        )
    },
    shopperProducts: {
        getProducts: createQueryKeyHelper<NonNullable<Parameters<ShopperProductsTypes.ShopperProducts<ApiClientConfigParams>['getProducts']>[0]>['parameters']>(
            '/products',
            ShopperProducts.paramKeys.getProducts
        )
    }
    // Add other API clients as needed
};

export default queryKeyHelpers
