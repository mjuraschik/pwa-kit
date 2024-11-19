/*
 * Copyright (c) 2024, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import {LoaderContext} from 'webpack'
import resolve from 'resolve'

// Local Imports
import {buildCandidatePaths} from '../../shared/utils'

// Constants
const SRC = 'src'

const overrideLoader = function (this: LoaderContext<any>) {
    console.log('OVERRIDE LOADER!')
    // console.log('this.resourcePath: ', this.resourcePath)
    // Get the import path relative to the project base directory.
    // NOTE: We intensionally exclude any path prefixes like "/" or "./" so that we can
    // use `packageIterator` in the "resolve" function used later on.
    const projectRelPath = this.resourcePath.split(`${SRC}/`)[1].split('.')[0]
    
    // Lets use the compiler configuration to ensure we are resolving the correct file extensions.
    const options = this._compiler!.options
    const extensions = options.resolve?.extensions || []
    const basedir = process.cwd()

    // @ts-ignore
    console.log('customData: ', this._compiler?.customData)
    // console.log(buildCandidatePaths(this.resourcePath, {
    //     projectDir: basedir,
    //     // @ts-ignore
    //     extensionEntries: options.customData.extensions
    // }))

    // Here we are using the the `resolve` library to resolve the project relative path in conjunction with
    // 'packageIterator' that will allow use to search for the import in other folders/projects.
    const newResourcePath = resolve.sync(projectRelPath, {
        basedir,
        extensions,
        packageIterator: () => [
            `/Users/bchypak/Projects/pwa-kit/packages/template-typescript-minimal/app/overrides/${projectRelPath}`, // Base Project
            `/Users/bchypak/Projects/pwa-kit/packages/template-typescript-minimal/node_modules/@salesforce/extension-sample/src/${projectRelPath}` // Original Extension
        ]
    })
    
    // Tell Webpack to treat this new resource as a dependency of the original module in order to have the dependency
    // traspiled with all the same loaders/plugins that the orginal file was.
    this.addDependency(newResourcePath)

    // Use Webpack's `loadModule` function to load, process, and transpile the alternative module
    const callback = this.async()
    
    // Load the replacement module adding a `noHMR=true` query so we can prevent the HMR plugin from trying 
    // to define its globals again.
    this.loadModule(`${newResourcePath}?noHMR=true`, (err, newSource) => {
        if (err) return callback(err)

        // Return the loaded and transpiled content of the alternative module
        callback(null, newSource)
    })
}

// Export the loader as the default export with proper typing
export default overrideLoader