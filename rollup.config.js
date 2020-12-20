import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import multiInput from 'rollup-plugin-multi-input';

const pkg = require('./package.json');

export default {
  input: ['src/**/*.ts'],
  output: [{ dir: 'dist', format: 'es', sourcemap: true }],
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash-es')
  external: [
    'ts-lib.es6',
    'lit-html',
    'lit-element',
    'lit-html/directives/class-map',
    'lit-html/directives/style-map',
    'lit-html/directives/if-defined',
    'lit-html/directives/live',
    '@material/mwc-ripple/ripple-handlers',
    '@material/mwc-base/base-element',
    '@material/mwc-base/form-element',
    '@material/base/foundation',
    ...Object.keys(pkg.dependencies).filter(key => !key.startsWith('mwc')),
  ],
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
      "import { Ripple } from '@material/mwc-ripple/mwc-ripple'": '',
      delimiters: ['', ''],
    }),
    typescript(),
    resolve(),
  ],
};
