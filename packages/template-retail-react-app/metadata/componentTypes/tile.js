export const tile = {
    name: 'Tile Component',
    description: 'Tile component with title, icon and link',
    group: 'commerce_assets_pwa',
    attribute_definition_groups: [
        {
            id: 'tileContent',
            name: 'Tile Content',
            description: 'Content for the tile component',
            attribute_definitions: [
                {
                    id: 'title',
                    name: 'Tile Title',
                    description: 'The title displayed on the tile',
                    type: 'markup',
                    required: true
                },
                {
                    id: 'icon',
                    name: 'Tile Icon',
                    description: 'The icon to display on the tile',
                    type: 'string',
                    required: false
                },
                {
                    id: 'href',
                    name: 'Tile Link',
                    description: 'The link URL for the tile',
                    type: 'url',
                    required: false
                }
            ]
        }
    ],
    region_definitions: [],
    id: 'commerce_assets_pwa.tile'
}
