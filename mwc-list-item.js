import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { Ripple } from './mwc-ripple';
import { style } from '@material/mwc-list/mwc-list-item-css';
import { ListItemBase } from '@material/mwc-list/mwc-list-item-base';

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
