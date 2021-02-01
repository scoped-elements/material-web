import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import multiInput from 'rollup-plugin-multi-input';

const pkg = require('./package.json');

let str = `__decorate([
    query('mwc-tab-scroller')
], TabBarBase.prototype, "scrollerElement", void 0);`;

export default {
  input: ['src/**/*.ts'],
  output: [{ dir: 'dist', format: 'es', sourcemap: true }],
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash-es')
  external(id) {
    if (!id.includes('mwc-') && !id.includes('./')) return true;
    if (id.includes('mwc-form') || id.includes('mwc-base')) return true;
    return false;
  },
  watch: {
    include: 'src/**',
  },
  plugins: [
    multiInput(),
    replace({
      'window.customElements.define(tagName, clazz);': '',
      "import { Icon } '@material/mwc-icon/mwc-icon'": '',
      "import '@material/mwc-icon/mwc-icon'": '',
      "import '@material/mwc-ripple/mwc-ripple'": '',
      "import '@material/mwc-list/mwc-list-item';": '',
      "import '@material/mwc-tab';": '',
      "import '@material/mwc-tab-scroller';": '',
      "import { Ripple } from '@material/mwc-ripple/mwc-ripple'": '',
      "import '@material/mwc-tab-indicator';": '',
      "import '@material/mwc-ripple';": '',
      "customElement('mwc-tab')": '',
      'this.scrollerElement': 'this.getScrollerElement()',
      'e instanceof Tab)': 'e instanceof Tab$2)',
      'a as Tab$1': 'a as Tab$2',
      "customElement('mwc-list')": '',
      "customElement('mwc-menu-surface')": '',
      delimiters: ['', ''],
    }),
    typescript(),
    resolve(),
  ],
};
