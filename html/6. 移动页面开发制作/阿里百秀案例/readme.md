#

## 技术选型

方案：响应式布局方案
技术：bootstrap 框架
设计图：本设计图采用 1280px 设计尺寸


## 布局分析

nav
article
aside

## 屏幕划分分析

屏幕缩放发现 中屏幕 和大屏幕布局是一致的，因此我们列定义为 col-md 就可以了，md是大于等于970以上的
md以上作为PC端显示，然后在做出一个 sm xs md 一共就是三个屏幕布局

先写pc端显示

## container 宽度修改

因为效果图采取1280的宽度，而bootstrap里面container 宽度最大为1170px，因此我们需要手动改下container的宽度

