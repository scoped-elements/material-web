import { TextAreaBase } from '@material/mwc-textarea/mwc-textarea-base';
import type { TextArea as T } from '@material/mwc-textarea';
import { styles } from '@material/mwc-textarea/mwc-textarea.css';
import { Constructor, query } from 'lit-element';
import { NotchedOutline } from './mwc-notched-outline';
import { ScopedElementsMixin as Scoped } from '@open-wc/scoped-elements';
import { ScopedElementsHost } from '@open-wc/scoped-elements/types/src/types';

export class TextArea extends (Scoped(
  (TextAreaBase as unknown) as Constructor<T>
) as Constructor<TextAreaBase & ScopedElementsHost>) {
  static styles = styles;
  static get scopedElements() {
    return {
      'mwc-notched-outline': NotchedOutline,
    };
  }

  @query('.mdc-notched-outline')
  protected outlineElement!: NotchedOutline | null;
}
