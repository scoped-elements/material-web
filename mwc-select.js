import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { Icon } from './mwc-icon';
import { SelectBase } from '@material/mwc-select/mwc-select-base';
import { style } from '@material/mwc-select/mwc-select-css';
import { Menu } from './mwc-menu';
import { NotchedOutline } from './mwc-notched-outline';

class Select extends ScopedElementsMixin(SelectBase) {
    static get scopedElements() {
        return {
            'mwc-notched-outline': NotchedOutline,
            'mwc-menu': Menu,
            'mwc-icon': Icon,
        };
    }
}
Select.styles = style;

export { Select };
//# sourceMappingURL=mwc-select.js.map
