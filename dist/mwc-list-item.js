import './tslib.es6-2abbead4.js';
import 'lit-element';
import './base-element-66082abe.js';
import './foundation-9806e19c.js';
import './mwc-ripple-css-243508a9.js';
import './class-map-964cfe32.js';
import './style-map-dbb87bda.js';
import './mwc-ripple-e40013be.js';
import './ripple-handlers-a617bd83.js';
import { Scoped } from 'scoped-elements';
import { Ripple } from './mwc-ripple.js';
import './observer-c2e992b9.js';
import { L as ListItemBase, s as style } from './mwc-list-item-css-1f34efcb.js';

class ListItem extends Scoped(ListItemBase) {
    static get scopedElements() {
        return {
            'mwc-ripple': Ripple,
        };
    }
}
ListItem.styles = style;

export { ListItem };
//# sourceMappingURL=mwc-list-item.js.map
