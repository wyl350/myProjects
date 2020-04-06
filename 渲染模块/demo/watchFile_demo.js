var fs = require('fs');
var path = require('path');
var file = path.join(__dirname, 'README2.md');
//监视文件
//1.当第一次创建监视器的时候，如果文件不存在，监视器毁掉函数会触发一次
fs.watchFile(file, {
  persistent: true, //是否持续监听
  interval: 2,
}, function (curr, prev) {
  if (Date.parse(prev.ctime) === 0 && Date.parse(curr.ctime) !== 0) {
    console.log('文件被创建');
  }
  else if (Date.parse(prev.ctime) !== 0 && Date.parse(curr.ctime) === 0) {
    console.log('文件被删除');
  }
  else if (Date.parse(prev.mtime)!==0 && Date.parse(curr.mtime) != Date.parse(prev.mtime)) {
    console.log('文件有修改');
  }
});

