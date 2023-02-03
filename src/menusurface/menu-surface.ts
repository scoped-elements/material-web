/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {MdElevation} from '../elevation/elevation.js';

import {MenuSurface} from '@material/web/menusurface/lib/menu-surface.js';
import {styles} from '@material/web/menusurface/lib/menu-surface-styles.css.js';

import { ScopedElementsMixin } from '@open-wc/scoped-elements';

declare global {
  interface HTMLElementTagNameMap {
    'md-menu-surface': MdMenuSurface;
  }
}

export class MdMenuSurface extends ScopedElementsMixin(MenuSurface) {
  static override styles = [styles];
  
  static get scopedElements() {
    return {
      'md-elevation': MdElevation
    };
  }
}
