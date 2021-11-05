import { TabBase } from '@material/mwc-tab/mwc-tab-base';
import { styles } from '@material/mwc-tab/mwc-tab.css';
import { ScopedElementsMixin as Scoped } from '@open-wc/scoped-elements';
import { Ripple } from './mwc-ripple';
import { TabIndicator } from './mwc-tab-indicator';

export class Tab extends Scoped(TabBase) {
  static styles = [styles];
  static get scopedElements() {
    return {
      'mwc-tab-indicator': TabIndicator,
      'mwc-ripple': Ripple,
    };
  }
}
