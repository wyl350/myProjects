const { curry } = require('.././modules/ramda')

// 对瓶子内的值进行处理
class Container {
  constructor(val) {
    this.__value = val;
  }
  static of(val) {
    return new Container(val)
  }
  map(f) {
    return Container.of(f(this.__value))
  } // map方法的参数函数对瓶内的值进行处理。
}

class Maybe {
  constructor(val) {
    this.__value = val;
  }
  static of(val) {
    return new Maybe(val)
  }
  __isNothing() {
    return (this.__value === null || this.__value === undefined);
  }
  map(f) {
    return this.__isNothing() ? Maybe.of(null) : Maybe.of(f(this.__value));
  } // 一旦瓶子内的值为 null 或者 undefined ，那么瓶子内值将不会被map方法的形参函数进行处理。
}
class Left {
  constructor(x) {
    this.__value = x;
  }
  static of(x) {
    return new Left(x);
  }
  map(f) {
    return this;
  } // 左边处理
}
class Right {
  constructor(x) {
    this.__value = x;
  }
  static of(x) {
    return new Right(x);
  }
  map(f) {
    return Right.of(f(this.__value));
  } // 右边处理
}

class Either {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }
  static of(left, right) {
    return new Either(left, right)
  }
  map(f) {
    return this.right ?
      Either.of(this.left, f(this.right)) :
      Either.of(f(this.left), this.right);
  } // 瓶内值有两个值，分为左、右各两个值，右边的值一旦存在，就对右边的值进行处理。如果没有右边的值，就对左边的值就行胡处理。可见左边的值是默认值。但是这个类我真的不知道有什么用。
}



class MyPromise {
  constructor(executor) {
    let _this = this;
    this.status = 'pending';
    this.value = undefined;
    this.reason = undefined;
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];
    function resolve(value) {
      if (_this.status === 'pending') {
        _this.status = 'fulfilled';
        _this.value = value;
        _this.onResolvedCallbacks.forEach(item => item())
      }
    }
    function reject(reason) {
      if (_this.status === 'pending') {
        _this.status = 'rejected';
        _this.reason = reason;
        _this.onRejectedCallbacks.forEach(item => item());
      }
    }
    executor(resolve, reject);
  }
  then(onResolved, onRejected) {

    onResolved = typeof onResolved === 'function' ? onResolved : function (value) { }
    onRejected = typeof onRejected === 'function' ? onRejected : function (reason) { }

    return new MyPromise((resolve, reject) => {
      if (this.status === 'pending') {
        this.onResolvedCallbacks.push(() => {
          let x = onResolved(this.value)
          resolve(x)
        })
        this.onRejectedCallbacks.push(() => {
          let x = onRejected(this.reason)
          reject(x)
        })
      }
      if (this.status === 'fulfilled') {
        let x = onResolved(this.value)
        resolve(x)
      }
      if (this.status === 'rejected') {
        let x = onRejected(this.value)
        reject(x)
      }
    })
  }
}




// 一、 函子>函子  map
// 1. map 函子>函子  map
var map = curry(function (f, any_functor_at_all) {
  return any_functor_at_all.map(f);
});
// 2.  增加 没有返回值 副作用 f 副作用
// 函子>函子  map
var map_f = curry(function (f, any_functor_at_all) {
  any_functor_at_all.map(f)
  return any_functor_at_all
});
// 3. either 函子>函数
// 选择性打包，紧跟left和right打包的函子
var either = curry(function (f, g, e) {
  switch (e.constructor) {
    case Left: return f(e.__value);
    case Right: return g(e.__value);
  }
});
var maybe = curry(function (x, f, m) {
  return m.isNothing() ? x : f(m.__value);
});






module.exports = {
  Container,
  Maybe,
  Left,
  Right,
  Either,
  MyPromise,
  map,
  map_f,
  either,
  maybe,
}



// class Ap {
//   constructor(val) {
//     this.__value = val
//   }
//   static of(val) {
//     return new Ap(val)
//   }
//   map(f) {
//     return Ap.of(f(this.__value))
//   }
//   ap(F) {
//     return Ap.of(this.__value(F.val));
//   }
// }


// class IO {
//   constructor(val) {
//     this.__value = val
//   }
//   static of(val) {
//     return new IO(val)
//   }
//   map(f) {
//     return IO.of(f(this.__value))
//   }
//   join() {
//     return this.val;
//   }
//   flatMap(f) {
//     return this.map(f).join();
//   }
// }
// var fs = require('fs');

// var readFile = function (filename) {
//   return new IO(function () {
//     return fs.readFileSync(filename, 'utf-8');
//   });
// };




