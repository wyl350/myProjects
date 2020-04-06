
{ // 内置对象
  // // 用来操作路径的
  // var path = require('path')

  // // 获取当前机器的 CPU 信息
  // console.log(os.cpus())

  // // memory 内存
  // console.log(os.totalmem())

  // // 获取一个路径中的扩展名部分
  // // extname extension name
  // console.log(path.extname('c:/a/b/c/d/hello.txt'))
}


{ // 读取文件
  var fs = require('fs')
  fs.readFile('./data/a.txt', function (error, data) {
    if (error) {
      console.log('读取文件失败了')
    } else {
      console.log(data.toString())
    }
  })
}


{// 写入文件
  var fs = require('fs')
  fs.writeFile('./data/a.txt', '大家好，给大家介绍一下，我是Node.js', function (error) {
    if (error) {
      console.log('写入失败')
    } else {
      console.log('写入成功了')
    }
  })
}

{  // js 语法必须使用"；"号的三种情况。
  // // 当你采用了无分号的代码风格的时候，只需要注意以下情况就不会有上面的问题了：
  // //    当一行代码是以：
  // //        (
  // //        [
  // //        `
  // //        开头的时候，则在前面补上一个分号用以避免一些语法解析错误。
  // //    所以你会发现在一些第三方的代码中能看到一上来就以一个 ; 开头。
  // //  结论：
  // //    无论你的代码是否有分号，都建议如果一行代码是以 (、[、` 开头的，则最好都在其前面补上一个分号。
  // //    有些人也喜欢玩儿一些花哨的东西，例如可以使用 ! ~ 等。
  
  // function say() {
  //   console.log('hello world')
  // }
  
  // // TypeError: say(...) is not a function
  // say()
  
  // ;(function () {
  //   console.log('hello')
  // })()
  
  // ;['苹果', '香蕉'].forEach(function (item) {
  //   console.log(item)
  // })
  
  // // ` 是 EcmaScript 6 中新增的一种字符串包裹方式，叫做：模板字符串
  // // 它支持换行和非常方便拼接变量
  // var foo = `
  // 大家好
  // hello                            床前明月光
  // world
  // 哈哈哈`
  // console.log(foo)
  
  // ;`hello`.toString()
  
}

{
  // console.log(__dirname)
  // console.log('resolve   : ' + resolve('./'))
  // console.log('cwd       : ' + process.cwd())
}