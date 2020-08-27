react脚手架配置文件的位置

如果想自行配置, 可以运行这个命令暴露所有配置文件

```npm run eject```
这里非常可能会出错。

问题： react 使用create-react-app命令创建一个项目，运行npm run eject命令暴露配置文件都报这个错误

原因：主要是脚手架添加 .gitgnore文件，但是却没有本地仓库

错误:

```
Remove untracked files, stash or commit any changes, and try again.
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! react-app@0.1.0 eject: `react-scripts eject`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the react-app@0.1.0 eject script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
```
按照下面的步骤可以解决
```bash
create-react-app my-react-app
cd my-react-app
git init
git add .
git commit -m 'Saving before ejecting'
npm run eject
```


或者可以安装这个 npm 包

`react-app-rewired`

建一个新配置文件来覆盖部分默认的 React 配置.
```bash
知识点：
1，react并不是完整的MVC/MVVM框架，它专注于提供清晰，简介的VIEW（视图）层解决方案。
2，react组件只能通过jsx来进行开发

安装1
npm install -g cnpm --registry=https://registry.npm.taobao.org       ------更换国内的源，阿里，每10分钟同步一次
cnpm i -g create-react-app            --------全局安装脚手架一次
create-react-app test             --------创建项目
cd test　　　　　　　　　　　　　　　--------进入到项目
npm start                             --------启动项目
 
安装2    -------选择一种就行，根据个人习惯
npx create-react-app my-app


```

npx 命令，先检查全局中有没有create-react-app,

　　　如果有， 跟上面安装一样

　　　如果没有，先检查当前文件夹下有没有这个命令， 如果有， 跟上面一样

　　　如果没有自动局部安装 create-react-app ，跟上面一样


```bash
这样就完成了：
网页的入口文件是public/index.html（静态资源）,项目入口文件是src/index.js
以后的精力就可以集中到src下面了。
 
 
内容详解：
src/index.js：
import React from 'react';　　　　------react库核心文件，return中的代码翻译的时候，也需要react，所以必须导入
import ReactDOM from 'react-dom';       -------操作dom
import App from './App';           ------------为了ReactDOM.rennder渲染单文件组件，
import * as serviceWorker from './serviceWorker';    serviceWorker.register()    ------为了缓存应用，下次加载应用更快（unregister()不应用）
ReactDOM.render(<App />, document.getElementById('root'));       ------------获取public/index.html的dom节点,然后渲染App组件
 
src/App.js   ---------根组件只有一个，想扩展的时候在App.js里面写一个<child/>，然后class child from...就跟上面一样了，这样就可以一直写下去了。
```
react导出方式对应的导入方式  　　　　　　----------es6导入导出方式

　　import React from "react";

　　import {Component} from "react";

　　//react 库导出 export default react

　　//react 库导出 var Compoennt= React.Compoent ;export {Component}

刚创建完，需要注意的点：

0. <App></App> <App/>

1.组件首字母是大写 会被认为是自定义组件,首字母是小写，会被认为是 原生dom节点

2, 组件最外层需要被一个标签包裹，不能有兄弟节点

3. return (加上小括号,可以回车)

4. 组件可以嵌套

5. 函数式写法(不能有状态)和class 写法 （里面可以写状态）

6. 所有的jsx 语法将会被翻译，React.create("div","child组件")

一直报错：Module not found: Error: Can't resolve 'react-hot-loader/patch'，解决方法:
```
安装：npm install react-hot-loader@next --save
```


