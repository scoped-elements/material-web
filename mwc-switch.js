import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { Ripple } from './mwc-ripple';
import { SwitchBase } from '../node_modules/@material/mwc-switch/mwc-switch-base.js';
import { style } from '../node_modules/@material/mwc-switch/mwc-switch-css.js';

class Switch extends ScopedElementsMixin(SwitchBase) {
    static get scopedElements() {
        return {
            'mwc-ripple': Ripple,
        };
    }
}
Switch.styles = style;

export { Switch };
//# sourceMappingURL=mwc-switch.js.map
