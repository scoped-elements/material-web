import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { RippleBase } from '../node_modules/@material/mwc-ripple/mwc-ripple-base.js';
import { style } from '../node_modules/@material/mwc-ripple/mwc-ripple-css.js';

class Ripple extends ScopedElementsMixin(RippleBase) {
}
Ripple.styles = style;

export { Ripple };
//# sourceMappingURL=mwc-ripple.js.map
