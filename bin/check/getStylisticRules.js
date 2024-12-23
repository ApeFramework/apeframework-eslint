import { fromURL } from 'cheerio'

const getStylisticRules = async () => {
  const rules = []

  const $ = await fromURL(
    'https://eslint.style/packages/default',
  )

  $('div.vp-doc tr a')
    .each((index, element) => {
      rules.push(`@stylistic/${$(element).text()}`)
    })

  return rules.sort()
}

export {
  getStylisticRules,
}
