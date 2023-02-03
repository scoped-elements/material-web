/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {customElement} from 'lit/decorators.js';

import {ListItemIcon} from '@material/web/list/lib/icon/list-item-icon.js';
import {styles} from '@material/web/list/lib/icon/list-item-icon-styles.css.js';

declare global {
  interface HTMLElementTagNameMap {
    'md-list-item-icon': MdListItemIcon;
  }
}

/**
 * @summary A material icon that is expected to be slotted into a list item.
 *
 * @final
 * @suppress {visibility}
 */
export class MdListItemIcon extends ListItemIcon {
  static override styles = [styles];
}
