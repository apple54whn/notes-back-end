(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{727:function(s,a,e){"use strict";e.r(a);var t=e(11),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"ddl-数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ddl-数据库"}},[s._v("#")]),s._v(" DDL—数据库")]),s._v(" "),e("p",[e("strong",[s._v("DDL 无需 commit")])]),s._v(" "),e("h2",{attrs:{id:"查看所有数据库-🔥"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看所有数据库-🔥"}},[s._v("#")]),s._v(" 查看所有数据库 🔥")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mysql> SHOW DATABASES;\n+--------------------+\n| Database           |\n+--------------------+\n| information_schema |\n| mysql              |\n| performance_schema |\n| sys                |\n+--------------------+\n4 rows in set (0.01 sec)\n\nmysql>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("h2",{attrs:{id:"创建数据库-🔥"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建数据库-🔥"}},[s._v("#")]),s._v(" 创建数据库 🔥")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("CREATE DATABASE [IF NOT EXISTS] 数据库名 [CHARSET=UTF8];\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mysql> CREATE DATABASE IF NOT EXISTS demo;\nQuery OK, 1 row affected, 1 warning (0.00 sec)\n\nmysql>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h2",{attrs:{id:"切换当前数据库-🔥"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#切换当前数据库-🔥"}},[s._v("#")]),s._v(" 切换当前数据库 🔥")]),s._v(" "),e("p",[s._v("对于每一个连接到"),e("code",[s._v("MySQL")]),s._v("服务器的客户端，都有一个"),e("code",[s._v("当前数据库")]),s._v("的概念（也可以称之为"),e("code",[s._v("默认数据库")]),s._v("），我们创建的表默认都会被放到当前数据库中")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("USE 数据库名;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("在介绍表的基本操作之前，我们应该把当前数据库切换到刚刚创建的数据库"),e("code",[s._v("demo")]),s._v("上：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mysql> USE demo;\nDatabase changed\nmysql>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("看到显示了"),e("code",[s._v("Database changed")]),s._v("说明当前数据库已经切换成功了。需要注意的是，在退出当前客户端之后，也就是你输入了"),e("code",[s._v("exit")]),s._v("或者"),e("code",[s._v("quit")]),s._v("命令之后或者直接把当前的黑框框页面关掉，当你再次调用"),e("code",[s._v("mysql -h 主机名 -u 用户名 -p密码")]),s._v("的时候，相当于重新开启了一个客户端，需要重新调用"),e("code",[s._v("USE 数据库名称")]),s._v("的语句来选择一下当前数据库。")]),s._v(" "),e("p",[s._v("其实我们在新启动客户端连接服务器时就可以指定连接建立成功后客户端的当前数据库，只要把数据库名称写在启动客户端的命令"),e("code",[s._v("mysql -h 主机名 -u 用户名 -p密码")]),s._v("后边就好，如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mysql -h localhost -u root -p123456 demo\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"删除数据库-🔥"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除数据库-🔥"}},[s._v("#")]),s._v(" 删除数据库 🔥")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("DROP DATABASE [IF EXISTS] 数据库名;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mysql> DROP DATABASE IF EXISTS demo;\nQuery OK, 0 rows affected, 1 warning (0.00 sec)\n\nmysql>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h2",{attrs:{id:"查看数据库定义信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看数据库定义信息"}},[s._v("#")]),s._v(" 查看数据库定义信息")]),s._v(" "),e("p",[s._v("包括创建语句和字符集")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("SHOW CREATE DATABASE 数据库名;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"修改数据库编码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改数据库编码"}},[s._v("#")]),s._v(" 修改数据库编码")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("ALTER DATABASE 数据库名 CHARACTER  SET UTF8;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"查看当前使用的数据库，mysql-特有"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看当前使用的数据库，mysql-特有"}},[s._v("#")]),s._v(" 查看当前使用的数据库，MySQL 特有")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("SELECT DATABASE();\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);