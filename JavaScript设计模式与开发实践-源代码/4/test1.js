var Singleton = function (name) {
  this.name = name;
  this.instance = null;
};
Singleton.prototype.getName = function () {
  alert(this.name);
};
Singleton.getInstance = function (name) {
  if (!this.instance) {
    this.instance = new Singleton(name);
  }
  return this.instance;
};

var a = Singleton.getInstance('sven1');
var b = Singleton.getInstance('sven2');
// alert(a === b); // true
console.log(a === b)  // true

// 实现获得单例，这个单例的name值是 sven1 ，sven2的单例是无法创建的。
// 本例采用的方式是运用静态方法，初始化 一个实例属性，依据实例属性来判断是否已经创建了实例。