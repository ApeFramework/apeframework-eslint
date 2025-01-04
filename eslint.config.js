import base from '@apeframework/eslint/base'
import typescript from '@apeframework/eslint/typescript'

const config = [
  base,
  typescript,
  {
    ignores: [
      'build',
    ],
  },
]

export {
  config as default,
}
