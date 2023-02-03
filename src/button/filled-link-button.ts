/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { MdFocusRing } from '../focus/focus-ring.js';
import { MdRipple } from '../ripple/ripple.js';
import { MdElevation } from '../elevation/elevation.js';
import {FilledLinkButton} from '@material/web/button/lib/filled-link-button.js';
import {styles as filledStyles} from '@material/web/button/lib/filled-styles.css.js';
import {styles as sharedElevationStyles} from '@material/web/button/lib/shared-elevation-styles.css.js';
import {styles as sharedStyles} from '@material/web/button/lib/shared-styles.css.js';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
declare global {
  interface HTMLElementTagNameMap {
    'md-filled-link-button': MdFilledLinkButton;
  }
}

/**
 * @summary Buttons help people take action, such as sending an email, sharing a
 * document, or liking a comment. This is a linkable variant.
 *
 * @description
 * __Emphasis:__ High emphasis – For the primary, most important, or most common
 * action on a screen
 *
 * __Rationale:__ The filled button’s contrasting surface color makes it the
 * most prominent button after the FAB. It’s used for final or unblocking
 * actions in a flow.
 *
 * __Example usages:__
 * - Save
 * - Confirm
 * - Done
 *
 * @final
 * @suppress {visibility}
 */
export class MdFilledLinkButton extends ScopedElementsMixin(FilledLinkButton) {
  static override styles = [sharedStyles, sharedElevationStyles, filledStyles];      
  static get scopedElements() {
    return {
      'md-elevation': MdElevation,
      'md-ripple': MdRipple,
      'md-focus-ring': MdFocusRing
    };
  }
}
