// scripts/generate-register-components.js

const fs = require('fs')
const path = require('path')

const COMPONENTS_DIR = path.resolve(__dirname, '../../src/components')
const OUTPUT_FILE = path.resolve(__dirname, '../../src/page-designer/config/register-components.js')
const RELATIVE_IMPORT_PREFIX = '../../components'

const folders = fs.readdirSync(COMPONENTS_DIR)
    .filter((folder) => fs.statSync(path.join(COMPONENTS_DIR, folder)).isDirectory())

const eligibleComponents = []

folders.forEach((folder) => {
    const indexFile = ['index.jsx', 'index.tsx'].find((file) =>
        fs.existsSync(path.join(COMPONENTS_DIR, folder, file))
    )

    if (!indexFile) return

    const filePath = path.join(COMPONENTS_DIR, folder, indexFile)
    const content = fs.readFileSync(filePath, 'utf-8')
    const isDesignComponent = content.includes('.isDesignComponent = true')

    if (isDesignComponent) {
        eligibleComponents.push({ name: folder, importPath: `${RELATIVE_IMPORT_PREFIX}/${folder}` })
    }
})

const outputLines = [
    `import {registerDesignComponent} from 'designer-sdk';`,
    ...eligibleComponents.map(({ name, importPath }) => `import ${name} from '${importPath}';`),
    '',
    ...eligibleComponents.map(({ name }) => `registerDesignComponent('${name}', ${name});`),
    ''
]

fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true })
fs.writeFileSync(OUTPUT_FILE, outputLines.join('\n'))

console.log(`✅ Generated ${OUTPUT_FILE} with ${eligibleComponents.length} components.`)
