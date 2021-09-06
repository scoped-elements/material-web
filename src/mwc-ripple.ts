import { RippleBase } from '@material/mwc-ripple/mwc-ripple-base';
import { styles } from '@material/mwc-ripple/mwc-ripple.css';
import { ScopedElementsMixin as Scoped } from '@open-wc/scoped-elements';
import { ScopedElementsHost } from '@open-wc/scoped-elements/types/src/types';
import { Constructor } from 'lit-element';

export class Ripple extends (Scoped(RippleBase) as Constructor<
  RippleBase & ScopedElementsHost
>) {
  static styles = styles;
}
