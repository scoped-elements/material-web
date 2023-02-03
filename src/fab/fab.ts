/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { MdIcon } from '../icon/icon.js';

import {html, TemplateResult} from 'lit';

import {Fab} from '@material/web/fab/lib/fab.js';
import {styles as sharedStyles} from '@material/web/fab/lib/fab-shared-styles.css.js';
import {styles as fabStyles} from '@material/web/fab/lib/fab-styles.css.js';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
declare global {
  interface HTMLElementTagNameMap {
    'md-fab': MdFab;
  }
}

/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */

export class MdFab extends ScopedElementsMixin(Fab) {
  static override styles = [sharedStyles, fabStyles];

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
