import { ScopedElementsMixin as Scoped } from '@open-wc/scoped-elements';
import { LitElement, html, TemplateResult } from 'lit';

import { styles } from '@material/mwc-icon/mwc-icon-host.css';

export class Icon extends Scoped(LitElement) {
  static styles = styles;

  /** @soyTemplate */
  protected render(): TemplateResult {
    return html`<slot></slot>`;
  }
}
