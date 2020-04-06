const { compose, curry, concat, prop, match, add } = require('.././modules/ramda')

// 二、  函子>函数  map 这个基本上没有用
var mapback = curry(function (f, any_functor_at_all) {
  return any_functor_at_all.map(f).__value
});
var mapback_f = curry(function (f, any_functor_at_all) {
  any_functor_at_all.map(f)
  return any_functor_at_all.map(f).__value
});

// 一、 函子打包(以下只是为 demo 例子，不能实际使用。)
// 打包为 函子传递 ，之后使用 map函数。
// 
// 打包为 函子传递
var safeHead = function (xs) {
  return Maybe.of(xs[0]);
};
// 打包 withdraw函数 为 Maybe 函子
var withdraw = curry(function (amount, account) {
  return account.balance >= amount ?
    Maybe.of({ balance: account.balance - amount }) :
    Maybe.of(null);
});
// left 和 right 打包
var getAge = curry(function (now, user) {
  var birthdate = moment(user.birthdate, 'YYYY-MM-DD');
  if (!birthdate.isValid()) return Left.of("Birth date could not be parsed");
  return Right.of(now.diff(birthdate, 'years'));
});