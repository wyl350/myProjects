// //另外一种情况是用var 关键字在函数中声明变量，这时候的变量即是局部变量，只有在该函数内部才能访问到这个变量，在函数外面是访问不到的。代码如下：
// var func = function () {
//   var a = 1;
//   alert(a)   // 输出: 1
// }
// func()
// alert(a)   // 输出：Uncaught ReferenceError: a is not defined

// 一、变量的作用域
// //下面这段包含了嵌套函数的代码，也许能帮助我们加深对变量搜索过程的理解：
// var a = 1;
// var func1 = function () {
//   var b = 2;
//   var func2 = function () {
//     var c = 3;
//     alert(b); // 输出：2
//     alert(a); // 输出：1
//   }
//   func2();
//   alert(c); // 输出：Uncaught ReferenceError: c is not defined
// };
// func1();



// // 二、变量的生命周期
// var func = function () {
//   var a = 1
//   return function () {
//     a++
//     alert(a)
//   }
// }
// var f = func()
// // 这里的这个闭包产生的原因是：f 对 return function () {  a++  alert(a)} 这个函数有引用，而这个函数对变量a有引用，所以形成闭包。
// f()
// f()
// f()
// f()



