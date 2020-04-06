var template = require('art-template')
var fs = require('fs')

fs.readFile('./tpl.html', 'utf8', function (err, data) {
  if (err) {
    return console.log('读取文件失败了')
  }
  var ret = template.render(data, {
    name: 'Jack',
    age: 18,
    province: '北京市',
    hobbies: [
      '写代码',
      '唱歌',
      '打游戏'
    ],
    title: '个人信息'
  })
  console.log(ret)
})




