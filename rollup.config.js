import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import multiInput from 'rollup-plugin-multi-input';

const pkg = require('./package.json');

export default {
  input: ['src/**/*.ts'],
  output: [{ dir: 'dist', format: 'es', sourcemap: true }],
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash-es')
  external: [...Object.keys(pkg).filter(key => !key.startsWith('mwc'))],
  watch: {
    include: 'src/**',
  },
  plugins: [
    multiInput(),
    replace({
      'window.customElements.define(tagName, clazz);': '',
      delimiters: ['', ''],
    }),
    typescript(),
    resolve(),
  ],
};
