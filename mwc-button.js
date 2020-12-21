import { __decorate } from 'tslib';
import { ButtonBase } from '../node_modules/@material/mwc-button/mwc-button-base.js';
import { style } from '../node_modules/@material/mwc-button/styles-css.js';
import { queryAsync } from 'lit-element';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { Icon } from './mwc-icon';
import { Ripple } from './mwc-ripple';

class Button extends ScopedElementsMixin(ButtonBase) {
    static get scopedElements() {
        return {
            'mwc-icon': Icon,
            'mwc-ripple': Ripple,
        };
    }
}
Button.styles = style;
__decorate([
    queryAsync('.ripple')
], Button.prototype, "ripple", void 0);

export { Button };
//# sourceMappingURL=mwc-button.js.map
