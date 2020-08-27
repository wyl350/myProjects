{  // Number对象
  // new Number(value);

  // 参数
  // value // 被创建对象的数字值
  let a = new Number(45);
  console.log(a)

  //   Number对象主要用于：
  // 如果参数无法被转换为数字，则返回NaN
  let b = new Number(undefined);
  console.log(b)
  // 在非构造器上下文中(如：没有new操作符)，Number能被用来执行类型转换。
  let c = new Number(false);
  console.log(c)

  // 创建对象
  var myNum1 = new Number("1"); //新建Number对象
  var myNum2 = Number(1); // 转换成功时返回Number 失败返回NaN
  console.log(myNum1)
  console.log(myNum2)
}




{// 属性
}
{ // 静态方法 和属性
  // prototype	添加属性和方法 他是静态属性。
  numb1 = new Number('1')



  console.log(Number.prototype === numb1.constructor.prototype)
  console.log(Number.prototype.constructor === numb1.constructor)
  console.log(Number.constructor === numb1.constructor)
  console.log(Number.constructor === Object)
  console.log(Number.constructor === RegExp.constructor)
  console.log(Math.constructor)
  console.log(Math.constructor === Object.prototype.constructor)


  console.log(Number.constructor)
  console.log(Number.prototype)
  console.log(numb1.constructor)
  // constructor	返回对创建此对象的 Number 函数的引用.他是实例属性。
  // 静态属性 MAX_VALUE MIN_VALUE
  console.log(Number.MAX_VALUE);  //1.7976931348623157e+308
  console.log(Number.MAX_VALUE + 1);//1.7976931348623157e+308
  // MIN_VALUE
  console.log(Number.MIN_VALUE); //5e-324 接近0，但不是负数
  console.log(Number.NEGATIVE_INFINITY)
  console.log(Number.POSITIVE_INFINITY)
  console.log(Number.NaN)
  console.log(Infinity)
  console.log(-Infinity)
  console.log(NaN)
  // Infinity
  //   - Infinity
  // 以上这几个值是 全局变量。
  {// 判断是不是数字 Number.isNaN(number),静态方法，已经挂载到全局。
    // NaN
    // isNaN(number)
    console.log(isNaN(123));//false
    console.log(isNaN(-1.23));//false
    console.log(isNaN("Hello"));//true
    // NaN 与其他数值进行比较的结果总是不相等的，包括它自身在内。因此，不能与 Number.NaN 比较来检测一个值是不是数字，而只能调用 isNaN() 来比较。parseInt() 和 parseFloat() 在不能解析指定的字符串时就返回这个值。

  }

  {// Infinity() 检测无穷数,可以检测是否为数字。静态方法，已经挂载到全局。
    // isFinite(number)
    // 检测无穷数  

    // 如果 number 是 NaN（非数字），或者是正、负无穷大的数，则返回 false。

    console.log(isFinite(123)); //true
    console.log(isFinite(-1.23)); //true
    console.log(isFinite("2005/12/12")); //false
    console.log(Number.isFinite())
  }

}



{  // 实例属性和方法
  // valueOf()
  numb1 = new Number('1')
  console.log(numb1.valueOf()) // 1
  // 以下这几个方法都不改变字符串。
  // toString	使用指定的基数，把数字转换为字符串	转换后字符串	N
  // toFixed	四舍五入为指定小数位数的数字	切割后字符串	N
  // toLocaleString	把数字转换为字符串，使用本地数字格式顺序	转换后字符串	N
  // toExponential	把对象的值转换为指数计数法	转换后字符串	N
  // toPrecision	对象的值超出指定位数时将其转换为指数计数法	转换后字符串	N
  // toString(radix) 把一个 Number 对象转换为一个字符串，并返回结果

  // radix：表示数字的基数，使 2 ~36 之间的整数。缺省参数时，使用基数 10。

  var number = new Number(8);
  console.log(typeof number.toString());//string
  console.log(number.toString(2)); //1000 转换为二进制值表示的字符串

  // toFixed(num) 四舍五入规定小数位数
  var num = new Number(13.37);
  console.log(num.toFixed(1)); //13.4
  console.log(typeof num.toFixed(1)); //string

  // toExponential(num) 转换对象的值为指数计数法， num规定指数计数法中的小数位数
  var num = new Number(10000);
  console.log(num.toExponential()); //1e+4
  console.log(num.toExponential(1)); //1.0e+4
  console.log(typeof num.toExponential(1)); //string

  // toPrecision(num) 对象的值超出指定位数时将其转换为指数计数法，num规定必须被转换为指数计数法的最小位数
  var num = new Number(10000);
  console.log(num.toPrecision(1)); //1e+4
  console.log(num.toPrecision(4)); //1.000e+4
  console.log(num.toPrecision(5)); //10000
  console.log(typeof num.toPrecision()); //string
}


// es6中，新增的内容
{  
  // 处理相关数值的方法都移植到了 Number 对象上了。
  // 例如：  parseInt ，但是行为是不变的。 

}
{ // es6中，二进制和八进制的表示
  // // es6中，二进制的表示方法都是以0b开头。
  // // 八进制是以0o开头
  // console.log('B',0B111110111); // 503
  // console.log(0o767);// 503
  // // 以上都是以十进制打印出来的。
}

{//Number.isFinite
  // console.log('15',Number.isFinite(15));
  // console.log('NaN',Number.isFinite(NaN));
  // console.log('1/0',Number.isFinite('true'/0));
  // console.log('NaN',Number.isNaN(NaN));
  // console.log('0',Number.isNaN(0));

}

{// Number.isInteger这个方法必须是 个数，不能是其他类型。
  console.log('25',Number.isInteger(25));
  console.log('25.0',Number.isInteger(25.0));
  console.log('25.1',Number.isInteger(25.1));
  console.log('25.1',Number.isInteger('25'));
  }

{ // MAX_SAFE_INTEGER,  MIN_SAFE_INTEGER,  isSafeInteger,
  console.log(Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER);
  console.log('10',Number.isSafeInteger(10));
  console.log('a',Number.isSafeInteger('a'));
  // 必须是一个数字。
}

{ // 取回小数的整数部分，这和Math的Math.floor ，Math.ceil 方法不同。
  console.log(4.1,Math.trunc(4.1));
  console.log(4.9,Math.trunc(4.9));
  // Math.floor
  // Math.ceil
}

{// sign 判断正负值，带有类型转换。
  console.log('-5',Math.sign(-5));//-1 
  console.log('0',Math.sign(0));//0
  console.log('5',Math.sign(5));//1
  console.log('50',Math.sign('50'));//1
  console.log('foo',Math.sign('foo'));//NaN
  // 带有类型转换功能。
}

{// cbrt 立方根，带有类型转换。
  console.log('-1',Math.cbrt(-1));
  console.log('8',Math.cbrt(8));
  console.log('8',Math.cbrt('8'));
  // 带有类型转换功能。
}
