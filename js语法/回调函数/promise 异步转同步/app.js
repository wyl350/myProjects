const fs = require('fs')
const path = require('path')

// // 方式一：
// fs.readFile(path.join(__dirname, './1.txt'), 'utf-8', (err, dataStr) => {
//   if (err) throw err
//   console.log(dataStr)
// })

// // 方式二：
// function getFileByPath (fpath, callback) {
//   fs.readFile(fpath, 'utf-8', (err, data) => {
//     if (err) throw err
//     callback(data)
//   })
// }
// getFileByPath(path.join(__dirname, './1.txt'), (data) => {
//     console.log(data) // 111
// })

// // 方式三：
// function getFileByPath(fpath, callback) {
//   fs.readFile(fpath, 'utf-8', (err, data) => {
//     // if (err) return console.log(err.message)
//     // if (err) throw err
//     // if (err) return console.log(123456)
//     // if (err) return callback(err)
//     // 下面这句如果没有err 参数，回调函数中的err 参数就不能使用了。
//     callback(err, data)
//   })
// }
// getFileByPath(path.join(__dirname, './1.txt'), (err, data) => {
//   if (err) return console.log(err.message)
//   console.log(data)
// })

// // 方式四：
// function getFileByPath (fpath, callback) {
//   fs.readFile(fpath, 'utf-8', (err, data) => {
//     if (err) throw err
//     // console.log(data)
//     callback(null, data)
//   })
// }
// getFileByPath(path.join(__dirname, './1.txt'), (err, data) => {
//   // console.log(data) // 111
//   if (err) return console.log(err.message)
//   // 上一句根本打印不出 err 错误信息。
//   console.log(data)
// })

// // 方式五：
// function getFileByPath (fpath, succCb, errCb) {
//   fs.readFile(fpath, 'utf-8', (err, data) => {
//     if (err) errCb(err)
//     succCb(data)
//   })
// }
// getFileByPath(path.join(__dirname, './files/1.txt'), function (data) {
// 	console.log(data + '成功了')
// }, function (err) {
// 	console.log(err.message + '失败了')
// })
// // 以上这种方式就增加了两个回调函数，组合使用两个回调函数。这个方法，有利于理解函数作为参数的使用。

// // 方式六：
// function getFileByPath(fpath, callback) {
//   fs.readFile(fpath, 'utf-8', (err,data) => {
//     callback(data)
//     // 上面这句不包括，err 的错误参数，那么，回调函数将失去处理错误函数的能力。
//   })
// }
// getFileByPath(path.join(__dirname, './1.txt'), function (data) {
//   console.log(data)
//   getFileByPath(path.join(__dirname, './2.txt'), function (data) {
//     console.log(data)
//     getFileByPath(path.join(__dirname, './3.txt'), function (data) {
//       console.log(data)
//     })
//   })
// })

{  // 方式七： Promise 方法
  // reject 和 resolve 是 Promise 对象的固有自身属性，而 then 方法和 catch 方法是 Promise 对象原型上面的方法。
  // function getFileByPath(fpath) {
  //   return new Promise(function (resolve, reject) {
  //     fs.readFile(fpath, 'utf-8', (err, data) => {
  //       if (err) return reject(err)
  //       resolve(data)
  //     })
  //   })
  // }
  // // 1. 以上实例化的 Promise对象 放入了一个 函数参数。这个函数就是一个打包函数，打包函数内部出现的两个回调变量就是以后使用 promise then 方法中的两个函数参数。
  // // 2. 以上封装 Promise对象 和 上面的方式 方式五 本质上是一样的。
  // getFileByPath('./1.txt')
  //   // 第一层 then
  //   .then(function (data) {
  //     console.log('第一层' + data)
  //     // 读取文件2
  //     return getFileByPath('./22.txt')
  //   },
  //     // function (err) {
  //     //   console.log('这是失败的结果：' + err.message)
  //     //   return getFileByPath('./2.txt')
  //     // }
  //   )
  //   // 第二层 then
  //   .then(function (data) {
  //     console.log(data)
  //     return getFileByPath('./33.txt')
  //   },
  //     function (err) {
  //       console.log('这是失败的结果2：' + err.message)
  //       return getFileByPath('./33.txt')
  //     }
  //   )
  //   // 第三层 then
  //   .then(function (data) {
  //     console.log('第三层' + data)
  //   },
  //     function (err) {
  //       console.log('这是失败的结果3：' + err.message)
  //       // return getFileByPath('./2.txt')
  //     }
  //   )

  // // .then(function (data) {
  // //   console.log(data)
  // // })

  // // 上面代码总结:
  // // 1. 注意 这是管道式的走法,return Promise 这句决定下面then方法中的回调，下面then方法中的两个回调参数就具备了，这是由于封装的 function getFileByPath(fpath) {  }，这个函数决定的。
  // // 2. 注意管道分支，一旦进入，某个分支管道（例子中有两个管道，一个是resolve，一个是reject。），这个管道往下如何走就由这个管道决定。所以，因此无论哪一层都应该在这两个管道最后 return promise。防止管道中断。
  // // 3. 封装的 function getFileByPath(fpath) {  } 方法，决定了then 方法有几个参数，因此是可以封装三个then方法参数的。只是一般情况下应当封装两个参数。
  // // 4. promise 对象then方法的特点是，既有连贯性，又有中断性。

  // // 应用中有两种情形：
  // // 1. 哪怕前面的 Promise 执行失败了，但是，不要影响后续 promise 的正常执行，此时，我们可以单独为 每个 promise，通过 .then 指定一下失败的回调；
  // // 例如：在第二层的then 方法的第二个回调函数，应当继续返回一个 promise对象。
  // // 2. 我们有这样的需求，个上面的需求刚好相反：如果 后续的Promise 执行，依赖于 前面 Promise 执行的结果，如果前面的失败了，则后面的就没有继续执行下去的意义了，此时，我们想要实现，一旦有报错，则立即终止所有 Promise的执行。例如方式八
}

{//  // 方式八：一般编程都采用方式八
  // function getFileByPath(fpath) {
  //   return new Promise(function (resolve, reject) {
  //     fs.readFile(fpath, 'utf-8', (err, data) => {
  //       if (err) return reject(err)
  //       resolve(data)
  //     })
  //   })
  // }

  // getFileByPath('./1.txt')
  //   .then(function (data) {
  //     console.log(data)
  //     return getFileByPath('./2.txt')
  //   })
  //   .then(function (data) {
  //     console.log(data)
  //     return getFileByPath('./3.txt')
  //   })
  //   .then(function (data) {
  //     console.log(data)
  //   })
  //   .catch(function (err) {
  //     // catch 的作用： 如果前面有任何的 Promise 执行失败，则立即终止所有 promise 的执行，并 马上进入 catch 去处理 Promise中 抛出的异常；
  //     console.log('这是自己的处理方式：' + err.message)
  //   })
}


{ // 第一阶段
  // // 1. 先上传统文件加载方式代码，传统方式在处理多层嵌套时代码比较混乱
  // function readFile(cb) {
  //   fs.readFile('./1.txt', (err, data) => {
  //     if (err) return console.log(err)
  //     cb(err, data)
  //   })
  // }
  // //回调函数
  // readFile((err, data) => {
  //   if (!err) {
  //     data = JSON.parse(data)
  //     console.log(data)
  //   }
  // })
  // // 回调函数一般操作数据，因此，错误err处理，尽可能的放在主代码中，回调函数不做错误处理。
}

{ // 第二阶段
  // // 2. 第二阶段 promsie 新建一个promise对象读取文件成功是返回 resolve（data） 失败是返回 rejext， promise.then里可以得到返回结果
  // function readfileAsync(path) {
  //   return new Promise((resolve, reject) => {
  //     fs.readFile(path, 'utf-8', (err, data) => {
  //       if (err) {
  //         reject(err)
  //       } else {
  //         resolve(data)
  //       }
  //     })
  //   })
  // }

  // readfileAsync('./1.txt').then(data => {
  //   console.log(data)
  // })
  //   .catch(err => {
  //     console.log(err);
  //   })

}

{ // 第三阶段
  // // co + generator function

  // // Generator （*）函数是一个普通函数，但是有两个特征。一是，function关键字与函数名之间有一个星号；二是，函数体内部使用yield表达式，定义不同的内部状态，每次调用

  // // 解释generator函数执行的简单方法

  // function* helloWorldGenerator() {
  //   yield 'hello';
  //   yield 'world';
  //   return 'ending';
  // }
  // var hw = helloWorldGenerator();
  // console.log(
  //   hw.next(),
  //   // { value: 'hello', done: false }
  //   hw.next(),
  //   // { value: 'world', done: false }
  //   hw.next(),
  //   // { value: 'ending', done: true }
  //   hw.next(),
  //   // { value: undefined, done: true }
  // )
}

{ // co.js 第三方模块的使用。
  // // 1. co.js 保证 * 函数中的 yield 方法轮循执行，每次执行均返回的是promise对象， co.js 是第三方模块。
  // // 2. 这里同时使用 node中的util方法中的promisify 代替传统的promise，nodejs8.0以上
  // // async 加载方式 nodejs7.6以上版本 用async await 把异步加载方式同步的写法实现，实际上是对 promsie的封装

  // const util = require('util')

  // const co = require('co')

  // co(function* () {
  //   let data = yield util.promisify(fs.readFile)('./1.txt', 'utf8')
  //   //使用node util 中的 promisify 实例化 fs.readFile 方法同时直接返回结果
  //   console.log(data)
  //   console.log(util.promisify(fs.readFile)('./1.txt', 'utf8'))
  // })
}

{ // 异步转同步
  // // 1. 使用内置的 util 工具模块中的 promisify 方法，将异步函数转为异步函数的promise对象的封装器，
  // // 2. 调用该封装器，实例化异步函数的非函数参数，就可得到具体事例的 Promise 对象， 
  // // 3. 在该promise对象的前面加入 await 即可，得到异步返回的数据，并且该数据已经是转出的同步数据。
  // // 4. 当然在第三部的过程中，效率是低的，因为已经转成了同步了。
  // const util = require('util')
  // const readAsync = util.promisify(fs.readFile)

  // async function init() {
  //   let data = await readAsync('./1.txt', 'utf8')
  //   console.log(data)
  // }
  // // 以上是一个同步函数，非常的强大。
  // init()
}

