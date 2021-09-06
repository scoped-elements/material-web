import { RadioListItemBase } from '@material/mwc-list/mwc-radio-list-item-base';
import { styles as controlStyle } from '@material/mwc-list/mwc-control-list-item.css';
import { styles } from '@material/mwc-list//mwc-list-item.css';

import { ScopedElementsMixin as Scoped } from '@open-wc/scoped-elements';
import { Radio } from './mwc-radio';
import { ScopedElementsHost } from '@open-wc/scoped-elements/types/src/types';
import { Constructor } from 'lit-element';

export class RadioListItem extends (Scoped(RadioListItemBase) as Constructor<
  RadioListItemBase & ScopedElementsHost
>) {
  static styles = [styles, controlStyle];

  static get scopedElements() {
    return {
      'mwc-radio': Radio,
    };
  }
}
