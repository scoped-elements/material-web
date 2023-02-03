/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */


import {FilledField} from '@material/web/field/lib/filled-field.js';
import {styles as filledStyles} from '@material/web/field/lib/filled-styles.css.js';
import {styles as sharedStyles} from '@material/web/field/lib/shared-styles.css.js';

declare global {
  interface HTMLElementTagNameMap {
    'md-filled-field': MdFilledField;
  }
}

/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
export class MdFilledField extends FilledField {
  static override styles = [sharedStyles, filledStyles];
}
