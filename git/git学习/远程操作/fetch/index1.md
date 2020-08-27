## `git fetch`该命令是程序员最长使用的命令
1. `git fetch`
    > 一旦远程主机的版本库有了更新（Git术语叫做commit），需要将这些更新取回本地，这时就要用到git fetch命令。
    1.  git fetch <远程主机名>
        > 上面命令将某个远程主机的更新，全部取回本地。`git fetch`命令通常用来查看其他人的进程，因为它取回的代码对你本地的开发代码没有影响。所取回的更新，在本地主机上要用"远程主机名/分支名"的形式读取。比如origin主机的master，就要用`origin/master`读取。
    1. `$ git fetch <远程主机名> <分支名>`
        > 取回远程部分分支
        - `$ git fetch origin master`
        > 取回origin主机的master分支。
    1. `git branch -r`
        > git branch命令的-r选项，可以用来查看远程分支。
        ```
        $ git branch -r
        origin/master
        ```
    1. `git branch -a`
        > -a选项查看所有分支。
        ```
        $ git branch -a
        * master
          remotes/origin/master
        ```
        > 上面命令表示，本地主机的当前分支是master，远程分支是origin/master。
    1. `git merge origin/master` 或者 `git rebase origin/master`
        > 上面命令表示在当前分支上，合并origin/master。


