import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { TabBarBase } from '../node_modules/@material/mwc-tab-bar/mwc-tab-bar-base.js';
import { style } from '../node_modules/@material/mwc-tab-bar/mwc-tab-bar-css.js';
import { Tab } from './mwc-tab';
import { TabScroller } from './mwc-tab-scroller';

class TabBar extends ScopedElementsMixin(TabBarBase) {
    static get scopedElements() {
        return {
            'mwc-tab': Tab,
            'mwc-tab-scroller': TabScroller,
        };
    }
}
TabBar.styles = style;

export { TabBar };
//# sourceMappingURL=mwc-tab-bar.js.map
