import { MenuBase } from '@material/mwc-menu/mwc-menu-base';
import type { Menu as M } from '@material/mwc-menu';
import { style } from '@material/mwc-menu/mwc-menu-css';
import { MenuSurface } from '@material/mwc-menu/mwc-menu-surface';
import { Scoped } from 'scoped-elements';
import { List } from './mwc-list';
import { Constructor } from 'lit-element';

export class Menu extends Scoped((MenuBase as any) as Constructor<M>) {
  static get scopedElements() {
    return {
      'mwc-menu-surface': MenuSurface,
      'mwc-list': List,
    };
  }
  static styles = style;
}
