/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {styles} from '@material/web/menusurface/lib/menu-surface-styles.css.js';

import {AutocompleteSurface} from '@material/web/autocomplete/lib/autocompletesurface/autocomplete-surface.js';
import {styles as autocompleteStyles} from '@material/web/autocomplete/lib/autocompletesurface/autocomplete-surface-styles.css.js';

declare global {
  interface HTMLElementTagNameMap {
    'md-autocomplete-surface': MdAutocompleteSurface;
  }
}

/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
export class MdAutocompleteSurface extends AutocompleteSurface {
  static override styles = [styles, autocompleteStyles];
}
