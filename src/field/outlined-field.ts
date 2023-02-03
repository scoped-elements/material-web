/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {OutlinedField} from '@material/web/field/lib/outlined-field.js';
import {styles as outlinedStyles} from '@material/web/field/lib/outlined-styles.css.js';
import {styles as sharedStyles} from '@material/web/field/lib/shared-styles.css.js';

declare global {
  interface HTMLElementTagNameMap {
    'md-outlined-field': MdOutlinedField;
  }
}

/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
export class MdOutlinedField extends OutlinedField {
  static override styles = [sharedStyles, outlinedStyles];
}
