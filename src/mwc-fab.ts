import { FabBase } from '@material/mwc-fab/mwc-fab-base';
import { style } from '@material/mwc-fab/mwc-fab-css';
import { Scoped } from 'scoped-elements';
import { Ripple } from './mwc-ripple';

export class Fab extends Scoped(FabBase) {
  static get scopedElements() {
    return {
      'mwc-ripple': Ripple,
    };
  }
  static styles = style;
}

declare global {
  interface HTMLElementTagNameMap {
    [key: string]: any
  }
}

