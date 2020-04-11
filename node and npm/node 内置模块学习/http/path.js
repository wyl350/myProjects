// path 模块
const extname = () => {
  const path = require('path')
  console.log(path.extname('c:/a/b/c/d/hello.txt'))// .txt
}