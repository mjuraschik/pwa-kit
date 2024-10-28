import React from 'react'
import { StoreLocatorConfig } from '../../types/config'
import { StoreLocatorProvider } from '*/components/store-locator/store-locator-provider'

/**
 * Higher-order component that wraps a component with the StoreLocatorProvider
 * @param config Store locator configuration
 * @returns A function that takes a component and returns a wrapped component with access to the store locator config and state
 */
export const withStoreLocator = (config: StoreLocatorConfig) => {
    return function WithStoreLocator<P extends object>(
        WrappedComponent: React.ComponentType<P>
    ): React.ComponentType<P> {
        const WithConfig = (props: P) => {
            return (
                <StoreLocatorProvider config={config}>
                    <WrappedComponent {...props} />
                </StoreLocatorProvider>
            )
        }
        
        // Preserve the display name for debugging
        WithConfig.displayName = `WithStoreLocator(${
            WrappedComponent.displayName || WrappedComponent.name || 'Component'
        })`
        
        return WithConfig
    }
}
