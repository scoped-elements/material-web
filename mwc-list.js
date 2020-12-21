import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { ListBase } from '../node_modules/@material/mwc-list/mwc-list-base.js';
import { style } from '../node_modules/@material/mwc-list/mwc-list-css.js';
import { ListItem } from '../node_modules/@material/mwc-list/mwc-list-item.js';

class List extends ScopedElementsMixin(ListBase) {
    static get scopedElements() {
        return {
            'mwc-list-item': ListItem,
        };
    }
}
List.styles = style;

export { List };
//# sourceMappingURL=mwc-list.js.map
