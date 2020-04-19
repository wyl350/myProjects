# mongoDB 

> 是最像关系型数据库的非关系型数据库（不懂）。没有表结构。

## 教程

菜鸟教程： https://www.runoob.com/mongodb/mongodb-tutorial.html
>该教程很好，可以作为系统学习的教材。

mongoosejs 翻译版本教程： http://www.mongoosejs.net/docs/index.html

## MongoDB 的 介绍
1. 启动 mongodb 数据库服务后，可以和本机电脑的所有的数据库进行连接。
> **程序**连接数据库的同时，如果数据库存在，就连接该数据库，如果不存在，则会新建数据库。如果数据库中没有数据集合（数据表），则在存入数据（文档对象）的同时，新建集合（数据表）。即 MongoDB 在插入数据的时候，同时会创建 数据库、数据表。这个特性是nosql数据库的一大特性。**数据库: 数据库，数据表: 集合（数组）表记录: 文档对象**

    
## MongoDB 的 安装
1. 官网主页： https://www.runoob.com
1. 下载地址： https://www.mongodb.com/download-center/community
1. 检测是否安装成功。
> 按照 下一步 安装即可。moogodb 安装文件的下载非常的麻烦，我已经将适合64系统的windows版本下载到了我的百度网盘的我的笔记中了，这是zip版本的，下载解压后，就可使用，也可以配置环境变量使用。
> `mongod --version`  
## MongoDB 的 卸载
1. windows 系统 控制面板卸载。
1. zip 版本的，删除掉环境变量，即可。
## mongodb 的 启动
mongodb 数据库常用的两个执行文件：
1. 启动执行文件：mongod.exe
1. 连接执行文件：mongo.exe
> mongodb 执行启动服务，必须配置数据存储目录。所以第一次执行该服务，应当手动设置，当然也可以新建配置文件。如果第一次不配置的话，点击启动执行文件,不会启动服务，只会一闪而过。
### 配置数据存储目录
一共有两种方式：
#### 直接手动配置
管理员模式打开命令行窗口,创建目录，执行下面的语句来创建数据库和日志文件的目录
1. mkdir c:\data\db
1. mkdir c:\data\log
这个规生效的前提是，mongodb 的默认规则就是在 mongod 执行命令程序的根目录下的/data/db 作为自己的数据存储目录。
#### 创建配置文件
nongodb 的一个默认规则：nongodb 默认使用执行 mongod 命令所处盘符根目录下的 /data/db 作为自己的数据存储目录,所以第一次执行该命令之前，应当先自己手动新建一个 /data/db 。当然也是可以手动指定数据存储目录路径的。
1. 指定方法：`mongod --dbpath=数据存储目录路径`
1. 创建一个配置文件。该文件必须设置 systemLog.path 参数，包括一些附加的配置选项更好。例如，创建一个配置文件位于 C:\mongodb\mongod.cfg，其中指定 systemLog.path 和 storage.dbPath。具体配置内容如下：
```shell
systemLog:
    destination: file
    path: c:\data\log\mongod.log
storage:
    dbPath: c:\data\db
```
这里应该还有一步指定配置文件的一步。
### mongodb 启动的方式
在 windows 系统中， mongodb 启动有两种方式：
1. 命令行下运行 MongoDB 服务器
1. 配置 MongoDB 服务
#### 命令行下运行 MongoDB 服务器
> 命令行下运行 MongoDB 服务器
1. `C:\mongodb\bin\mongod dbpath c:\data\db --port 27017`
1. `C:\mongodb\bin\mongo.exe`
1. 环境变量方式启动和停止 mongodb 。
环境变量方式本质上仍然是执行 mongodb 数据库的执行文件。只是让mongodb 数据库的执行文件可以在全局的路径中调用，不过这种调用比指定路径调用要费时。
1. 配置环境变量：
    > 在环境变量中添加： c:\Program Files\MongoDB数据库程序的执行目录，即 MongoDB 的运行程序地址bin目录。具体设置方法为：我的电脑-属性-高级系统设置-高级-环境变量-系统变量-Path-编辑。
1. 停止：
    1. 在开启服务的控制台，直接 Ctrl + c 即可停止。
    1. 或者直接关闭开启服务的控制台也行。
#### 配置 MongoDB 服务
> 配置 MongoDB 服务,配置完成后，可以设置开机启动该服务。
1. 安装 MongoDB 服务
    - `C:\mongodb\bin\mongod.exe --config "C:\mongodb\mongod.cfg" --install` 
    > 通过执行 mongod.exe ，使用 --install 选项来安装服务，使用 --config 选项来指定之前创建的配置文件。   
1. 启动MongoDB服务
    > `net start MongoDB`
1. 关闭MongoDB服务
    > `net stop MongoDB`
1. 移除 MongoDB 服务
    > `C:\mongodb\bin\mongod.exe --remove`
## mongodb 的 连接
> 注意：启动数据库是连接数据库的前提。
1. 连接数据库
    - `mongo`
    - `mongo 127.0.0.1:27017`   这是链接远程的 mongodb 服务的命令，当然是需要远端开启 mangodb 服务的。
1. 退出连接数据库
    - `exit`
        > 连接状态下输入。
## mongodb 的 数据库操作
### 显示当前主机所有数据库
- `show dbs`
    > 查看数据库列表，实际上指的是，查看当前所有的数据库。
输入之后，有 admin、config、local3个系统数据库。
### 指定操作数据库
- `use 数据库命令`
    > 切换到指定的数据库，如果没有，则新建。注意，不是立即新建，而是当操作该数据库的时候，就会新建数据库。
### 显示当前操作数据库
- `db`
    > 注意这里有一个默认规则，默认连接的是 test 数据库，当然该数据库实际并不存在。代表当前数据库。
### 显示当前数据库所有文档集合
- `show collections`
    > 在当前数据库下，输入该命令，显示当前数据库下的所有集合。
## mongodb 的 增删改查
### 增
- `db.students.insertOne({"name":"jack"})`
    > 在当前数据库新建一个集合，并在集合内插入一条数据（{"name":"jack"}）。这里db相当于已经设置的数据库名称变量。例如 use itcast 。那么这里的db相当于itcast。这里的这个itcast 相当于数据库，students相当于表。
### 删
### 改
### 查
- `db.students.find()`
        > 查询所有 students 集合的数据，注意这里的显示会增加一个 默认的唯一不变的 id。


## mongodb 数据库的 文件备份 恢复以及 文件导入导出
注意，文件备份、恢复、导入、导出都是需要
### 文件备份
> 说道文件的备份会用到mongodump这条命令，这个命令不能被mongoDB所解析，应该被环境变量取解析，所以应该退出MongoDB数据库再输入命令`mongodump -h localhost:27017(连接主机) -d 数据库名 -o 导出目录`
例如：`mongodump -h localhost:27017 -d user -o e:/acat`
1. -h：MongoDB所在的服务器地址，例如127.0.0.1（本地回环地址），当然也可以是localhost,也可以指定端口号，localhost：27017
1. -d：需要备份的数据库实例。
1. -o：备份的数据库存放位置。
### 文件恢复
`mongorestore -h localhost:27017 -d 数据库名 -directoryperdb 存放目录`
例如：`mongorestore -h localhost:27017 -d user directoryperdb e:/acat/user`
### 文件导出
txt 形式导出
`mongoexport -h localhost:27017 -d 数据库名 -c 集合名 -o 导出路径/***.txt`
wps 这其实是word形式导出
`mongoexport -h localhost:27017 -d 数据库名 -c 集合名 -o 导出路径/***.wps`
excel 形式导出
`mongoexport -h localhost:27017 -d 数据库名 -c 集合名 -o 导出路径/***.xls`
### 文件恢复
`mongoimport -h localhost:27017 -d user -c 数据库名 -o 路径`
`mongoimport -h localhost:27017 -d user -c 数据库名 e://acat/c2.txt`

## mongofiles 执行文件
> 主要用来在数据库中存储二进制大文件。可以统一用数据库处理数据，而无需借助外部的文件系统。另外，还可以利用MongoDB的复制或者是分片机制，其故障恢复和可扩展性较好。使用这种方式存储，可以避免使用文件系统的某些限制，例如平台的差异性导致存储需要做特殊处理（Linux在同一目录下的文件数限制），还可以避免文件碎片（MongoDB分配空间以2GB作为单位），这样数据存放相对较集中，即使有文件碎片，相对来说，其程度也要比操作系统的碎片程度低得多。

