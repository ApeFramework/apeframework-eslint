'use strict'

const jestPlugin = require('eslint-plugin-jest')
const globals = require('globals')

module.exports = {
  files: ['*.spec.ts', '**/*.spec.ts', '*.test.ts', '**/*.test.ts'],
  languageOptions: {
    globals: globals.jest,
  },
  plugins: {
    'jest': jestPlugin,
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
