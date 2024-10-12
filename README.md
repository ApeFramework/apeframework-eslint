# Ape Framework ESLint configuration

[ESLint](https://eslint.org) configuration for [Ape Framework](https://github.com/ApeFramework/apeframework).

NPM package: [@apeframework/eslint-config](https://www.npmjs.com/package/@apeframework/eslint-config).

GitHub repository: [ApeFramework/apeframework-eslint](https://github.com/ApeFramework/apeframework-eslint).

## Installation

Install package and peer dependencies:

```
npm install --save-dev \
  @apeframework/eslint-config \
  @stylistic/eslint-plugin \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint \
  eslint-plugin-import \
  eslint-plugin-jest
```

## Usage

Create `.eslintrc.json` file:

```json
{
  "root": true,
  "extends": ["@apeframework"],
  "overrides": [
    {
      "files": ["**/*.ts"],
      "extends": ["@apeframework/eslint-config/typescript"],
      "overrides": [
        {
          "files": ["**/*.spec.ts"],
          "extends": ["@apeframework/eslint-config/jest"]
        }
      ]
    }
  ]
}
```

## Overriding rules

To override linting rules use:

```json
{
  "root": true,
  "extends": ["@apeframework"],
  "plugins": [
    "@stylistic",
    "import"
  ],
  "rules": {

  },
  "overrides": [
    {
      "files": ["**/*.ts"],
      "extends": ["@apeframework/eslint-config/typescript"],
      "plugins": [
        "@typescript-eslint"
      ],
      "rules": {

      },
      "overrides": [
        {
          "files": ["**/*.spec.ts"],
          "extends": ["@apeframework/eslint-config/jest"],
          "plugins": [
            "jest"
          ],
          "rules": {

          }
        }
      ]
    }
  ]
}
```
