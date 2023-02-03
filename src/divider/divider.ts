/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {Divider} from '@material/web/divider/lib/divider.js';
import {styles} from '@material/web/divider/lib/divider-styles.css.js';

declare global {
  interface HTMLElementTagNameMap {
    'md-divider': MdDivider;
  }
}

/**
 * @summary A divider is a thin line that groups content in lists and
 * containers.
 *
 * @description Dividers can reinforce tapability, such as when used to separate
 * list items or define tappable regions in an accordion.
 *
 * @final
 * @suppress {visibility}
 */
export class MdDivider extends Divider {
  static override styles = [styles];
}
