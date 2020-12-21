import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { NotchedOutline } from './mwc-notched-outline';
import { TextFieldBase } from '../node_modules/@material/mwc-textfield/mwc-textfield-base.js';
import { style } from '../node_modules/@material/mwc-textfield/mwc-textfield-css.js';

class TextField extends ScopedElementsMixin(TextFieldBase) {
    static get scopedElements() {
        return {
            'mwc-notched-outline': NotchedOutline,
        };
    }
}
TextField.styles = style;

export { TextField };
//# sourceMappingURL=mwc-textfield.js.map
