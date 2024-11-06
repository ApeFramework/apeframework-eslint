'use strict'

const typescriptPlugin = require('typescript-eslint')

module.exports = {
  files: ['*.ts', '**/*.ts'],
  plugins: {
    '@typescript-eslint': typescriptPlugin.plugin,
  },
  languageOptions: {
    parser: typescriptPlugin.parser,
    parserOptions: {
      projectService: true,
      ecmaFeatures: {
        impliedStrict: true,
      },
    },
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
