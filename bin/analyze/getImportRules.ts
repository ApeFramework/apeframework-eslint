import { fromURL } from 'cheerio'

const getImportRules = async (): Promise<string[]> => {
  const rules: string[] = []

  const $ = await fromURL(
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

export {
  getImportRules,
}
