# Ape Framework ESLint configuration

[ESLint](https://eslint.org) configuration for [Ape Framework](https://github.com/ApeFramework/apeframework).

NPM package: [@apeframework/eslint](https://www.npmjs.com/package/@apeframework/eslint).

GitHub repository: [ApeFramework/apeframework-eslint](https://github.com/ApeFramework/apeframework-eslint).

## Installation

Install package and peer dependencies:

```
npm install --save-dev \
  @apeframework/eslint \
  @stylistic/eslint-plugin \
  eslint \
  eslint-plugin-import \
  eslint-plugin-jest \
  typescript-eslint
```

## Usage

Create `eslint.config.js` file:

```js
'use strict'

const apeframework = require('@apeframework/eslint')
const apeframeworkJest = require('@apeframework/eslint/jest')
const apeframeworkTypescript = require('@apeframework/eslint/typescript')

module.exports = [
  {
    ...apeframework,
    rules: {

    },
  },
  {
    files: ['**/*.ts'],
    ...apeframeworkTypescript,
    rules: {

    },
  },
  {
    files: ['**/*.spec.ts'],
    ...apeframeworkJest,
    rules: {

    },
  },
]
```
