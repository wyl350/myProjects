// // 用闭包实现命令模式
// var Tv = { // 创建Tv对象，Tv对象有两个方法。
//   open: function () {
//     console.log('打开电视机');
//   },
//   close: function () {
//     console.log('关上电视机');
//   }
// };
// // 直接使用构造函数使得这里的代码太重了，
// var OpenTvCommand = function (receiver) { // 创建 打开Tv命令对象，该对象有 执行打开和撤销关闭 两个 方法。
//   this.receiver = receiver; // 注意，预先植入的命令接收者，这里是Tv，被当成对象的属性保存起来。
// };
// OpenTvCommand.prototype.execute = function () {
//   this.receiver.open(); // 执行命令，打开电视机
// };
// OpenTvCommand.prototype.undo = function () {
//   this.receiver.close(); // 撤销命令，关闭电视机
// };
// // 外置一个设置命令的函数，挂载两个按钮的 onclick 函数。
// var setCommand = function (command) {
//   document.getElementById('execute').onclick = function () {
//     command.execute(); // 输出：打开电视机
//   }
//   document.getElementById('undo').onclick = function () {
//     command.undo(); // 输出：关闭电视机
//   }
// };
// setCommand(new OpenTvCommand(Tv));

// // OpenTvCommand 对象的 execute 和 undo 方法，对应 Tv 对象的open close 方法，因此，OpenTvCommand 对象 显然是可以接受除了Tv对象以外的别的对象的。


// // 以下是我对改进构造函数的方式的尝试，使得代码减轻分量。
// var Tv = { // 创建Tv对象，Tv对象有两个方法。
//   open: function () {
//     console.log('打开电视机');
//   },
//   close: function () {
//     console.log('关上电视机');
//   }
// };
// var createCommand = {
//   _receiver: null,
//   set receiver(obj) {
//     this._receiver = obj
//   },
//   get receiver() {
//     return this._receiver
//   },
//   execute: function () {
//     this._receiver.open(); // 执行命令，打开电视机
//   },
//   undo: function () {
//     this._receiver.close(); // 撤销命令，关闭电视机
//   },
// };


// // 外置一个设置命令的函数，挂载两个按钮的 onclick 函数。
// var setCommand = function (command) {
//   document.getElementById('execute').onclick = function () {
//     command.execute(); // 输出：打开电视机
//   }
//   document.getElementById('undo').onclick = function () {
//     command.undo(); // 输出：关闭电视机
//   }
// };
// // createCommand._receiver(Tv)
// createCommand._receiver = Tv
// console.log(createCommand._receiver);
// setCommand(createCommand);
// // 以上尝试成功，但是还是有点麻烦，这还是对象编程的方式。



// // 很多情况下，用函数对象比 用普通的对象来封装请求显得更加简单和自然。如下：
// var Tv = {
//   open: function () {
//     console.log('打开电视机');
//   },
//   close: function () {
//     console.log('关上电视机');
//   }
// };
// var createCommand = function (receiver) {
//   var execute = function () {
//     return receiver.open(); // 执行命令，打开电视机
//   }
//   var undo = function () {
//     return receiver.close(); // 执行命令，关闭电视机
//   }
//   return {
//     execute: execute,
//     undo: undo
//   }
// };
// // 这里我描述一下上面这个函数，这个函数本质上也是对象，但是比对象的功能更为强大，因为他是可以直接传参的，不想我上面的那个例子中，还要使用复杂的对象属性的get和set方法，十分的麻烦。上面这个函数，就直接引入参数，作为对象编程中应该的属性，简化属性操作。就不用在麻烦的将传入的属性 receiver 挂载在对象的属性上面了。直接使用即可。
// var setCommand = function (command) {
//   document.getElementById('execute').onclick = function () {
//     command.execute(); // 输出：打开电视机
//   }
//   document.getElementById('undo').onclick = function () {
//     command.undo(); // 输出：关闭电视机
//   }
// };
// setCommand(createCommand(Tv));
// 总结以上的方法中，得到具体对象编程，如果提取其中的属性设置，应该采用传参的方式，那么就能十分的简化程序的编写，能够在函数编程的同时将一些方法封装在具体的对象中。




