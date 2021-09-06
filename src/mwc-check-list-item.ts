import { CheckListItemBase } from '@material/mwc-list/mwc-check-list-item-base';
import { style as controlStyle } from '@material/mwc-list/mwc-control-list-item-css';
import { style } from '@material/mwc-list/mwc-list-item-css';
import { ScopedElementsMixin as Scoped } from '@open-wc/scoped-elements';
import { Checkbox } from './mwc-checkbox';
import { Constructor } from 'lit-element';
import { ScopedElementsHost } from '@open-wc/scoped-elements/types/src/types';

export class CheckListItem extends (Scoped(CheckListItemBase) as Constructor<
  CheckListItemBase & ScopedElementsHost
>) {
  static get scopedElements() {
    return {
      'mwc-checkbox': Checkbox,
    };
  }
  static styles = [style, controlStyle];
}
