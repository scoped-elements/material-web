import { MenuSurfaceBase } from '@material/mwc-menu/mwc-menu-surface-base';
import { style } from '@material/mwc-menu/mwc-menu-surface-css';

export class MenuSurface extends MenuSurfaceBase {
  static styles = style;
}

declare global {
  interface HTMLElementTagNameMap {
    [key: string]: any
  }
}

