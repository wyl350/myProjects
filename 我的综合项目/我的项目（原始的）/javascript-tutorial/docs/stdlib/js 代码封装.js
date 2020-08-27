
{// 这是一个类型判断的对象封装。封装这个对象，可以对类型进行判断，十分方便。
  // 这里我用了三种封装方式：
  // 特别注意：对比三种封装，我认为，一般常见的封装就是第三种，这种封装非常的全面，既可以使用静态方法，也可以使用原型方法。但是，这里使用的是工具方法，所以最好是按照静态方法封装。第一种最为简单实用，封装静态方法。
  // 对比三种方法：
  // 相同点就是从对象上面取得方法来实现目的。这里的可以从简单的第一种中的对象中取得，也可以从构造函数的对象中取得。最好不要从原型方法上面取得。

  // 这里可以推出，构造函数本身的对象的属性，



  { // 注意，这里根据需求，是工具方法的封装，不需要对象实例化的，所以采用的是静态封装。    
    // function newType() {
    //   let Type = {}
    //   Type.getType = function (o) {
    //     var s = Object.prototype.toString.call(o);
    //     return s.match(/\[object (.*?)\]/)[1].toLowerCase();
    //   };
    //   ['Null',
    //     'Undefined',
    //     'Object',
    //     'Array',
    //     'String',
    //     'Number',
    //     'Boolean',
    //     'Function',
    //     'RegExp',
    //   ].forEach(function (t) {
    //     Type['is' + t] = function (o) {
    //       return Type.getType(o) === t.toLowerCase();
    //     };
    //   });
    //   return Type
    // }

    // // 测试：
    // let Type = newType()
    // console.log(Type)
    // console.log(
    //   Type.getType({}), // "object"
    //   Type.getType([]), // "array"
    //   Type.getType(5), // "number"
    //   Type.getType(null), // "null"
    //   Type.getType(undefined), // "undefined"
    //   Type.getType(/abcd/), // "regex"
    //   Type.getType(new Date()), // "date"
    // )
    // console.log(
    //   Type.isObject({}), // true
    //   Type.isNumber(NaN), // true
    //   Type.isRegExp(/abc/), // true
    // )

  }
  { // 注意：这里我是采用的 把静态方法放进函数中进行封装。最后使用的是构造函数的属性。
    //   // 注意这种封装方法，最后使用的是构造函数。
    //   // 这个构造函数，如果实例化的话，其实例化后的对象
    //   function newType() {
    //     // let Type = {}
    //     function Type() { }
    //     Type.getType = function (o) {
    //       var s = Object.prototype.toString.call(o);
    //       return s.match(/\[object (.*?)\]/)[1].toLowerCase();
    //     };
    //     ['Null',
    //       'Undefined',
    //       'Object',
    //       'Array',
    //       'String',
    //       'Number',
    //       'Boolean',
    //       'Function',
    //       'RegExp',
    //     ].forEach(function (t) {
    //       Type['is' + t] = function (o) {
    //         return Type.getType(o) === t.toLowerCase();
    //       };
    //     });
    //     return Type
    //   }
    //   // 测试：
    //   let Type = newType()
    //   console.log(Type)
    //   console.log(Type.getType)

    //   let Type1 = new newType()
    //   console.dir(Type1)
    //   console.log(typeof(Type1))
    //   console.log(Type1.getType)

    //   console.log(
    //     Type.getType({}), // "object"
    //     Type.getType([]), // "array"
    //     Type.getType(5), // "number"
    //     Type.getType(null), // "null"
    //     Type.getType(undefined), // "undefined"
    //     Type.getType(/abcd/), // "regex"
    //     Type.getType(new Date()), // "date"
    //   )

    //   console.log(
    //     Type.isObject({}), // true
    //     Type.isNumber(NaN), // true
    //     Type.isRegExp(/abc/), // true
    //   )

    // }

  }
}
{ // 这里一定要特别的注意，构造函数上面增加的一些静态属性，是不能被实例化的实例所继承的，如果要使用这些属性，必须是直接调用构造函数对象的属性方法。
  // 因此，也是可以用的，但是构造实例，就有点多余了。
  function Type() { }
  Type.getType = function (o) {
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
    'RegExp',
  ].forEach(function (t) {
    Type['is' + t] = function (o) {
      return Type.getType(o) === t.toLowerCase();
    };
  });

  // 测试：
  // let Type = newType()
  // console.log(Type)
  // console.log(Type.getType)

  let type = new Type()
  console.dir(type)
  console.dir(Type)
  console.dir(Type.__proto__) // 构造函数的原型是一个构造函数
  console.dir(typeof (Type))
  console.dir(typeof (Object))

  // console.log(typeof (Type1))
  console.log(type.getType) // undefined

  console.log(
    Type.getType({}), // "object"
    Type.getType([]), // "array"
    Type.getType(5), // "number"
    Type.getType(null), // "null"
    Type.getType(undefined), // "undefined"
    Type.getType(/abcd/), // "regex"
    Type.getType(new Date()), // "date"
  )

  console.log(
    Type.isObject({}), // true
    Type.isNumber(NaN), // true
    Type.isRegExp(/abc/), // true
  )

  
}
