export const seo = {
    name: 'SEO Component',
    description: 'SEO metadata component for page optimization',
    group: 'commerce_assets_pwa',
    attribute_definition_groups: [
        {
            id: 'seoContent',
            name: 'SEO Content',
            description: 'SEO metadata content',
            attribute_definitions: [
                {
                    id: 'title',
                    name: 'Page Title',
                    description: 'The page title for SEO',
                    type: 'string',
                    required: true
                },
                {
                    id: 'description',
                    name: 'Page Description',
                    description: 'The page description for SEO',
                    type: 'string',
                    required: false
                },
                {
                    id: 'keywords',
                    name: 'Page Keywords',
                    description: 'The page keywords for SEO',
                    type: 'string',
                    required: false
                }
            ]
        }
    ],
    region_definitions: [],
    id: 'commerce_assets_pwa.seo'
}
