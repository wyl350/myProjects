{ // Promise
  // A过程执行完后，在执行B过程，这个应该怎么设计那？回调函数和事件可以完成，这里研究一下回调函数，
  // 回调函数涉及主方法和回调方法。回调方法作为主方法的参数，回调方法先执行，并且影响主方法的执行。即 主方法的执行过程是一句回调方法的返回值或者过程的。举例如下：
  {
    // ((callBack) => {
    //   if (callBack()) {
    //     console.log('成功')
    //   } else {
    //     console.log('失败')
    //   }
    // })(() => {
    //   return true
    // })
  }

  {
    // 基本定义
    // let ajax = function (callback) {
    //   console.log('执行');
    //   setTimeout(function () {
    //     callback && callback.call()
    //   }, 1000);
    //   console.log('执行完毕');
    // };
    // ajax(function () {
    //   console.log('timeout1');
    // })
  }

  {
    // let ajax = function (callback) {
    //   console.log('执行');
    //   setTimeout(function () {
    //     if (callback && callback.call()) {
    //       console.log(1)
    //     }
    //   }, 1000);
    //   console.log('执行完毕');
    // };
    // ajax(function () {
    //   console.log('timeout1');
    //   return true
    // })
  }

  {
    // let ajax = function (callback) {
    //   console.log('执行');
    //   if (callback && callback.call()) {
    //     console.log(1)
    //   }
    //   console.log('执行完毕');
    // };
    // ajax(function () {
    //   console.log('timeout1');
    //   return true
    // })
    // // 这个例子可以看出回调函数中如果有返回值，那么回调函数的代码就会先执行。
  }

  {
    // let ajax = function () {
    //   console.log('执行2');
    //   return new Promise(function (resolve, reject) {
    //     setTimeout(function () {
    //       resolve()
    //     }, 1000);
    //   })
    // };

    // ajax().then(function () {
    //   console.log('promise', 'timeout2');
    // })
    // // 特别注意这里的回调函数，就是 Promise 对象的第一个参数，当然还可以写第二参数。
  }
  {
    // let ajax = function () {
    //   console.log('执行2');
    //   return new Promise(function (resolve, reject) {
    //     setTimeout(function () {
    //       resolve()
    //     }, 1000);
    //     reject()

    //   })
    // };
    // // ajax()返回一个Promise实例，因此，他是可以下一步then的，但是之后就不能下一步了，除非他也返回一个promise实例。注意，resolve()  reject() 二者只能执行其中的一个。
    // ajax().then(function () {
    //   console.log('promise', 'timeout2');
    // }, function () {
    //   console.log('promise', 'timeout3');
    // }).then(function () {
    //   console.log(111111)
    // }).then(function () {
    //   console.log(222222)
    // })
  }

  {
    // let ajax = function () {
    //   console.log('执行2');
    //   return new Promise(function (resolve, reject) {
    //     reject()
    //     resolve()
    //   })
    // };
    // ajax()
    //   .then(function () {
    //     console.log(1);
    //   }, function () {
    //     console.log(1.5);
    //   })
    //   .then(function () {
    //     console.log(2)
    //   }, function () {
    //     console.log(2.5)
    //   })
    //   .then(function () {
    //     console.log(3)
    //   }, function () {
    //     console.log(3.5)
    //   })
    // // 执行结果:
    // // 高级用法.js: 221 执行2
    // // 高级用法.js: 228 1
    // // 高级用法.js: 233 2
    // // 高级用法.js: 238 3
    // // 只有第一层返回了一个promise对象。
  }
  {
    // let ajax = function () {
    //   console.log('执行3');
    //   return new Promise(function (resolve, reject) {
    //     setTimeout(function () {
    //       console.log(1)
    //       resolve()
    //       console.log(1.5)
    //     }, 1000);
    //   })
    // };

    // ajax()
    //   .then(function () {
    //     return new Promise(function (resolve, reject) {
    //       setTimeout(function () {
    //         console.log(2)
    //         resolve()
    //         console.log(2.5)
    //       }, 2000);
    //     });
    //   })
    //   .then(function () {
    //     console.log(3)
    //     console.log('timeout3');
    //     console.log(3.5)
    //   })
    // // 执行结果：
    // // 立即呈现
    // // 执行3  立即呈现
    // // 一秒钟后：
    // // 1
    // // 1.5
    // // 二秒钟后
    // // 2
    // // 2.5
    // // 3
    // // timeout3
    // // 3.5
  }

  {
    // let ajax = function (num) {
    //   console.log('执行4');
    //   return new Promise(function (resolve, reject) {
    //     if (num > 5) {
    //       resolve()
    //     } else {
    //       throw new Error('出错了')
    //     }
    //   })
    // }

    // ajax(6).then(function () {
    //   console.log('log', 6);
    // }).catch(function (err) {
    //   console.log('catch', err);
    // });

    // ajax(3).then(function () {
    //   console.log('log', 3);
    // }).catch(function (err) {
    //   console.log('catch', err);
    // });
  }
  {
    // let ajax = function (num) {
    //   console.log('执行4');
    //   return new Promise(function (resolve, reject) {
    //     if (num > 5) {
    //       resolve()
    //     } else {
    //       throw new Error('出错了000')
    //     }
    //   })
    // }

    // ajax(3).then(function () {
    //   console.log('log', 3);
    // }).then(function () {
    //   console.log('log', 3);
    // }).then(function () {
    //   console.log('log', 3);
    // }).catch(function (err) {
    //   console.log('catch', err);
    // });
    // // 可见捕获错误，是全程捕获。
  }
  {
    // let ajax = function (num) {
    //   console.log('执行4');
    //   return new Promise(function (resolve, reject) {
    //     if (num > 5) {
    //       resolve()
    //     } else {
    //       throw new Error('出错了')
    //     }
    //   })
    // }

    // ajax(6).then(function (num) {
    //   if (num > 10) {
    //     resolve()
    //   } else {
    //     throw new Error('2出错了12222')
    //   }
    //   console.log('log', 3);
    //   // 注意这里我增加的这个判断的，这个步骤显然是 ajax(6) 这个过程的回调，所以 6 是会被赋值在这里的这个num上面进行验证的，显然不符合要求，所以出错。
    // }).then(function () {
    //   console.log('log', 3);
    // }).then(function () {
    //   console.log('log', 3);
    // }).catch(function (err) {
    //   console.log('catch', err);
    // });
    // // 可见捕获错误，是全程捕获。
    // // 执行4
    // //  catch Error: 2出错了

  }

  {
    // let ajax = function (num) {
    //   console.log('执行4');
    //   return new Promise(function (resolve, reject) {
    //     let num1 = 9
    //     if (num > 5) {
    //       resolve(num1)
    //     } else {
    //       throw new Error('1出错了')
    //     }
    //   })
    // }
    // // 注意这里的num1 的传值情况。
    // ajax(6).then(function (num) {
    //   console.log(num)
    //   if (num > 10) {
    //     console.log('right')
    //   } else {
    //     throw new Error('2出错了')
    //   }
    //   console.log('log', 3);
    //   // 注意这里我增加的这个判断的，这个步骤显然是 ajax(6) 这个过程的回调，所以 6 是会被赋值在这里的这个num上面进行验证的，显然不符合要求，所以出错。
    // }).then(function () {
    //   console.log('log', 3);
    // }).then(function () {
    //   console.log('log', 3);
    // }).catch((e)=>{
    //   console.log(e);
    // })  // 这里不铺货错误，错误信息就不是catch Error，而是  Uncaught (in promise) Error: 2出错了
    // // 显然使用箭头函数也是没有错的。
  }

  {
    // // 所有图片加载完再添加到页面
    // function loadImg(src) {
    //   return new Promise((resolve, reject) => {
    //     let img = document.createElement('img');
    //     img.src = src;
    //     img.onload = function () {
    //       resolve(img);
    //     }
    //     img.onerror = function (err) {
    //       reject(err);
    //     }
    //   })
    // }

    // function showImgs(imgs) {
    //   imgs.forEach(function (img) {
    //     document.body.appendChild(img);
    //   })
    // }

    // Promise.all([
    //   loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'),
    //   loadImg('http://i4.buimg.com/567751/2b07ee25b08930ba.png'),
    //   loadImg('http://i2.muimg.com/567751/5eb8190d6b2a1c9c.png')
    // ]).then(showImgs)
    // // 注意all方法的后面的数组参数显然是和showImg方法的参数是相同的。回调函数showImgs 内部操作的参数就是all后面的参数。
    // // all 返回的是一个 promise 实例，所有的三个promise实例都回掉了 resolve 函数，才会 触发 showImgs 函数
  }

  {
    // 有一个图片加载完就添加到页面
    function loadImg(src) {
      return new Promise((resolve, reject) => {
        let img = document.createElement('img');
        img.src = src;
        img.onload = function () {
          resolve(img);
        }
        img.onerror = function (err) {
          reject(err);
        }
      })
    }

    function showImgs(img) {
      let p = document.createElement('p');
      p.appendChild(img);
      document.body.appendChild(p)
    }

    Promise.race([
      loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'),
      loadImg('http://i4.buimg.com/567751/2b07ee25b08930ba.png'),
      loadImg('http://i2.muimg.com/567751/5eb8190d6b2a1c9c.png')
    ]).then(showImgs)
    // 有一个能完成，就完成一个。
  }

}