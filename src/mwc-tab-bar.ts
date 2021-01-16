import { TabBarBase } from '@material/mwc-tab-bar/mwc-tab-bar-base';
import { style } from '@material/mwc-tab-bar/mwc-tab-bar-css';
import { ScopedElementsMixin as Scoped } from '@open-wc/scoped-elements';
import { ScopedElementsHost } from '@open-wc/scoped-elements/types/src/types';
import { Constructor, html, query } from 'lit-element';
import { Tab } from './mwc-tab';
import { TabScroller } from './mwc-tab-scroller';

export class TabBar extends (Scoped(TabBarBase) as Constructor<
  TabBarBase & ScopedElementsHost
>) {
  static styles = style;
  static get scopedElements() {
    return {
      'mwc-tab': Tab,
      'mwc-tab-scroller': TabScroller,
    };
  }

  protected getScrollerElement(): TabScroller {
    const tagName = this.getScopedTagName('mwc-tab-scroller');

    return this.shadowRoot.querySelector(tagName);
  }
}
