import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { CheckListItemBase } from '@material/mwc-list/mwc-check-list-item-base';
import { style as style$1 } from '@material/mwc-list/mwc-control-list-item-css';
import { style } from '@material/mwc-list/mwc-list-item-css';
import { Checkbox } from './mwc-checkbox';

class CheckListItem extends ScopedElementsMixin(CheckListItemBase) {
    static get scopedElements() {
        return {
            'mwc-checkbox': Checkbox,
        };
    }
}
CheckListItem.styles = [style, style$1];

export { CheckListItem };
//# sourceMappingURL=mwc-check-list-item.js.map
