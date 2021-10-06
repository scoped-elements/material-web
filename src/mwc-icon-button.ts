import { IconButtonBase } from '@material/mwc-icon-button/mwc-icon-button-base';
import { styles } from '@material/mwc-icon-button/mwc-icon-button.css';
import { ScopedElementsMixin as Scoped } from '@open-wc/scoped-elements';
import { html } from 'lit';
import { queryAsync } from 'lit/decorators.js';
import { Ripple } from './mwc-ripple';

export class IconButton extends Scoped(IconButtonBase) {
  static styles = styles;
  static get scopedElements() {
    return {
      'mwc-ripple': Ripple,
    };
  }
}
