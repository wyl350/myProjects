{ // es6对象扩展
  {// 简洁表示法
    // let o=1;
    // let k=2;
    // let es5={
    //   o:o,
    //   k:k
    // };
    // let es6={
    //   o,
    //   k
    // };
    // console.log(es5,es6);

    // let es5_method={
    //   hello:function(){
    //     console.log('hello');
    //     console.log(this);
    //   }
    // };
    // let es6_method={
    //   hello(){
    //     console.log('hello');
    //     console.log(this);
    //   }
    // };
    // let es66_method={
    //   hello:()=>{
    //     console.log('hello');
    //     console.log(this);
    //   }
    // };
    // es5_method.hello()
    // es6_method.hello()
    // es66_method.hello()
  }

  { // 属性表达式 ,属性是可以使用表达式的。
    // let a = 'b';
    // let es5_obj = {
    //   a: 'c',
    //   b: 'c'
    // };

    // let es6_obj = {
    //   [a]: 'c'
    // }

    // console.log(es5_obj, es6_obj);
  }

  {// 新增 静态API   Object.is Object.assign Object.entries Object.keys Object.values

    // console.log('字符串', Object.is('abc', 'abc'), 'abc' === 'abc');
    // // 这个方法竟然能比较字符串的大小。
    // console.log('字符串', 'abc' === 'abc');
    // console.log('数组', Object.is([], []), [] === []);

    // let a = { a: 'a' }
    // let b = { b: 'b' }
    // console.log('拷贝', Object.assign(a, b));
    // console.log('拷贝', a);
    // console.log('拷贝', b);
    // // 不可枚举和继承的属性是不能拷贝的。而且这里是浅拷贝。注意：使得a 对象发生个改变。
    // console.log(Object.is(Object.assign(a, b), a)) // true
    // // 这里验证,确实是对原来a对象的引用，且a对象发生了变化。



    // let test = { k: 123, o: 456 };
    // for (let [key, value] of Object.entries(test)) {
    //   console.log(key, value);
    // }

    // for (let   key of Object.keys(test)) {
    //   console.log(key);
    // }

    // for (let value of Object.values(test)) {
    //   console.log(value);
    // }
    // console.log(Object.values(test))

  }

  {
    // //Object.is
    // //=== 绝对相等
    // let ary = [1, 2, 0, NaN, NaN, 1, 2, 2, 1, 0];
    // console.log(NaN === NaN);//false
    // console.log(Object.is(NaN, NaN));//true
    // let arr = [];
    // ary.forEach((item) => {
    //   var f = true;
    //   for (var i = 0; i < arr.length; i++) {
    //     if (Object.is(item, arr[i])) {
    //       f = false
    //     }
    //   };
    //   if (f) {
    //     arr.push(item);
    //   }
    // });
    // console.log(arr);
    // console.log([...new Set(ary)]);

    // //Object.assign(obj1,obj2)
    // //合并对象,将obj2合并到obj1上,将obj1返回
    // let obj1 = { a: 1 }
    // let obj2 = { b: 2 }
    // Object.assign(obj1, obj2)
    // console.log(obj1)

    // //获取一个私有属性的描述
    // let str1 = "1";
    // console.log(Object.getOwnPropertyDescriptor(str1, "length"));
    // console.log(Object.getOwnPropertyDescriptor(arr, "length"));

    // // //属性的遍历
    // // //for in
    // // //Object.keys():返回值是个数组,包括对象自身的(不包含继承的)的所有的可枚举属性
    // // //Object.getOwnPropertyNames(),返回值是个数组,包括对象自身的所属性(包括不可枚举属性)
    // // // Object.getOwnPropertySymbols(),返回值是个数组,包括对象自身的所有的Symbols属性
  }



  {
    // let test = { k: 123, o: 456 };
    // for (let  key of Object.keys(test)) {
    //   console.log( key);
    // }
  }

  {
    // let test = { k: 123, o: 456 };
    // for (let  value of Object.values(test)) {
    //   console.log( value);
    // }
  }

  {
    // //扩展运算符
    // let { a, b, ...c } = { a: 'test', b: 'kill', c: 'ddd', d: 'ccc' };
    // console.log(a)
    // console.log(c) // {c: "ddd", d: "ccc"}
  }
}

{ // 类和对象
  {// 类的定义
    // class Parent {
    //   constructor(name = 'mukewang') {
    //     this.name = name
    //   }
    // }
    // let parent = new Parent()
    // console.log(parent)
  }

  { //继承
    // class Parent {
    //   constructor(name = 'parent') {
    //     this.name = name
    //   }
    // }

    // class Child extends Parent {
    //   constructor(name = 'child') {
    //     super(name) // 这个方法起传递参数的作用，非常的重要，完成子类的覆盖父类属性作用。这个方法一定要在构造函数第一行.防止和子类的其他属性发生混淆问题。
    //     this.type = 'child';
    //   }
    // }
    // console.log(new Child())
  }

  { // getter setter
    // class Parent {
    //   constructor(name = 'parent') {
    //     this.name = name
    //     // this.longName = name
    //   }
    //   get longName() {//那么get 相当于给了一个默认值的情况。
    //     return 'mk' + this.name
    //   }
    //   set longName(name) {
    //     this.name = name
    //   } // 这个方法的设置，必须是依据于其他的属性值，这里依据的是this.name 的属性。通过改变其他属性的值得改变自身的属性值。
    //   // 注意：get和set 是对属性的扩展，使得属性更像方法。解决了我长期以来一直思考的问题。使得get一个属性和set一个属性 增加了一个代理性质的处理。非常的棒。
    // }
    // let v = new Parent()
    // // v.longName='wyl350'    // 这句是会报错的。
    // console.log(v)



    // console.log(v.longName)

    // v.longName = 'hello'
    // console.log(v.longName)// 上句修改了属性值，但是这句获取属性值的时候，属性值已经变成了新值，不再使用get方法中的return 返回值。那么get 相当于给了一个默认值的情况。
    // console.log(v)
  }

  { // 静态方法
    // class Parent {
    //   constructor(name = 'parent') {
    //     this.name = name
    //     this.longName = name
    //   }
    //   static tell() {
    //     console.log('static')
    //   }
    // }
    // Parent.tell()
  }

  { // 静态属性
    // class Parent {
    //   constructor(name = 'parent') {
    //     this.name = name
    //     this.longName = name
    //   }
    //   static tell1 = 'staticProperty1'
    //   // 这是es6 的新增方法，显然在chrome中是可以使用的。
    // }
    // console.log(Parent.tell1)
    // Parent.tell2 = 'staticProperty2'
    // console.log(Parent.tell2)
  }
}

