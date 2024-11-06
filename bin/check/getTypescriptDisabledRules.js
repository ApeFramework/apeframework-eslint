'use strict'

const cheerio = require('cheerio')

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

module.exports = {
  getTypescriptDisabledRules,
}
