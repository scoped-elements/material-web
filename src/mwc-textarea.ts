import { TextAreaBase } from '@material/mwc-textarea/mwc-textarea-base';
import { style } from '@material/mwc-textarea/mwc-textarea-css';

export class TextArea extends TextAreaBase {
  static styles = style;
}


declare global {
  interface HTMLElementTagNameMap {
    [key: string]: any
  }
}

