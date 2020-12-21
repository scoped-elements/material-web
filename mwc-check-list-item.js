import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { CheckListItemBase } from '../node_modules/@material/mwc-list/mwc-check-list-item-base.js';
import { style as style$1 } from '../node_modules/@material/mwc-list/mwc-control-list-item-css.js';
import { style } from '../node_modules/@material/mwc-list/mwc-list-item-css.js';
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
