/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {styles} from '@material/web/list/lib/listitem/list-item-styles.css.js';

import {AutocompleteItem} from '@material/web/autocomplete/lib/autocompleteitem/autocomplete-item.js';

declare global {
  interface HTMLElementTagNameMap {
    'md-autocomplete-item': MdAutocompleteItem;
  }
}

/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
export class MdAutocompleteItem extends AutocompleteItem {
  static override styles = [styles];
}
