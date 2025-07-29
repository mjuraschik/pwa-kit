import {PD} from '@salesforce/page-designer-react-sdk/core/registry'
import React from 'react'

const componentMap = PD.getRegistry()

const renderComponent = (componentJson) => {
    const {type_id, content_attributes, regions, components, id, ...rest} = componentJson
    const Component = componentMap[type_id]
    if (!Component) {
        return null
    }

    let children = null
    if (regions) {
        children = regions.map((region, idx) =>
            region.components
                ? region.components.map((child, cidx) => (
                    <React.Fragment key={cidx}>{renderComponent(child)}</React.Fragment>
                ))
                : null
        )
    }

    return (
        <Component
            key={id}
            componentid={id}
            canAcceptChildren={Component.canAcceptChildren}
            {...(content_attributes?.data || {})}
        >
            {children}
        </Component>
    )
}

export const renderPage = (page) => {
    return page.regions.map((region, regionIdx) =>
        region.components
            ? region.components.map((component, compIdx) => renderComponent(component))
            : null
    )
}
