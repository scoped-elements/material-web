import { ScopedElementsMixin as Scoped } from '@open-wc/scoped-elements';
import { LitElement, html, TemplateResult, Constructor } from 'lit-element';

import { style } from '@material/mwc-icon/mwc-icon-host-css';
import { ScopedElementsHost } from '@open-wc/scoped-elements/types/src/types';

export class Icon extends (Scoped(LitElement) as Constructor<
  LitElement & ScopedElementsHost
>) {
  static styles = style;

  /** @soyTemplate */
  protected render(): TemplateResult {
    return html`<slot></slot>`;
  }
}
