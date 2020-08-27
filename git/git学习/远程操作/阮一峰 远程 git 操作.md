
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

