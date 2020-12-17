import { CircularProgressBase } from '@material/mwc-circular-progress/mwc-circular-progress-base';
import { style } from '@material/mwc-circular-progress/mwc-circular-progress-css';

export class CircularProgress extends CircularProgressBase {
  static styles = style;
}

declare global {
  interface HTMLElementTagNameMap {
    [key: string]: any
  }
}

