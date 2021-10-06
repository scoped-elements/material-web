import { SwitchBase } from '@material/mwc-switch/mwc-switch-base';
import { styles } from '@material/mwc-switch/styles.css';
import { ScopedElementsMixin as Scoped } from '@open-wc/scoped-elements';
import { Ripple } from './mwc-ripple';

export class Switch extends Scoped(SwitchBase) {
  static styles = styles;
  static get scopedElements() {
    return {
      'mwc-ripple': Ripple,
    };
  }
}
