





{ // 模块化
  // 模块全局导入的方式：
  //   1.  import * as test from './test.js'
  //   // 任何模块都是可以使用import * 导入所有模块的，但是格式必须是这样。
  //   2. imprort test from './test.js'
  //   这种导入全局是有条件的，被导入模块必须是
  //   export default 这个导出部分，且，该部分导出的是该模块中的所有应该被导出的部分，该部分应该形成对象。这种导出的方式是非常好的，主要表现在，1. 可以自由灵活的添加要导出的内容，2. 防止其他模块采用第1种方式，任意的导入该模块的内容，实质上是形成了一个导出部分的开关。
  // 模块部分导入的方式：
  //   1. import {a,b} from './test.js'
  //   对象方式解构导出，
  //   2. 模块导出默认部分：从该默认部分取出其他部分。
  // 模块导出默认部分：
  //   import a from './test.js'
  {// 尝试能否使用require方法引用模块化。
    // 尝试看看他能否在代码中临时引用模块。
  }
  // 注意，类也是可以导出的。  
}

{ // Decorator
  // 运行条件：可能chrome不能运行，需要安装一个插件，
  // cnpm install babel-plugin-transform-decorators-legacy --save-dev
  // .babelrc 文件需要修改，
  // {
  //   "presets":["es2015"],
  //   "plugin":["babel-plugin-transform-decorators-legacy"]
  // }
  // 它是一个函数
  // 他是一个修改行为。他是修饰器，扩展类的功能。
  // 他是一个修改类的行为

  // 有一个非常好用的第三方修饰器库，core-decorators ,
  // npm install  core-decorators
  {
    // let readOnly = function (target, name, discriptor) {
    //   descriptor.writable = false
    //   return discriptor
    // }
    // class Test {
    //   @readOnly
    //   time() {
    //     return '2020年2月10日'
    //   }
    // }
    // let test = new Test()
    // console.log(test.time)
    // test.time = function () {
    //   console.log('reset time')
    // }
    // console.log(test.time)
  }
  {
    // let typeName = function () {
    //   target.myName = 'hello'
    // }
    // @typeName
    // class Test {

    // }
    // console.log('类修饰符', Test.myName)
  }

  {
    // let log = (type) => {
    //   return function (target, name, descriptor) {
    //     let src_method = descriptor.value
    //     descriptor.value = (...arg) => {
    //       src_method.apply(target, arg)
    //       console.info(`log ${type}`)
    //     }
    //   }
    // }

    // class AD {
    //   @log('show')
    //   show() {
    //     console.info('ad is show')
    //   }

    //   @log('click')
    //   click() {
    //     console.ionfo('ad is click')
    //   }
    // }

    // let ad = new AD()
    // ad.show()
    // ad.click()
  }

}

{ // iterator 接口
  {
    // let arr = ['hello', 'world'];
    // console.log(arr)
    // let map = arr[Symbol.iterator]();
    // console.log(map.next());
    // console.log(map.next());
    // console.log(map.next());
  }

  {
    // let obj = {
    //   start: [1, 3, 2],
    //   end: [7, 9, 8],
    //   [Symbol.iterator]() {
    //     let self = this;
    //     let index = 0;
    //     let arr = self.start.concat(self.end);
    //     let len = arr.length;
    //     return {
    //       next() {
    //         if (index < len) {
    //           return {
    //             value: arr[index++],
    //             done: false
    //           }
    //         } else {
    //           return {
    //             value: arr[index++],
    //             done: true
    //           }
    //         }
    //       }
    //     }
    //   }
    // }
    // for (let key of obj) {
    //   console.log(key);
    // }
  }

  {
    // let arr = ['hello', 'world'];
    // for (let value of arr) {
    //   console.log('value', value);
    // }
  }
}