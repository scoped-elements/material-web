import { TextFieldBase } from '@material/mwc-textfield/mwc-textfield-base';
import { style } from '@material/mwc-textfield/mwc-textfield-css';
import { Scoped } from 'scoped-elements';
import { NotchedOutline } from './mwc-notched-outline';

export class TextField extends Scoped(class extends TextFieldBase {}) {
  static styles = style;
  static get scopedElements() {
    return {
      'mwc-notched-outline': NotchedOutline,
    };
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [key: string]: any
  }
}

