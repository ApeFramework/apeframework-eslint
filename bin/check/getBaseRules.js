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

module.exports = {
  getBaseRules,
}
