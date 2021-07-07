(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{639:function(s,a,t){s.exports=t.p+"assets/img/data-model-1.77be7ca8.png"},640:function(s,a,t){s.exports=t.p+"assets/img/image-20190721142046089.8ad6f0d0.png"},641:function(s,a,t){s.exports=t.p+"assets/img/snapshots.b1b35d23.png"},797:function(s,a,t){"use strict";t.r(a);var e=t(11),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"git"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[s._v("#")]),s._v(" Git")]),s._v(" "),e("h2",{attrs:{id:"全量、增量方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#全量、增量方案"}},[s._v("#")]),s._v(" 全量、增量方案")]),s._v(" "),e("ul",[e("li",[s._v("全量：每次存储当前完整信息。适合代码、文本等。Git 采用。")]),s._v(" "),e("li",[s._v("增量：第一次存储完整信息，后续只存储变化的信息。适合视频等大型二进制文件")])]),s._v(" "),e("h2",{attrs:{id:"git-如何识别文件差别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-如何识别文件差别"}},[s._v("#")]),s._v(" Git 如何识别文件差别")]),s._v(" "),e("p",[s._v("Git 采用文件的 SHA-1 值来区分文件内容是否被更改了。")]),s._v(" "),e("p",[s._v("SHA-1 和 MD5 都是 hash 函数。随人对文件内容进行 SHA-1 计算，有可能产生 hash 冲突，但是对于内容来说，概率十分小！并且还必须是存储在同一目录下的才能产生 hash 冲突！")]),s._v(" "),e("p",[s._v("Git 为了防止一个目录下存放过多的 SHA-1 文件，所以采用"),e("strong",[s._v("截取 SHA-1 前2位（将其新建为目录名），后续保存为文件名")]),s._v("！所以完整的 SHA-1 应该是拼接起来的！")]),s._v(" "),e("p",[s._v("可以通过"),e("code",[s._v("git cat-file -t ace1ed8923df..")]),s._v("来查看该Hash的对象类型；"),e("code",[s._v("-p")]),s._v("查看内容；")]),s._v(" "),e("p",[s._v("对象类型有commit，tree，blob。Git 是一个"),e("strong",[s._v("内容")]),s._v("寻址文件系统。Git 的核心部分是一个简单的键值对数据库（key-value data store），你可以向该数据库插入任意类型的内容，它会返回一个键值，通过该键值可以在任意时刻再次检索（retrieve）该内容。")]),s._v(" "),e("img",{staticStyle:{zoom:"50%"},attrs:{src:t(639),alt:"简化版的 Git 数据模型。"}}),s._v(" "),e("img",{staticStyle:{zoom:"33%"},attrs:{src:t(640),alt:"image-20190721142046089"}}),s._v(" "),e("h2",{attrs:{id:"git-简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-简介"}},[s._v("#")]),s._v(" Git 简介")]),s._v(" "),e("p",[s._v("Git 和其它版本控制系统（包括 Subversion 和近似工具）的主要差别在于 Git 对待数据的方法。其它大部分系统以文件变更列表的方式存储信息。这类系统（CVS、Subversion、Perforce、Bazaar 等等）将它们保存的信息看作是一组基本文件和每个文件随时间逐步累积的差异。")]),s._v(" "),e("p",[s._v("Git 更像是把数据看作是对"),e("strong",[s._v("小型文件系统的一组快照")]),s._v("。 每次你提交更新，或在 Git 中保存项目状态时，它主要对当时的全部文件制作一个快照并保存这个快照的索引。 为了高效，如果文件没有修改，Git 不再重新存储该文件，而是只保留一个链接指向之前存储的文件。 Git 对待数据更像是一个 "),e("strong",[s._v("快照流")]),s._v("。")]),s._v(" "),e("p",[e("img",{attrs:{src:t(641),alt:"Git 存储项目随时间改变的快照。"}})]),s._v(" "),e("h2",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),e("p",[s._v("官网有下载安装教程：https://git-scm.com/downloads，也可以使用homebrew安装。")]),s._v(" "),e("p",[s._v("利用"),e("code",[s._v("git —-version")]),s._v("查看安装的Git版本。")]),s._v(" "),e("h2",{attrs:{id:"配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),e("p",[s._v("三个作用域，缺省为"),e("code",[s._v("global")])]),s._v(" "),e("ul",[e("li",[e("p",[e("code",[s._v("git config --local")]),s._v("，只对某个仓库有效，比 global 优先级高（配置文件在.git/config下）")]),s._v(" "),e("ul",[e("li",[s._v("HEAD文件里存储当前操作的分支名，如"),e("code",[s._v("ref: refs/heads/master")])]),s._v(" "),e("li",[s._v("config文件里存放就是配置信息")]),s._v(" "),e("li",[s._v("refs文件夹里存放heads（分支）和tags文件夹")]),s._v(" "),e("li",[s._v("objects文件夹里存放commit，blob，tree等")])])]),s._v(" "),e("li",[e("p",[e("code",[s._v("git config —-global")]),s._v("，对当前用户所有仓库有效（配置文件在~/.gitconfig下）")])]),s._v(" "),e("li",[e("p",[e("code",[s._v("git config —-system")]),s._v("，对系统所有用户的仓库有效，一般不用")])])]),s._v(" "),e("p",[s._v("若要显示config的配置，只需加上"),e("code",[s._v("--list")]),s._v("即可")]),s._v(" "),e("h3",{attrs:{id:"姓名和邮箱"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#姓名和邮箱"}},[s._v("#")]),s._v(" 姓名和邮箱")]),s._v(" "),e("p",[s._v("一般安装后需要配置name和email，配置完成后可以使用上述命令查看")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.name "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'conanan'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.email "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'54whn54@gmail.com'")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代理"}},[s._v("#")]),s._v(" 代理")]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),e("p",[s._v("根据自己 SSR 的 Socks5 本地监听端口修改")])]),s._v(" "),e("ul",[e("li",[e("p",[s._v("HTTP 和 HTTPS 代理")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global http.proxy socks5://127.0.0.1:1086\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global https.proxy socks5://127.0.0.1:1086\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如下配置在 Windows10 中起效，macOS中无效")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global http.proxy http://127.0.0.1:1086\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global https.proxy https://127.0.0.1:1086\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("SSH 代理")]),s._v(" "),e("p",[s._v("在ssh的配置文件~/.ssh/config（没有则新建，有则添加后续）使用ProxyCommand配置：")]),s._v(" "),e("p",[s._v("macOS 如下")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Host *\n  AddKeysToAgent yes\n  UseKeychain yes\n  IdentityFile ~/.ssh/id_rsa\nHost github.com\n  User git\n  Port 22\n  Hostname github.com\n  ProxyCommand nc -x 127.0.0.1:1086 %h %p\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("Windows10 如下")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Host github.com\n\tUser git\n\tPort 22\n\tHostname github.com\n\tProxyCommand connect -S 127.0.0.1:1080 -a none %h %p\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("说明："),e("code",[s._v("-a none")]),s._v("是NO-AUTH模式，不用输密码")])]),s._v(" "),e("li",[e("p",[s._v("取消代理")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global --unset http.proxy\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global --unset https.proxy\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])])]),s._v(" "),e("h2",{attrs:{id:"常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("已有项目代码纳入 Git 管理。会在该文件夹下创建"),e("code",[s._v(".git")]),s._v("文件夹")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init 项目所在文件夹\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#或")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" 项目所在文件夹\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("新建项目直接用 Git 管理。会在当前目录创建"),e("code",[s._v("your_project")]),s._v("文件夹，并在该文件夹中创建"),e("code",[s._v(".git")]),s._v("文件夹")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init your_project\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("克隆仓库")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/libgit2/libgit2 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mylibgit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#这会在当前目录下创建一个名为 “libgit2”或自定义的目录")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("查看该"),e("strong",[s._v("工作目录")]),s._v("中未被 Git 管理的和已被 Git 管理的文件")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("添加到 Git "),e("strong",[s._v("暂存区")]),s._v("。后面可以跟"),e("strong",[s._v("多个文件或文件夹，以空格隔开")]),s._v("；可以使用通配符"),e("code",[s._v("*")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" README.md\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -A "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#添加所有")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -u "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#添加所有在暂存区中改动的文件")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])]),s._v(" "),e("li",[e("p",[e("strong",[s._v("提交暂存区中的文件")]),s._v("到 Git 仓库")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'first commit'")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("查看每次提交日志信息，有提交的Hash，作者（name + email），时间，提交的信息。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])]),s._v(" "),e("h2",{attrs:{id:"修改暂存区中文件名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改暂存区中文件名"}},[s._v("#")]),s._v(" 修改暂存区中文件名")]),s._v(" "),e("p",[s._v("一般会考虑修改工作目录文件名"),e("code",[s._v("mv")]),s._v("，删除暂存区中该文件"),e("code",[s._v("rm")]),s._v("，将新文件添加到暂存区。使用 Git 命令就可以很方便：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" readme readme.md\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"查看版本历史"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看版本历史"}},[s._v("#")]),s._v(" 查看版本历史")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("查看当前分支每次提交日志信息，有提交的Hash，作者（name + email），时间，提交的信息。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("查看最近n次")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log -n2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("只查看提交信息（前面还有个不知道什么的7位16进制码）")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log --oneline\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("查看所有分支的log，若写分支名则是指定分支的log")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log --all\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("图形化")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log --graph\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("真图形化")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("gitk\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])]),s._v(" "),e("h2",{attrs:{id:"分离头指针"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分离头指针"}},[s._v("#")]),s._v(" 分离头指针")]),s._v(" "),e("p",[s._v("HEAD指向一个commit，但是没有绑定到一个分支上，在切换分支时有可能Git会删掉。根据提示创建个分支即可。")]),s._v(" "),e("h2",{attrs:{id:"合并分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#合并分支"}},[s._v("#")]),s._v(" 合并分支")]),s._v(" "),e("h3",{attrs:{id:"merge-基本够用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#merge-基本够用"}},[s._v("#")]),s._v(" merge—基本够用")]),s._v(" "),e("p",[s._v("dev1 分支、dev2 分支 与 master head 分支三个进行合并！并生成一个 merge 提交！")]),s._v(" "),e("h3",{attrs:{id:"rebase"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rebase"}},[s._v("#")]),s._v(" rebase")]),s._v(" "),e("p",[s._v("在 dev1 分支执行 dev2 的 rebase，会将 dev2 的 commit 提前，dev1 的 commit 追加在 dev1 后。此时 dev1 分支就是一条长链了，删除 dev2 分支，此时整个提交链路就是一条直线的线性！")]),s._v(" "),e("p",[s._v("只推荐对自己本地仓库进行 rebase，不要对远程仓库进行 rebase ！因为由于它会修改一些原始提交，然后更新它的数据！")]),s._v(" "),e("h3",{attrs:{id:"cherry-pick"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cherry-pick"}},[s._v("#")]),s._v(" cherry-pick")]),s._v(" "),e("p",[s._v("在 dev1 分支执行，只合并 dev2 的某一 commit")]),s._v(" "),e("h2",{attrs:{id:"stash-隐藏"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stash-隐藏"}},[s._v("#")]),s._v(" stash—隐藏")]),s._v(" "),e("p",[s._v("开发修改文件进行一半时，没有add，没有commit。此时要拉取服务器最新代码，由于本地有修改，所以拉取代码时可能报错，所以此时需要先将开发的文件进行 stash 隐藏。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git stash\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("拉取完代码后")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git stash list -- 查看已经 stash 的文件\ngit stash apply -- 反向 stash 操作\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);