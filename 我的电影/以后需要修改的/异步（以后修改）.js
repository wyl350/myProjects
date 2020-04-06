const fs = require('fs')

async function readFile(filepath, encoding = 'utf-8') {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, encoding, function (err, data) {
      if (err) { reject(err) } else { resolve(data) }
    });
  })
}
async function writeFile(filepath, writedata) {
  return new Promise((reject) => {
    fs.writeFile(filepath, writedata, function (err) {
      if (err) { reject(err) } else { console.log('写入成功！') }
    })
  })
}
// str.match(/\b\w+\b/g)  提取单词。
const handleData = (data) => {
  const reg_空白行 = /^(\n\r)+$/igm //windows 系统
  const reg_数字行 = /^\d+$/igm
  const reg_时间行 = /^\d{2,3}:\d{2,3}:\d{2,3},\d{2,3} --> \d{2,3}:\d{2,3}:\d{2,3},\d{2,3}$/igm
  data = data.replace(reg_数字行, '')
  data = data.replace(reg_时间行, '')
  data = data.replace(reg_空白行, '')
  return data
}



const readAndWrite = (inputFilePath, outputFilePath, handleData) => {
  return new Promise(function (resolve, reject) {
    readFile(inputFilePath)
      .then(function (data) {
        data = handleData(data)
        writeFile(outputFilePath, data).then(function () {
          resolve()
        }).catch(function () {

        })
      }).catch(function (err) {
        reject(err)
      })
  })
}

readAndWrite('./English.srt', './English2.md', handleData)



