import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';

export default {
  input: ['src/index.ts'],
  output: [{ dir: 'dist', format: 'es', sourcemap: true }],
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash-es')
  external: [
    /lit\//,
    'lit',
    /lit-element/,
    /lit-html/,
    '@open-wc/scoped-elements',
  ],
  watch: {
    include: 'src/**',
  },
  plugins: [
    replace({
      'return !!this.header.length;':
        'return this.header && !!this.header.length;',
      '"ui5-card--nocontent": !this.content.length':
        '"ui5-card--nocontent": !this.content || !this.content.length',
      'const definedGlobally = customElements.get(tag);': 'return this;',
      'window.customElements.define': '',
      'window.customElements.define(tag, this);': '',
      'window.customElements.define(tagName, clazz);': '',
      'customElements.define': '',
      "import './mwc-list-item';": '',
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
      dedupe: ['lit-html'],
      browser: true,
    }),
  ],
};
