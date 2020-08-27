## 四、GitHub 的远程与本地交互使用
```
<!-- 克隆远程仓库到本地库 -->
- git clone git@github.com:账号名/项目名.git    //克隆远程仓库到本地库

<!-- 查看远程库信息 -->
- git remote -v    

<!-- 远程的仓库命名并添加 添加远程就可以推送了。-->
git remote add origin https:ithub.com/wyl350/bj18.git
- git remote rm origin   删除远程origin

<!-- push 分支到远程仓库 -->
- git push origin master      //向远程库提交分支master，也可以提交dev

<!-- 本地与远程交互 -->
- git branch –set-upstream dev origin/dev    //抓取前要本地分支与远程分支关联
- git branch --set upstream-to=origin/smart smart
以上这两句的功能可能都是相同的。
- git checkout -b dev origin/dev    //拉取远程库的dev分支到本地
- git pull    //抓起远程库最新后才能提交
```
## 六、错误处理
    // git错误 error: failed to push some refs to 'https://github.com/
    // 问题解决办法：
    // https://blog.csdn.net/dietime1943/article/details/85682688

    // 问题原因：远程库与本地库不一致造成的，在 hint 中也有提示把远程库同步到本地库就可以了。
    // 解决办法：使用命令行：
    // git pull--rebase origin master
    // 该命令的意思是把远程库中的更新合并到（pull = fetch + merge）本地库中，
    // 2. 执行 git pull -–rebase origin master 操作，意为先取消commit记录，
    // 并且把它们临时保存为补丁(patch)(这些补丁放到”.git/rebase”目录中)，
    // 之后同步远程库到本地，最后合并补丁到本地库之中。

    // –-rebase 的作用是取消掉本地库中刚刚的commit，并把他们接到更新后的版本库之中。
    // 出现如下图执行pull执行成功后，可以成功执行以下操作。
    // git push origin master


    // git push--help
    // 远程的repo对于本地repo来说，就是upstream。
    // 当你从GitHub上 fork 一个 repo 之后，再 clone forked repo 到本地，
    // 你就可以任意向其pull request，此时，远程的 repo 就是 origin。

    // fork 了一个项目, origin 指向你的项目。
    // upsteam 指向fork的原项目。
    // 比如 你fork了一个 wangding的 project1
    // 你clone下来的 origin 指 your / project1(源是指自己的）

    //     upstream 指tom / project1 （指向被fork别人的库）

    // 总结下来：

    // 1. 如果是 upstream repo，你只可以拉取最新代码（即 git fetch ），从而保证你本地的仓库与源仓库同步
    // 2. 如果是 origin repo，就是你自己的repo（自己创建的，或者 fork 的项目）你可以做 任何推拉操作（pull and push）
    // 3. 你可以通过 pull request 向 upstream repo 贡献代码


{   // github 的其他命令

    // echo $HOME         显示为: /c/Users/Administrator
    // git log 展示的提交并不是当前机器的全部 提交。
    // 例如：如果当前机器从远程pull了一个分支，这个分支上面的全部提交将会下载到本地。
    // 但是要注意，本地机器可能还停留在在上次在本地最后停留的head位置，并不是远程提交的版本，如果本地机器需要更新的话，应该
    // git reset--hard 版本hash
    // 这个版本hash可以通过以下命令得到
    // git log--all--oneline--graph  远程仓库状态

    // 补充命令，这几个命令我不是很熟悉：
    // git push--force   强制覆盖线上
    // git reset--hard   老版本hash

# 还没有详细总结过的
{  // 以下是我总结的比较常用的同步命令：

    // git remote rm origin   删除远程origin

    // git pull origin    注意，origin是本地电脑建立的一个与网上链接的名字。当然是可以建立多个的。当然也是改名字的。这点非常的重要。本步骤的前提就是 添加远程仓库。注意，这里用的是添加，而不是创建，创建只能在远程网址进行。
    // git log--all--oneline--graph  查看远程仓库状态（这个命令可能是错误的）    
    // git log  查看当前库状态
    // q 退出当前库log

    // git reset--hard   老版本hash
    // git push
    // git push --set-upstream origin my-branch  如果远程没有my-branch这个分支的话，必须要加上 --set-upstream 这个参数。表示是新建立的branch
    // git push -u origin master //第一次push的时候要 -u （这里的这个意思和上面的--set-upstream是不是一样的？？？？？？）



    // 常用操作
    // 对比文件的不同    对比文件是否相同，我仍然不会。
    // git diff head -- code.txt   对比工作区的文件和版本库文件的不同
    // 对比两个版本之间的不同
    // git diff head^ -- code.txt

}
{   // 如何忽略上传到github上面的文件，
    // 新建 一个 .gitignore 文件，内容如下：
    // node_modules
    // npm - debug.log
    // package - lock.json
    // # 忽略上面三个文件 （# 是注释的意思。）
}
{   // github 的中文深入教程
    //     1 添加远程仓库
    // 命令格式： git remote add [shortname---自定义名字] [url---克隆地址比如https://gitee.com/exa.git]
    // 举例：$ git remote add bpe-boot https://gitee.com/bpe/bpe-boot.git  (这里一定注意设置的远程仓库的仓库名 bpe-boot )
    // 2 查看远程仓库：
    // $ git remote -v
    // 3 更新代码，同步原仓库（rebase）
    // 3.1 同步源仓库的信息到本地
    // $ git remote update bpe-boot
    // 3.2 将源仓库的信息merge到本地分支:
    // $ git checkout dev
    // $ git rebase bpe-boot/dev

    // 4 拉取远程代码合并到本地 （ merge完整操作 ）
    // 4.1 git remote add remoteDep https://gitee.com/xxx/bpe-boot.git//添加远程仓库，命名upstream
    // 4.2 git fetch remoteDep  //远程拉取代码
    // 4.3 git merge remoteDep / master  //合并远程代码到本地-master分支
    // 4.4 git commit - m "mesg"//提交代码到本地
    // 4.5 git push origin maste//推送代码到仓库
}
{   // 什么是 fork ,这里有一个国外网站，不用翻墙， 学习网站： https://stackoverflow.com/questions/2739376/definition-of-downstream-and-upstream/2749166#2749166

    // Fork，本身并不是git工具中的一个命令，也不是对git的扩展，它是在GitHub上的概念，是另一种clone方式——在服务器端的clone。(服务器端clone)
    // 而我们通常意义上的clone，是将远程repo 复制一份到本地。

    // 当你从GitHub上 clone 一个 repo 到本地时，除非你已明确声明是这个repo的contributor，否则你是不能向其pull request的，此时，该远程的repo对于本地repo来说，就是upstream。
    // 当你从GitHub上 fork 一个 repo 之后，再 clone forked repo 到本地，你就可以任意向其pull request，此时，远程的 repo 就是 origin。
