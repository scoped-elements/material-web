import { IconButtonBase } from '@material/mwc-icon-button/mwc-icon-button-base';
import { style } from '@material/mwc-icon-button/mwc-icon-button-css';
import { ScopedElementsMixin as Scoped } from '@open-wc/scoped-elements';
import { ScopedElementsHost } from '@open-wc/scoped-elements/types/src/types';
import { Constructor } from 'lit-element';
import { Ripple } from './mwc-ripple';

export class IconButton extends (Scoped(IconButtonBase) as Constructor<
  IconButtonBase & ScopedElementsHost
>) {
  static styles = style;
  static get scopedElements() {
    return {
      'mwc-ripple': Ripple,
    };
  }
}
