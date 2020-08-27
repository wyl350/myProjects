// gulp
// grunt
// browserify
// 都是和 webpack 相似的  打包工具

// webpack具有以下功能
// tree shaking
// 懒加载阿
// 代码分割


// webpack4 新变化：
// 速度更快，大型项目甚至可以节约90%的时间，
// 内置了更多的API

// loader 
// plugins
// sourcenap
// hmr

{// webpack 安装   配合视频 2-3
    // webpack简介
    // webpack 是基于node.js开发的 打包工具 。因此如果下载最新的node和最新的webpacl，
    // 可以发挥webpack的最大打包能力，增加打包的速度。
    // 因为 最新的webpack会根据最新的node优化打包速度。
    // 因此要保持webpack和node的版本尽可能的新。

    // node 和 npm 介绍
    // 查看node版本的命令和npm的命令
    // node -v
    // npm -v
    // 查看全局安装webpack的版本
    // webpack -v
    // 初始化项目，在项目的文件夹中，
    // npm init
    // package.json文件中是默认没有private属性的，
    // private属性是控制是否发布到github项目仓库中去的
    // 这里可以设置true or false
    // package-lock 文件是可以快速安装依赖包的
    // 以下这个命令是可以禁用 package-lock 文件生成的。
    // npm config set package-lock false
    // 以下这个命令是可以重新设置 package-lock 文件生成的。
    // npm config set package-lock true


    // 全局安装 webpack
    // npm install webpack webpack-cli -g
    // 查看webpack的版本号
    // webpack -v
    // webpack-cli -v
    // 全局卸载webpack和webpack-cli 
    // npm uninstall webpack webpack-cli -g    
    // 全局安装webpack 和 webpack-cli 是不推荐使用的。

    // 项目安装 webpack 和 webpack-cli 
    // npm install webpack webpack-cli --save-dev  或者 npm install webpack webpack-cli -D
    // 或者是限制版本号的
    // npm install webpack@4.25.0 webpack-cli --save-dev
    // 如果不知道版本是否存在，可以输入以下命令查看历史版本号
    // npm info webpack

    // npx命令 是操作当前项目的，不是全局的
    // 查看当前项目中webpack 的版本 （在module文件夹中查找）
    // npx webpack -v


    // 拿到别人的项目一般是不含module文件夹的，所以应当先输入以下命令，安装依赖
    // npm install  或者 cnpm install
}
{  //webpack 配置   配合视频 2-4   2-5
    // const path =require('path')
    // module.export = {
    //     mode: "production", //'prodection' 'development'  配合视频 2-5
    //     entry:'./index.js',
    //     output:{
    //         filename:'bundle.js',
    //         path:path.resolve(__dirname,'bundle')
    //     }
    // }
    // 命令终端输入以下命令，可以更改 webpack配置文件名称.这样是可以修改配置文件的位置和文件名
    // npx webpack --config webpackconfig.js
}
