import stylisticPlugin from '@stylistic/eslint-plugin'
import importPlugin from 'eslint-plugin-import'
import globals from 'globals'
import baseRules from './rules/base.js'
import importRules from './rules/import.js'
import stylisticRules from './rules/stylistic.js'

const baseConfig = {
  plugins: {
    '@stylistic': stylisticPlugin,
    'import': importPlugin,
  },
  languageOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
    globals: globals.node,
  },
  settings: {
    'import/resolver': {
      node: true,
    },
  },
  rules: {
    ...baseRules,
    ...stylisticRules,
    ...importRules,
  },
}

export {
  baseConfig as default,
}
