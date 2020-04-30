//这是一个经常遇到的问题，我们先看下面的代码：
var obj = {
  myName: 'sven',
  getName: function () {
    return this.myName;
  }
};

console.log(obj.getName()); // 输出：'sven'  这相当于对象调用。

var getName2 = obj.getName;
console.log(getName2()); // 输出：undefined  这相当于全局调用。







