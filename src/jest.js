'use strict'

module.exports = {
  plugins: [
    'jest',
  ],
  env: {
    'jest/globals': true,
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
