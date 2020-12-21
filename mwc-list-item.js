import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { Ripple } from './mwc-ripple';
import { style } from '../node_modules/@material/mwc-list/mwc-list-item-css.js';
import { ListItemBase } from '../node_modules/@material/mwc-list/mwc-list-item-base.js';

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
