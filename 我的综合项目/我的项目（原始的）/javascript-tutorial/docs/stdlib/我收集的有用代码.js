







{// 数据类型判断
  var type = function (o) {
    var s = Object.prototype.toString.call(o);
    return s.match(/\[object (.*?)\]/)[1].toLowerCase();
  };

  ['Null',
    'Undefined',
    'Object',
    'Array',
    'String',
    'Number',
    'Boolean',
    'Function',
    'RegExp'
  ].forEach(function (t) {
    type['is' + t] = function (o) {
      return type(o) === t.toLowerCase();
    };
  });

  type.isObject({}) // true
  type.isNumber(NaN) // true
  type.isRegExp(/abc/) // true
}
{// 判断一个数值是否为对象的方法
  function isObject(value) {
    return value === Object(value);
  }

  isObject([]) // true
  isObject(true) // false
}
{// 获得对象的所有属性（不管是自身的还是继承的，也不管是否可枚举），可以使用下面的函数。
  function inheritedPropertyNames(obj) {
    var props = {};
    while (obj) {
      Object.getOwnPropertyNames(obj).forEach(function (p) {
        props[p] = true;
      });
      obj = Object.getPrototypeOf(obj);
    }
    return Object.getOwnPropertyNames(props);
  }
  inheritedPropertyNames(Date)
}
{//  对象的拷贝
  // 如果要拷贝一个对象，需要做到下面两件事情。
  // - 确保拷贝后的对象，与原对象具有同样的原型。
  // - 确保拷贝后的对象，与原对象具有同样的实例属性。
  function copyObject(orig) {
    var copy = Object.create(Object.getPrototypeOf(orig));
    copyOwnPropertiesFrom(copy, orig);
    return copy;
  }
  function copyOwnPropertiesFrom(target, source) {
    Object
      .getOwnPropertyNames(source)
      .forEach(function (propKey) {
        var desc = Object.getOwnPropertyDescriptor(source, propKey);
        Object.defineProperty(target, propKey, desc);
      });
    return target;
  }

  // 另一种更简单的写法，是利用 ES2017 才引入标准的`Object.getOwnPropertyDescriptors`方法。
  function copyObject(orig) {
    return Object.create(
      Object.getPrototypeOf(orig),
      Object.getOwnPropertyDescriptors(orig)
    );
  }
}
