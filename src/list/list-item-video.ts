/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */


import {ListItemVideo} from '@material/web/list/lib/video/list-item-video.js';
import {styles} from '@material/web/list/lib/video/list-item-video-styles.css.js';

declare global {
  interface HTMLElementTagNameMap {
    'md-list-item-video': MdListItemVideo;
  }
}

/**
 * @summary A video that is expected to be slotted into a list item.
 *
 * @final
 * @suppress {visibility}
 */
export class MdListItemVideo extends ListItemVideo {
  static override styles = [styles];
}
