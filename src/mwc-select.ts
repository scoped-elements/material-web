import { SelectBase } from '@material/mwc-select/mwc-select-base';
import type { Select as S } from '@material/mwc-select';
import { styles } from '@material/mwc-select/mwc-select.css';
import { ScopedElementsMixin as Scoped } from '@open-wc/scoped-elements';
import { Icon } from './mwc-icon';
import { Menu } from './mwc-menu';
import { NotchedOutline } from './mwc-notched-outline';
import { Constructor, query } from 'lit-element';
import { ScopedElementsHost } from '@open-wc/scoped-elements/types/src/types';

export class Select extends (Scoped(
  (SelectBase as unknown) as Constructor<S>
) as Constructor<S & ScopedElementsHost>) {
  @query('.mdc-notched-outline')
  protected outlineElement!: NotchedOutline | null;

  static styles = styles;
  static get scopedElements() {
    return {
      'mwc-notched-outline': NotchedOutline,
      'mwc-menu': Menu,
      'mwc-icon': Icon,
    };
  }
}
