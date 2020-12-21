import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { style as style$1 } from '@material/mwc-list/mwc-control-list-item-css';
import { RadioListItemBase } from '@material/mwc-list/mwc-radio-list-item-base';
import { style } from '@material/mwc-list//mwc-list-item-css';
import { Radio } from './mwc-radio';

class RadioListItem extends ScopedElementsMixin(RadioListItemBase) {
    static get scopedElements() {
        return {
            'mwc-radio': Radio,
        };
    }
}
RadioListItem.styles = [style, style$1];

export { RadioListItem };
//# sourceMappingURL=mwc-radio-list-item.js.map
