import { ButtonBase } from '@material/mwc-button/mwc-button-base';
import { styles } from '@material/mwc-button/styles.css';
import { queryAsync } from 'lit/decorators.js';
import { ScopedElementsMixin as Scoped } from '@open-wc/scoped-elements';
import { Icon } from './mwc-icon';
import { Ripple } from './mwc-ripple';

export class Button extends Scoped(ButtonBase) {
  static get scopedElements() {
    return {
      'mwc-icon': Icon,
      'mwc-ripple': Ripple,
    };
  }

  static styles = styles;
}
