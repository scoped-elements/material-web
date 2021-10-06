import { MenuBase } from '@material/mwc-menu/mwc-menu-base';
import { styles } from '@material/mwc-menu/mwc-menu.css';
import { MenuSurface } from '@material/mwc-menu/mwc-menu-surface';
import { ScopedElementsMixin as Scoped } from '@open-wc/scoped-elements';
import { List } from './mwc-list';

class M extends MenuBase {}

export class Menu extends Scoped(M) {
  static get scopedElements() {
    return {
      'mwc-menu-surface': MenuSurface,
      'mwc-list': List,
    };
  }
  static styles = styles;
}
