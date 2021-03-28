import { TextAreaBase } from '@material/mwc-textarea/mwc-textarea-base';
import { style } from '@material/mwc-textarea/mwc-textarea-css';
import { query } from 'lit-element';
import { NotchedOutline } from './mwc-notched-outline';

export class TextArea extends TextAreaBase {
  static styles = style;
  static get scopedElements() {
    return {
      'mwc-notched-outline': NotchedOutline,
    };
  }

  @query('.mdc-notched-outline')
  protected outlineElement!: NotchedOutline | null;
}
