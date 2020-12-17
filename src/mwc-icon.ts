import { Scoped } from 'scoped-elements';
import { LitElement, html, TemplateResult } from 'lit-element';

import { style } from '@material/mwc-icon/mwc-icon-host-css';

export class Icon extends Scoped(LitElement) {
  static styles = style;

  /** @soyTemplate */
  protected render(): TemplateResult {
    return html`<slot></slot>`;
  }
}


