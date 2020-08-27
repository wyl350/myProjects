# docsify
本页地址：http://me.52fhy.com/learn-markdown-generate-tool/#/docsify?id=%e8%87%aa%e5%ae%9a%e4%b9%89%e5%af%bc%e8%88%aa%e6%a0%8f

官网： https://docsify.js.org/#/  
代码块：https://github.com/docsifyjs/docsify
> 依赖 node.js 环境。
特点：
1. 扩展性非常好，有社区支持。支持插件。
1. 目录需要手动配置。
1. 发布无需编译生成 html，动态解析 md 文件。
## 安装
全局安装：`npm i docsify-cli -g`

包内安装也很好：`npm i docsify-cli`

## 如何使用
创建并初始化项目： 
``` 
$ mkdir test-docsify
$ cd test-docsify

# init project
$ docsify init ./docs
```
执行完毕，生成 docs 目录。里面有3个文件：

- .nojekyll：让gitHub不忽略掉以 _ 打头的文件
- index.html：整个网站的核心文件
- README.md：默认页面

接下来预览一下效果： 
``` 
$ docsify serve docs
```
会在本地运行server服务，我们打开浏览器，输入：http://localhost:3000 即可看到 demo 页面。项目的目录结构示例：
```
.
└── docs
    ├── README.md
    ├── guide.md
    └── zh-cn
        ├── README.md
        └── guide.md
```
实际路由对应关系是：
```
docs/README.md        => http://domain.com
docs/guide.md         => http://domain.com/guide
docs/zh-cn/README.md  => http://domain.com/zh-cn/
docs/zh-cn/guide.md   => http://domain.com/zh-cn/guide
```
## 增加一个页面
我们新增 guide.md 文件作为示例：
```
## docsify

官网： https://docsify.js.org/#/  
代码块：https://github.com/docsifyjs/docsify  

> 依赖 node.js 环境。

### 安装

全局安装：

npm i docsify-cli -g


### 如何使用

创建并初始化项目：
```
我们启动 server 预览效果：
```
$ docsify serve docs
```
效果截图： 
>server 启动后，我们修改文件保存后，浏览器会实时刷新。

## Sidebar  
我们可以给文档增加左侧菜单。菜单文件名是_sidebar.md。格式要求示例：
```

<!-- docs/_sidebar.md -->

* [Home](/)
* [Guide](guide.md)
* [About](about.md "关于我，这是title tag")
```
括号里可以增加 title tag，通常用于SEO。

保存后需要修改 index.html 添加loadSidebar: true以启用左侧菜单：
```
window.$docsify = {
  loadSidebar: true,
  subMaxLevel: 3,
  name: '',
  repo: '',
  auto2top: true,
  search: 'auto'
}
```
其中：
- loadSidebar：是否显示左侧菜单
- subMaxLevel：配置菜单层级，默认仅显示一级
- name：配置项目名
- repo：配置代码库地址
- auto2top：更改路由时自动滚动到屏幕顶部
- search：配置启用搜索功能。需要加载对应js文件。后面有说明。

效果：

也可以增加分组菜单，必须用tag键留空格，否则层级是相同的。示例：
## 配置高亮
docsify使用 Prism 突出显示页面中的代码块。默认情况下，它仅支持CSS，JavaScript和HTML。你可以使用 Prism 加载其他语言：
```
<script src="//unpkg.com/docsify/lib/docsify.min.js"></script>
<script src="//unpkg.com/prismjs/components/prism-bash.min.js"></script>
<script src="//unpkg.com/prismjs/components/prism-php.min.js"></script>
<script src="//unpkg.com/prismjs/components/prism-java.min.js"></script>
<script src="//unpkg.com/prismjs/components/prism-go.min.js"></script>
<script src="//unpkg.com/prismjs/components/prism-c.js"></script>
<script src="//unpkg.com/prismjs/components/prism-asm6502.js"></script>
<script src="//unpkg.com/prismjs/components/prism-makefile.js"></script>
```
从这个库里获取更多选项支持：https://github.com/PrismJS/prism/tree/gh-pages/components。

## 搜索
修改 index.html ，头部引入：
```
<script src="//unpkg.com/docsify/lib/plugins/search.js"></script>
```
然后配置里开启搜索：
```
search: 'auto'
```
## copy-code
如果需要支持代码后面显示复制按钮，可以引入该插件：
```
<script src="//unpkg.com/docsify-copy-code"></script>
```
无需额外配置。
## 自定义导航栏
参考：https://docsify.js.org/#/custom-navbar

## 主题修改
仅需替换 index.html 里的vue：
```
<link rel="stylesheet" href="//unpkg.com/docsify/lib/themes/vue.css">
```
可用的主题：
```
<link rel="stylesheet" href="//unpkg.com/docsify/lib/themes/vue.css">
<link rel="stylesheet" href="//unpkg.com/docsify/lib/themes/buble.css">
<link rel="stylesheet" href="//unpkg.com/docsify/lib/themes/dark.css">
<link rel="stylesheet" href="//unpkg.com/docsify/lib/themes/pure.css">
```
其它主题： docsify-themeable ：A delightfully simple theme system for docsify.

参考：https://docsify.js.org/#/themes

## 配置参考
参考：https://docsify.js.org/#/configuration

## 插件参考
参考：https://docsify.js.org/#/plugins

## 发布到GitHub Pages
参考：https://docsify.js.org/#/deploy
## 示例项目
- 快速入门 - docsify https://docsify.js.org/#/quickstart
- 介绍 — Vue.js https://cn.vuejs.org/v2/guide/
- Linux C 编程一站式学习 http://me.52fhy.com/linux-c/#/