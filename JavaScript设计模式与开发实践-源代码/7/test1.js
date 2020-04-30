// // 一、jQuery 迭代器
// $.each( [1, 2, 3], function( i, n ){
//   console.log( '当前下标为： '+ i );
//   console.log( '当前值为:' + n );
// });


// // 二、实现自己的迭代器
// var each = function( ary, callback ){
//   for ( var i = 0, l = ary.length; i < l; i++ ){
//     callback.call( ary[i], i, ary[ i ] ); // 把下标和元素当作参数传给callback 函数
//   }
// };

// each( [ 1, 2, 3 ], function( i, n ){
//   alert ( [ i, n ] );
// });


// // 三、内部迭代器和外部迭代器
// var each = function (ary, callback) {
//   for (var i = 0, l = ary.length; i < l; i++) {
//     callback.call(ary[i], i, ary[i]); // 把下标和元素当作参数传给callback 函数
//   }
// };
// var compare = function (ary1, ary2) {
//   if (ary1.length !== ary2.length) {
//     throw new Error('ary1 和ary2 不相等');
//   }
//   each(ary1, function (i, n) {
//     if (n !== ary2[i]) {
//       throw new Error('ary1 和ary2 不相等');
//     }
//   });
//   alert('ary1 和ary2 相等');
// };
// compare([1, 2, 3], [1, 2, 4]); // throw new Error ( 'ary1 和ary2 不相等' );
// // compare([1, 2, 3], [1, 2, 3]); // throw new Error ( 'ary1 和ary2 相等' );



// // 四、外部迭代器
// var Iterator = function (obj) {
//   var current = 0;
//   var next = function () {
//     current += 1;
//   };
//   var isDone = function () {
//     return current >= obj.length;
//   };
//   var getCurrItem = function () {
//     return obj[current];
//   };
//   return {
//     next: next,
//     isDone: isDone,
//     getCurrItem: getCurrItem,
//   }
// };


// var compare = function (iterator1, iterator2) {
//   while (!iterator1.isDone() && !iterator2.isDone()) {
//     if (iterator1.getCurrItem() !== iterator2.getCurrItem()) {
//       throw new Error('iterator1 和iterator2 不相等');
//     }
//     iterator1.next();
//     iterator2.next();
//   }
//   alert('iterator1 和 iterator2 相等');
// }
// var iterator1 = Iterator([1, 2, 3]);
// var iterator2 = Iterator([1, 2, 3]);
// // var iterator2 = Iterator([1, 2, 4]);
// compare(iterator1, iterator2); // 输出：iterator1 和iterator2 相等



// // 五、。jQuery 中提供了$.each` 函数来封装各种迭代行为，以下是jQuery 源码
// $.each = function (obj, callback) {
//   var value,
//     i = 0,
//     length = obj.length,
//     isArray = isArraylike(obj);
//   if (isArray) { // 迭代类数组
//     for (; i < length; i++) {
//       value = callback.call(obj[i], i, obj[i]);
//       if (value === false) {
//         break;
//       }
//     }
//   } else {
//     for (i in obj) { // 迭代object 对象
//       value = callback.call(obj[i], i, obj[i]);
//       if (value === false) {
//         break;
//       }
//     }
//   }
//   return obj;
// };



// // 六、倒序迭代器
// var reverseEach = function (ary, callback) {
//   for (var l = ary.length - 1; l >= 0; l--) {
//     callback(l, ary[l]);
//   }
// };

// reverseEach([0, 1, 2], function (i, n) {
//   console.log(n); // 分别输出：2, 1 ,0
// });


// 七、中止迭代器
// 在 1.4 节 jQuery 的 each 函数里有这样一句：
// if (value === false) {
//   break;
// }
// 这句代码的意思是，约定如果回调函数的执行结果返回 false，则提前终止循环。下面我们把之前的 each 函数改写一下：
var each = function (ary, callback) {
  for (var i = 0, l = ary.length; i < l; i++) {
    if (callback(i, ary[i]) === false) { // callback 的执行结果返回 false，提前终止迭代
      break;
    }
  }
};
each([1, 2, 3, 4, 5], function (i, n) {
  if (n > 3) { // n 大于 3 的时候终止循环
    return false;
  }
  console.log(n); // 分别输出：1, 2, 3
})



// 八、老师讲到的实践中的一个例子
// 这是一个糟糕的例子
var getUploadObj = function () {
  try {
    return new ActiveXObject("TXFTNActiveX.FTNUpload"); // IE 上传控件
  } catch (e) {
    if (supportFlash()) { // supportFlash 函数未提供
      var str = '<object type="application/x-shockwave-flash"></object>';
      return $(str).appendTo($('body'));
    } else {
      var str = '<input name="file" type="file"/>'; // 表单上传
      return $(str).appendTo($('body'));
    }
  }
};


// 这是优化后的例子
var getActiveUploadObj = function () {
  try {
    return new ActiveXObject("TXFTNActiveX.FTNUpload"); // IE 上传控件
  } catch (e) {
    return false;
  }
};
var getFlashUploadObj = function () {
  if (supportFlash()) { // supportFlash 函数未提供
    var str = '<object type="application/x-shockwave-flash"></object>';
    return $(str).appendTo($('body'));
  }
  return false;
};
var getFormUpladObj = function () {
  var str = '<input name="file" type="file" class="ui-file"/>'; // 表单上传
  return $(str).appendTo($('body'));
};

var iteratorUploadObj = function () {
  for (var i = 0, fn; fn = arguments[i++];) {
    var uploadObj = fn();
    if (uploadObj !== false) {
      return uploadObj;
    }
  }
};

var uploadObj = iteratorUploadObj(getActiveUploadObj, getFlashUploadObj, getFormUpladObj); 

// 老师的这个迭代器的方法真的是太好了。任何函数都是可以进入迭代器的，然后在迭代器中完成聚合对象（成员为函数）的调用。


