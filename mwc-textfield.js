import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { NotchedOutline } from './mwc-notched-outline';
import { TextFieldBase } from '@material/mwc-textfield/mwc-textfield-base';
import { style } from '@material/mwc-textfield/mwc-textfield-css';

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
