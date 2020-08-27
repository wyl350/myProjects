# git 远程操作详解
概要：本文针对初级用户，从最简单的讲起，但是需要读者对Git的基本用法有所了解。同时，本文覆盖了上面5个命令的几乎所有的常用用法，所以对于熟练用户也有参考价值。
***
总体框架图：
![git lessons](https://www.ruanyifeng.com/blogimg/asset/2014/bg2014061202.jpg '总体框架图')
***
>《git 远程操作详解》 作者：阮一峰 网址：<http://www.ruanyifeng.com/blog/2014/06/git_remote.html>
***
git 远程操作 主要由以下五个方面的命令：
1. `git clone`
    > 远程操作的第一步，通常是从远程主机克隆一个版本库，这时就要用到git clone命令。
    1. `git clone <版本库的网址>`
        - `git clone https://github.com/wyl350/myStudy.git`
            > 在本地主机生成一个目录，与远程主机的版本库同名。
        >  从远程主机克隆一个版本库，该命令会在本地主机生成一个目录，与远程主机的版本库同名。如果要指定不同的目录名，可以将目录名作为git clone命令的第二个参数。
    1. `git clone <版本库的网址> <本地目录名>`
        > 将目录名作为git clone命令的第二个参数
        - `git clone https://github.com/wyl350/myStudy.git '学习文件'`
        - git clone支持多种协议，除了HTTP(s)以外，还支持SSH、Git、本地文件协议等，下面是一些例子。
            - `$ git clone http[s]://example.com/path/to/repo.git/`
            - `$ git clone ssh://example.com/path/to/repo.git/`
            - `$ git clone git://example.com/path/to/repo.git/`
                - `git clone [user@]example.com:path/to/repo.git/`
                    > SSH协议的另一种写法。
            - `$ git clone /opt/git/project.git` 
            - `$ git clone file:///opt/git/project.git`
            - `$ git clone ftp[s]://example.com/path/to/repo.git/`
            - `$ git clone rsync://example.com/path/to/repo.git/`
                > 通常来说，Git协议下载速度最快，SSH协议用于需要用户认证的场合。各种协议优劣的详细讨论请参考[官方文档](http://git-scm.com/book/en/Git-on-the-Server-The-Protocols)。
1. `git remote`
    > 为了便于管理，Git要求每个远程主机都必须指定一个主机名。 `git remote` 命令就用于管理主机名。
    1. `git remote`
        > 不带选项的时候，git remote 命令列出所有远程主机。
        ```
        $ git remote
        origin
        ```
    1. `git remote -v`
        > 使用-v选项，可以参看远程主机的网址。以下命令表示，当前只有一台远程主机，叫做origin，以及它的网址。
        ```bash
        $ git remote -v
        origin  git@github.com:jquery/jquery.git (fetch)
        origin  git@github.com:jquery/jquery.git (push)
        ```
    1. `git clone -o jQuery https://github.com/jquery/jquery.git`
        > 克隆版本库的时候，所使用的远程主机自动被Git命名为origin。如果想用其他的主机名，需要用git clone命令的-o选项指定。
        ```
        $ git clone -o jQuery https://github.com/jquery/jquery.git
        $ git remote
        jQuery
        ```
    1. `git remote show <主机名>`
        > git remote show 命令加上主机名，可以查看该主机的详细信息。
        - `git remote show origin`
        ```bash
        $ git remote show origin
        remote origin
        Fetch URL: https://github.com/wyl350/myStudy.git
        Push  URL: https://github.com/wyl350/myStudy.git
        HEAD branch: master
        Remote branches:
        gh-pages tracked
        master   tracked
        Local branch configured for 'git pull':
        master merges with remote master
        Local ref configured for 'git push':
        master pushes to master (up to date)
        ```
    1. `git remote add`
        > 用于添加远程主机。
        - git remote add <主机名> <网址>
    1. `git remote rm`
        > 用于删除远程主机。
        - `git remote rm <主机名>`
    1. `  git remote rename`
        > 远程主机改名
        - `git remote rename <原主机名> <新主机名>`
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
1. `git pull`
    > 取回远程主机某个分支的更新，再与本地的指定分支合并。它的完整格式稍稍有点复杂。
    1. `git pull <远程主机名> <远程分支名>:<本地分支名>`
        - `git pull origin next:master`
            > 取回origin主机的next分支，与本地的master分支合并。
        - `git pull origin next`
            > 如果远程分支是与当前分支合并，则冒号后面的部分可以省略,即省略当前的分支。注意：因此，是本地的分支是可以合并远程的任意分支。并不限于跟踪关系。  
            > 上面命令表示，取回origin/next分支，再与当前分支合并。实质上，这等同于先做git fetch，再做git merge。  
            > 在某些场合，Git会自动在本地分支与远程分支之间，建立一种追踪关系（tracking）。比如，在git clone的时候，所有本地分支默认与远程主机的同名分支，建立追踪关系，也就是说，本地的master分支自动"追踪"origin/master分支。Git也允许手动建立追踪关系。
        - `git branch --set-upstream master origin/next`
            > 指定master分支追踪origin/next分支。
        - `git pull origin`
            > 如果当前分支与远程分支存在追踪关系，git pull就可以省略远程分支名。上面命令表示，本地的当前分支自动与对应的origin主机"追踪分支"（remote-tracking branch）进行合并。如果当前分支只有一个追踪分支，连远程主机名都可以省略，如下。
        - `git pull`
            > 上面命令表示，当前分支自动与唯一一个追踪分支进行合并。
    1. `git pull --rebase <远程主机名> <远程分支名>:<本地分支名>`
        > 如果合并需要采用rebase模式，可以使用--rebase选项。如果远程主机删除了某个分支，默认情况下，git pull 不会在拉取远程分支的时候，删除对应的本地分支。这是为了防止，由于其他人操作了远程主机，导致git pull不知不觉删除了本地分支。(可见，这是一个例外情况，但是是保护机制。)
        - `git pull -p`
            > 但是，你可以改变这个行为，加上参数 -p 就会在本地删除远程已经删除的分支。
            ```
            $ git pull -p
            # 等同于下面的命令
            $ git fetch --prune origin 
            $ git fetch -p
            ```
1. `git push`
    >git push命令用于将本地分支的更新，推送到远程主机。它的格式与git pull命令相仿。git push不会推送标签（tag），除非使用--tags选项。
    1. git push <远程主机名> <本地分支名>:<远程分支名>
    > 注意，分支推送顺序的写法是<来源地>:<目的地>，所以git pull是<远程分支>:<本地分支>，而git push是<本地分支>:<远程分支>。  
    1. `git push origin master`
        > 如果省略远程分支名，则表示将本地分支推送与之存在"追踪关系"的远程分支（通常两者同名），如果该远程分支不存在，则会被新建。上面命令表示，将本地的master分支推送到origin主机的master分支。如果后者不存在，则会被新建。
    1. `git push origin :master`
        ```bash
        $ git push origin :master
        # 等同于
        $ git push origin --delete master
        ```
        > 如果省略本地分支名，则表示删除指定的远程分支，因为这等同于推送一个空的本地分支到远程分支。上面命令表示删除origin主机的master分支。
        - `git push origin`
            > 如果当前分支与远程分支之间存在追踪关系，则本地分支和远程分支都可以省略。
        - `git push`
            > 如果当前分支只有一个追踪分支，那么主机名都可以省略。
        - `git push -u origin master`
            > 上面命令将本地的master分支推送到origin主机，同时指定origin为默认主机，后面就可以不加任何参数使用git push了。
        - `git config --global push.default matching` 或者 `git config --global push.default simple`
            > 不带任何参数的`git push`，默认只推送当前分支，这叫做simple方式。此外，还有一种matching方式，会推送**所有**有对应的远程分支的本地分支。Git 2.0版本之前，默认采用matching方法，现在改为默认采用**simple**方式。如果要修改这个设置，可以采用git config命令。
        - `git push --all origin`
            > 还有一种情况，就是不管是否存在对应的远程分支，将本地的所有分支都推送到远程主机，这时需要使用--all选项。上面命令表示，将所有本地分支都推送到origin主机。
        - git push --force origin 
            > 如果远程主机的版本比本地版本更新，推送时Git会报错，要求先在本地做git pull合并差异，然后再推送到远程主机。这时，如果你一定要推送，可以使用--force选项。上面命令使用--force选项，结果导致远程主机上更新的版本被覆盖。除非你很确定要这样做，否则应该尽量避免使用--force选项。


要了解两个概念：
## 远程连接方式：
1. git remote **查看主机名**
    ```bash
    $ git remote
    origin
    ```
1. git remote -v  **查看连接方式**
    ```bash
    $ git remote -v
    origin  git@github.com:wyl350/myStudy.git (fetch)
    origin  git@github.com:wyl350/myStudy.git (push)
    ```
    > 远程连接有几种协议方式：现在我掌握了两种方式：
    http和git：https协议方式每次登陆需要输入账户密码登陆，除非网页用户名登陆，则可以在bash端短期内实现自动登陆。
    git 协议则不受时间限制，可以实现自动登陆。
    1. https://github.com/wyl350/myStudy.git
    1. git@github.com:wyl350/myStudy.git
1. git remote rm origin **删除 origin 主机连接方式**
    ```bash
    git remote rm origin
    ```
## 跟踪远程主机名
1. git remote add origin git协议地址  
    > 连接方式更改为SSH方式
1. git remote add origin https地址，
    > 连接方式更改为https方式
## 跟踪远程分支
1. git branch --set-upstream-to=origin/dev

