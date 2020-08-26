学习测试，要先从这里开始


这个人的教程比较容易快速上手： https://www.cnblogs.com/sampapa/p/6963936.html

阮一峰的教程比较全面： http://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html

## 钩子函数

```js
describe('test', function() {
  // 在本测试块的所有测试用例之前执行且仅执行一次
  before(function() {
    
  });
  // 在本测试块的所有测试用例之后执行且仅执行一次
  after(function() {

  });

  // 在测试块的每个测试用例之前执行（有几个测试用例it，就执行几次）
  beforeEach(function() {

  });
  // 在测试块的每个测试用例之后执行（同上）
  afterEach(function() {

  });

  // 测试用例
  it('test item1', function () {

  })
});
```

##  进阶三：在进阶二中周期代码是ES6风格，需要安装babel模块转码
```js
// 这里分两种情况：1.全局安装   2.局部安装

// 如果是全局方式安装的babel，那么我们也要使用全局的Mocha来调用babel-core模块

// $ npm install -g babel-core babel-preset-es2015
// $ mocha --compilers js:babel-core/register
// 但如果是局部方式安装的babel，那么我们就要使用局部的Mocha来调用babel-core模块

// $ npm install --save-dev babel-core babel-preset-es2015
// $ ../node_modules/mocha/bin/mocha --compilers js:babel-core/register
// 为什么呢？因为Mocha是根据自身的路径来寻找babel模块的，所以要全局对应全局，局部对应局部

// 这里少了很重要的一步：在测试之前，需要配置babel转码规则，在项目根目录，记住‘一定要是根目录’，新建.babelrc文件，这个文件是供babel使用的

// // .babelrc
// {
//   "presets": [ "es2015" ] //这里制定使用es2015规则转码
// }
```

## 终端命令
```js
// mocha命令后面紧跟测试脚本的路径和文件名，可以指定多个测试脚本。
// mocha file1 file2 file3

// 为了改变这种行为，就必须加上--recursive参数，这时test子目录下面所有的测试用例----不管在哪一层----都会执行。
```