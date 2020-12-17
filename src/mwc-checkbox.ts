import { CheckboxBase } from '@material/mwc-checkbox/mwc-checkbox-base';
import { style } from '@material/mwc-checkbox/mwc-checkbox-css';
import { Scoped } from 'scoped-elements';
import { Ripple } from './mwc-ripple';

export class Checkbox extends Scoped(CheckboxBase) {
  static get scopedElements() {
    return {
      'mwc-ripple': Ripple,
    };
  }
  static styles = style;
}
