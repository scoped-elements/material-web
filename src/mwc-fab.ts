import { FabBase } from '@material/mwc-fab/mwc-fab-base';
import { style } from '@material/mwc-fab/mwc-fab-css';
import { ScopedElementsMixin as Scoped } from '@open-wc/scoped-elements';
import { ScopedElementsHost } from '@open-wc/scoped-elements/types/src/types';
import { Constructor } from 'lit-element';
import { Ripple } from './mwc-ripple';

export class Fab extends (Scoped(FabBase) as Constructor<
  FabBase & ScopedElementsHost
>) {
  static get scopedElements() {
    return {
      'mwc-ripple': Ripple,
    };
  }
  static styles = style;
}
