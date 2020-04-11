// fs模块
const readFile = (filePath) => {
  const fs = require('fs')
  const path = require('path')
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname + filePath), 'utf8', function (err, data) {
      if (err) { reject(err) } else { resolve(data) }
    })
  })
}

const writeFile = (filePath, writeData) => {
  const fs = require('fs')
  const path = require('path')
  return new Promise((resolve, reject) => {
    fs.writeFile(path.join(__dirname + filePath), writeData, function (err) {
      if (err) { reject(err) } else { resolve() }
    })
  })
}