import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { MenuBase } from '@material/mwc-menu/mwc-menu-base';
import { style } from '@material/mwc-menu/mwc-menu-css';
import { MenuSurface } from '@material/mwc-menu/mwc-menu-surface';
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
