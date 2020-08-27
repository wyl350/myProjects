
// es6:
{ // 函数扩展

  // 1. 函数扩展
  //   - 参数
  //       - arguments 
  //           > 表示的是实参  
  //       - fn.length 
  //           > 表示形参的个数  
  //           > 但是在有默认值的情况下，这个属性显示默认值的参数的位  置。  
  //   - 参数默认值的作用域
  {
    // let n = 10, m = 20;
    // function fn1(x = n, y = m) {
    //   let n = 1, m = 2;
    //   console.log(x, y);
    // }
    // fn1();
    // let x = 10;
    // function fn2(x = 1, y = x) {
    //   console.log(y);
    // }
    // fn2();
  }

  //       //形参所在的小括号是一个单独的作用域,遇到变量了先看自己作用域下有没有,没有再往上一级找。
  //       ```
  //   - 扩展运算符
  //       > 可以将数组变成非数组，也可以将非数组变成数组  
  //           //可以将数组变成非数组,也可以将非数组变成数组
  {
    // let ary = [1, 2, 3];
    // console.log(...ary);

    // //将字符串变成数组
    // let str = "12345";
    // console.log([...str]);
    // //将类数组变成数组
    // function fn() {
    //   return [...arguments].sort();
    // }

    // console.log(fn(3, 2, 5, 4, 1, 6));

    // //应用
    // //求最大值的方法
    // let ary1 = [1, 2, 3, 31.3, 112, 234];
    // console.log(eval("Math.max(" + ary1 + ")"));
    // // 上面的ary1 就变成了字符串。
    // console.log(Math.max(1, 2, 3, 31.3, 112, 234))
    // console.log(Math.max(ary1)) // NaN 这里显然是错误的。

    // // apply
    // console.log(Math.max.apply(null, ary1));
    // // 这个方法我不太懂。
    // //...
    // console.log(Math.max(...ary1));
    // let a1 = [1, 2, 3], a2 = [4, 5, 6];
    // console.log(a1.concat(a2));
    // console.log([...a1, ...a2])

  }
  {
    // // - 函数的name
    // let fn = function () {
    //   console.log(this);
    // };

    // console.log(fn.name);

    // console.log((function () { }).name);// 为空，当然这里的名字就是为空的。

    // //bind-->bound __
    // let obj = {};
    // var fn1 = fn.bind(obj);
    // fn1();
    // console.log(fn1.name);//bound fn
    // // 注意：这里的函数名。

    // //new Function -->anonymous
    // let f = new Function("n", "return n");
    // //anonymous
    // console.log(f.name); //anonymous 这个函数的名字也是非常的特殊的。
  }
  {
    // // - 箭头函数
    // //箭头函数中 this 问题;
    // //箭头函数没有 this 指向,它里面的this是谁,看他的上一级作用域中的 this (保证上一级作用域不是箭头函数)
    // // 我认为作用域是由对象和函数共同构成的，最外层的作用域是window，只有遇见对象才可能形成作用域，但是还不能形成作用域，必须在遇见函数才能形成该对象的作用域。但是箭头函数例外，他是不能形成作用域的。
    // let obj = {
    //   fn: function () {
    //     console.log(this);
    //     let f = () => {
    //       console.log(this);
    //     };
    //     f();//this==obj
    //   },
    //   fn1: () => {
    //     console.log(this);
    //   }
    // };
    // obj.fn();//this==obj
    // obj.fn1();//this==window

    // // box.onclick = () => {
    // //   console.log(this);
    // // }

  }



  {
    // function test(x, y = 'world'){
    //   console.log('默认值',x,y);
    // }
    // test('hello');
    // test('hello','kill');
  }
  {
    // function test(x, y = 'world',c){
    //   console.log('默认值',x,y,c);
    // }
    // test('hello');//默认值 hello world undefined
    // test('hello','kill');//值 hello kill undefined
  }

  {
    // let x = 'test';
    // function test2(x, y = x) {
    //   console.log('作用域', x, y);
    // }
    // test2('kill');//域 kill kill
    // // 参数的的取值作用域是独立的作用域。
  }
  {
    // let x = 'test';
    // function test2(x, y = x) {
    //   console.log('作用域', x, y);
    // }
    // test2();//作用域 undefined undefined
    // // 参数的的取值作用域是独立的作用域。
  }
  {
    // let x = 'test';
    // function test2(c, y = x) {
    //   console.log('作用域', x, y);
    // }
    // test2();//作用域 undefined undefined
    // // 参数的的取值作用域是独立的作用域。但是他的作用域是小于本块作用域的，所以和函数内部一样，都会向上取值。
  }

  { // rest 参数
    // function test3(...arg) {
    //   for (let v of arg) {
    //     console.log('rest', v);
    //   }
    //   console.log(arg)
    //   // 这里是数组。注意，这里的rest参数后面不能再有参数了。
    // }
    // test3(1, 2, 3, 4, 'a');
  }

  {// 扩展运算符
    // console.log(...[1, 2, 4]);
    // console.log('a', ...[1, 2, 4]);
    // console.log('a', ...[1, 2, 4], 1, 2);
  }

  {
    // let arrow = v => v*2;
    // let arrow2 = () => 5;
    // console.log('arrow',arrow(3));
    // console.log(arrow2());
  }

  { // 尾调用
    // function tail(x) {
    //   console.log('tail', x);
    // }
    // function fx(x) {
    //   return tail(x)
    // } // 这就是尾调用函数。做递归的时候有用。
    // // 如果在性能优化的过程中，某一个过程是不断的嵌套其他的函数，或者这个函数依赖另一个函数的操作，那么建议使用尾调用。
    // fx(123)
  }

}


