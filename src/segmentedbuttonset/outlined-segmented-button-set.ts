/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */



import {OutlinedSegmentedButtonSet} from '@material/web/segmentedbuttonset/lib/outlined-segmented-button-set.js';
import {styles as outlinedStyles} from '@material/web/segmentedbuttonset/lib/outlined-styles.css.js';
import {styles as sharedStyles} from '@material/web/segmentedbuttonset/lib/shared-styles.css.js';

declare global {
  interface HTMLElementTagNameMap {
    'md-outlined-segmented-button-set': MdOutlinedSegmentedButtonSet;
  }
}

/**
 * MdOutlinedSegmentedButtonSet is the custom element for the Material
 * Design outlined segmented button set component.
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
export class MdOutlinedSegmentedButtonSet extends OutlinedSegmentedButtonSet {
  static override styles = [sharedStyles, outlinedStyles];
}
