// 不用代理的预加载图片函数实现如下：

var MyImage = (function () {
  var imgNode = document.createElement('img');
  document.body.appendChild(imgNode);
  var img = new Image;
  img.onload = function () {
    imgNode.src = img.src;
  };
  return {
    setSrc: function (src) {
      imgNode.src = 'shili.jpg';
      img.src = src;
    }
  }
})();
MyImage.setSrc('http://n.sinaimg.cn/photo/transform/700/w1000h500/20200424/fc66-isqivxh9378941.jpg');

// 以上违反了单一职责原则和开放-封闭原则。
