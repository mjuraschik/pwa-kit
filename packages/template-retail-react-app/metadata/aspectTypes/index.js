import {category} from './category.js'
import {product} from './productDetail.js'

const aspectTypesArray = [product, category]

export default {
    count: aspectTypesArray.length,
    total: aspectTypesArray.length,
    data: aspectTypesArray
}
