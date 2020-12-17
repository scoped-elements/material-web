import type { List as L } from '@material/mwc-list';
import { ListBase } from '@material/mwc-list/mwc-list-base';
import { style } from '@material/mwc-list/mwc-list-css';
import { ListItem } from '@material/mwc-list/mwc-list-item';
import { Constructor } from 'lit-element';
import { Scoped } from 'scoped-elements';

export class List extends Scoped((ListBase as any) as Constructor<L>) {
  static get scopedElements() {
    return {
      'mwc-list-item': ListItem,
    };
  }
  static styles = style;
}
