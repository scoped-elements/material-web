import { CheckListItemBase } from '@material/mwc-list/mwc-check-list-item-base';
import { style as controlStyle } from '@material/mwc-list/mwc-control-list-item-css';
import { style } from '@material/mwc-list//mwc-list-item-css';
import { Scoped } from 'scoped-elements';
import { Checkbox } from './mwc-checkbox';

export class CheckListItem extends Scoped(CheckListItemBase) {
  static get scopedElements() {
    return {
      'mwc-checkbox': Checkbox,
    };
  }
  static styles = [style, controlStyle];
}

declare global {
  interface HTMLElementTagNameMap {
    [key: string]: any
  }
}

