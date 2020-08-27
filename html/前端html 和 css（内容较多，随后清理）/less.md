# less

变量 混合 函数

官网： http://lesscss.org/

less显然是需要编译工具的

less 编译工具  koala 
winless
codekit

koala-app.com

参看文章：

我简单看过的一篇文章： https://www.jianshu.com/nb/12103082

我看过的另一篇文章： https://blog.csdn.net/weixin_44198965/article/details/90240858

第三篇文章： https://blog.csdn.net/m0_38099607/category_6963154.html

复习方法： 先看上面的第二篇文章，之后看第一篇文章。就基本掌握的差不多了。

## 在vscode中使用less

安装需要的条件就是，在服务端使用需要安装配置node.js。

在vscode扩展中找到Easy LESS

在vscode中ctrl + shift + p 找到settings.json 进行自定义配置

在配置中加入以下内容，注意，要符合json的格式，后面的注释内容是不能加入其中的。

```js
"less.compile": {
    "compress": false, // true => remove surplus whitespace 是否删除多余空白字符
    "sourceMap": false, // true => generate source maps (.css.map files) 是否创建文件目录树，true表示自动生成一个.css.map文件 ${workspaceRoot} \\css ${workspaceRoot} 代表当前项目的根目录，后面路径自行配置。 less和css文件之间的对应关系
    "out": true, // false => DON'T output .css files (overridable per-file, see below) 是否编译输出文件
    //"outExt":".wxss",//输出文件的后缀，默认为.css 小程序中也是用less
}
```

之后在完成less文件时，保存的时候，就会自动生成css文件了，然后使用html引用该less文件即可。

## 在html中直接引用less文件

特别注意：不过要在服务器环境下执行html文档 , 不能直接双击打开文档执行 , 因为less.js 会发送ajax请求;  也就是说，必须在**服务器的状态下**才能使得html文件直接引用 less文件。

```js
<link rel="stylesheet/less" href="test.less">
<script src="./node_modules/less/dist/less.js"></script>
```

所以，一般情况下，使用 file 协议，就应当采用直接引用css文件的模式。

```js
<link rel="stylesheet" type="text/css" href="test.css">
```

## 变量

普通的变量

选择器和属性名

定义多个相同名称的变量时，当前作用域向上搜索。

## 混合

