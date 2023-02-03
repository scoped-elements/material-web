/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {NavigationDrawerModal} from '@material/web/navigationdrawer/lib/navigation-drawer-modal.js';
import {styles} from '@material/web/navigationdrawer/lib/navigation-drawer-modal-styles.css.js';
import {styles as sharedStyles} from '@material/web/navigationdrawer/lib/shared-styles.css.js';

declare global {
  interface HTMLElementTagNameMap {
    'md-navigation-drawer-modal': MdNavigationDrawerModal;
  }
}

/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
export class MdNavigationDrawerModal extends NavigationDrawerModal {
  static override readonly styles = [sharedStyles, styles];
}
