import CardBase from '@ui5/webcomponents/dist/Card.js';
import { css } from 'lit';
import cardCss from '@ui5/webcomponents/dist/generated/themes/Card.css.js';

export class Card extends CardBase {
  static get styles() {
    return [
      cardCss,
      css`
        :host {
          display: flex !important;
        }
        .ui5-card-root {
            display: flex !important;
            flex-direction: column;
        } 
        .ui5-card-root > div {
            flex-direction: column;
            display: flex !important;
            flex: 1;
        }
      `,
    ];
  }
}
