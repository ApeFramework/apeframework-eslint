'use strict'

const stylisticPlugin = require('@stylistic/eslint-plugin')
const importPlugin = require('eslint-plugin-import')
const globals = require('globals')

module.exports = {
  languageOptions: {
    sourceType: 'commonjs',
    ecmaVersion: 'latest',
    globals: {
      ...globals.node,
    },
  },
  plugins: {
    '@stylistic': stylisticPlugin,
    'import': importPlugin,
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
