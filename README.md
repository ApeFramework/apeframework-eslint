# Ape Framework ESLint configuration

[Ape Framework](https://github.com/ApeFramework/apeframework) [ESLint](https://eslint.org) configuration.

NPM package: [@apeframework/eslint](https://www.npmjs.com/package/@apeframework/eslint).

GitHub repository: [ApeFramework/apeframework-eslint](https://github.com/ApeFramework/apeframework-eslint).

## Installation

```
yarn add @apeframework/eslint --dev
```

## Usage

Create `eslint.config.js` file:

```js
import base from '@apeframework/eslint/base.js'
import jest from '@apeframework/eslint/jest.js'
import typescript from '@apeframework/eslint/typescript.js'
import vue from '@apeframework/eslint/vue.js'

const config = [
  base,
  jest,
  typescript,
  vue,
]

export {
  config as default,
}
```
