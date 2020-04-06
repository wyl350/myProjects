const sum = require('./sum.js')


// 一、Matchers（匹配器）
// 1. 相等匹配，这是我们最常用的匹配规则
test('test 1 plus 2 result', () => {
  expect(sum(1, 2)).toBe(3);
})

// 2. 真实性匹配
test('object assignment', () => {
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

// 测试特定值
test('null', () => {
  const n = null;
  expect(n).toBeNull();
  // expect(n).toBeDefined();
  // expect(n).not.toBeUndefined();
  // expect(n).not.toBeTruthy();
  // expect(n).toBeFalsy();
});

// 3. 数字匹配
test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
  // 需要注意的是对于float类型的浮点数计算的时候，需要使用toBeCloseTo而不是 toEqual ，因为避免细微的四舍五入引起额外的问题。
  const value2 = 0.1 + 0.2;
  //expect(value2).toBe(0.3);           This won't work because of rounding error
  expect(value2).toBeCloseTo(0.3); // This works.
  // 为什么0.1+0.2不等于0.3
  // https://u3xyz.com/detail/28
});
// 4. 字符型匹配
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

// 5. 数组类型匹配
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'beer',
];

test('the shopping list has beer on it', () => {
  expect(shoppingList).toContain('beer');
});

// 6. 异常匹配
function compileAndroidCode() {
  // throw new ConfigError('you are using the wrong JDK');
  throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
  expect(compileAndroidCode).toThrow();
  expect(compileAndroidCode).toThrow(Error);
  // You can also use the exact error message or a regexp
  expect(compileAndroidCode).toThrow('you are using the wrong JDK');
  expect(compileAndroidCode).toThrow(/JDK/);
});

// 分组测试
describe('true or false', () => {
  it('should return true when input true', () => {
    let result = 1;
    expect(1).toBe(1);  // toBeTruthy 匹配器
  })
  test('should return false when input fasle', () => {
    let result = 2;
    expect(2).toBe(2);  // toBeFalsy 匹配器
  })
})






// // 二、Asynchronous(测试异步代码)
// // 针对三种情况：
// // (一) 针对回调函数
// const fs = require('fs');

// function fetchData(callback) {
//   fs.readFile('./ceshi2.md', 'utf-8', function (err, data) {
//     callback(data);
//   })
// }

// test('should return data when fetchData request success', (done) => {
//   function callback(data) {
//     console.log(data);
//     expect(data).toEqual('peanut butter')
//     done()
//   }

//   fetchData(callback);
// });
// 以上这一段代码真的是非常的失败，测试完全失败。针对回调函数的测试很失败。





