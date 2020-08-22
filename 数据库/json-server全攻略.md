# json-server全攻略
- 本文关键词:1 2 
- 作者：wyl350 
- 日期：2020-2-18 14:21:43 

https://www.jianshu.com/p/9cfc5cdb0aeb
1. 基本认识
    > 一个在前端本地运行，可以存储json数据的server。
1. 全局使用
$ npm install -g json-server
1. 使用方法
$ json-server --watch 文件地址

这就开启了一个数据接口服务
http://www.127.0.0.1:3000/

http://www.127.0.0.1:3000/users
http://www.127.0.0.1:3000/jobs

http://www.127.0.0.1:3000/users/1
http://www.127.0.0.1:3000/users/2
http://www.127.0.0.1:3000/users/3


把文件夹启动为http服务
hs -c-1 -0 