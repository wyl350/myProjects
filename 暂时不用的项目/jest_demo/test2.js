// 测试异步代码的三种实现方式：
// 方法一：回调函数
const fs = require('fs')
const path = require('path')
const fileAddress = path.join(__dirname, 'ceshi.md')




function f(func) {
  fs.readFile(fileAddress, 'utf8', func)
}

test('the data is peanut butter', () => {
  function callback(data) {
    expect(data).toBe('peanut butter');
  }

  fetchData(callback);
});

// test('the data is peanut butter', () => {
//   function callback(data) {
//     expect(data).toBe('peanut butter');
//   }

//   fetchData(callback);
// });

