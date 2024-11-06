'use strict'

const cheerio = require('cheerio')

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

module.exports = {
  getJestRules,
}
