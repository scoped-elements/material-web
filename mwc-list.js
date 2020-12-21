import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { ListBase } from '@material/mwc-list/mwc-list-base';
import { style } from '@material/mwc-list/mwc-list-css';
import { ListItem } from '@material/mwc-list/mwc-list-item';

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
