import { ListItemBase } from '@material/mwc-list/mwc-list-item-base';
import { style } from '@material/mwc-list/mwc-list-item-css';
import { Scoped } from 'scoped-elements';
import { Ripple } from './mwc-ripple';

export class ListItem extends Scoped(ListItemBase) {
  static get scopedElements() {
    return {
      'mwc-ripple': Ripple,
    };
  }
  static styles = style;
}


declare global {
  interface HTMLElementTagNameMap {
    [key: string]: any
  }
}

