/*
 * Copyright (c) 2025, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import fs from 'fs/promises'
import path from 'path'
import {HookRecommenderTool} from './HookRecommenderTool.js'

export const getCopyrightHeader = () => {
    const year = new Date().getFullYear()
    return `/*
 * Copyright (c) ${year}, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */`
}

// Utility to infer entity from component name
function inferEntityFromComponentName(componentName) {
    const name = componentName.toLowerCase()
    if (name.includes('customer')) return 'customer'
    if (name.includes('product')) return 'product'
    if (name.includes('basket')) return 'basket'
    if (name.includes('category')) return 'category'
    return null
}

export class CreateNewComponentTool {
    constructor() {
        this.currentStep = 0
        this.componentData = {
            name: null,
            location: null,
            createTestFile: null,
            customCode: null,
            entityType: null
        }
    }

    /**
     * Creates the component based on all collected data
     * @returns {Promise<string>} The result of component creation
     */
    async createComponent() {
        const messages = []

        // Use the provided absolute path directly if available
        const location = this.componentData.location
        const componentMessage = await this.createComponentFile(
            this.componentData.name,
            location,
            this.componentData.customCode
        )
        messages.push(componentMessage)

        // Create test file if requested
        if (this.componentData.createTestFile) {
            const testMessage = await this.createTestFile(this.componentData.name, location)
            messages.push(testMessage)
        }

        // Handle entity type information
        if (this.componentData.entityType) {
            messages.push(
                `\nℹ️ Entity type '${this.componentData.entityType}' ${
                    inferEntityFromComponentName(this.componentData.name)
                        ? 'was inferred'
                        : 'was specified'
                } for component '${this.componentData.name}'.`
            )
        } else {
            messages.push(
                `\nℹ️ No entity type was specified or could be inferred for component '${this.componentData.name}'.`
            )
        }

        // Recommend hooks if entity is available
        if (this.componentData.entityType) {
            const recommender = new HookRecommenderTool()
            const recommendations = recommender.getRecommendations(this.componentData.entityType)
            if (Array.isArray(recommendations)) {
                messages.push(
                    `\n🔗 Recommended hooks for entity '${this.componentData.entityType}':`
                )
                recommendations.forEach((hook) => {
                    messages.push(`- ${hook.name}: ${hook.description} (from ${hook.package})`)
                })
            } else if (recommendations.error) {
                messages.push(`\n${recommendations.error}`)
            }
        } else {
            messages.push('\nℹ️ No entity provided or inferred for hook recommendations.')
        }

        // Always append lint reminder
        messages.push(
            "\n💡 After creating or modifying a component, run 'npm run lint -- --fix' to automatically fix formatting and linter issues."
        )

        // Reset for next use
        this.reset()

        return messages.join('\n')
    }

    /**
     * Resets the tool state for the next component creation
     */
    reset() {
        this.currentStep = 0
        this.componentData = {
            name: null,
            location: null,
            createTestFile: null,
            customCode: null,
            entityType: null
        }
    }

    /**
     * Creates a new React component file.
     * @param {string} componentName - Name for the new component.
     * @param {string} projectDir - The absolute path to the project directory for the new component.
     * @param {string} [componentCode] - Code of the component to create. If not provided, a default skeleton will be used.
     */
    async createComponentFile(componentName, projectDir, componentCode) {
        const componentDir = path.join(projectDir, componentName)
        try {
            await fs.mkdir(componentDir, {recursive: true})
            // Create component file
            const componentFilePath = path.join(componentDir, 'index.jsx')
            const codeToWrite =
                !componentCode || componentCode === 'default skeleton'
                    ? `${getCopyrightHeader()}
import React from 'react';

const ${componentName} = () => {
  return (
    <div>${componentName} component</div>
  );
};

export default ${componentName};
`
                    : componentCode
            await fs.writeFile(componentFilePath, codeToWrite, 'utf-8')
            return `✅ Created ${componentFilePath}`
        } catch (err) {
            console.error('Error during file creation:', err)
            return `❌ Error creating component file at ${componentDir}: ${err.message}`
        }
    }

    /**
     * Creates a test file for an existing component.
     * @param {string} componentName - Name of the component to create a test file for.
     * @param {string} projectDir - The absolute path to the project directory where the component exists.
     */
    async createTestFile(componentName, projectDir) {
        const componentDir = path.join(projectDir, componentName)
        try {
            // Create test file
            const testFilePath = path.join(componentDir, 'index.test.jsx')
            const testCode = `${getCopyrightHeader()}
import React from 'react'
import {screen} from '@testing-library/react'
import {renderWithProviders} from '@salesforce/retail-react-app/app/utils/test-utils'
import ${componentName} from './index'

describe('${componentName}', () => {
    test('renders correctly', () => {
        renderWithProviders(<${componentName} />)
        expect(screen.getByText('${componentName} component')).toBeInTheDocument()
    })
})
`
            await fs.writeFile(testFilePath, testCode, 'utf-8')
            return `✅ Created ${testFilePath}`
        } catch (err) {
            console.error('Error during test file creation:', err)
            return `❌ Error creating test file at ${componentDir}: ${err.message}`
        }
    }

    /**
     * Updates the component file to be a presentational component for the given data model.
     * @param {string} entityType - The entity type (e.g., 'product').
     * @param {string} componentName - The component name.
     * @param {string} location - The absolute path to the component's parent directory.
     * @param {object} dataModel - The data model schema (properties object).
     */
    async updateComponentToPresentational(entityType, componentName, location, dataModel, options = {}) {
        const componentDir = path.join(location, componentName)
        await fs.mkdir(componentDir, {recursive: true})
        const componentFilePath = path.join(componentDir, 'index.jsx')
        const fields = Object.keys(dataModel)
        let code = ''
        // Special logic for product entity
        if (entityType === 'product') {
            // If options.list is true, generate a list-of-products component
            if (options.list) {
                code = `${getCopyrightHeader()}
import React from 'react';
import PropTypes from 'prop-types';

const ${componentName} = ({ products }) => (
    <div>
        {products.map(product => (
            <div key={product.productId} style={{ border: '1px solid #ccc', margin: 8, padding: 8 }}>
                <h2>{product.name}</h2>
                {product.imageGroups && product.imageGroups[0]?.images[0]?.link && (
                    <img
                        src={product.imageGroups[0].images[0].link}
                        alt={product.name}
                        style={{ maxWidth: 150, marginBottom: 8 }}
                    />
                )}
                <div>assigned_categories: {product.assigned_categories?.toString?.() ?? ''}</div>
                <div>price: {product.price?.toString?.() ?? ''}</div>
            </div>
        ))}
    </div>
);

${componentName}.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        productId: PropTypes.string,
        name: PropTypes.string,
        assigned_categories: PropTypes.any,
        price: PropTypes.any,
        imageGroups: PropTypes.array
    })).isRequired
};

export default ${componentName};
`
            } else {
                // Single product component (with selectors, image, etc.)
                code = `${getCopyrightHeader()}
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Helper to filter variants by selected attribute values
const filterVariants = (variants, selected) => {
    return variants.filter(variant =>
        Object.entries(selected).every(
            ([attr, value]) => !value || variant.variationValues?.[attr] === value
        )
    );
};

// Helper to get the image for the selected color
const getImageForSelection = (imageGroups, selected) => {
    if (selected.color) {
        const group = imageGroups.find(
            g =>
                g.variationAttributes &&
                g.variationAttributes.some(
                    va =>
                        va.id === 'color' &&
                        va.values.some(v => v.value === selected.color)
                )
        );
        if (group && group.images.length > 0) {
            return group.images[0].link;
        }
    }
    if (imageGroups.length > 0 && imageGroups[0].images.length > 0) {
        return imageGroups[0].images[0].link;
    }
    return null;
};

const ${componentName} = ({ product }) => {
    const { variationAttributes = [], variants = [], imageGroups = [] } = product;
    const [selected, setSelected] = useState(() => {
        const initial = {};
        variationAttributes.forEach(attr => {
            initial[attr.id] = '';
        });
        return initial;
    });

    const filteredVariants = filterVariants(variants, selected);
    const getAvailableValues = (attrId) => {
        const otherSelected = { ...selected };
        delete otherSelected[attrId];
        const possibleVariants = filterVariants(variants, otherSelected);
        const values = new Set();
        possibleVariants.forEach(v => {
            if (v.variationValues?.[attrId]) values.add(v.variationValues[attrId]);
        });
        return Array.from(values);
    };

    const imageUrl = getImageForSelection(imageGroups, selected);

    return (
        <div>
            <h2>{product.name}</h2>
            {imageUrl && (
                <img src={imageUrl} alt={product.name} style={{ maxWidth: 300, marginBottom: 16 }} />
            )}
            <div>assigned_categories: {product.assigned_categories?.toString?.() ?? ''}</div>
            <div>price: {product.price?.toString?.() ?? ''}</div>
            {/* Dynamic variant attribute selectors */}
            {variationAttributes.map(attr => (
                <div key={attr.id} style={{ margin: '8px 0' }}>
                    <strong>{attr.name}:</strong>
                    {getAvailableValues(attr.id).map(val => (
                        <button
                            key={val}
                            onClick={() => setSelected(sel => ({ ...sel, [attr.id]: val }))}
                            style={{
                                margin: 4,
                                border: selected[attr.id] === val ? '2px solid blue' : '1px solid #ccc',
                                borderRadius: '4px',
                                padding: '4px 12px',
                                background: '#fff',
                                cursor: 'pointer'
                            }}
                        >
                            {val}
                        </button>
                    ))}
                </div>
            ))}
        </div>
    );
};

${componentName}.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string,
        assigned_categories: PropTypes.any,
        price: PropTypes.any,
        variationAttributes: PropTypes.array,
        variants: PropTypes.array,
        imageGroups: PropTypes.array
    }).isRequired
};

export default ${componentName};
`
            }
            await fs.writeFile(componentFilePath, code, 'utf-8')
            return `✅ Updated ${componentFilePath} to presentational component for ${entityType}`
        }
        await fs.writeFile(componentFilePath, code, 'utf-8')
        return `✅ Updated ${componentFilePath} to presentational component for ${entityType}`
    }

    /**
     * Handles developer's hook selection and updates the component accordingly.
     * The generated component expects the data as a prop (not from the hook directly).
     */
    async handleHookSelection(selectedHook, entityType, componentName, location, dataModels) {
        // Support for product entity hooks
        if (entityType === 'product' && dataModels.product) {
            if (selectedHook === 'useProduct') {
                return await this.updateComponentToPresentational(
                    'product',
                    componentName,
                    location,
                    dataModels.product.properties,
                    { array: false, propName: 'product' }
                )
            }
            if (selectedHook === 'useProducts' || selectedHook === 'useProductSearch') {
                return await this.updateComponentToPresentational(
                    'product',
                    componentName,
                    location,
                    dataModels.product.properties,
                    { array: true, propName: 'products' }
                )
            }
        }
        // Add more hook/entity support as needed
        return 'Selected hook/entity not supported for presentational generation.'
    }
}
