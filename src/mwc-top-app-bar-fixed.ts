import { TopAppBarFixedBase } from '@material/mwc-top-app-bar-fixed/mwc-top-app-bar-fixed-base';
import {style} from '@material/mwc-top-app-bar/mwc-top-app-bar-css';

export class TopAppBarFixed extends TopAppBarFixedBase {
  static styles = style;
}


declare global {
  interface HTMLElementTagNameMap {
    [key: string]: any
  }
}

