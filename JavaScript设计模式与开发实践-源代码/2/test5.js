﻿// //call 和apply 最常见的用途是改变函数内部的this 指向，我们来看个例子：
// var obj1 = {
// 	name: 'sven'
// };
// var obj2 = {
// 	name: 'anne'
// };
// window.name = 'window';
// var getName = function(){
// 	alert ( this.name );
// };
// getName(); // 输出: window
// getName.call( obj1 ); // 输出: sven
// getName.call( obj2 ); // 输出: anne


// Function.prototype.bind = function (context) {
// 	var self = this; // 保存原函数 , 注意这里是函数原型，那么this指代的就是原函数。根据下面的带入的函数，可以得出，应该是：
// 	// ƒ () {
// 	// 	alert(this.name); // 输出：sven
// 	// }
// 	return function () { // 返回一个新的函数
// 		return self.apply(context, arguments); // 执行新的函数的时候，会把之前传入的context当作新函数体内的this
// 	}
// };
// var obj = {
// 	name: 'sven'
// };
// var func = function () {
// 	alert(this.name); // 输出：sven
// }.bind(obj);
// func();


// Function.prototype.bind = function () {
// 	var self = this, // 保存原函数
// 		context = [].shift.call(arguments), // 需要绑定的this 上下文
// 		args = [].slice.call(arguments); // 剩余的参数转成数组
// 	// 这里的这个提取 context和args的方法真的是非常的巧妙。借用了数组的方法。
// 	return function () { // 返回一个新的函数
// 		return self.apply(context, [].concat.call(args, [].slice.call(arguments)));
// 		// 执行新的函数的时候，会把之前传入的context 当作新函数体内的this
// 		// 并且组合两次分别传入的参数，作为新函数的参数
// 	}
// };
// var obj = {
// 	name: 'sven'
// };
// var func = function (a, b, c, d) {
// 	alert(this.name); // 输出：sven
// 	alert([a, b, c, d]) // 输出：[ 1, 2, 3, 4 ]
// }.bind(obj, 1, 2);
// func(3, 4);



// //借用方法的第一种场景是“借用构造函数”，通过这种技术，可以实现一些类似继承的效果：
// var A = function (name) {
// 	this.name = name;
// };
// var B = function () {
// 	A.apply(this, arguments);
// };
// B.prototype.getName = function () {
// 	return this.name;
// };
// var b = new B('sven');
// console.log(b.getName()); // 输出： 'sven'



// //通常会借用Array.prototype.push：
// (function () {
// 	Array.prototype.push.call(arguments, 3);
// 	console.log(arguments); // 输出[1,2,3]
// })(1, 2);




// //看看V8 引擎中的具体实现： 这段无法实现，只能是阅读，理解其原理。
// function ArrayPush() {
// 	var n = TO_UINT32(this.length); // 被push 的对象的length
// 	var m = %_ArgumentsLength(); // push 的参数个数
// 	for (var i = 0; i < m; i++) {
// 		this[i + n] = %_Arguments(i); // 复制元素 (1)
// 	}
// 	this.length = n + m; // 修正length 属性的值 (2)
// 	return this.length;
// };


