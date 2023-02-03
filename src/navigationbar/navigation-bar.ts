/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {MdElevation} from '../elevation/elevation.js';

import {NavigationBar} from '@material/web/navigationbar/lib/navigation-bar.js';
import {styles} from '@material/web/navigationbar/lib/navigation-bar-styles.css.js';

import { ScopedElementsMixin } from '@open-wc/scoped-elements';

declare global {
  interface HTMLElementTagNameMap {
    'md-navigation-bar': MdNavigationBar;
  }
}

/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
export class MdNavigationBar extends ScopedElementsMixin(NavigationBar) {
  static override styles = [styles];
  
  static get scopedElements() {
    return {
      'md-elevation': MdElevation
    };
  }
}
