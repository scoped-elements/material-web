import { RippleBase } from '@material/mwc-ripple/mwc-ripple-base';
import { styles } from '@material/mwc-ripple/mwc-ripple.css';
import { ScopedElementsMixin as Scoped } from '@open-wc/scoped-elements';
export class Ripple extends Scoped(RippleBase) {
  static styles = [styles];
}
