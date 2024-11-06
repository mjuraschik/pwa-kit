/*
 * Copyright (c) 2024, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import * as fse from 'fs-extra'
import * as p from 'path'
import {getApplicationExtensionInfo} from '../../shared/utils/extensibility'

/**
 * Builds Babel extensibility arguments for processing specific files and paths.
 * Accessing files via "node_modules" ensures compatibility in both mono-repos and
 * developers' environments working on templates with extensibility. Avoids relative paths
 * or symlinked paths that Babel doesn't support by using realpathSync.
 */
export const buildBabelExtensibilityArgs = () => {
    const {installed}: {installed: (string | undefined)[]} = getApplicationExtensionInfo()

    // Filter out undefined values from installed extensions
    const filteredInstalled = installed.filter(
        (packageName): packageName is string => packageName !== undefined
    )

    const serverPath = fse.realpathSync(
        p.resolve('node_modules/@salesforce/pwa-kit-runtime/ssr/server/build-remote-server.js')
    )
    const placeHolderPath = fse.realpathSync(
        p.resolve(
            'node_modules/@salesforce/pwa-kit-extension-sdk/express/placeholders/application-extensions.js'
        )
    )

    const extensionSrcPaths =
        filteredInstalled.length > 0
            ? filteredInstalled.map((packageName) =>
                  fse.realpathSync(p.resolve(`node_modules/${packageName}/src`))
              )
            : []

    const extensionsPathsStr = extensionSrcPaths.length > 0 ? `,${extensionSrcPaths.join(',')}` : ''

    return `--ignore "node_modules/does_not_exist" --only "app/**,${serverPath},${placeHolderPath}${extensionsPathsStr}/**"`
}
