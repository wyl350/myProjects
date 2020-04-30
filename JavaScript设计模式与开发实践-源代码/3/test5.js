// // 高阶函数的其他应用
// // 1. currying   又叫做部分求值
// var monthlyCost = 0;
// var cost = function (money) {
//   monthlyCost += money;
// };
// cost(100); // 第1 天开销
// cost(200); // 第2 天开销
// cost(300); // 第3 天开销
// //cost( 700 ); // 第30 天开销
// alert(monthlyCost); // 输出：600


var cost = (function () {
  var args = [];
  return function () {
    if (arguments.length === 0) {
      var money = 0;
      for (var i = 0, l = args.length; i < l; i++) {
        money += args[i];
      }
      return money;
    } else {
      [].push.apply(args, arguments);
    }
  }
})();

cost(100); // 未真正求值
cost(200); // 未真正求值
cost(300); // 未真正求值
console.log(cost()); // 求值并输出：600




