/*
 * Copyright (c) 2024, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import {useApplicationExtension} from '@salesforce/pwa-kit-extension-sdk/react'
import Extension from '../setup-app'

export const useExtensionConfig = () => {
    const extension = useApplicationExtension(Extension.id)
    return extension?.getConfig()
}
