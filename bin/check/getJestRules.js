import { fromURL } from 'cheerio'

const getJestRules = async () => {
  const rules = []

  const $ = await fromURL(
    'https://www.npmjs.com/package/eslint-plugin-jest',
  )

  $('div#readme tbody td:first-child')
    .each((index, element) => {
      rules.push(`jest/${$(element).text()}`)
    })

  return rules.sort()
}

export {
  getJestRules,
}
