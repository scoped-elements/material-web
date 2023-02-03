/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { MdFocusRing } from '../focus/focus-ring.js';

import {OutlinedSegmentedButton} from '@material/web/segmentedbutton/lib/outlined-segmented-button.js';
import {styles as outlinedStyles} from '@material/web/segmentedbutton/lib/outlined-styles.css.js';
import {styles as sharedStyles} from '@material/web/segmentedbutton/lib/shared-styles.css.js';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
declare global {
  interface HTMLElementTagNameMap {
    'md-outlined-segmented-button': MdOutlinedSegmentedButton;
  }
}

/**
 * MdOutlinedSegmentedButton is the custom element for the Material
 * Design outlined segmented button component.
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
export class MdOutlinedSegmentedButton extends ScopedElementsMixin(OutlinedSegmentedButton) {
  static override styles = [sharedStyles, outlinedStyles];
  static get scopedElements() {
    return {
      'md-focus-ring': MdFocusRing
    };
  }
}
