/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */


import {Badge} from '@material/web/badge/lib/badge.js';
import {styles} from '@material/web/badge/lib/badge-styles.css.js';

declare global {
  interface HTMLElementTagNameMap {
    'md-badge': MdBadge;
  }
}

/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
export class MdBadge extends Badge {
  static override styles = [styles];
}
