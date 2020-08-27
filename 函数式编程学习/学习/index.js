// https://juejin.im/post/5b26a8b66fb9a00e925bcf30
// 这篇文章是我见过的解释函数式编程最好的文章。
// https://juejin.im/post/5b41c159e51d4519277b6a39
// 这是第二篇

var Container = function (x) { this.__value = x; }
Container.of = x => new Container(x);

Container.prototype.map = function (f) {
  // console.log(f)  // 这段代码是 副作用代码。
  return Container.of(f(this.__value))
}

const result = Container.of(3).map(x => x + 1).map(x => 'Result is ' + x);

// console.log(Container.of(3).map(x => x + 1).map(x => 'Result is ' + x))

console.log(result)




{
  let arr = [1, 2, 3];
  arr.slice(0, 3);                                               //是纯函数
  arr.splice(0, 3);                                              //不是纯函数，对外有影响

  function add(x, y) {                                           // 是纯函数   
    return x + y                                              // 无状态，无副作用，无关时序，幂等
  }                                                            // 输入参数确定，输出结果是唯一确定

  let count = 0;                                               //不是纯函数 
  function addCount() {                                         //输出不确定
    count++                                                  // 有副作用
  }

  function random(min, max) {                                    // 不是纯函数     
    return Math.floor(Math.radom() * (max - min)) + min     // 输出不确定
  }                                                            // 但注意它没有副作用


  function setColor(el, color) {                                  //不是纯函数 
    el.style.color = color;                                 //直接操作了DOM，对外有副作用
  }

}

{
  function executor(resolve) {
    setTimeout(() => {
      resolve(100)
    }, 500)
  }


  const resolve = function (a) {
    console.log(
      100 + a
    )
  }
  executor(resolve)




  class Functor {
    constructor(executor) {
      let _this = this;
      this.value = undefined;

      function resolve(value) {
        _this.value = value;
      }
      executor(resolve)
    }
  }


  class Functor {
    constructor(executor) {
      let _this = this;
      this.value = undefined;
      this.callback = null;
      function resolve(value) {
        _this.value = value;
        _this.callback()
      }
      executor(resolve)
    }

    map(fn) {
      let self = this;
      return new Functor((resolve) => {
        self.callback = function () {
          let data = fn(self.value)
          resolve(data)
        }
      })
    }
  }
  new Functor(executor).map(add1).map(add1)



}