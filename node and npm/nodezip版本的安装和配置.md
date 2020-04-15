# Node zip 版本安装和配置 [windows x64]

zip 版本的安装更能了解node环境的原理

## 一、下载 Nodejs

我在网盘上面有zip包。64位。

## 二、解压文件

解压文件到 指定目录 , 并在解压后的目录下建立 node_global 和 node_cache ，这两个文件夹的建立并不能自动实现 npm 的全局安装路径和全局缓存路径的设置。需要后面介绍的配置命令。

1. node_global: npm 全局安装路径 
1. node_cache: npm 全局缓存路径


## 三、配置环境变量

1. 新建变量 NODE_PATH , 指定安装目录\node-v8.10.0-win-x64 
> 构建新的环境变量，为后面的 Path 变量的设置直接引用。
1. 编辑 Path 变量，在后面追加 `;%NODE_PATH%;%NODE_PATH%\node_global`;
目的是实现 node 和 node_global 文件夹下的执行文件的全局执行。

## 四、配置npm全局安装路径

打开cmd 执行 ，分开执行如下命令：
```bash
npm config set cache "D:\Program Files\node-v8.10.0-win-x64\node_cache"
npm config set prefix  "D:\Program Files\node-v8.10.0-win-x64\node_global"
```

如果执行命令卡死，可以删除C:\Users\用户名\.npmrc 后重新执行。（用户名：为当前电脑的用户名）

## 五、npm设置淘宝仓库

有两个方法：
1. npm命令直接设置 --registry ，推荐使用该方法。如果要恢复成原来的设置，执行：`npm config set registry https://registry.npmjs.org/`
	- `npm config set registry http://registry.npm.taobao.org/`
1. 安装 cnpm 命令。cnpm 安装完成后，以后就可以用cnpm代替 npm, 此时npm还是会用官方镜像，cnpm会用国内镜像（我推断应该是在node文件夹下新建了一个cnpm的执行文件。）
  - `npm install -g cnpm --registry=https://registry.npm.taobao.org`

## 六、验证安装结果

1. `node -v`
1. `npm -v`
1. `npm get registry`  查看 npm 的镜像源
1. `npm install webpack -g`  查看npm 全局安装目录设置是否生效，打开 node_global 和 node_cache 两个文件夹看是否有文件存入。

## 七、版本降级或者选择其他版本

注意：如果要进行版本降级，可以重新下载其它版本，然后修改环境变量，修改全局global和cache路径(上面第四步)。

## 八、可能出现的错误

如果出现node-sass版本问题(如下)，可以执行npm uninstall node-sass，然后重新执行npm install node-sass , 最好重启一下开发环境，让修改都生效（防止环境变量被缓存）

```bash
 
  Sass could not find a binding for your current environment:Windows 64-bit with Node.js 4.x
Found bindings for the following environment:
    - OS X 64-bit with Node.js 4.x
```
Node Sass could not find a binding for your current environment

## 九、范例

变量设置：
1. 在系统变量新建：
	1. 变量名：`NODE_PATH`
	1. 变量值：`D:\Program Files\node-v8.10.0-win-x64`
1. 编辑 Path 变量，在后面追加 
	1. `;%NODE_PATH%;%NODE_PATH%\node_global;`

其他设置：
`npm config set  cache "D:\node-v12.16.2-win-x64\node_cache"`
`npm config set prefix  "D:\node-v12.16.2-win-x64\node_global"`
`npm config set registry http://registry.npm.taobao.org/`


