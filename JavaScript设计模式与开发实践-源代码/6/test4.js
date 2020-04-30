// 虚拟代理

var Flower = function () { };
var xiaoming = {
  sendFlower: function (target) {
    target.receiveFlower(flower);
  }
};
var B = {
  receiveFlower: function (flower) {
    A.listenGoodMood(function () { // 监听A 的好心情
      var flower = new Flower(); // 延迟创建 flower 对象，特别是 new Flower() 是一个巨大开销的时候，是一个非常有用的。
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


// 处理虚拟代理，还有保护代理。保护代理：代理B可以帮助A过滤掉一些请求，比如送花的人中年龄太大的或者没有宝马的，这种请求就可以直接在代理B处被拒绝掉。这就是保护代理。
// 保护代理的作用就是用于控制不同权限的对象对目标对象的访问，但是在js中是不太容易实现保护代理的，因为我们无法判断谁访问了某个对象。
// 我应该想办法配置一套保护代理。