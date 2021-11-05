import { FabBase } from '@material/mwc-fab/mwc-fab-base';
import { styles } from '@material/mwc-fab/mwc-fab.css';
import { ScopedElementsMixin as Scoped } from '@open-wc/scoped-elements';
import { Ripple } from './mwc-ripple';

export class Fab extends Scoped(FabBase) {
  static get scopedElements() {
    return {
      'mwc-ripple': Ripple,
    };
  }
  static styles = [styles];
}
