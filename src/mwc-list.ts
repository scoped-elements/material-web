import { ListBase } from '@material/mwc-list/mwc-list-base';
import { styles } from '@material/mwc-list/mwc-list.css';
import { ListItem } from './mwc-list-item';
import { ScopedElementsMixin as Scoped } from '@open-wc/scoped-elements';

class L extends ListBase {}

export class List extends Scoped(L) {
  static get scopedElements() {
    return {
      'mwc-list-item': ListItem,
    };
  }
  static styles = [styles];
}
