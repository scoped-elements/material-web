import { IconButtonBase } from '@material/mwc-icon-button/mwc-icon-button-base';
import { style } from '@material/mwc-icon-button/mwc-icon-button-css';
import { Scoped } from 'scoped-elements';
import { Ripple } from './mwc-ripple';

export class IconButton extends Scoped(IconButtonBase) {
  static styles = style;
  static get scopedElements() {
    return {
      'mwc-ripple': Ripple,
    };
  }
}
