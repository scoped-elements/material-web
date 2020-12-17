import { MenuBase } from '@material/mwc-menu/mwc-menu-base';
import { style } from '@material/mwc-menu/mwc-menu-css';
import { MenuSurface } from '@material/mwc-menu/mwc-menu-surface';
import { Scoped } from 'scoped-elements';
import { List } from './mwc-list';

export class Menu extends Scoped(class extends MenuBase {}) {
  static get scopedElements() {
    return {
      'mwc-menu-surface': MenuSurface,
      'mwc-list': List,
    };
  }
  static styles = style;
}
