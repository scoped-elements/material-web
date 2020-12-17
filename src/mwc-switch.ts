import { SwitchBase } from '@material/mwc-switch/mwc-switch-base';
import { style } from '@material/mwc-switch/mwc-switch-css';
import { Scoped } from 'scoped-elements';
import { Ripple } from './mwc-ripple';

export class Switch extends Scoped(SwitchBase) {
  static styles = style;
  static get scopedElements() {
    return {
      'mwc-ripple': Ripple,
    };
  }
}


