# Ape Framework ESLint configuration

[ESLint](https://eslint.org) configuration for [Ape Framework](https://github.com/ApeFramework/apeframework).

NPM package: [@apeframework/eslint](https://www.npmjs.com/package/@apeframework/eslint).

GitHub repository: [ApeFramework/apeframework-eslint](https://github.com/ApeFramework/apeframework-eslint).

## Installation

```
yarn add @apeframework/eslint --dev
```

## Usage

Create `eslint.config.js` file:

```js
'use strict'

const base = require('@apeframework/eslint/base')
const jest = require('@apeframework/eslint/jest')
const typescript = require('@apeframework/eslint/typescript')
const vue = require('@apeframework/eslint/vue')

module.exports = [
  base,
  jest,
  typescript,
  vue,
]
```
