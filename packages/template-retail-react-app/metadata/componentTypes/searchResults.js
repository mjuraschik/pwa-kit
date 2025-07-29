export const searchResults = {
    name: 'Search Results Component',
    description: 'Component to display search results and product listings',
    group: 'commerce_assets_pwa',
    attribute_definition_groups: [
        {
            id: 'searchContent',
            name: 'Search Content',
            description: 'Content for the search results section',
            attribute_definitions: [
                {
                    id: 'title',
                    name: 'Section Title',
                    description: 'The title for the search results section',
                    type: 'markup',
                    required: true
                },
                {
                    id: 'subtitle',
                    name: 'Section Subtitle',
                    description: 'The subtitle for the search results section',
                    type: 'markup',
                    required: false
                }
            ]
        }
    ],
    region_definitions: [],
    id: 'commerce_assets_pwa.searchResults'
}
