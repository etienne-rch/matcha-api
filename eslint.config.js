const importPlugin = require('eslint-plugin-import');
const tseslint = require('typescript-eslint');

module.exports = tseslint.config({
  ignores: ['dist', 'node_modules'],
  plugins: {
    import: importPlugin,
    '@typescript-eslint': tseslint.plugin,
  },
  rules: {
    'no-console': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn'],
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc' },
        groups: [
          ['builtin', 'external'],
          'internal',
          ['parent', 'sibling', 'index'],
        ],
      },
    ],
  },
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      sourceType: 'module',
    },
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
});
