/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { styles as listItemStyles } from '@material/web/list/lib/listitem/list-item-styles.css.js';

import { MenuItemEl } from '@material/web/menu/lib/menuitem/menu-item.js';
import { styles as privateProps } from '@material/web/menu/lib/menuitem/menu-item-private-styles.css.js';
import { styles } from '@material/web/menu/lib/menuitem/menu-item-styles.css.js';

export { ListItem } from '@material/web/list/lib/listitem/list-item.js';
export {
  CloseMenuEvent,
  DeactivateItemsEvent,
  MenuItem,
} from '@material/web/menu/lib/shared.js';

declare global {
  interface HTMLElementTagNameMap {
    'md-menu-item': MdMenuItem;
  }
}

/**
 * @summary Menus display a list of choices on a temporary surface.
 *
 * @description
 * Menu items are the selectable choices within the menu. Menu items must
 * implement the `MenuItem` interface and also have the `md-menu-item`
 * attribute. Additionally menu items are list items so they must also have the
 * `md-list-item` attribute.
 *
 * Menu items can control a menu by selectively firing the `close-menu` and
 * `deselect-items` events.
 *
 * @final
 * @suppress {visibility}
 */
export class MdMenuItem extends MenuItemEl {
  static override styles = [privateProps, listItemStyles, styles];
}
