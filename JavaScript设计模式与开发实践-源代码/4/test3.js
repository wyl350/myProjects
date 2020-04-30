var CreateDiv = (function () {
  var instance;
  var CreateDiv = function (html) {
    if (instance) {
      return instance;
    }
    this.html = html;
    this.init();
    return instance = this;
  };
  CreateDiv.prototype.init = function () {
    var div = document.createElement('div');
    div.innerHTML = this.html;
    document.body.appendChild(div);
  };
  return CreateDiv;
})();

var a = new CreateDiv('sven1');
var b = new CreateDiv('sven2');
alert(a === b); // true
// test3 使用的是 构造函数同级封装 闭包变量的方式，作单例创建的标识。


