import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { Ripple } from './mwc-ripple';
import { style } from '../node_modules/@material/mwc-icon-button/mwc-icon-button-css.js';
import { IconButtonBase } from '../node_modules/@material/mwc-icon-button/mwc-icon-button-base.js';

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
