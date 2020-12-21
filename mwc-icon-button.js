import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { Ripple } from './mwc-ripple';
import { style } from '@material/mwc-icon-button/mwc-icon-button-css';
import { IconButtonBase } from '@material/mwc-icon-button/mwc-icon-button-base';

class IconButton extends ScopedElementsMixin(IconButtonBase) {
    static get scopedElements() {
        return {
            'mwc-ripple': Ripple,
        };
    }
}
IconButton.styles = style;

export { IconButton };
//# sourceMappingURL=mwc-icon-button.js.map
