'use strict'

const cheerio = require('cheerio')

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

module.exports = {
  getStylisticRules,
}
