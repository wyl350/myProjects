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
  let arr = [1, 'a', undefined]
  console.log('fill-7', arr.fill(7));//[7, 7, 7]
  console.log('fill,pos', ['a', 'b', 'c'].fill(7, 1, 3)); //["a", 7, 7]
  console.log('fill,pos', ['a', 'b', 'c'].fill(7, 1, 2)); //["a", 7, "c"]
  console.log('fill,pos', ['a', 'b', 'c'].fill(7, 1, 1)); //["a", "b", "c"]
  // 第二三个参数分别是：起止位置。
  console.log(arr);//[7, 7, 7]
  // 原数组发生了改变。
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
