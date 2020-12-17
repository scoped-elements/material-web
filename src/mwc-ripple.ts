import { RippleBase } from '@material/mwc-ripple/mwc-ripple-base';
import { style } from '@material/mwc-ripple/mwc-ripple-css';
import { Scoped } from 'scoped-elements';

export class Ripple extends Scoped(RippleBase) {
  static styles = style;
}

declare global {
  interface HTMLElementTagNameMap {
    [key: string]: any
  }
}

