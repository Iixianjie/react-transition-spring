import { IBundleOptions } from 'father';

const options: IBundleOptions = {
  cjs: 'rollup',
  esm: 'rollup',
  doc: { 
    typescript: true,
    base: '/react-transition-spring'
  },
  runtimeHelpers: true,
};

export default options;
