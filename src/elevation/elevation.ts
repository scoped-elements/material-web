/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {Elevation} from '@material/web/elevation/lib/elevation.js';
import {styles} from '@material/web/elevation/lib/elevation-styles.css.js';

declare global {
  interface HTMLElementTagNameMap {
    'md-elevation': MdElevation;
  }
}

/**
 * The `<md-elevation>` custom element with default styles.
 *
 * Elevation is the relative distance between two surfaces along the z-axis.
 */
export class MdElevation extends Elevation {
  static override styles = [styles];
}
