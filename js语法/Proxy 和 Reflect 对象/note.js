{// Proxy 和 Reflect
  { // Proxy
    // console.log(Proxy)
    // console.log(Proxy.constructor)
    // console.log(Proxy.constructor===Function.constructor)
    // console.log(Proxy.constructor===String.constructor)
    // console.dir(Proxy)

    let obj = {
      time: '2017-03-11',
      name: 'net 2017',
      _r: 1232017
    };

    let monitor = new Proxy(obj, {
      // 拦截对象属性的读取
      get(target, key) {
        // 注意，这里使用方法，一定要小心数据类型。该类型是否有这种方法。
        if (key === 'time' || key === 'name') {
          return target[key].replace('2017', '2018')
        } else {
          return target[key]
        }
      },
      // 拦截对象设置属性
      set(target, key, value) {
        if (key === 'name' || key === '_r') {
          return target[key] = value;
        } else {
          return target[key];
        }
      },
      // 拦截key in object操作 ，设置遍历对象。
      has(target, key) {
        if (key === 'name') {
          // return target[key]
          return true
        } else {
          return false;
        }
      },
      // 拦截delete
      deleteProperty(target, key) {
        if (key.includes('_')) {
          delete target[key];
          // 注意，代理删除操作，一定要在这里进行删除操作，否则就是无法删除。因为，所有的外部操作，这里全部代理了。所以这里的删除操作是必须的。
          return true;
        } else {
          return false
        }
      },
      // 拦截Object.keys,Object.getOwnPropertySymbols,Object.getOwnPropertyNames
      ownKeys(target) {
        return Object.keys(target).filter(item => item != 'time')
      }

    });
    console.log('get', obj.time);
    console.log('get', obj.name);
    console.log('get', obj._r);
    console.log('============');
    console.log('get', monitor.time);
    console.log('get', monitor.name);
    console.log('get', monitor._r);
    console.log(monitor);
    console.log(obj);
    // // get设置的时候代理对象和被代理对象都没有发生变化，但是在get 代理对象的属性时，就发生了变化。
    console.log('============');
    monitor.time = '2018';
    monitor.name = 'mukewang';
    monitor._r = '99999';
    console.log(monitor);
    console.log(obj);
    // 代理对象和被代理对象同事都发生了变化。
    console.log(obj.time);
    console.log(obj.name);
    console.log(obj._r);
    console.log(monitor.time);
    console.log(monitor.name);
    console.log(monitor._r);
    // get的时候，如果没有设置set的方法属性会按照get代理规则走。
    console.log('============');
    console.log('has', 'name' in monitor, 'time' in monitor, '-r' in monitor);
    console.log(monitor);
    console.log(obj);


    // delete monitor.time;
    console.log(delete monitor.time)
    console.log(delete monitor.name)
    console.log(delete monitor._r)
    console.log(monitor);
    console.log(obj);
    // 这里的删除操作，是对代理对象和原对象的同时删除。

    console.log(delete monitor._r)
    console.log('delete', monitor);
    console.log('delete', obj);
    // 原被代理对象也被删除了

    console.log('ownKeys', Object.keys(monitor));
    console.log('ownKeys', Object.keys(obj));
    // 原被代理对象是可以遍历出来的。
  }

  { // reflect
    let obj = {
      time: '2017-03-11',
      name: 'net',
      _r: 123
    };

    console.log('Reflect get', Reflect.get(obj, 'time'));
    Reflect.set(obj, 'name', 'mukewang111111');
    console.log(obj);
    console.log('has', Reflect.has(obj, 'name'));
  }

  { // 代理实例
    function validator(target, validator) {
      return new Proxy(target, {
        _validator: validator,// 这个是实际的校验模块。
        set(target, key, value, proxy) {
          if (target.hasOwnProperty(key)) {// 对所有的自身属性进行设定。
            let va = this._validator[key];//获得每一个属性值。
            if (!!va(value)) { // 判断调用函数的返回值。
              return Reflect.set(target, key, value, proxy)
            } else {
              throw Error(`不能设置${value}到${key}`)
            }
          } else {
            throw Error(`${key} 不存在`)
          }
        }
      })
    }

    const personValidators = {
      name(val) {
        return typeof val === 'string'
      },
      age(val) {
        return typeof val === 'number' && val > 18
      },
      mobile(val) { }
    }

    class Person {
      constructor(name, age) {
        this.name = name;
        this.age = age;
        this.mobile = '1111';
        return validator(this, personValidators)
      }
    }

    const person = new Person('lilei', 30);
    console.info(person);
    person.name = 1111;
    console.info(person);
  }
}