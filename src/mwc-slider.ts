import { SliderSingleBase } from '@material/mwc-slider/slider-single-base';
import { styles } from '@material/mwc-slider/mwc-slider.css';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { Ripple } from './mwc-ripple';

export class Slider extends ScopedElementsMixin(SliderSingleBase) {
  static styles = [styles];

  static get scopedElements() {
    return {
      'mwc-ripple': Ripple,
    };
  }
}
