import { MenuBase } from '@material/mwc-menu/mwc-menu-base';
import type { Menu as M } from '@material/mwc-menu';
import { style } from '@material/mwc-menu/mwc-menu-css';
import { MenuSurface } from '@material/mwc-menu/mwc-menu-surface';
import { ScopedElementsMixin as Scoped } from '@open-wc/scoped-elements';
import { List } from './mwc-list';
import { Constructor } from 'lit-element';
import { ScopedElementsHost } from '@open-wc/scoped-elements/types/src/types';

export class Menu extends (Scoped(
  (MenuBase as unknown) as Constructor<M>
) as Constructor<M & ScopedElementsHost>) {
  static get scopedElements() {
    return {
      'mwc-menu-surface': MenuSurface,
      'mwc-list': List,
    };
  }
  static styles = style;
}
