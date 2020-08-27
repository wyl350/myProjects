{ // Symbol 
  // 学习网址： https://blog.csdn.net/qq_39798135/article/details/82720448
  // Symbol 是ES6 引入的一种新的原始数据类型，用于表示独一无二的值；
  // 主要用于当做属性名，防止属性名重名，因为用字符串当属性名很容易就会在不经意间造成重名；

  { // Symbol值生成: 通过 Symbol() 函数
    //不能用 new ，否则会给你报错
    // Symbol 函数可以接收一个字符串参数，可以传一个对象作为参数（当然得这个对象要有toString() 方法才行，因为会先调用对象的toString方法来得到字符串）,也可以不传参数；以下的很多参数，都是先转为对象，使用tostring方法，最终获得的带参数的Symbol 数据。
    // 注意：带参数其实本身没有啥作用，或者所使用的范围较少。更重要的是引用 变量 来区分，变量的名来区分。
    // 每一个symbol值都是唯一的，但是经过tostring转化之后就能进行字符串比较了，这倒是一个很不错的方法，不知道有没有适用的范围。
    // 另外，Symbol 值不可以和其他类型值进行混合运算, 否则会报错；Boolean(sym); // true
    // Symbol 值 放入预期为布尔值的地方，显示为 true。
    // 还有就是 Symbol 值可以转换显式或者隐式转换为布尔值，同时却是不能转换成数值；
    {
      // const sym = Symbol();
      // console.log(typeof sym)//"symbol"
      // console.log(sym)//"symbol"
      // console.log(/f/) // 正则表达式也是由函数生成函数实例化的。
      // console.log(typeof (/f/)) // 正则表达式也是由函数生成函数实例化的。

      // const sym2 = Symbol(555);
      // const sym33 = Symbol(555);
      // console.log(typeof sym2)//"symbol"
      // console.log(sym2)//"symbol"
      // console.log(sym2 === sym33) // 当然是不相等的。

      // const sym3 = Symbol(true);
      // console.log(typeof sym3)//"symbol"
      // console.log(sym3)//"symbol"

      // const sym4 = Symbol('name');
      // console.log(typeof sym4)//"symbol"
      // console.log(sym4)//"symbol"
    }
    { // symbol 值是唯一的。
      // let symbol1 = Symbol()
      // let symbol2 = Symbol()
      // console.log(symbol1 === symbol2)
      // console.log(symbol1 == symbol2)

      // let symbol3 = Symbol('name')
      // let symbol4 = Symbol('name')
      // console.log(symbol3 === symbol4)
      // console.log(symbol3 == symbol4)
    }
  }

  { // Symbol 的使用，作为对象属性名的使用。
    // 需要注意的几点是：
    //   1. Symbol 值如果想要作为属性名，那就不能再用点运算符，因为点运算符后面跟的总是字符串；
    //   2. 在对象内部使用Symbol 值作为属性名的时候，必须要将值放在方括号中；
    { // 点语法方式行不通
      // const myPro = Symbol('222');
      // let a = {};
      // // a.Symbol('name') = 'zhangsan' // Uncaught TypeError: a.Symbol is not a function.
      // // 显然不支持点语法
      // console.log(a[Symbol('name')])//undefined
      // console.log(a[Symbol('name')])//undefined
      // console.log(a)//
      // let name =Symbol('name')
      // name='daozi'
      // console.log(a[Symbol(name)])//undefined
      // console.log(a[Symbol('name')])//undefined
      // console.log(a[name])//undefined
      // console.log(a['name'])//undefined

      // console.log(a)
    }
    { // 该方式行的通，但是无法引用
      // // 这样的话，显然是可以给对象增加属性的，但是这样的属性根本就没有办法引用。
      // // 究其原因，就是 Symbol('222')的值和 Symbol('222') 的值是不同的。所以无法引用。
      // let a = {};
      // a[Symbol('name')]='zhangsan'
      // console.log(a) // {Symbol(name): "zhangsan"}
      // console.log(a[Symbol('name')])//undefined
      // console.log(a[Symbol('name')])//undefined
    }
    { // 该方式行的通，但是无法引用
      //// 究其原因，就是 Symbol('222')的值和 Symbol('222') 的值是不同的。所以无法引用。
      // let a = {};
      // Object.defineProperty(a, Symbol('name'), { value: 'Troyes' });
      // console.log(a) // {Symbol(name): "zhangsan"}
      // console.log(a[Symbol('name')])//undefined
      // console.log(a[Symbol('name')])//undefined
    }
    {// 因此，使用 symbol 的正确方式，是用一个变量把symbol 的值储存起来使用。只能用方括号内的变量给对象属性赋值。
      {//第一种形式
        // const myPro = Symbol();
        // let a = {};
        // a[myPro] = 'Troyes';
        // console.log(a)//Troyes
        // console.log(a[myPro])//Troyes
        // console.log(a.myPro)//undefined
      }
      {//第二种形式
        // const myPro = Symbol();
        // let a = {
        //   [myPro]: 'Troyes'
        // };
        // console.log(a[myPro])//Troyes
        // console.log(a)//undefined
        // console.log(a.myPro)//undefined
      }
      { //第三种形式
        // const myPro = Symbol();
        // let a = {};
        // Object.defineProperty(a, myPro, { value: 'Troyes' });
        // console.log(a)//Troyes
        // console.log(a[myPro])//Troyes
        // console.log(a.myPro)//undefined
      }
    }
  }

  { // 遍历作为属性名的Symbol值
    // // 很神奇的是，作为属性名，Symbol值却不能用在 for...in 或者 for...of 循环中；
    // // 但是我们可以利用Object.getOwnPropertySymbols(obj) 方法来获得一个数组，这个数组的项是当前对象所有用作属性的Symbol 值；
    // // 我们还可以利用ES6 提供的一个新的API：Reflect.ownKeys(obj) 来获取对象的所有属性名（包括常规的string 和 Symbol）；这个方法拿到的key值最终是一个数组。
    // const s1 = Symbol('a');
    // const s2 = Symbol('b');

    // let a = {
    //   [s1]: 'hello',
    //   [s2]: 'world',
    //   name: 'Troyes'
    // };
    // console.log(Object.getOwnPropertySymbols(a)) // [Symbol(a), Symbol(b)]
    // console.log(Reflect.ownKeys(a)); //[Symbol(a), Symbol(b), "name"] 
    // console.log(typeof (Reflect))
    // console.dir(Reflect.construct)

  }

  { // 如何去创建同一个Symbol值

    // 提供了一个方法： Symbol.for() 可以传入一个字符串作为参数；实际上，这个方法和Symbol() 一样，都是用来创建Symbol值的，只是机制不一样；
    // Symbol.for(): 用这个方法创建的Symbol值会被登记在全局环境中，调用这个方法，会先去全局环境中查看有没有以相同字符串作为参数的Symbol值，如果有就拿到这个Symbol值，没有就会创建一个新的Symbol值；而用Symbol()创建Symbol值，不会存在全局环境供搜索，也不会去查询，直接就会创建一个新的Symbol值；  // 可见，这个机制是非常的有利于直接拿到这个已经登记过的值。
    {
      // let a = Symbol.for('test');
      // let b = Symbol.for('test');
      // console.log(
      //   a === b, // true
      //   Symbol('test') === Symbol('test') // false
      // )
    }
    {
      // 那么如何来获取一个已经登记过的Symbol值的key？  // 可以用Symbol.keyFor() 方法：这个 key 实际上就是创建的时候传入的参数；
      // let a = Symbol.for('test');
      // let b = Symbol('test');
      // console.log(
      //   Symbol.keyFor(a), // "test"
      //   Symbol.keyFor(b) // undefined     b可是没有登记过的，所以就给你返回undefined
      // )
      // 这个方法岂不是可以创建全局变量。
    }
  }
}