1. npm 自己升级自己
    - npm install --global npm
1. npm init -y
    > 相当于 npm init --yes
1. npm uninstall --help
    > 查看具体的命令帮助
1. 淘宝npm 镜像
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


