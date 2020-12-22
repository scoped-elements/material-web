import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';

const pkg = require('./package.json');
const src = `Card = __decorate([
    customElement("mwc-card")
], Card);`;
export default {
  input: ['src/mwc-card.ts'],
  output: [{ dir: 'dist', format: 'es', sourcemap: true }],
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash-es')
  external(id) {
    return id.includes('lit') || id.includes('@open-wc');
  },
  watch: {
    include: 'src/**',
  },
  plugins: [
    replace({
      [src]: '',
      'window.customElements.define(tagName, clazz);': '',
      "import { Icon } '@material/mwc-icon/mwc-icon'": '',
      "import '@material/mwc-icon/mwc-icon'": '',
      "import '@material/mwc-ripple/mwc-ripple'": '',
      "import { Ripple } from '@material/mwc-ripple/mwc-ripple'": '',
      delimiters: ['', ''],
    }),
    typescript(),
    resolve(),
  ],
};
