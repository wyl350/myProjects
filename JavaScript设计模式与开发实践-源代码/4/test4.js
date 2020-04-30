// var CreateDiv = function (html) {
//   this.html = html;
//   this.init();
// };
// CreateDiv.prototype.init = function () {
//   var div = document.createElement('div');
//   div.innerHTML = this.html;
//   document.body.appendChild(div);
// };

// var ProxySingletonCreateDiv = (function () {
//   var instance;
//   return function (html) {
//     if (!instance) {
//       instance = new CreateDiv(html);
//     }
//     return instance;
//   }
// })();

// var a = new ProxySingletonCreateDiv('sven1');
// var b = new ProxySingletonCreateDiv('sven2');

// var a = ProxySingletonCreateDiv('sven1');
// var b = ProxySingletonCreateDiv('sven2');
// alert(a === b);

// 注意 ProxySingletonCreateDiv 函数，
// 第一点：这是一个自执行函数，他的返回值是一个函数，因此， ProxySingletonCreateDiv() 的结果就是返回函数的调用，得到instance。
// 第二点：任何普通的js函数，只要返回值是一个对象，那么就有两种调用方式，一种是采用new方式，一种是直接调用，这两种调用方式的结果都是一样的。

// 本例在原理普通构造函数的基础上增加了代理对象，有这个代理对象完成单例创建的任务。



// // 实验例子一：
// var CreateDiv = function (html) {
//   this.html = html;
//   this.init();
// };
// CreateDiv.prototype.init = function () {
//   var div = document.createElement('div');
//   div.innerHTML = this.html;
//   document.body.appendChild(div);
// };

// function ProxySingletonCreateDiv(html) {
//   var instance;
//   if (!instance) {
//     instance = new CreateDiv(html);
//   }
//   return instance;
// }
// // 注意这里的这个代理对象，这个代理对象显然是不构成闭包的，因此 instance 变量 失效，无法完成创建单例的任务。

// var a = new ProxySingletonCreateDiv('sven1');
// var b = new ProxySingletonCreateDiv('sven2');
// alert(a === b);


// 实验例子二：
var CreateDiv = function (html) {
  this.html = html;
  this.init();
};
CreateDiv.prototype.init = function () {
  var div = document.createElement('div');
  div.innerHTML = this.html;
  document.body.appendChild(div);
};

var ProxySingletonCreateDiv = (function () {
  var instance;
  return function (html) {
    if (!instance) {
      instance = new CreateDiv(html);
    }
    return instance;
  }
})();


// 尝试形成闭包，如果要形成闭包，就必须得内置函数，如果内置函数，外层就必须的调用两侧，才能实现内层函数的调用。当然我们希望一次调用，就能达到目标。那么就把外层换为自执行函数。

var a = new ProxySingletonCreateDiv('sven1');
var b = new ProxySingletonCreateDiv('sven2');
alert(a === b);


// test1 使用的是 实例属性作为单例创建的标识，
// test2 使用的是 静态方法闭包的变量作为单例创建的标识，
// test3 使用的是 构造函数同级封装 闭包变量的方式，作单例创建的标识。
// test4 使用的是 增加代理对象，原对象采用普通对象的方式，即不使用闭包。

// 以上四种方式的最后一种当然是最优的方式，
// 以上四种方式共同的缺点就是 全部采用的是构造函数的方式，这种方式比较适合类对象语言的，并不适合javascript 这种函数式语言。注意第四种方式，这里严格来讲采用的并不是代理对象的方式。


