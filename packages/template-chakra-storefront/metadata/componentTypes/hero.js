export const hero = {
    name: 'Hero Component',
    description: 'Hero banner component with image, title and call-to-action button',
    group: 'commerce_assets_pwa',
    attribute_definition_groups: [
        {
            id: 'heroContent',
            name: 'Hero Content',
            description: 'Hero banner content and styling',
            attribute_definitions: [
                {
                    id: 'title',
                    name: 'Hero Title',
                    description: 'The main title displayed in the hero section',
                    type: 'markup',
                    required: true
                },
                {
                    id: 'img',
                    name: 'Hero Image',
                    description: 'The hero background image',
                    type: 'image',
                    required: false
                }
            ]
        }
    ],
    region_definitions: [],
    id: 'commerce_assets_pwa.hero'
}
