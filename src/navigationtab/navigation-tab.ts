/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { MdBadge } from '../badge/badge.js';
import { MdFocusRing } from '../focus/focus-ring.js';

import {NavigationTab} from '@material/web/navigationtab/lib/navigation-tab.js';
import {styles} from '@material/web/navigationtab/lib/navigation-tab-styles.css.js';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
declare global {
  interface HTMLElementTagNameMap {
    'md-navigation-tab': MdNavigationTab;
  }
}

/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
export class MdNavigationTab extends ScopedElementsMixin(NavigationTab) {
  static override styles = [styles];
  
  
  static get scopedElements() {
    return {
      'md-badge': MdBadge,
      'md-focus-ring': MdFocusRing
    };
  }
}
