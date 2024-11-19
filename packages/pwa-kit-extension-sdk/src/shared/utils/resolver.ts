/*
 * Copyright (c) 2024, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

// Third-party imports
import path from 'path'
import fs from 'fs'

// Local
import {expand} from './index'

// Types
import {ApplicationExtensionEntry, BuildCandidatePathsOptions} from '../../types'

// TODO: Should this be in a constants folder?
const NODE_MODULES = 'node_modules'
const OVERRIDES = 'overrides'
const APP = 'app'
const SRC = 'src'

// TODO: We should determine if we want the `overrides-resolver-plugin` to handle resolution of application special
// components like _app and _document. If so we can update this map and remove the special logic from our webpack
// configuration.
const INDEX_FILE = 'index' // TODO: Make this value obey the webpack's `resolve.mainFiles` options.

// Returns true/false indicating if the importPath resolves to a same named file as the sourcePath.
// @private
export const isSelfReference = (importPath: string, sourcePath: string) => {
    const indexRegExp = new RegExp(`(/${INDEX_FILE})$`)

    // Sanitize the input. Here we want to remove the file extension and index file if it exists.
    sourcePath = sourcePath.replace(/\.[^/.]+$/, '')
    sourcePath = sourcePath.split(path.sep).join('/')
    sourcePath = sourcePath.replace(indexRegExp, '')

    // Do the same for the import path even thought it's not common to use /index and file extensions in your module
    // imports.
    importPath = importPath.split('.')[0]
    importPath = importPath.replace(indexRegExp, '')

    return sourcePath.endsWith(importPath)
}

/**
 * Finds the closest package.json file from the given directory path and retrieves its package name.
 * @param startPath The starting directory path.
 * @returns The package name from the closest package.json, or null if not found.
 */
const getPackageName = (startPath: string): string | null => {
    let currentPath = path.resolve(startPath)

    while (currentPath !== path.parse(currentPath).root) {
        const packageJsonPath = path.join(currentPath, 'package.json')

        if (fs.existsSync(packageJsonPath)) {
            try {
                const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'))
                return packageJson.name || null;
            } catch (error) {
                console.error(`Failed to parse package.json at ${packageJsonPath}:`, error)
                return null;
            }
        }

        // Move one directory up
        currentPath = path.dirname(currentPath)
    }

    return null
}

// TODO: The extensionsEntries really isn't optional, so maybe it shouldn't exist in the opts object?
/**
 * Based on the current extensibility configuration, return an array of candidate file paths to be used
 * in the dollar-prefixed import module resolution for the given import path.
 *
 * @param {String} importPath - The import module-name.
 * @param {String} sourcePath - The path to the file of the source import.
 * @param {Object} opts - The path the file of the source import.
 * @param {Array<shortName: String, config: Array>} opts.extensionEntries - List of extension entries (tuples) used by the base PWA-Kit application.
 * @param {String} opts.projectDir - Absolute path of the base project.
 */
export const buildCandidatePaths = (
    resourcePath: string,
    opts: BuildCandidatePathsOptions
) => {
    const {extensionEntries = [], projectDir = process.cwd()} = opts
    let paths = []

    // Get the import path relative to the project base directory.
    const projectRelPath = resourcePath.split(`${SRC}/`)[1].split('.')[0]
    
    // console.log('projectRelPath: ', projectRelPath)
    // console.log('getPackageName: ', getPackageName(resourcePath))
    // console.log('expand(extensionEntries): ', expand(extensionEntries))

    // Map all the extensions and resolve the module names to absolute paths.
    paths = expand(extensionEntries)
        .filter(([, {enabled}]) => typeof enabled === 'undefined' || enabled)
        .reverse()
        // TODO: Split on current extension.
        .reduce((acc, extensionEntry) => {
            // The reference can be a module/package or an absolute path to a file.
            const [extensionRef] = extensionEntry
            const srcPath = path.join(projectDir, NODE_MODULES, extensionRef, SRC)
            
            return [
                ...acc,
                path.join(srcPath, OVERRIDES, projectRelPath)
            ]
        }, [] as ApplicationExtensionEntry[])

    // Add non-extension search locations locations. The base project and the sdk as the final callback.
    paths = [
        // Base Project: We might want to include it as its original file.
        path.join(projectDir, APP, OVERRIDES, projectRelPath),
        // Extensions
        ...paths
    ]

    return paths
}
