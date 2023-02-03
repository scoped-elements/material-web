/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { MdFilledField } from '@material/web/field/filled-field.js';

import {customElement} from 'lit/decorators.js';
import {literal} from 'lit/static-html.js';

// TODO(b/236285090): update with HCM best practices
import {styles as filledForcedColorsStyles} from '@material/web/textfield/lib/filled-forced-colors-styles.css.js';
import {styles as filledStyles} from '@material/web/textfield/lib/filled-styles.css.js';
import {FilledTextField} from '@material/web/textfield/lib/filled-text-field.js';
import {styles as sharedStyles} from '@material/web/textfield/lib/shared-styles.css.js';

export {TextFieldType} from '@material/web/textfield/lib/text-field.js';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';

declare global {
  interface HTMLElementTagNameMap {
    'md-filled-text-field': MdFilledTextField;
  }
}

/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
export class MdFilledTextField extends ScopedElementsMixin(FilledTextField) {
  static override styles =
      [sharedStyles, filledStyles, filledForcedColorsStyles];

  protected override readonly fieldTag = literal`md-filled-field`;

  static get scopedElements() {
    return {
      'md-filled-field': MdFilledField 
    };
  }
}
