'use strict'

const cheerio = require('cheerio')

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

module.exports = {
  getTypescriptRules,
}