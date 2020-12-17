import { ListBase } from '@material/mwc-list/mwc-list-base';
import { style } from '@material/mwc-list/mwc-list-css';
import { ListItem } from '@material/mwc-list/mwc-list-item';
import { Scoped } from 'scoped-elements';

export class List extends Scoped(class extends ListBase {}) {
  static get scopedElements() {
    return {
      'mwc-list-item': ListItem,
    };
  }
  static styles = style;
}


