/*
 * Copyright (c) 2024, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React from "react";
import loadable from "@loadable/component";
import {
  ApplicationExtension,
  IRouteConfig,
} from "@salesforce/pwa-kit-react-sdk/ssr/universal/extensibility";
import {withOptionalChakra} from "*/components/store-locator/with-optional-chakra-provider";
import { withStoreLocator } from "*/components/store-locator/with-store-locator";
import { ReactExtensionConfig as Config } from "./types";

const StoreLocator = loadable(() => import("*/pages/store-locator"));

class StoreLocatorExtension extends ApplicationExtension<Config> {
  DEFAULT_PATH = "/store-locator";
  REQUIRED_CONFIG_FIELDS = ['defaultCountry', 'defaultCountryCode', 'defaultDistance', 'defaultDistanceUnit', 'defaultPageSize', 'defaultPostalCode', 'supportedCountries']

  extendApp(App: React.ComponentType): React.ComponentType {
    const config = this.getConfig();

    const missingFields = this.REQUIRED_CONFIG_FIELDS.filter(field => !config[field]);
    if (missingFields.length) {
      throw new Error(`Missing required config fields: ${missingFields.join(', ')}`);
    }

    return withStoreLocator({
      path: config.path ?? this.DEFAULT_PATH,
      defaultCountry: config.defaultCountry,
      defaultCountryCode: config.defaultCountryCode,
      defaultDistance: config.defaultDistance,
      defaultDistanceUnit: config.defaultDistanceUnit,
      defaultPageSize: config.defaultPageSize,
      defaultPostalCode: config.defaultPostalCode,
      supportedCountries: config.supportedCountries
    })(withOptionalChakra(App));
  }

  extendRoutes(routes: IRouteConfig[]): IRouteConfig[] {
    const { path } = this.getConfig();
    routes.push({
      path: path || this.DEFAULT_PATH,
      component: StoreLocator,
    });
    return routes;
  }
}

export default StoreLocatorExtension;
