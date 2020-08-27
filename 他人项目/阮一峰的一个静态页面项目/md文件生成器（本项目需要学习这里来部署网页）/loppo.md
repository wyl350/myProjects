# loppo
官网： https://github.com/ruanyf/loppo

> 依赖 node.js 环境。

特点： 
1. 简单小巧，支持自动生成目录。
1. 不支持插件。
1. 原理是将 Markdown 文件编译生成 html 文件。
1. 生成的页面很美观、大方，支持响应式。

## 安装
全局安装：(当然也是可以在项目内安装的)

```
$ npm install loppo -g
```
## 如何使用
创建项目：
```
$ mkdir test-loppo
$ cd test-loppo
```
项目目录格式示例：
```
|- test-loppo
   |- README.md
   |- docs
      |- page1.md
      |- page2.md
      |- ...
```
然后运行项目：
```
$ loppo 
```
会生成：
```
dist/
chapters.yml
loppo.yml
```
其中 dist是编译输出目录；chapters.yml是自动生成的文档目录，根据当前目录生成，如果增删了源文件，需要删除该文件使得下次重新生成；loppo.yml是配置文件，第一次生成后不会再变更。

## loppo.yml
该文件是配置文件：
```
dir: docs
output: dist
site: Documents
theme: oceandeep
customization: false
themeDir: loppo-theme
direction: ltr
id: test-loppo
```
我们可以手动进行修改。

- dir： 源文件所在目录。默认是当前目录下的 docs目录。
- output：编译输出文件目录。
- site：项目文档名称。可以自定义，显示在页面 title 里。
- theme：主题。默认oceandeep。暂时不知道有没有其他主题。
## 示例项目
- ruanyf/survivor: 博客文集《未来世界的幸存者》 https://github.com/ruanyf/survivor
预览地址：http://survivor.ruanyifeng.com/

- ruanyf/road: 博客文集《前方的路》 https://github.com/ruanyf/road
预览地址：http://road.ruanyifeng.com/

- 飞鸿影~的博客文集 http://wen.52fhy.com/

- 安卓学习笔记 http://android.52fhy.com/