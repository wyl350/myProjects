{   // npm Documentation: https://docs.npmjs.com/
    // sign up 报名，签合同
    // type in 输入
    // misspell 拼写错
    // prompted 提示


    {   // About npm
        // npm is the world’s largest software registry注册登记处. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well.

        // Here is a quick introduction to npm:
        // npm consists of three distinct components:

        // the website
        // the Command Line Interface (CLI)
        // the registry

        // Use the website to discover packages这是我知道的网站的一个总要功能, set up profiles, and manage other aspects方面 of your npm experience. For example, you can set up Orgs (organizations) to manage access to public or private packages.

        // The CLI runs from a terminal, and is how most developers interact with npm.

        // The registry is a large public database of JavaScript software and the meta-information汇总资料的意思吗？反正就是关于软件的方方面面。 surrounding it.

        // Use npm to . . .
        // Adapt packages of code for your apps, or incorporate packages as they are.
        // Download standalone tools you can use right away.
        // Run packages without downloading using npx.
        // Share code with any npm user, anywhere.
        // Restrict code to specific developers.
        // Create Orgs (organizations) to coordinate package maintenance, coding, and developers.
        // Form virtual teams by using Orgs.
        // Manage multiple versions of code and code dependencies.
        // Update applications easily when underlying code is updated.
        // Discover multiple ways to solve the same puzzle.
        // Find other developers who are working on similar problems and projects.

        // Getting started
        // To get started with npm, you can create an account, which will be available at http://www.npmjs.com/~yourusername.

        // After you set up an npm account, the next step is to use the command line interface (CLI) to install npm. We look forward to seeing what you create!

        // Sharing packages and collaborating with others
        // If you choose to share your packages publicly, there is no cost. To use and share private packages, you need to upgrade your account. To share with others, create organizations, called npm Orgs, and invite others to work with you, privately (for a fee) or publicly (for free). Or you can sign up注册 for a private instance of npm for your company, called npm Enterprise, so you can develop packages internally that are not shared publicly.

        // Learn more
        // To learn more about npm as a product, upcoming new features, and interesting uses of npm, sign up for our newsletter时讯 at npm-weekly, and be sure to follow @npmjs on Twitter.

        // For mentoring指导, tutorials[tu:ˈtɔ:ri:əlz]教程, and learning, visit node school. Consider attending or hosting a nodeschool event (usually free! https://nodeschool.io/ ) at a site near you, or use the self-help tools you can find on the site.

        // CLI reference documentation
        // While relevant相关的 CLI commands are covered throughout this user documentation, the CLI includes command line help, its own documentation section, and instant help (man pages). （ https://docs.npmjs.com/cli-documentation ）
    }
    {   // Getting started

        {   //     Setting up your npm user account

            {   // > Creating a new user account on the public registry
                // Creating a new user account on the public registry
                // If you do not already have an npm user account, you can create an account in order to share and download Javascript packages on the public registry.

                // Note: If you are using an npm Enterprise registry, you must log in with your SSO credentials instead of creating an account. For more information, contact your company's Enterprise admin.
                // Creating an account on the website§
                // Go to the npm signup page.
                // In the user signup form, type in the fields:
                // Full name
                // Public email: Your public email address will be added to the metadata of your packages and will be visible to anyone who downloads your packages. We will also send email to this account when you update packages, as well as occasional product updates and information.
                // Username: The username that will be displayed when you publish packages or interact with other npm users on npmjs.com. Your username must be lower case, and can contain hyphens and numerals.
                // Password: Your password must meet our password guidelines.new account signup form
                // To sign up for our email newsletter, select “Sign up for the npm Weekly”.sign up for the npm weekly checkbox selected
                // Select “Agree to the End User License Agreement and the Privacy Policy”.agree to the end user license agreement and privacy policy checkbox selected
                // Click Create An Account.create an account button
                // Note: After signing up for an npm account, you will receive an account verification email. You must verify your email address in order to publish packages to the registry.
                // Testing your new account with npm login§
                // Use the npm login command to test logging in to your new account.

                // Note: If you misspell your existing account username when you log in with the npm login command, you will create a new account with the misspelled name. For help with accidentally-created accounts, contact npm Support.
                // On the command line, type the following command, replacing
                // """npm login"""
                // When prompted, enter your username, password, and email address.
                // If you have two-factor authentication enabled, when prompted, enter a one-time password.
                // To test that you have successfully logged in, type:
                // """npm whoami"""
                // Your npm username should be displayed.
            }
            {   // > About two-factor authentication
                // Two-factor authentication (2FA) protects against unauthorized access to your account by confirming your identity using:

                // something you know (such as your username and password)
                // something you have (such as a phone or tablet)
                // When you enable 2FA, we will prompt提示 you for a unique one-time password when you perform certain actions on your account or on packages to which you have write access, depending on your 2FA configuration.

                // Note: Two-factor authentication provides the best possible security for your account against attackers. We strongly recommend enabling 2FA on your account as soon as possible after you sign up.
                // Two-factor authentication modes on npm§
                // Two-factor authentication on npm can be enabled for authorization only, or authorization and writes.

                // Authorization only§
                // If you enable 2FA for authorization only, we will request a one-time password for certain authorized actions.

                // 以下是一个表格：
                // Action	        CLI command
                // Log in to npm	npm login
                // Change profile settings (including your password)	npm profile set
                // Change 2FA modes for your user account	npm profile enable-2fa auth-only
                // Disable 2FA for your user account	npm profile disable-2fa
                // Authorization and writes§
                // If you enable 2FA for authorization and writes, we will request a one-time password for certain authorized actions, as well as write actions.

                // 以下是一个表格：
                // Action	CLI command
                // Log in to npm	npm login
                // Change profile settings (including your password)	npm profile set
                // Change 2FA modes for your user account	npm profile enable-2fa auth-only
                // Disable 2FA for your user account	npm profile disable-2fa
                // Create tokens令牌，令牌有什么用？？？	npm token create
                // Revoke tokens	npm token revoke  
                // Publish packages	npm publish
                // Unpublish packages	npm unpublish
                // Deprecate packages	npm deprecate
                // Change package visibility	npm access public/restricted
                // Change user and team package access	npm access grant/revoke
                // Change package 2FA requirements（ https://docs.npmjs.com/requiring-2fa-for-package-publishing-and-settings-modification  ）	N/A

            }
            {   // > Configuring two-factor authentication
                // You can enable two-factor authentication (2FA) on your npm user account to protect against unauthorized access to your account and packages.

                // Prerequisites§
                // Before you enable 2FA on your npm user account, you must:

                // Update your npm client to version 5.5.1 or higher.
                // Install an authenticator application that can generate one-time passwords (such as Authy or Google Authenticator) on a mobile device or second computer that will always be available when you work in your npm account.
                // Note: npm does not accept SMS (text-to-phone) as a 2FA method.
                // Configuring 2FA on the web§
                // Enabling 2FA on the web§
                // Log in to npm with your user account.npm login dialog with username and password fields left blank
                // In the upper right corner of the page, click your profile picture, then click Profile Settings.npm avatar menu with selector over profile settings list item
                // On the profile settings page, under “Two Factor Authentication”, click Enable 2FA.enable 2FA button
                // On the 2FA settings page, select the mode you would like to enable. For more information, see “Two-factor authentication modes on npm”.authorization and publishing radio button selected
                // Click Submit.submit button
                // Open your authenticator application on your phone, and, on the two-step verification page, scan the QR code with your phone.
                // Enter the code generated by the app, then click Verify.verify button for 2fa authentication code form
                // On the recovery code page, copy the recovery codes to your computer or other safe location that is not your second factor device. We recommend using a password manager to save your recovery codes. If you are unable to access your phone, you will need to enter a recovery code when prompted for a one-time password.
                // Click Go back to settings.go back to settings button
                // Removing 2FA on the web§
                // If you have 2FA enabled, you can remove it from your profile settings page.

                // Log in to npm with your user account.npm login dialog with username and password fields left blank
                // In the upper right corner of the page, click your profile picture, then click Profile Settings.npm avatar menu with selector over profile settings list item
                // On the profile settings page, under “Two Factor Authentication”, click Modify 2FA.modify 2fa button
                // On the 2FA settings page, under “What should we protect?”, select “Disable”.disable radio button selected
                // Click Submit.submit button
                // Configuring 2FA from the command line§
                // Enabling 2FA from the command line§
                // Note: Settings you configure on the command line will also apply to your profile settings on the npm website.
                // On the command line, type the npm profile command along with the option for the 2FA mode you want to enable:
                // To enable 2FA for authorization and writes, type:
                // npm profile enable-2fa auth-and-writes
                // To enable 2FA for authorization only, type:
                // npm profile enable-2fa auth-only
                // To add npm to your authenticator application, using the device with the app, you can either:
                // scan the QR code displayed on the command line.
                // type the number displayed below the QR code.
                // When prompted to add an OTP code from your authenticator, on the command line, enter a one-time password generated by your authenticator app.
                // Sending a one-time password from the command line§
                // If you have enabled 2FA auth-and-writes, you will need to send the OTP from the command line for certain commands to work. To do this, append --otp=123456 (where 123456 is the code generated by your authenticator) at the end of the command. Here are a few examples:

                // npm publish [<tarball>|<folder>][--tag <tag>] --otp=123456
                // npm owner add <user > --otp=123456
                // npm owner rm <user> --otp=123456
                // npm dist-tags add <pkg>@<version> [<tag>] --otp=123456
                // npm access edit [<package>) --otp=123456
                // npm unpublish [<@scope>/]<pkg>[@<version>] --otp=123456
                // Removing 2FA from the command line§
                // On the command line, type the following command:
                // npm profile disable-2fa
                // When prompted, enter your npm password:
                // > npm password:   
                // When prompted for a one-time password, enter a password from your authenticator app:
                // >Enter one-time password from your authenticator: 123456
                // Resolving OTP errors§
                // If you are entering what seems to be a valid OTP but you see an error, be sure that you are using the correct authenticator account. If you have multiple authenticator accounts, using an OTP from the wrong account will cause an error.

                // If you see an error when you enter a valid OTP, check that you are using the correct authenticator account.

                // Also, when you reset 2fa after it has been disabled, the authenticator might create a second account with the same name. Please see the authenticator documentation to delete the old account.


            }
            {   // > Recovering your 2FA-enabled account
                // Depending on the circumstances, you may be able to recover access to your 2FA-enabled account.

                // Misplaced second factor device§
                // If you have misplaced the device that provided second-factor authentication, you can use the recovery codes generated when you enabled 2FA to access your account.

                // Locate the recovery codes generated when you enabled 2FA on your account.
                // If you are logged out, on the command line, log in using your npm username and npm password.
                // npm login
                // When prompted for an OTP, enter a recovery code.
                // Once you are logged in, type npm profile disable-2fa and enter your npm password if prompted.
                // Enter an unused recovery code when you see this prompt:
                // >Enter one-time password from your authenticator:
                // npm will confirm that two-factor authentication has been disabled.
                // type npm profile enable-2fa to re-enable 2FA, assign a different device to your account, and generate new recovery codes.
                // Note: Using the recovery codes to re-enable 2FA may create a second authenticator account with the same npm account name. To delete the old authenticator account, follow the steps for the authenticator.
                // Misplaced recovery codes§
                // If you have misplaced both the device that provided second-factor authentication and your recovery codes, we may be unable to help you recover your account. If you have any questions, please contact npm Support.
            }
        }
        {   // Paying for your npm user account
            {   // > Upgrading to a paid user account plan

            }
            // > Viewing, downloading, and emailing receipts for your npm user account
            // > Updating user account billing settings
            // > Downgrading to a free user account plan
        }
        // Managing your npm user account
        // > Managing your profile settings
        // > Changing your npm username
        // > Deleting your npm user account
        // Configuring your local environment
        // > About npm CLI versions
        // > Downloading and installing Node.js and npm
        // > Configuring your registry settings as an npm Enterprise user
        // > Logging in to an npm Enterprise registry from the command line
        // Troubleshooting
        // > Generating and locating npm-debug.log files
        // > Common errors
        // > Try the latest stable version of node
        // > Try the latest stable version of npm
    }
    {   // Packages and modules
        {   // Introduction to packages and modules
            // > About the public npm registry
            // > About packages and modules
            // > About scopes
            // > About public packages
            // > About private packages
        }
        // > npm package scope, access level, and visibility
        // Contributing packages to the registry
        // > Creating a package.json file
        // > Creating Node.js modules
        // > About package README files
        // > Creating and publishing unscoped public packages
        // > Creating and publishing scoped public packages
        // > Creating and publishing private packages
        // > Package name guidelines
        // > Specifying dependencies and devDependencies in a package.json file
        // > About semantic versioning
        // > Adding dist-tags to packages
        // Updating and managing your published packages
        // > Changing package visibility
        // > Adding collaborators to private packages owned by a user account
        // > Updating your published package version number
        // > Deprecating and undeprecating packages or package versions
        // > Transferring a package from a user account to another user account
        // > Transferring a package from a user account to an Org
        // > Transferring a package from an Org to a user account
        // > Unpublishing packages from the registry
        // Getting packages from the registry
        // > Searching for and choosing packages to download
        // > Downloading and installing packages locally
        // > Downloading and installing packages globally
        // > Resolving EACCES permissions errors when installing packages globally
        // > Updating packages downloaded from the registry
        // > Using npm packages in your projects
        // > Using deprecated packages
        // > Uninstalling packages and dependencies
        // Securing your code
        // > About audit reports
        // > Auditing package dependencies for security vulnerabilities
        // > About package PGP signatures
        // > Verifying the PGP signature of a package from the npm public registry
        // > Requiring 2FA for package publishing and settings modification
        // > Reporting a vulnerability in an npm package
    }
    // Integrations
    // Orgs
    // npm Enterprise
    // CLI documentation
}
{   // 中文快速入门
    {// npm 介绍
        // npm 自己升级自己
        // npm i -g npm
    }
    {
        // npm 官方网址： https://www.npmjs.com/ 
        // 该网址上，我的注册信息：
        // fullname：wangyanlei
        // 验证邮箱：wyl350@126.com

        // 登录仅使用以下信息：
        // 账号： wyl350
        // 密码：qq密码  
    }

    { // 初始化项目
        // 一步一步的初始化项目
        // npm init 
        // 一次性初始化项目
        // npm init -y
    }

    {  // npm设置和查看仓库源
        // （在使用npm命令时，如果直接从国外的仓库下载依赖，下载速度很慢，甚至会下载不下来，我们可以更换npm的仓库源，提高下载速度。）
        // 换源相关命令
        // 此处以淘宝镜像为例，如果公司有本地仓库，将地址修改为公司仓库地址(即下面的网址)即可。
        // 一、临时使用 本质上使用的还是npm，但是镜像源不是原来的农民官网，而是设置的网址，这个网址可以是设置的任意有镜像的网址。
        // 单次从淘宝仓库源下载
        // 例如：以下就是分别使用淘宝、npm官方和公司的源分别进行三次临时的下载依赖。
        // npm --registry=https://registry.npm.taobao.org install jquery
        // npm --registry=http://www.npmjs.org install jquery
        // npm --registry=http://127.0.0.1:4873 install jquery

        // 二、使用cnpm命令代替npm
        // 安装cnpm命令,不会改变npm的源（使用npm的话，仍然使用的是npm官网源）
        // npm install -g cnpm --registry=https://registry.npm.taobao.org
        // 例如（这里cnpm 的源就是淘宝源）：cnpm install jquery  

        // 三、npm源的设置（npm的源是可以设置的）
        // 将npm的源设置为淘宝源
        // npm config set registry https://registry.npm.taobao.org
        // 将npm的源设置为淘宝源
        // npm config set registry http://www.npmjs.org
        // 将npm的源设置为公司的源
        // npm config set registry http://127.0.0.1:4873
        // 查看源，可以看到设置过的所有的源
        // npm config get registry
    }
    // 始终不会上传 npm 
    { // 自定义npm包的创建、发布、更新和撤销
        // 更新npm包
        // 最简单方式无非就是改 package.json 关于版本
        // 或者可以执行命令： npm version 1.0.1 同样可以起到作用
        // 更新npm包同样是执行npm publish即可
        // 更新依赖包
        // npm install -save-dev crk-demo-crk
        // 撤销发布的npm包： npm --force unpublish npm-demo-crk

    }
}