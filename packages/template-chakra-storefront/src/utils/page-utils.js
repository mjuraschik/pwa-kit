import React from 'react'
import Section from '../components/section'
import HeroSmart from '../components/heroSmart'
import Seo from '../components/seo'
import {SimpleGrid} from '@chakra-ui/react'
import Tile from '../components/tile'
import SearchResults from '../components/searchResults'

const componentMap = {
    section: Section,
    hero: HeroSmart,
    seo: Seo,
    simpleGrid: SimpleGrid,
    tile: Tile,
    searchResults: SearchResults
}


const renderComponent = (componentJson) => {
    const {type_id, content_attributes, regions, components, ...rest} = componentJson
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
        <Component key={type_id + Math.random()} {...(content_attributes?.data || {})}>
            {children}
        </Component>
    )
}

export const renderPage = (page) => {
    return page.regions.map((region, regionIdx) =>
        region.components
            ? region.components.map((component, compIdx) => renderComponent(component, componentMap))
            : null
    )
}
