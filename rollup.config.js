import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import multiInput from 'rollup-plugin-multi-input';

const pkg = require('./package.json');

export default {
  input: ['src/**/*.ts'],
  output: [{ dir: 'dist', format: 'es', sourcemap: true }],
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash-es')
  external(id) {
    if (!id.includes('mwc-')) return true;
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
      "import { Ripple } from '@material/mwc-ripple/mwc-ripple'": '',
      delimiters: ['', ''],
    }),
    typescript(),
    resolve(),
  ],
};
