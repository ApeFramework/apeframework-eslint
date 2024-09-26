'use strict'

module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: [
    '@stylistic',
    'import',
  ],
  env: {
    node: true,
  },
  settings: {
    'import/resolver': {
      node: true,
    },
  },
  rules: {
    ...require('./rules/base'),
    ...require('./rules/stylistic'),
    ...require('./rules/import'),
  },
}
