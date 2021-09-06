import { SwitchBase } from '@material/mwc-switch/mwc-switch-base';
import { styles } from '@material/mwc-switch/mwc-switch.css';
import { ScopedElementsMixin as Scoped } from '@open-wc/scoped-elements';
import { ScopedElementsHost } from '@open-wc/scoped-elements/types/src/types';
import { Constructor } from 'lit-element';
import { Ripple } from './mwc-ripple';

export class Switch extends (Scoped(SwitchBase) as Constructor<
  SwitchBase & ScopedElementsHost
>) {
  static styles = styles;
  static get scopedElements() {
    return {
      'mwc-ripple': Ripple,
    };
  }
}
