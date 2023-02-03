/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {customElement} from 'lit/decorators.js';

import {ListItemImage} from '@material/web/list/lib/image/list-item-image.js';
import {styles} from '@material/web/list/lib/image/list-item-image-styles.css.js';

declare global {
  interface HTMLElementTagNameMap {
    'md-list-item-image': MdListItemImage;
  }
}

/**
 * @summary An image that is expected to be slotted into a list item.
 *
 * @final
 * @suppress {visibility}
 */
export class MdListItemImage extends ListItemImage {
  static override styles = [styles];
}
