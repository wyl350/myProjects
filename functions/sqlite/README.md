# sqlite 教程
## sqlite 的第三方包
正在物色node上面的轻量级嵌入式数据库，作为嵌入式数据库的代表，sqlite无疑是个理想的选择方案。npm上集成sqlite的库主要有两个——sqlite3和realm。

realm是一个理想的选择方案，它最初是为移动app设计的，在node也可以运行的，但是不支持Windows系统。sqlite3是一个专为nodejs设计的，在nodejs上面生态更健壮，因此最终选择sqlite3。

sqlite3几乎支持所有版本的nodejs，同时也可以和nwjs集成。
## 安装
### 

### 下载和解压
> 安装介绍网站：https://blog.csdn.net/qq_16093323/article/details/88226397

按照该网页介绍，下载三个压缩包，只使用其中的两个，一个是工具包，一个是安装包，一个是32位的，一个是64位的，选择其一就可。
64位电脑使用：以下两个压缩包
1. sqlite-dll-win64-x64-3310100
1. sqlite-tools-win32-x86-3310100
sqliteadmin 是安装包

安装包我已经放入了我的百度网盘->我的笔记 中。

这是一个 GUI：http://sqliteadmin.orbmu2k.de/    我已经放入了百度网盘中

### 配置环境变量
我的电脑右击->属性->高级系统设置->高级->环境变量->Path->编辑->新建->[你的安装目录]->ok

特别注意：在配置环境变量的时候，一定要使用编辑，而不是新建。

我家里的电脑的配置：我的数据库程序放在c盘（程序地址被设置成了环境变量），数据库放在D盘。以后可以做的把程序直接放在程序里面，而不用设置环境变量。

### sqlite 的使用
sqlite 命令分为两种：
1. .命令，直接结束
1. 另一种就是sql语句，sql语句必须是以;号结尾

#### 连接数据库
1. 第一种方法：
    1. sqlite3->.open  [路径+数据库名字]
    1. 先进入 sqlite3 的终端，然后输入 .open  [路径+数据库名字]
    以上的这个打开命令，如果没有该文件，是可以新建该文件的。以上就是创建一个名字叫做 demo 的数据库
1. 第二种:直接进行打开 sqlite3 d:demo.db   即 在cmd中直接键入： sqlite3 d:demo.db




#### SQLite .命令    系统命令
.help  帮助
.quit  退出
.exit  退出
.schema  查看表的结构图
.databases  查看当前打开的数据库
.table 查看当前数据库中的数据表


#### SQLite sql命令    sql命令
与关系数据库进行交互的标准 SQLite 命令类似于 SQL。命令包括 CREATE、SELECT、INSERT、UPDATE、DELETE 和 DROP。这些命令基于它们的操作性质可分为以下几种：
##### DDL - 数据定义语言
###### CREATE	创建一个新的表，一个表的视图，或者数据库中的其他对象。
create table stu(id integer,name char,score integer);

###### ALTER	修改数据库中的某个已有的数据库对象，比如一个表。
增加列
alter table stu add column address char
删除列：sqlite是不支持删除列的，所以只能是间接删除
1. 依据旧标创建一张新的表
    1. create table stu1 as select id,name,score, from stu
1. 删除原有的表
    1. drop table stu
1. 将新的表名字改成原有的旧表的名字
    1. alter table stu1 rename to stu
不支持直接删除一列,以下可以间接实现删除一列的功能。

###### DROP	删除整个表，或者表的视图，或者数据库中的其他对象。

##### DML - 数据操作语言

###### INSERT	创建一条记录。
1. 整体字段插入
    1. insert into stu values(1001,'zhangsan',80)    
    1. insert into stu values(1002,'lisi',90)
1. 部分插入
    1. insert into stu (name,score)valus(1003,'wangwu')    部分字段插入
###### UPDATE	修改记录。
update stu set name='wangwu' where id='1001' 

update stu set name='wangwu' where id=1001
update stu set name='wangwu',score=88 where id=1001

###### DELETE	删除记录。
1. 全部删除
    1. delete from stu
1. 按照条件删除
    1. delete from stu where id=1003 and name='wangwu'
##### DQL - 数据查询语言
SELECT	从一个或多个表中检索某些记录。
1. 查询全部：
select * from stu
1. 查询部分：
select name from stu
select name,score from stu
1. 按照条件查询
select * from stu where score=80 and name='zhangsan'
select * from stu where score=80 or name='lisi'
## 可能看的内容
Word中使用数据库数据
https://wenku.baidu.com/view/e46e3218650e52ea55189830.html

这篇文章是介绍word和数据库结合使用的例子，是不是应该看一下。


windows 平台上使用bat 执行新生成的db文件如果重名的话，则不能够生成新的db覆盖已经存在的重名数据库文件。

## head 设置

这是菜鸟上面的： <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
这是vscode默认的：<meta name="viewport" content="width=device-width, initial-scale=1.0">
1. width=device-width 表示宽度是设备屏幕的宽度。
1. initial-scale=1 表示初始的缩放比例。
1. shrink-to-fit=no 自动适应手机屏幕的宽度。


## 容器类
Bootstrap 4 需要一个容器元素来包裹网站的内容。

我们可以使用以下两个容器类：

.container 类用于固定宽度并支持响应式布局的容器。
.container-fluid 类用于 100% 宽度，占据全部视口（viewport）的容器。


## 网格系统
Bootstrap 提供了一套响应式、移动设备优先的流式网格系统，随着屏幕或视口（viewport）尺寸的增加，系统会自动分为最多 12 列。

我们也可以根据自己的需要，定义列数：Bootstrap 4 的网格系统是响应式的，列会根据屏幕大小自动重新排列。

网格类：
Bootstrap 4 网格系统有以下 5 个类:

1. .col- 针对所有设备
1. .col-sm- 平板 - 屏幕宽度等于或大于 576px
1. .col-md- 桌面显示器 - 屏幕宽度等于或大于 768px)
1. .col-lg- 大桌面显示器 - 屏幕宽度等于或大于 992px)
1. .col-xl- 超大桌面显示器 - 屏幕宽度等于或大于 1200px)

Bootstrap4 网格系统规则:

1. 网格每一行需要放在设置了 .container (固定宽度) 或 .container-fluid (全屏宽度) 类的容器中，这样就可以自动设置一些外边距与内边距。
1. 使用行来创建水平的列组。
1. 内容需要放置在列中，并且只有列可以是行的直接子节点。
1. 预定义的类如 .row 和 .col-sm-4 可用于快速制作网格布局。
1. 列通过填充创建列内容之间的间隙。 这个间隙是通过 .rows 类上的负边距设置第一行和最后一列的偏移。
1. 网格列是通过跨越指定的 12 个列来创建。 例如，设置三个相等的列，需要使用用三个.col-sm-4 来设置。
1. Bootstrap 3 和 Bootstrap 4 最大的区别在于 Bootstrap 4 现在使用 flexbox（弹性盒子） 而不是浮动。 Flexbox 的一大优势是，没有指定宽度的网格列将自动设置为等宽与等高列 。 如果您想了解有关Flexbox的更多信息，可以阅读我们的CSS Flexbox教程。

Bootstrap 4 网格的基本结构:

## vBootstrap4 文字排版
Bootstrap 4 默认设置
Bootstrap 4 默认的 font-size 为 16px, line-height 为 1.5。

默认的 font-family 为 "Helvetica Neue", Helvetica, Arial, sans-serif。

此外，所有的 <p> 元素 margin-top: 0 、 margin-bottom: 1rem (16px)。

