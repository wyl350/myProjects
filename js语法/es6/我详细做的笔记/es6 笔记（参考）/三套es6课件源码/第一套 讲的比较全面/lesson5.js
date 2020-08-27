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
