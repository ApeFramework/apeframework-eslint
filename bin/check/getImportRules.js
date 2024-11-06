'use strict'

const cheerio = require('cheerio')

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

module.exports = {
  getImportRules,
}
