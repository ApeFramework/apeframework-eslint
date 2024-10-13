'use strict'

const typescriptPlugin = require('typescript-eslint')

module.exports = {
  languageOptions: {
    parser: typescriptPlugin.parser,
    parserOptions: {
      projectService: true,
    },
  },
  plugins: {
    '@typescript-eslint': typescriptPlugin.plugin,
  },
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
