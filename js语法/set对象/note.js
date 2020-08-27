{ // set and map
  { // set 
    // 和 数组最大的区别就是他的每一个值都是唯一的。
    // 有
    // add()
    // size
    // delete() 返回true 或者 false
    // clear() 
    // has()
    // keys()
    // values()
    // 直接遍历list 他的值也是value。
    {
      // let list = new Set();
      // list.add(5);
      // list.add(7);
      // console.log('size', list.size);//2
    }
    {
      let arr = [1, 2, 3, 4, 5, 5, 5, 5, undefined, 5, undefined,];
      let list = new Set(arr);
      console.log('size', list.size);
      console.log('size', list);
      console.dir(Set)
      console.dir(typeof (Set)) //function 可见set 的本质是一个function。
      function f() {
      }
      console.dir(typeof (f))
      console.log(Set.constructor === Function.constructor)
      // Set 对象的构造器和 String  Function 的一样。

    }
    {
      // let list = new Set([1, 2, 3, 4, 5]);
      // console.log('size', list.size);
    }
    {
      let list = new Set();
      list.add(1);
      list.add(2);
      list.add(1);

      console.log('list', list);

      let arr = [1, 2, 3, 1, '2'];
      let list2 = new Set(arr);

      console.log('unique', list2);
    }
    {
      let arr = ['add', 'delete', 'clear', 'has'];
      let list = new Set(arr);

      console.log('has', list.has('add'));
      console.log('delete', list.delete('add'), list);
      console.log('delete', list.delete('add'), list);
      console.log(list.delete('add'), list);
      console.log('has', list.has('add'));
      list.clear();
      console.log('list', list);
    }
    { // set 对象的keys values 和 entries 的用法都是一样的。
      let arr = ['add', 'delete', 'clear', 'has'];
      let list = new Set(arr);

      for (let key of list.keys()) {
        console.log('keys', key);
      }
      for (let value of list.values()) {
        console.log('value', value);
      }
      // 直接遍历list 他的值也是value。
      for (let value of list) {
        console.log('value', value);
      }
      // 这是和对象的用法是一样的，这里的目的是为了统一。
      for (let [key, value] of list.entries()) {
        console.log('entries', key, value);
      }

      list.forEach(function (item) { console.log(item); })
      console.log(list)
      // 难道数组的方法都能用吗,当然不能用，但是他的自身的方法是有forEach方法的。
    }
    {
      // //1.使用构造函数方式创建一个Set的实例
      // //2.传进来一个数组,得到有个去重后的类数组(Set实例)
      // // 这里一定要特别的注意，虽然NaN和NaN 严格是不同的，但是set处理的时候还是按照相同的来处理的。
      // // 注意：这里打印出来的内容是按照空格分开的元素集合。set 和array 都是有集合扩展的方法的。


      // let set1 = new Set([1, 2, 12, 121, 21, 1, "珠峰", "珠峰", NaN, NaN, true, true]);
      // console.log(set1);

      // //将set变成数组
      // console.log([...set1]);

      // console.log(Array.from(set1));


      // console.log(...set1);

      // //数组去重
      // function fn(ary) {
      //   //return [...new Set(ary)];
      //   return Array.from(new Set(ary));
      // }
    }
    {
      // //size:表示长度

      // var set1 = new Set([1, 2, 3, 4]);
      // //1.add(),增加,之前没有才可以增加,(加在后面)。如果有的话是加不上的。
      // //返回值是当前实例,说明可以实现链式写法
      // console.log(set1.add(5).add(6).add(6).add(6).add(6));

      // // 2.has(),判断当前实例中有没有某一项
      // // 返回值true/false
      // console.log(set1.has(1));
      // console.log(set1.has(10));

      // //3.delete(),删除实例中的某一项
      // //返回值true:删除成功,false:删除失败
      // console.log(set1.delete(2));
      // console.log(set1);

      // //clear(),清空
      // //没有返回值,undefined
      // set1.clear();
      // console.log(set1);

      // var arr1 = [1, 2, 3, 4, 5, 6];
      // var arr2 = [2, 4, 6, 8, 10];

      // //1.并集[1,2,3,4,5,6,8,10]
      // function bj(ary1, ary2) {
      //   //合并,[...ary1,...ary2]
      //   //去重 new Set([...ary1,...ary2])
      //   //变成数组 [...new Set([...ary1,...ary2])];
      //   return [...new Set([...ary1, ...ary2])];
      // }
      // console.log(bj(arr1, arr2))

      // //交集(相同的部分)
      // function jj(ary1, ary2) {
      //   return ary1.filter((item) => {
      //     return ary2.includes(item);
      //   })
      // }

      // console.log(jj(arr1, arr2));

      // //差集() 去除并集中交集部分
      // function cj(ary1, ary2) {
      //   return bj(ary1, ary2).filter((item) => {
      //     return !jj(ary1, ary2).includes(item);
      //   })
      // }

      // console.log(cj(arr1, arr2));
    }
    {
      // var set1 = new Set(["z", "h", "u", "f", "e", "n", "g"]);
      // console.log(set1);
      // //遍历set数据的实例只能遍历value值
      // set1.forEach((item, index) => {
      //   //item当前项
      //   console.log(item, index);
      // });

      // for (var key of set1.keys()) {
      //   console.log(key);
      // }
      // for (var val of set1.values()) {
      //   console.log(val);
      // }
      // for (var en of set1.entries()) {
      //   console.log(en);
      // }
    }

  }

  { // WeakSet
    // WeakSet 和 set  的支持数据类型不同，WeakSet 支持的数据类型只能是对象，不能是其他的数据类型。
    // WeakSet 对象 是一个弱引用，他不会检测在其他地方是否用过。意味着他的元素是不会与垃圾回收机制挂钩。意思是说，weakset 对象添加的对象，是一个地址的引用，不会检测这个对象是否被回收。
    // 没有set属性，
    // 没有clear方法，
    // 不能遍历。
    console.log(WeakSet.constructor)
    console.log(WeakSet.constructor === String.constructor)
    console.log(WeakSet.constructor === Function.constructor)
    {
      let weakList = new WeakSet();
      let arg = {};
      let arg2 = { 1: '分' };

      weakList.add(arg, arg2);
      // weakList.add(2);  Invalid value used in weak set
      console.log(weakList);
      console.dir(Set)
      console.dir(WeakSet)
    }
  }

  { // map
    // 和对象最大的区别就是他的属性部分可以使用任何类型，不再局限于字符串。
    // key是可以是任何的数据类型的。
    // set()
    // get()
    console.dir(Map)
    console.dir(Map.constructor === Function.constructor)


    {
      let map = new Map();
      let arr = ['123'];

      map.set(arr, 456);

      console.log('map', map, map.get(arr));
    }

    {
      let map = new Map([['a', 123], ['b', 456]]);
      console.log('map args', map);
      console.log('size', map.size);
      console.log('delete', map.delete('a'), map);
      console.log('clear', map.clear(), map);
    }
    {
      // //1.使用构造函数方式创建一个实例
      // //2.参数是个数组,数组的每一项都是一个数组,这个数组有两项,第一项作为键key,第二项作为值value
      // //3.这里的key键可以是任意数据类型的
      // var map1 = new Map([[1, "a"], ["a", "A"], [{ name: "珠峰" }, "珠峰"], [/\d+/, "正则"]]);
      // console.log(map1);

      // //方法
      // //get(key)
      // console.log(map1.get("a"));

      // //set(key,value);
      // map1.set(2, "JS");
      // console.log(map1);
      // //delete,has,clear

      // let ary = [1, 2, 3, 4, 5, 6];
      // //将数组变成Map
      // //1,[1]
      // //2,[1,2]
      // //3,[1,2,3]
      // //....
      // var map = new Map();
      // ary.forEach((item, index) => {
      //   map.set(index + 1, ary.slice(0, index + 1))
      // });
      // console.log(map);

      // //forEach(),keys(),values(),entries();

      // map.forEach((val, key, map) => {
      //   //val:值,
      //   //key:键
      //   //map:原Map实例
      // })
      // for (var key of map.keys()) {
      //   //key:键
      // }
      // for (var val of map.values()) {
      //   //val:值,
      // }
      // for (var [key, val] of map.entries()) {
      //   //val:值,
      //   //key:键
      // }
    }
  }

  { // WeakMap
    // key值必须是对象。不能是其他的数据类型。
    // 没有size属性，也没有clear方法。
    // 不能遍历。
    {
      // let weakmap = new WeakMap();

      // let o = {};
      // weakmap.set(o, 123);
      // console.log(weakmap.get(o));
    }
  }

  { // set   map arr object的数据结构对比.
    // 总结：整个项目开发过程中，能使用map，不使用数组。
    // 如果考虑数据的唯一性，那么最好考虑使用set。
    { // map 和 array的对比
      // // 数据结构横向对比，增，查，改，删
      // map 和 array的对比 总体map 的增，查，改，删要比 array的增删改查好很多。
      // let map = new Map();
      // let array = [];
      // // 增
      // map.set('t', 1);
      // array.push({ t: 1 });

      // console.info('map-array', map, array);

      // // 查
      // let map_exist = map.has('t');
      // let array_exist = array.find(item => item.t);
      // console.info('map-array', map_exist, array_exist);
      // // 注意这里find方法如果找到了值，返回的就是查找到的这个对象。

      // // 改
      // map.set('t', 2);
      // array.forEach(item => item.t ?  item.t=2 : '');
      // console.info('map-array-modify', map, array);

      // // 删
      // map.delete('t');
      // let index = array.findIndex(item => item.t);
      // array.splice(index, 1);
      // console.info('map-array-empty', map, array);
    }

    { // set 和 array的对比
      // // set和array的对比 总体set 和array的增删改查都是比较麻烦的。
      // let set=new Set();
      // let array=[];

      // // 增
      // set.add({t:1});
      // array.push({t:1});

      // console.info('set-array',set,array);

      // // 查
      // let set_exist=set.has({t:1});
      // // 这个显然是false，应该在增加的时候，将这个对象保存成一个变量，就能使用has查找了。
      // let array_exist=array.find(item=>item.t);
      // console.info('set-array',set_exist,array_exist);

      // // 改
      // set.forEach(item=>item.t?item.t=2:'');
      // // 这里是不能使用add的方法进行修改的，因为这里新增加的对象一定和原来的不同，因此就变成了增加对象了，而不是修改了。因此只能使用这里的遍历的方法，而不是add的方法。除非这个对象被引用为变量。
      // array.forEach(item=>item.t?item.t=2:'');
      // console.info('set-array-modify',set,array);

      // // 删
      // set.forEach(item=>item.t?set.delete(item):'');
      // let index=array.findIndex(item=>item.t);
      // array.splice(index,1);
      // console.info('set-array-empty',set,array);
    }

    { // map set object的对比
      // map,set,object对比
      // let item = { t: 1 };

      // let map = new Map();
      // let set = new Set();
      // let obj = {};

      // // 增
      // map.set('t', 1);
      // set.add(item);
      // obj['t'] = 1;
      // console.info('map-set-obj',  map, set,obj);

      // // 查
      // console.info({
      //   map_exist: map.has('t'),
      //   set_exist: set.has(item),
      //   obj_exist: 't' in obj
      // })

      // // 改
      // map.set('t', 2);
      // item.t = 2;
      // obj['t'] = 2;
      // console.info('map-set-obj-modify', map, set,obj);

      // // // 删除
      // map.delete('t');
      // set.delete(item);
      // delete obj['t'];
      // console.info('map-set-obj-empty', obj, map, set);
    }


  }
}

