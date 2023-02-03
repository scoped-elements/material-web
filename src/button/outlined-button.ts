/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { MdFocusRing } from '../focus/focus-ring.js';
import { MdRipple } from '../ripple/ripple.js';

import {OutlinedButton} from '@material/web/button/lib/outlined-button.js';
import {styles as outlinedStyles} from '@material/web/button/lib/outlined-styles.css.js';
import {styles as sharedStyles} from '@material/web/button/lib/shared-styles.css.js';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
declare global {
  interface HTMLElementTagNameMap {
    'md-outlined-button': MdOutlinedButton;
  }
}

/**
 * @summary Buttons help people take action, such as sending an email, sharing a
 * document, or liking a comment.
 *
 * @description
 * __Emphasis:__ Medium emphasis – For important actions that don’t distract
 * from other onscreen elements.
 *
 * __Rationale:__ Use an outlined button for actions that need attention but
 * aren’t the primary action, such as “See all” or “Add to cart.” This is also
 * the button to use for giving someone the opportunity to change their mind or
 * escape a flow.
 *
 * __Example usages:__
 * - Reply
 * - View all
 * - Add to cart
 * - Take out of trash
 *
 * @final
 * @suppress {visibility}
 */
export class MdOutlinedButton extends ScopedElementsMixin(OutlinedButton) {
  static override styles = [sharedStyles, outlinedStyles];      
  static get scopedElements() {
    return {
      'md-ripple': MdRipple,
      'md-focus-ring': MdFocusRing
    };
  }
}
