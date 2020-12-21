import 'tslib';
import '@material/mwc-ripple/ripple-handlers';
import 'lit-element';
import 'lit-html/directives/class-map';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import '@material/mwc-base/base-element';
import '@material/base/foundation';
import { Ripple } from './mwc-ripple.js';
import 'lit-html/directives/style-map';
import '@material/mwc-base/observer';
import { L as ListItemBase, s as style } from './mwc-list-item-css-34b01679.js';

class ListItem extends ScopedElementsMixin(ListItemBase) {
    static get scopedElements() {
        return {
            'mwc-ripple': Ripple,
        };
    }
}
ListItem.styles = style;

export { ListItem };
//# sourceMappingURL=mwc-list-item.js.map
