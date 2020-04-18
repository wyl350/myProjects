# Bootstrap4 表单
在本章中，我们将学习如何使用 Bootstrap 创建表单。Bootstrap 通过一些简单的 HTML 标签和扩展的类即可创建出不同样式的表单。

表单元素 <input>, <textarea>, 和 <select> elements 在使用 .form-control 类的情况下，宽度都是设置为 100%。

## 布局
Bootstrap4 表单布局
1. 堆叠表单 (全屏宽度)：垂直方向
1. 内联表单：水平方向
所有内联表单中的元素都是左对齐的。注意：在屏幕宽度小于 576px 时为垂直堆叠，如果屏幕宽度大于等于576px时表单元素才会显示在同一个水平线上。内联表单需要在 <form> 元素上添加 .form-inline类。

## Bootstrap4 表单控件
Bootstrap4 支持以下表单控件：

1. input
Bootstrap 支持所有的 HTML5 输入类型: text
  1. password
  1. datetime
  1. datetime-local
  1. date
  1. month
  1. time
  1. week
  1. number
  1. email
  1. url
  1. search
  1. tel
  1. color
1. textarea
1. checkbox
1. radio
1. select

## Bootstrap Input
## 自定义表单
Bootstrap4 可以自定义一些表单的样式来替换浏览器默认的样式。
如果要自定义一个复选框，可以设置 <div> 为父元素，类为 .custom-control 和 .custom-checkbox，复选框作为子元素放在该 <div> 里头，然后复选框设置为 type="checkbox"，类为 .custom-control-input。

复选框的文本使用 label 标签，标签使用 .custom-control-label 类，label 的 for 属性值需要匹配复选框的 id。

