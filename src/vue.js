import vuePlugin from 'eslint-plugin-vue'
import typescriptPlugin from 'typescript-eslint'
import vueParser from 'vue-eslint-parser'
import typescriptRules from './rules/typescript.js'
import typescriptDisabledRules from './rules/typescriptDisabled.js'
import vueRules from './rules/vue.js'

const vueConfig = {
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
    ...typescriptDisabledRules,
    ...typescriptRules,
    ...vueRules,
  },
}

export {
  vueConfig as default,
}
