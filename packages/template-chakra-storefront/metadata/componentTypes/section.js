export const section = {
    name: 'Section Component',
    description: 'Container section component with styling and layout options',
    group: 'commerce_assets_pwa',
    attribute_definition_groups: [
        {
            id: 'sectionStyling',
            name: 'Section Styling',
            description: 'Styling and layout properties for the section',
            attribute_definitions: [
                {
                    id: 'background',
                    name: 'Background Color',
                    description: 'Background color for the section',
                    type: 'string',
                    required: false
                },
                {
                    id: 'marginX',
                    name: 'Horizontal Margin',
                    description: 'Horizontal margin for the section',
                    type: 'string',
                    required: false
                },
                {
                    id: 'paddingY',
                    name: 'Vertical Padding',
                    description: 'Vertical padding for the section',
                    type: 'object',
                    required: false
                },
                {
                    id: 'paddingX',
                    name: 'Horizontal Padding',
                    description: 'Horizontal padding for the section',
                    type: 'object',
                    required: false
                },
                {
                    id: 'borderRadius',
                    name: 'Border Radius',
                    description: 'Border radius for the section',
                    type: 'string',
                    required: false
                },
                {
                    id: 'width',
                    name: 'Width',
                    description: 'Width of the section',
                    type: 'object',
                    required: false
                },
                {
                    id: 'position',
                    name: 'Position',
                    description: 'Position property for the section',
                    type: 'object',
                    required: false
                },
                {
                    id: 'left',
                    name: 'Left Position',
                    description: 'Left position for the section',
                    type: 'object',
                    required: false
                },
                {
                    id: 'right',
                    name: 'Right Position',
                    description: 'Right position for the section',
                    type: 'object',
                    required: false
                },
                {
                    id: 'marginLeft',
                    name: 'Left Margin',
                    description: 'Left margin for the section',
                    type: 'object',
                    required: false
                },
                {
                    id: 'marginRight',
                    name: 'Right Margin',
                    description: 'Right margin for the section',
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
    id: 'commerce_assets_pwa.section'
}
