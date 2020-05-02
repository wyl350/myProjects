/**
 * 单例模式的目的：程序本身需要单例以及减少内存开销。
 * 程序本身需要单例：线性池、全局缓存、浏览器中的windows对象等
 * 减少内存开销
 */

// 构造函数的单例模式：
// // 方式一：
// var Singleton = function (name) {
//   this.name = name;
//   this.instance = null;
// };
// Singleton.prototype.getName = function () {
//   console.log(this.name);
// };
// Singleton.getInstance = function (name) {
//   if (!this.instance) {
//     this.instance = new Singleton(name);
//   }
//   return this.instance;
// };
// var a = Singleton.getInstance('sven1');
// var b = Singleton.getInstance('sven2');
// // console.log(a === b); // true
// console.log(a === b)  // true
// // js 语言的单例模式：运用静态方法，用实例化对象的属性作为判断实例创建的唯一标识。

// // 方式二：
// var Singleton = function (name) {
//   this.name = name;
// };
// Singleton.prototype.getName = function () {
//   console.log(this.name);
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
// // 本方式将判断对象唯一创建的标识是：在静态方法中创建闭包变量。

// 方式三：透明的单例类。
var Singleton = (function () {
  var instance;
  var Singleton = function (name) {
    if (instance) {
      return instance;
    }
    this.name = name;
    return instance = this;
  };
  Singleton.prototype.getName = function () {
    console.log(this.name);
  };
  return Singleton;
})();
var a = new Singleton('sven1');
var b = new Singleton('sven2');
console.log(a === b); // true


