import { LitElement, html } from 'lit-element';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { style } from '../node_modules/@material/mwc-icon/mwc-icon-host-css.js';

class Icon extends ScopedElementsMixin(LitElement) {
    /** @soyTemplate */
    render() {
        return html `<slot></slot>`;
    }
}
Icon.styles = style;

export { Icon };
//# sourceMappingURL=mwc-icon.js.map
