/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { MdIcon } from '../icon/icon.js';

import {html, TemplateResult} from 'lit';

import {FabExtended} from '@material/web/fab/lib/fab-extended.js';
import {styles as extendedStyles} from '@material/web/fab/lib/fab-extended-styles.css.js';
import {styles as sharedStyles} from '@material/web/fab/lib/fab-shared-styles.css.js';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
declare global {
  interface HTMLElementTagNameMap {
    'md-fab-extended': MdFabExtended;
  }
}

/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
export class MdFabExtended extends ScopedElementsMixin(FabExtended) {
  static override styles = [sharedStyles, extendedStyles];

  /** @soyTemplate */
  protected override renderIcon(icon: string): TemplateResult|string {
    return icon ? html`<md-icon class="md3-fab__icon">${icon}</md-icon>` : '';
  }
  
  static get scopedElements() {
    return {
      'md-icon': MdIcon,
    };
  }
}
