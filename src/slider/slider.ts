/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { MdElevation } from '../elevation/elevation.js';
import { MdFocusRing } from '../focus/focus-ring.js';
import { MdRipple } from '../ripple/ripple.js';
import {ScopedElementsMixin} from '@open-wc/scoped-elements';

import {styles as forcedColorsStyles} from '@material/web/slider/lib/forced-colors-styles.css.js';
import {Slider} from '@material/web/slider/lib/slider.js';
import {styles} from '@material/web/slider/lib/slider-styles.css.js';

declare global {
  interface HTMLElementTagNameMap {
    'md-slider': MdSlider;
  }
}

/**
 * @summary Sliders allow users to view and select a value (or range) along
 * a track.
 *
 * @description
 * Changes made with sliders are immediate, allowing the user to make slider
 * adjustments while determining a selection. Sliders shouldn’t be used to
 * adjust settings with any delay in providing user feedback. Sliders reflect
 * the current state of the settings they control.
 *
 * __Example usages:__
 * - Sliders are ideal for adjusting settings such as volume and brightness, or
 * for applying image filters.
 */
export class MdSlider extends ScopedElementsMixin(Slider) {
  static override styles = [styles, forcedColorsStyles];
  
  static get scopedElements() {
    return {
      'md-elevation': MdElevation,
      'md-focus-ring': MdFocusRing,
      'md-ripple': MdRipple
    };
  }
}
