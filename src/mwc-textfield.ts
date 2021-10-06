import { TextFieldBase } from '@material/mwc-textfield/mwc-textfield-base';

import { styles } from '@material/mwc-textfield/mwc-textfield.css';

import { ScopedElementsMixin as Scoped } from '@open-wc/scoped-elements';
import { NotchedOutline } from './mwc-notched-outline';

class T extends TextFieldBase {}
export class TextField extends Scoped(T) {
  static styles = styles;
  static get scopedElements() {
    return {
      'mwc-notched-outline': NotchedOutline,
    };
  }
}
