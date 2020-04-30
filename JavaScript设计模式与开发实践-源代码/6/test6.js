var myImage = (function () {
  var imgNode = document.createElement('img');
  document.body.appendChild(imgNode);
  return {
    setSrc: function (src) {
      imgNode.src = src;
    }
  }
})();
var proxyImage = (function () {
  var img = new Image;
  img.onload = function () {
    myImage.setSrc(this.src);
  }
  return {
    setSrc: function (src) {
      myImage.setSrc('shili.jpg'); // 这是代理对象所要执行的 本对象的代码。构建一个默认的对象。
      img.src = src;
    }
  }
})();
proxyImage.setSrc('http://n.sinaimg.cn/photo/transform/700/w1000h500/20200424/fc66-isqivxh9378941.jpg');

// 给 img 设置src 和图片预加载这两个功能，被隔离在了两个对象里。
// 代理对象和本体都对外提供了 setSrc 方法，在客户开来，代理对象和本体是一致的。