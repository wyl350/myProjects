# Bootstrap4 导航栏

https://www.runoob.com/bootstrap4/bootstrap4-navs.html

导航栏一般放在页面的顶部。

我们可以使用 .navbar 类来创建一个标准的导航栏，后面紧跟: .navbar-expand-xl|lg|md|sm 类来创建响应式的导航栏 (大屏幕水平铺开，小屏幕垂直堆叠)。

导航栏上的选项可以使用 <ul> 元素并添加 class="navbar-nav" 类。 然后在 <li> 元素上添加 .nav-item 类， <a> 元素上使用 .nav-link 类:

# 导航
## 总体结构

### ul: .nav  

对齐方式： 
1. 默认为左对齐
1. .justify-content-center  居中对齐
1. .justify-content-end  右对齐
导航方向：
1. 默认为水平导航
1. 垂直导航：flex-column
样式：
1. .nav-tabs 选项卡样式
1. .nav-pills 胶囊样式
设置导航等宽：
1. .nav-justified
### li: .nav-item
### a: .nav-link
设置下拉菜单：在 li 标签内部，a 标签后面设置一个 div 标签，该div 标签内部 设置 a 标签。
div: .dropdown-menu
a: .dropdown-item


## 动态选项卡的设置
### tab 动态选项卡
第一步：如果你要设置选项卡是动态可切换的，可以在每个链接上添加 data-toggle="tab" 属性。 然后在每个选项对应的内容的上添加 .tab-pane 类。
```html
<!-- Nav tabs -->
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" data-toggle="tab" href="#home">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-toggle="tab" href="#menu1">Menu 1</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-toggle="tab" href="#menu2">Menu 2</a>
  </li>
</ul>
```
第二步：如果你希望有淡入效果可以在 .tab-pane 后添加 .fade类:
```html
<!-- Tab panes -->
<div class="tab-content">
  <div class="tab-pane active container" id="home">...</div>
  <div class="tab-pane container" id="menu1">...</div>
  <div class="tab-pane container" id="menu2">...</div>
</div>
```
### pills 动态选项卡
```html
<!-- Nav pills -->
<ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link active" data-toggle="pill" href="#home">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-toggle="pill" href="#menu1">Menu 1</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-toggle="pill" href="#menu2">Menu 2</a>
  </li>
</ul>
```

```html
<!-- Tab panes -->
<div class="tab-content">
  <div class="tab-pane active container" id="home">...</div>
  <div class="tab-pane container" id="menu1">...</div>
  <div class="tab-pane container" id="menu2">...</div>
</div>
```






# 导航栏
## 总体结构
导航到导航栏的扩展，有一定的变化。不是在 div 容器标签内直接放置 ul 标签，而是在ul标签的外部增加一个nav标签，
### nav：.navbar
导航方向：
1. 默认是垂直的导航栏，可见，导航栏一般默认是垂直方向的。
1. .navbar-expand-xl|lg|md|sm  可以设置水平的导航栏，但是缩小到设置的值得时候，则会编程垂直的导航。
颜色：
1. .bg-primary
1. .bg-success
1. .bg-info
1. .bg-warning
1. .bg-danger
1. .bg-secondary
1. .bg-dark
1. .bg-light
品牌logo：.navbar-brand 类用于高亮显示品牌/Logo:
使用一个 a 标签来承担。
`<a class="navbar-brand" href="#">Logo</a>`
折叠导航栏
通常，小屏幕上我们都会折叠导航栏，通过点击来显示导航选项。要创建折叠导航栏，可以在按钮上添加 class="navbar-toggler", data-toggle="collapse" 与 data-target="#thetarget" 类。然后在设置了 class="collapse navbar-collapse" 类的 div 上包裹导航内容（链接）, div 元素上的 id 匹配按钮 data-target 的上指定的 id:
### ul: .navbar-nav
### li: .nav-item
### a: .nav-link
导航栏上可以设置下拉菜单：
```html
<div class="dropdown-menu">
  <a class="dropdown-item" href="#">Link 1</a>
  <a class="dropdown-item" href="#">Link 2</a>
  <a class="dropdown-item" href="#">Link 3</a>
</div>
```

导航栏的表单与按钮
导航栏的表单 <form> 元素使用 class="form-inline" 类来排版输入框与按钮：



导航栏文本
使用 .navbar-text 类来设置导航栏上非链接文本，可以保证水平对齐，颜色与内边距一样。



固定导航栏
导航栏可以固定在头部或者底部。

我们使用 .fixed-top 类来实现导航栏的固定：



# Bootstrap4 面包屑导航（Breadcrumb）
面包屑导航是一种基于网站层次信息的显示方式。以博客为例，面包屑导航可以显示发布日期、类别或标签。它们表示当前页面在导航层次结构内的位置，是在用户界面中的一种导航辅助。

Bootstrap 中的面包屑导航是一个简单的带有 .breadcrumb class 的无序列表。分隔符会通过 CSS（bootstrap.min.css）中的 ::before 和 content 来添加，下面所示的 class 自动被添加：
```css
.breadcrumb-item + .breadcrumb-item::before {
  display: inline-block;
  padding-right: 0.5rem;
  color: #6c757d;
  content: "/";
}
```
## 列表形式

## 非列表形式