import {hero} from './hero.js'
import {searchResults} from './searchResults.js'
import {section} from './section.js'
import {seo} from './seo.js'
import {simpleGrid} from './simpleGrid.js'
import {tile} from './tile.js'

const componentTypesArray = [seo, hero, section, simpleGrid, tile, searchResults]

export default {
    count: componentTypesArray.length,
    total: componentTypesArray.length,
    data: componentTypesArray
}
