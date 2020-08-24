## 1. Git基础

[学习git的网址](https://try.github.io/)

### 1.1 版本管理

#### 1.1.1 什么是版本管理

版本管理是一种记录文件变化的方式，以便将来查阅特定版本的文件内容。

#### 1.1.2 人为维护文档版本的问题

1. 文档数量多且命名不清晰导致文档版本混乱

2. 每次编辑文档需要复制，不方便

3. 多人同时编辑同一个文档，容易产生覆盖

### 1.2 Git 是什么

Git是一个版本管理控制系统（缩写VCS），它可以在任何时间点，将文档的状态作为更新记录保存起来，也可以在任何时间点，将更新记录恢复回来。

### 1.3 Git 安装

1. windows 上安装 git  

从Git官网下载一个Git安装包，[官网地址](http://git-scm.com/downloads)；选择windows版本的git安装包下载。开始安装一路next就可以了。安装过程，我全部采用的是默认选项。安装完成后，其中有Git GUI Here和Git Bash Here（gitbash 的功能确实强大，竟然能同时使用linux和windows终端命令。）。说明安装完成了。右键也有两个功能。

git --version  用来检验是否已经安装git程序

> [淘宝镜像网址](https://npm.taobao.org/mirrors)
[淘宝git镜像地址](https://npm.taobao.org/mirrors/git-for-windows/)

2. ubuntu上安装git  

有的ubuntu系统是自带git的(ubuntu16.04)，可以在终端控制台输入git –version,如果出现下面提示说明没有安装

在控制台使用`sudo apt-get install git`,输入密码就可以安装了。安装完成后在控制输入git –version如图说明安装完成，版本号为2.7.4：  


### 1.4 Git 基本工作流程

| git仓库          | 暂存区             | 工作目录            |
| ---------------- | ------------------ | ------------------- |
| 用于存放提交记录 | 临时存放被修改文件 | 被Git管理的项目目录 |


### 1.5 Git 的使用

#### 1.5.1 Git 使用前配置

在使用 git 前，需要告诉 git 你是谁，在向 git 仓库中提交时需要用到。

1. 配置提交人姓名：`git config --global user.name 提交人姓名`
2. 配置提交人姓名：`git config --global user.email 提交人邮箱` 
3. 查看git配置信息：`git config --list`   

|方式      |github|  账号        |密码   |
|:----    |:---- |:----         |:----  |
|第一种方式|账号  |wyl350        |qq密码  |
|第二种方式|邮箱  |wyl350@126.com|qq密码  |

**注意**

1. 如果要对配置信息进行修改，重复上述命令即可。

2. 配置只需要执行一次。

3. 这里面的git提交有三个级别，按照优先级分别是（这个以后再研究）
    1. local 针对当前仓库
    1. global 针对当前的用户
    1. system 针对系统

4. windows系统会在计算机用户家地址  C:\Users\YuanShuo （对应linux的home地址） 中生成 .gitconfig 文件，文件内容为（这个文件的内容和配置的命令是相通的）：
    ```bash
    [user]
        email = wyl350@126.com
        name = wyl350
    ```
5. 我的账号密码是：我的qq密码。

6. git文档 帮助
    1. `git config --help`  
    1. `git help config`  
    1. `man git-config` 这个在windows环境中不能用。  

7. 配置的增删改查
    1. 增
        > 增加的方法除了上面的基本配置的方法外，还有
        1. `git config --global --add user.name eoe`
    1. 查
        - `git config user.name` or  `git config --get user.mame`
        - `git config --list --global` 查看所有 global 用户
    1. 删除
        - `git config --global --unset user.name eoe`
    1. 修改（修改的方法和增加的方法是一样的。）
        - `git config --global user.name eoe`

8. git 给自参数起别名
    1. git config --global alias.co checkout
    1. git config --global alias.lol "log --oneline" 这是一条非常有用的起别名方式

#### 1.5.2 提交步骤

1. `git init` 初始化git仓库
2. `git status` 查看文件状态
3. `git add 文件列表` 追踪文件
4. `git commit -m 提交信息`  向仓库中提交代码
5. `git log` 查看提交记录

补充命令：
1. git 仓库创建
    1. 原始创建 包括创建工作空间
        1. `git init git_non_bare_repo`  在当前目录创建一个项目,这是一般常用的使用方法。
        1. `git init --bare git_bare_repo` 这是创建的一个裸仓库，是不带工作区间的,很少使用，应该是服务端才使用。
        1. `git clone 远程地址 新项目名称`
        1. `git clone git_bare_repo/ git_clone_repo`
    1. git 管理创建，只是创建git管理，不包括工作空间创建，工作空间已经存在。
        1. `git init`
2. 工作区和暂存区            
    `git rm a` 同时删除工作区的a文件和暂存区的a引用。
    `git rm --cached a` 删除暂存区的a引用，但是不删除工作区的a文件。
    `git mv a c` 文件重命名或者文件移动位置。
    `git add -A` or `git add --all` or `git add .`将整个工作区添加到暂存区

#### 1.5.3 撤销

- 用暂存区中的文件覆盖工作目录中的文件： `git checkout 文件`

- 将文件从暂存区中删除： `git rm --cached 文件`

- 将 git 仓库中指定的更新记录恢复出来，并且覆盖暂存区和工作目录：`git reset --hard commitID` 

## 2. Git进阶

### 2.1 分支

为了便于理解，大家暂时可以认为分支就是当前工作目录中代码的一份副本。

使用分支，可以让我们从开发主线上分离出来，以免影响开发主线。

#### 2.1.1 分支细分

1. 主分支（master）：第一次向 git 仓库中提交更新记录时自动产生的一个分支。

2. 开发分支（develop）：作为开发的分支，基于 master 分支创建。

3. 功能分支（feature）：作为开发具体功能的分支，基于**开发分支**创建

**功能分支 -> 开发分支 -> 主分支**

#### 2.1.2 分支命令

- `git branch` 查看分支

- `git branch 分支名称` 创建分支

- `git checkout 分支名称` 切换分支

- `git merge 来源分支` 合并分支

- `git branch -d 分支名称` 删除分支（分支被合并后才允许删除）（-D 强制删除）

查阅了一下资料，发现可以在pull命令后紧接着使用--allow-unrelated-history选项来解决问题（该选项可以合并两个独立启动仓库的历史）
`git pull origin master --allow-unrelated-histories`
-a  参数是可以针对删除的文件存进记忆的。
git push 报错 Changes not staged for commit:
`git commit -am "提交说明"` 这句代码就能完美的解决这个问题。

补充分支：

- git log --graph --pretty=oneline        分支图

- git checkout -b dev   创建并切换至一个分支。

分支概念及其重要，主支和分支在没有对同一文件做修改的时候，是可以快速合并的。如果对同一文件做了修改，就会产生冲突，需要手动合并。会出现自动合并失败的提示，可以使用`git status` 命令提示哪个文件出现了冲突，然后打开这个文件进行修改。这里解决冲突后，是肯定会有一个新的提交的。 
- git merge --no-ff -m '禁用fast-forward' dev     禁止快速合并 有时候需要保存分支的修改过程，这样做有这样的作用。

<!-- 查看版本提交记录 -->
- git log     // 查看版本记录
- git reflog     // 记录所有版本操作记录
- git log --pretty=oneline // 单行模式查看版本记录

<!-- 对比工作区中的文件与当前版本中的文件的不同 --> 
- git diff HEAD -- code.txt   对比工作区的文件和当前head版本文件的不同
- git diff HEAD HEAD^-- code.txt  对比前个版本与当前版本之间的不同
+++ 指的是上一个版本的文件      总是指的是后一个对比对象
--- 指的是当前版本里面的文件    总是指的前一个对比对象

<!-- 删除文件 -->
- git rm code.txt  删除文件，并把删除放进了暂存区。
- 注意，虽然删除文件并且提交版本后，是可以找回的，但是这个文件之前的所有修改就没有了。
如果删除工作区的文件，当然是可以通过 "git checkout -- code.txt" 命令 重新获得删除的文件的（这个方法不一定有用）。如果要删除文件，可以使用命令 "git rm test.txt" 加入暂存区，这个时候就删除了。如果要恢复的该文件也是可以的，使用  git reset HEAD code.txt   和  git checkout -- Text.txt 先取消暂存状态再归位。如果删除了文件，又提交了版本，那么如果这个文件没有经历过版本库，那么恢复版本来找回文件，否则就无法找回。

### 2.2 暂时保存更改

在git中，可以暂时提取分支上所有的改动并存储，让开发人员得到一个干净的工作副本，临时转向其他工作。保存工作空间是独立于分支的，处于任何分支都是可以使用的，所以，一定要注意在什么分支的条件下作的保存，恢复工作空间的时候一定要

使用场景：分支临时切换

- 存储临时改动：`git stash`
- 恢复改动：`git stash pop`
- git stash list 显示所有现场


## 3. Github

在版本控制系统中，大约90%的操作都是在本地仓库中进行的：暂存，提交，查看状态或者历史记录等等。除此之外，如果仅仅只有你一个人在这个项目里工作，你永远没有机会需要设置一个远程仓库。

只有当你需要和你的开发团队共享数据时，设置一个远程仓库才有意义。你可以把它想象成一个 “文件管理服务器”，利用这个服务器可以与开发团队的其他成员进行数据交换。

该网站登录账号需要两个条件，一个是账号或者邮箱，一个是密码。（账号和密码可以登录，邮箱和密码也能登录。） 而本地安装的Git程序才是代码日常的地方。仅仅需要用户名和邮箱就行了。 

### 3.1 注册

1. 访问[github](https://github.com/)首页，点击 Sign up 连接。（注册）

   ![](assets/11.png)

2. 填写用户名、邮箱地址、GitHub登陆密码

3. 选择计划


4. 填写 GitHub 问题

5. 验证邮箱


6. GitHub 个人中心

### 3.2 多人协作开发流程

- A在自己的计算机中创建本地仓库
- A在github中创建远程仓库
- A将本地仓库推送到远程仓库
- B克隆远程仓库到本地进行开发
- B将本地仓库中开发的内容推送到远程仓库
- A将远程仓库中的最新内容拉去到本地

### 3.3 创建仓库

1. 填写仓库基本信息

2. 将本地仓库推送到远程仓库

   1. git push 远程仓库地址 分支名称

   2. git push 远程仓库地址别名 分支名称

   3. git push -u 远程仓库地址别名 分支名称

       -u 记住推送地址及分支，下次推送只需要输入git push即可

   4. git remote add 远程仓库地址别名 远程仓库地址

### 3.4 拉取操作

添加合作者，在项目的settings 选项中，选择collaborators，添加合作者名单即可。填写合作者的账号或者email就可。invite link，被邀请的合作者，只要点击该链接下的统一邀请，就可以以后推送代码了。

#### 3.4.1 克隆仓库

克隆远端数据仓库到本地：`git clone 仓库地址`

#### 3.4.2 拉取远程仓库中最新的版本

拉取远程仓库中最新的版本：`git pull 远程仓库地址 分支名称`

### 3.5 解决冲突

在多人同时开发一个项目时，如果两个人修改了同一个文件的同一个地方，就会发生冲突。冲突需要人为解决。

### 3.6 跨团队协作

1. 程序员 C fork仓库
2. 程序员 C 将仓库克隆在本地进行修改
3. 程序员 C 将仓库推送到远程
4. 程序员 C 发起pull reqest
5. 原仓库作者审核
6. 原仓库作者合并代码

### 3.7 ssh免登陆

https协议仓库地址：https://github.com/itcast-frontEnd/git-demo.git

生成秘钥：`ssh-keygen`

秘钥存储目录：C:\Users\用户\\.ssh

公钥名称：id_rsa.pub

私钥名称：id_rsa

1. ssh 公钥生成方法  
在前面本地生成用户名和邮箱的情况下，就可以使用下面的命令在本地生成公钥。
```
ssh-keygen -t rsa -C "wyl350@wyl350.com"
```  
之后 gitbash 会提醒你输入key的名称，你可以不用输入，直接3个回车，就OK了；
> 前面说法有错误，秘钥是和邮箱有关系，和用户名没有关系。
在 C:\Documents and Settings\Administrator\.ssh\ 目录下生成两个文件,分别是私钥和公钥. id_rsa.pub 文件的内容就是公钥。    
2. github 公钥设置  
ssh 设置：头像 >  setttings >  shh and GPG keys    
**key 把电脑的公钥 添加到这个地方就行了。**  
title 可以不写,也可以任意起一个名字，我认为应该最好写链接硬件的名称,例如我的办公电脑等  
> 公钥的意义：  
第一步、生成公钥的过程（后面有详细的方法介绍），已经用到了自己的用户名和邮箱。
第二步、将公钥粘贴进自己的网址的过程，就和github账户形成了加密沟通，**因为账户是靠密码登录进入的**所以 github 终端不需要再输入密码就能与 github 网站数据库连接。
3. 项目地址和项目名的关系和特点：
- 这是我的一个项目的网址：    https://github.com/wyl350/bj18
- 对应的一个的克隆地址（http）： https://github.com/wyl350/bj18.git
- 对应的一个的克隆地址（ssh）： git@github.com:wyl350/bj18.git

### 3.8 GIT忽略清单

将不需要被git管理的文件名字添加到此文件中，在执行git命令的时候，git就会忽略这些文件。

git忽略清单文件名称：**.gitignore**

将工作目录中的文件全部添加到暂存区：`git add .`
