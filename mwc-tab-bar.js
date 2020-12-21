import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { TabBarBase } from '@material/mwc-tab-bar/mwc-tab-bar-base';
import { style } from '@material/mwc-tab-bar/mwc-tab-bar-css';
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
