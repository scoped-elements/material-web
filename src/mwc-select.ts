import { SelectBase } from '@material/mwc-select/mwc-select-base';
import { styles } from '@material/mwc-select/mwc-select.css';
import { ScopedElementsMixin as Scoped } from '@open-wc/scoped-elements';
import { Icon } from './mwc-icon';
import { Menu } from './mwc-menu';
import { NotchedOutline } from './mwc-notched-outline';
import { query } from 'lit/decorators.js';

class S extends SelectBase {}

export class Select extends Scoped(S) {
  static styles = [styles];
  static get scopedElements() {
    return {
      'mwc-notched-outline': NotchedOutline,
      'mwc-menu': Menu,
      'mwc-icon': Icon,
    };
  }
}
