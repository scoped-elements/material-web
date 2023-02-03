/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */


import { MdFocusRing } from '../focus/focus-ring.js';
import { MdRipple } from '../ripple/ripple.js';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import {styles as forcedColorsStyles} from '@material/web/radio/lib/forced-colors-styles.css.js';
import {Radio} from '@material/web/radio/lib/radio.js';
import {styles} from '@material/web/radio/lib/radio-styles.css.js';

declare global {
  interface HTMLElementTagNameMap {
    'md-radio': MdRadio;
  }
}

/**
 * @summary Radio buttons allow users to select one option from a set.
 *
 * @description
 * Radio buttons are the recommended way to allow users to make a single
 * selection from a list of options.
 *
 * Only one radio button can be selected at a time.
 *
 * Use radio buttons to:
 * - Select a single option from a set
 * - Expose all available options
 *
 * @final
 * @suppress {visibility}
 */
export class MdRadio extends ScopedElementsMixin(Radio) {
  static override styles = [styles, forcedColorsStyles];
  
  static get scopedElements() {
    return {
      'md-ripple': MdRipple,
      'md-focus-ring': MdFocusRing
    };
  }
}
