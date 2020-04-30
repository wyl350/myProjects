//然后选择A 心情好的时候把花转交给A，代码如下：

var Flower = function () { };
var xiaoming = {
  sendFlower: function (target) {
    var flower = new Flower();
    target.receiveFlower(flower);
  }
};
var B = {
  receiveFlower: function (flower) {
    A.listenGoodMood(function () { // 监听A 的好心情
      A.receiveFlower(flower);
    });
  }
};

var A = {
  receiveFlower: function (flower) {
    console.log('收到花 ' + flower);
  },
  listenGoodMood: function (fn) {
    setTimeout(function () { // 假设10 秒之后A 的心情变好
      fn();
    }, 5000);
  }
};

xiaoming.sendFlower(B);

// 带有监听功能的代理