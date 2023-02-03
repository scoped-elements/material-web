/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */


import { MdFocusRing } from '../focus/focus-ring.js';
import { MdRipple } from '../ripple/ripple.js';
import { MdIcon } from '../icon/icon.js';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import {ClassInfo} from 'lit/directives/class-map.js';

import {IconButton} from '@material/web/iconbutton/lib/icon-button.js';
import {styles} from '@material/web/iconbutton/lib/outlined-styles.css.js';
import {styles as sharedStyles} from '@material/web/iconbutton/lib/shared-styles.css.js';

declare global {
  interface HTMLElementTagNameMap {
    'md-outlined-icon-button': MdOutlinedIconButton;
  }
}

/**
 * @summary Icon buttons help people take supplementary actions with a single
 * tap.
 *
 * @description
 * __Emphasis:__ Low emphasis – For optional or supplementary actions with the
 * least amount of prominence.
 *
 * __Rationale:__ The most compact and unobtrusive type of button, icon buttons
 * are used for optional supplementary actions such as "Bookmark" or "Star."
 *
 * __Example usages:__
 * - Add to Favorites
 * - Print
 */
export class MdOutlinedIconButton extends ScopedElementsMixin(IconButton) {
  static override styles = [sharedStyles, styles];

  protected override getRenderClasses(): ClassInfo {
    return {
      ...super.getRenderClasses(),
      'md3-icon-button--outlined': true,
    };
  }
  
  static get scopedElements() {
    return {
      'md-icon': MdIcon,
      'md-ripple': MdRipple,
      'md-focus-ring': MdFocusRing
    };
  }
}
