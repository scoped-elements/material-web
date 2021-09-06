import { ListItemBase } from '@material/mwc-list/mwc-list-item-base';
import { style } from '@material/mwc-list/mwc-list-item-css';
import { ScopedElementsMixin as Scoped } from '@open-wc/scoped-elements';
import { ScopedElementsHost } from '@open-wc/scoped-elements/types/src/types';
import { Constructor } from 'lit-element';
import { Ripple } from './mwc-ripple';

export class ListItem extends (Scoped(ListItemBase) as Constructor<
  ListItemBase & ScopedElementsHost
>) {
  static get scopedElements() {
    return {
      'mwc-ripple': Ripple,
    };
  }
  static styles = style;
}
