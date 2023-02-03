/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {Ripple} from '@material/web/ripple/lib/ripple.js';
import {styles} from '@material/web/ripple/lib/ripple-styles.css.js';

declare global {
  interface HTMLElementTagNameMap {
    'md-ripple': MdRipple;
  }
}

/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
export class MdRipple extends Ripple {
  static override styles = [styles];
}
