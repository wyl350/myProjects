let
  { join } = require('path'),
  { curry, currys, compose } = require('./js/myRamda'),
  ramda = require('./js/ramda'),
  {
    readFile,
    renderFile,
    writeFile,
  } = require('./function.js'),


  // fileName = (dir, inputFile, outputFile) => {
  //   let inputPath
  //   let outputPath
  //   inputFile = `${inputFile}.${dir}`
  //   outputFile = `${outputFile}.${dir}`
  //   if (inputFile === outputFile) return

  //   inputPath = join(__dirname, dir, inputFile)
  //   outputPath = join(__dirname, dir, outputFile)
  //   return {
  //     inputPath,
  //     outputPath,
  //   }
  // },

  fileName = (dir1, inputFile, dir2,outputFile) => {
    let inputPath
    let outputPath
    inputFile = `${inputFile}.${dir1}`
    outputFile = `${outputFile}.${dir2}`
    if (inputFile === outputFile) return

    inputPath = join(__dirname, dir1, inputFile)
    outputPath = join(dir2, outputFile)
    return {
      inputPath,
      outputPath,
    }
  },

  writeFromPrototype = (
    outputPath,
    repalceJson,
    inputPath,
  ) => {
    compose(writeFile(outputPath), renderFile(repalceJson), readFile)(inputPath)
  }

[fileName, writeFromPrototype] = currys(fileName, writeFromPrototype)

module.exports = {
  fileName, 
  writeFromPrototype,
}

