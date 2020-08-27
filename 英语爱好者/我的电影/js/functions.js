const fs = require('fs')
const path = require('path')
const { curry, compose } = require('.././modules/ramda')

const filePath = curry((fileName) => { return path.join(__dirname, fileName) })// 获得绝对路径
const readFileSync = curry((filePath) => { return fs.readFileSync(filePath, 'utf-8') })// 同步读取文件内容

const writeFileSync = curry((filePath, data) => {
  fs.writeFileSync(filePath, data)
})

// 同步读取文件
const readFile = compose(
  readFileSync,
  filePath,
)

module.exports = {
  readFile,
  writeFileSync,
}
