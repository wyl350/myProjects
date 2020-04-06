var
  fs = require('fs'),
  path = require('path'),
  artTemplate = require('art-template')

var myFunction = {
  render: function (obj1, obj2, ) {
    inputPath = path.join(__dirname, ...obj1.inputPath)
    outputPath = path.join(__dirname, ...obj1.outputPath)
    // 定位文件 或 新建文件
    try {
      var data = artTemplate(inputPath, obj2)
    } catch (err) {
      console.log({
        massage: 'cannot find the input file.',
        err: err
      });
      return
    }

    fs.writeFile(
      outputPath,
      data,
      'utf8',
      function (err) {
        if (err)
          console.log({
            massage: 'cannot find the output file.',
            err: err
          });
        else {
          console.log({
            massage: 'ok',
          });
        }
      })
  },

  renderMd: function (...文章标题) {
    文章标题.forEach((value) => {
      this.render({
        inputPath: ['index.md'],
        outputPath: [`./${value}.md`],
      }, {
        文章标题: value,
        本文关键词: [1, 2,],
        作者: ['wyl350'],
        日期: [new Date().toLocaleString()]
      })
    })
  }
}

// 需要增强这个函数，能够自动的创建文件夹。
myFunction.renderMd('json-server全攻略')
// D:/我的项目/myStudy/docs/计算机学习/模板引擎/md/app.js