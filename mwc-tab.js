import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { Ripple } from './mwc-ripple';
import { TabBase } from '@material/mwc-tab/mwc-tab-base';
import { style } from '@material/mwc-tab/mwc-tab-css';
import { TabIndicator } from './mwc-tab-indicator';

class Tab extends ScopedElementsMixin(TabBase) {
    static get scopedElements() {
        return {
            'mwc-tab-indicator': TabIndicator,
            'mwc-ripple': Ripple,
        };
    }
}
Tab.styles = style;

export { Tab };
//# sourceMappingURL=mwc-tab.js.map
