import typescriptPlugin from 'typescript-eslint'
import typescriptRules from './rules/typescript.js'
import typescriptDisabledRules from './rules/typescriptDisabled.js'

const typescriptConfig = {
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
    ...typescriptDisabledRules,
    ...typescriptRules,
  },
}

export {
  typescriptConfig as default,
}
