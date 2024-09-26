#! /usr/bin/env node

/*
 * Usage: ./bin/check.js
 */

'use strict'

const cheerio = require('cheerio')

const getBaseRules = async () => {
  const rules = []

  const $ = await cheerio.fromURL(
    'https://eslint.org/docs/latest/rules',
  )

  $('div.docs-main__content article.rule')
    .filter((index, element) => {
      return $(element).hasClass('rule')
        && !$(element).hasClass('rule--deprecated')
        && !$(element).hasClass('rule--removed')
    })
    .find('.rule__name')
    .each((index, element) => {
      rules.push($(element).text())
    })

  return rules.sort()
}

const getImportRules = async () => {
  const rules = []

  const $ = await cheerio.fromURL(
    'https://www.npmjs.com/package/eslint-plugin-import',
  )

  $('div#readme tbody tr')
    .filter((index, element) => {
      return !$(element).text().includes('❌')
    })
    .find('td:first-child')
    .each((index, element) => {
      rules.push(`import/${$(element).text()}`)
    })

  return rules.sort()
}

const getJestRules = async () => {
  const rules = []

  const $ = await cheerio.fromURL(
    'https://www.npmjs.com/package/eslint-plugin-jest',
  )

  $('div#readme tbody td:first-child')
    .each((index, element) => {
      rules.push(`jest/${$(element).text()}`)
    })

  return rules.sort()
}

const getStylisticRules = async () => {
  const rules = []

  const $ = await cheerio.fromURL(
    'https://eslint.style/packages/default',
  )

  $('div.vp-doc tr a')
    .each((index, element) => {
      rules.push(`@stylistic/${$(element).text()}`)
    })

  return rules.sort()
}

const getTypescriptRules = async () => {
  const rules = []

  const $ = await cheerio.fromURL(
    'https://typescript-eslint.io/rules',
  )

  $('div.theme-doc-markdown tr')
    .filter((index, element) => {
      return $(element).find('td[title=deprecated]').length === 0
    })
    .find('a')
    .each((index, element) => {
      rules.push($(element).text())
    })

  return rules.sort()
}

const getTypescriptDisabledRules = async () => {
  const rules = []
  const urls = []

  const $ = await cheerio.fromURL(
    'https://typescript-eslint.io/rules',
  )

  $('div.theme-doc-markdown tr')
    .filter((index, element) => {
      return $(element).find('td[title=deprecated]').length === 0
        && $(element).find('td[title="extends base rule"]').length === 1
    })
    .find('a')
    .each((index, element) => {
      urls.push(`https://typescript-eslint.io${$(element).attr('href')}`)
    })

  for (const url of urls) {
    const $rule = await cheerio.fromURL(url)

    $rule('div.theme-doc-markdown code')
      .filter((index, element) => {
        return $rule(element).text().includes('you must disable the base rule')
      })
      .find('span.token-line')
      .filter((index, element) => {
        return $rule(element).text().includes(': "off"')
      })
      .each((index, element) => {
        rules.push($rule(element).text().split('"')[1])
      })
  }

  return rules.sort()
}

const check = async () => {
  const allRules = {
    base: await getBaseRules(),
    import: await getImportRules(),
    jest: await getJestRules(),
    stylistic: await getStylisticRules(),
    typescript: await getTypescriptRules(),
    typescriptDisabled: await getTypescriptDisabledRules(),
  }

  Object.entries(allRules).forEach(([ruleset, rules]) => {
    process.stdout.write(`Checking ${ruleset} rules...\n`)

    const projectRules = Object.keys(require(`../src/rules/${ruleset}.js`))

    projectRules.forEach((rule, index) => {
      if (index > 0 && rule < projectRules[index - 1]) {
        process.stdout.write(`- unordered: ${rule}\n`)
      }
      if (!rules.includes(rule)) {
        process.stdout.write(`- extraneous: ${rule}\n`)
      }
    })

    rules.forEach((rule) => {
      if (!projectRules.includes(rule)) {
        process.stdout.write(`- missing: ${rule}\n`)
      }
    })
  })
}

check()
