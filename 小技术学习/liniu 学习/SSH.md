# SSH 
SSH 为 Secure Shell 的缩写，由 IETF 的网络小组（Network Working Group）所制定；SSH 为建立在应用层基础上(应用层和网络传输层)的安全协议。SSH最初是UNIX系统上的一个程序，后来又迅速扩展到其他操作平台。SSH在正确使用时可弥补网络中的漏洞。SSH客户端适用于多种平台。几乎所有UNIX平台—包括HP-UX、Linux、AIX、Solaris、Digital UNIX、Irix，以及其他平台，都可运行SSH。

SSH是C/S架构。通过客户端与服务端进行沟通。大部分情况下，服务端的OpenSSH 2.x同时支持SSH 1.x和2.x的。当然客户端是可以设置只支持其中的一种。

用处：
  1. 专为远程登录会话
  1. 其他网络服务提供安全性的协议。

功能：
  1. 有效的防止DCS欺骗和IP欺骗。
  1. 压缩传输数据。可以设置是否压缩数据。
  1. SSH提供了多种传输方式。
  1. 构建Socket5代理

***

SSH服务端安装简单，但是配置复杂。
## 服务端的安装
> 一般的linux系统都会自带安装，除非是最小化安装有可能没有安装SSH。安装的时候必须使用 root账户 的权限才能进行安装。
1. Redhat、CentOS等使用RPM包的发行版
    - `yum install openssh-server openssh-client`
1. Debian、Ubantu等使用DEB包的发行版
    -  `apt-get install openssh-server openssh-client`
## SSH客户端选择
> SSH客户端支持平台较多，苹果的OS 系统中terminal自带SSH客户端，与linux SSH客户端的使用方法相同。
1. putty.exe 不需要安装，直接使用，但是只能是单窗口，操作一台主机。
1. SecureCRT 需要安装，且需要复杂的配置过程，配置之后使用当然是非常的方便的。支持很多的协议，支持多窗口，多会话，克隆会话等功能。
1. WinSCP 是linux和windows操作系统之间的一个可视化的传输工具，拖动就可传输，同时支持很多种传输协议。
1. plink.exe 是windows 下一个命令行式的ssh的客户端。
1. puttygen.exe 是一个转换证书的软件。
## SSH 的配置文件 
> SSH 的配置，主要指的是服务端的配置文件
1. /etc/ssh/sshd_config  服务端的配置文件
    ```bash
    Port 22  
    # SSH端口设置，默认使用 22 端口。
    Protocol  2,1
    # 选择SSH协议版本
    ListenAddress   0.0.0.0
    # 监听的网卡IP   一台主机可能有多张网卡
    PermitRootLogin  no
    # 是否允许root登陆，默认是允许的。 可以手动关掉
    PasswordAuthentication  yes
    # 是否开启密码验证
    PermitEmptyPasswords  no
    # 是否允许密码为空
    PrintMotd no
    # 登陆后是否显示一些信息，如上次登陆的时间及地点等
    PrintLastLog  yes
    # 显示上次登陆的信息
    KeepAlive  yes
    # 发送KeepAlive信息给客户端   （保证没有僵尸进程，默认开启）
    MaxStartups  10
    # 允许尚未登入的联机画面数  默认10个
    DenyUsers *
    # 禁止用户登陆，*表示所有的用户   用户访问策略控制
    AllowUsers *
    # 允许用户登陆
    ```
1. /etc/ssh/ssh_config   客户端的配置文件
  > 略


## SSH 的认证方式
1. SSH配置基于口令的认证方式
    > 默认是启用的，linux 操作系统下，客户端的操作方式
    - ssh options username@hostname '远程执行的命令'
1. SSH配置基于秘钥的认证方式
    > 自动化运维和集群运维中就非常的重要。
    1. 服务端配置：
        1. 生成秘钥和公钥文件
            - ssh-kengen 命令可以生成公钥和秘钥文件，
            1. id_rsa  秘钥文件
            1. id_rsa.pub  公钥文件
            > 默认放入 /root/.ssh/ 文件夹中     这个默认的地址，可能时因为这里是给root创建的秘钥，所以是这样的默认位置，如果是其他的用户那？ 
        1. 创建系统所需要的认证文件，
            - touch anthorized_keys
            > 这个文件仍然在 /root/.ssh/ 文件夹中
        1. 将公钥文件的内容写入到创建的认证文件当中
            - cat id_rsa.pub >> authorized
            - cat id_rsa.pub  查看公钥文件内容  这一步不必要
        1. 修改认证文件的权限
            - chmod 600 authorized_keys            
    1. 客户端配置
        1. 将服务端的私钥复制到客户端
            - 使用 WinSCP 软件即可。
        1. putty 工具登陆的时候，输入ip地址和端口号之后就不能直接打开，应该点击左侧的 connection 中的data选项，然后直接输入用户名即可，
        1. 左侧SSH >Auth 载入复制过来的秘钥文件，但是这步是不可行的。因为SSH在服务端生成的公钥格式是openssh 格式的，但是putty支持的是ppk格式的秘钥，所以应该补充转换的一步。
        1. 转换秘钥格式，使用 puttygen 这个工具，打开这个工具后，选择Conversions > import key  出现的对话框中，选择服务端倒过来的秘钥文件，点击 Save private key 按钮，选择位置保存转换的ppk格式秘钥文件
        1. 继续上上步骤中的载入过程，载入上一步骤转换好的ppk格式的秘钥。以后就可方便登陆了。
## ##  访问策略
1. 限制用户连接SSH访问策略
    1. 配置文件 /etc/ssh/sshd_config
    1. 添加以下的配置选项 来实现 基于用户的访问策略和控制
        - DenyUsers  test  #禁止 test 用户登入
        - AllowUsers  test  #允许 test 用户登入
        - DenyGroups  test  #禁止 test 群组登入
        - AllowGroups  test  #允许 test 群组登入
1. 限制IP连接SSH访问策略
    1. iptables防火墙
        1. iptables -A INPUT -p tcp --dport 22 -s 121.0.0.0/8 -j ACCEPT
        1. iptables -A INPUT -p tcp --dport 22 -j DROP
    1. TCP Wrappers
        > /etc/hosts.allow
        - sshd:192.168.0.10/255.255.255.255
        > /etc/hosts.deny
        - sshd:ALL        
        - sshd:ALL EXCEPT 192.168.0.10
        - 注意：TCP Wrappers 只是支持长格式掩码，不能用 192.168.0.0/24       
## SSH 的 命令
1. 重启SSH服务的命令
- service sshd restart
## 运维
### SSH 执行远程主机命令
> 获取远程主机当前系统时间，并以“主机名：时间”的格式保存在本地 remote.txt 文件中。
- ssh options username@hostname '远程执行的命令' 
- ssh username@hostname  'echo ${HOSTNAME}: `date +%Y-%m-%d\ %H:%M:%S`'

### SSH 构建跳板隧道
1. 格式： ssh -t hostA ssh hostB
1. windows 系统的c盘的根目录下面有一个执行文件 plink.exe，进入这个目录后，plink.exe root@192.168.1.11 ，这个命令就能登录 主机。
2. plink.exe root@192.168.1.11 ssh 192.168.1.12  这个命令失败，因为这个过程是需要两个密码的，但是host2主机要求的密码只是传递给了host1，所以本地windows系统只能输入host1的密码，因此整条命令式不能连接host2的，甚至整个过程都是不提示输入host2的主机密码。
2. plink.exe -t root@192.168.1.11 ssh 192.168.1.12  增加-t 参数，就能实现通过host1 连接 host2.  -t 是非常重要的参数。
### 指定秘钥路径、端口、用户及配置文件
秘钥路径默认是存放在用户的home路径中的新建的ssh路径当中，但是秘钥的路径是可以指定路径的。
-i 可以指定秘钥的路径的。
-p 指定SSH端口。
-l 指定用户
-F 指定配置文件   默认的配置文件：sshd_config
-t 指定为终端迫使SSH客户端以交互模式工作，常配合expect使用
ssh -l test 192.168.1.10 -i ~/mykey -p 2015 -F ~/myconfig
以test 用户连接 192.168.1.10 主机，使用当前用户家目录下 mykey 文件作为秘钥文件 指定访问远程主机的2015 端口，并使用myconfig 作为本地ssh客户端设置。
### 调试模式与绑定ip代理
ssh -v hostname
-v参数以类似log的形式返回debug信息，可以帮助运维人员在ssh连接出现问题的时候快速查找问题。
-v的作用就是把ssh后台的 信息打印出来。
-b 参数绑定ip
如果客户端有多于两个以上的ip地址，就要使用这个参数进行指定。
ssh -b 192.168.1.10 root@10.0.0.10
### 构建Socket5代理
hostA 可以访问www.google.com 这个网站，但是hostB不能访问，这里使用这个代理就能实现hostB也能方位www.google.com 这个网站。
构建Socket5代理需要两个条件：
1. 任何一个可以访问的主机，虚拟主机也是可以的。但是必须是linux主机。
1. 有ssh的登陆用户。
1. 本地构建一个ssh隧道就可以了
plink username@hostA -D 2015
plink.exe ubuntu@myvpn.com -i ubuntu.ppk -D 2015
如果访问一个内网的网站，也是可以使用这个方法的。
windows除了使用plink或者MyEntunnel


