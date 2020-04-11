// 模板引擎的使用
const render = (filePath, obj) => {
  const template = require('art-template')
  const fs = require('fs')
  fs.readFile(filePath, function (err, data) {
    if (err) {
      return console.log('读取文件失败了')
    }
    const ret = template.render(data.toString(), obj)
    console.log(ret)
  })
}

