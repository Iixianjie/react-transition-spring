import { IBundleOptions } from 'father';
const options: IBundleOptions = {
  cjs: 'rollup',
  esm: 'rollup',
  // @ts-ignore
  doc: {
    typescript: true,
    base: '/react-transition-spring'
  },
  runtimeHelpers: true,
};

export default options;
