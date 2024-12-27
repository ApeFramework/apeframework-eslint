import base from './src/base.js'

const config = [
  base,
  {
    ignores: [
      'package',
    ],
  },
  {
    rules: {
      'import/extensions': [
        'error',
        'always',
      ],
      'import/no-unresolved': [
        'error',
        {
          ignore: ['typescript-eslint'],
        },
      ],
    },
  },
]

export {
  config as default,
}
