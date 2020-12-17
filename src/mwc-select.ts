import { SelectBase } from '@material/mwc-select/mwc-select-base';
import type { Select as S } from '@material/mwc-select';
import { style } from '@material/mwc-select/mwc-select-css';
import { Scoped } from 'scoped-elements';
import { Icon } from './mwc-icon';
import { Menu } from './mwc-menu';
import { NotchedOutline } from './mwc-notched-outline';
import { Constructor } from 'lit-element';

export class Select extends Scoped((SelectBase as any) as Constructor<S>) {
  static styles = style;
  static get scopedElements() {
    return {
      'mwc-notched-outline': NotchedOutline,
      'mwc-menu': Menu,
      'mwc-icon': Icon,
    };
  }
}
