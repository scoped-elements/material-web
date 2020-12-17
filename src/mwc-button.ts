import { ButtonBase } from '@material/mwc-button/mwc-button-base';
import { style } from '@material/mwc-button/styles-css';
import { Scoped } from 'scoped-elements';
import { Icon } from './mwc-icon';
import { Ripple } from './mwc-ripple';

export class Button extends Scoped(ButtonBase) {
  static get scopedElements() {
    return {
      'mwc-icon': Icon,
      'mwc-ripple': Ripple,
    };
  }

  static styles = style;
}


