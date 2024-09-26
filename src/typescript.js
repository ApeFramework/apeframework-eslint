'use strict'

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    ecmaFeatures: {
      impliedStrict: true,
    },
  },
  plugins: [
    '@typescript-eslint',
  ],
  settings: {
    'import/resolver': {
      typescript: true,
    },
  },
  rules: {
    ...require('./rules/typescriptDisabled'),
    ...require('./rules/typescript'),
  },
}
