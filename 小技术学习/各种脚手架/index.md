# 基于gulp的前端脚手架
https://segmentfault.com/a/1190000007715656
***
1. 安装
    安装环境：已安装 node.js 和 npm
    安装步骤
    全局安装gulp
    npm install -g gulp
    首先在项目根目录下通过命令行安装项目依赖
    npm install --save-dev gulp
    在项目根目录下新建文件gulpfile.js。要想完成相关插件的配置，首先需要了解gulp相关方法

gulp只有五个方法： task run watch src dest

task 这个API用来创建任务，在命令行下可以输入 gulp test 来执行test的任务。
run 这个API用来运行任务
watch 这个API用来监听任务。
src 这个API设置需要处理的文件的路径，可以是多个文件以数组的形式[main.scss,vender.scss]，也可以是正则表达式/
*/ .scss。
dest 这个API设置生成文件的路径，一个任务可以有多个生成路径，一个可以输出未压缩的版本，另一个可以输出压缩后的版本。

其实整个gulp的配置文件，基本上都是在做一些任务的配置，比如创建任务，监听任务等等。

