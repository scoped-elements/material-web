import { TabBase } from '@material/mwc-tab/mwc-tab-base';
import { style } from '@material/mwc-tab/mwc-tab-css';
import { ScopedElementsMixin as Scoped } from '@open-wc/scoped-elements';
import { ScopedElementsHost } from '@open-wc/scoped-elements/types/src/types';
import { Constructor } from 'lit-element';
import { Ripple } from './mwc-ripple';
import { TabIndicator } from './mwc-tab-indicator';

export class Tab extends (Scoped(TabBase) as Constructor<
  TabBase & ScopedElementsHost
>) {
  static styles = style;
  static get scopedElements() {
    return {
      'mwc-tab-indicator': TabIndicator,
      'mwc-ripple': Ripple,
    };
  }
}
