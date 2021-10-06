import { CheckListItemBase } from '@material/mwc-list/mwc-check-list-item-base';
import { styles as controlStyle } from '@material/mwc-list/mwc-control-list-item.css';
import { styles } from '@material/mwc-list/mwc-list-item.css';
import { ScopedElementsMixin as Scoped } from '@open-wc/scoped-elements';
import { Checkbox } from './mwc-checkbox';

export class CheckListItem extends Scoped(CheckListItemBase) {
  static get scopedElements() {
    return {
      'mwc-checkbox': Checkbox,
    };
  }
  static styles = [styles, controlStyle];
}
