/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { MdFilledField } from '../field/filled-field.js';
import { MdAutocompleteList } from './autocomplete-list.js';
import { MdAutocompleteSurface } from './autocomplete-surface.js';

import { ClassInfo } from 'lit/directives/class-map.js';
import { literal } from 'lit/static-html.js';

import { styles as filledForcedColorsStyles } from '@material/web/textfield/lib/filled-forced-colors-styles.css.js';
import { styles as filledStyles } from '@material/web/textfield/lib/filled-styles.css.js';
import { styles as sharedStyles } from '@material/web/textfield/lib/shared-styles.css.js';

import { Autocomplete } from '@material/web/autocomplete/lib/autocomplete.js';
import { styles as autocompleteStyles } from '@material/web/autocomplete/lib/filled-styles.css.js';
import { styles as sharedAutocompleteStyles } from '@material/web/autocomplete/lib/shared-styles.css.js';

import { ScopedElementsMixin } from '@open-wc/scoped-elements';

declare global {
  interface HTMLElementTagNameMap {
    'md-filled-autocomplete': MdFilledAutocomplete;
  }
}

/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
export class MdFilledAutocomplete extends ScopedElementsMixin(Autocomplete) {
  static override styles = [
    sharedStyles,
    filledStyles,
    filledForcedColorsStyles,
    sharedAutocompleteStyles,
    autocompleteStyles,
  ];

  static get scopedElements() {
    return {
      'md-filled-field': MdFilledField,
      'md-autocomplete-list': MdAutocompleteList,
      'md-autocomplete-surface': MdAutocompleteSurface,
    };
  }

  protected override readonly listTag = literal`md-autocomplete-list`;
  protected override readonly menuSurfaceTag = literal`md-autocomplete-surface`;
  protected override readonly fieldTag = literal`md-filled-field`;

  /** @soyTemplate */
  protected override getAutocompleteRenderClasses(): ClassInfo {
    return {
      ...super.getAutocompleteRenderClasses(),
      'md3-autocomplete--filled': true,
    };
  }

  /** @soyTemplate */
  protected override getRenderClasses(): ClassInfo {
    return {
      ...super.getRenderClasses(),
      'md3-text-field--filled': true,
    };
  }
}
