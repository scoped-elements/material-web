import { RadioBase } from '@material/mwc-radio/mwc-radio-base';
import { style } from '@material/mwc-radio/mwc-radio-css';

export class Radio extends RadioBase {
  static styles = style;
}


declare global {
  interface HTMLElementTagNameMap {
    [key: string]: any
  }
}

