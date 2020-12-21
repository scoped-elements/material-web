import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { MenuBase } from '../node_modules/@material/mwc-menu/mwc-menu-base.js';
import { style } from '../node_modules/@material/mwc-menu/mwc-menu-css.js';
import { MenuSurface } from '../node_modules/@material/mwc-menu/mwc-menu-surface.js';
import { List } from './mwc-list';

class Menu extends ScopedElementsMixin(MenuBase) {
    static get scopedElements() {
        return {
            'mwc-menu-surface': MenuSurface,
            'mwc-list': List,
        };
    }
}
Menu.styles = style;

export { Menu };
//# sourceMappingURL=mwc-menu.js.map
