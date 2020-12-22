import { Card as CardBase } from '@authentic/mwc-card';
import { style } from '@authentic/mwc-card/mwc-card-css';
import { ScopedElementsHost } from '@open-wc/scoped-elements/types/src/types';
import { Constructor, css, LitElement } from 'lit-element';
import { ScopedElementsMixin as Scoped } from '@open-wc/scoped-elements';

export class Card extends ((Scoped(
  (CardBase as unknown) as typeof LitElement
) as unknown) as Constructor<CardBase & ScopedElementsHost>) {
  static styles = [
    style,
    css`
      :host {
        width: auto;
      }
    `,
  ];
}
