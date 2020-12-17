import { RadioListItemBase } from '@material/mwc-list/mwc-radio-list-item-base';
import { style as controlStyle } from '@material/mwc-list/mwc-control-list-item-css';
import { style } from '@material/mwc-list//mwc-list-item-css';

import { Scoped } from 'scoped-elements';
import { Radio } from './mwc-radio';

export class RadioListItem extends Scoped(RadioListItemBase) {
  static styles = [style, controlStyle];

  static get scopedElements() {
    return {
      'mwc-radio': Radio,
    };
  }
}
