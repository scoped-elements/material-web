import type { List as L } from '@material/mwc-list';
import { ListBase } from '@material/mwc-list/mwc-list-base';
import { style } from '@material/mwc-list/mwc-list-css';
import { ListItem } from '@material/mwc-list/mwc-list-item';
import { Constructor } from 'lit-element';
import { ScopedElementsMixin as Scoped } from '@open-wc/scoped-elements';
import { ScopedElementsHost } from '@open-wc/scoped-elements/types/src/types';

export class List extends (Scoped(
  (ListBase as unknown) as Constructor<L>
) as Constructor<L & ScopedElementsHost>) {
  static get scopedElements() {
    return {
      'mwc-list-item': ListItem,
    };
  }
  static styles = style;
}
