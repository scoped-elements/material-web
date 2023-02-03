/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { MdFocusRing } from '../focus/focus-ring.js';
import { MdRipple } from '../ripple/ripple.js';
import { MdElevation } from '../elevation/elevation.js';
import {styles as sharedElevationStyles} from '@material/web/button/lib/shared-elevation-styles.css.js';
import {styles as sharedStyles} from '@material/web/button/lib/shared-styles.css.js';
import {TonalLinkButton} from '@material/web/button/lib/tonal-link-button.js';
import {styles as tonalStyles} from '@material/web/button/lib/tonal-styles.css.js';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
declare global {
  interface HTMLElementTagNameMap {
    'md-tonal-link-button': MdTonalLinkButton;
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
 * __Rationale:__ Filled tonal buttons have a lighter background color and
 * darker label color, making them less visually prominent than a regular,
 * filled button. They’re still used for final or unblocking actions in a flow,
 * but do so with less emphasis.
 *
 * __Example usages:__
 * - Save
 * - Confirm
 * - Done
 *
 * @final
 * @suppress {visibility}
 */
export class MdTonalLinkButton extends ScopedElementsMixin(TonalLinkButton) {
  static override styles = [sharedStyles, sharedElevationStyles, tonalStyles];      
  static get scopedElements() {
    return {
      'md-elevation': MdElevation,
      'md-ripple': MdRipple,
      'md-focus-ring': MdFocusRing
    };
  }
}
