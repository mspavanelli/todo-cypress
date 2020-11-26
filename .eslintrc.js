const fs = require('fs')
const path = require('path')

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8')
)

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'prettier',
    'prettier/react',
  ],
  parser: 'babel-eslint',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    // 'react',
    // 'prettier',
    // 'jest',
    // 'emotion',
    // 'react-hooks',
    // 'jsx-a11y',
    // 'import-helpers',
    // 'eslint-plugin-import-helpers',
  ],
  rules: {
    'prettier/prettier': ['error', prettierOptions],
  },
}
