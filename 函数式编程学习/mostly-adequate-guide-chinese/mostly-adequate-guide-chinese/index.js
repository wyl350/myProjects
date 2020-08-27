let { curry } = require('./ramda');
{
  let match = curry(
    function (what, str) {
      return str.match(what);
    }
  ); // 提取参数，把多参数的执行过程进行外封装，封装的新函数含有多个参数。
  console.log(   // 外包装函数调用
    match(/\s+/g, "hello world"), // [ ' ' ] 多参数 同时调用
    match(/\s+/g)("hello world"), // [ ' ' ] 多参数 依次调用
  )
  let hasSpaces = match(/\s+/g);  // 将包装函数柯里化，即 得到一个新的函数，可以叫做是：柯里化函数。柯里化的函数，只能是按照顺序进行柯里化。如果不按照顺序柯里化不叫更好了吗？// function(x) { return x.match(/\s+/g) }
  console.log(   // 柯里化函数调用
    hasSpaces("hello world"),// [ ' ' ] 
    hasSpaces("spaceless"),// null
  )


  let filter = curry(
    function (f, ary) {
      return ary.filter(f);
    }
  );// 提取参数，将执行过程进行封装。封装的新函数含有多个参数。该被封装的函数是高级函数。
  console.log(   // 外包装函数调用
    filter(hasSpaces, ["tori_spelling", "tori amos"]), // [ ' ' ] 多参数 同时调用
    filter(hasSpaces)(["tori_spelling", "tori amos"]), // [ ' ' ] 多参数 同时调用
  )
  let findSpaces = filter(hasSpaces);// 将包装函数柯里化，即 得到一个新的函数，可以叫做是：柯里化函数。
  // function(xs) { return xs.filter(function(x) { return x.match(/\s+/g) }) }

  console.log( // 柯里化函数调用
    findSpaces(["tori_spelling", "tori amos"]),
  )


  let replace = curry(function (what, replacement, str) {
    return str.replace(what, replacement);
  }); // 封装
  let noVowels = replace(/[aeiou]/ig);
  // function(replacement, x) { return x.replace(/[aeiou]/ig, replacement) }
  let censored = noVowels("*");
  // function(x) { return x.replace(/[aeiou]/ig, "*") }
  // 以上为两步柯里化
  console.log(
    censored("Chocolate Rain")  // 'Ch*c*l*t* R**n'
  )


  let map_curry = curry(function (f, ary) {
    return ary.map(f);
  });

  map_curry_func = map_curry(function (val) {
    return val + 1
  })
  console.log(
    map_curry_func([1, 2, 3, 4, 5, 6, 7, 8, 9])
  )
}


// {
//   var head = function (x) { return x[0]; };
//   // reduce=curry(
//   //   function (){
//   //     ary.reduce(f)
//   //   }
//   // )
//   var reverse = reduce(
//     function (acc, x) {
//       return [x].concat(acc);
//     },
//     []
//   );
//   var last = compose(head, reverse);
//   console.log(
//     last(['jumpkick', 'roundhouse', 'uppercut'])
//   )
//   //=> 'uppercut'
// }
let compose =
  function (...ary) {
    return function (x) {
      return ary.reduceRight(function (res, cb) {
        return cb(res)
      }, x)
    }
  }

var toUpperCase = function (x) { return x.toUpperCase(); };
var exclaim = function (x) { return x + '!'; };
var exclaim2 = function (x) { return x + '111'; };
var exclaim3 = function (x) { return x + '222'; };

let compose_curry = curry(
  function (exclaim3, exclaim2, exclaim, toUpperCase, s) {
    return compose(exclaim3, exclaim2, exclaim, toUpperCase)(s)
  }
)
console.log(
  compose_curry(exclaim3, exclaim2, exclaim, toUpperCase, 'rerrererer'),
  compose(exclaim3, exclaim2, exclaim, toUpperCase)('rerrererer'),
)
let join = curry(
  function (str,arr) {
    return arr.join(str)
  }
)
let map = curry(
  function (func,arr) {
    return arr.map(func)
  }
)
let split = curry(
  function (s,str) {
    return str.split(s)
  }
)
let replace = curry(
  function (reg,replacement,str) {
    return str.replace(reg,replacement)
  }
)
let toLower = curry(
  function (str) {
    return str.toLowerCase()
  }
)

var dasherize = compose(join('-'), map(toLower), split(' '), replace(/\s{2,}/ig, ' '));
console.log(
  dasherize('The world is a vampire')
)


