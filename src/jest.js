'use strict'

const jestPlugin = require('eslint-plugin-jest')
const globals = require('globals')

module.exports = {
  files: ['*.spec.ts', '**/*.spec.ts', '*.test.ts', '**/*.test.ts'],
  plugins: {
    'jest': jestPlugin,
  },
  languageOptions: {
    globals: globals.jest,
  },
  settings: {
    'import/resolver': {
      jest: {
        jestConfigFile: 'jest.config.json',
      },
    },
  },
  rules: {
    ...require('./rules/jest'),
  },
}
