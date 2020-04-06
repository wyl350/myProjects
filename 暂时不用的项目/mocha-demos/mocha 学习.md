1. expect断言的优点是很接近自然语言，下面是一些例子。
/ 相等或不相等
expect(4 + 5).to.be.equal(9);
expect(4 + 5).to.be.not.equal(10);
expect(foo).to.be.deep.equal({ bar: 'baz' });

// 布尔值为true
expect('everthing').to.be.ok;
expect(false).to.not.be.ok;

// typeof
expect('test').to.be.a('string');
expect({ foo: 'bar' }).to.be.an('object');
expect(foo).to.be.an.instanceof(Foo);

// include
expect([1,2,3]).to.include(2);
expect('foobar').to.contain('foo');
expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo');

// empty
expect([]).to.be.empty;
expect('').to.be.empty;
expect({}).to.be.empty;

// match
expect('foobar').to.match(/^foo/);








讲义
$ mocha add.test.js

shell 通配符
$ mocha spec/{my,awesome}.js
$ mocha test/unit/*.js
node 通配符
$ mocha 'test/**/*.@(js|jsx)'
等价于 shell 通配符
$ mocha test/{,**/}*.{js,jsx}

$ mocha file1 file2 file3
$ mocha
$ mocha --recursive

## 命令行参数
1. 查看Mocha的所有命令行参数。
    1. --help, -h
        ```bash
        mocha --help
        ```
1. 用来指定测试报告的格式，默认是 spec 格式。
    1. --reporter, -R
        ```bash
        $ mocha
        # 等同于
        $ mocha --reporter spec
        ```
    1. 官网提供的其他格式：https://mochajs.org/#reporters
        ```bash
        $ mocha --reporter tap
        1..2
        ok 1 加法函数的测试 1 加 1 应该等于 2
        ok 2 加法函数的测试 任何数加0应该等于自身
        # tests 2
        # pass 2
        # fail 0
        ```
    1. --reporters参数可以显示所有内置的报告格式，一般情况下默认只有spec一种。
    1. 使用mochawesome模块，可以生成漂亮的HTML格式的报告。
        ```bash
        $ npm install --save-dev mochawesome
        $ ../node_modules/.bin/mocha --reporter 
        ```
        > 上面代码中，mocha命令使用了项目内安装的版本，而不是全局安装的版本，因为mochawesome模块是安装在项目内的。然后，测试结果报告就在mochaawesome-reports子目录生成。
1. 打开--growl参数，就会将测试结果在桌面显示。
    1. --growl, -G
    1. `$ mocha --growl`
1. 参数用来监视指定的测试脚本。只要测试脚本有变化，就会自动运行Mocha。
    1. --watch，-w
    1. `$ mocha --watch`
1. 参数指定只要有一个测试用例没有通过，就停止执行后面的测试用例。这对持续集成很有用。
    1. -bail, -b
    1. $ mocha --bail
1. 参数用于搜索测试用例的名称（即it块的第一个参数），然后只执行匹配的测试用例。
    1. -grep, -g
    1. $ mocha --grep "1 加 1"
1. --invert参数表示只运行不符合条件的测试脚本，必须与--grep参数配合使用。
    1. --invert, -i
    1. $ mocha --grep "1 加 1" --invert
## 配置文件mocha.opts
> Mocha允许在test目录下面，放置配置文件mocha.opts，把命令行参数写在里面。请先进入demo03目录，运行下面的命令。
把这三个参数写入test目录下的mocha.opts文件。
```bash
--reporter tap
--recursive
--growl
```
```bash
$ mocha
效果等同于：
$ mocha --recursive --reporter tap --growl
```
如果测试用例不是存放在test子目录，可以在mocha.opts写入以下内容。
```bash
server-tests
--recursive
```

