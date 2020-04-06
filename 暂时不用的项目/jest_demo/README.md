教学网址：
https://www.cnblogs.com/Wolfmanlq/p/8012847.html
这个网址有监听的功能：
https://www.cnblogs.com/SamWeb/p/11454923.html


## 快速上手：
1. 新建文件夹然后通过npm 命令安装：
    - npm install --save-dev jest
    - yarn add --dev jest
1. 让我们来测试一个简单两个数字相加的function吧，新建 Sum.js
    ```js
    function sum(a, b){
      return a + b;
    }
    module.exports = sum;
    ```
1. 然后新一个Sum.test.js的文件来测试我们的sum function：
    ```js
    const sum = require('./sum.js')
    test('test 1 plus 2 result', () => {
      expect(sum(1 , 2)).toBe(3);
    })

    test('test 2 plus 2 should equal 4', () => {
      expect(sum(2 , 2)).toBe(4);
    })
    ```
1. 测试文件
    1. Jest识别三种测试文件，
    - .test.js结尾的文件
    - .spec.js结尾的文件
    - 放到__tests__ 文件夹中的文件
        > Jest 在进行测试的时候，它会在整个项目进行查找，只要碰到这三种文件它都会执行。
1. describe()
> 将具体测试分组
```js
const isTrueOrFasle = require('../fun').isTrueOrFasle;

describe('true or false', () => {
    
    it('should return true when input true', () => {
        let result = isTrueOrFasle(true);
        expect(result).toBeTruthy();  // toBeTruthy 匹配器
    })

    test('should return false when input fasle', () => {
        let result = isTrueOrFasle(false);
        expect(result).toBeFalsy();  // toBeFalsy 匹配器
    })
})
```
1. 回调函数的测试
1. 
