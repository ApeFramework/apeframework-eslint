import vuePlugin from 'eslint-plugin-vue'
import typescriptPlugin from 'typescript-eslint'
import vueParser from 'vue-eslint-parser'
import typescriptRules from './rules/typescript.js'
import typescriptDisabledRules from './rules/typescriptDisabled.js'
import vueRules from './rules/vue.js'

const vueConfig = {
  files: ['*.vue', '**/*.vue'],
  plugins: {
    'typescript': typescriptPlugin.plugin,
    'vue': vuePlugin,
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
  rules: {
    ...typescriptDisabledRules,
    ...typescriptRules,
    ...vueRules,
  },
}

export {
  vueConfig as default,
}
