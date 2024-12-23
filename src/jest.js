import jestPlugin from 'eslint-plugin-jest'
import globals from 'globals'
import jestRules from './rules/jest.js'

const jestConfig = {
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
    ...jestRules,
  },
}

export {
  jestConfig as default,
}
