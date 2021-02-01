import { TabBase } from '@material/mwc-tab/mwc-tab-base';
import { style } from '@material/mwc-tab/mwc-tab-css';
import { ScopedElementsMixin as Scoped } from '@open-wc/scoped-elements';
import { ScopedElementsHost } from '@open-wc/scoped-elements/types/src/types';
import { Constructor, html, query, queryAsync } from 'lit-element';
import { Ripple } from './mwc-ripple';
import { TabIndicator } from './mwc-tab-indicator';

export class Tab extends (Scoped(TabBase) as Constructor<
  TabBase & ScopedElementsHost
>) {
  static styles = style;
  static get scopedElements() {
    return {
      'mwc-tab-indicator': TabIndicator,
      'mwc-ripple': Ripple,
    };
  }

  @queryAsync('.ripple') ripple!: Promise<Ripple | null>;
  @query('.indicator') protected tabIndicator!: TabIndicator;

  protected renderRipple() {
    return this.shouldRenderRipple
      ? html` <mwc-ripple primary class="ripple"></mwc-ripple> `
      : '';
  }

  protected renderIndicator() {
    return html`<mwc-tab-indicator
      class="indicator"
      .icon="${this.indicatorIcon}"
      .fade="${this.isFadingIndicator}"
    ></mwc-tab-indicator>`;
  }
}
