import { TabBarBase } from '@material/mwc-tab-bar/mwc-tab-bar-base';
import { style } from '@material/mwc-tab-bar/mwc-tab-bar-css';
import { Scoped } from 'scoped-elements';
import { Tab } from './mwc-tab';
import { TabScroller } from './mwc-tab-scroller';

export class TabBar extends Scoped(TabBarBase) {
  static styles = style;
  static get scopedElements() {
    return {
      'mwc-tab': Tab,
      'mwc-tab-scroller': TabScroller,
    };
  }
}


