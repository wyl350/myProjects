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

