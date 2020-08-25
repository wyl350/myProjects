这是一个 students 项目

有时间研究一下 
router 模块
serve-static 模块
dateformat 模块
dateformater 模块

这个项目是在上一个项目的基础上的另一个继续的项目
基本上没有增加什么内容


以下是单独使用template 模块的设置方法，注意这里的单独使用的设置方法是和express中的方法是不一样的，express中主要的用的是方法，而这里主要用的是属性赋值的方式。

```js
// 设置模板的根目录
template.defaults.root = path.join(__dirname, 'views');

// 导入模板变量
template.defaults.imports.dateFormat = dateFormat;

// 配置模板的默认后缀
template.defaults.extname = '.html';

const html = template('06.art', {
	time: new Date()
});
```