import React, {createContext, useEffect, useMemo, useState} from 'react'
import {useLocation} from 'react-router-dom'
import {PD, setupComponentRegistryMessaging} from '../core/registry'
import {DESIGN_MODE_CSS} from './design-mode'

export interface ComponentConfig {
    id: string
    name: string
    description: string
    group: {
        id: string
        name: string
    }
    attributes: Array<{
        name: string
        type: string
        required?: boolean
        description?: string
    }>
    canHaveChildren?: boolean
    component?: React.ComponentType<any>
}

type DesignModeContextType = {
    isDesignMode: boolean
    setOnMessage: (handler?: (event: MessageEvent) => void) => void
}

export const DesignModeContext = createContext<DesignModeContextType | undefined>(undefined)

interface DesignModeProviderProps {
    children: React.ReactNode
    componentConfigs?: ComponentConfig[]
}

export const DesignModeProvider = ({children, componentConfigs = []}: DesignModeProviderProps) => {
    const location = useLocation()

    const isDesignMode = useMemo(() => {
        const query = new URLSearchParams(location.search)
        return query.get('design') === 'true'
    }, [location.search])

    const [_, setOnMessage] = useState<((event: MessageEvent) => void) | undefined>()

    useEffect(() => {
        if (!isDesignMode) return

        const styleEl = document.createElement('style')
        styleEl.setAttribute('data-pd-style', 'true')
        styleEl.textContent = DESIGN_MODE_CSS
        document.head.appendChild(styleEl)

        setupComponentRegistryMessaging()

        // Register components if configs are provided
        if (componentConfigs.length > 0) {
            componentConfigs.forEach((config) => {
                console.log('PWA registry component', config.name)

                // Convert our config format to PD format
                const pdConfig = {
                    name: config.name,
                    description: config.description,
                    group: config.group,
                    id: config.id,
                    attributes: config.attributes.map((attr) => ({
                        name: attr.name,
                        type: attr.type,
                        required: attr.required,
                        helperText: attr.description
                    })),
                    canHaveChildren: config.canHaveChildren
                }

                // Register with PD if we have a component
                if (config.component) {
                    PD.registerComponent(pdConfig.name, config.component)
                } else {
                    // Just broadcast the config if no component
                    window.postMessage(
                        {
                            type: 'PD_COMPONENT_REGISTER',
                            payload: pdConfig
                        },
                        '*'
                    )
                }
            })
        }

        return () => {
            document.querySelector('[data-pd-style]')?.remove()
        }
    }, [isDesignMode, componentConfigs])

    const contextValue = useMemo<DesignModeContextType>(
        () => ({
            isDesignMode,
            setOnMessage
        }),
        [isDesignMode]
    )

    return <DesignModeContext.Provider value={contextValue}>{children}</DesignModeContext.Provider>
}
