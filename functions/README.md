## js 模块化
js 语言是天生不支持模块化的。

+ 在浏览器中也可以像在 Node 中的模块一样来进行编程
* `<script>` 标签来引用加载，而且你还必须考虑加载的顺序问题，以下的第三方库是可以解决这个问题的。
但是你要考虑全局变量的问题。这是浏览器的特性。而node的变量是模块内变量。

* require.js 第三方库 AMD   老外开发
* sea.js     第三方库 CMD   国人开发

node如何开启ecmaScript 6 module的支持。

## 
npm 5之后会自动保存--save这个参数。增加了package-lock.json 这个文件。这个文件是可以锁定版本的，不会自动更新到最新的版本的。
`npm i npm --global`
npm 命令升级 npm 包管理器


