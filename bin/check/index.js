/*
 * Usage: node bin/check
 */
import { getBaseRules } from './getBaseRules.js'
import { getImportRules } from './getImportRules.js'
import { getJestRules } from './getJestRules.js'
import { getStylisticRules } from './getStylisticRules.js'
import { getTypescriptDisabledRules } from './getTypescriptDisabledRules.js'
import { getTypescriptRules } from './getTypescriptRules.js'
import { getVueRules } from './getVueRules.js'

const check = async () => {
  const ruleGetters = {
    base: getBaseRules,
    import: getImportRules,
    jest: getJestRules,
    stylistic: getStylisticRules,
    typescriptDisabled: getTypescriptDisabledRules,
    typescript: getTypescriptRules,
    vue: getVueRules,
  }

  for (const [ruleset, getRules] of Object.entries(ruleGetters)) {
    process.stdout.write(`Checking ${ruleset} rules:`)

    let ok = true

    const rules = await getRules()

    const projectRules = Object.keys(
      (await import(`../../src/rules/${ruleset}.js`)).default,
    )

    rules.forEach((rule) => {
      if (!projectRules.includes(rule)) {
        process.stdout.write(`\n- missing: ${rule}`)
        ok = false
      }
    })

    projectRules.forEach((projectRule, index) => {
      if (!rules.includes(projectRule)) {
        process.stdout.write(`\n- extraneous: ${projectRule}`)
        ok = false
      }
      if (index > 0 && projectRule < projectRules[index - 1]) {
        process.stdout.write(`\n- unordered: ${projectRules[index - 1]}`)
        ok = false
      }
    })

    process.stdout.write(ok ? ' OK\n' : '\n')
  }
}

check()
