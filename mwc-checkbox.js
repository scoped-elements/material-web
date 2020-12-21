import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { Ripple } from './mwc-ripple';
import { CheckboxBase } from '@material/mwc-checkbox/mwc-checkbox-base';
import { style } from '@material/mwc-checkbox/mwc-checkbox-css';

class Checkbox extends ScopedElementsMixin(CheckboxBase) {
    static get scopedElements() {
        return {
            'mwc-ripple': Ripple,
        };
    }
}
Checkbox.styles = style;

export { Checkbox };
//# sourceMappingURL=mwc-checkbox.js.map
