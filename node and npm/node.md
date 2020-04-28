1. npm 自己升级自己
    - npm install --global npm
1. npm init -y
    > 相当于 npm init --yes
1. npm uninstall --help
    > 查看具体的命令帮助
1. 淘宝 npm 镜像
    > 地址: https://npm.taobao.org/
    - npm install --global cnpm 
    - npm install jquery --registry=http://registry.npm.taobao.org
        > 一次性的使用淘宝镜像下载
    - npm config set registry http://registry.npm.taobao.org
        - npm comfig list
            > 查看 npm 配置信息，其中有一个配置信息项：registry： "http://registry.npm.taobao.org"
        - npm install jquery
            > 将淘宝镜像加入设置后，以后所有的下载就默认使用新注册的淘宝镜像下载地址下载。
1. node 的第三方工具 nodemon 。
    > cnpm install nodemon --global
    - nodemon app.js
        > 使用方式，以后只要js文件发生变化，就会自动重启。且在任意的目录都能执行。    

1. JS 是天生不支持模块化的，但是有第三方库可以帮助支持。
    > node 中的模块化 标准为 CommonJS ，但是es6 中，就天生支持模块化，他用的官方的模块化标准，是 EcmaScript 6 Modules 官方规范。但是，特别要注意的一点就是，node 在 8.5 版本之后就支持了EcmaScript 6 Modules 标准模块化。
    - require.js   AMD
    - sea.js       CMD
1. 新版本的 npm 5 以后的版本会自动生成一个文件， package-lock.json 。同时，新版本 5 之后的，安装包的的时候不用再写入--save，这个已经被设置成了默认项了。 package-lock.json 文件会保存node_modules 中所有的包的信息（版本，下载地址），快速下载依赖包。同时，这个文件还有锁定版本的功能，因为 重新下载依赖包的 cnpm i,总是下载最新的版本，但是有了 package-lock.json 这个文件后，下载的版本就会配合 package.json 锁定版本。



有很多的模板引擎，其中有
art-template
{{include './header.html'}}
公共模板
{{block 'content'}}
<h1> 默认内容 </h1>
{{/ block}}

{{extent './layout.html'}}
{{ block 'content'}}
<h1> 页面填坑内容 </h1>
{{ /block}}
模板继承
ejs
jade(后来改名为 pug ) :非常简洁的模板语法。例如 h1 div 写一个标签就行了。
handlebars
nunjecks

# NodeJS linux的安装 
二进制文件的部署安装
https://blog.csdn.net/chenlei_525/article/details/61918174?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522158803368719724835850564%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=158803368719724835850564&biz_id=0&utm_source=distribute.pc_search_result.none-task-blog-2~all~first_rank_v2~rank_v25-1

1. 官网下载二进制文件 node-v0.10.26-linux-x64.tar.gz
2. 在文件的下载地址解压文件
3. 进入 解压后的目录bin目录下，执行ls会看到两个文件node,npm. 然后执行./node -v ，如果显示出 版本号说明我们下载的程序包是没有问题的。 依次运行如下三条命令
    1. cd node-v0.10.26-linux-x64/bin
    1. ls
    1. ./node -v
4. 因为 /home/kun/mysofltware/node-v0.10.26-linux-x64/bin这个目录是不在环境变量中的，所以只能到该目录下才能node的程序。如果在其他的目录下执行node命令的话 ，必须通过绝对路径访问才可以访问。如果要在任意目录可以访问的话，需要将node 所在的目录，添加PATH环境变量里面，或者通过软连接的形式将node和npm链接到系统默认的PATH目录下的一个。

两种方式：
1. 软连接的方式： 本质是将node的执行文件链接到已经是全局变量的文件夹下
在终端执行echo $PATH可以获取PATH变量包含的内容，系统默认的PATH环境变量包括
/usr/local/bin:/usr/bin:/bin:/usr/local/sbin:/usr/sbin:/sbin: ，冒号为分隔符。所以我们可以将node和npm链接到/usr/local/bin 目录下如下执行
ln -s /home/kun/mysofltware/node-v0.10.26-linux-x64/bin/node /usr/local/bin/node
ln -s /home/kun/mysofltware/node-v0.10.26-linux-x64/bin/npm /usr/local/bin/npm
> 注意：前面的目录是 下载文件的目录，后面的目录是系统默认的环境变量地址，当然这里是具体普通用户。
1. 环境变量配置
在node目录下执行pwd 获取node所在的目录，要把这个目录添加到PATH环境变量
执行su 输入密码切换到root用户。
`vi /etc/profile`
1. 在vi 环境下 点击 i 进入插入状态，在export PATH的上一行添加如下内容 (环境变量中的内容 是以冒号分割的)
`PATH=$PATH:/home/kun/mysofltware/node-v0.10.26-linux-x64/bin`
编辑完成后按Esc键 然后输入 :wq 按回车保存退出。
1. 退出vi ，执行
`source /etc/profile` 可以是变量生效，
1. 然后执行 echo $PATH ，看看输出内容是否包含自己添加的内容






这个人的博客还不错：
https://me.csdn.net/xllily_11
从零开始nodejs系列文章：
http://blog.fens.me/series-nodejs/