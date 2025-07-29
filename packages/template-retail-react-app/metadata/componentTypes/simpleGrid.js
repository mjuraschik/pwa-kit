export const simpleGrid = {
    name: 'Simple Grid Component',
    description: 'Grid layout component with configurable columns and spacing',
    group: 'commerce_assets_pwa',
    attribute_definition_groups: [
        {
            id: 'gridLayout',
            name: 'Grid Layout',
            description: 'Grid layout configuration',
            attribute_definitions: [
                {
                    id: 'columns',
                    name: 'Columns',
                    description: 'Number of columns for different breakpoints',
                    type: 'object',
                    required: true
                },
                {
                    id: 'spacingX',
                    name: 'Horizontal Spacing',
                    description: 'Horizontal spacing between grid items',
                    type: 'object',
                    required: false
                },
                {
                    id: 'spacingY',
                    name: 'Vertical Spacing',
                    description: 'Vertical spacing between grid items',
                    type: 'object',
                    required: false
                }
            ]
        }
    ],
    region_definitions: [
        {
            id: 'column',
            name: 'Column',
            component_type_exclusions: []
        }
    ],
    id: 'commerce_assets_pwa.simpleGrid'
}
