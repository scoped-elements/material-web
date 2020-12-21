import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { Ripple } from './mwc-ripple';
import { FabBase } from '@material/mwc-fab/mwc-fab-base';
import { style } from '@material/mwc-fab/mwc-fab-css';

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
