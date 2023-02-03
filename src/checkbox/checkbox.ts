/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { MdFocusRing } from '../focus/focus-ring.js';
import { MdRipple } from '../ripple/ripple.js';
import {Checkbox} from '@material/web/checkbox/lib/checkbox.js';
import {styles} from '@material/web/checkbox/lib/checkbox-styles.css.js';
import {styles as forcedColorsStyles} from '@material/web/checkbox/lib/forced-colors-styles.css.js';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
declare global {
  interface HTMLElementTagNameMap {
    'md-checkbox': MdCheckbox;
  }
}

/**
 * @summary Checkboxes allow users to select one or more items from a set.
 * Checkboxes can turn an option on or off.
 *
 * @description
 * Use checkboxes to:
 * - Select one or more options from a list
 * - Present a list containing sub-selections
 * - Turn an item on or off in a desktop environment
 *
 * @final
 * @suppress {visibility}
 */
export class MdCheckbox extends ScopedElementsMixin(Checkbox) {
  static override styles = [styles, forcedColorsStyles];
  static get scopedElements() {
    return {
      'md-ripple': MdRipple,
      'md-focus-ring': MdFocusRing
    };
  }
}
