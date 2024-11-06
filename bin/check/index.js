/*
 * Usage: node bin/check
 */

'use strict'

const { getBaseRules } = require('./getBaseRules')
const { getImportRules } = require('./getImportRules')
const { getJestRules } = require('./getJestRules')
const { getStylisticRules } = require('./getStylisticRules')
const { getTypescriptDisabledRules } = require('./getTypescriptDisabledRules')
const { getTypescriptRules } = require('./getTypescriptRules')
const { getVueRules } = require('./getVueRules')

const check = async () => {
  const allRules = {
    base: await getBaseRules(),
    import: await getImportRules(),
    jest: await getJestRules(),
    stylistic: await getStylisticRules(),
    typescriptDisabled: await getTypescriptDisabledRules(),
    typescript: await getTypescriptRules(),
    vue: await getVueRules(),
  }

  Object.entries(allRules).forEach(([ruleset, rules]) => {
    process.stdout.write(`Check ${ruleset} rules:`)

    let ok = true

    const projectRules = Object.keys(require(`../../src/rules/${ruleset}.js`))

    projectRules.forEach((rule, index) => {
      if (index > 0 && rule < projectRules[index - 1]) {
        process.stdout.write(`\n- unordered: ${rule}`)
        ok = false
      }
      if (!rules.includes(rule)) {
        process.stdout.write(`\n- extraneous: ${rule}`)
        ok = false
      }
    })

    rules.forEach((rule) => {
      if (!projectRules.includes(rule)) {
        process.stdout.write(`\n- missing: ${rule}`)
        ok = false
      }
    })

    process.stdout.write(ok ? ' OK\n' : '\n')
  })
}

check()
