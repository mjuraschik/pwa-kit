import React from 'react'
import {SimpleGrid} from '@chakra-ui/react'
import PropTypes from 'prop-types'

/**
 * Custom wrapper around Chakra's SimpleGrid to apply defaults or additional behavior.
 */
const Grid = ({children, columns = [1, null, 2], spacing = 4, ...props}) => {
    return (
        <SimpleGrid columns={columns} spacing={spacing} {...props}>
            {children}
        </SimpleGrid>
    )
}

Grid.isDesignComponent = true

Grid.propTypes = {
    children: PropTypes.node,
    columns: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.arrayOf(PropTypes.number),
        PropTypes.object
    ]),
    spacing: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export default Grid
