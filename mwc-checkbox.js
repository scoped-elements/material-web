import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { Ripple } from './mwc-ripple';
import { CheckboxBase } from '../node_modules/@material/mwc-checkbox/mwc-checkbox-base.js';
import { style } from '../node_modules/@material/mwc-checkbox/mwc-checkbox-css.js';

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
