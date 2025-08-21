// frontend/eslint.config.js
import js from '@eslint/js';
import globals from 'globals';

export default [
  { ignores: ['node_modules/**', 'dist/**', 'build/**'] },
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: { jsx: true },
      globals: { ...globals.browser, ...globals.node }
    },
    rules: {
      'no-unused-vars': 'error',
      'quotes': ['error', 'single'],
      'semi': ['error', 'always']
    }
  }
];
