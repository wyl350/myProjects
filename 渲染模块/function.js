const
  { readFileSync, writeFileSync } = require('fs'),
  { render } = require('art-template'),
  { currys } = require('./js/myRamda.js')

let
  readFile = (inputPath) => {
    let content
    try {
      content = readFileSync(inputPath, 'utf8')
    } catch (err) {
      console.log({
        massage: 'read file is not completed.',
        err: err
      });
    }
    return content
  },

  renderFile = (repalceJson, content) => {
    let contentRendered
    contentRendered = render(
      content,
      repalceJson,
    )
    return contentRendered
  },

  writeFile = (outputPath, contentRendered) => {
    try {
      writeFileSync(outputPath, contentRendered, 'utf8')
    } catch (err) {
      console.log({
        massage: 'cannot find the output file.',
        err: err
      });
    }
  }


[
  readFile,
  renderFile,
  writeFile,
] = currys(readFile, renderFile, writeFile)

module.exports = {
  readFile,
  renderFile,
  writeFile,
}
