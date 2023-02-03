/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */


import {Icon} from '@material/web/icon/lib/icon.js';
import {styles} from '@material/web/icon/lib/icon-styles.css.js';

declare global {
  interface HTMLElementTagNameMap {
    'md-icon': MdIcon;
  }
}

/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
export class MdIcon extends Icon {
  static override styles = [styles];
}
