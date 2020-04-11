## 模块化

### 模块作用域问题：

在 Node 中，没有全局作用域，只有模块作用域，外部访问不到内部，内部也访问不到外部，默认都是封闭的。这就是模块导出的作用之所在。

### 模块导入原理

require 优先从缓存加载，这样做的目的是为了避免重复加载，提高模块加载效率。只对模块中的代码加载一次，执行一次。

### 模块导出原理

**module.exports 对象**：在 Node 中，每个模块内部都有一个自己的 module 对象，该 module 对象中，有一个成员叫：exports， 也是一个对象。如果你需要对外导出成员，只需要把导出的成员挂载到 module.exports 中。node内层已经对 module.exports 做出了导出。

**exports 变量**：每次导出接口成员的时候都通过 module.exports.xxx = xxx 的方式很麻烦，所以，Node 为了简化你的操作，专门提供了一个变量：隐藏代码：`var exports = module.exports` ,也就是使用 exports.name='我的名字'，进行简化导出。

**模块导出对象**：每个模块的最后都默认有：`return module.exports` 这么一句，用来导出模块。

## require 标识符

require后面是可以跟两种形式的模块标识：非路径形式的模块标识和路径形式的模块

### 非路径形式的模块标识

主要适用：核心模块和第三方模块

非路径形式的模块查找机制： 优先从缓存加载 -> 核心模块 -> 第三方模块 -> 进入上一级目录找 node_modules,按照这个规则依次往上找，直到磁盘根目录还找不到，最后报错：Can not find moudle xxx 。

#### 核心模块

核心模块的本质也是文件，核心模块文件已经被编译到了二进制文件中了，我们只需要按照require('包名') 的方式来加载就可以了。例如：
1. require('fs')
1. require('http')

#### 第三方模块

凡是第三方模块都必须通过 npm 来下载，使用的时候就可以通过 require('包名') 的方式来进行加载才可以使用。因此，不可能有任何一个第三方包和核心模块的名字是一样的。路径寻找顺序（例如寻找art-template模块，var template = require('art-template')之后）：
1. 先找到当前文件所处目录中的 node_modules 目录
1. node_modules/art-template
1. node_modules/art-template/package.json 文件
1. node_modules/art-template/package.json 文件中的 main 属性
1. main 属性中就记录了 art-template 的入口模块
1. 然后加载使用这个第三方包，实际上最终加载的还是文件
1. 如果 package.json 文件不存在或者 main 指定的入口模块是也没有，则 node 会自动找该目录下的 index.js，也就是说 index.js 会作为一个默认备选项，如果以上所有任何一个条件都不成立，则会进入上一级目录中的 node_modules 目录查找，如果上一级还没有，则继续往上上一级查找，如果直到当前磁盘根目录还找不到，最后报错：can not find module xxx。

### 路径形式的模块

主要适用：自己写的模块，有以下三种形式：
1. ./ 当前目录，不可省略
1. ../ 上一级目录，不可省略
1. /xxx 几乎不用

例如：require('./foo.js')

路径形式的模块查找机制： 优先从缓存加载 -> 按照路径查找，若找不到，最后报错：Can not find moudle xxx 。


