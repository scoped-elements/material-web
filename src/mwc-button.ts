import { ButtonBase } from '@material/mwc-button/mwc-button-base';
import { styles } from '@material/mwc-button/styles.css';
import { Constructor, queryAsync } from 'lit-element';
import { ScopedElementsMixin as Scoped } from '@open-wc/scoped-elements';
import { Icon } from './mwc-icon';
import { Ripple } from './mwc-ripple';
import { ScopedElementsHost } from '@open-wc/scoped-elements/types/src/types';

export class Button extends (Scoped(ButtonBase) as Constructor<
  ButtonBase & ScopedElementsHost
>) {
  static get scopedElements() {
    return {
      'mwc-icon': Icon,
      'mwc-ripple': Ripple,
    };
  }

  @queryAsync('.ripple')
  ripple!: Promise<Ripple | null>;

  static styles = styles;
}
