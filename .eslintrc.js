module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/jsx-runtime', 'next/core-web-vitals', 'plugin:storybook/recommended'],
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};