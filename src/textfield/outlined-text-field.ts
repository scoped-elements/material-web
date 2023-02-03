/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { MdOutlinedField } from '../field/outlined-field.js';

import {customElement} from 'lit/decorators.js';
import {literal} from 'lit/static-html.js';

// TODO(b/236285090): update with HCM best practices
import {styles as outlinedForcedColorsStyles} from '@material/web/textfield/lib/outlined-forced-colors-styles.css.js';
import {styles as outlinedStyles} from '@material/web/textfield/lib/outlined-styles.css.js';
import {OutlinedTextField} from '@material/web/textfield/lib/outlined-text-field.js';
import {styles as sharedStyles} from '@material/web/textfield/lib/shared-styles.css.js';

export {TextFieldType} from '@material/web/textfield/lib/text-field.js';

import { ScopedElementsMixin } from '@open-wc/scoped-elements';

declare global {
  interface HTMLElementTagNameMap {
    'md-outlined-text-field': MdOutlinedTextField;
  }
}

/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
export class MdOutlinedTextField extends ScopedElementsMixin(OutlinedTextField) {
  static override styles =
      [sharedStyles, outlinedStyles, outlinedForcedColorsStyles];

  protected override readonly fieldTag = literal`md-outlined-field`;

  static get scopedElements() {
    return {
      'md-outlined-field': MdOutlinedField 
    };
  }
}
