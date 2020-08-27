<!-- # 阮一峰关于 Git 的学习文章
内容：本篇是关于阮一峰老师的的git介绍文章  
要求：要依照下面的顺序学习
***
## 基础
1. [常用 Git 命令清单](http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html)  
1. [Git远程操作详解(入门级别)](http://www.ruanyifeng.com/blog/2014/06/git_remote.html)  
## 中级
1. [Git分支管理策略](http://www.ruanyifeng.com/blog/2012/07/git.html)  
1. [Git 使用规范流程](http://www.ruanyifeng.com/blog/2015/08/git-use-process.html)
## 高级
1. [git 工作流程](http://www.ruanyifeng.com/blog/2015/12/git-workflow.html) -->
# 常用 Git 命令清单
概要：下面是作者整理的常用 Git 命令清单。几个专用名词的译名如下。
- Workspace：工作区  
- Index / Stage：暂存区  
- Repository：仓库区（或本地仓库）  
- Remote：远程仓库  
***
总体框架图：
![git lessons](https://www.ruanyifeng.com/blogimg/asset/2014/bg2014061202.jpg '总体框架图')
***
>《 常用 Git 命令清单 》 作者：阮一峰 网址：<http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html>
***
1. 新建代码库
    - `$ git init`
      > 在当前目录新建一个Git代码库
    - `$ git init [project-name]`
      > 新建一个目录，将其初始化为Git代码库
    - `$ git clone [url]`
      > 下载一个项目和它的整个代码历史,包括所有的分支。
1. 配置
    > Git的设置文件为.gitconfig，它可以在用户主目录下（全局配置），也可以在项目目录下（项目配置）。
    - `$ git config --list`
        > 显示当前的Git配置
    - `$ git config -e [--global]`
        > 编辑Git配置文件
    - `$ git config [--global] user.name "[name]"`
    - `$ git config [--global] user.email "[email address]"`
        > 设置提交代码时的用户信息
1. 增加/删除文件
    - `$ git add [file1] [file2] ...`
        > 添加指定文件到暂存区
    - `$ git add [dir]`
        > 添加指定目录到暂存区，包括子目录
    - `$ git add .` 或者 `git add --all`
        > 添加当前目录的所有文件到暂存区
    - `$ git add -p`
        > 添加每个变化前，都会要求确认  
        > 对于同一个文件的多处变化，可以实现分次提交
    - `$ git rm [file1] [file2] ...`
        > 删除工作区文件，并且将这次删除放入暂存区
    - `$ git rm --cached [file]`
        > 停止追踪指定文件，但该文件会保留在工作区
    - `$ git mv [file-original] [file-renamed]`
        > 改名文件，并且将这个改名放入暂存区
1. 代码提交
    - `$ git commit -m [message]`
        > 提交暂存区到仓库区
    - `$ git commit [file1] [file2] ... -m [message]`
        > 提交暂存区的指定文件到仓库区
    - `$ git commit -a`
        > 提交工作区自上次commit之后的变化，直接到仓库区
    - `$ git commit -v`
        > 提交时显示所有diff信息
    - `$ git commit --amend -m [message]`
        > 使用一次新的commit，替代上一次提交
        > 如果代码没有任何新变化，则用来改写上一次commit的提交信息
    - `$ git commit --amend [file1] [file2] ...`
        > 重做上一次commit，并包括指定文件的新变化
1. 分支
    - `$ git branch`
        > 列出所有本地分支
    - `$ git branch -r`
        > 列出所有远程分支
    - `$ git branch -a`
        > 列出所有本地分支和远程分支
    - `$ git branch [branch-name]`
        > 新建一个分支，但依然停留在当前分支
    - `$ git checkout -b [branch]`
        > 新建一个分支，并切换到该分支
    - `$ git branch [branch] [commit]`
        > 新建一个分支，指向指定commit
    - `$ git branch --track [branch] [remote-branch]`
        > **新建一个分支，与指定的远程分支建立追踪关系**
    - `$ git checkout [branch-name]`
        > 切换到指定分支，并更新工作区
    - `$ git checkout -`
        > 切换到上一个分支
    - `$ git branch --set-upstream [branch] [remote-branch]`
        > 建立追踪关系，在现有分支与指定的远程分支之间
        > git branch --set-upstream-to master https://github.com/wyl350/myStudy.git 可能不对
    - `$ git merge [branch]`
        > 合并指定分支到当前分支
    - `$ git cherry-pick [commit]`
        > 选择一个commit，合并进当前分支
    - `$ git branch -d [branch-name]`
        > 删除分支
    - `$ git push origin --delete [branch-name]`
    - `$ git branch -dr [remote/branch]`
        > 删除远程分支
1. 标签
    - `$ git tag`
        > 列出所有tag
    - `$ git tag [tag]`
        > 新建一个tag在当前commit
    - `$ git tag [tag] [commit]`
        > 新建一个tag在指定commit
    - `$ git tag -d [tag]`
        > 删除本地tag
    - `$ git push origin :refs/tags/[tagName]`
        > 删除远程tag
    - `$ git show [tag]`
        > 查看tag信息
    - `$ git push [remote] [tag]`
        > 提交指定tag
    - `$ git push [remote] --tags`
        > 提交所有tag
    - `$ git checkout -b [branch] [tag]`
        > 新建一个分支，指向某个tag
1. 查看信息
    - `$ git status`
        > 显示有变更的文件
    - `$ git log`
        > 显示当前分支的版本历史
    - `$ git log --stat`
        > 显示commit历史，以及每次commit发生变更的文件
    - `$ git log -S [keyword]`
        > 搜索提交历史，根据关键词
    - `$ git log [tag] HEAD --pretty=format:%s`
        > 显示某个commit之后的所有变动，每个commit占据一行
    - `$ git log [tag] HEAD --grep feature`
        > 显示某个commit之后的所有变动，其"提交说明"必须符合搜索条件
    - `$ git log --follow [file]`
    - `$ git whatchanged [file]`
        > 显示某个文件的版本历史，包括文件改名
    - `$ git log -p [file]`
        > 显示指定文件相关的每一次diff
    - `$ git log -5 --pretty --oneline`
        > 显示过去5次提交
    - `$ git shortlog -sn`
        > 显示所有提交过的用户，按提交次数排序
    - `$ git blame [file]`
        > 显示指定文件是什么人在什么时间修改过
    - `$ git diff`
        > 显示暂存区和工作区的差异
    - `$ git diff --cached [file]`
        > 显示暂存区和上一个commit的差异
    - `$ git diff HEAD`
        > 显示工作区与当前分支最新commit之间的差异
    - `$ git diff [first-branch]...[second-branch]`
        > 显示两次提交之间的差异
    - `$ git diff --shortstat "@{0 day ago}"`
        > 显示今天你写了多少行代码
    - `$ git show [commit]`
        > 显示某次提交的元数据和内容变化
    - `$ git show --name-only [commit]`
        > 显示某次提交发生变化的文件
    - `$ git show [commit]:[filename]`
        > 显示某次提交时，某个文件的内容
    - `$ git reflog`
        > 显示当前分支的最近几次提交
1. 远程同步
    - `$ git fetch [remote]`
        > 下载远程仓库的所有变动
    - `$ git remote -v`
        > 显示所有远程仓库
    - `$ git remote show [remote]`
        > 显示某个远程仓库的信息
    - `$ git remote add [shortname] [url]`
        > 增加一个新的远程仓库，并命名
    - `$ git pull [remote] [branch]`
        > 取回远程仓库的变化，并与本地分支合并
    - `$ git push [remote] [branch]`
        > 上传本地指定分支到远程仓库
    - `$ git push [remote] --force`
        > 强行推送当前分支到远程仓库，即使有冲突
    - `$ git push [remote] --all`
        > 推送所有分支到远程仓库
1. 撤销
    - `$ git checkout [file]`
        > 恢复暂存区的指定文件到工作区
    - `$ git checkout [commit] [file]`
        > 恢复某个commit的指定文件到暂存区和工作区
    - `$ git checkout .`
        > 恢复暂存区的所有文件到工作区
    - `$ git reset [file]`
        > 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变
    - `$ git reset --hard`
        > 重置暂存区与工作区，与上一次commit保持一致
    - `$ git reset [commit]`
        > 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变
    - `$ git reset --hard [commit]`
        > 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致
    - `$ git reset --keep [commit]`
        > 重置当前HEAD为指定commit，但保持暂存区和工作区不变
    - `$ git revert [commit]`
        > 新建一个commit，用来撤销指定commit
        > 后者的所有变化都将被前者抵消，并且应用到当前分支
    - `$ git stash`
    - `$ git stash pop`
        > 暂时将未提交的变化移除，稍后再移入
1. 其他
    - `$ git archive`
        > 生成一个可供发布的压缩包
















# Git分支管理策略
概要：相比同类软件，Git有很多优点。其中很显著的一点，就是版本的分支（branch）和合并（merge）十分方便。有些传统的版本管理软件，分支操作实际上会生成一份现有代码的物理拷贝，而Git只生成一个指向当前版本（又称"快照"）的指针，因此非常快捷易用。  
但是，太方便了也会产生副作用。如果你不加注意，很可能会留下一个枝节蔓生、四处开放的版本库，到处都是分支，完全看不出主干发展的脉络。
***
![混乱的脉络](https://www.ruanyifeng.com/blogimg/asset/201207/bg2012070502.png)
Vincent Driessen提出了一个分支管理的策略，我觉得非常值得借鉴。它可以使得版本库的演进保持简洁，主干清晰，各个分支各司其职、井井有条。理论上，这些策略对所有的版本管理系统都适用，Git只是用来举例而已。如果你不熟悉Git，跳过举例部分就可以了。  
***
>《 Git分支管理策略 》 作者：阮一峰 网址：<http://www.ruanyifeng.com/blog/2012/07/git.html>
***
## 一、主分支Master
1. 首先，代码库应该有一个、且仅有一个主分支。所有提供给用户使用的正式版本，都在这个主分支上发布。
    ![主分支Master](https://www.ruanyifeng.com/blogimg/asset/201207/bg2012070503.png)  
    Git主分支的名字，默认叫做Master。它是自动建立的，版本库初始化以后，默认就是在主分支在进行开发。
## 二、开发分支Develop
1. 主分支只用来分布重大版本，日常开发应该在另一条分支上完成。我们把开发用的分支，叫做Develop。
    ![开发分支Develop](https://www.ruanyifeng.com/blogimg/asset/201207/bg2012070504.png)  
    这个分支可以用来生成代码的最新隔夜版本（nightly）。如果想正式对外发布，就在Master分支上，对Develop分支进行"合并"（merge）。
    Git创建Develop分支的命令：
    ```
    git checkout -b develop master
    ```
    将Develop分支发布到Master分支的命令：
    ```
    # 切换到Master分支
    git checkout master

    # 对Develop分支进行合并
    git merge --no-ff develop
    ```
    这里稍微解释一下，上一条命令的--no-ff参数是什么意思。默认情况下，Git执行"快进式合并"（fast-farward merge），会直接将Master分支指向Develop分支。  
    ![fast forward merge](https://www.ruanyifeng.com/blogimg/asset/201207/bg2012070505.png)   
    使用--no-ff参数后，会执行正常合并，在Master分支上生成一个新节点。为了保证版本演进的清晰，我们希望采用这种做法。关于合并的更多解释，请参考Benjamin Sandofsky的[《Understanding the Git Workflow》](http://sandofsky.com/blog/git-workflow.html)。  
    ![fast forward merge](https://www.ruanyifeng.com/blogimg/asset/201207/bg2012070506.png) 
## 三、临时性分支
1. 前面讲到版本库的两条主要分支：Master和Develop。前者用于正式发布，后者用于日常开发。其实，常设分支只需要这两条就够了，不需要其他了。但是，除了常设分支以外，还有一些临时性分支，用于应对一些特定目的的版本开发。临时性分支主要有三种：
    ```
    　　* 功能（feature）分支
    　　* 预发布（release）分支
    　　* 修补bug（fixbug）分支
    ```
    这三种分支都属于临时性需要，使用完以后，应该删除，使得代码库的常设分支始终只有Master和Develop。
## 四、 功能分支
接下来，一个个来看这三种"临时性分支"。
1. 第一种是功能分支，它是为了开发某种特定功能，从Develop分支上面分出来的。开发完成后，要再并入Develop。
    ![feature](https://www.ruanyifeng.com/blogimg/asset/201207/bg2012070507.png)  
    功能分支的名字，可以采用feature-*的形式命名。
    创建一个功能分支：  
    `git checkout -b feature-x develop`
    开发完成后，将功能分支合并到develop分支：
    ```
    git checkout develop
    git merge --no-ff feature-x
    ```
    删除feature分支：  
    ``git branch -d feature-x``  
## 五、预发布分支
*******之后的内容没有整理。*******
1. 第二种是预发布分支，它是指发布正式版本之前（即合并到Master分支之前），我们可能需要有一个预发布的版本进行测试。  
预发布分支是从Develop分支上面分出来的，预发布结束以后，必须合并进Develop和Master分支。它的命名，可以采用release-*的形式。
创建一个预发布分支：
　　git checkout -b release-1.2 develop
确认没有问题后，合并到master分支：
　　git checkout master
　　git merge --no-ff release-1.2
　　# 对合并生成的新节点，做一个标签
　　git tag -a 1.2
再合并到develop分支：
　　git checkout develop
　　git merge --no-ff release-1.2
最后，删除预发布分支：
　　git branch -d release-1.2
## 六、修补bug分支
1. 最后一种是修补bug分支。软件正式发布以后，难免会出现bug。这时就需要创建一个分支，进行bug修补。  
修补bug分支是从Master分支上面分出来的。修补结束以后，再合并进Master和Develop分支。它的命名，可以采用fixbug-*的形式。
![bug分支](https://www.ruanyifeng.com/blogimg/asset/201207/bg2012070508.png)  
创建一个修补bug分支：

　　git checkout -b fixbug-0.1 master

修补结束后，合并到master分支：

　　git checkout master

　　git merge --no-ff fixbug-0.1

　　git tag -a 0.1.1

再合并到develop分支：

　　git checkout develop

　　git merge --no-ff fixbug-0.1

最后，删除"修补bug分支"：

　　git branch -d fixbug-0.1

（完）








# Git 使用规范流程
概要：团队开发中，遵循一个合理、清晰的Git使用流程，是非常重要的。否则，每个人都提交一堆杂乱无章的commit，项目很快就会变得难以协调和维护。
***
总体框架图：
下面是ThoughtBot 的Git使用规范流程。我从中学到了很多，推荐你也这样使用Git。
![总体框架图：](https://www.ruanyifeng.com/blogimg/asset/2015/bg2015080501.png)
***
>《 Git 使用规范流程 》 作者：阮一峰 网址：<http://www.ruanyifeng.com/blog/2015/08/git-use-process.html>
***

## 第一步：新建分支
首先，每次开发新功能，都应该新建一个单独的分支（这方面可以参考[《Git分支管理策略》](http://www.ruanyifeng.com/blog/2012/07/git.html)）。
1. 获取主干最新代码
    ```
    $ git checkout master
    $ git pull
    ```
1. 新建一个开发分支myfeature  
    `$ git checkout -b myfeature`
## 第二步：提交分支commit
1. 分支修改后，就可以提交commit了。
    ```
    $ git add --all
    $ git status
    $ git commit --verbose
    ```
    git add 命令的all参数，表示保存所有变化（包括新建、修改和删除）。从Git 2.0开始，all是 git add 的默认参数，所以也可以用 git add . 代替。
    git status 命令，用来查看发生变动的文件。
    git commit 命令的verbose参数，会列出 diff 的结果。
## 第三步：撰写提交信息  
1. 提交commit时，必须给出完整扼要的提交信息，下面是一个范本。
    ```
    Present-tense summary under 50 characters
    * More information about commit (under 72 characters).
    * More information about commit (under 72 characters).
    http://project.management-system.com/ticket/123
    ```
    第一行是不超过50个字的提要，然后空一行，罗列出改动原因、主要变动、以及需要注意的问题。最后，提供对应的网址（比如Bug ticket）。

## 第四步：与主干同步
1. 分支的开发过程中，要经常与主干保持同步。
    ```
    $ git fetch origin
    $ git rebase origin/master
    ```
## 第五步：合并commit
1. 分支开发完成后，很可能有一堆commit，但是合并到主干的时候，往往希望只有一个（或最多两三个）commit，这样不仅清晰，也容易管理。那么，怎样才能将多个commit合并呢？这就要用到 git rebase 命令。  
    `$ git rebase -i origin/master`  
    git rebase命令的i参数表示互动（interactive），这时git会打开一个互动界面，进行下一步操作。  
    下面采用Tute Costa的例子，来解释怎么合并commit。
    ```
    pick 07c5abd Introduce OpenPGP and teach basic usage
    pick de9b1eb Fix PostChecker::Post#urls
    pick 3e7ee36 Hey kids, stop all the highlighting
    pick fa20af3 git interactive rebase, squash, amend
    # Rebase 8db7e8b..fa20af3 onto 8db7e8b
    #
    # Commands:
    #  p, pick = use commit
    #  r, reword = use commit, but edit the commit message
    #  e, edit = use commit, but stop for amending
    #  s, squash = use commit, but meld into previous commit
    #  f, fixup = like "squash", but discard this commit's log message
    #  x, exec = run command (the rest of the line) using shell
    #
    # These lines can be re-ordered; they are executed from top to bottom.
    #
    # If you remove a line here THAT COMMIT WILL BE LOST.
    #
    # However, if you remove everything, the rebase will be aborted.
    #
    # Note that empty commits are commented out
    ```
    上面的互动界面，先列出当前分支最新的4个commit（越下面越新）。每个commit前面有一个操作命令，默认是pick，表示该行commit被选中，要进行rebase操作。  
    4个commit的下面是一大堆注释，列出可以使用的命令。 
    ``` 
    pick：正常选中
    reword：选中，并且修改提交信息；
    edit：选中，rebase时会暂停，允许你修改这个commit（参考这里）
    squash：选中，会将当前commit与上一个commit合并
    fixup：与squash相同，但不会保存当前commit的提交信息
    exec：执行其他shell命令
    ```
    上面这6个命令当中，squash和fixup可以用来合并commit。先把需要合并的commit前面的动词，改成squash（或者s）。
    ```
    pick 07c5abd Introduce OpenPGP and teach basic usage
    s de9b1eb Fix PostChecker::Post#urls
    s 3e7ee36 Hey kids, stop all the highlighting
    pick fa20af3 git interactive rebase, squash, amend
    ```
    这样一改，执行后，当前分支只会剩下两个commit。第二行和第三行的commit，都会合并到第一行的commit。提交信息会同时包含，这三个commit的提交信息。
    ```
    # This is a combination of 3 commits.
    # The first commit's message is:
    Introduce OpenPGP and teach basic usage

    # This is the 2nd commit message:
    Fix PostChecker::Post#urls

    # This is the 3rd commit message:
    Hey kids, stop all the highlighting
    ```
    如果将第三行的squash命令改成fixup命令。
    ```
    pick 07c5abd Introduce OpenPGP and teach basic usage
    s de9b1eb Fix PostChecker::Post#urls
    f 3e7ee36 Hey kids, stop all the highlighting
    pick fa20af3 git interactive rebase, squash, amend
    ```
    运行结果相同，还是会生成两个commit，第二行和第三行的commit，都合并到第一行的commit。但是，新的提交信息里面，第三行commit的提交信息，会被注释掉。
    ```
    # This is a combination of 3 commits.
    # The first commit's message is:
    Introduce OpenPGP and teach basic usage

    # This is the 2nd commit message:
    Fix PostChecker::Post#urls

    # This is the 3rd commit message:
    # Hey kids, stop all the highlighting
    ```
    Pony Foo提出另外一种合并commit的简便方法，就是先撤销过去5个commit，然后再建一个新的。
    ```
    $ git reset HEAD~5
    $ git add .
    $ git commit -am "Here's the bug fix that closes #28"
    $ git push --force
    squash和fixup命令，还可以当作命令行参数使用，自动合并commit。
    ```
    ```
    $ git commit --fixup  
    $ git rebase -i --autosquash 
    ```
    这个用法请参考[这篇文章](http://fle.github.io/git-tip-keep-your-branch-clean-with-fixup-and-autosquash.html)，这里就不解释了。
## 第六步：推送到远程仓库
1. 合并commit后，就可以推送当前分支到远程仓库了。
    ```
    $ git push --force origin myfeature
    ```
    git push命令要加上force参数，因为rebase以后，分支历史改变了，跟远程分支不一定兼容，有可能要强行推送（参见[这里](http://willi.am/blog/2014/08/12/the-dark-side-of-the-force-push/)）。
## 第七步：发出Pull Request
1. 提交到远程仓库以后，就可以发出 Pull Request 到master分支，然后请求别人进行代码review，确认可以合并到master。




# Git 工作流程
概要：Git 作为一个源码管理系统，不可避免涉及到多人协作。

协作必须有一个规范的工作流程，让大家有效地合作，使得项目井井有条地发展下去。"工作流程"在英语里，叫做"workflow"或者"flow"，原意是水流，比喻项目像水流那样，顺畅、自然地向前流动，不会发生冲击、对撞、甚至漩涡。  
本文介绍三种广泛使用的工作流程：  
- Git flow
- Github flow
- Gitlab flow
***
![Git 工作流程](https://www.ruanyifeng.com/blogimg/asset/2015/bg2015122301.png)
***
>《 Git分支管理策略 》 作者：阮一峰 网址：<http://www.ruanyifeng.com/blog/2015/12/git-workflow.html>
***
本文未作修改。

