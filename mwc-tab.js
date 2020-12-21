import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { Ripple } from './mwc-ripple';
import { TabBase } from '../node_modules/@material/mwc-tab/mwc-tab-base.js';
import { style } from '../node_modules/@material/mwc-tab/mwc-tab-css.js';
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
