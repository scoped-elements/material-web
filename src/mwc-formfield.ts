import { FormfieldBase } from '@material/mwc-formfield/mwc-formfield-base';
import { style } from '@material/mwc-formfield/mwc-formfield-css';

export class Formfield extends FormfieldBase {
  static styles = style;
}


declare global {
  interface HTMLElementTagNameMap {
    [key: string]: any
  }
}

