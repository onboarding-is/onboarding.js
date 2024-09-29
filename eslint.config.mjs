import stylisticJs from '@stylistic/eslint-plugin-js'
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [...compat.extends(
  'eslint:recommended',
  'plugin:@typescript-eslint/recommended',
  'prettier'
), {
  plugins: {
    '@stylistic/js': stylisticJs
  },

  languageOptions: {
    globals: {
      ...globals.browser,
    },

    parser: tsParser,
    ecmaVersion: 6,
    sourceType: 'script',
  },

  rules: {
    '@stylistic/js/indent': ['error', 2],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    'no-inner-declarations': 0,
    'no-console': 0,
    'quotes': ['error', 'single'],
    'object-curly-spacing': ['error', 'always'],
    'indent': ['error', 2]
  },
}];
