const {resolve} = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  extends: ['eslint:recommended', 'plugin:storybook/recommended', 'expo', 'prettier'],
  plugins: ['prettier'],
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  rules: {
    'prettier/prettier': 'warn',
  },
  overrides: [
    {
      files: ['*.js?(x)', '*.ts?(x)'],
    },
    {
      files: ['*.config.js'],
      env: {
        node: true,
      },
    },
    {
      files: ['*.mdx'],
      extends: ['plugin:react/recommended', 'plugin:mdx/recommended'],
      settings: {
        'mdx/code-blocks': false, // TODO: Enable this when it works properly
      },
    },
  ],
  ignorePatterns: [
    // Ignore dotfiles
    '.*.js',
    'node_modules/',
  ],
};
