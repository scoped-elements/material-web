/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {MdElevation} from '../elevation/elevation.js';

import {NavigationDrawer} from '@material/web/navigationdrawer/lib/navigation-drawer.js';
import {styles} from '@material/web/navigationdrawer/lib/navigation-drawer-styles.css.js';
import {styles as sharedStyles} from '@material/web/navigationdrawer/lib/shared-styles.css.js';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';

declare global {
  interface HTMLElementTagNameMap {
    'md-navigation-drawer': MdNavigationDrawer;
  }
}

/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
export class MdNavigationDrawer extends ScopedElementsMixin(NavigationDrawer) {
  static override readonly styles = [sharedStyles, styles];
  
  static get scopedElements() {
    return {
      'md-elevation': MdElevation
    };
  }
}
