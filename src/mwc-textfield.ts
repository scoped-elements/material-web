import { TextFieldBase } from '@material/mwc-textfield/mwc-textfield-base';
import type { TextField as T } from '@material/mwc-textfield';
import { style } from '@material/mwc-textfield/mwc-textfield-css';
import { Constructor, LitElement } from 'lit-element';
import { Scoped } from 'scoped-elements';
import { NotchedOutline } from './mwc-notched-outline';

export class TextField extends Scoped(
  (TextFieldBase as any) as Constructor<T>
) {
  static styles = style;
  static get scopedElements() {
    return {
      'mwc-notched-outline': NotchedOutline,
    };
  }
}
