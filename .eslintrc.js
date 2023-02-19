module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:storybook/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    indent: ['off'],
    'linebreak-style': ['off'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'react/prop-types': ['off']
  }
};