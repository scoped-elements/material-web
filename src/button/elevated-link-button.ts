/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { MdFocusRing } from '../focus/focus-ring.js';
import { MdRipple } from '../ripple/ripple.js';
import { MdElevation } from '../elevation/elevation.js';
import {ElevatedLinkButton} from '@material/web/button/lib/elevated-link-button.js';
import {styles as elevatedStyles} from '@material/web/button/lib/elevated-styles.css.js';
import {styles as sharedElevationStyles} from '@material/web/button/lib/shared-elevation-styles.css.js';
import {styles as sharedStyles} from '@material/web/button/lib/shared-styles.css.js';

import { ScopedElementsMixin } from '@open-wc/scoped-elements';

declare global {
  interface HTMLElementTagNameMap {
    'md-elevated-link-button': MdElevatedLinkButton;
  }
}

/**
 * @summary Buttons help people take action, such as sending an email, sharing a
 * document, or liking a comment. This is a linkable variant.
 *
 * @description
 * __Emphasis:__ Medium emphasis – For important actions that don’t distract
 * from other onscreen elements.
 *
 * __Rationale:__ Elevated buttons are essentially filled buttons with a lighter
 * background color and a shadow. To prevent shadow creep, only use them when
 * absolutely necessary, such as when the button requires visual separation from
 * a patterned background.
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
export class MdElevatedLinkButton extends ScopedElementsMixin(ElevatedLinkButton) {
  static override styles =
      [sharedStyles, sharedElevationStyles, elevatedStyles];      
  static get scopedElements() {
    return {
      'md-elevation': MdElevation,
      'md-ripple': MdRipple,
      'md-focus-ring': MdFocusRing
    };
  }
}
