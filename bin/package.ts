/*
 * Usage: yarn package <version>
 *
 *   Package source:
 *     yarn package 0.0.0-dev.0
 */
import path from 'path'
import fs from 'fs-extra'

const [version] = process.argv.slice(2)

if (!version) {
  throw new Error('missing argument <version>')
}

const devPkg = fs.readJsonSync('package.json')

const pkg: any = {
  name: '@apeframework/eslint',
  version,
  publishConfig: {
    access: 'public',
  },
  license: 'MIT',
  author: 'Matthieu Symoens',
  description: 'Ape Framework ESLint configuration',
  keywords: ['ape', 'framework', 'eslint'],
  repository: {
    type: 'git',
    url: 'git+https://github.com/ApeFramework/apeframework-eslint.git',
  },
  type: devPkg.type,
  exports: {},
  engines: devPkg.engines,
  dependencies: devPkg.dependencies,
  peerDependencies: devPkg.peerDependencies,
}

const srcFileRegex = /^src\/(?<path>.*)\.ts$/u

const generateExports = (dir: string): void => {
  const files = fs.readdirSync(dir, { withFileTypes: true })
  files.forEach((file) => {
    const fullPath = path.join(dir, file.name)
    if (file.isDirectory()) {
      generateExports(fullPath)
    } else {
      const filePath = srcFileRegex.exec(fullPath)?.groups?.path
      pkg.exports[`./${filePath}`] = {
        import: {
          types: `./dist/${filePath}.d.ts`,
          default: `./dist/${filePath}.js`,
        },
      }
    }
  })
}

generateExports('src')

fs.ensureDirSync('package')
fs.writeJsonSync('package/package.json', pkg, { spaces: 2 })
fs.copySync('LICENSE', 'package/LICENSE')
fs.copySync('README.md', 'package/README.md')
