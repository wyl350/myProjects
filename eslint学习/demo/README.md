# 
总体上，使用规则是非常的简单的，只要是全局安装，在需要检查代码的项目配置配置文件就能使用了。
`eslint index.js`
阮一峰教程： https://www.bookstack.cn/read/es6-3rd/spilt.10.docs-style.md

下面就是阮一峰的全部教程： 
```bash
ESLint 的使用
ESLint 是一个语法规则和代码风格的检查工具，可以用来保证写出语法正确、风格统一的代码。

首先，安装 ESLint。

$ npm i -g eslint
然后，安装 Airbnb 语法规则，以及 import、a11y、react 插件。

$ npm i -g eslint-config-airbnb
$ npm i -g eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
最后，在项目的根目录下新建一个.eslintrc文件，配置 ESLint。


上面下载的应该就是模板文件，应用这个模板就能快速的生成一个规则。

{
  "extends": "eslint-config-airbnb"
}
现在就可以检查，当前项目的代码是否符合预设的规则。

index.js文件的代码如下。

var unusued = 'I have no purpose!';
function greet() {
    var message = 'Hello, World!';
    alert(message);
}
greet();
使用 ESLint 检查这个文件，就会报出错误。

$ eslint index.js
index.js
  1:1  error  Unexpected var, use let or const instead          no-var
  1:5  error  unusued is defined but never used                 no-unused-vars
  4:5  error  Expected indentation of 2 characters but found 4  indent
  4:5  error  Unexpected var, use let or const instead          no-var
  5:5  error  Expected indentation of 2 characters but found 4  indent
✖ 5 problems (5 errors, 0 warnings)
上面代码说明，原文件有五个错误，其中两个是不应该使用var命令，而要使用let或const；一个是定义了变量，却没有使用；另外两个是行首缩进为 4 个空格，而不是规定的 2 个空格。
```

3、安装&配置
eslint可以用npm 安装依赖

npm install -g eslint
1
然后可以在.eslintrc的文件进行配置:

然后可以在.eslintrc的文件进行配置:

env: 指定代码的运行环境
globals：额外的全局变量
parserOptions: 指定 JavaScript 相关的选项。ecmaVersion 指定用哪个ECMAScript 的版本，默认是 3 和 5。
rules: 具体检查的规则，不设置则不会检查


```js

{
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "parserOptions": {
    "ecmaVersion": 6
  },
  "rules": {
    "indent": ["error", 2],
    "no-mixed-spaces-and-tabs": "error"
    "camelcase": "error",
    "eqeqeq": "warn",
    "curly": "error",
    "no-undef": "error",
    "no-unused-vars": "warn",
    "max-params": "warn"
  }
}
```


## 具体配置详细解释
{
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "parserOptions": {
    "ecmaVersion": 6
  },
  "rules": {
    "indent": ["error", 2],
    "no-mixed-spaces-and-tabs": "error",
    "camelcase": "error",
    "eqeqeq": "warn",
    "curly": "error",
    "no-undef": "error",
    "no-unused-vars": "warn",
    "max-params": "warn"
  }
}