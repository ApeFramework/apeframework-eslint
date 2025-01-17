import type { Rules } from '../Rules.js'

const jestRules: Rules<'jest/'> = {
  'jest/consistent-test-it': [
    'error',
    {
      fn: 'test',
    },
  ],
  'jest/expect-expect': 'off',
  'jest/max-expects': 'off',
  'jest/max-nested-describe': [
    'error',
  ],
  'jest/no-alias-methods': [
    'error',
  ],
  'jest/no-commented-out-tests': [
    'error',
  ],
  'jest/no-conditional-expect': [
    'error',
  ],
  'jest/no-conditional-in-test': [
    'error',
  ],
  'jest/no-confusing-set-timeout': [
    'error',
  ],
  'jest/no-deprecated-functions': [
    'error',
  ],
  'jest/no-disabled-tests': [
    'error',
  ],
  'jest/no-done-callback': [
    'error',
  ],
  'jest/no-duplicate-hooks': [
    'error',
  ],
  'jest/no-export': [
    'error',
  ],
  'jest/no-focused-tests': [
    'error',
  ],
  'jest/no-hooks': [
    'error',
  ],
  'jest/no-identical-title': [
    'error',
  ],
  'jest/no-interpolation-in-snapshots': [
    'error',
  ],
  'jest/no-jasmine-globals': [
    'error',
  ],
  'jest/no-large-snapshots': [
    'error',
  ],
  'jest/no-mocks-import': [
    'error',
  ],
  'jest/no-restricted-jest-methods': [
    'error',
  ],
  'jest/no-restricted-matchers': [
    'error',
  ],
  'jest/no-standalone-expect': [
    'error',
  ],
  'jest/no-test-prefixes': [
    'error',
  ],
  'jest/no-test-return-statement': [
    'error',
  ],
  'jest/no-untyped-mock-factory': [
    'error',
  ],
  'jest/padding-around-after-all-blocks': 'off',
  'jest/padding-around-after-each-blocks': 'off',
  'jest/padding-around-all': 'off',
  'jest/padding-around-before-all-blocks': 'off',
  'jest/padding-around-before-each-blocks': 'off',
  'jest/padding-around-describe-blocks': 'off',
  'jest/padding-around-expect-groups': 'off',
  'jest/padding-around-test-blocks': 'off',
  'jest/prefer-called-with': [
    'error',
  ],
  'jest/prefer-comparison-matcher': [
    'error',
  ],
  'jest/prefer-each': [
    'error',
  ],
  'jest/prefer-equality-matcher': [
    'error',
  ],
  'jest/prefer-expect-assertions': 'off',
  'jest/prefer-expect-resolves': [
    'error',
  ],
  'jest/prefer-hooks-in-order': [
    'error',
  ],
  'jest/prefer-hooks-on-top': [
    'error',
  ],
  'jest/prefer-importing-jest-globals': 'off',
  'jest/prefer-jest-mocked': [
    'error',
  ],
  'jest/prefer-lowercase-title': [
    'error',
  ],
  'jest/prefer-mock-promise-shorthand': [
    'error',
  ],
  'jest/prefer-snapshot-hint': [
    'error',
  ],
  'jest/prefer-spy-on': [
    'error',
  ],
  'jest/prefer-strict-equal': [
    'error',
  ],
  'jest/prefer-to-be': [
    'error',
  ],
  'jest/prefer-to-contain': [
    'error',
  ],
  'jest/prefer-to-have-length': [
    'error',
  ],
  'jest/prefer-todo': [
    'error',
  ],
  'jest/require-hook': [
    'error',
  ],
  'jest/require-to-throw-message': [
    'error',
  ],
  'jest/require-top-level-describe': [
    'error',
  ],
  'jest/unbound-method': 'off',
  'jest/valid-describe-callback': [
    'error',
  ],
  'jest/valid-expect': [
    'error',
  ],
  'jest/valid-expect-in-promise': [
    'error',
  ],
  'jest/valid-title': [
    'error',
  ],
}

export {
  jestRules as default,
}
