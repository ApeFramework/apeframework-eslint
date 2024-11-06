'use strict'

const stylisticPlugin = require('@stylistic/eslint-plugin')
const importPlugin = require('eslint-plugin-import')
const globals = require('globals')

module.exports = {
  plugins: {
    '@stylistic': stylisticPlugin,
    'import': importPlugin,
  },
  languageOptions: {
    sourceType: 'commonjs',
    ecmaVersion: 'latest',
    globals: globals.node,
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
