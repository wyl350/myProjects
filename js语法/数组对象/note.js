// 数组中的一些常用方法总结
{ // 本文介绍：
  // https://www.cnblogs.com/chenmeng0818/p/5985923.html

}
{// 1. push

  // // 作用：像数组的末尾添加一项或多项元素
  // // 参数：要添加的项
  // // 返回值：新数组的长度
  // // 是否改变原数组：改变
  // var ary = ['a', 'b', 'c'];
  // var res = ary.push('d', 'e');
  // console.log(ary);  // ["a", "b", "c", "d", "e"]
  // console.log(res);  // 5
}

{// 2. pop  
  // // 作用：删除数组的最后一项
  // // 参数：无
  // // 返回值：被删除的项
  // // 是否改变原数组：改变
  // var ary = ['1', '2', '3'];
  // var res = ary.pop();
  // console.log(ary);  // ['1','2']
  // console.log(res);  // 3
}

{  // 3. shift

  // // 作用：删除数组的首项
  // // 参数：无
  // // 返回值：被删除的项
  // // 是否改变原数组：改变
  // var ary = ['a', 'b', 'c'];
  // var res = ary.shift();
  // console.log(ary);  // ['b','c']
  // console.log(res);  // a
}
{  // 4. unshift

  // // 作用：向数组的开头添加一或多项
  // // 参数：要添加的项，多项用','隔开
  // // 返回值：新数组的长度
  // // 是否改变原数组：改变
  // var ary = ['a', 'b', 'c'];
  // var res = ary.unshift('d', 'e');
  // console.log(ary);  // ["d", "e", "a", "b", "c"]
  // console.log(res);  // 5
}

{// 5. splice  删除一部分，增加一部分。最后可能有三个效果，增加，删除和更改。但是最为重要的是，他是注重删除功能的。

  // 作用：增删改
  // 参数：ary.splice(index, howmany, item1, ....., itemX)
  // 返回值：删除的项，数组的形式，如果不删除，那么返回空数组。
  // 是否改变原数组：改变
  {// 增加的功能
    // // ary.splice(n, 0, x，......, y);
    // // 从数组的索引n开始，删除0项, 在索引n的前边增加新的项，第三个参数开始都是用来填补删除的项目位置的

    // var ary = [1, 2, 3, 4, 5];
    // var res = ary.splice(1, 0, 6, 7);
    // console.log(ary);  // [1, 6, 7, 2, 3, 4, 5]
    // console.log(res);  // [] 删除0项，返回一个空数组
  }

  {// 删除的功能
    // ary.splice(n, m);
    // // 从数组的索引n开始，删除m项

    // var ary = [1, 2, 3, 4, 5];
    // var res = ary.splice(1, 2);
    // console.log(ary);  // [1，4，5]
    // console.log(res);  // [2，3]  
  }

  {// 修改的功能，可以修改一项，也可以修改几项
    // ary.splice(n, m, x);
    // // 从数组的索引n开始，删除m项，把x添加到索引n前边

    // var ary = [1, 2, 3, 4, 5];
    // var res = ary.splice(1, 2, 6, 7);
    // console.log(ary);  // [1, 6, 7, 4, 5]
    // console.log(res);  // [2，3] 
    // //模拟 push(尾部添加)  和push二者返回值不同
    // ary.splice(ary.length, 0, 新的项) //因为splice是在索引前添加，所以第一个参数为ary.length
    // //模拟 pop(尾部删除)
    // ary.splice(arr.length - 1, 1);
    // //模拟 shift(首项删除)
    // ary.splice(0, 1)
    // //模拟 unshift(首项添加) 和unshilft二者返回值不同
    // ary.splice(0, 0, 新的项)
    // // 此外

    // ary.splice(n)  // 表示从索引n开始删除到末尾
    // ary.splice(0)  // 删除整个数组 有克隆数组的效果，利用返回值
  }



}

{  // 6. slice  注重按照前后位置，取值，但是不包括最后的位置。

  // // 作用：截取数组(复制数组)
  // // 参数：array.slice(start, end)
  // // 返回值：返回一个新数组
  // // 是否改变原数组：不改变
  // var ary = [1, 2, 3, 4, 5];
  // var res = ary.slice(1, 3);
  // var res2 = ary.slice(-3, -1)
  // console.log(ary);  // [1,2,3,4,5]
  // console.log(res);  // [2,3]
  // console.log(res2)  //[3,4] slice支持负参数，从最后一项开始算起，-1为最后一项，-2为倒数第二项

  // slice(n) //从索引n开始复制到最后一项
  // // slice() 、 slice(0)  //复制整个数组
}

{  // 7. join

  // // 作用：用指定的分隔符将数组每一项拼接为字符串
  // // 参数：指定的分隔符, 如果省略该参数，则使用逗号作为分隔符
  // // 返回值：拼接好的字符串
  // // 是否改变原数组：不改变
  // var ary = [1, 2, 3, 4, 5];
  // var res = ary.join('-');
  // console.log(ary);  // [1, 2, 3, 4, 5]
  // console.log(res);  // 1-2-3-4-5
}

{// 8. concat

  // // 作用：用于连接两个或多个数组
  // // 参数：参数可以是具体的值，也可以是数组对象。可以是任意多个
  // // 返回值：返回连接后的新数组
  // // 是否改变原数组：不改变
  // var ary = [1, 2, 3, 4, 5];
  // var res = ary.concat(6, 7);
  // var res2 = ary.concat(6, [7, 8]);
  // var res3 = ary.concat(6, [7, [8, 9]]);
  // var res4 = ary.concat();
  // console.log(ary);  // [1, 2, 3, 4, 5]
  // console.log(res);  // [1, 2, 3, 4, 5, 6, 7]
  // console.log(res2);  //[1, 2, 3, 4, 5, 6, 7, 8]
  // console.log(res3)  // [1, 2, 3, 4, 5, 6, 7, [8,9]]  concat() 如果操作的参数是数组，那么添加的是数组中的元素，而不是数组。 如果是二维(或以上)数组，concat只能'拆开'一层数组
  // console.log(res4) // [1, 2, 3, 4, 5]  如果concat()没有参数或者参数是空数组也可以达到克隆数组的目的
}

{  // 9. sort

  // // 作用：对数组的元素进行排序
  // // 参数：可选(函数) 规定排序规则 默认排序顺序为按字母升序
  // // 返回值：排好序的原数组
  // // 是否改变原数组：改变
  // var ary = [1, 5, 7, 9, 12, 24, 56, 87, 92];
  // var ary2 = [1, 5, 7, 9, 12, 24, 56, 87, 92];
  // var ary3 = [1, 5, 7, 9, 12, 24, 56, 87, 92];
  // var res = ary.sort();
  // var res2 = ary2.sort(function (a, b) {
  //   return a - b;
  // })
  // var res3 = ary3.sort(function (a, b) {
  //   return b - a;
  // })
  // // sort的参数函数总的形参a,b就是数组排序时候的相邻比较的两项
  // console.log(res);  // [1, 12, 24, 5, 56, 7, 87, 9, 92]
  // console.log(res2); // [1, 5, 7, 9, 12, 24, 56, 87, 92]
  // console.log(res3); // [92, 87, 56, 24, 12, 9, 7, 5, 1]
}

{  // 10. reverse

  // // 作用：倒序数组
  // // 参数：无
  // // 返回值：倒序后的原数组
  // // 是否改变原数组：改变
  // var ary = [1, 2, 3, 4, 5];
  // var res = ary.reverse();
  // console.log(ary);  // [5, 4, 3, 2, 1]
  // console.log(res);  // [5, 4, 3, 2, 1]
}
{// 11. indexOf

  // // // 作用：查找指定元素的位置
  // // // 参数：array.indexOf(item, start) item: 查找的元素 start: 字符串中开始检索的位置
  // // // 返回值：返回第一次查到的索引，未找到返回 - 1
  // // // 是否改变原数组： 不改变
  // // var ary = [1, 2, 3, 4, 5]
  // // var res = ary.indexOf(3);
  // // console.log(ary);  // [1,2,3,4,5]
  // // console.log(res);  // 2
  // var ary = ['a', 'b', 'c', 'd', 'c'];
  // var res = ary.indexOf('c', 3);
  // console.log(res) // 4

}
// 第二个参数不太懂。

{// 12. lastIndexOf
  // // 作用：查找指定元素最后出现的位置
  // // 参数：array.indexOf(item, start) item: 查找的元素 start: 字符串中开始检索的位置
  // // 返回值：返回查到的元素的索引，未找到返回 - 1
  // // 是否改变原数组：不改变
  // var ary = ['a', 'b', 'c', 'd', 'c'];
  // var res = ary.lastIndexOf('c', 3);
  // var res2 = ary.lastIndexOf('c', 1);
  // console.log(res); // 2
  // console.log(res2); // -1
}
// 第二个参数不太懂。

{  // 13. forEach

  // // 作用：循环遍历数组每一项
  // // 参数：函数 ary.forEach(function (item, index, ary) { }) item: 每一项 index: 索引 ary: 当前数组
  // // 返回值：无
  // // 是否改变原数组： 不改变
  // var ary = ['a', 'b', 'c']
  // var res = ary.forEach(function (item, index, ary) {
  //   console.log(item, index, ary);
  //   /*  a 0 ["a", "b", "c"]
  //       b 1 ["a", "b", "c"]
  //       c 2 ["a", "b", "c"]
  //   */
  //   return item;
  // })
  // console.log(res)  // undefined  无返回值

}


{  // 14. map

  // // 作用：数组中的元素为原始数组元素调用函数处理后的值
  // // 参数：函数 ary.map(function (item, index, ary) { }) item: 每一项 index: 索引 ary: 当前数组
  // // 返回值：新数组
  // // 是否改变原数组：不改变
  // var ary = ['a', 'b', 'c']
  // var res = ary.map(function (item, index, ary) {
  //   return item + 1;
  // })
  // console.log(res)  // ["a1", "b1", "c1"]
}

{  // 15. filter

  // // 作用：创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
  // // 参数：函数 ary.filter(function (item, index, ary) { }) item: 每一项 index: 索引 ary: 当前数组
  // // 返回值：新数组
  // // 是否改变原数组：不改变
  // var ary = [1, 2, 3, 4, 5, 6]
  // var res = ary.filter(function (item) {
  //   return item < 3;
  // })
  // console.log(res)  // [1,2]

}

{  // 16. every

  // // 作用：检测数组所有元素是否都符合指定条件
  // // 参数：函数 ary.every(function (item, index, ary) { }) item: 每一项 index: 索引 ary: 当前数组
  // // 返回值：布尔值
  // // 是否改变原数组： 不改变
  // var ary = [1, 2, 3, 4, 5, 6]
  // var res = ary.every(function (item) {
  //   return item < 3;
  // })
  // var res2 = ary.every(function (item) {
  //   return item < 7;
  // })
  // console.log(res)  // false;
  // console.log(res2)  // true;
  // // 1 如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测。
  // // 2 如果所有元素都满足条件，则返回 true。
}

{  // 17. some
  // // 作用：检测数组中的元素是否满足指定条件
  // // 参数：函数 ary.some(function (item, index, ary) { }) item: 每一项 index: 索引 ary: 当前数组
  // // 返回值：布尔值
  // // 是否改变原数组：不改变
  // var ary = [1, 2, 3, 4, 5, 6]
  // var res = ary.some(function (item) {
  //   return item < 3;
  // })
  // console.log(res)  // true;
  // // 1 如果有一个元素满足条件，则表达式返回 true, 剩余的元素不会再执行检测。
  // // 2 如果没有满足条件的元素，则返回 false。
}

// es6新增方法：
{ //静态方法 of 
  // let arr = Array.of(3, 4, 7, 9, 11);
  // console.log('arr=', arr); // [3,4,7,9,11]

  // let empty = Array.of();
  // console.log('empty', empty); // []
}

{//静态方法 from 
  // let p = document.querySelectorAll('p');
  // let pArr = Array.from(p);
  // console.dir(pArr);

  // pArr.forEach(function (item) {
  //   console.log(item.textContent);
  // });
  // // ES6
  // // mukewang
  // // 还具有转化的作用。
  // console.log(Array.from([1, 3, 5], function (item) { return item * 2 }));//  [2,6,10]
}

{ // fill 方法
  // let arr = [1, 'a', undefined]
  // console.log('fill-7', arr.fill(7));//[7, 7, 7]
  // console.log('fill,pos', ['a', 'b', 'c'].fill(7, 1, 3)); //["a", 7, 7]
  // console.log('fill,pos', ['a', 'b', 'c'].fill(7, 1, 2)); //["a", 7, "c"]
  // console.log('fill,pos', ['a', 'b', 'c'].fill(7, 1, 1)); //["a", "b", "c"]
  // // 第二三个参数分别是：起止位置。
  // console.log(arr);//[7, 7, 7]
  // // 原数组发生了改变。
}

{ // 数组的三个适用于遍历的方法
  // for (let index of ['1', 'c', 'ks'].keys()) {
  //   console.log('keys', index);
  // }
  // for (let value of ['1', 'c', 'ks'].values()) {
  //   console.log('values', value);
  // }
  // for (let [index, value] of ['1', 'c', 'ks'].entries()) {
  //   console.log('values', index, value);
  // }
  // 打印如下：
  // keys 0
  // keys 1
  // keys 2
  // values 1
  // values c
  // values ks
  // values 0 1
  // values 1 c
  // values 2 ks

  // console.log(['1', 'c', 'ks'].keys());
  // console.log(['1', 'c', 'ks'].values());
  // console.log(['1', 'c', 'ks'].entries());
}

{ // copyWithin 方法
  // let arr = [1, 2, 3, 4, 5]
  // console.log(arr.copyWithin(0, 3, 4));// [4, 2, 3, 4, 5]

  // console.log(arr);// [4, 2, 3, 4, 5]

  // // 数组内部替换的方法。
  // // 第一个参数：替换位置
  // // 第二三个参数，表示拿起始位置的值。去替换第一个位置的参数位置。终止位置不包括本数。
  // // 原数组发生改变。
}


{ // find 和 findindex方法
  // console.log([1, 2, 3, 4, 5, 6].find(function (item) { return item > 3 }));// 4
  // console.log([1, 2, 3, 4, 5, 6].findIndex(function (item) { return item > 3 }));// 3
}

{// includes 方法
  // console.log('number',[1,2,NaN].includes(1)); // true
  // console.log('number',[1,2,NaN].includes(NaN)); // true
  // // 比indexof的方法更强大。
}


// 总结以上获得新的数据的方法：总结的不好，需要重新总结一下。
// 获得新数组：splice(),concat(),fill(),copyWithin()
// 获得新字符串:join()