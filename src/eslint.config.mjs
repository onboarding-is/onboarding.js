import es5 from 'eslint-plugin-es5';
import baseConfig from '../eslint.config.mjs';

export default [...baseConfig, {
  plugins: {
    es5,
  },

  rules: {
    'es5/no-modules': 0,
    'no-var': 0,
    'prefer-rest-params': 0,
  },
}];
