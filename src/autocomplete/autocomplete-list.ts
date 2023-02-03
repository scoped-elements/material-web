/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {styles} from '@material/web/list/lib/list-styles.css.js';

import {AutocompleteList} from '@material/web/autocomplete/lib/autocompletelist/autocomplete-list.js';
import {styles as autocompleteStyles} from '@material/web/autocomplete/lib/autocompletelist/autocomplete-list-styles.css.js';

declare global {
  interface HTMLElementTagNameMap {
    'md-autocomplete-list': MdAutocompleteList;
  }
}

/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
export class MdAutocompleteList extends AutocompleteList {
  static override styles = [styles, autocompleteStyles];
}
