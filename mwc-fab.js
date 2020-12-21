import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { Ripple } from './mwc-ripple';
import { FabBase } from '../node_modules/@material/mwc-fab/mwc-fab-base.js';
import { style } from '../node_modules/@material/mwc-fab/mwc-fab-css.js';

class Fab extends ScopedElementsMixin(FabBase) {
    static get scopedElements() {
        return {
            'mwc-ripple': Ripple,
        };
    }
}
Fab.styles = style;

export { Fab };
//# sourceMappingURL=mwc-fab.js.map
