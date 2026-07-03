import eslint from '@eslint/js';
import globals from 'globals';

export default [
  {
    ignores: ['dist/**', 'public/**', 'example/**', 'coverage/**'],
  },
  eslint.configs.recommended,
  {
    rules: {
      'no-console': ['error', { allow: ['info', 'error'] }],
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
    },
  },
];
