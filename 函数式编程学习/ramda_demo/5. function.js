const R = require('./ramda')
const __ = R.__

// 五、函数
// 5.1 函数的合成

{// compose：将多个函数合并成一个函数，从右到左执行。
  console.log(
    R.compose(Math.abs, R.add(1), R.multiply(2))(-4) // 7
  )
}

{// pipe：将多个函数合并成一个函数，从左到右执行。
  var negative = x => -1 * x
  var increaseOne = x => x + 1
  var f = R.pipe(Math.pow, negative, increaseOne)
  console.log(
    f(3, 4) // -80 => -(3^4) + 1
  )
}

{// converge：接受两个参数，第一个参数是函数，第二个参数是函数数组。传入的值先使用第二个参数包含的函数分别处理以后，再用第一个参数处理前一步生成的结果。
  var sumOfArr = arr => {
    var sum = 0
    arr.forEach(i => sum += i)
    return sum
  }
  var lengthOfArr = arr => arr.length
  var average = R.converge(R.divide, [sumOfArr, lengthOfArr])
  console.log(
    average([1, 2, 3, 4, 5, 6, 7]),// 4    相当于 28 除以 7
  );

  var toUpperCase = s => s.toUpperCase()
  var toLowerCase = s => s.toLowerCase()
  var strangeConcat = R.converge(R.concat, [toUpperCase, toLowerCase])
  console.log(
    strangeConcat("Yodel"),// "YODELyodel"     相当于 R.concat('YODEL', 'yodel')
  )
}

{// useWith：接受一个函数fn和一个函数数组fnList作为参数，返回fn的柯里化版本。该新函数的参数，先分别经过对应的 fnList 成员处理，再传入fn执行。
  var decreaseOne = x => x - 1
  var increaseOne = x => x + 1
  console.log(
    R.useWith(Math.pow, [decreaseOne, increaseOne])(3, 4), // 32
    R.useWith(Math.pow, [decreaseOne, increaseOne])(3)(4), // 32
  )
}

// 5.2 柯里化

{// curry：将多参数的函数，转换成单参数的形式。
  var addFourNumbers = (a, b, c, d) => a + b + c + d
  var curriedAddFourNumbers = R.curry(addFourNumbers)
  var f = curriedAddFourNumbers(1, 2)
  var g = f(3)
  console.log(
    g(4) // 10
  )
}

{// partial：允许多参数的函数接受一个数组，指定最左边的部分参数。
  var multiply2 = (a, b) => a * b
  var double = R.partial(multiply2, [2])
  var double2 = R.partial(multiply2)([2])
  console.log(
    double(2), // 4
    double2(2), // 4
  );

  var greet = (salutation, title, firstName, lastName) =>
    salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!'

  var sayHello = R.partial(greet, ['Hello'])
  var sayHelloToMs = R.partial(sayHello, ['Ms.'])
  console.log(
    sayHelloToMs('Jane', 'Jones'), //=> 'Hello, Ms. Jane Jones!'
  )
  var funcpartial1 = R.partial(greet, ['第一', '第二', '第三', '第四'])
  var funcpartial2 = R.partial(greet, ['第一', '第二', '第三'])
  var funcpartial3 = R.partial(greet, ['第一', '第二',])
  var funcpartial4 = R.partial(greet, ['第一'])
  console.log(
    funcpartial1(),
    funcpartial2('第四'),
    funcpartial3('第三', '第四'),
    funcpartial4('第二', '第三', '第四'),
  );
}

{// partialRight：与partial类似，但数组指定的参数为最右边的参数。
  var greet = (salutation, title, firstName, lastName) =>
    salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!'
  var greetMsJaneJones = R.partialRight(greet, ['Ms.', 'Jane', 'Jones'])
  console.log(
    greetMsJaneJones('Hello') // 'Hello, Ms. Jane Jones!'
  )
}

// {// memoize：返回一个函数，会缓存每一次的运行结果。
//   var productOfArr = arr => {
//     var product = 1
//     arr.forEach(i => product *= i)
//     return product
//   }
//   // R.memoizeWith

//   var count = 0
//   var factorial = R.memoize(n => {
//     count += 1
//     return productOfArr(R.range(1, n + 1))
//   })
//   console.log(
//     R.memoize,
//     factorial(5), // 120
//     factorial(5), // 120
//     factorial(5), // 120
//     // count, // 1
//   )
// }

{// complement：返回一个新函数，如果原函数返回true，该函数返回false；如果原函数返回false，该函数返回true。
  // 这个函数不应该属于函数的柯里化
  var gt10 = x => x > 10
  var lte10 = R.complement(gt10)
  console.log(
    gt10(7), // false
    lte10(7), // true
  )
}

// // 5.3 函数的执行

{// binary：参数函数执行时，只传入最前面两个参数。
  var takesThreeArgs = function (a, b, c) {
    return [a, b, c]
  }
  var takesTwoArgs = R.binary(takesThreeArgs)
  console.log(
    takesTwoArgs(1, 2, 3) // [1, 2, undefined]
  )
}

{// tap：将一个值传入指定函数，并返回该值。
  var sayX = x => console.log('x is ' + x)
  console.log(
    R.tap(sayX)(100), // 100
    111,
  )
  console.log(
    R.pipe(
      R.assoc('a', 2),
      R.tap(console.log),
      R.assoc('a', 3),
    )({ a: 1 }),// {a: 3}
  );
}

{// zipWith：将两个数组对应位置的值，一起作为参数传入某个函数。
  var f = (x, y) => {
    return x + y
  }
  console.log(
    R.zipWith(f, [1, 2, 3])(['a', 'b', 'c'])// [ '1a', '2b', '3c' ]
  );
}

{// apply：将数组转成参数序列，传入指定函数。
  var nums = [1, 2, 3, -99, 42, 6, 7]
  console.log(
    R.apply(Math.max)(nums) // 42
  );
}

{// applySpec：返回一个模板函数，该函数会将参数传入模板内的函数执行，然后将执行结果填充到模板。
  var getMetrics = R.applySpec({
    sum: R.add,
    nested: { mul: R.multiply }
  })
  console.log(
    getMetrics(2, 4) // { sum: 6, nested: { mul: 8 } }
  );
}

{// ascend：返回一个升序排列的比较函数，主要用于排序。
  var byAge = R.ascend(R.prop('age'))
  var people = [
    { name: 'zhangsan1', age: 1 },
    { name: 'zhangsan3', age: 3 },
    { name: 'zhangsan2', age: 2 },
  ]
  var peopleByYoungestFirst = R.sort(byAge)(people)
  console.log(
    peopleByYoungestFirst
  );
}

{// descend：返回一个降序排列的比较函数，主要用于排序。
  var byAge = R.descend(R.prop('age'))
  var people = [
    { name: 'zhangsan1', age: 1 },
    { name: 'zhangsan3', age: 3 },
    { name: 'zhangsan2', age: 2 },
  ]
  console.log(
    R.sort(byAge)(people)
  );
}