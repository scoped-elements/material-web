import { TextFieldBase } from '@material/mwc-textfield/mwc-textfield-base';
import type { TextField as T } from '@material/mwc-textfield';
import { style } from '@material/mwc-textfield/mwc-textfield-css';
import { Constructor, LitElement, query } from 'lit-element';
import { ScopedElementsMixin as Scoped } from '@open-wc/scoped-elements';
import { NotchedOutline } from './mwc-notched-outline';
import { ScopedElementsHost } from '@open-wc/scoped-elements/types/src/types';

export class TextField extends (Scoped(
  (TextFieldBase as unknown) as Constructor<T>
) as Constructor<TextFieldBase & ScopedElementsHost>) {
  static styles = style;
  static get scopedElements() {
    return {
      'mwc-notched-outline': NotchedOutline,
    };
  }

  @query('.mdc-notched-outline')
  protected outlineElement!: NotchedOutline | null;
}
