import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { style as style$1 } from '../node_modules/@material/mwc-list/mwc-control-list-item-css.js';
import { style } from '../node_modules/@material/mwc-list/mwc-list-item-css.js';
import { RadioListItemBase } from '../node_modules/@material/mwc-list/mwc-radio-list-item-base.js';
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
