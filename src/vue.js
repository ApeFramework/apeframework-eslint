'use strict'

const vuePlugin = require('eslint-plugin-vue')
const typescriptPlugin = require('typescript-eslint')
const vueParser = require('vue-eslint-parser')

module.exports = {
  files: ['*.vue', '**/*.vue'],
  plugins: {
    'vue': vuePlugin,
    '@typescript-eslint': typescriptPlugin.plugin,
  },
  processor: 'vue/vue',
  languageOptions: {
    parser: vueParser,
    parserOptions: {
      parser: typescriptPlugin.parser,
      projectService: true,
      ecmaFeatures: {
        impliedStrict: true,
      },
      extraFileExtensions: ['.vue'],
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
    ...require('./rules/vue'),
  },
}
