import { ListItemBase } from '@material/mwc-list/mwc-list-item-base';
import { styles } from '@material/mwc-list/mwc-list-item.css';
import { ScopedElementsMixin as Scoped } from '@open-wc/scoped-elements';
import { Ripple } from './mwc-ripple';

export class ListItem extends Scoped(ListItemBase) {
  static get scopedElements() {
    return {
      'mwc-ripple': Ripple,
    };
  }
  static styles = styles;
}
