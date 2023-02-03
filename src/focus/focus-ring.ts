/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {FocusRing} from '@material/web/focus/lib/focus-ring.js';
import {styles} from '@material/web/focus/lib/focus-ring-styles.css.js';

declare global {
  interface HTMLElementTagNameMap {
    'md-focus-ring': MdFocusRing;
  }
}

/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
export class MdFocusRing extends FocusRing {
  static override styles = [styles];
}
