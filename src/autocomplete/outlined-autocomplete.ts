/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { MdOutlinedField } from '../field/outlined-field.js';
import { MdAutocompleteList } from './autocomplete-list.js';
import { MdAutocompleteSurface } from './autocomplete-surface.js';

import {ClassInfo} from 'lit/directives/class-map.js';
import {literal} from 'lit/static-html.js';

import {styles as outlinedForcedColorsStyles} from '@material/web/textfield/lib/outlined-forced-colors-styles.css.js';
import {styles as outlinedStyles} from '@material/web/textfield/lib/outlined-styles.css.js';
import {styles as sharedStyles} from '@material/web/textfield/lib/shared-styles.css.js';

import {Autocomplete} from '@material/web/autocomplete/lib/autocomplete.js';
import {styles as autocompleteStyles} from '@material/web/autocomplete/lib/outlined-styles.css.js';
import {styles as sharedAutocompleteStyles} from '@material/web/autocomplete/lib/shared-styles.css.js';

import { ScopedElementsMixin } from '@open-wc/scoped-elements';

declare global {
  interface HTMLElementTagNameMap {
    'md-outlined-autocomplete': MdOutlinedAutocomplete;
  }
}

/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
export class MdOutlinedAutocomplete extends ScopedElementsMixin(Autocomplete) {
  static override styles = [
    sharedStyles, outlinedStyles, outlinedForcedColorsStyles,
    sharedAutocompleteStyles, autocompleteStyles
  ];

  protected override readonly listTag = literal`md-autocomplete-list`;
  protected override readonly menuSurfaceTag = literal`md-autocomplete-surface`;
  protected override readonly fieldTag = literal`md-outlined-field`;

  /** @soyTemplate */
  protected override getAutocompleteRenderClasses(): ClassInfo {
    return {
      ...super.getAutocompleteRenderClasses(),
      'md3-autocomplete--outlined': true,
    };
  }

  /** @soyTemplate */
  protected override getRenderClasses(): ClassInfo {
    return {
      ...super.getRenderClasses(),
      'md3-text-field--outlined': true,
    };
  }
  
  static get scopedElements() {
    return {
      'md-outlined-field': MdOutlinedField,
      'md-autocomplete-list': MdAutocompleteList,
      'md-autocomplete-surface': MdAutocompleteSurface
    };
  }
}
