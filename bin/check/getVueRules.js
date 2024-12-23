import { fromURL } from 'cheerio'

const getVueRules = async () => {
  const rules = []

  const $ = await fromURL(
    'https://eslint.vuejs.org/rules',
  )

  $('main.main table')
    .filter((index) => {
      return index < 5
    })
    .find('td:first-child')
    .each((index, element) => {
      rules.push($(element).text())
    })

  return rules.sort()
}

export {
  getVueRules,
}
