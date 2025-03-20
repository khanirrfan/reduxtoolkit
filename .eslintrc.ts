import { Linter } from 'eslint';

const config: Linter.Config = {
  root: true,
  env: {
    node: true,
  },
  parser: '@typescript-eslint/parser',
  extends: ['plugin:react/recommended', 'prettier', 'airbnb-base'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
        'etc/no-commented-out-code': 'warn',
        'func-call-spacing': 0,
        'no-spaced-func': 0,
        'linebreak-style': 0,
        curly: 0,
        'nonblock-statement-body-position': 0,
        'function-paren-newline': 0,
        'operator-linebreak': 0,
        'no-confusing-arrow': 0,
        'react/prop-types': 0,
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'no-plusplus': 0,
        'spaced-comment': 0,
        indent: 0,
        'implicit-arrow-linebreak': 0,
        quotes: 0,
        'prefer-destructuring': 0,
        'no-shadow': 0,
        'no-nested-ternary': 0,
        'no-plus-plus': 0,
        'no-else-return': 0,
        'no-underscore-dangle': 0,
        'no-restricted-syntax': 0,
        'import/prefer-default-export': 0,
        'comma-dangle': 0,
        'no-unused-vars': 0,
        'react/react-in-jsx-scope': 0,
        'import/extensions': 0,
        'react/jsx-filename-extension': 0,
        'react/jsx-props-no-spreading': 0,
        'object-curly-newline': 0,
        'import/no-cycle': 0,
        'no-use-before-define': 0,
        'react/no-array-index-key': 0,
        'no-param-reassign': 0
  },
};

export default config;
