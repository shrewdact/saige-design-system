const Fs = require('fs')
const Path = require('path')

const Sass = require('node-sass')

const result = Sass.renderSync({
  data: Fs.readFileSync(
    Path.resolve('src/global.scss')
  ).toString(),
  outputStyle: 'expanded',
  outFile: 'global.css',
  includePaths: [Path.resolve('src')]
})

console.log(result.css.toString())

const dir = 'src/lib'

if (!Fs.existsSync(dir)) {
  Fs.mkdirSync(dir, { recursive: true })
}

Fs.writeFileSync(
  Path.resolve(dir + '/global.css'),
  result.css.toString()
)