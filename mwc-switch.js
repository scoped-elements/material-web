import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { Ripple } from './mwc-ripple';
import { SwitchBase } from '@material/mwc-switch/mwc-switch-base';
import { style } from '@material/mwc-switch/mwc-switch-css';

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
