
var strategies = {
  "S": function (salary) {
    return salary * 4;
  },
  "A": function (salary) {
    return salary * 3;
  },
  "B": function (salary) {
    return salary * 2;

  }
};
var calculateBonus = function (level, salary) {
  return strategies[level](salary);
};

console.log(calculateBonus('S', 20000)); // 输出：80000
console.log(calculateBonus('A', 10000)); // 输出：30000
// 本例 完全体现出 js 对方法的封装更为 简便。
// 同时，对方法的调用也非常的方便，无需创建复杂的对象。
// 无需像test3 那样创建 bonus 无所谓的 构造函数方式。
