// 高阶函数
// 

// 一、函数作为参数传递

// // 回调函数 该实例代码无法展示
// var getUserInfo = function (userId, callback) {
//   $.ajax('http://xxx.com/getUserInfo?' + userId, function (data) {
//     if (typeof callback === 'function') {
//       callback(data);
//     }
//   });
// }
// getUserInfo(13157, function (data) {
//   alert(data.userName);
// });




// //比如，我们想在页面中创建100 个div 节点，然后把这些div 节点都设置为隐藏。下面是一种编写代码的方式：
// var appendDiv = function () {
//   for (var i = 0; i < 100; i++) {
//     var div = document.createElement('div');
//     div.innerHTML = i;
//     document.body.appendChild(div);
//     div.style.display = 'none';
//   }
// };
// appendDiv();



// //于是我们把div.style.display = 'none'这行代码抽出来，用回调函数的形式传入appendDiv方法：
// var appendDiv = function (callback) {
//   for (var i = 0; i < 100; i++) {
//     var div = document.createElement('div');
//     div.innerHTML = i;
//     document.body.appendChild(div);
//     if (typeof callback === 'function') {
//       callback(div);
//     }
//   }
// };
// appendDiv(function (node) {
//   node.style.display = 'none';
// });

// // 又如：
// console.log(
//   [1, 4, 3].sort(function (a, b) {
//     return a - b;
//   }),
// );
// console.log(
//   [1, 4, 3].sort(function (a, b) {
//     return b - a;
//   }),
// );


// 二、函数作为返回值
// //所以我们可以编写一系列的isType 函数。未采用高阶函数的方式。代码如下：
// var isString = function (obj) {
//   return Object.prototype.toString.call(obj) === '[object String]';
// };
// var isArray = function (obj) {
//   return Object.prototype.toString.call(obj) === '[object Array]';
// };
// var isNumber = function (obj) {
//   return Object.prototype.toString.call(obj) === '[object Number]';
// };


// // 以下是采用高阶函数的方式
// var isType = function (type) {
//   return function (obj) {
//     return Object.prototype.toString.call(obj) === '[object ' + type + ']';
//   }
// };
// var isString = isType('String');
// var isArray = isType('Array');
// var isNumber = isType('Number');
// console.log(isArray([1, 2, 3])); // 输出：true


// //我们还可以用循环语句，来批量注册这些isType 函数：
// var Type = {};
// for (var i = 0, type; type = ['String', 'Array', 'Number'][i++];) {
//   (function (type) {
//     Type['is' + type] = function (obj) {
//       return Object.prototype.toString.call(obj) === '[object ' + type + ']';
//     }
//   })(type)
// };

// console.log(
//   Type.isArray([]), // 输出：true
//   Type.isString("str"), // 输出：true
// );

var getSingle = function (fn) {
  var ret;
  return function () {
    return ret || (ret = fn.apply(this, arguments));
  };
};

// //这个高阶函数的例子，既把函数当作参数传递，又让函数执行后返回了另外一个函数。我们
// //可以看看getSingle 函数的效果：
// var getScript = getSingle(function(){
//   return document.createElement( 'script' );
// });
// var script1 = getScript();
// var script2 = getScript();
// alert ( script1 === script2 ); // 输出：true


// // 三、高阶函数实现AOP编程
// Function.prototype.before = function (beforefn) {
//   var __self = this; // 保存原函数的引用
//   return function () { // 返回包含了原函数和新函数的"代理"函数
//     beforefn.apply(this, arguments); // 执行新函数，修正this
//     return __self.apply(this, arguments); // 执行原函数
//   }
// };
// Function.prototype.after = function (afterfn) {
//   var __self = this;
//   return function () {
//     var ret = __self.apply(this, arguments);
//     afterfn.apply(this, arguments);
//     return ret;
//   }
// };
// var func = function () {
//   console.log(2);
// };
// func = func.before(function () {
//   console.log(1);
// }).after(function () {
//   console.log(3);
// });
// func();




