mongoDB 菜鸟教程
https://www.runoob.com/mongodb/mongodb-tutorial.html
http://www.mongoosejs.net/docs/index.html



1. sql 数据库：
    > 即关系型数据库，都需要sql语言来操作。所有的关系型数据库在构建之前，需要设计表结构。数据表支持约束，
    - 唯一的
    - 主键
    - 默认值
    - 非空
    - 非关系型数据库非常的灵活
1. MongoDB 是最像关系型数据库的非关系型数据库。没有表结构。
    - 数据库: 数据库
    - 数据表: 集合（数组）
    - 表记录: 文档对象
    ```js
    {
      qq:{
        [
          {}
          {}
          {}
          {}
          {}
          {}

        ]
      }
    }
    ```
    > MongoDB 在插入数据的时候，同时会创建 数据库、数据表。
1. MongoDB 的安装
    - 主页： https://www.runoob.com
    - 下载地址： https://www.mongodb.com/download-center/community
    - 按照 下一步 安装即可。
1. 卸载：控制面板卸载。
1. 检测是否安装成功。
    - `mongod --version`  
1. 运行 MongoDB 服务
    > 命令行下运行 MongoDB 服务器 和 配置 MongoDB 服务 任选一个方式启动就可以。
    1. 配置 MongoDB 服务
        1. 管理员模式打开命令行窗口,创建目录，执行下面的语句来创建数据库和日志文件的目录
            - mkdir c:\data\db
            - mkdir c:\data\log
        1. 创建配置文件
            > 创建一个配置文件。该文件必须设置 systemLog.path 参数，包括一些附加的配置选项更好。例如，创建一个配置文件位于 C:\mongodb\mongod.cfg，其中指定 systemLog.path 和 storage.dbPath。具体配置内容如下：
            ```
            systemLog:
                destination: file
                path: c:\data\log\mongod.log
            storage:
                dbPath: c:\data\db
            ```
        1. 安装 MongoDB 服务
            > 通过执行 mongod.exe ，使用 --install 选项来安装服务，使用 --config 选项来指定之前创建的配置文件。   
            > `C:\mongodb\bin\mongod.exe --config "C:\mongodb\mongod.cfg" --install` 
        1. 启动MongoDB服务
            > `net start MongoDB`
        1. 关闭MongoDB服务
            > `net stop MongoDB`
        1. 移除 MongoDB 服务
            > `C:\mongodb\bin\mongod.exe --remove`
        1. 总结以上，我认为可以在任何位置新建一个文件夹，这个文件夹中新建1个文件和两个目录，分别是 MongoDB 的 数据库目录、数据库日志文件目录和配置文件。其中配置文件指定同文件夹下的其他两个目录为日志和数据库目录。那么就具备了启动服务的前提了。可以在windows 环境下启动程序服务，删除服务，关闭服务和打开服务。
    1. 命令行下运行 MongoDB 服务器
        - `C:\mongodb\bin\mongod --dbpath c:\data\db --port 27017`
            > 为了从命令提示符下运行 MongoDB 服务器，你必须从 MongoDB 目录的 bin 目录中执行 mongod.exe 文件。
        - `C:\mongodb\bin\mongo.exe`
            > 我们可以在命令窗口中运行 mongo.exe 命令即可连接上 MongoDB.
        - 环境变量方式启动和停止 nongodb 。
            - 配置环境变量： 
                > 在环境变量中添加： c:\Program Files\MongoDB\Server\3.4\bin  即 MongoDB 的运行程序地址。具体为：我的电脑-属性-高级系统设置-高级-环境变量-用户变量-Path-编辑（注意：win7 是长长的一坨字符串，而win10就已经划分开了。）-新加一个变量，内容为： MongoDB 执行软件入口文件夹。例如：c:\Program Files\MongoDB\Server\3.4\bin
            - 启动：
                - mongod
                    > nongodb 默认使用执行 mongod 命令所处盘符根目录下的 /data/db 作为自己的数据存储目录,所以第一次执行该命令之前，应当先自己手动新建一个 /data/db 。
                - mongod --dbpath=数据存储目录路径
                    > 可以修改默认数据存储目录。
            - 停止：
                - 在开启服务的控制台，直接 Ctrl + c 即可停止。
                - 或者直接关闭开启服务的控制台也行。
1. 连接数据库
    - `mongo`
        > 该命令默认连接本机的mongoDB 服务,注意，数据库连接的前提一定是，开了数据库，也就是前面的启动数据库。
1. 退出连接数据库
    - `exit`
        > 连接状态下，输入 exit 。
1. 基本命令
    - `show dbs`
        > 查看数据库列表，实际上指的是，查看所有有数据的数据库。
    输入之后，有两个系统数据库，admin 和 local 两个数据库。
    - `db`
        > 查看当前操作的数据库。db 默认连接的是 test 数据库，但是当 `show dbs`,没有显示test数据库，。
    - `use 数据库命令`
        > 切换到指定的数据库，如果没有，则新建。注意，不是立即新建，而是当操作该数据库的时候，就会新建数据库。
    - `db.students.insertOne({"name":"jack"})`
        > 在当前数据库新建一个集合，并在集合内插入一条数据（{"name":"jack"}）。
    - `show collections`
        > 在当前数据库下，输入该命令，显示当前数据库下的所有集合。
    - `db.students.find()`
        > 查询所有students集合的数据，注意这里的显示会增加一个 默认的唯一不变的 id。

1. `cnpm install mongodb --save`
    - https://github.com/mongodb/node-mongodb-native
    - MongoDB 官方提供了一个操作数据库的js 的 npm 包，叫做 mongodb 。
    - 这个包开源在github上面，用户名是mongodb，项目名称：     - node-mongodb-native 
    - 这个包的特点就是比较原生，一般情况下不直接使用。
1. `cnpm install mongoose --save` 
    - http://js.com
    - 使用第三方的 mongoose 包开操作 MongDB 数据库。
    - 这个第三方包是基于 官方的 MongoDB ，做的进一步封装。
1. `npm install mysql --save`
    > 

1. json-server 包，可以开启一个数据接口。
`json-server --watch data.json`
开启一个数据接口服务
1. node模块http-server

使用Node.js 搭建http服务器 http-server 模块
1. 安装 http-server 模块

　　npm install http-server -g   全局安装

2.在需要的文件夹   启动

　　http-server  默认的端口是8080    可以使用 -p 参数指定一个端口号

