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

const ape = require('@apeframework/eslint')
const apeJest = require('@apeframework/eslint/jest')
const apeTypescript = require('@apeframework/eslint/typescript')

module.exports = [
  {
    ...ape,
  },
  {
    files: ['**/*.ts'],
    ...apeTypescript,
  },
  {
    files: ['**/*.spec.ts'],
    ...apeJest,
  },
]
```

## Overriding rules

To override linting rules use:

```js
'use strict'

const ape = require('@apeframework/eslint')
const apeJest = require('@apeframework/eslint/jest')
const apeTypescript = require('@apeframework/eslint/typescript')

module.exports = [
  {
    ...ape,
    rules: {
      ...ape.rules,
      // override
    },
  },
  {
    files: ['**/*.ts'],
    ...apeTypescript,
    rules: {
      ...apeTypescript.rules,
      // override
    },
  },
  {
    files: ['**/*.spec.ts'],
    ...apeJest,
    rules: {
      ...apeJest.rules,
      // override
    },
  },
]
```
