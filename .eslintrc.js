// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    curly: 'error',
    eqeqeq: 'off',
    'no-unused-expressions': 'off',
    'no-unused-vars': 'off',
  },
};
