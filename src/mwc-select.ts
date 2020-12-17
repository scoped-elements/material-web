import { SelectBase } from '@material/mwc-select/mwc-select-base';
import { style } from '@material/mwc-select/mwc-select-css';
import { Scoped } from 'scoped-elements';
import { Icon } from './mwc-icon';
import { Menu } from './mwc-menu';
import { NotchedOutline } from './mwc-notched-outline';

export class Select extends Scoped(class extends SelectBase {}) {
  static styles = style;
  static get scopedElements() {
    return {
      'mwc-notched-outline': NotchedOutline,
      'mwc-menu': Menu,
      'mwc-icon': Icon,
    };
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [key: string]: any
  }
}

