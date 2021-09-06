import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import dts from 'rollup-plugin-dts';

const pkg = require('./package.json');

export default [
  {
    input: ['src/index.ts'],
    output: [{ dir: 'dist', format: 'es', sourcemap: true }],
    // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash-es')
    external: [/lit-element/, /lit-html/, '@open-wc/scoped-elements'],
    watch: {
      include: 'src/**',
    },
    plugins: [
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
        "'mwc-tab': Tab$1": "'mwc-tab': Tab$2",
        'customElement("mwc-card")': '',
        'customElement("mwc-list-item")': '',
        "customElement('mwc-list')": '',
        "customElement('mwc-menu-surface')": '',
        "customElement('mwc-menu')": '',
        "customElement('mwc-icon')": '',
        "customElement('mwc-checkbox')": '',
        "customElement('mwc-radio')": '',
        "customElement('mwc-notched-outline')": '',
        delimiters: ['', ''],
      }),
      typescript(),
      resolve({
        dedupe: ['lit-html']
      }),
    ],
  },
  {
    input: './node_modules/@authentic/mwc-card/mwc-card.d.ts',
    external(id) {
      return !id.includes('@authentic');
    },
    output: [{ file: 'dist/mwc-card.d.ts', format: 'es' }],
    plugins: [
      dts({
        respectExternal: true,
      }),
    ],
  },
];
