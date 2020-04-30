
//或者：
// var Singleton = function (name) {
//   this.name = name;
// };
// Singleton.prototype.getName = function () {
//   alert(this.name);
// };
// Singleton.getInstance = (function () {
//   var instance = null;
//   return function (name) {
//     if (!instance) {
//       instance = new Singleton(name);
//     }
//     return instance;
//   }
// })();

// var a = Singleton.getInstance('sven1');
// var b = Singleton.getInstance('sven2');
// console.log(a === b)

// 实现获得单例，这个单例的name值是 sven1 ，sven2的单例是无法创建的。
// 本例采用的方式是运用静态方法，但是与test1 有所不同的是，在本例中是静态方法中内置一个闭包变量，注意采用的是立即执行函数闭包的方式，这种方式的特点是，减少函数的调用次数，如果是函数闭包的话，效果应该是一样的，但是需要调用两次，Singleton.getInstance('sven1')方法只能得到一个函数，还需要继续执行，才能对返回的函数进行调用。但是这个例子中的闭包发生作用的条件。 注意这里的对象，
// 注意：自执行函数，本身他的闭包变量就是单例，这是天生的特性，这个自执行函数内部的变量自从写好代码，无需被调用，它内部的变量就已经开始执行，并占据了内存。切实无法撤销的，因此它是一开始就有内存开销的。
// 例如：

var Singleton = function (name) {
  this.name = name;
};
Singleton.prototype.getName = function () {
  alert(this.name);
};
Singleton.getInstance = function () {
  var instance = null;
  return function (name) {
    if (!instance) {
      instance = new Singleton(name);
    }
    return instance;
  }
}
// 第一种情况：
// var a = Singleton.getInstance()('sven1');
// var b = Singleton.getInstance()('sven2');
// console.log(a === b) // false
// console.log(a)
// console.log(b)


// 第二种情况：
const singleton = Singleton.getInstance()
var a = singleton('sven1');
var b = singleton('sven2');
console.log(a === b) // false
console.log(a)
console.log(b)



// 总结上面的第一种情况和第二种情况：
// 第一种情况对于外层的闭包，是不能调用两次的，否则就是不是相同的外层闭包函数，那么创建的实例就是不同的实例。
// 第二种情况，使用变量，固定了外层的闭包情况，是一个相同的外层闭包函数的调用，那么创建的实例就是相同的实例。