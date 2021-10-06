import { CheckboxBase } from '@material/mwc-checkbox/mwc-checkbox-base';
import { styles } from '@material/mwc-checkbox/mwc-checkbox.css';
import { ScopedElementsMixin as Scoped } from '@open-wc/scoped-elements';
import { Ripple } from './mwc-ripple';

export class Checkbox extends Scoped(CheckboxBase) {
  static get scopedElements() {
    return {
      'mwc-ripple': Ripple,
    };
  }
  static styles = styles;
}
