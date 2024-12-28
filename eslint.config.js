import base from '@apeframework/eslint/base'
import typescript from '@apeframework/eslint/typescript'

const config = [
  base,
  typescript,
  {
    ignores: [
      'package',
    ],
  },
  {
    rules: {
      'import/extensions': 'off',
      'import/no-unresolved': 'off',
      'import/unambiguous': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
    },
  },
]

export {
  config as default,
}
