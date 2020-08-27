// recap[ˈriːkæp]   简要回顾
// touched on  涉及
// restore 恢复
// backbone 骨干
// stunning  给人以深刻印象的;


{ // 英文学习文档  
    // 学习网址：https://guides.github.com/introduction/git-handbook/
    // 学习资源介绍：https://help.github.com/en/github/getting-started-with-github/git-and-github-learning-resources
    {   // Git Handbook 通篇学习四个概念： What is Version Control? Repositories,    Basic Git,GitHub.之后按照这四部分内容进行分类学习。
        {// concept： version control system,distributed version control system,git,repository,
            // What’s a version control system ?
            //     A version control system, or VCS, tracks the history of changes as people and teams collaborate on projects together.As the project evolves, teams can run tests, fix bugs, and contribute new code with the confidence that any version can be recovered at any time.Developers can review project history to find out:
            // Which changes were made ?
            // Who made the changes ?
            // When were the changes made ?
            // Why were changes needed ?

            // What’s a distributed version control system ?
            //     Git is an example of a distributed version control system(DVCS) commonly used for open source and commercial software development.DVCSs allow full access to every file, branch, and iteration of a project, and allows every user access to a full and self - contained history of all changes.Unlike once popular centralized version control systems, DVCSs like Git don’t need a constant connection to a central repository[rɪˈpɒzətri].Developers can work anywhere and collaborate asynchronously [eɪˈsɪŋkrənəs]异步 from any time zone.
            // Without version control, team members are subject to redundant tasks, slower timelines, and multiple copies of a single project.To eliminate unnecessary work, Git and other VCSs give each contributor a unified and consistent view of a project, surfacing work that’s already in progress.Seeing a transparent history of changes, who made them, and how they contribute to the development of a project helps team members stay aligned 排整齐的 while working independently.

            //         Why Git?
            // According to the latest Stack Overflow developer survey, more than 70 percent of developers use Git, making it the most-used VCS in the world. Git is commonly used for both open source and commercial software development, with significant benefits for individuals, teams and businesses.

            // Git lets developers see the entire timeline of their changes, decisions, and progression of any project in one place. From the moment they access the history of a project, the developer has all the context they need to understand it and start contributing.

            // Developers work in every time zone. With a DVCS like Git, collaboration can happen any time while maintaining source code integrity. Using branches, developers can safely propose changes to production code.

            // Businesses using Git can break down communication barriers between teams and keep them focused on doing their best work. Plus, Git makes it possible to align使一致 experts across a business to collaborate on major projects

            //         What’s a repository?
            // A repository, or Git project, encompasses[ɪnˈkʌmpəsɪz]包含，包括 the entire collection of files and folders associated with a project, along with each file’s revision history. The file history appears as snapshots in time called commits（这是github 一个非常重要的概念。）, and the commits exist as a linked-list链表 relationship, and can be organized into multiple lines of development called branches. Because Git is a DVCS, repositories are self-contained units and anyone who owns a copy of the repository can access the entire codebase and its history霸气霸气太霸气了. Using the command line or other ease-of-use易用的 interfaces, a git repository also allows for: interaction with the history, cloning, creating branches, committing, merging, comparing changes across versions of code, and more.这里看出github的真正功能有：与历史版本交互。主要有：克隆、创建分支、提交、合并和版本简区别对比。
            // Working in repositories keeps development projects organized and protected. Developers are encouraged to fix bugs, or create fresh features, without fear of derailing mainline脱离主干线 development efforts. Git facilitates方便 this through the use of topic branches: lightweight pointers to commits in history that can be easily created and deprecated[ˈdeprəkeɪt] 反对 不赞成 when no longer needed.
            // Through platforms like GitHub, Git also provides more opportunities for project transparency and collaboration. Public repositories help teams work together to build the best possible final product.
        }
        {// Basic Git commands        
            // To use Git, developers use specific commands to copy, create, change, and combine code. These commands can be executed directly from the command line or by using an application like GitHub Desktop  or Git Kraken 这两个是什么东东，我认为我暂时不需要 这种图形化操作界面. Here are some common commands for using Git:
            // GitHub Desktop的网址： https://desktop.github.com/

            // git init 
            // initializes a brand new Git repository and begins tracking an existing directory. It adds a hidden subfolder within the existing directory that houses the internal data structure required for version control.这个数据结构是版本所必须的。

            // git clone 
            // creates a local copy of a project that already exists remotely. The clone includes all the project’s files, history, and branches.这个 命令我没有尝试过。 这个命令有没有少内容？

            // git add
            // stages a change. Git tracks changes to a developer’s codebase, but it’s necessary to stage and take a snapshot of the changes to include them in the project’s history. This command performs staging, the first part of that two-step process（staging and committing？）. Any changes that are staged will become a part of the next snapshot and a part of the project’s history. Staging and committing separately gives developers complete control over the history of their project without changing how they code and work.

            // git commit 
            // saves the snapshot to the project history and completes the change-tracking process. In short, a commit functions起作用 like taking a photo. Anything that’s been staged with git add will become a part of the snapshot with git commit.

            // git status 
            // shows the status of changes as untracked, modified, or staged.这几个状态要详细的思考一下。

            // git branch 
            // shows the branches being worked on locally.

            // git merge 
            // merges lines of development together. This command is typically典型的、通常的 used to combine changes made on two distinct branches. For example, a developer would merge when they want to combine changes from a feature branch into the master branch for deployment.

            // git pull 
            // updates the local line of development with updates from its remote counterpart对方. Developers use this command if a teammate has made commits to a branch on a remote, and they would like to reflect those changes in their local environment.

            // git push 
            // updates the remote repository with any commits made locally to a branch.

            // Learn more from a full reference guide参考指南 to Git commands.
            // https://git-scm.com/docs

            // Explore more Git commands
            // For a detailed look at Git practices, the videos below show how to get the most out of some Git commands.
            // Working locally: https://www.youtube.com/watch?v=rBbbOouhI-s&index=2&list=PLg7s6cbtAD17Gw5u8644bgKhgRLiJXdX4
            // git status: https://www.youtube.com/watch?v=SxmveNrZb5k&list=PLg7s6cbtAD17Gw5u8644bgKhgRLiJXdX4&index=3
            // Two - step commits: https://www.youtube.com/watch?v=Vb0Ghkkc2hk&index=4&list=PLg7s6cbtAD17Gw5u8644bgKhgRLiJXdX4
            // git pull and git push: https://www.youtube.com/watch?v=-uQHV9GOA0w&index=5&list=PLg7s6cbtAD17Gw5u8644bgKhgRLiJXdX4
        }
        {  // some new concept
            // How GitHub fits in 相处融洽，这里只github能够满足大家要求
            //     GitHub is a Git hosting repository that provides developers with tools to ship better code through command line features这里具体是指什么意思, issues(threaded discussions), pull requests, code review, or the use of a collection of free and for-purchase apps in the GitHub Marketplace.With collaboration layers like the GitHub flow, a community of 15 million developers, and an ecosystem with hundreds of integrations, GitHub changes the way software is built.

            // How GitHub works
            // GitHub builds collaboration合作 directly into the development process. Work is organized into repositories, where developers can outline requirements概括出需求 or direction and set expectations设定预期 for team members. Then, using the GitHub flow, developers simply create a branch to work on updates更新, commit changes to save them, open a pull request to propose 提议 and discuss changes, and merge pull requests once everyone is on the same page.（there are these concepts: repositories   the GitHub flow   pull request）

            // The GitHub flow
            {   // Understanding the GitHub flow
                // GitHub flow is a lightweight, branch-based workflow that supports teams and projects where deployments are made regularly. This guide explains how and why GitHub flow works.

                // Create a branch
                // When you're working on a project, you're going to have a bunch of different features or ideas in progress at any given time – some of which are ready to go, and others which are not. Branching exists to help you manage this workflow.

                // When you create a branch in your project, you're creating an environment where you can try out new ideas. Changes you make on a branch don't affect the master branch, so you're free to experiment and commit changes, safe in the knowledge知悉 that your branch won't be merged until it's ready to be reviewed by someone you're collaborating with.

                // ProTip
                // Branching is a core concept in Git, and the entire GitHub flow is based upon it. There's only one rule: anything in the master branch is always deployable.确保主干道的代码是可以部署的。

                // Because of this, it's extremely important that your new branch is created off of创建自 master when working on a feature or a fix. Your branch name should be descriptive (e.g., refactor-authentication, user-content-cache-key, make-retina-avatars), so that others can see what is being worked on.

            }
            // The GitHub flow is a lightweight, branch-based workflow工作流 built around core Git commands used by teams around the globe—including ours.

            // The GitHub flow has six steps, each with distinct benefits when implemented执行:

            // Create a branch: Topic branches created from the [kəˈnɒnɪkl] deployment branch (usually master) allow teams to contribute to many parallel efforts. Short-lived topic branches, in particular, keep teams focused and results in quick ships.
            // Add commits: Snapshots of development efforts within a branch create safe, revertible [rɪ'vɜ:tɪbl]可回复的 points in the project’s history.
            // Open a pull request: Pull requests publicize推广 a project’s ongoing efforts and set the tone for a transparent development process.
            // Discuss and review code: Teams participate in code reviews by commenting, testing, and reviewing open pull requests. Code review is at the core of an open and participatory供人分享的; culture.
            // Merge: Upon clicking merge, GitHub automatically performs the equivalent相等的 of a local ‘git merge’ operation. GitHub also keeps the entire branch development history on the merged pull request.
            // Deploy: Teams can choose the best release cycles or incorporate continuous integration tools and operate with the assurance that code on the deployment branch has gone through a robustrəʊ[ˈbʌst]强健的 workflow.

            // Learn more about the GitHub flow
            // Developers can find more information about the GitHub flow in the resources provided below.

            // Interactive guide: https://guides.github.com/introduction/flow/
            // GitHub Flow video: https://www.youtube.com/watch?v=47E-jcuQz5c&index=1&list=PLg7s6cbtAD17Gw5u8644bgKhgRLiJXdX4
        }
        {   // GitHub and the command line
            // For developers new to the command line, the GitHub Training team has put together a series of tutorials(https://help.github.com/articles/git-and-github-learning-resources/) on Git commands to guide the way. Sometimes, a series of commands can paint a picture of how to use Git:
            {   // Examples 极为经典的三个例子。
                {   // Example: Contribute to an existing repository 在远程已经有的项目上，贡献自己的分支。首先要克隆远程，建立分支，修改文件，推送自己的分支。
                    // # download a repository on GitHub.com to our machine 下载下来一个特定的仓库，当前所处的是该仓库的父文件夹
                    // git clone https://github.com/me/repo.git           
                    // # change into the `repo` directory 进入该下载后的仓库文件夹中
                    // cd repo

                    // # create a new branch to store any new changes 首先要创建一个分支，用来保存自己对这个仓库的修改。
                    // git branch my-branch

                    // # switch to that branch (line of development开发所在分支线) 
                    // git checkout my-branch 入驻这个创建的这个开发分支
                    // checkout 登记入住的意思

                    // # make changes, for example, edit `file1.md` and `file2.md` using the text editor

                    // # stage the changed files    stage步骤
                    // git add file1.md file2.md

                    // # take a snapshot of the staging area (anything that's been added只有通过add的东西才能take a snapshot)  take a snapshot步骤
                    // git commit -m "my snapshot"   这里应该也是可以不命名或者是几次take a snapshot 用相同的名字

                    // # push changes to github
                    // git push --set-upstream origin my-branch 这里的--set-upstream是什么意思。
                }
                {   //Example: Start a new repository and publish it to GitHub 本地创建仓库，并把它发布在远程（这里有一个重要的条件，就是必须手动在网站上面事先创建一个仓库）。初始化仓库 state    commit 设置远程origin项目是哪一个  向设定的origin上push master主分支。
                    // First, you will need to create a new repository on GitHub. You can learn how to create a new repository in our Hello World guide（https://guides.github.com/activities/hello-world/#repository）. Do not initialize the repository with a README, .gitignore or License. This empty repository will await your code.

                    // # create a new directory, and initialize it with git-specific functions
                    // git init my-repo  这个步骤是可以直接创建 my-repo 文件夹并且git初始化的

                    // # change into the `my-repo` directory
                    // cd my-repo

                    // # create the first file in the project
                    // touch README.md

                    // # git isn't aware of the file, stage it
                    // git add README.md

                    // # take a snapshot of （the staging area）
                    // git commit -m "add README to initial commit"
                    // （以上的步骤就是在本地创建一个仓库。）

                    // # provide the path for the repository you created on github（可见，在网站创建repository是必须的。）
                    // git remote add origin https://github.com/wyl350/repo.git


                    // git remote add origin https://github.com/wyl350/test_online 这一步并不会将数据上传，而是设定 origin 是哪一个仓库  这里有一个查看状态命令 git remote -v 用以查看当前的远程 origin 仓库是哪一个。
                    // # push changes to github
                    // git push --set-upstream origin master
                }
                {  //Example: contribute to an existing branch on GitHub
                    // # assumption假设: a project called `repo` already exists on the machine, and a new branch has been pushed to GitHub.com since the last time changes were made locally

                    // # change into the `repo` directory
                    // cd repo

                    // # update all remote tracking branches, and the currently checked out branch 把远程库和历史拿过来。
                    // git pull   这一步必须先行设置远程的origin，而origin的设置必须是先要初始化git

                    // # change into the existing branch called `feature-a`
                    // git checkout feature-a

                    // # make changes, for example, edit `file1.md` using the text editor

                    // # stage the changed file
                    // git add file1.md

                    // # take a snapshot of the staging area
                    // git commit -m "edit file1"

                    // # push changes to github
                    // git push


                    // The current branch feature - a has no upstream branch.
                    // To push the current branch and set the remote as upstream, use
                    // git push--set - upstream origin feature - a
                    // 注意这里的，如果远程没有这个分支的话，就不能使用git push，而是需要用这里的 git push--set - upstream origin feature - a


                }
            }
        }
        {// Models for collaborative development            
            // There are two primary ways people collaborate on GitHub:
            // Shared repository
            // Fork (https://help.github.com/articles/about-forks/)and pull(https://help.github.com/articles/using-pull-requests)
            // With a shared repository, individuals and teams are explicitly明确的 designated as contributors with read, write, or administrator access. This simple permission structure, combined with features like protected branches and Marketplace, helps teams progress quickly when they adopt GitHub.

            // For an open source project, or for projects to which anyone can contribute, managing individual permissions can be challenging, but a fork and pull model allows anyone who can view the project to contribute. A fork is a copy of a project under an developer’s personal account. Every developer has full control of their fork and is free to implement a fix or new feature. Work completed in forks is either kept separate, or is surfaced back to the original project via a pull request. There, maintainers can review the suggested changes before they’re merged. See the Forking Projects Guide for more information.
        }
        {   // Learn at your own pace  how to learn github
            // The GitHub team has created a library of educational videos and guides to help users continue to develop their skills and build better software.
            {   // 第一课
                // You learned about issues, pull requests, and the structure of a GitHub repository
                // You learned about branching
                // You created a commit
                // You viewed and responded to pull request reviews
                // You edited an existing file
                // You enabled GitHub Pages
                // You made your first contribution! 

            }
            {   // 第二课
                // tags, headers, lists, images, and links
                // 一定要弄清楚以上这几个单词的意思。


                //  GitHub Community： https://github.community/t5/GitHub-Learning-Lab/bd-p/learn

                // dedicated 专用的   This course has a dedicated message board on the GitHub Community website
                // troubleshoot  故障排除
                // stands for 代表
                // I may take up to a minute to respond as I wait for GitHub Pages to create a deployment of your repository(在等待GitHub页面创建存储库的部署时，我可能需要一分钟的时间做出响应。). 注意这里的take up to 的意思。
                // hierarchical [ˌhaɪəˈrɑːkɪkl] 按等级划分的;等级制度的






            }

            {// Beginner projects to explore: https://github.com/showcases/great-for-new-contributors
                // Great for new contributors
                // These projects have a history and reputation for being welcoming to new open source contributors. Have you had a great experience as a new contributor on an open source project? We'd love to hear about it!我看这个网站的时候，大概有十四个 repos。非常有名且容易学习的
                // what can we help with?： https://support.github.com/  这个网站可以很好的查询你不知道的东西。
            }
            // GitHub video guides: https://youtube.com/githubguides
            {// GitHub on-demand training: https://services.github.com/on-demand/ 一个强大的git官网制作的学习网站 learning lab
                {   // GitHub Learning Lab                    
                    // Next: Confirm your installation location.
                    // Level up your GitHub skills with GitHub Learning Lab. Our friendly bot will take you through a series of fun, practical projects that will give you the skills you need in no time很快--and share helpful feedback along the way.

                    // Learn the way you work: Work directly in the GitHub repositories, issues这个概念是什么, and pull requests with guidance and feedback from our bot
                    // Pick up new skills: Discover new challenges and learn how to work better with GitHub
                    // Track your accomplishments成就: See the courses you’ve completed on your profile page
                    // Getting started with GitHub Learning Lab
                    // Install GitHub Learning Lab as you would install any GitHub App. GitHub Apps take extra steps to be respectful of your privacy but require a little bit of setup to get started.

                    // GitHub Learning Lab creates a repository with your GitHub user account every time you register for a new course. This repository is where you'll work with Learning Lab （in issues and pull requests）.

                    // When you install the app, you can choose to authorize access to all repositories, or grant it access to a single repository.

                    // Recommended approach: Install GitHub Learning Lab on all repositories
                    // Give GitHub Learning Lab general access and trust at your user account level, just like you would for any other OAuth service. This way, you’ll only need to authorize GitHub Learning Lab once on initial installation.
                    // Alternative approach: Install GitHub Learning Lab on a single repository
                    // Grant GitHub Learning Lab access to one repository on your account. Once this permission is granted, the app will be able to create new repositories on your account.
                    // As you register for each course, the app will create a new repository. To work with the bot on a specific course, you’ll need to grant GitHub Learning Lab access to that repository.
                }
                {   // 学习网址： https://lab.github.com/?installation_id=5058793&setup_action=install
                    // curated 策划的
                    // glossary 词汇表
                    // Assignee 受让人
                    // drop-down 下拉
                    // portfolios 系列产品

                }
            }
            {// GitHub training guides: https://guides.github.com/

            }
            {// GitHub training resources: https://services.github.com/resources/
                // 该网址会跳转到 github learning lab 网站 和上面的网站重复
            }
        }
    }
    {   // GitHub glossary        
        // Below are a list of some Git and GitHub specific terms we use across our sites and documentation.

        //     Blame ？？？
        // The "blame" feature in Git describes the last modification to each line of a file, which generally displays the revision, author and time.This is helpful, for example, in tracking down when a feature was added, or which commit led to a particular bug.

        //     Branch
        // A branch is a parallel version of a repository.It is contained within the repository, but does not affect the primary or master branch allowing you to work freely without disrupting the "live" version.When you've made the changes you want to make, you can merge your branch back into the master branch to publish your changes. For more information, see "About branches."( https://help.github.com/en/articles/about-branches )

        // Check ？？？
        // A check is a type of status check on GitHub.See "Status checks."（ https://help.github.com/en/github/getting-started-with-github/github-glossary#status-checks ）

        // Clone
        // A clone is a copy of a repository that lives on your computer instead of on a website's server somewhere, or the act of making that copy. With your clone you can edit the files in your preferred editor and use Git to keep track of your changes用git来跟踪，注意这里的git跟踪当然是本地跟踪 without having to be online. It is, however, connected to the remote version so that changes can be synced同步，如何同步？ 难道是用push命令吗？？？between the two. You can push your local changes to the remote（ https://help.github.com/en/github/getting-started-with-github/github-glossary#remote ） to keep them synced when you're online.

        //     Collaborator
        // A collaborator is a person with read and write access to a repository who has been invited to contribute（ https://help.github.com/en/articles/how-do-i-add-a-collaborator ） by the repository owner.难道是必须邀请的人才行吗？能不能让所有任何人都能贡献？

        //     Commit 
        // A commit, or "revision"[rɪˈvɪʒn]修订, is an individual change to a file(or set of一套 组的意思 files).It's like when you save a file, except with Git, every time you save it creates a unique ID (a.k.a.（相当于also known as） the "SHA" or "hash") that allows you to keep record of what changes were made when and by who. Commits usually contain a commit message which is a brief description of what changes were made.

        // Contributor  注意contributor 和 collaborator 的区别
        // A contributor is someone who has contributed to a project by having a pull request merged but does not have collaborator access.

        //     Dashboard 仪表盘
        // Your personal dashboard is the main hub of your activity on GitHub.From your personal dashboard, you can keep track of issues and pull requests you're following or working on, navigate to your top repositories and team pages, and learn about recent activity in repositories you're watching or participating in.You can also discover new repositories, which are recommended based on users you're following and repositories you have starred. To only view activity for a specific organization, visit your organization's dashboard.For more information, see "About your personal dashboard" （ https://help.github.com/en/articles/about-your-personal-dashboard ）or "About your organization dashboard."（ https://help.github.com/en/articles/about-your-organization-dashboard ）

        // Diff
        // A diff is the difference in changes between two commits, or saved changes.The diff will visually describe what was added or removed from a file since its last commit.

        // Enterprise account 企业账户
        // Enterprise accounts allow you to centrally manage policy and billing for multiple GitHub.com organizations.Enterprise accounts are available with GitHub Enterprise Cloud.For more information, see "About enterprise accounts."（ https://help.github.com/en/articles/about-enterprise-accounts ）

        // Fetch 获取最新的版本的方法。good
        // Fetching refers to getting the latest changes from an online repository without merging them in.Once these changes are fetched you can compare them to your local branches(the code residing on your local machine).

        //     Fork 我账户的 fork 难道一定要手动更新吗？
        // A fork is a personal copy of another user's repository that lives on your account. Forks allow you to freely make changes to a project without affecting the original. Forks remain attached to the original, allowing you to submit a pull request to the original's author to update with your changes.You can also keep your fork up to date by pulling in updates from the original.

        //     Git
        // Git is an open source program for tracking changes in text files, and is the core technology that GitHub, the social and user interface, is built on top of.

        //     Issue   ？？？
        // Issues are suggested improvements, tasks or questions related to the repository.Issues can be created by anyone(for public repositories), and are moderated by repository collaborators.Each issue contains its own discussion forum, can be labeled and assigned to a user.

        //     Markdown
        // Markdown is a simple semantic语意的 file format, not too dissimilar from.doc, .rtf and.txt.Markdown makes it easy for even those without a web - publishing background to write prose(including with links, lists, bullets, etc.) and have it displayed like a website.GitHub supports Markdown, and you can learn about the semantics（ https://help.github.com/en/categories/writing-on-github ）.

        //     Merge
        // Merging takes the changes from one branch(in the same repository or from a fork), and applies them into another.This often happens as a pull request(which can be thought of as a request to merge), or via the command line.A merge can be done automatically via a pull request via the GitHub web interface if there are no conflicting changes, or can always be done via the command line.For more information, see "Merging a pull request."（ https://help.github.com/en/articles/merging-a-pull-request ）

        // Open source
        // Open source software is software that can be freely used, modified, and shared(in both modified and unmodified form) by anyone（ http://opensource.org/definition ）.Today the concept of "open source" is often extended beyond software, to represent a philosophy哲学、思想 of collaboration in which working materials are made available online for anyone to fork, modify, discuss, and contribute to.

        // For more information on open source, specifically how to create and grow an open source project, we've created Open Source Guides（ https://opensource.guide/ ） that will help you foster培养 a healthy open source community. You can also take a free GitHub Learning Lab（ https://lab.github.com/ ） course on maintaining保持联系 open source communities.

        // Organization
        // Organizations are shared accounts where businesses and open - source projects can collaborate across many projects at once.Owners and administrators can manage member access to the organization's data and projects with sophisticated security and administrative features.

        // Private repository
        // Private repositories are repositories that can only be viewed or contributed to by their creator and collaborators the creator specified.

        //     Pull  和fetch的区别在哪里？？？
        // Pull refers to when you are fetching in changes and merging them.For instance, if someone has edited the remote file you're both working on, you'll want to pull in those changes to your local copy so that it's up to date.

        // Pull request
        // Pull requests are proposed changes to a repository submitted by a user and accepted or rejected by a repository's collaborators. Like issues, pull requests each have their own discussion forum. For more information, see "About pull requests."（ https://help.github.com/en/articles/about-pull-requests ）

        // Push
        // Pushing refers to sending your committed changes to a remote repository, such as a repository hosted on GitHub.For instance, if you change something locally, you'd want to then push those changes so that others may access them.

        // Remote
        // This is the version of something that is hosted on a server, most likely GitHub.It can be connected to local clones so that changes can be synced.

        //     Repository
        // A repository is the most basic element概念 元素 of GitHub.They're easiest to imagine as a project's folder.A repository contains all of the project files(including documentation), and stores each file's revision history. Repositories can have multiple collaborators and can be either public or private.

        // SSH key
        // SSH keys are a way to identify yourself to an online server, using an encrypted message.It's as if your computer has its own unique password to another service. GitHub uses SSH keys to securely transfer information to your computer.

        // Status
        // A status is a type of status check on GitHub.See "Status checks."（ https://help.github.com/en/github/getting-started-with-github/github-glossary#status-checks ）

        // Status checks
        // Status checks are external processes, such as continuous integration builds, which run for each commit you make in a repository.For more information, see "About status checks."（ https://help.github.com/en/articles/about-status-checks ）

        // Team
        // Teams are groups of organization members that reflect your company or group's structure with cascading串联 access permissions and mentions.

        // Upstream  注意理解upstream和downstream的区别。
        // When talking about a branch or a fork, the primary branch on the original repository is often referred to as the "upstream", since that is the main place that other changes will come in from.The branch / fork you are working on is then called the "downstream".

        //     User
        // Users are personal GitHub accounts.Each user has a personal profile, and can own multiple repositories, public or private.They can create or be invited to join organizations or collaborate on another user's repository.

        // Further reading
        // The Official Git Glossary: https://www.kernel.org/pub/software/scm/git/docs/gitglossary.html
        // Git Reference: http://gitref.org/
        // Git SCM: https://git-scm.com/doc

    }
}