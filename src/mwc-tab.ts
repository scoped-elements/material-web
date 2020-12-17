import { TabBase } from '@material/mwc-tab/mwc-tab-base';
import { style } from '@material/mwc-tab/mwc-tab-css';
import { Scoped } from 'scoped-elements';
import { Ripple } from './mwc-ripple';
import { TabIndicator } from './mwc-tab-indicator';

export class Tab extends Scoped(TabBase) {
  static styles = style;
  static get scopedElements() {
    return {
      'mwc-tab-indicator': TabIndicator,
      'mwc-ripple': Ripple,
    };
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [key: string]: any
  }
}

