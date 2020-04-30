// var nodes = document.getElementsByTagName('div');
// for (var i = 0, len = nodes.length; i < len; i++) {
//   nodes[i].onclick = function () {
//     alert(i);
//   }
// };

// 理解这段代码的真正含义需要以下几方面的深入理解：
// 第一、理解代码的执行，显然本脚本代码会在加载网页的同时，进行加载。
// 第二、变量i此时的值为循环的最大值 5。
// 第三、绑定事件的本质，onclick函数，事件的触发发生在点击鼠标的时刻。

// 最后，因为点击鼠标的时候，本脚本已经执行完毕，全局变量i的值已经是 5，那么输出的值都是4.


// // 利用闭包解决该问题
// var nodes = document.getElementsByTagName('div');
// for (var i = 0, len = nodes.length; i < len; i++) {
//   (function (i) {
//     nodes[i].onclick = function () {
//       console.log(i);
//     }
//   })(i)
// };
// // 以上代码也执行完毕，但是内部有一个自执行函数，相对于外部的 全局变量 i 形成了闭包，i 挂载事件函数的时候，i 的值是确定的。
// // 这里我发现了自执行函数的一个非常好的特点就是，i的值被固定，但是同时它的内存空间也被销毁了。


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
//   Type.isString("str") , // 输出：true
// );



// //假设有一个计算乘积的简单函数：
// var mult = function () {
//   var a = 1;
//   for (var i = 0, l = arguments.length; i < l; i++) {
//     a = a * arguments[i];
//   }
//   return a;
// };
// console.log(mult(1, 2, 3, 4, 5));



// //我们可以加入缓存机制来提高这个函数的性能：
// var cache = {};
// var mult = function () {
//   // 这两段代码的作用就是增加了缓存机制。
//   var args = Array.prototype.join.call(arguments, ',');
//   console.log(args);
//   if (cache[args]) {
//     return cache[args];
//   }
//   var a = 1;
//   for (var i = 0, l = arguments.length; i < l; i++) {
//     a = a * arguments[i];
//   }
//   return cache[args] = a;
// };
// console.log(mult(1, 2, 3)); // 输出：6
// console.log(mult(1, 2, 3, 4)); // 输出：6
// console.log(mult(1, 2, 3, 4)); // 输出：6
// console.log(cache);
// // alert(mult(1, 2, 3)); // 输出：6
// // 这段代码修改的全局变量，这个函数相对于这个全局变量 cache 来说，就是一个闭包函数。 



// var mult = function () {
//   var cache = {};
//   var args = Array.prototype.join.call(arguments, ',');
//   // console.log(args);
//   if (cache[args]) {
//     return cache[args];
//   }
//   var a = 1;
//   for (var i = 0, l = arguments.length; i < l; i++) {
//     a = a * arguments[i];
//   }
//   console.log(cache);
//   return cache[args] = a;
// };
// console.log(mult(1, 2, 3)); // 输出：6
// console.log(mult(1, 2, 3)); // 输出：6
// // console.log(mult(1, 2, 3, 4)); // 输出：6
// // console.log(mult(1, 2, 3, 4)); // 输出：6

// // 这种方式并没有形成闭包，原因很简单，因为没有返回出去函数，只有返回出去函数，且该函数被引用，才能让闭包内的变量变为缓存。

// // 经过上面一次错误的尝试，我们知道如何改进我们的代码
// //以避免这个变量在其他地方被不小心修改而引发错误。代码如下：
// var mult = (function () {
//   var cache = {};
//   return function () {
//     var args = Array.prototype.join.call(arguments, ',');
//     if (args in cache) {
//       return cache[args];
//     }
//     var a = 1;
//     for (var i = 0, l = arguments.length; i < l; i++) {
//       a = a * arguments[i];
//     }
//     return cache[args] = a;
//   }
// })();
// console.log(
//   mult(1, 2, 3)
// );
// 这里使用的一个小策略就是将缓存变量和其他的执行函数分离开，其他的执行代码经过一个函数作为包装，包装起来。这个过程的专有名词就叫做 提炼代码 。
// 提炼代码是代码重构中的一种常见技巧，提炼代码有两种情况，这两种情况有着本质的区别，一个是执行代码的提炼，将执行代码封装为函数。另一种就是函数中代码的提炼，这种将大的函数代码块，进一步的提炼，然后运用良好的命名，这些命名又能起到注释作用。
// 同时，也要注意，如果一些小的代码块不需要其他程序进行调用，那么最好是把他们用闭包封装起来的。


// // 以下代码就是运用到了提炼代码的作用了
// //最好是把它们用闭包封闭起来。代码如下：
// var mult = (function () {
//   var cache = {};
//   var calculate = function () { // 封闭calculate 函数
//     var a = 1;
//     for (var i = 0, l = arguments.length; i < l; i++) {
//       a = a * arguments[i];
//     }
//     return a;
//   };
//   return function () {
//     var args = Array.prototype.join.call(arguments, ',');
//     if (args in cache) {
//       return cache[args];
//     }
//     return cache[args] = calculate.apply(null, arguments);
//   }
// })();



// // 面向对象与闭包
// //下面来看看这段跟闭包相关的代码：
// var extent = function () {
//   var value = 0;
//   return {
//     call: function () {
//       value++;
//       console.log(value);
//     }
//   }
// };
// var extent = extent();
// extent.call(); // 输出：1
// extent.call(); // 输出：2
// extent.call(); // 输出：3

// // 这里我增加一个自执行函数的写法
// var extent = (function () {
//   var value = 0;
//   return {
//     call: function () {
//       value++;
//       console.log(value);
//     }
//   }
// })();
// // var extent = extent();  // 这种方式显然是可以省去这一层的不必要的调用的。
// extent.call(); // 输出：1
// extent.call(); // 输出：2
// extent.call(); // 输出：3


// //如果换成面向对象的写法，就是：
// var extent = {
//   value: 0,
//   call: function () {
//     this.value++;
//     console.log(this.value);
//   }
// };
// extent.call(); // 输出：1
// extent.call(); // 输出：2
// extent.call(); // 输出：3
// 显然这种面向对象的写法是非常的不错的。


//或者：

var Extent = function () {
  this.value = 0;
};

Extent.prototype.call = function () {
  this.value++;
  console.log(this.value);
};

var extent = new Extent();

extent.call();
extent.call();
extent.call();

// 总结以上三中面向对象的写法：
// 第一种严格上讲不算是完全面向对象的写法，因为他的缓存变量放在了对象的外面，采用闭包的形式。而且最外层使用的是函数。采用的是函数套闭包对象的方式（使用闭包缓存变量）。
// 第二种，我自己写的自执行函数的方式本质上和第一种是一样的，仅仅是自执行的方式，减少了相比第一种情况的不必要的第一层调用。
// 第三种第四种本质上相同的，都是采用了对象的方式，但是有着巨大的差别。第三种的对象方式，就是采用的具体对象，而第四种则是采用的是类，即构造函数。