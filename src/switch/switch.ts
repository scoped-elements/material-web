/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { MdFocusRing } from '../focus/focus-ring.js';
import { MdRipple } from '../ripple/ripple.js';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';


import {Switch} from '@material/web/switch/lib/switch.js';
import {styles} from '@material/web/switch/lib/switch-styles.css.js';

declare global {
  interface HTMLElementTagNameMap {
    'md-switch': MdSwitch;
  }
}

/**
 * @summary Switches toggle the state of a single item on or off.
 *
 * @description
 * There's one type of switch in Material. Use this selection control when the
 * user needs to toggle a single item on or off.
 *
 * @final
 * @suppress {visibility}
 */
export class MdSwitch extends ScopedElementsMixin(Switch) {
  static override styles = [styles];
  static get scopedElements() {
    return {
      'md-ripple': MdRipple,
      'md-focus-ring': MdFocusRing
    };
  }
}
