import { TextAreaBase } from '@material/mwc-textarea/mwc-textarea-base';
import { styles } from '@material/mwc-textarea/mwc-textarea.css';
import {styles as textfieldStyles} from '@material/mwc-textfield/mwc-textfield.css';
import { NotchedOutline } from './mwc-notched-outline';
import { ScopedElementsMixin as Scoped } from '@open-wc/scoped-elements';

class T extends TextAreaBase {}

export class TextArea extends Scoped(T) {
  static styles = [styles, textfieldStyles];
  static get scopedElements() {
    return {
      'mwc-notched-outline': NotchedOutline,
    };
  }
}
