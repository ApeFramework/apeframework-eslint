/*
 * Usage: node bin/package <version>
 *
 *   Package source:
 *     node bin/package 0.0.0-dev.0
 */

'use strict'

const fs = require('fs-extra')

const [version] = process.argv.slice(2)

if (!version) {
  throw new Error('missing argument <version>')
}

const devPkg = fs.readJsonSync('package.json')

const pkg = {
  name: '@apeframework/eslint',
  version,
  license: 'MIT',
  author: 'Matthieu Symoens',
  description: 'Ape Framework ESLint configuration',
  keywords: ['ape', 'framework', 'eslint'],
  repository: {
    type: 'git',
    url: 'git+https://github.com/ApeFramework/apeframework-eslint.git',
  },
  publishConfig: {
    access: 'public',
  },
  main: 'index.js',
  dependencies: devPkg.dependencies,
  peerDependencies: devPkg.peerDependencies,
  peerDependenciesMeta: devPkg.peerDependenciesMeta,
}

fs.ensureDirSync('dist')

fs.writeJsonSync('dist/package.json', pkg, { spaces: 2 })

fs.copySync('LICENSE', 'dist/LICENSE')

fs.copySync('README.md', 'dist/README.md')

fs.copySync('src', 'dist')
