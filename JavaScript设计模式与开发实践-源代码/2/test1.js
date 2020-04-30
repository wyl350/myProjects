// //当函数作为对象的方法被调用时，this 指向该对象：

// 一、作为对象的方法调用
// var obj = {
//   a: 1,
//   getA: function () {
//     alert(this === obj); // 输出：true
//     alert(this.a); // 输出: 1
//   }
// };

// obj.getA();

// 二、作为普通函数调用
// //在浏览器的JavaScript 里，这个全局对象是window 对象。
// window.name = 'globalName';

// var getName = function () {
//   return this.name;
// };
// console.log(getName()); // 输出：globalName

// //或者：
// window.name = 'globalName';

// var myObject = {
//   name: 'sven',
//   getName: function () {
//     return this.name;
//   }
// };

// var getName = myObject.getName;
// console.log(getName()); // globalName
// // console.log(myObject.getName()); // sven


// // es5 下这种严格模式，是不能按照全局变量输出的。
// function func(){
//   "use strict"
//   alert ( this ); // 输出：undefined
// }

// func();




// 三、作为构造函数调用


// //构造器里的this 就指向返回的这个对象，见如下代码：
// var MyClass = function(){
//   this.name = 'sven';
// };

// var obj = new MyClass();
// alert ( obj.name ); // 输出：sven

// // 显式的返回一个特定的函数，当然是返回这个函数。
// var MyClass = function () {
//   this.name = 'sven';
//   return { // 显式地返回一个对象
//     name: 'anne'
//   }
// };

// var obj = new MyClass();
// alert(obj.name); // 输出：anne


// // 如果不是显式的返回一个对象或者没有返回，即使是返回的是一个原始类型，最终返回的仍然是this对象。
// var MyClass = function(){
//   this.name = 'sven'
//   return 'anne'; // 返回string 类型
// };

// var obj = new MyClass();
// alert ( obj.name ); // 输出：sven

// 四、Function.prototype.call 和 function.prototype.apply 的调用
// 非常了不起的方法，能够动态的改变传入函数的 this 对象。典型的体现出js动态语言的特性。
var obj1 = {
  name: 'sven',
  getName: function(){
    return this.name;
  }
};

var obj2 = {
  name: 'anne'
};

console.log( obj1.getName() ); // 输出: sven
console.log( obj1.getName.call( obj2 ) ); // 输出：anne

